# Manual Introdutório de Docker

**Curso: Análise e Desenvolvimento de Sistemas**  
**Professor: Ricardo**

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
    
10. Boas práticas
    
11. Referências
    

---

## 1. O que é Docker?

Docker é uma plataforma que permite empacotar aplicações e suas dependências em **containers**, garantindo que funcionem de forma consistente em diferentes ambientes.

![Conceito de container vs. VM](https://docs.docker.com/images/Container_vs_VM.png)

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

### Objetivo:

Criar uma aplicação de cadastro de tarefas com backend em Python (Flask) e banco de dados SQLite, usando Docker Compose.

### Estrutura do Projeto:

```
meu_app/
├── app.py
├── requirements.txt
├── Dockerfile
├── docker-compose.yml
```

### app.py:

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

### requirements.txt:

```
flask
```

### Dockerfile:

```Dockerfile
FROM python:3.10
WORKDIR /app
COPY . .
RUN pip install -r requirements.txt
CMD ["python", "app.py"]
```

### docker-compose.yml:

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

### Executando:

```bash
docker-compose up
```

Acesse em `http://localhost:5000/tarefas`

---

## 10. Boas Práticas

- Use `.dockerignore` para ignorar arquivos desnecessários
    
- Sempre fixe versões nas imagens
    
- Use volumes para persistência de dados
    
- Teste comandos manualmente antes de automatizar
    
- Mantenha os containers leves
    

---

## 11. Referências

- [Documentação Oficial do Docker](https://docs.docker.com/)
    
- [DockerHub](https://hub.docker.com/)
    
- Tutoriais da comunidade no GitHub e Medium
---

### 🚀 [ricardotecpro.github.io](https://ricardotecpro.github.io/)
