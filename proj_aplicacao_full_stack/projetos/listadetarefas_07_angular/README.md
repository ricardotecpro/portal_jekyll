---
layout: default
title: Guia Didático: Projeto Lista de Tarefas (Full Stack)
---

# Guia Didático: Projeto Lista de Tarefas (Full Stack)

Este guia foi elaborado para professores e alunos iniciantes em computação. Ele apresenta o desenvolvimento de uma aplicação web completa (Full Stack) utilizando tecnologias modernas e amplamente adotadas no mercado: **Spring Boot (Java)** para o Backend e **Angular** para o Frontend.

## 🎯 Objetivos de Aprendizagem

Ao final deste projeto, o aluno será capaz de:
1.  Compreender a arquitetura **Cliente-Servidor** e o padrão **MVC**.
2.  Desenvolver uma **API REST** robusta com Java e Spring Boot.
3.  Criar uma interface web moderna (**SPA**) com Angular.
4.  Entender conceitos de **Injeção de Dependência**, **JPA/Hibernate** e **Componentização**.
5.  Aplicar boas práticas como **SOLID**, **Clean Code** e **Testes Automatizados**.

---

## 🛠️ Tecnologias Utilizadas

### Backend (O "Cérebro" da Aplicação)
*   **Java 21**: Linguagem de programação robusta e tipada.
*   **Spring Boot 3**: Framework que facilita a criação de aplicações Java.
*   **H2 Database**: Banco de dados em memória (ideal para aprendizado e testes).
*   **Spring Data JPA**: Facilita a comunicação com o banco de dados.
*   **JUnit 5 & Mockito**: Ferramentas para testes automatizados.

### Frontend (A "Cara" da Aplicação)
*   **Angular 18+**: Framework para criação de interfaces dinâmicas.
*   **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
*   **HTML & CSS**: Estrutura e estilização das páginas.

---

## 🚀 Passo 1: Configuração do Ambiente

Antes de começar, certifique-se de ter instalado:
1.  **JDK 21** (Java Development Kit).
2.  **Node.js** (Versão LTS).
3.  **Maven** (Gerenciador de dependências Java).
4.  **Angular CLI**: Instale via terminal com `npm install -g @angular/cli`.
5.  **IDE**: Recomendamos IntelliJ IDEA (Backend) e VS Code (Frontend).

---

## 🏗️ Passo 2: O Backend (API)

O Backend é responsável por processar as regras de negócio e salvar os dados.

### Estrutura do Projeto (`backend/`)

*   `src/main/java/br/com/tarefas/api`: Código fonte Java.
    *   `model/`: Define as entidades (ex: `Tarefa`).
    *   `repository/`: Interface de acesso ao banco de dados.
    *   `service/`: Regras de negócio.
    *   `controller/`: Recebe as requisições HTTP (GET, POST, etc.).
    *   `dto/`: Objetos de transferência de dados (Data Transfer Objects).
*   `src/main/resources`: Configurações.
    *   `application.properties`: Configurações gerais.
    *   `application-dev.properties`: Configurações específicas de desenvolvimento (banco H2).

### Como Rodar o Backend

1.  Abra o terminal na pasta `backend`.
2.  Execute o comando:
    ```bash
    mvn spring-boot:run "-Dspring.profiles.active=dev"
    ```
3.  O servidor iniciará na porta **8088**.
4.  Acesse o Console do Banco de Dados H2 em: `http://localhost:8088/h2-console`
    *   URL JDBC: `jdbc:h2:mem:tarefasdb`
    *   Usuário: `sa`
    *   Senha: (vazio)

### Testando a API

Você pode testar os endpoints usando o Postman ou `curl`:

*   **Listar Tarefas**: `GET http://localhost:8088/tarefas`
*   **Criar Tarefa**: `POST http://localhost:8088/tarefas` (JSON no corpo)

---

## 🎨 Passo 3: O Frontend (Interface)

O Frontend é o que o usuário vê e interage. Ele consome a API do Backend.

### Estrutura do Projeto (`frontend/`)

*   `src/app/`: Código fonte da aplicação.
    *   `components/`: Componentes visuais (Lista, Formulário).
    *   `models/`: Definição dos tipos de dados (Interface `Tarefa`).
    *   `services/`: Comunicação com o Backend (`TarefaService`).
    *   `app.routes.ts`: Definição das rotas (navegação).

### Como Rodar o Frontend

1.  Abra um novo terminal na pasta `frontend`.
2.  Instale as dependências (apenas na primeira vez):
    ```bash
    npm install
    ```
3.  Inicie o servidor de desenvolvimento:
    ```bash
    ng serve
    ```
4.  Acesse a aplicação no navegador: `http://localhost:4200`

---

## 🧪 Passo 4: Testes Automatizados

Testes garantem que sua aplicação funciona como esperado e facilitam a manutenção.

### Testes de Backend (JUnit)
No terminal do `backend`:
```bash
mvn test
```
Isso executará testes unitários e de integração para garantir que a API está correta.

### Testes de Frontend (Karma/Jasmine)
No terminal do `frontend`:
```bash
ng test --watch=false
```
Isso verificará se os componentes e serviços do Angular estão funcionando corretamente.

---

## 📚 Conceitos Chave para Sala de Aula

### 1. MVC (Model-View-Controller)
*   **Model**: `Tarefa` (Java) e `tarefa.model.ts` (TypeScript). Representa os dados.
*   **View**: HTML/CSS do Angular. É a interface visual.
*   **Controller**: `TarefaController` (Java). Gerencia as requisições e conecta Model e View.

### 2. API REST
A comunicação entre Frontend e Backend segue o padrão REST, utilizando verbos HTTP:
*   **GET**: Buscar dados.
*   **POST**: Criar novos dados.
*   **PUT**: Atualizar dados completos.
*   **PATCH**: Atualizar dados parciais (ex: apenas o status).
*   **DELETE**: Remover dados.

### 3. Injeção de Dependência
O Spring Boot (`@Autowired`) e o Angular (Construtor) gerenciam automaticamente as dependências das classes, facilitando o desacoplamento e os testes.

---

## 📝 Exercícios Sugeridos para Alunos

1.  **Adicionar Prioridade**: Adicione um campo `prioridade` (Alta, Média, Baixa) na Tarefa. Atualize o Backend (Model, DTO, Controller) e o Frontend (Interface, Formulário).
2.  **Filtros**: Crie botões no Frontend para filtrar tarefas por "Todas", "Pendentes" e "Concluídas".
3.  **Validação**: Melhore as mensagens de erro quando o usuário tentar criar uma tarefa sem título.

---

**Bom aprendizado!** 🚀

