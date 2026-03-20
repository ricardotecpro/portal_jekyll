---
layout: default
title: 🏗 **Projeto Todo List: API REST com Angular e Spring Boot no Padrão MVC**
---

# 🏗 **Projeto Todo List: API REST com Angular e Spring Boot no Padrão MVC**

---

# 📌 **O que é uma API REST?**

Uma **API REST (Representational State Transfer)** é um conjunto de regras que permite que aplicações se comuniquem pela internet usando o protocolo **HTTP**. No nosso projeto, o **backend em Spring Boot** expõe endpoints REST para que o **frontend em Angular** possa interagir com os dados das tarefas.

### **⚙️ Características principais de uma API REST:**

✔ **Stateless (Sem estado):** Cada requisição enviada pelo cliente deve conter todas as informações necessárias para ser processada pelo servidor.  
✔ **Métodos HTTP bem definidos:** A API utiliza verbos HTTP para definir a ação que será realizada.  
✔ **Uso de JSON:** Os dados são trocados no formato **JSON**, que é leve e fácil de manipular.  
✔ **URL bem definidas:** Segue um padrão para facilitar a comunicação e manutenção.

---

# 🔄 **Principais Métodos HTTP usados na API REST**

|**Método HTTP**|**Descrição**|**Exemplo na API**|
|---|---|---|
|`GET`|Obtém dados do servidor|`/api/tasks` (Lista todas as tarefas)|
|`POST`|Cria um novo recurso|`/api/tasks` (Adiciona uma nova tarefa)|
|`PUT`|Atualiza um recurso existente|`/api/tasks/1` (Edita a tarefa com ID 1)|
|`DELETE`|Remove um recurso|`/api/tasks/1` (Deleta a tarefa com ID 1)|

---

# 🔢 **Códigos de Resposta HTTP**

Sempre que realizamos uma requisição HTTP, o servidor responde com um **código de status**, indicando o resultado da operação.

|**Código**|**Significado**|**Explicação**|
|---|---|---|
|`200 OK`|Sucesso|A requisição foi processada corretamente.|
|`201 Created`|Recurso Criado|Um novo recurso foi adicionado com sucesso.|
|`204 No Content`|Sem Conteúdo|Ação foi bem-sucedida, mas sem retorno de dados.|
|`400 Bad Request`|Requisição Inválida|Alguma informação está incorreta.|
|`404 Not Found`|Não Encontrado|O recurso solicitado não existe.|
|`500 Internal Server Error`|Erro no Servidor|Algo deu errado no servidor.|

---

# 🎯 **Exemplo de Comunicação entre Frontend e Backend**

## **1️⃣ Frontend Angular Faz Requisição para o Backend**

O serviço Angular (`task.service.ts`) envia uma requisição **GET** para buscar todas as tarefas:

```typescript
this.http.get<Task[]>('http://localhost:8080/api/tasks')
  .subscribe(response => console.log(response));
```

---

## **2️⃣ Backend Processa e Responde**

O **Spring Boot** recebe a requisição, busca os dados no banco e retorna um JSON:

```json
[
  { "id": 1, "title": "Estudar API REST", "completed": false },
  { "id": 2, "title": "Criar projeto Angular", "completed": true }
]
```

O código que trata essa requisição no **backend**:

```java
@GetMapping
public List<Task> getAll() {
    return repository.findAll(); // Retorna todas as tarefas
}
```

---

Agora, sua aplicação segue **boas práticas REST** e está estruturada corretamente no padrão **MVC**! 🚀

---

### 🚀 [ricardotecpro.github.io](https://ricardotecpro.github.io/)


