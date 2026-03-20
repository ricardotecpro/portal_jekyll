# **Tutorial: Estudo de Spring Boot**

## **1. O que é Spring Boot?**

O **Spring Boot** é uma extensão do framework **Spring** que simplifica a configuração e o desenvolvimento de novas aplicações Java. Ele foi projetado para criar **aplicações autônomas e prontas para produção** com o mínimo de esforço e configuração.

Algumas das características principais do Spring Boot:

- **Autoconfiguração**: O Spring Boot tenta adivinhar e configurar os componentes necessários para a aplicação, com base nas dependências presentes no projeto.
- **Aplicações Standalone**: Não há necessidade de um servidor de aplicação externo (como Tomcat ou Jetty) porque o Spring Boot já integra um servidor embutido.
- **Spring Initializr**: Ferramenta para inicializar projetos Spring de maneira rápida.
- **Atuadores**: Facilita o monitoramento e a administração da aplicação.
- **Suporte para microserviços**: O Spring Boot é muito utilizado no desenvolvimento de microserviços.

---

## **2. Pré-Requisitos**

Antes de começar a usar o Spring Boot, você deve ter:

- **JDK** instalado (Java 8 ou superior).
- **IDE** (como IntelliJ IDEA, Eclipse ou VSCode).
- **Maven** ou **Gradle** para gerenciamento de dependências (Maven será usado neste tutorial).
- **Conhecimentos básicos de Java**.

---

## **3. Criando o Projeto com Spring Boot**

### **3.1. Usando o Spring Initializr**

O **Spring Initializr** é uma ferramenta online para criar projetos Spring Boot rapidamente. Você pode acessar o Spring Initializr [aqui](https://start.spring.io/).

1. **Configuração do Projeto**:
   - **Project**: Maven Project (ou Gradle, dependendo da sua preferência).
   - **Language**: Java.
   - **Spring Boot Version**: Escolha a versão estável mais recente.
   - **Group**: com.exemplo.
   - **Artifact**: demo (ou o nome que preferir para o projeto).
   - **Dependencies**: Adicione dependências como:
     - **Spring Web** (para criar APIs RESTful).
     - **Spring Data JPA** (para integração com banco de dados).
     - **H2 Database** (banco de dados em memória para testes).
     - **Spring Boot DevTools** (para facilitar o desenvolvimento).

2. **Gerar o Projeto**:
   Após preencher os campos, clique em "Generate" para baixar o projeto compactado. Extraia o arquivo e abra na sua IDE.

---

### **3.2. Estrutura do Projeto**

Após criar o projeto, a estrutura do diretório será algo assim:

```
demo/
 ├── src/
 │   ├── main/
 │   │   ├── java/
 │   │   │   └── com/
 │   │   │       └── exemplo/
 │   │   │           └── demo/
 │   │   │               ├── DemoApplication.java
 │   │   │               └── controllers/
 │   │   │               └── models/
 │   │   │               └── repositories/
 │   │   │               └── services/
 │   │   ├── resources/
 │   │   │   ├── application.properties
 │   │   │   └── static/
 │   │   │   └── templates/
 ├── pom.xml
 └── .gitignore
```

### **3.3. `DemoApplication.java`**

A classe `DemoApplication.java` é a entrada principal da sua aplicação Spring Boot.

```java
package com.exemplo.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}
```

- **@SpringBootApplication**: Esta anotação ativa várias funcionalidades, incluindo a configuração automática e a varredura de componentes (como controllers, services e repositórios).

Para rodar a aplicação, basta executar a classe `DemoApplication.java`. O Spring Boot iniciará a aplicação, por padrão, em **localhost:8080**.

---

## **4. Criando uma API REST com Spring Boot**

Agora vamos criar um exemplo simples de API REST que retorna dados de uma lista de "Produtos" usando o Spring Boot.

### **4.1. Criando o Modelo (Entity)**

Primeiro, criamos uma classe `Produto` que será usada como nosso modelo de dados:

```java
package com.exemplo.demo.models;

public class Produto {

    private Long id;
    private String nome;
    private double preco;

    // Construtores, getters e setters
    public Produto(Long id, String nome, double preco) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }
}
```

### **4.2. Criando o Controller**

Agora, criamos o **controller**, que será responsável por gerenciar as requisições HTTP para a nossa API.

```java
package com.exemplo.demo.controllers;

import com.exemplo.demo.models.Produto;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class ProdutoController {

    @GetMapping("/produtos")
    public List<Produto> obterProdutos() {
        Produto p1 = new Produto(1L, "Produto 1", 10.0);
        Produto p2 = new Produto(2L, "Produto 2", 20.0);
        return Arrays.asList(p1, p2);
    }
}
```

- **@RestController**: Essa anotação indica que a classe será um controlador REST e cada método retornará um corpo de resposta, geralmente em formato JSON.
- **@GetMapping("/produtos")**: Define que o método `obterProdutos` será responsável por atender requisições GET para o endpoint `/produtos`.

### **4.3. Testando a API**

Agora, ao executar a aplicação, você pode acessar a API em `http://localhost:8080/produtos`, e a resposta será um JSON com a lista de produtos:

```json
[
    {
        "id": 1,
        "nome": "Produto 1",
        "preco": 10.0
    },
    {
        "id": 2,
        "nome": "Produto 2",
        "preco": 20.0
    }
]
```

---

## **5. Conectando ao Banco de Dados com Spring Data JPA**

Agora, vamos adicionar a capacidade de persistir os dados em um banco de dados relacional utilizando o **Spring Data JPA**.

### **5.1. Adicionando Dependências no `pom.xml`**

No arquivo `pom.xml`, adicione a dependência do **Spring Data JPA** e um banco de dados como o **H2 Database** (um banco em memória):

```xml
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>
    <dependency>
        <groupId>com.h2database</groupId>
        <artifactId>h2</artifactId>
        <scope>runtime</scope>
    </dependency>
    <!-- Outras dependências -->
</dependencies>
```

### **5.2. Criando o Repositório JPA**

Agora, crie o repositório que permitirá interagir com o banco de dados.

```java
package com.exemplo.demo.repositories;

import com.exemplo.demo.models.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {
}
```

A interface `ProdutoRepository` estende `JpaRepository`, que fornece várias operações prontas, como salvar, buscar e excluir objetos.

### **5.3. Configuração do Banco de Dados**

No arquivo `src/main/resources/application.properties`, configure o banco de dados H2:

```properties
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=password
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
spring.h2.console.enabled=true
```

### **5.4. Usando o Repositório no Controller**

Agora, vamos modificar o **controller** para usar o repositório e persistir os dados:

```java
package com.exemplo.demo.controllers;

import com.exemplo.demo.models.Produto;
import com.exemplo.demo.repositories.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProdutoController {

    @Autowired
    private ProdutoRepository produtoRepository;

    @GetMapping("/produtos")
    public List<Produto> obterProdutos() {
        return produtoRepository.findAll();
    }
}
```

### **5.5. Testando com Banco de Dados**

Agora, os produtos serão armazenados no banco de dados H2. Você pode acessar a interface H2 em `http://localhost:8080/h2-console` e verificar o conteúdo do banco de dados.

---

## **6. Conclusão**

Neste tutorial, você aprendeu os principais conceitos do **Spring Boot**:

- Criando uma aplicação Spring Boot básica.
- Criando uma API REST simples.
- Usando o Spring Data JPA para persistir dados em um banco de dados.

Spring Boot é uma excelente ferramenta para construir aplicações Java rapidamente, e você pode expandir esse tutorial com mais recursos, como autenticação, validação de dados e muito mais.



O erro ocorre porque a classe `Produto` não está sendo gerenciada pelo Spring Data JPA como uma entidade. Para corrigir isso, você precisa adicionar a anotação `@Entity` e definir uma chave primária com `@Id`.  

Aqui está a correção na classe `Produto`:  

### **Correção da Classe Produto**  
```java
package com.exemplo.demo.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private double preco;

    // Construtores, getters e setters
    public Produto() {
    }

    public Produto(Long id, String nome, double preco) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }
}
```
### **Explicação das Mudanças**  
1. **`@Entity`** → Define a classe `Produto` como uma entidade gerenciada pelo JPA.  
2. **`@Id`** → Define o campo `id` como a chave primária.  
3. **`@GeneratedValue(strategy = GenerationType.IDENTITY)`** → Indica que o banco de dados deve gerar automaticamente o valor do `id`.  
4. **Construtor Padrão** → O JPA exige um construtor sem argumentos.  

 🚀



---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)
