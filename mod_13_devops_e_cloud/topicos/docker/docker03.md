# Manual Introdutório de Docker
---

## Sumário

1. O que é Docker?
    
2. Vantagens do Docker
    
3. Instalação do Docker
    
    - Windows
        
    - macOS
        
    - Linux
        
4. Primeiros Passos com Docker
    
    - Comandos básicos
        
5. Dockerfile: Conceitos e Exemplo
    
6. Docker Compose: Conceitos e Exemplo
    
7. Configuração de Ambientes com Docker
    
    - Java
        
    - Python
        
    - JavaScript (Node.js)
        
    - MySQL
        
    - PostgreSQL
        
    - Nginx
        
8. Como manter dados permanentes (Persistência de Dados)
    
9. Exemplo de um Sistema Simples
    
    - Flask + SQLite
        
    - Node.js + MongoDB
        
    - Java + H2
        
10. Boas práticas
    
11. Referências
    

---

## 1. O que é Docker?

Docker é uma plataforma que permite empacotar aplicações e suas dependências em **containers**, garantindo que funcionem de forma consistente em diferentes ambientes.

---

## 2. Vantagens do Docker

- Portabilidade
    
- Isolamento de ambiente
    
- Agilidade no desenvolvimento
    
- Facilidade de versionamento e distribuição
    
- Compatível com DevOps e CI/CD
    

---

## 3. Instalação do Docker

### Windows

1. Baixe o [Docker Desktop](https://www.docker.com/products/docker-desktop/)
    
2. Execute o instalador e siga os passos
    
3. Verifique se a **virtualização** está habilitada na BIOS
    
4. Após a instalação, reinicie o computador
    
5. Teste no terminal (PowerShell ou CMD):
    
    ```bash
    docker --version
    ```
    

### macOS

1. Baixe o Docker Desktop para macOS [aqui](https://www.docker.com/products/docker-desktop/)
    
2. Instale o app arrastando-o para a pasta Aplicativos
    
3. Teste no terminal:
    
    ```bash
    docker --version
    ```
    

### Linux (Ubuntu/Debian)

```bash
sudo apt update
sudo apt install docker.io -y
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker $USER
docker --version
```

Após isso, reinicie o sistema ou faça logout/login.

---

## 4. Primeiros Passos com Docker

Comandos básicos:

```bash
docker run hello-world             # Teste inicial
docker ps                          # Contêiners em execução
docker ps -a                       # Todos os contêiners
docker images                      # Imagens disponíveis
docker pull nome_da_imagem        # Baixar imagem
docker stop id_ou_nome             # Parar contêiner
docker rm id_ou_nome               # Remover contêiner
docker rmi nome_da_imagem         # Remover imagem
```

---

## 5. Dockerfile: Conceito e Exemplo

Um **Dockerfile** é um script que define como construir uma imagem personalizada.

### Exemplo (Python)

```Dockerfile
FROM python:3.10-slim
WORKDIR /app
COPY ../modulo_08_ambiente_desenvolvimento/nosql .
RUN pip install -r requirements.txt
CMD ["python", "app.py"]
```

---

## 6. Docker Compose

O `docker-compose.yml` permite orquestrar vários containers.

### Exemplo

```yaml
version: "3.8"
services:
   web:
      build: ../..
      ports:
         - "5000:5000"
   db:
      image: mysql:8
      environment:
         MYSQL_ROOT_PASSWORD: senha
         MYSQL_DATABASE: minha_app
```

Execute com:

```bash
docker-compose up
```

---

## 7. Configuração de Linguagens e Serviços

### Java

```Dockerfile
FROM openjdk:17
COPY . /app
WORKDIR /app
RUN javac Main.java
CMD ["java", "Main"]
```

### Python

```Dockerfile
FROM python:3.11
COPY . /app
WORKDIR /app
RUN pip install -r requirements.txt
CMD ["python", "app.py"]
```

### Node.js (JavaScript)

```Dockerfile
FROM node:18
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "start"]
```

### MySQL

```yaml
services:
  mysql:
    image: mysql:8
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: escola
    ports:
      - "3306:3306"
```

### PostgreSQL

```yaml
services:
  postgres:
    image: postgres:16
    environment:
      POSTGRES_PASSWORD: senha
      POSTGRES_DB: projeto
    ports:
      - "5432:5432"
```

### Nginx

```yaml
services:
  nginx:
    image: nginx:latest
    ports:
      - "80:80"
    volumes:
      - ./site:/usr/share/nginx/html
```

---

## 8. Como manter dados permanentes (Persistência de Dados)

Por padrão, quando um container é removido ou reiniciado, seus dados internos são perdidos. Para evitar isso, usamos **volumes** e **bind mounts**.

### 8.1 Volumes

Volumes são armazenados no diretório do Docker (`/var/lib/docker/volumes/`) e são gerenciados pelo Docker.

#### Criando um volume:

```bash
docker volume create meus_dados
```

#### Usando em um container:

```bash
docker run -d \
  --name mysql-persistente \
  -e MYSQL_ROOT_PASSWORD=senha \
  -v meus_dados:/var/lib/mysql \
  mysql:8
```

Esse volume mantém os dados do banco mesmo se o container for removido.

### 8.2 Bind Mounts

Bind mounts conectam uma pasta do seu sistema diretamente ao container.

```bash
docker run -v /home/usuario/appdata:/app/data myapp
```

Tudo que for salvo em `/app/data` dentro do container será armazenado em `/home/usuario/appdata` no host.

### 8.3 Exemplo no Docker Compose (com volume)

```yaml
version: "3.8"
services:
  postgres:
    image: postgres:16
    environment:
      POSTGRES_PASSWORD: senha
    volumes:
      - dados_postgres:/var/lib/postgresql/data
volumes:
  dados_postgres:
```

> ⚠️ **Dica:** Nunca armazene dados importantes apenas dentro do container sem montar um volume ou bind mount!

---

## 9. Exemplo de um Sistema Simples

### 9.1 Flask + SQLite

#### Objetivo:

Criar uma aplicação de cadastro de tarefas com backend em Python (Flask) e banco de dados SQLite, usando Docker Compose.

#### Estrutura do Projeto:

```
meu_app/
├── app.py
├── requirements.txt
├── Dockerfile
├── docker-compose.yml
```

#### app.py:

```python
from flask import Flask, request, jsonify
app = Flask(__name__)
tarefas = []

@app.route('/tarefas', methods=['POST'])
def adicionar():
    tarefas.append(request.json)
    return jsonify(tarefas)

@app.route('/tarefas', methods=['GET'])
def listar():
    return jsonify(tarefas)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
```

#### requirements.txt:

```
flask
```

#### Dockerfile:

```Dockerfile
FROM python:3.10
WORKDIR /app
COPY . .
RUN pip install -r requirements.txt
CMD ["python", "app.py"]
```

#### docker-compose.yml:

```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "5000:5000"
    volumes:
      - .:/app
```

Acesse em `http://localhost:5000/tarefas`

### 9.2 Node.js + MongoDB

#### Objetivo:

Aplicação simples de cadastro de produtos usando Node.js e banco de dados MongoDB, com persistência.

#### Estrutura do Projeto:

```
node_mongo_app/
├── server.js
├── package.json
├── Dockerfile
├── docker-compose.yml
```

#### server.js:

```javascript
const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

mongoose.connect('mongodb://mongo:27017/loja');

const Produto = mongoose.model('Produto', { nome: String });

app.post('/produtos', async (req, res) => {
  const prod = new Produto(req.body);
  await prod.save();
  res.send(prod);
});

app.get('/produtos', async (req, res) => {
  const lista = await Produto.find();
  res.send(lista);
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
```

#### package.json:

```json
{
  "name": "node-mongo",
  "version": "1.0.0",
  "main": "server.js",
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^7.2.2"
  },
  "scripts": {
    "start": "node server.js"
  }
}
```

#### Dockerfile:

```Dockerfile
FROM node:18
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "start"]
```

#### docker-compose.yml:

```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - .:/app
  mongo:
    image: mongo
    volumes:
      - dados_mongo:/data/db
volumes:
  dados_mongo:
```

Execute com:

```bash
docker-compose up
```

Acesse `http://localhost:3000/produtos`

### 9.3 Java + H2

#### Objetivo:

Criar uma API REST simples usando Java com Spring Boot e banco de dados H2 em memória, rodando via Docker.

#### Estrutura do Projeto:

```
java_h2_app/
├── Dockerfile
├── docker-compose.yml
└── target/
    └── app.jar
```

#### Dockerfile:

```Dockerfile
FROM openjdk:17
COPY target/app.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
```

#### docker-compose.yml:

```yaml
version: '3.8'
services:
  java_app:
    build: .
    ports:
      - "8080:8080"
```

#### Exemplo de aplicação (Spring Boot):

Aplicação deve expor a porta 8080 e conter uma classe com um controlador REST como:

```java
@RestController
public class HelloController {
    @GetMapping("/")
    public String hello() {
        return "API funcionando com Java e Docker!";
    }
}
```

Compile com Maven (`mvn clean package`) e coloque o `app.jar` em `target/`.

Acesse em `http://localhost:8080`

---

## 10. Boas Práticas

### Organização

- Estruture bem seu projeto (ex: `app/`, `data/`, `logs/`)
    
- Use um `Dockerfile` limpo e com instruções bem ordenadas
    
- Adicione um `.dockerignore` para evitar copiar arquivos desnecessários (ex: `.git`, `__pycache__`, `*.log`, etc.)
    

### Segurança

- Nunca exponha senhas no Dockerfile ou `docker-compose.yml`
    
- Prefira usar variáveis de ambiente e arquivos `.env`
    
- Execute processos com usuários não-root quando possível
    

### Eficiência

- Use imagens oficiais e otimizadas (ex: `python:3.11-slim`)
    
- Faça cache das dependências em etapas intermediárias do Dockerfile
    
- Minimize o número de camadas no Dockerfile
    

### Manutenção

- Fixe as versões das imagens (ex: `node:18-alpine` em vez de `node:latest`)
    
- Use tags claras nos containers para facilitar identificação
    
- Limpe imagens, containers e volumes que não estão sendo usados (`docker system prune`)
    

### Desenvolvimento

- Teste os comandos manualmente antes de automatizar com scripts
    
- Use volumes para evitar rebuilds frequentes em ambiente de desenvolvimento
    
- Use `docker-compose` para facilitar a orquestração de múltiplos serviços
    

### Produção

- Separe ambientes de desenvolvimento e produção em arquivos diferentes (ex: `docker-compose.prod.yml`)
    
- Monitore o uso de recursos dos containers
    
- Faça backup dos volumes importantes regularmente
    

---

## 11. Referências

- [Documentação Oficial do Docker](https://docs.docker.com/)
    
- [DockerHub](https://hub.docker.com/)
    
- Tutoriais da comunidade no GitHub e Medium
---

### 🚀 [ricardotecpro.github.io](https://ricardotecpro.github.io/)
