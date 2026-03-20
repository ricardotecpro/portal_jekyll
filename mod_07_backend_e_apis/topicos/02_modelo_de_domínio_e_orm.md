---
layout: default
title: Módulo Back-end: Modelo de Domínio e ORM 🗄️
---

# Módulo Back-end: Modelo de Domínio e ORM 🗄️

Este capítulo foca na criação de um modelo de domínio robusto e em como mapeá-lo para um banco de dados relacional usando uma ferramenta de Mapeamento Objeto-Relacional (ORM), um passo essencial no desenvolvimento back-end.

## Pré-requisitos de Estudo 📚

Para um melhor aproveitamento, é recomendável revisar alguns conceitos-chave. Os materiais a seguir servem como um excelente ponto de partida:

  - **Álgebra Relacional e SQL**: Uma revisão para relembrar as operações fundamentais de bancos de dados com SQL.
  - **Java com JDBC**: É importante entender como o acesso a banco de dados funciona na prática sem o uso de frameworks ORM, utilizando apenas Java puro e JDBC.
  - **Introdução a ORM com JPA/Hibernate**: Um nivelamento teórico e prático sobre o que é ORM e a especificação JPA, que é a base para o Spring Data JPA.

## Modelo de Domínio: DSCommerce 🛒

Para ilustrar os conceitos, vamos utilizar o modelo de um sistema de e-commerce fictício, o DSCommerce. O diagrama abaixo representa as principais entidades e seus relacionamentos.

A seguir, uma descrição das entidades (classes) e seus atributos, já traduzidos para o português:

  - **`Usuario`**: Representa o cliente do sistema.
      - `id`, `nome`, `email`, `telefone`, `dataNascimento`, `senha`, `papeis` (roles).
  - **`Produto`**: O item à venda.
      - `id`, `nome`, `descricao`, `preco`, `imgUrl`.
  - **`Categoria`**: Usada para agrupar produtos.
      - `id`, `nome`.
  - **`Pedido`**: O pedido de compra feito por um `Usuario`.
      - `id`, `instante` (momento do pedido), `status`.
      - Relaciona-se com um `Usuario` (cliente).
  - **`StatusPedido` (Enum)**: Representa os possíveis status de um pedido.
      - `AGUARDANDO_PAGAMENTO`, `PAGO`, `ENVIADO`, `ENTREGUE`, `CANCELADO`.
  - **`ItemPedido`**: É a classe de associação que representa a relação muitos-para-muitos entre `Pedido` e `Produto`, pois ela contém atributos próprios.
      - `quantidade`, `preco` (preço do produto no momento da compra).
  - **`Pagamento`**: Detalhes do pagamento associado a um `Pedido`.
      - `id`, `momento` (momento do pagamento).

## Configuração do Banco de Dados (H2) ⚙️

Para o ambiente de desenvolvimento e testes, utilizaremos o banco de dados em memória H2. Abaixo estão as configurações necessárias no arquivo `application.properties` de um projeto Spring Boot.

```properties
# Ativa o perfil 'test', ideal para desenvolvimento e testes
spring.profiles.active=test

# Dados de conexão com o banco H2 em memória
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=

# Habilita o console web do H2 para fácil visualização do banco
spring.h2.console.enabled=true
spring.h2.console.path=/h2-console

# Configurações do JPA/Hibernate
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
spring.jpa.defer-datasource-initialization=true

# Mostra no console o SQL gerado pelo Hibernate (útil para debug)
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
```

### Recomendação para Tipos de Data e Hora ⏱️

Ao trabalhar com o tipo `Instant` do Java, que representa um marco temporal no padrão UTC, é recomendado mapeá-lo para um tipo de coluna no banco que não armazene fuso horário, garantindo consistência.

```java
// Garante que o campo será criado como TIMESTAMP no banco, sem time zone
@Column(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
private Instant momento;
```

## Mapeamento dos Relacionamentos com JPA 🔗

A seguir, vemos como traduzir os relacionamentos do nosso diagrama de classes para código Java usando anotações da especificação JPA.

### Relacionamento Muitos-para-Um (Pedido -\> Usuário)

Um `Usuário` pode ter muitos `Pedidos`, mas um `Pedido` pertence a um único `Usuário`.

```java
// Na classe Pedido
public class Pedido {
    // ...
    @ManyToOne // Anotação para 'muitos-para-um'
    @JoinColumn(name = "cliente_id") // Define a chave estrangeira na tabela de pedidos
    private Usuario cliente;
}
```

```java
// Na classe Usuario (lado "um")
public class Usuario {
    // ...
    // 'mappedBy' indica que o mapeamento já foi feito pelo campo 'cliente' na classe Pedido
    @OneToMany(mappedBy = "cliente")
    private List<Pedido> pedidos = new ArrayList<>();
}
```

### Relacionamento Um-para-Um (Pagamento -\> Pedido)

Um `Pedido` tem um (`ou zero`) `Pagamento`. O mapeamento é bidirecional.

```java
// Na classe Pedido
public class Pedido {
    // ...
    // cascade = CascadeType.ALL: todas as operações (salvar, deletar, etc.)
    // feitas no Pedido serão replicadas para o Pagamento associado.
    @OneToOne(mappedBy = "pedido", cascade = CascadeType.ALL)
    private Pagamento pagamento;
}
```

```java
// Na classe Pagamento
public class Pagamento {
    // ...
    @OneToOne
    @MapsId // Usa a chave primária do Pedido como chave primária do Pagamento
    private Pedido pedido;
}
```

### Relacionamento Muitos-para-Muitos (Produto \<-\> Categoria)

Um `Produto` pode estar em várias `Categorias`, e uma `Categoria` pode conter vários `Produtos`.

```java
// Na classe Produto (lado dono do relacionamento)
public class Produto {
    // ...
    @ManyToMany
    // Define a tabela de junção (associativa) que ligará produtos e categorias
    @JoinTable(name = "tb_produto_categoria",
        joinColumns = @JoinColumn(name = "produto_id"),
        inverseJoinColumns = @JoinColumn(name = "categoria_id"))
    private Set<Categoria> categorias = new HashSet<>();
}
```

```java
// Na classe Categoria
public class Categoria {
    // ...
    // 'mappedBy' informa que o mapeamento já foi feito em Produto
    @ManyToMany(mappedBy = "categorias")
    private Set<Produto> produtos = new HashSet<>();
}
```

### Muitos-para-Muitos com Atributos (Pedido \<-\> Produto)

A relação entre `Pedido` e `Produto` precisa de uma classe de associação (`ItemPedido`) porque o relacionamento em si possui dados: `quantidade` e `preco`.

**1. Chave Primária Composta (`ItemPedidoPK`)**
Primeiro, criamos uma classe para a chave primária composta, que será embutida na classe de associação.

```java
@Embeddable // Indica que esta classe pode ser embutida em outra entidade
public class ItemPedidoPK {

    @ManyToOne
    @JoinColumn(name = "pedido_id")
    private Pedido pedido;

    @ManyToOne
    @JoinColumn(name = "produto_id")
    private Produto produto;

    // getters e setters
}
```

**2. Entidade de Associação (`ItemPedido`)**
Esta entidade usa a chave composta e adiciona os outros atributos.

```java
@Entity
@Table(name = "tb_item_pedido")
public class ItemPedido {

    @EmbeddedId // Usa a classe ItemPedidoPK como chave primária
    private ItemPedidoPK id = new ItemPedidoPK();

    private Integer quantidade;
    private Double preco;
    
    // Construtores, getters e setters
    public ItemPedido() {}

    public ItemPedido(Pedido pedido, Produto produto, Integer quantidade, Double preco) {
        id.setPedido(pedido);
        id.setProduto(produto);
        this.quantidade = quantidade;
        this.preco = preco;
    }

    public Pedido getPedido() {
        return id.getPedido();
    }
    // ...
}
```

**3. Mapeamento nas Entidades Principais**
Finalmente, as entidades `Pedido` e `Produto` são mapeadas para a coleção de `ItemPedido`.

```java
// Na classe Pedido
public class Pedido {
    // ...
    @OneToMany(mappedBy = "id.pedido")
    private Set<ItemPedido> itens = new HashSet<>();

    public List<Produto> getProdutos() {
        return itens.stream().map(x -> x.getProduto()).toList();
    }
}
```

```java
// Na classe Produto
public class Produto {
    // ...
    @OneToMany(mappedBy = "id.produto")
    private Set<ItemPedido> itens = new HashSet<>();

    public List<Pedido> getPedidos() {
        return itens.stream().map(x -> x.getPedido()).toList();
    }
}
```

## Populando o Banco de Dados (Seeding) 🌱

Para que a aplicação inicie com dados pré-cadastrados (útil para testes e demonstrações), podemos usar a técnica de *database seeding*.

Com o Spring Boot, basta criar um arquivo chamado `import.sql` na pasta `src/main/resources`. O Spring o executará automaticamente na inicialização. É recomendado usar um comando `INSERT` para cada registro a ser inserido.

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)

