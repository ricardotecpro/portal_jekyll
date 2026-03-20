---
layout: default
title: **Backend Poliglota: Dominando a Web com Java (Spring Boot) e Python (FastAPI)**
---

### **Backend Poliglota: Dominando a Web com Java (Spring Boot) e Python (FastAPI)**

**Público-Alvo:**
* Estudantes e iniciantes em programação que desejam uma formação completa em backend.
* Desenvolvedores com experiência em uma linguagem que buscam se tornar poliglotas e mais valiosos para o mercado.
* Profissionais de outras áreas de TI que querem migrar para o desenvolvimento de software.

**Pré-requisitos:**
* Lógica de programação sólida.
* Conhecimentos básicos de Git para controle de versão.
* Noções de como usar a linha de comando.

**Ferramentas e Tecnologias Utilizadas:**
* **Linguagens:** Java 21+ e Python 3.12+
* **Frameworks:** Spring Boot 3+ (Java) e FastAPI (Python).
* **Bancos de Dados:** PostgreSQL (SQL) e Redis (NoSQL/Cache).
* **Containers:** Docker e Docker Compose.
* **Autenticação:** JWT (JSON Web Tokens).
* **Cloud & DevOps:** AWS (Elastic Beanstalk, RDS) e GitHub Actions para CI/CD.
* **IDE:** IntelliJ IDEA (para Java) e VS Code (para Python).

---

### **Estrutura do Curso**

O curso será dividido em seções. Primeiro, os fundamentos universais. Depois, duas trilhas paralelas (Java e Python), onde o aluno construirá a **mesma API** nos dois ecossistemas para poder comparar. O projeto será um backend para um **"Sistema de Agendamento de Consultas"**.

---

### **Módulo 1: Fundamentos Essenciais do Backend 🏛️**
* **Aula 1:** O Papel do Backend: Servindo Dados e Lógica de Negócio.
* **Aula 2:** Entendendo a Comunicação na Web: HTTP, Verbos (GET, POST, PUT, DELETE) e Status Codes.
* **Aula 3:** Padrões de API: Foco em REST e uma introdução a GraphQL.
* **Aula 4:** Modelagem de Dados para o Nosso Projeto (PostgreSQL).
* **Aula 5:** Configurando o Ambiente Universal: Docker, DBeaver e Git.

---
### **Trilha 1: Backend de Nível Empresarial com Java e Spring Boot ☕**

### **Módulo 2: Java Moderno e Ecossistema Spring**
* **Aula 1:** Revisão Essencial do Java Moderno: Records, Streams e Lambdas.
* **Aula 2:** Introdução ao Spring Boot: Magia ou Inversão de Controle e Injeção de Dependência?
* **Aula 3:** Criando nosso primeiro projeto com o Spring Initializr.
* **Aula 4:** Estrutura de um projeto Spring Boot: Controllers, Services e Repositories.

### **Módulo 3: Construindo a API REST com Spring Web**
* **Aula 1:** Criando Controllers e mapeando endpoints REST (@RestController, @GetMapping, etc.).
* **Aula 2:** Lidando com dados JSON: DTOs (Data Transfer Objects) e Validações.
* **Aula 3:** **Projeto Prático:** Implementando os endpoints CRUD para "Pacientes" e "Consultas".

### **Módulo 4: Persistência de Dados com Spring Data JPA**
* **Aula 1:** Mapeamento Objeto-Relacional (ORM) com JPA e Hibernate.
* **Aula 2:** Entidades (@Entity) e Repositórios (JpaRepository).
* **Aula 3:** Migrations de Banco de Dados com Flyway.
* **Aula 4:** **Projeto Prático:** Conectando a API ao PostgreSQL e persistindo os dados.

---
### **Trilha 2: Backend Rápido e Moderno com Python e FastAPI 🐍**

### **Módulo 5: Python Moderno e Ecossistema ASGI**
* **Aula 1:** Revisão Essencial do Python Moderno: Type Hints, Data Classes e f-strings.
* **Aula 2:** Introdução ao FastAPI: Performance e simplicidade com ASGI.
* **Aula 3:** Criando nosso primeiro projeto e entendendo a documentação automática (Swagger/OpenAPI).
* **Aula 4:** Estrutura de um projeto FastAPI: Roteadores, Schemas (Pydantic) e Dependências.

### **Módulo 6: Construindo a API REST com FastAPI**
* **Aula 1:** Criando rotas com os "decorators" (@app.get, @app.post, etc.).
* **Aula 2:** Validação de dados poderosa com Pydantic.
* **Aula 3:** **Projeto Prático:** Implementando os endpoints CRUD para "Pacientes" e "Consultas".

### **Módulo 7: Persistência de Dados com SQLModel e SQLAlchemy**
* **Aula 1:** Mapeamento Objeto-Relacional (ORM) com SQLAlchemy 2.0.
* **Aula 2:** Simplificando o ORM com SQLModel: Menos código, mais produtividade.
* **Aula 3:** Migrations de Banco de Dados com Alembic.
* **Aula 4:** **Projeto Prático:** Conectando a API ao PostgreSQL e persistindo os dados.

---
### **Módulos Universais: Ferramentas para Produção 🌐**

### **Módulo 8: Segurança e Autenticação com JWT 🛡️**
* **Aula 1:** Protegendo senhas com Hashing.
* **Aula 2:** Gerando e validando JSON Web Tokens (JWT).
* **Aula 3:** Implementando endpoints de login e registro (Aplicado em Spring Security e FastAPI Dependencies).
* **Aula 4:** Protegendo rotas e gerenciando o escopo do usuário.

### **Módulo 9: Docker para Desenvolvedores Backend 🐳**
* **Aula 1:** Criando um `Dockerfile` para uma aplicação Spring Boot.
* **Aula 2:** Criando um `Dockerfile` para uma aplicação FastAPI.
* **Aula 3:** Orquestrando a aplicação com o banco de dados usando `Docker Compose`.
* **Aula 4:** Integrando Redis como cache para otimizar consultas.

### **Módulo 10: Testes e Qualidade de Código ✅**
* **Aula 1:** Testes de Unidade (JUnit/Mockito para Java, Pytest para Python).
* **Aula 2:** Testes de Integração com Testcontainers: Subindo um banco de dados real para testar a persistência.
* **Aula 3:** Escrevendo testes para os endpoints da API.

### **Módulo 11: Deploy Contínuo na Nuvem (CI/CD com AWS) ☁️**
* **Aula 1:** Introdução à AWS: Provisionando um banco de dados com RDS.
* **Aula 2:** Automatizando o build e os testes com GitHub Actions.
* **Aula 3:** Fazendo o deploy da aplicação conteinerizada na AWS (Elastic Beanstalk).
* **Aula 4:** Configurando variáveis de ambiente e segredos para o ambiente de produção.

### **Módulo 12: Conclusão e Próximos Passos 🏆**
* **Aula 1:** Projeto Final: O aluno escolhe sua stack preferida (Java ou Python) para implementar uma nova funcionalidade (ex: sistema de notificações por e-mail).
* **Aula 2:** Quando escolher Java? Quando escolher Python? Análise comparativa.
* **Aula 3:** Construindo seu portfólio e se preparando para entrevistas de backend.
* **Aula 4:** Explorando o futuro: Microsserviços, GraphQL e Arquiteturas Serverless.

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)

