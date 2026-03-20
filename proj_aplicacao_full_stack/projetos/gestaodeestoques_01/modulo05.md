---
layout: default
title: MODULO05
---

Este guia fornecerá todos os conceitos e códigos completos para que os alunos possam criar uma documentação interativa e um sistema de tratamento de erros padronizado, elevando a qualidade da API a um nível profissional.

# 💎 Guia Didático Definitivo: Gestão de Estoques com Spring Boot

**Local:** Assis, SP
**Data:** 08 de Outubro de 2025

-----

## Módulo 5:  professionalism Professionalizando a API: Documentação e Erros

**Objetivo:** Transformar a API funcional que construímos em uma API profissional, que seja fácil de entender, consumir e previsível em seu comportamento. Ao final deste módulo, o aluno terá uma API auto-documentada com Swagger/OpenAPI e um sistema robusto de tratamento de erros.

-----

### \#\#\# Aula 5.1: Documentação Interativa com OpenAPI (`springdoc-openapi`)

**Conceito-Chave:** Uma API sem documentação é como um aparelho eletrônico sem manual de instruções. **OpenAPI** é a especificação padrão da indústria para criar esse "manual" de forma que tanto humanos quanto máquinas possam entendê-lo. A biblioteca `springdoc-openapi` automatiza a criação dessa documentação a partir do nosso código.

**Ação:** Para ter uma documentação interativa e funcional, basta adicionar uma única dependência ao nosso `pom.xml`.

#### Código: `pom.xml` (Adição de Dependência)

```xml
<dependency>
    <groupId>org.springdoc</groupId>
    <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
    <version>2.5.0</version>
</dependency>

```

**E é só isso\!** Após o Maven baixar a dependência, reinicie sua aplicação. Agora, duas novas URLs estão disponíveis:

  - `http://localhost:8080/v3/api-docs`: O "contrato" bruto da sua API em formato JSON.
  - `http://localhost:8080/swagger-ui.html`: Uma interface de usuário interativa, gerada a partir do JSON acima, onde você pode visualizar e até mesmo **testar** seus endpoints diretamente do navegador.

-----

### \#\#\# Aula 5.2: Enriquecendo a Documentação do Swagger

A documentação gerada automaticamente é boa, mas podemos (e devemos) enriquecê-la com descrições, exemplos e, crucialmente, informações de segurança.

**Ação 1:** Crie uma classe de configuração global para o OpenAPI, onde definiremos o título da API e como a segurança JWT deve ser representada na UI do Swagger.

#### Código: `config/OpenApiConfig.java` (Novo Arquivo)

```java
package br.com.aula.gestaodeestoques.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeIn;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import org.springframework.context.annotation.Configuration;

@Configuration
@OpenAPIDefinition(
    info = @Info(
        title = "API de Gestão de Estoques",
        version = "v1.0",
        description = "API RESTful para gerenciar produtos, categorias e fornecedores."
    )
)
@SecurityScheme(
    name = "bearerAuth", // Nome de referência para o esquema de segurança
    description = "Token JWT de autenticação",
    scheme = "bearer",
    type = SecuritySchemeType.HTTP,
    bearerFormat = "JWT",
    in = SecuritySchemeIn.HEADER
)
public class OpenApiConfig {}
```

**Ação 2:** Use anotações diretamente nos seus controllers para detalhar cada endpoint.

#### Código: `controller/ProdutoController.java` (Versão Anotada)

```java
package br.com.aula.gestaodeestoques.controller;

import br.com.aula.gestaodeestoques.dto.ProdutoDTO;
import br.com.aula.gestaodeestoques.dto.ProdutoFormDTO;
import br.com.aula.gestaodeestoques.service.ProdutoService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/produtos")
@Tag(name = "Produtos", description = "Endpoints para gerenciamento de produtos")
@SecurityRequirement(name = "bearerAuth") // Exige autenticação JWT para todos os endpoints nesta classe
public class ProdutoController {

    @Autowired
    private ProdutoService service;

    @Operation(summary = "Lista todos os produtos", description = "Retorna uma lista detalhada de todos os produtos cadastrados.")
    @GetMapping
    public ResponseEntity<List<ProdutoDTO>> findAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @Operation(summary = "Busca um produto por ID", description = "Retorna os detalhes de um produto específico.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Produto encontrado"),
            @ApiResponse(responseCode = "404", description = "Produto não encontrado")
    })
    @GetMapping("/{id}")
    public ResponseEntity<ProdutoDTO> findById(@PathVariable Integer id) {
        return ResponseEntity.ok(service.findById(id));
    }

    @Operation(summary = "Cria um novo produto", description = "Acessível apenas por usuários com papel 'ADMIN'.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Produto criado com sucesso"),
            @ApiResponse(responseCode = "400", description = "Dados de entrada inválidos"),
            @ApiResponse(responseCode = "403", description = "Acesso negado (usuário não é ADMIN)")
    })
    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ProdutoDTO> create(@Valid @RequestBody ProdutoFormDTO produtoFormDTO) {
        ProdutoDTO newDto = service.create(produtoFormDTO);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(newDto.id()).toUri();
        return ResponseEntity.created(uri).body(newDto);
    }

    @Operation(summary = "Deleta um produto", description = "Acessível apenas por usuários com papel 'ADMIN'.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "Produto deletado com sucesso"),
            @ApiResponse(responseCode = "404", description = "Produto não encontrado"),
            @ApiResponse(responseCode = "403", description = "Acesso negado")
    })
    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
```

**Resultado:** Volte para `http://localhost:8080/swagger-ui.html`. A interface agora está muito mais rica, com descrições, respostas possíveis e um cadeado nos endpoints, indicando que são protegidos. Há um botão "Authorize" no canto superior direito onde você pode inserir seu token (`Bearer <token>`) para testar os endpoints.

-----

### \#\#\# Aula 5.3: A Importância de Respostas de Erro Padronizadas

**Conceito-Chave:** Para um cliente de API (frontend), um erro inesperado não pode ser uma página HTML ou um JSON sem estrutura. Precisamos de um formato de erro consistente para que o frontend possa identificar o problema e apresentar uma mensagem amigável ao usuário.

**Ação:** Crie um DTO (um `record`) que servirá como o "contrato" para todas as respostas de erro da nossa API.

#### Código: `dto/ErrorResponseDTO.java` (Novo Arquivo)

```java
package br.com.aula.gestaodeestoques.dto;

import java.time.Instant;

public record ErrorResponseDTO(
    Instant timestamp,
    Integer status,
    String error,
    String message,
    String path
) {}
```

-----

### \#\#\# Aula 5.4: Tratamento de Exceções Global com `@RestControllerAdvice`

**Conceito-Chave:** Em vez de usar blocos `try-catch` em cada método do controller, podemos criar uma classe global com a anotação `@RestControllerAdvice`. Ela funciona como uma "rede de segurança" que intercepta exceções lançadas por qualquer controller e as transforma em respostas HTTP padronizadas.

**Ação:** Crie (ou reescreva) a classe `GlobalExceptionHandler` no pacote `exception`.

#### Código: `exception/GlobalExceptionHandler.java` (Arquivo Completo)

```java
package br.com.aula.gestaodeestoques.exception;

import br.com.aula.gestaodeestoques.dto.ErrorResponseDTO;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.Instant;
import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    // Handler para erros de validação (@Valid)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Object> handleValidationExceptions(MethodArgumentNotValidException ex, HttpServletRequest request) {
        Map<String, String> fieldErrors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            fieldErrors.put(fieldName, errorMessage);
        });
        
        // Corpo da resposta para erros de validação, incluindo detalhes de cada campo
        Map<String, Object> responseBody = new HashMap<>();
        responseBody.put("timestamp", Instant.now());
        responseBody.put("status", HttpStatus.BAD_REQUEST.value());
        responseBody.put("error", "Erro de Validação");
        responseBody.put("message", "Um ou mais campos contêm dados inválidos.");
        responseBody.put("fieldErrors", fieldErrors);
        responseBody.put("path", request.getRequestURI());

        return new ResponseEntity<>(responseBody, HttpStatus.BAD_REQUEST);
    }

    // Handler para nossa exceção customizada de "não encontrado"
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorResponseDTO> handleResourceNotFound(ResourceNotFoundException ex, HttpServletRequest request) {
        ErrorResponseDTO error = new ErrorResponseDTO(
            Instant.now(),
            HttpStatus.NOT_FOUND.value(),
            "Recurso Não Encontrado",
            ex.getMessage(),
            request.getRequestURI()
        );
        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
    }

    // Handler genérico para qualquer outra exceção não tratada (Erro 500)
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponseDTO> handleGenericException(Exception ex, HttpServletRequest request) {
        ErrorResponseDTO error = new ErrorResponseDTO(
            Instant.now(),
            HttpStatus.INTERNAL_SERVER_ERROR.value(),
            "Erro Interno no Servidor",
            "Ocorreu um erro inesperado. Por favor, contate o suporte.",
            request.getRequestURI()
        );
        // Em um sistema real, é crucial logar a exceção completa aqui
        // ex.printStackTrace();
        return new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
```

-----

### Conclusão do Módulo 5 e Próximos Passos

**Parabéns\!** Você transformou sua API em uma ferramenta de nível profissional. Agora ela é:

  - **Auto-documentada:** Qualquer desenvolvedor pode entender como usá-la através do Swagger UI.
  - **Previsível:** O comportamento em caso de erros é consistente e bem estruturado.
  - **Robusta:** Erros de validação e exceções inesperadas são tratados de forma elegante, sem expor detalhes internos do sistema.

Nossa API está agora em seu estado mais polido. Ela está pronta e esperando por um cliente para consumi-la.

No **próximo módulo**, vamos abordar a **Garantia de Qualidade**, aprendendo a escrever testes automatizados para garantir que toda a lógica de negócio que construímos funciona como esperado e continua funcionando conforme a aplicação evolui.

