# Módulo Back-end: API REST, Camadas, CRUD, Exceções e Validações ⚙️

Este capítulo aborda os pilares da construção de um back-end moderno: a criação de uma API REST, a organização do código em camadas, a implementação das operações básicas de um CRUD e o tratamento de exceções e validações de forma profissional.

## Conceitos Fundamentais de API REST 🌐

### O que é uma API?

  * **API (Application Programming Interface)**: É um conjunto de funcionalidades expostas por uma aplicação ou módulo. A ideia é permitir que outra aplicação possa acessar e consumir essas funcionalidades. Funciona como um contrato bem definido entre o provedor da funcionalidade e o seu consumidor.
  * **API Web**: É uma API que é disponibilizada através da web. Suas funcionalidades são acessadas por meio de *endpoints* (endereços) web, utilizando o protocolo HTTP e seus elementos, como host, porta, rotas, parâmetros e corpo da requisição (payload).
  * **API REST**: É uma API Web projetada para estar em conformidade com as restrições e princípios do padrão de arquitetura REST (Representational State Transfer).

### Arquitetura Cliente-Servidor

No contexto de aplicações web, temos uma separação clara entre o **front-end** (cliente, que roda no navegador) e o **back-end** (servidor, onde a lógica e o acesso a dados residem). A comunicação entre eles ocorre por meio de requisições web, geralmente usando o protocolo HTTP e trocando dados no formato JSON.

  * **Back-end**: É todo o sistema que roda do lado do servidor.
  * **API**: É o conjunto de funcionalidades que o back-end expõe para serem consumidas pelo front-end ou por outros sistemas.

### Princípios do Padrão REST

Uma API é considerada "RESTful" quando segue um conjunto de princípios, incluindo:

  * **Cliente/Servidor com HTTP**
  * **Comunicação *Stateless***: Cada requisição do cliente para o servidor deve conter toda a informação necessária para ser entendida e processada, sem depender de um estado armazenado no servidor.
  * ***Cache***: As respostas do servidor devem ser passíveis de serem cacheadas pelo cliente para melhorar a performance.
  * **Interface Uniforme**: O uso de um formato padronizado para representar os recursos.
  * **Sistema em Camadas**
  * **Código sob Demanda** (Opcional)

### Recursos e URLs

Em uma API REST, as funcionalidades são organizadas na forma de **recursos** (por exemplo: produtos, clientes, pedidos). Cada recurso é identificado por uma URL (Universal Resource Locator) única.

A URL deve se referir ao recurso pelo seu nome (substantivo), e não pela ação a ser executada.

  * `GET /products` -\> Obter a lista de produtos.
  * `GET /products?page=3` -\> Obter a terceira página da lista de produtos.
  * `GET /products/1` -\> Obter o produto com ID 1.
  * `GET /products/1/categories` -\> Obter as categorias do produto com ID 1.

A ação desejada deve ser expressa pelo verbo HTTP, e não pela rota.

  * **ERRADO**: `GET /listProduct` ou `GET /insertProduct`.
  * **CORRETO**: `GET /products` para listar e `POST /products` para inserir.

### Verbos HTTP e Códigos de Resposta

#### Principais Verbos (Métodos) HTTP

  * **GET**: Obter/ler um recurso.
  * **POST**: Criar um novo recurso.
  * **PUT**: Salvar/atualizar um recurso de forma **idempotente**. Uma operação é idempotente quando executá-la múltiplas vezes produz o mesmo resultado que executá-la uma única vez.
  * **DELETE**: Deletar um recurso.

#### Códigos de Resposta HTTP

O servidor responde a cada requisição com um código de status HTTP, agrupados em categorias:

  * **1xx**: Respostas de informação.
  * **2xx**: Respostas de sucesso (Ex: `200 OK`, `201 Created`).
  * **3xx**: Redirecionamentos.
  * **4xx**: Erros do cliente (Ex: `404 Not Found`, `400 Bad Request`).
  * **5xx**: Erros do servidor (Ex: `500 Internal Server Error`).

## Organização em Camadas (Layered Architecture) 🏛️

Aplicações back-end são organizadas em camadas para separar as responsabilidades, tornando o sistema mais fácil de manter e evoluir. Cada camada tem uma responsabilidade bem definida e só pode depender de componentes da mesma camada ou da camada imediatamente abaixo.

### Responsabilidades das Camadas

  * **Controlador REST (Controller)**: É a porta de entrada da API. Sua responsabilidade é receber as requisições HTTP, extrair os dados e encaminhá-los para a camada de serviço. No contexto de uma API REST, as "interações do usuário" são as próprias requisições.
  * **Camada de Serviço (Service)**: Contém a lógica de negócio da aplicação. Um método de serviço deve ter um significado de negócio claro e pode orquestrar várias operações, como verificar estoque, salvar um pedido e enviar um e-mail. É nesta camada que as transações de banco de dados são gerenciadas.
  * **Camada de Acesso a Dados (Repository)**: Sua única responsabilidade é realizar as operações "individuais" de acesso ao banco de dados (inserir, buscar, atualizar, deletar).

## DTO (Data Transfer Object) 📦

### O que é um DTO?

Um DTO (Data Transfer Object) é um objeto simples que tem como único propósito carregar dados entre as camadas da aplicação, especialmente entre o back-end e o front-end. Ele não é gerenciado por uma biblioteca ORM (como o Hibernate) e não contém lógica de negócio.

### Por que usar DTOs?

1.  **Projeção de Dados**: Permite controlar exatamente quais dados são enviados pela API.
      * **Segurança**: Evita expor dados sensíveis da entidade, como senhas ou informações internas.
      * **Economia de Tráfego**: Envia apenas os dados necessários para uma tela específica, otimizando a performance.
      * **Flexibilidade**: Permite que a API trafegue diferentes representações dos mesmos dados, como uma versão simplificada para uma lista (`{id, nome}`) e uma versão completa para uma tela de detalhes (`{id, nome, salario, email, ...}`).
2.  **Separação de Responsabilidades**: Mantém o tráfego de dados no controlador simples, enquanto as entidades (gerenciadas pelo ORM) e as transações ficam restritas às camadas de serviço e repositório.

### Copiando Dados (Entity -\> DTO)

Para transferir dados de uma entidade para um DTO, podem ser usadas duas abordagens principais:

  * **Cópia Manual**: Através de um construtor no DTO que recebe a entidade ou usando métodos `set`.
  * **Bibliotecas de Mapeamento**: Usar uma biblioteca como o ModelMapper, que copia automaticamente os atributos com o mesmo nome de um objeto para outro.

## Implementando um CRUD ✏️

**CRUD** é um acrônimo para **Create, Retrieve, Update, Delete** (Criar, Recuperar, Atualizar, Deletar), que representam as quatro operações básicas de persistência de dados.

### Operações de Back-end para um CRUD

Para um caso de uso como "Manter Produtos", as operações de back-end correspondentes seriam:

  * **(C)reate**: Salvar um novo produto.
  * **(R)etrieve**: Recuperar um produto por ID e recuperar todos os produtos de forma paginada.
  * **(U)pdate**: Atualizar um produto existente, dado o seu ID.
  * **(D)elete**: Deletar um produto, dado o seu ID.

## Tratamento de Exceções 🚨

### Códigos de Erro Comuns em APIs

  * **400 (Bad Request)**: Erro genérico do lado do cliente, geralmente por dados inválidos.
  * **401 (Unauthorized)**: Falha de autenticação (usuário não logado).
  * **403 (Forbidden)**: Acesso negado. O usuário está autenticado, mas não tem permissão para acessar o recurso.
  * **404 (Not Found)**: O recurso solicitado não foi encontrado.
  * **422 (Unprocessable Entity)**: A requisição está bem formada, mas não pôde ser processada, geralmente devido a um erro de validação de negócio.

### Tratamento Global com @ControllerAdvice

O Spring oferece a anotação `@ControllerAdvice` para centralizar o tratamento de exceções. Uma classe com esta anotação pode conter métodos que capturam exceções específicas lançadas em qualquer controlador, evitando a repetição de blocos `try-catch`.

```java
@ControllerAdvice
public class ControllerExceptionHandler {

    // Este método irá capturar todas as CustomException lançadas pela aplicação
    @ExceptionHandler(CustomException.class)
    public ResponseEntity<CustomError> handleCustomException(CustomException e, HttpServletRequest request) {
        HttpStatus status = HttpStatus.NOT_FOUND; // Ex: 404
        // 'CustomError' e 'CustomException' são classes criadas pelo desenvolvedor
        CustomError err = new CustomError(/* ... */);
        return ResponseEntity.status(status).body(err);
    }
}
```

## Validação de Dados ✅

A validação de dados de entrada é crucial para a integridade do sistema. O **Bean Validation** é uma especificação padrão do Jakarta EE para isso.

Para utilizá-lo em um projeto Maven com Spring Boot, as seguintes dependências são necessárias:

```xml
<dependency>
    <groupId>jakarta.validation</groupId>
    <artifactId>jakarta.validation-api</artifactId>
    <version>3.0.2</version>
</dependency>

<dependency>
    <groupId>org.hibernate</groupId>
    <artifactId>hibernate-validator</artifactId>
    <version>8.0.0.CR2</version>
</dependency>
```

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)

