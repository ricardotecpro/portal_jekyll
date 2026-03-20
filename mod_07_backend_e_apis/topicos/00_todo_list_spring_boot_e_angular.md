# **Todo-List com Spring Boot**

Este tutorial guiará você passo a passo na criação de um **quadro de tarefas** (todo-list) com **Spring Boot** e **Angular**, seguindo uma estrutura organizada em **backend** e **frontend**.

## **1. Estrutura do Projeto**

O projeto será organizado da seguinte forma:

```
todo-list/
│── backend/ → (Spring Boot) 
│── frontend/  → (Angular)`
```

## **2. Configurando o Backend (Spring Boot)**

### **Passo 1: Criar um Projeto Spring Boot**

1. Acesse o site [Spring Initializr](https://start.spring.io/) e configure:
    
    - **Project**: Maven
    - **Language**: Java
    - **Spring Boot Version**: 3.x (ou a mais recente)
    - **Dependencies**:
        - Spring Web
        - Spring Data JPA
        - H2 Database
        - Lombok
2. Clique em **Generate** e extraia o arquivo **zip**.
    
3. No terminal, navegue até a pasta do backend e execute:

```
mvn clean install
```

### **Passo 2: Configurar o Banco de Dados H2**

No arquivo `application.properties` dentro de `src/main/resources`, adicione:

Configuração do banco de dados H2
```
 spring.datasource.url=jdbc:h2:mem:todo_list_db spring.datasource.driverClassName=org.h2.Driver spring.datasource.username=sa spring.datasource.password= spring.h2.console.enabled=true spring.jpa.database-platform=org.hibernate.dialect.H2Dialect spring.jpa.hibernate.ddl-auto=update
 ```

Agora, o banco H2 estará acessível pelo navegador em:  
🔗
```
http://localhost:8080/h2-console
```

---

### **Passo 3: Criar a Entidade Tarefa**

Crie a classe `Task.java` em `src/main/java/org/brothers/listatarefas/model/`:

```
`package org.brothers.listatarefas.model;  import jakarta.persistence.*; import lombok.*;  @Entity @Data @NoArgsConstructor @AllArgsConstructor public class Task {     @Id     @GeneratedValue(strategy = GenerationType.IDENTITY)     private Long id;      private String name;     private boolean completed; }`
```
### **Passo 4: Criar o Repositório**

Crie `TaskRepository.java` em `src/main/java/org/brothers/listatarefas/repository/

```
package org.brothers.listatarefas.repository;  import org.brothers.listatarefas.model.Task; import org.springframework.data.jpa.repository.JpaRepository;  public interface TaskRepository extends JpaRepository<Task, Long> { }
```

### **Passo 5: Criar o Controller**

Crie `TaskController.java` em `src/main/java/org/brothers/listatarefas/controller/`:

```
package org.brothers.listatarefas.controller;  import org.brothers.listatarefas.model.Task; import org.brothers.listatarefas.repository.TaskRepository; import org.springframework.web.bind.annotation.*;  import java.util.List;  @RestController @RequestMapping("/api/tasks") @CrossOrigin(origins = "*") public class TaskController {      private final TaskRepository repository;      public TaskController(TaskRepository repository) {         this.repository = repository;     }      @GetMapping     public List<Task> getAllTasks() {         return repository.findAll();     }      @PostMapping     public Task createTask(@RequestBody Task task) {         return repository.save(task);     }      @PutMapping("/{id}")     public Task updateTask(@PathVariable Long id, @RequestBody Task task) {         task.setId(id);         return repository.save(task);     }      @DeleteMapping("/{id}")     public void deleteTask(@PathVariable Long id) {         repository.deleteById(id);     } }`
```

---

### **Passo 6: Testar a API**

1. Inicie o backend com:

   ``` 
    mvn spring-boot:run
    ```
    
2. Teste no navegador ou Postman:
    
    - **Listar tarefas:** `GET http://localhost:8080/api/tasks`
    - **Criar tarefa:** `POST http://localhost:8080/api/tasks`
        
        ```
        
        `{ "name": "Aprender Spring Boot", "completed": false }`
        ```
    - **Atualizar tarefa:** `PUT http://localhost:8080/api/tasks/1`
    - **Deletar tarefa:** `DELETE http://localhost:8080/api/tasks/1`


---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)
