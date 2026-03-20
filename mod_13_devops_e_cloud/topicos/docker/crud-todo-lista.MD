Aqui estão os dois planos de aula detalhados para seu curso de Computação:

---

## 🔹 Aula 1 – Criando um CRUD de Lista de Tarefas com Java Spring Boot e Angular (MVC)

### 🎯 Objetivo:

Ensinar os alunos a desenvolver uma aplicação web de lista de tarefas com backend Java Spring Boot e frontend Angular, utilizando o padrão de projeto MVC e banco de dados H2.

### 📚 Conteúdos abordados:

* Arquitetura cliente-servidor
* Padrão de projeto MVC
* Criação de API REST com Spring Boot
* Integração com banco H2
* Criação de frontend com Angular
* Integração frontend-backend via HTTP
* Operações CRUD

---

### 🧱 Estrutura do Projeto

```
todolist/
├── backend/ (Java Spring Boot)
└── frontend/ (Angular)
```

---

### 🛠 Etapas da Aula

#### 1. Apresentação do Projeto e Conceitos Iniciais

* Explicação do que é um CRUD
* Explicação da arquitetura MVC e como se aplica a Spring Boot + Angular
* Demonstração do projeto final

#### 2. Configuração do Ambiente

* Instalar JDK, Maven, Angular CLI, Node.js, IDEs (IntelliJ e VSCode)
* Criar o projeto backend com `spring initializr` (dependências: Web, H2, JPA)

#### 3. Desenvolvimento do Backend

**Model (entidade `Task`)**

```java
@Entity
public class Task {
    @Id @GeneratedValue
    private Long id;
    private String titulo;
    private String descricao;
    private boolean feito;
}
```

**Repository**

```java
public interface TaskRepository extends JpaRepository<Task, Long> {}
```

**Service (opcional nesta fase)**

**Controller**

```java
@RestController
@RequestMapping("/api/tasks")
public class TaskController {
    // Métodos GET, POST, PUT, DELETE
}
```

**Banco de dados**

* Configurar o H2 e habilitar o console
* Mostrar persistência de dados com `application.properties`

#### 4. Desenvolvimento do Frontend (Angular)

* Criar projeto com `ng new frontend`
* Criar serviço `TaskService` para chamada HTTP
* Criar componentes: `task-list`, `task-form`
* Realizar chamadas HTTP: GET, POST, PUT, DELETE
* Usar `HttpClient` e `Observable`

#### 5. Integração Angular + Spring

* Verificar CORS
* Fazer testes com o navegador
* Finalizar operações CRUD

#### 6. Conclusão

* Mostrar o ciclo completo de uma tarefa (criar, listar, atualizar, excluir)
* Reforçar MVC, REST e separação de responsabilidades

---

## 🔹 Aula 2 – Aprimorando com Kanban, PostgreSQL, Docker e Git

### 🎯 Objetivo:

Evoluir o projeto para incluir:

* Interface Kanban com drag-and-drop
* Banco PostgreSQL com Docker
* Uso de `docker-compose`
* Versionamento com Git em branches separados

---

### 📚 Conteúdos abordados:

* Kanban e manipulação via drag-and-drop
* Angular: biblioteca `@angular/cdk/drag-drop`
* Docker e Docker Compose
* Configuração de banco PostgreSQL
* Git: branches e fluxo de versionamento (feature/main)

---

### 🛠 Etapas da Aula

#### 1. Criação de Branch `feature/kanban`

```bash
git checkout -b feature/kanban
```

#### 2. Substituição do Banco de Dados

* Criar `docker-compose.yml` com PostgreSQL

```yaml
version: '3'
services:
  db:
    image: postgres
    environment:
      POSTGRES_USER: todouser
      POSTGRES_PASSWORD: todopass
      POSTGRES_DB: tododb
    ports:
      - "5432:5432"
```

* Atualizar `application.properties` do Spring Boot

#### 3. Atualizar Modelo da Tarefa

```java
private String status; // "TODO", "DOING", "DONE"
```

#### 4. Adicionar Drag-and-Drop com Angular

* Usar `@angular/cdk/drag-drop`
* Criar colunas com as listas e mover tarefas entre elas
* Atualizar tarefa no backend ao mover

```html
<div cdkDropList (cdkDropListDropped)="moverTarefa($event, 'TODO')">
  <div *ngFor="let task of tarefasTODO" cdkDrag>{{ task.titulo }}</div>
</div>
```

#### 5. Deploy com Docker Compose

* Criar `Dockerfile` para backend e frontend
* Criar `docker-compose.yml` incluindo app + banco

```yaml
services:
  backend:
    build: ./backend
    ports:
      - "8080:8080"
    depends_on:
      - db
  frontend:
    build: ./frontend
    ports:
      - "4200:80"
  db:
    ...
```

#### 6. Controle de Versão com Git

* Criar branches: `feature/kanban`, `feature/docker`
* Merge com `main` após testes

---

### ✅ Conclusão

* Revisão de conceitos avançados de dev moderno
* Discussão: vantagens do Kanban, Docker e PostgreSQL
* Exercício final: adicionar funcionalidade de "atribuir responsável"

---

Se quiser, posso gerar slides ou PDFs desses planos. Deseja isso?
