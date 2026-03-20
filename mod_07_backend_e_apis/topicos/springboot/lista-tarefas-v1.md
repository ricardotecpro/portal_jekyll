---
layout: default
title: Back-End
---

# Back-End

### **Construindo e Testando a API do To-Do List**

**Objetivo:** Criar, passo a passo, o backend completo da nossa aplicação, e aprender a testar cada funcionalidade de forma isolada usando uma ferramenta de cliente HTTP.

-----

### **Etapa 0: Configuração Inicial do Projeto**

Vamos usar o **Spring Initializr** para criar a estrutura base do nosso projeto de forma rápida e segura.

1.  Acesse o site: [https://start.spring.io](https://start.spring.io)

2.  Preencha os campos da seguinte forma:

      * **Project:** Maven
      * **Language:** Java
      * **Spring Boot:** A versão estável mais recente (ex: 3.x.x).
      * **Project Metadata:**
          * **Group:** `br.com.curso`
          * **Artifact:** `listatarefas-api`
          * **Name:** `listatarefas-api`
          * **Description:** API para gerenciamento de tarefas
          * **Package name:** `br.com.curso.listatarefas.api`
      * **Packaging:** Jar
      * **Java:** 21 (ou a versão que você instalou)

3.  No lado direito, em **Dependencies**, clique em "ADD DEPENDENCIES" e adicione as seguintes:

      * `Spring Web`: Essencial para criar aplicações web e APIs REST.
      * `Spring Data JPA`: Facilita a comunicação com o banco de dados.
      * `H2 Database`: Um banco de dados em memória, perfeito para desenvolvimento e testes.
      * `Lombok`: Ajuda a reduzir a quantidade de código repetitivo (como getters, setters e construtores).

4.  Clique no botão **GENERATE**. Um arquivo `.zip` será baixado.

5.  Descompacte o arquivo e abra a pasta gerada na sua IDE preferida (IntelliJ ou VS Code).

A estrutura de pastas inicial será parecida com esta:

```
listatarefas-api/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── br/com/curso/listatarefas.api/
│   │   │       └── listatarefas.apiApplication.java
│   │   └── resources/
│   │       └── application.properties
│   └── test/
└── pom.xml
```

-----

### **Etapa 1: Criando o Model (A Entidade `Tarefa`)**

O Model representa os dados da nossa aplicação. Vamos criar a classe `Tarefa`.

1.  Dentro do pacote `br.com.curso.listatarefas.api`, crie um novo pacote chamado `tarefa`.
2.  Dentro de `br.com.curso.listatarefas.api.tarefa`, crie um novo arquivo Java chamado `Tarefa.java`.

**Código para `Tarefa.java`:**

```java
package br.com.curso.listatarefas.api.tarefa;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

/**
 * @Entity: Marca esta classe como uma entidade JPA (uma tabela no banco de dados).
 * @Table(name = "tb_tarefas"): Especifica o nome da tabela no banco.
 * @Data (Lombok): Gera automaticamente getters, setters, toString, equals e hashCode.
 */
@Data
@Entity
@Table(name = "tb_tarefas")
public class Tarefa {

    /**
     * @Id: Marca este campo como a chave primária da tabela.
     * @GeneratedValue: Configura a estratégia de geração da chave primária.
     * IDENTITY significa que o próprio banco de dados irá gerar e gerenciar o valor.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String descricao;
    private boolean concluida;
}
```

-----

### **Etapa 2: Criando o Repository (A Camada de Acesso a Dados)**

O Repository é uma interface que nos dá os métodos para interagir com o banco de dados (salvar, buscar, deletar, etc.) sem precisarmos escrever SQL.

1.  No mesmo pacote `br.com.curso.listatarefas.api.tarefa`, crie uma nova **interface** Java chamada `TarefaRepository.java`.

**Código para `TarefaRepository.java`:**

```java
package br.com.curso.listatarefas.api.tarefa;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * JpaRepository é uma interface do Spring Data JPA que já vem com métodos CRUD prontos.
 * Precisamos apenas dizer qual a Entidade que ele irá gerenciar (Tarefa) e qual o tipo da chave primária (Long).
 */
public interface TarefaRepository extends JpaRepository<Tarefa, Long> {
}

```

É só isso\! O Spring Data JPA implementará essa interface em tempo de execução para nós.

-----

### **Etapa 3: Criando a Camada de Serviço (Regras de Negócio)**

É uma boa prática ter uma camada de Serviço para conter a lógica de negócio, mantendo o Controller "limpo".

1.  No pacote `br.com.curso.listatarefas.api.tarefa`, crie uma nova classe Java chamada `TarefaService.java`.

**Código para `TarefaService.java`:**

```java
package br.com.curso.listatarefas.api.tarefa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * @Service: Marca a classe como um componente de serviço do Spring,
 * onde colocamos a lógica de negócio.
 */
@Service
public class TarefaService {

    // @Autowired: O Spring irá injetar uma instância de TarefaRepository aqui.
    @Autowired
    private TarefaRepository tarefaRepository;

    public Tarefa criar(Tarefa tarefa) {
        // Poderíamos ter validações aqui antes de salvar
        return tarefaRepository.save(tarefa);
    }

    public List<Tarefa> listarTodas() {
        return tarefaRepository.findAll();
    }

    public Optional<Tarefa> buscarPorId(Long id) {
        return tarefaRepository.findById(id);
    }

    public Tarefa atualizar(Long id, Tarefa tarefaAtualizada) {
        // Verifica se a tarefa existe antes de tentar atualizar
        return tarefaRepository.findById(id)
            .map(tarefaExistente -> {
                tarefaExistente.setDescricao(tarefaAtualizada.getDescricao());
                tarefaExistente.setConcluida(tarefaAtualizada.isConcluida());
                return tarefaRepository.save(tarefaExistente);
            }).orElseThrow(() -> new RuntimeException("Tarefa não encontrada com o id: " + id));
    }

    public void deletar(Long id) {
        // Verifica se a tarefa existe antes de deletar para evitar erros
        if (!tarefaRepository.existsById(id)) {
            throw new RuntimeException("Tarefa não encontrada com o id: " + id);
        }
        tarefaRepository.deleteById(id);
    }
}
```

-----

### **Etapa 4: Criando o Controller (A API REST)**

O Controller é a porta de entrada da nossa API. Ele recebe as requisições HTTP e as direciona para a camada de Serviço.

1.  No pacote `br.com.curso.listatarefas.api.tarefa`, crie uma nova classe Java chamada `TarefaController.java`.

**Código para `TarefaController.java`:**

```java
package br.com.curso.listatarefas.api.tarefa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @RestController: Combina @Controller e @ResponseBody, simplificando a criação de APIs REST.
 * @RequestMapping: Define o caminho base para todos os endpoints neste controller.
 * @CrossOrigin: Permite que requisições de outras origens (como nosso frontend Angular) sejam aceitas.
 */
@RestController
@RequestMapping("/api/tarefas")
@CrossOrigin(origins = "*")
public class TarefaController {

    @Autowired
    private TarefaService tarefaService;

    // CREATE
    @PostMapping
    public Tarefa criarTarefa(@RequestBody Tarefa tarefa) {
        return tarefaService.criar(tarefa);
    }

    // READ - Listar Todas
    @GetMapping
    public List<Tarefa> listarTarefas() {
        return tarefaService.listarTodas();
    }

    // READ - Buscar por ID
    @GetMapping("/{id}")
    public ResponseEntity<Tarefa> buscarTarefaPorId(@PathVariable Long id) {
        return tarefaService.buscarPorId(id)
                .map(ResponseEntity::ok) // Se encontrar, retorna 200 OK com a tarefa
                .orElse(ResponseEntity.notFound().build()); // Se não, retorna 404 Not Found
    }

    // UPDATE
    @PutMapping("/{id}")
    public ResponseEntity<Tarefa> atualizarTarefa(@PathVariable Long id, @RequestBody Tarefa tarefa) {
        try {
            Tarefa atualizada = tarefaService.atualizar(id, tarefa);
            return ResponseEntity.ok(atualizada);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    // DELETE
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarTarefa(@PathVariable Long id) {
        try {
            tarefaService.deletar(id);
            return ResponseEntity.noContent().build(); // Retorna 204 No Content, sucesso sem corpo
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
```

**Neste ponto, a nossa API está completa\!** Vamos executá-la.

1.  Encontre o arquivo `listatarefas.apiApplication.java`.
2.  Clique com o botão direito sobre ele e selecione "Run 'listatarefas.apiApplication'".
3.  O console da sua IDE mostrará o log de inicialização do Spring Boot. Se tudo deu certo, você verá uma mensagem como `Started listatarefas.apiApplication in X.XXX seconds`.

-----

### **Etapa 5: Testando a API com Postman, Insomnia, YARC! **

Agora vamos agir como se fôssemos o frontend, enviando requisições para a nossa API em execução.

#### **Teste 1: Criar uma Tarefa (CREATE)**

  * **Método HTTP:** `POST`
  * **URL:** `http://localhost:8080/api/tarefas`
  * **Body:** Vá para a aba "Body", selecione a opção `raw` e o formato `JSON`.
  * **Conteúdo do Body:**
    ```json
    {
        "descricao": "Aprender a testar APIs REST",
        "concluida": false
    }
    ```
  * **Ação:** Clique em "Send".
  * **Resultado Esperado:** Você deve receber um status `200 OK` e, no corpo da resposta, o JSON da tarefa que você acabou de criar, agora com um `id` (provavelmente `1`).

#### **Teste 2: Listar Todas as Tarefas (READ)**

  * **Método HTTP:** `GET`
  * **URL:** `http://localhost:8080/api/tarefas`
  * **Ação:** Clique em "Send".
  * **Resultado Esperado:** Status `200 OK` e um array JSON no corpo da resposta contendo a tarefa criada no passo anterior.

#### **Teste 3: Atualizar uma Tarefa (UPDATE)**

  * **Método HTTP:** `PUT`
  * **URL:** `http://localhost:8080/api/tarefas/1` (use o `id` da tarefa que você criou)
  * **Body:** Novamente, `raw` e `JSON`.
  * **Conteúdo do Body:**
    ```json
    {
        "descricao": "API testada e atualizada com sucesso!",
        "concluida": true
    }
    ```
  * **Ação:** Clique em "Send".
  * **Resultado Esperado:** Status `200 OK` e o JSON da tarefa com os dados atualizados.

#### **Teste 4: Deletar uma Tarefa (DELETE)**

  * **Método HTTP:** `DELETE`
  * **URL:** `http://localhost:8080/api/tarefas/1`
  * **Ação:** Clique em "Send".
  * **Resultado Esperado:** Status `204 No Content`. A resposta não terá corpo, o que é normal para esta operação.

#### **Verificação Final**

Repita o **Teste 2 (Listar Todas)**. O resultado esperado agora é um status `200 OK` com um array JSON vazio `[]`, confirmando que a exclusão funcionou.

**Parabéns\!** Seus alunos agora têm um backend robusto e funcional, e sabem como verificar cada parte dele. Eles estão prontos para construir os clientes web e desktop.


### **Etapa 6: Acessando o Console do Banco de Dados H2 em seu Projeto Spring Boot

Para desenvolvedores que utilizam o Spring Boot, o banco de dados em memória H2 é uma ferramenta extremamente útil para desenvolvimento e testes. Ele permite a criação e manipulação de um banco de dados relacional que existe apenas durante a execução da aplicação, sem a necessidade de configurar um servidor de banco de dados externo. Uma de suas grandes vantagens é o console web, que oferece uma interface gráfica para interagir diretamente com o banco de dados.

Acessar este console, no entanto, exige algumas configurações específicas no seu projeto Spring Boot, especialmente se você estiver utilizando o Spring Security. A seguir, apresentamos um guia passo a passo para habilitar e acessar o console do H2.

### 1\. Adicionando as Dependências Necessárias

O primeiro passo é garantir que as dependências do Spring Data JPA e do H2 estejam presentes no seu arquivo `pom.xml` (caso utilize Maven) ou `build.gradle` (caso utilize Gradle).

**Maven (`pom.xml`):**

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
<dependency>
    <groupId>com.h2database</groupId>
    <artifactId>h2</artifactId>
    <scope>runtime</scope>
</dependency>
```

**Gradle (`build.gradle`):**

```groovy
implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
runtimeOnly 'com.h2database:h2'
```

A dependência `spring-boot-starter-data-jpa` provê a infraestrutura para persistência de dados, enquanto a `h2` inclui o driver do banco de dados em memória. A anotação `<scope>runtime</scope>` (ou `runtimeOnly` no Gradle) indica que essa dependência é necessária apenas em tempo de execução.

### 2\. Configurando o `application.properties`

Em seguida, você precisa configurar sua aplicação para utilizar o banco de dados H2 e habilitar o seu console. Adicione as seguintes propriedades ao seu arquivo `src/main/resources/application.properties`:

```properties
# Configurações do H2
spring.h2.console.enabled=true
spring.h2.console.path=/h2-console

# Configurações do Datasource
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
```

**Entendendo as propriedades:**

  * `spring.h2.console.enabled=true`: Habilita o console web do H2.
  * `spring.h2.console.path=/h2-console`: Define o caminho (endpoint) para acessar o console. Você pode alterá-lo se desejar.
  * `spring.datasource.url=jdbc:h2:mem:testdb`: Configura a URL de conexão do JDBC. `mem:testdb` indica que o banco de dados se chamará `testdb` e será armazenado em memória.
  * `spring.datasource.driverClassName`, `spring.datasource.username`, `spring.datasource.password`: Definem o driver, o nome de usuário e a senha para a conexão com o banco de dados. O H2, por padrão, utiliza "sa" como usuário e uma senha em branco.
  * `spring.jpa.database-platform`: Informa ao Hibernate qual dialeto SQL utilizar.

Se você prefere o formato YAML (`application.yml`), a configuração equivalente é:

```yaml
spring:
  h2:
    console:
      enabled: true
      path: /h2-console
  datasource:
    url: jdbc:h2:mem:testdb
    driverClassName: org.h2.Driver
    username: sa
    password:
    jpa:
      database-platform: org.hibernate.dialect.H2Dialect
```

### 3\. Configurando o Spring Security

Se o seu projeto utiliza o Spring Security, simplesmente habilitar o console do H2 não será suficiente. Por padrão, o Spring Security bloqueia o acesso a todos os endpoints, incluindo o do console do H2. Além disso, o console do H2 utiliza frames HTML, que também são bloqueados por padrão como uma medida de segurança contra ataques de *clickjacking*.

Para permitir o acesso, você precisará criar ou modificar sua classe de configuração do Spring Security. Em versões recentes do Spring Boot (3.x e superiores), a configuração é feita através de um `Bean` do tipo `SecurityFilterChain`.

Crie uma classe de configuração de segurança (por exemplo, `SecurityConfig.java`):

```java
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import static org.springframework.boot.autoconfigure.security.servlet.PathRequest.toH2Console;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth
                .requestMatchers(toH2Console()).permitAll()
                .anyRequest().authenticated()
            )
            .csrf(csrf -> csrf
                .ignoringRequestMatchers(toH2Console())
            )
            .headers(headers -> headers
                .frameOptions(frameOptions -> frameOptions.sameOrigin())
            );

        return http.build();
    }
}
```

**Análise da configuração de segurança:**

  * `.requestMatchers(toH2Console()).permitAll()`: Permite todas as requisições para o caminho do console do H2. O método `toH2Console()` da classe `PathRequest` é uma forma conveniente de referenciar o caminho configurado em `spring.h2.console.path`.
  * `.csrf(csrf -> csrf.ignoringRequestMatchers(toH2Console()))`: Desabilita a proteção contra Cross-Site Request Forgery (CSRF) para o console do H2. Isso é necessário porque o console não envia tokens CSRF.
  * `.headers(headers -> headers.frameOptions(frameOptions -> frameOptions.sameOrigin()))`: Permite que páginas da mesma origem sejam exibidas em frames. Isso é crucial para que o console do H2, que utiliza frames, seja renderizado corretamente no navegador.

### 4\. Acessando o Console

Com as configurações acima aplicadas, inicie sua aplicação Spring Boot. Em seguida, abra seu navegador e acesse a URL:

**Acesse o site:  [http://localhost:8080/h2-console](http://localhost:8080/h2-console)**

(Lembre-se de substituir `8080` pela porta em que sua aplicação está rodando, se for diferente).

Na tela de login do console do H2, certifique-se de que o campo "JDBC URL" corresponde exatamente ao valor que você definiu em `spring.datasource.url` (`jdbc:h2:mem:testdb`). Preencha o nome de usuário ("sa") e a senha (deixe em branco) e clique em "Connect".

## Caso Tenha uma mensagem de erro 
Database "C:/Users/[SEU_USUARIO]/test" not found, either pre-create it or allow remote database creation (not recommended in secure environments) [90149-232] 90149/90149 (Help)

**📌️ SOLUÇÃO RECOMENDADA

```
jdbc:h2:~/test

mudar para 

jdbc:h2:mem:testdb

```

Esse erro aparece porque sua configuração está apontando para um banco **H2 no disco** (`jdbc:h2:file:` implícito) que não existe, mas no seu `application.properties` você disse que quer usar **em memória** (`jdbc:h2:mem:testdb`).

Se o Spring Boot está reclamando de `C:/Users/[SEU_USUARIO]/test`, significa que em algum ponto do seu projeto (ou dependência) a URL do H2 foi alterada para `jdbc:h2:file:C:/Users/[SEU_USUARIO]/test`.

Você tem três caminhos para corrigir:

---

**1️⃣ Usar banco em memória (não persiste entre execuções)**
Isso funciona bem para testes. Basta manter assim no `application.properties` e garantir que não tem outro lugar sobrescrevendo:

```properties
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
spring.h2.console.enabled=true
spring.h2.console.path=/h2-console
```

> Dica: verifique se **não existe** outro arquivo `application.properties` ou `application.yml` com configuração diferente.

---

**2️⃣ Usar banco no disco e criar automaticamente**
Se você quer que o H2 seja salvo no PC e não em memória, configure assim:

```properties
spring.datasource.url=jdbc:h2:file:~/test;AUTO_SERVER=TRUE;AUTO_CREATE=TRUE
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
spring.h2.console.enabled=true
spring.h2.console.path=/h2-console
```

Isso cria o arquivo `~/test.mv.db` (na pasta do usuário) na primeira execução.

---

**3️⃣ Usar banco no disco em caminho específico**
Se quiser manter em `C:/Users/[SEU_USUARIO]/test`, pode criar o banco antes ou permitir criação automática:

```properties
spring.datasource.url=jdbc:h2:file:C:/Users/[SEU_USUARIO]/test;AUTO_SERVER=TRUE;AUTO_CREATE=TRUE
```

> ⚠ `AUTO_CREATE=TRUE` é útil para desenvolvimento, mas não é recomendado em produção.

---

Pronto\! Você agora tem acesso total à interface do banco de dados H2, onde pode visualizar tabelas, executar queries SQL e gerenciar seus dados de desenvolvimento de forma prática e eficiente.

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)

