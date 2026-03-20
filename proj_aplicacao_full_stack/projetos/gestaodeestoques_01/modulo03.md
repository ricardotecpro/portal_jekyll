---
layout: default
title: MODULO03
---

Este guia fornecerá todos os conceitos e códigos completos para que os alunos possam expor a inteligência do sistema para o mundo exterior de forma padronizada e profissional.

# 💎 Guia Didático Definitivo: Gestão de Estoques com Spring Boot

-----

## Módulo 3: 🔌 Construindo a API REST

**Objetivo:** Expor a lógica de negócio, que criamos no Módulo 2, através de endpoints HTTP. Ao final deste módulo, o aluno terá uma API REST completamente funcional, capaz de realizar todas as operações de CRUD (Create, Read, Update, Delete), pronta para ser consumida por qualquer cliente (como um frontend SPA ou um aplicativo mobile).

-----

### \#\#\# Aula 3.1: Introdução a APIs REST e `@RestController`

**Conceito-Chave: API REST (Representational State Transfer)**
Pense em uma API REST como um "garçom" para a sua aplicação. O cliente (frontend) faz um pedido (requisição HTTP) para um "prato" específico (um recurso, como `/produtos`), e o garçom (a API) vai até a cozinha (a camada de serviço) e traz de volta o que foi pedido (uma representação do recurso, geralmente em formato JSON).

As principais regras são:

1.  **Comunicação Cliente-Servidor:** São sistemas separados.
2.  **Stateless:** O servidor não guarda informações sobre o cliente entre as requisições.
3.  **Recursos:** Tudo é um recurso, identificado por uma URL (ex: `/api/produtos/1`).

**Conceito-Chave: `@RestController`**
No Spring, esta anotação é um atalho poderoso. Ela combina duas outras anotações:

  - `@Controller`: Marca a classe como um componente Spring que lida com requisições web.
  - `@ResponseBody`: Indica que o valor retornado por um método deve ser serializado (convertido) diretamente no corpo da resposta HTTP. Para APIs, isso quase sempre significa converter um objeto Java em JSON.

**Ação:** Crie o pacote `br.com.aula.gestaodeestoques.controller`. É aqui que nossos "garçons" irão morar.

-----

### \#\#\# Aula 3.2: Mapeando Verbos HTTP para Operações de CRUD

**Conceito-Chave:** O REST utiliza os verbos (métodos) do protocolo HTTP para indicar a intenção da operação sobre um recurso.

| Verbo HTTP | Operação CRUD | Exemplo de Endpoint | Descrição                                  |
| :--------- | :------------ | :------------------ | :----------------------------------------- |
| `GET`      | **R**ead      | `/api/produtos`     | Busca uma lista de todos os produtos.      |
| `GET`      | **R**ead      | `/api/produtos/{id}`| Busca um único produto pelo seu ID.        |
| `POST`     | **C**reate    | `/api/produtos`     | Cria um novo produto.                      |
| `PUT`      | **U**pdate    | `/api/produtos/{id}`| Atualiza um produto existente pelo seu ID. |
| `DELETE`   | **D**elete    | `/api/produtos/{id}`| Deleta um produto existente pelo seu ID.   |

O Spring nos dá anotações diretas para mapear cada um desses verbos:

  - `@GetMapping`
  - `@PostMapping`
  - `@PutMapping`
  - `@DeleteMapping`

-----

### \#\#\# Aula 3.3: Manipulando Respostas HTTP com `ResponseEntity`

**Conceito-Chave:** Uma resposta HTTP não é apenas o dado (o corpo JSON), mas também um **Status Code** que informa ao cliente o resultado da operação. O `ResponseEntity` é uma classe do Spring que nos dá controle total sobre a resposta.

**Status Codes mais comuns em APIs REST:**

  - `200 OK`: Sucesso. A requisição (geralmente um `GET`) foi bem-sucedida.
  - `201 Created`: Sucesso. Um novo recurso foi criado com sucesso (usado em `POST`).
  - `204 No Content`: Sucesso. A operação (geralmente `DELETE`) foi bem-sucedida, mas não há nada a retornar no corpo.
  - `400 Bad Request`: Erro do cliente. A requisição é malformada ou contém dados inválidos.
  - `401 Unauthorized`: Erro do cliente. Requer autenticação.
  - `403 Forbidden`: Erro do cliente. Autenticado, mas sem permissão para acessar o recurso.
  - `404 Not Found`: Erro do cliente. O recurso solicitado não existe.
  - `500 Internal Server Error`: Erro do servidor. Algo inesperado aconteceu no backend.

-----

### \#\#\# Aula 3.4: Implementando os `Controllers`

**Ação:** Agora vamos juntar todos os conceitos e criar os controllers para nossas entidades. Eles irão injetar e utilizar as interfaces de serviço que criamos no Módulo 2.

#### Código: `controller/CategoriaController.java`

```java
package br.com.aula.gestaodeestoques.controller;

import br.com.aula.gestaodeestoques.dto.CategoriaDTO;
import br.com.aula.gestaodeestoques.service.CategoriaService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/categorias")
public class CategoriaController {

    @Autowired
    private CategoriaService service;

    @GetMapping
    public ResponseEntity<List<CategoriaDTO>> findAll() {
        List<CategoriaDTO> list = service.findAll();
        return ResponseEntity.ok(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CategoriaDTO> findById(@PathVariable Integer id) {
        CategoriaDTO dto = service.findById(id);
        return ResponseEntity.ok(dto);
    }

    @PostMapping
    public ResponseEntity<CategoriaDTO> create(@Valid @RequestBody CategoriaDTO categoriaDTO) {
        CategoriaDTO newDto = service.create(categoriaDTO);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(newDto.id()).toUri();
        return ResponseEntity.created(uri).body(newDto);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CategoriaDTO> update(@PathVariable Integer id, @Valid @RequestBody CategoriaDTO categoriaDTO) {
        CategoriaDTO updatedDto = service.update(id, categoriaDTO);
        return ResponseEntity.ok(updatedDto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
```

#### Código: `controller/FornecedorController.java`

```java
package br.com.aula.gestaodeestoques.controller;

import br.com.aula.gestaodeestoques.dto.FornecedorDTO;
import br.com.aula.gestaodeestoques.service.FornecedorService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/fornecedores")
public class FornecedorController {

    @Autowired
    private FornecedorService service;

    @GetMapping
    public ResponseEntity<List<FornecedorDTO>> findAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @PostMapping
    public ResponseEntity<FornecedorDTO> create(@Valid @RequestBody FornecedorDTO fornecedorDTO) {
        FornecedorDTO newDto = service.create(fornecedorDTO);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(newDto.id()).toUri();
        return ResponseEntity.created(uri).body(newDto);
    }

    // ... Implementar outros endpoints (findById, update, delete) seguindo o padrão acima ...
}
```

#### Código: `controller/ProdutoController.java`

```java
package br.com.aula.gestaodeestoques.controller;

import br.com.aula.gestaodeestoques.dto.ProdutoDTO;
import br.com.aula.gestaodeestoques.dto.ProdutoFormDTO;
import br.com.aula.gestaodeestoques.service.ProdutoService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/produtos")
public class ProdutoController {

    @Autowired
    private ProdutoService service;

    @GetMapping
    public ResponseEntity<List<ProdutoDTO>> findAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProdutoDTO> findById(@PathVariable Integer id) {
        return ResponseEntity.ok(service.findById(id));
    }

    @PostMapping
    public ResponseEntity<ProdutoDTO> create(@Valid @RequestBody ProdutoFormDTO produtoFormDTO) {
        ProdutoDTO newDto = service.create(produtoFormDTO);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(newDto.id()).toUri();
        return ResponseEntity.created(uri).body(newDto);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProdutoDTO> update(@PathVariable Integer id, @Valid @RequestBody ProdutoFormDTO produtoFormDTO) {
        ProdutoDTO updatedDto = service.update(id, produtoFormDTO);
        return ResponseEntity.ok(updatedDto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
```

*Observação Importante:* Note que os controllers injetam as **interfaces** (`ProdutoService`), não as implementações (`ProdutoServiceImpl`). Isso é o Princípio da Inversão de Dependência em ação\!

-----

### Conclusão do Módulo 3 e Próximos Passos

**Parabéns\!** Você acaba de construir uma API REST completa. Neste ponto, temos:

  - Endpoints claros e padronizados para todas as nossas entidades.
  - Uma comunicação bem definida com o mundo exterior através do protocolo HTTP e do formato JSON.
  - Respostas HTTP com status codes corretos, informando o resultado de cada operação.

Se você executar a aplicação agora, poderá usar uma ferramenta como **Postman**, **Insomnia** ou até mesmo o comando `curl` para interagir com a sua API. Você pode criar, listar, atualizar e deletar produtos, categorias e fornecedores.

**O Grande Problema:** Nossa API está totalmente desprotegida. Qualquer pessoa pode deletar todos os produtos\!

No **próximo módulo**, vamos resolver isso. Mergulharemos fundo no Spring Security para "trancar as portas" da nossa API, implementando um sistema de autenticação e autorização robusto e moderno com **JSON Web Tokens (JWT)**.

