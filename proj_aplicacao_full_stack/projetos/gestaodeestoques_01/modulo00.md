---
layout: default
title: MODULO00
---

Abaixo está a estrutura completa do nosso projeto **"Gestão de Estoques"**, detalhada com comentários que explicam o propósito de cada diretório e arquivo principal.

-----

## 🗺️ Estrutura de Pastas e Arquivos do Projeto

A organização do nosso projeto segue as convenções do Maven e as melhores práticas para uma aplicação Spring Boot com uma API REST desacoplada e um frontend SPA.

### Visão Geral da Estrutura

```
gestaodeestoques/
├── .mvn/                                  // Arquivos do Maven Wrapper
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── br/com/aula/gestaodeestoques/
│   │   │       ├── GestaodeestoquesApplication.java    // Ponto de entrada da aplicação Spring Boot
│   │   │       ├── config/
│   │   │       │   ├── CustomAuthenticationSuccessHandler.java // (Não utilizado na versão API REST, mas mantido para referência de estudos)
│   │   │       │   ├── DataSeeder.java                     // Popula o banco de dados com dados iniciais
│   │   │       │   ├── OpenApiConfig.java                  // Configuração global do Swagger/OpenAPI
│   │   │       │   └── SecurityConfig.java                 // Configuração principal do Spring Security (stateless com JWT)
│   │   │       │   └── security/
│   │   │       │       ├── JwtAuthenticationFilter.java    // O "segurança" que valida o token em cada requisição
│   │   │       │       └── JwtTokenProvider.java           // Classe utilitária para criar e validar tokens JWT
│   │   │       ├── controller/
│   │   │       │   ├── AdminController.java                // Endpoint de exemplo para administradores
│   │   │       │   ├── AuthenticationController.java       // Endpoint para login (/api/auth/login)
│   │   │       │   ├── CategoriaController.java            // Endpoints para /api/categorias
│   │   │       │   ├── FornecedorController.java           // Endpoints para /api/fornecedores
│   │   │       │   └── ProdutoController.java              // Endpoints para /api/produtos
│   │   │       ├── dto/
│   │   │       │   ├── CategoriaDTO.java
│   │   │       │   ├── ErrorResponseDTO.java               // DTO para padronizar respostas de erro
│   │   │       │   ├── FornecedorDTO.java
│   │   │       │   ├── ProdutoDTO.java                     // DTO para exibir produtos
│   │   │       │   ├── ProdutoFormDTO.java                 // DTO para receber dados de formulários de produto
│   │   │       │   └── auth/
│   │   │       │       ├── JwtAuthenticationResponse.java  // DTO para a resposta de login com o token
│   │   │       │       └── LoginRequest.java               // DTO para a requisição de login
│   │   │       ├── exception/
│   │   │       │   ├── GlobalExceptionHandler.java         // Handler global para tratar exceções da API
│   │   │       │   └── ResourceNotFoundException.java      // Exceção customizada para erros 404
│   │   │       ├── mapper/
│   │   │       │   ├── CategoriaMapper.java
│   │   │       │   ├── FornecedorMapper.java
│   │   │       │   └── ProdutoMapper.java
│   │   │       ├── model/
│   │   │       │   ├── Categoria.java
│   │   │       │   ├── Fornecedor.java
│   │   │       │   ├── Papel.java
│   │   │       │   ├── Produto.java
│   │   │       │   └── Usuario.java
│   │   │       ├── repository/
│   │   │       │   ├── CategoriaRepository.java
│   │   │       │   ├── FornecedorRepository.java
│   │   │       │   ├── PapelRepository.java
│   │   │       │   ├── ProdutoRepository.java
│   │   │       │   └── UsuarioRepository.java
│   │   │       └── service/
│   │   │           ├── DatabaseUserDetailsService.java     // Carrega dados do usuário para o Spring Security
│   │   │           ├── CategoriaService.java, FornecedorService.java, ProdutoService.java // Interfaces dos serviços
│   │   │           └── impl/
│   │   │               └── CategoriaServiceImpl.java, FornecedorServiceImpl.java, ProdutoServiceImpl.java // Implementações
│   │   └── resources/
│   │       ├── application.properties                      // Configurações principais (H2, JWT secret)
│   │       ├── application-prod.properties                 // Configurações para o ambiente de produção (PostgreSQL)
│   │       ├── schema.sql                                  // Script de criação das tabelas para o H2
│   │       └── static/                                     // <-- Raiz de todos os arquivos do Frontend (SPA)
│   │           ├── css/
│   │           │   └── style.css
│   │           ├── js/
│   │           │   ├── api.js                              // Módulo para centralizar as chamadas à API
│   │           │   ├── auth.js                             // Módulo para gerenciar autenticação (token, login, logout)
│   │           │   └── router.js                           // Módulo para roteamento no lado do cliente
│   │           ├── index.html                              // A "casca" principal da SPA
│   │           └── login.html                              // Página de login estática
│   └── test/
│       └── java/
│           └── br/com/aula/gestaodeestoques/
│               ├── GestaodeestoquesApplicationTests.java
│               ├── controller/
│               │   └── ProdutoControllerTest.java          // Teste de integração para o controller de produtos
│               └── service/
│                   └── impl/
│                       └── ProdutoServiceImplTest.java     // Teste unitário para o serviço de produtos
├── .gitignore                                 // Arquivos e pastas a serem ignorados pelo Git
├── Dockerfile                                 // Receita para construir a imagem Docker da aplicação
├── docker-compose.yml                         // Orquestrador para subir a API e o banco PostgreSQL
├── mvnw                                       // Executável do Maven Wrapper para Unix/Linux
├── mvnw.cmd                                   // Script do Maven Wrapper para Windows
└── pom.xml                                    // O coração do projeto Maven: dependências e build
```

-----

### \#\#\# Análise das Responsabilidades de cada Diretório

Esta estrutura não é aleatória; ela segue o princípio da **Separação de Responsabilidades** para manter o projeto organizado e escalável.

#### 📁 `src/main/java/br/com/aula/gestaodeestoques/` - O Coração do Backend

  - **`config/`**: Contém todas as classes de configuração do Spring. A separação em um subpacote `security/` ajuda a isolar a complexidade da autenticação JWT.
  - **`controller/`**: A camada mais externa do backend. Responsável por expor os endpoints da API, receber requisições HTTP e retornar respostas JSON. **Não contém lógica de negócio**.
  - **`dto/`**: Objetos de Transferência de Dados. São os "contratos" da nossa API, definindo a estrutura dos dados que entram e saem.
  - **`exception/`**: Classes para tratamento de erros, incluindo o `GlobalExceptionHandler` que padroniza as respostas de erro da API.
  - **`mapper/`**: Classes responsáveis pela conversão entre as entidades do banco (`model`) e os objetos de transferência (`dto`).
  - **`model/`**: As entidades que representam as tabelas do nosso banco de dados. São a representação interna dos nossos dados.
  - **`repository/`**: Interfaces do Spring Data que definem como acessar o banco de dados. Abstraem toda a complexidade do JDBC/SQL.
  - **`service/`**: O "cérebro" da aplicação. Contém toda a lógica de negócio (regras, orquestração de operações). As `impl/` são as implementações concretas das interfaces de serviço.

#### 📁 `src/main/resources/` - Configurações e o Frontend

  - **`application.properties`**: Arquivos de configuração do Spring. O uso de perfis (ex: `application-prod.properties`) permite ter configurações diferentes para ambientes diferentes.
  - **`schema.sql`**: Usado pelo H2 para criar o banco em memória, ideal para o ambiente de desenvolvimento.
  - **`static/`**: **Este é o nosso frontend**. Como estamos construindo uma SPA, todos os arquivos HTML, CSS e JavaScript são servidos como arquivos estáticos pelo Spring Boot. O backend não sabe e não se importa com o conteúdo desses arquivos; ele apenas os entrega ao navegador.

#### 📁 Raiz do Projeto (`/`) - Ferramentas de Build e Deploy

  - **`pom.xml`**: Define todas as dependências do projeto e como ele deve ser compilado e empacotado.
  - **`Dockerfile` e `docker-compose.yml`**: Ferramentas de DevOps. Definem como nossa aplicação será "empacotada" em um container e como ela irá rodar junto com outros serviços (como um banco de dados) em qualquer ambiente.

Esta estrutura clara e bem definida é a marca de um projeto profissional, tornando-o mais fácil de entender, manter e escalar no futuro.

