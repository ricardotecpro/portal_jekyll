# Módulo Back-end: JPA, Consultas SQL e JPQL 🐘

Este capítulo aprofunda o uso da JPA (Jakarta Persistence API), abordando o ciclo de vida das entidades, estratégias para otimizar o acesso a dados e as diferentes formas de se realizar consultas, desde as mais simples até as mais complexas com SQL e JPQL.

## Gerenciamento de Entidades com JPA

### Sessão JPA e EntityManager

A JPA gerencia as entidades do sistema durante o que chamamos de **sessão JPA**. Uma sessão corresponde ao contexto em que a JPA realiza operações no banco de dados.

O objeto central para isso é o **`EntityManager`**, que encapsula a conexão com o banco e gerencia o estado das entidades.

  * **JPA "Raiz" (Nativa)**: O controle é manual. O desenvolvedor precisa criar o `EntityManager` a partir de um `EntityManagerFactory` e gerenciar as transações explicitamente.
  * **Spring Data JPA**: O processo é abstraído. O Spring gerencia o `EntityManager` e as transações para nós, geralmente através da anotação `@Transactional` e do uso de Repositórios.

| JPA Raiz (Manual) | Spring Data JPA (Automatizado) |
| :--- | :--- |
| ` java EntityManagerFactory emf = ...; EntityManager em = emf.createEntityManager(); Product prod = new Product(); em.getTransaction().begin(); em.persist(prod); em.getTransaction().commit();  ` | \`\`\`java
@Autowired
private ProductRepository repository;

@Transactional
public void meuMetodo() {
Product prod = new Product();
repository.save(prod);
}

````|

### Estados de uma Entidade

Uma entidade gerenciada pela JPA passa por diferentes estados durante seu ciclo de vida:

![Diagrama de Estados de uma Entidade JPA](https://storage.googleapis.com/assistme-static-mesh-staging-output/images/assistme_2024_08_09_19_30_31_695_984764.png)

* **Transient (Transiente)**: Um objeto recém-criado que ainda não foi associado à sessão JPA. Ele não tem representação no banco de dados.
* **Managed (Gerenciado)**: O objeto foi associado à sessão JPA (após um `persist` ou `find`). Todas as alterações feitas neste objeto serão sincronizadas com o banco de dados ao final da transação.
* **Detached (Desanexado)**: O objeto já foi gerenciado, mas a sessão JPA foi fechada. As alterações feitas nele não serão mais sincronizadas automaticamente.
* **Removed (Removido)**: Uma entidade gerenciada que foi marcada para remoção do banco de dados (após um `remove`).

### Salvando Entidades Associadas

Ao salvar uma entidade que se relaciona com outra, podemos passar a referência do objeto associado no corpo da requisição JSON.

* **Relacionamento Para-Um (Ex: Pessoa e Departamento)**

    ![Diagrama Pessoa-Departamento](https://storage.googleapis.com/assistme-static-mesh-staging-output/images/assistme_2024_08_09_19_30_31_695_984764.png)

    Para associar uma nova `Pessoa` a um `Departamento` existente, basta passar o ID do departamento no JSON.

    ```json
    POST http://localhost:8080/people
    {
        "name": "Nova Pessoa",
        "salary": 8000.0,
        "department": {
            "id": 1
        }
    }
    ```

* **Relacionamento Para-Muitos (Ex: Produto e Categorias)**

    ![Diagrama Produto-Categoria](https://storage.googleapis.com/assistme-static-mesh-staging-output/images/assistme_2024_08_09_19_30_31_696_079764.png)

    Para associar um novo `Produto` a várias `Categorias` existentes, passamos uma lista de objetos contendo os IDs das categorias.

    ```json
    POST http://localhost:8080/products
    {
        "name": "Produto novo",
        "price": 1000.0,
        "categories": [
            { "id": 2 },
            { "id": 3 }
        ]
    }
    ```

## Performance e Carregamento de Dados

### O Problema das Consultas Desnecessárias (N+1)

O grande vilão de performance em aplicações que usam JPA são as **idas e vindas desnecessárias ao banco de dados**. A causa mais comum é o carregamento tardio (*lazy loading*) de entidades associadas, que leva ao famoso **problema N+1 consultas**.

Isso ocorre quando você busca N entidades e, depois, para cada uma delas, faz uma nova consulta para buscar um dado associado, resultando em N+1 consultas totais em vez de apenas uma ou duas.

### Carregamento Padrão: EAGER vs. LAZY

Por padrão, a JPA define o tipo de carregamento (fetch) das associações da seguinte forma:

* Relacionamentos **Para-Um** (`@ManyToOne`, `@OneToOne`): **EAGER** (Ansioso). O dado associado é carregado imediatamente junto com a entidade principal.
* Relacionamentos **Para-Muitos** (`@OneToMany`, `@ManyToMany`): **LAZY** (Preguiçoso). Os dados associados (a coleção) só são carregados do banco quando são efetivamente acessados no código.

### Estratégias para Otimizar Consultas

1.  **Atributo Fetch (Não Recomendado)**: É possível alterar o comportamento padrão diretamente na anotação (ex: `@ManyToOne(fetch = FetchType.LAZY)`). **Cuidado**: esta abordagem deve ser evitada, pois a mudança afeta a entidade globalmente e pode gerar efeitos colaterais indesejados em outras partes do sistema.

2.  **Cláusula `JOIN FETCH` (Ideal)**: A melhor forma de resolver o problema N+1 é instruir a JPA a buscar os dados associados na mesma consulta usando `JOIN FETCH`.

    ```java
    public interface EmployeeRepository extends JpaRepository<Employee, Long> {

        // Busca os funcionários e já carrega os departamentos associados na mesma consulta SQL
        @Query("SELECT obj FROM Employee obj JOIN FETCH obj.department")
        List<Employee> findEmployeesWithDepartments();
    }
    ```
    > **Nota:** A cláusula `JOIN FETCH` não funciona para buscas paginadas no Spring Data JPA.

### Cache de Primeiro Nível e Transações

* **Cache em Memória**: A JPA mantém um "cache de primeiro nível" (mapa de identidade) das entidades gerenciadas. Se você busca uma entidade e precisa dela novamente na mesma sessão, a JPA a retorna da memória em vez de consultar o banco de dados novamente.
* **`@Transactional` e `open-in-view`**:
    * A anotação `@Transactional` do Spring assegura que a transação com o banco de dados seja resolvida corretamente ao final do método e que todas as pendências "lazy" sejam carregadas enquanto a transação estiver ativa.
    * A propriedade `spring.jpa.open-in-view=false` (recomendado) faz com que a sessão JPA seja encerrada assim que os dados saem da camada de serviço, prevenindo o carregamento lazy na camada de controller.

## Consultas Customizadas com Spring Data JPA

### Query Methods

O Spring Data JPA permite criar consultas customizadas apenas declarando um método no repositório com um nome específico.

* **Polêmica**: Vale a pena usar?
    * Para consultas **muito simples**: Sim, é prático. (Ex: `findByName(String name)`).
    * Para consultas **complexas**: É melhor escrever a consulta manualmente para ter mais clareza e controle.

### JPQL (JPA Query Language)

JPQL é a linguagem de consulta específica da JPA. Ela é muito parecida com SQL, mas opera sobre as **entidades e seus atributos** em vez de tabelas e colunas.

| SQL | JPQL |
| :--- | :--- |
| `SELECT * FROM tb_employee WHERE UPPER(name) LIKE 'MARIA%'` | `SELECT obj FROM Employee obj WHERE UPPER(obj.name) LIKE 'MARIA%'` |
| `SELECT tb_employee.* FROM tb_employee INNER JOIN tb_department ON ... WHERE tb_department.name = 'Financeiro'` | `SELECT obj FROM Employee obj WHERE obj.department.name = 'Financeiro'` |

* **Vantagens da JPQL**: Pode simplificar consultas (especialmente as que envolvem navegação entre objetos), integra-se bem com recursos do Spring Data JPA (como paginação) e retorna objetos já gerenciados pela JPA.
* **Desvantagens da JPQL**: Consultas complexas podem se tornar difíceis de escrever e validar, e existe uma curva de aprendizado para uma tecnologia específica.

### SQL Nativo (Raiz)

Para consultas muito complexas, que usam recursos específicos do banco de dados ou que são mais fáceis de testar diretamente no cliente SQL, usar SQL nativo é a melhor opção.

## Exercícios Práticos com SQL 🏋️

### Preparação do Ambiente PostgreSQL

Para praticar, você pode configurar um banco de dados PostgreSQL de duas formas:

1.  **Instalação Direta**: Instale o PostgreSQL (versão 12, 13 ou 14) e um cliente de banco de dados como pgAdmin ou DBeaver.
2.  **Docker**: Utilizar uma imagem Docker do PostgreSQL, o que facilita a criação de ambientes isolados.

### Exercícios Recomendados (Beecrowd)

A plataforma Beecrowd (antigo URI Online Judge) possui uma excelente seção de exercícios de SQL. A recomendação é seguir por grupos de dificuldade:

* **Grupo 1 (Projeção, Restrição)**: 2602, 2603, 2604, etc.
* **Grupo 2 (JOIN)**: 2605, 2606, 2611, etc.
* **Grupo 3 (GROUP BY, Subconsultas)**: 2609, 2993, 2994, etc.
* **Grupo 4 (Expressões)**: 2610, 2625, 2738, etc.
* **Grupo 5 (Diferença, União)**: 2616, 2737, 2740, etc.
* **Grupo 6 (Difíceis)**: 2988, 2989, 2991, etc.

### Estudo de Caso (Diagrama URI 2990)

Muitos exercícios utilizam um modelo de dados similar ao diagrama abaixo, que envolve empregados, departamentos, projetos e supervisão.

![Diagrama para exercício URI 2990](https://storage.googleapis.com/assistme-static-mesh-staging-output/images/assistme_2024_08_09_19_30_31_696_170764.png)
````

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)
