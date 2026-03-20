---
layout: default
title: **Arquivo 3: `modulo-03-desenvolvimento-web.md`**
---

### **Arquivo 3: `modulo-03-desenvolvimento-web.md`**

# 💻 Módulo 3: Desenvolvimento de Aplicações Web - Frontend e Backend

Com a infraestrutura pronta, vamos conectar o código. Este módulo foca na arquitetura de aplicações web modernas e como elas interagem com os servidores.

## 🏗️ Aula 1: A Arquitetura Frontend-Backend

Aplicações modernas seguem o princípio da **separação de responsabilidades**.

- **Frontend:** É a camada de apresentação, tudo que roda no navegador do usuário.
  - **Tecnologias:** HTML (estrutura), CSS (estilo), JavaScript (interatividade).
  - **Frameworks Populares:** React, Angular, Vue.js.

- **Backend:** É a camada de lógica de negócios, que roda no servidor.
  - **Responsabilidades:** Processar regras de negócio, acessar o banco de dados, gerenciar autenticação.
  - **Tecnologias:** Node.js, Python, Java, PHP, Ruby.

- **Comunicação via APIs:** O frontend e o backend se comunicam através de uma **API** (Application Programming Interface), geralmente seguindo o padrão **RESTful**. Os dados são trocados no formato **JSON**.

```mermaid
classDiagram
    direction LR
    class BrowserClient {
        +HTML/CSS/JS
        +realizarRequisicaoAPI()
    }
    class APIGateway {
        +String endpoint
        +autenticarRequisicao()
        +rotearParaServico()
    }
    class BackendService {
        -String logicaNegocio
        -DatabaseDriver dbDriver
        +processarDados()
        +acessarBancoDeDados()
    }
    class Database {
        +CRUD()
    }

    BrowserClient --|> APIGateway : "Faz requisição HTTP"
    APIGateway --|> BackendService : "Encaminha requisição"
    BackendService --|> Database : "Consulta/Modifica dados"
````

## ⚙️ Aula 2: O Papel do Backend na Infraestrutura

O backend não vive isolado. Ele precisa de um ambiente para ser executado e de um servidor web para receber as requisições do mundo exterior.

### Servidor Web + Aplicação Backend

O servidor web (Nginx/Apache) atua como um **proxy reverso** para a aplicação backend.

**Fluxo:**

1.  Requisição chega no Nginx (porta 80/443).
2.  Nginx identifica que a requisição é para a aplicação dinâmica.
3.  Nginx encaminha a requisição para o processo da aplicação (ex: um servidor Node.js na porta 3000).
4.  A aplicação processa a lógica e retorna a resposta para o Nginx.
5.  Nginx retorna a resposta para o cliente.

**Interface de comunicação:**

  - **Python:** WSGI (Web Server Gateway Interface), com servidores como `Gunicorn` ou `uWSGI`.
  - **PHP:** `PHP-FPM` (FastCGI Process Manager).
  - **Node.js:** O próprio Node.js possui um servidor HTTP embutido.

### Interação com Bancos de Dados

  - **SQL:** Bancos de dados relacionais (PostgreSQL, MySQL). Estrutura rígida de tabelas e colunas.
  - **NoSQL:** Bancos não-relacionais (MongoDB, Redis). Flexíveis, baseados em documentos, chave-valor, etc.

## 🎨 Aula 3: Frontend e a Rede

O frontend é responsável por carregar rápido e proporcionar uma experiência fluida, e isso depende muito de otimizações de rede.

### O Processo de Renderização

1.  Navegador recebe o HTML.
2.  Parseia o HTML e encontra referências a outros arquivos (`.css`, `.js`, imagens).
3.  Faz novas requisições para cada um desses arquivos (assets).
4.  Monta a página (DOM), aplica os estilos (CSSOM) e executa os scripts.

### Otimizações de Performance

  - **Minificação:** Remove espaços em branco e comentários de arquivos CSS e JS para reduzir seu tamanho.
  - **Concatenação (Bundling):** Agrupa múltiplos arquivos CSS ou JS em um único arquivo para diminuir o número de requisições HTTP.
  - **Requisições Assíncronas:** Usando a **Fetch API** ou `XMLHttpRequest` (AJAX), o JavaScript pode buscar dados do backend sem precisar recarregar a página inteira, melhorando drasticamente a experiência do usuário.

**Exemplo de uma resposta de API em JSON:**

```json
{
  "user": {
    "id": 101,
    "name": "Alex",
    "email": "alex@example.com",
    "isActive": true,
    "roles": ["admin", "editor"]
  }
}
```

---

