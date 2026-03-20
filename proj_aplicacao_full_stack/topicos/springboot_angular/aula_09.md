---
layout: default
title: **📌 Criando um Sistema de Lista de Tarefas (Todo List) com Angular e Spring Boot**
---

# **📌 Criando um Sistema de Lista de Tarefas (Todo List) com Angular e Spring Boot**

Este tutorial irá guiá-lo na criação de uma **aplicação web de lista de tarefas** (**Todo List**) utilizando **Spring Boot** no backend e **Angular** no frontend. O sistema permitirá que o usuário:

✅ **Adicione novas tarefas**  
✅ **Edite o nome das tarefas**  
✅ **Marque/desmarque como concluída**  
✅ **Exclua tarefas**

O projeto será estruturado seguindo o **padrão MVC (Model-View-Controller)** e implementará uma **API REST**.

---

## **🛠️ 1. Tecnologias Utilizadas**

- **Backend:** Java 17, Spring Boot, Spring Data JPA, H2 Database
- **Frontend:** Angular, TypeScript, Bootstrap
- **Ferramentas:** Node.js, npm, Maven

---

# **📁 2. Estrutura do Projeto**

```bash
todo-list/
│── backend/       # Backend - API REST em Spring Boot
│── frontend/      # Frontend - Interface Angular
│── README.md
```

---

# **🔧 3. Configurando o Backend (Spring Boot)**

## **📌 3.1 Criando o Projeto Spring Boot**

📌 No terminal, execute:

```sh
mkdir todo-list && cd todo-list
mkdir backend && cd backend
mvn archetype:generate -DgroupId=com.example.listatarefas -DartifactId=backend -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false
cd backend
```

---

## **📌 3.2 Configurando o Banco de Dados (H2)**

📄 **Arquivo:** `backend/src/main/resources/application.properties`

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

✅ Agora o banco de dados **H2** será inicializado na memória.

---

## **📌 3.3 Criando o Modelo (M - Model)**

📄 **Arquivo:** `backend/src/main/java/com/example/listatarefas/model/Task.java`

```java
@Entity
@Table(name = "tasks")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private boolean completed;

    // Construtores, Getters e Setters
}
```

---

## **📌 3.4 Criando o Repositório (Acesso ao Banco de Dados)**

📄 **Arquivo:** `backend/src/main/java/com/example/listatarefas/repository/TaskRepository.java`

```java
@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
}
```

---

## **📌 3.5 Criando o Controlador (C - Controller)**

📄 **Arquivo:** `backend/src/main/java/com/example/listatarefas/controller/TaskController.java`

```java
@RestController
@RequestMapping("/api/tasks")
@CrossOrigin("*")
public class TaskController {
    @Autowired
    private TaskRepository repository;

    @GetMapping
    public List<Task> getAll() {
        return repository.findAll();
    }

    @PostMapping
    public Task create(@RequestBody Task task) {
        return repository.save(task);
    }

    @PutMapping("/{id}")
    public Task update(@PathVariable Long id, @RequestBody Task task) {
        task.setId(id);
        return repository.save(task);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
```

---

## **📌 3.6 Populando o Banco com Dados Iniciais**

📄 **Arquivo:** `backend/src/main/java/com/example/listatarefas/config/DataLoader.java`

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

# **🎨 4. Criando o Frontend (Angular)**

## **📌 4.1 Criando o Projeto Angular**

📌 No terminal:

```sh
cd ../ # Voltar para a pasta "todo-list"
mkdir frontend && cd frontend
npx @angular/cli new frontend --style=css --routing=true
cd frontend
ng serve
```

Acesse `http://localhost:4200/` para visualizar o projeto.

---

## **📌 4.2 Criando o Serviço para Comunicação com a API**

📄 **Arquivo:** `frontend/src/app/services/task.service.ts`

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Task {
  id?: number;
  title: string;
  completed: boolean;
}

@Injectable({ providedIn: 'root' })
export class TaskService {
  private apiUrl = 'http://localhost:8080/api/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/${task.id}`, task);
  }

  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
```

---

## **📌 4.3 Criando o Componente da Lista de Tarefas**

📄 **Arquivo:** `frontend/src/app/components/todo-list/todo-list.component.html`

```html
<div class="container">
  <h1 class="text-center">📌 Lista de Tarefas</h1>

  <div class="input-group mb-3">
    <input [(ngModel)]="newTaskTitle" type="text" class="form-control" placeholder="Nova Tarefa">
    <button (click)="addTask()" class="btn btn-primary">Adicionar</button>
  </div>

  <ul class="list-group">
    <li *ngFor="let task of tasks" class="list-group-item d-flex justify-content-between align-items-center">
      <input [(ngModel)]="task.title" (change)="updateTask(task)" class="form-control me-2">
      
      <div>
        <button (click)="toggleTask(task)" class="btn btn-sm" [ngClass]="{'btn-success': !task.completed, 'btn-warning': task.completed}">
          {{ task.completed ? 'Desfazer' : 'Concluir' }}
        </button>
        <button (click)="deleteTask(task.id!)" class="btn btn-danger btn-sm">🗑</button>
      </div>
    </li>
  </ul>
</div>
```

---

# **🚀 5. Rodando o Projeto Completo**

📌 **Passo 1 - Rodar o Backend**

```sh
cd backend
mvn spring-boot:run
```

📌 **Passo 2 - Rodar o Frontend**

```sh
cd frontend
ng serve
```

Acesse `http://localhost:4200/` para testar o sistema! 🎉

---

# **📖 6. Conclusão**

Neste tutorial, aprendemos a:  
✅ Criar um **backend** com Spring Boot seguindo o **padrão MVC**  
✅ Criar um **frontend** com Angular e Bootstrap  
✅ Implementar um **CRUD** completo integrado via API REST

Agora temos um **sistema de tarefas funcional**! 🚀


---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)

