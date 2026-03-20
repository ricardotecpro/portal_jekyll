---
layout: default
title: Aplicação **listatarefas** com **Next.js no frontend** e **NestJS no backend**, usando **Docker** e **MySQL**.
---

# Aplicação **listatarefas** com **Next.js no frontend** e **NestJS no backend**, usando **Docker** e **MySQL**.

Vou dividir a explicação em etapas lógicas, garantindo que você compreenda cada parte antes de avançar.

---

### **📌 Aula 1: Introdução ao Projeto**

#### **Objetivo**

Vamos desenvolver uma aplicação listatarefas com as seguintes funcionalidades:  
✅ Criar tarefas  
✅ Listar tarefas  
✅ Atualizar status (drag and drop entre "A Fazer" e "Executadas")  
✅ Excluir tarefas  
✅ Armazenar as informações no MySQL  
✅ Utilizar Docker para padronizar o ambiente

#### **Pré-requisitos**

Antes de começar, certifique-se de ter instalado:  
🔹 [Node.js 20+](https://nodejs.org/en)  
🔹 [Docker e Docker Compose](https://www.docker.com/get-started/)  
🔹 Editor de código (VS Code recomendado)  
🔹 Terminal de comando


Esse erro ocorre porque o `npm` não conseguiu encontrar o diretório onde armazena os pacotes globais. Para corrigir isso, siga os passos abaixo:

### **1️⃣ Verificar se o Node.js está instalado corretamente**

Abra o terminal (cmd ou PowerShell) e execute:

```bash
node -v
npm -v
```

Se esses comandos não retornarem versões, reinstale o [Node.js](https://nodejs.org/).

---

### **2️⃣ Criar o diretório manualmente**

Tente criar o diretório que está faltando. Execute no PowerShell:

```powershell
mkdir C:\Users\rlp\AppData\Roaming
pm
```

Depois, tente novamente:

```bash
npx @nestjs/cli new backend
```

---

### **3️⃣ Limpar o cache do npm**

Se o erro persistir, tente limpar o cache do `npm`:

```bash
npm cache clean --force
```

Depois, reinstale o NestJS CLI globalmente:

```bash
npm install -g @nestjs/cli
```

E tente novamente:

```bash
npx @nestjs/cli new backend
```

 🚀

Agora, mãos à obra! 🛠️

---

### **📌 Aula 2: Criando o Backend com NestJS**

#### **Passo 1: Criar o Projeto NestJS**

Abra o terminal e execute:

```bash
npx @nestjs/cli new backend
```

Escolha **npm** e aguarde a instalação. Depois, entre no diretório:

```bash
cd backend
```

#### **Passo 2: Instalar Dependências**

Instale o **TypeORM** e o driver do MySQL:

```bash
npm install @nestjs/typeorm typeorm mysql2
```

Instale também o **class-validator** para validação de dados:

```bash
npm install class-validator class-transformer
```

#### **Passo 3: Configurar Banco de Dados**

Abra o arquivo `src/app.module.ts` e configure o TypeORM:

```typescript
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'database', // Nome do serviço no Docker
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'listatarefas',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
```

---

### **📌 Aula 3: Criando as Entidades e API**

#### **Passo 4: Criar a entidade de Tarefas**

```bash
npx nest g resource tasks
```

Escolha **REST API** e **TypeORM**.

No arquivo `src/tasks/task.entity.ts`, defina a estrutura da tabela:

```typescript
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ default: 'todo' }) // "todo" ou "done"
  status: string;
}
```

#### **Passo 5: Criar os Endpoints da API**

No `src/tasks/tasks.service.ts`, adicione:

```typescript
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(@InjectRepository(Task) private repo: Repository<Task>) {}

  findAll() {
    return this.repo.find();
  }

  create(title: string) {
    const task = this.repo.create({ title });
    return this.repo.save(task);
  }

  updateStatus(id: number, status: string) {
    return this.repo.update(id, { status });
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
```

Agora temos um backend funcional! 🚀

---

### **📌 Aula 4: Criando o Frontend com Next.js**

#### **Passo 6: Criar o Projeto Next.js**

Abra o terminal e execute:

```bash
npx create-next-app frontend
```

Entre no diretório:

```bash
cd frontend
```

Instale **Axios** para chamadas à API:

```bash
npm install axios
```

#### **Passo 7: Criar o Quadro com Drag and Drop**

Instale a biblioteca **react-beautiful-dnd**:

```bash
npm install react-beautiful-dnd
```

Crie um componente `components/TodoBoard.js`:

```jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export default function TodoBoard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/tasks').then((res) => setTasks(res.data));
  }, []);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const updatedTasks = [...tasks];
    const [movedTask] = updatedTasks.splice(result.source.index, 1);
    movedTask.status = result.destination.droppableId;
    updatedTasks.splice(result.destination.index, 0, movedTask);
    setTasks(updatedTasks);

    axios.patch(`http://localhost:3000/tasks/${movedTask.id}/status`, {
      status: movedTask.status,
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {['todo', 'done'].map((status) => (
        <Droppable key={status} droppableId={status}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <h2>{status === 'todo' ? 'A Fazer' : 'Executadas'}</h2>
              {tasks
                .filter((task) => task.status === status)
                .map((task, index) => (
                  <Draggable key={task.id} draggableId={String(task.id)} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {task.title}
                      </div>
                    )}
                  </Draggable>
                ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      ))}
    </DragDropContext>
  );
}
```

Agora basta importar esse componente no `pages/index.js` e pronto!

---

### **📌 Aula 5: Configurando Docker**

#### **Passo 8: Criar Dockerfiles**

Para o **backend**, crie `backend/Dockerfile`:

```dockerfile
FROM node:20
WORKDIR /app
COPY ../_analisar/_apresentacao_do_curso/fema .
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "start"]
```

Para o **frontend**, crie `frontend/Dockerfile`:

```dockerfile
FROM node:20
WORKDIR /app
COPY ../.. .
RUN npm install
RUN npm run build
EXPOSE 3001
CMD ["npm", "run", "start"]
```

#### **Passo 9: Criar `docker-compose.yml`**

```yaml
version: "3.8"
services:
  database:
    image: mysql:8
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: listatarefas
    ports:
      - "3306:3306"
  backend:
    build: ./backend
    ports:
      - "3000:3000"
    depends_on:
      - database
  frontend:
    build: ./frontend
    ports:
      - "3001:3001"
    depends_on:
      - backend
```

Rodar com:

```bash
docker-compose up --build
```



# 📌 listatarefas App

Este projeto é um aplicativo de lista de tarefas (ToDo List) desenvolvido com **Next.js** no frontend e **NestJS** no backend. Utiliza **MySQL** para armazenamento de dados e é totalmente containerizado com **Docker**.

## 🚀 Tecnologias Utilizadas

- **Frontend:** Next.js, React, react-beautiful-dnd, Axios
- **Backend:** NestJS, TypeORM, MySQL
- **Banco de Dados:** MySQL (Docker)
- **Containerização:** Docker e Docker Compose

## 📂 Estrutura do Projeto

```
listatarefas-app/
│── backend/              # Backend NestJS
│   ├── src/
│   │   ├── tasks/        # Módulo de Tarefas (API)
│   │   ├── main.ts       # Arquivo principal do NestJS
│   │   ├── app.module.ts # Configuração principal
│   ├── Dockerfile        # Docker do backend
│   ├── package.json      # Dependências do backend
│── frontend/             # Frontend Next.js
│   ├── components/       # Componentes React
│   │   ├── TodoBoard.js  # Quadro de Tarefas (Drag & Drop)
│   ├── pages/            # Páginas do Next.js
│   │   ├── index.js      # Página inicial com o quadro
│   ├── Dockerfile        # Docker do frontend
│   ├── package.json      # Dependências do frontend
│── docker-compose.yml    # Orquestração de serviços
│── README.md             # Documentação do projeto
```

## 🛠️ Como Executar o Projeto

### 1️⃣ Pré-requisitos

Certifique-se de ter instalado:

- [Node.js 20+](https://nodejs.org/)
- [Docker e Docker Compose](https://www.docker.com/get-started/)

### 2️⃣ Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/listatarefas-app.git
cd listatarefas-app
```

### 3️⃣ Subir os Containers com Docker

```bash
docker-compose up --build
```

Isso irá iniciar: ✅ Banco de Dados MySQL ✅ API Backend (NestJS) rodando na porta `3000` ✅ Frontend (Next.js) rodando na porta `3001`

### 4️⃣ Acessar a Aplicação

- Frontend: [http://localhost:3001](http://localhost:3001/)
- API Backend: [http://localhost:3000/tasks](http://localhost:3000/tasks) (Testar no Postman ou navegador)

## 📌 Funcionalidades

✅ Criar tarefas ✅ Listar tarefas ✅ Atualizar status (drag and drop entre "A Fazer" e "Executadas") ✅ Excluir tarefas

## 📝 Endpoints da API (NestJS)

### 📌 Listar todas as tarefas

```http
GET /tasks
```

### 📌 Criar uma nova tarefa

```http
POST /tasks
Content-Type: application/json
{
  "title": "Nova Tarefa"
}
```

### 📌 Atualizar status da tarefa

```http
PATCH /tasks/:id/status
Content-Type: application/json
{
  "status": "done"
}
```

### 📌 Excluir uma tarefa

```http
DELETE /tasks/:id
```

## 🛠️ Como Personalizar o Projeto

- Alterar o estilo no `frontend/components/TodoBoard.js`
- Modificar a estrutura do banco no `backend/src/tasks/task.entity.ts`
- Adicionar novas funcionalidades no `backend/src/tasks/tasks.service.ts`

---

📌 Projeto desenvolvido como um exemplo prático para aprender Next.js, NestJS e Docker. 🚀
🎉 Pronto! Agora você tem um **listatarefas completo** com **NestJS, Next.js e Docker**! 🚀

---

### 🚀 [ricardotecpro.github.io](https://ricardotecpro.github.io/)

