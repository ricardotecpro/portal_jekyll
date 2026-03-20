---
layout: default
title: Todo List - API REST com Angular e Spring Boot
---

# Todo List - API REST com Angular e Spring Boot

## Introdução

Este projeto é um sistema de lista de tarefas (**Todo List**) no estilo **Kanban**, onde o usuário pode adicionar tarefas, movê-las entre colunas ("A Fazer" e "Executadas") e removê-las. A aplicação é composta por um **backend** em **Spring Boot** e um **frontend** em **Angular**.

## Tecnologias Utilizadas

- **Backend:** Java 21, Spring Boot, Spring Data JPA, H2 Database
- **Frontend:** Angular, TypeScript, Bootstrap
- **Ferramentas:** Docker, Postman (para testes), Node.js, npm

---

## Estrutura de Arquivos

### Backend (Spring Boot)

```
backend/
│── src/
│   ├── main/
│   │   ├── java/com/example/listatarefas/
│   │   │   ├── model/Task.java
│   │   │   ├── repository/TaskRepository.java
│   │   │   ├── controller/TaskController.java
│   │   │   ├── config/DataLoader.java
│   │   ├── resources/
│   │   │   ├── application.properties
│   ├── test/
│── pom.xml
│── README.md
```

### Configurando o `application.properties`

No diretório `src/main/resources`, configure o arquivo `application.properties` para usar apenas o H2:

```properties
# Configuração do banco de dados H2
spring.datasource.url=jdbc:h2:mem:listatarefas
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
spring.jpa.hibernate.ddl-auto=update
spring.h2.console.enabled=true
spring.h2.console.path=/h2-console
```

### Adicionando Dados de Exemplo

Crie a classe `DataLoader.java` para popular o banco automaticamente:

```java
@Component
public class DataLoader implements CommandLineRunner {

    @Autowired
    private TaskRepository repository;

    @Override
    public void run(String... args) throws Exception {
        repository.save(new Task("Estudar Spring Boot", false));
        repository.save(new Task("Criar projeto Angular", true));
        repository.save(new Task("Testar integração API", false));
    }
}
```

---

## Testando o Banco de Dados

Após iniciar a aplicação com:

```sh
mvn spring-boot:run
```

Acesse o console H2:

- URL: `http://localhost:8080/h2-console`
- JDBC URL: `jdbc:h2:mem:listatarefas`
- Usuário: `sa`
- Senha: (deixe em branco)

Agora a aplicação está configurada para rodar apenas com o banco H2 e já inclui dados de exemplo no banco ao iniciar. 🚀


---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)


