---
layout: default
title: **1. Introdução ao Spring Boot**
---

## **1. Introdução ao Spring Boot**

O **Spring Boot** é uma extensão do framework **Spring** que simplifica a configuração e o desenvolvimento de aplicações Java. Ele permite criar **aplicações autônomas e prontas para produção** com um mínimo de configuração manual.

### **Principais Características do Spring Boot**

- **Autoconfiguração**: O Spring Boot identifica e configura automaticamente os componentes necessários.
- **Aplicativos Standalone**: Possui um servidor embutido (Tomcat, Jetty ou Undertow), eliminando a necessidade de servidores externos.
- **Spring Initializr**: Ferramenta para inicialização rápida de projetos Spring Boot.
- **Atuadores**: Fornece endpoints para monitoramento e gerenciamento da aplicação.
- **Suporte a microserviços**: Ideal para a arquitetura de microserviços.

---

## **2. Configuração do Ambiente**

Antes de começar, verifique se possui os seguintes requisitos:

- **JDK 8 ou superior** instalado.
- **IDE** (IntelliJ IDEA, Eclipse ou VSCode).
- **Maven** ou **Gradle** para gerenciamento de dependências (neste tutorial usaremos Maven).
- **Conhecimentos básicos de Java**.

### **Verificando a Instalação do Java e Maven**

Abra o terminal ou prompt de comando e execute:

```sh
java -version
mvn -version
```

Se o Java e o Maven estiverem corretamente instalados, será exibida a versão correspondente.

---

## **3. Criando um Projeto Spring Boot**

### **3.1. Usando o Spring Initializr**

O **Spring Initializr** é uma ferramenta online para criar projetos Spring Boot rapidamente. Acesse [Spring Initializr](https://start.spring.io/) e configure:

1. **Project**: Maven Project
2. **Language**: Java
3. **Spring Boot Version**: Escolha a versão mais recente
4. **Group**: com.exemplo
5. **Artifact**: demo
6. **Dependencies**:
    - **Spring Web** (para criar APIs RESTful)
    - **Spring Data JPA** (para interação com bancos de dados)
    - **H2 Database** (banco de dados em memória para testes)
    - **Spring Boot DevTools** (para facilitar o desenvolvimento)

Clique em **"Generate"** para baixar o projeto, extraia o arquivo ZIP e abra na sua IDE.

### **3.2. Estrutura do Projeto**

```
demo/
 ├── src/
 │   ├── main/
 │   │   ├── java/com/exemplo/demo/
 │   │   │   ├── DemoApplication.java
 │   │   │   ├── controllers/
 │   │   │   ├── models/
 │   │   │   ├── repositories/
 │   │   │   ├── services/
 │   │   ├── resources/
 │   │   │   ├── application.properties
 ├── pom.xml
```

### **3.3. Criando a Classe Principal**

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

- **@SpringBootApplication** ativa funcionalidades do Spring Boot, como a autoconfiguração.

Para executar a aplicação, rode a classe `DemoApplication.java`. O Spring Boot iniciará um servidor na porta **8080**.

---

## **4. Criando uma API REST com Spring Boot**

### **4.1. Criando o Modelo (Entity)**

```java
package com.exemplo.demo.models;

import jakarta.persistence.*;

@Entity
public class Produto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private double preco;

    public Produto() {}

    public Produto(Long id, String nome, double preco) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }

    // Getters e Setters
}
```

- **@Entity**: Define a classe como uma entidade do banco de dados.
- **@Id** e **@GeneratedValue**: Definem a chave primária e a geração automática do ID.

### **4.2. Criando o Repositório**

```java
package com.exemplo.demo.repositories;

import com.exemplo.demo.models.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {}
```

### **4.3. Criando o Controller**

```java
package com.exemplo.demo.controllers;

import com.exemplo.demo.models.Produto;
import com.exemplo.demo.repositories.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/produtos")
public class ProdutoController {
    @Autowired
    private ProdutoRepository produtoRepository;

    @GetMapping
    public List<Produto> listarProdutos() {
        return produtoRepository.findAll();
    }
}
```

### **4.4. Testando a API**

Inicie a aplicação e acesse `http://localhost:8080/produtos`. O retorno será:

```json
[]
```

O retorno está vazio porque ainda não há produtos cadastrados no banco de dados.

---

## **5. Configurando o Banco de Dados**

No arquivo `src/main/resources/application.properties`, configure o banco de dados H2:

```properties
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
spring.h2.console.enabled=true
```

Agora, ao acessar `http://localhost:8080/h2-console`, você pode visualizar o banco de dados em memória.

---

## **6. Conclusão**

Neste tutorial, aprendemos:

- Como configurar um projeto Spring Boot.
- Como criar uma API REST.
- Como usar o Spring Data JPA para interagir com um banco de dados.

Spring Boot é uma excelente ferramenta para criar aplicações Java de forma rápida e eficiente. No próximo passo, você pode implementar CRUDs completos, autenticação e muito mais! 🚀


---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)

