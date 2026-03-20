---
layout: default
title: MODULO06
---

Este guia fornecerá todos os conceitos e códigos completos para que os alunos aprendam a criar testes automatizados para a aplicação, uma habilidade indispensável no mercado de trabalho.

# 💎 Guia Didático Definitivo: Gestão de Estoques com Spring Boot

-----

## Módulo 6: ✅ Garantia de Qualidade com Testes

**Objetivo:** Ensinar o aluno a validar a própria lógica de negócio e os endpoints da API de forma automatizada. Ao final deste módulo, o aluno terá uma suíte de testes que serve como uma "rede de segurança", permitindo que futuras alterações no código sejam feitas com confiança.

-----

### \#\#\# Aula 6.1: Fundamentos de Testes (JUnit 5 e o conceito de Mocks com Mockito)

**Conceito-Chave: Por que testar?**
Testes automatizados são programas que verificam se outras partes do nosso programa se comportam como esperado. Eles são cruciais porque:

1.  **Garantem a Qualidade:** Provam que seu código faz o que deveria fazer.
2.  **Previnem Regressões:** Impedem que uma nova funcionalidade quebre algo que já funcionava.
3.  **Facilitam a Refatoração:** Permitem que você melhore seu código com a segurança de que não quebrou nada.
4.  **Documentam o Código:** Um bom teste descreve exatamente o que um método deve fazer.

**As Ferramentas do Ofício:**

  - **JUnit 5:** É o framework padrão para escrever e executar testes em Java. Usamos anotações como `@Test` para marcar um método como um caso de teste.
  - **Mockito:** É uma biblioteca para criar "Mocks", ou seja, objetos falsos que simulam o comportamento de dependências reais.

**Conceito-Chave: Mocks e a Importância do Isolamento**
Ao realizar um **Teste Unitário**, queremos testar **uma única classe** de forma isolada. Por exemplo, ao testar `ProdutoServiceImpl`, não queremos depender do `ProdutoRepository` real, nem do banco de dados. Por quê? Porque se o teste falhar, queremos saber que a falha está em `ProdutoServiceImpl`, e não no banco de dados.

É aqui que o Mockito entra. Criamos um `ProdutoRepository` "fake" (um mock) e instruímos ele a se comportar exatamente como precisamos para o nosso teste.

  - **Analogia:** Para testar um piloto de avião (`Service`), você o coloca em um simulador de voo (`Mock do Repository`). Você não precisa de um avião de verdade para saber se o piloto sabe operar os controles.

**A Estrutura de um Bom Teste: Arrange, Act, Assert (ou Given, When, Then)**

1.  **Arrange (Arranjar / Given):** Prepare o cenário. Crie os objetos, configure o comportamento dos seus mocks.
2.  **Act (Agir / When):** Execute o método que você quer testar.
3.  **Assert (Afirmar / Then):** Verifique se o resultado foi o esperado.

-----

### \#\#\# Aula 6.2: Testes Unitários para a Camada de Serviço (`ProdutoServiceImplTest`)

A camada de serviço contém nossa lógica de negócio mais crítica, então é o lugar perfeito para começar a testar.

**Ação:** Na pasta de testes (`src/test/java/...`), crie a classe `ProdutoServiceImplTest`.

#### Código: `service/impl/ProdutoServiceImplTest.java` (Arquivo Completo)

```java
package br.com.aula.gestaodeestoques.service.impl;

import br.com.aula.gestaodeestoques.dto.ProdutoDTO;
import br.com.aula.gestaodeestoques.dto.ProdutoFormDTO;
import br.com.aula.gestaodeestoques.exception.ResourceNotFoundException;
import br.com.aula.gestaodeestoques.mapper.ProdutoMapper;
import br.com.aula.gestaodeestoques.model.Categoria;
import br.com.aula.gestaodeestoques.model.Fornecedor;
import br.com.aula.gestaodeestoques.model.Produto;
import br.com.aula.gestaodeestoques.repository.CategoriaRepository;
import br.com.aula.gestaodeestoques.repository.FornecedorRepository;
import br.com.aula.gestaodeestoques.repository.ProdutoRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.math.BigDecimal;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class) // Habilita o Mockito para JUnit 5
class ProdutoServiceImplTest {

    @Mock // 1. Cria um "simulador" para o ProdutoRepository
    private ProdutoRepository produtoRepository;
    @Mock
    private CategoriaRepository categoriaRepository;
    @Mock
    private FornecedorRepository fornecedorRepository;
    @Mock
    private ProdutoMapper produtoMapper;

    @InjectMocks // 2. Cria uma instância real do ProdutoServiceImpl, injetando os simuladores (mocks) acima
    private ProdutoServiceImpl produtoService;

    @Test
    @DisplayName("Deve retornar um ProdutoDTO quando o ID existe")
    void findById_shouldReturnProductDTO_whenIdExists() {
        // Arrange (Given)
        int productId = 1;
        Produto produto = new Produto(productId, "Notebook", 10, BigDecimal.TEN, 1, 1);
        Categoria categoria = new Categoria(1, "Eletrônicos");
        Fornecedor fornecedor = new Fornecedor(1, "Fornecedor X", "11.111.111/0001-11");
        ProdutoDTO expectedDto = new ProdutoDTO(productId, "Notebook", 10, BigDecimal.TEN, "Eletrônicos", "Fornecedor X");

        // "Quando o repository.findById for chamado com o ID 1, então retorne nosso produto de teste"
        when(produtoRepository.findById(productId)).thenReturn(Optional.of(produto));
        // Configura o comportamento dos outros mocks que são chamados internamente
        when(categoriaRepository.findById(anyInt())).thenReturn(Optional.of(categoria));
        when(fornecedorRepository.findById(anyInt())).thenReturn(Optional.of(fornecedor));
        when(produtoMapper.toDTO(any(), any(), any())).thenReturn(expectedDto);

        // Act (When)
        ProdutoDTO result = produtoService.findById(productId);

        // Assert (Then)
        assertNotNull(result);
        assertEquals(expectedDto.id(), result.id());
        assertEquals(expectedDto.nome(), result.nome());
    }

    @Test
    @DisplayName("Deve lançar ResourceNotFoundException quando o ID não existe")
    void findById_shouldThrowResourceNotFoundException_whenIdDoesNotExist() {
        // Arrange (Given)
        int productId = 99;
        // "Quando o repository.findById for chamado com o ID 99, então retorne um Optional vazio"
        when(produtoRepository.findById(productId)).thenReturn(Optional.empty());

        // Act & Assert (When & Then)
        // Verifica se a execução do método findById lança a exceção esperada
        assertThrows(ResourceNotFoundException.class, () -> {
            produtoService.findById(productId);
        });
    }

    @Test
    @DisplayName("Deve chamar o método delete do repositório quando o produto existe")
    void delete_shouldCallRepositoryDelete_whenProductExists() {
        // Arrange (Given)
        int productId = 1;
        when(produtoRepository.existsById(productId)).thenReturn(true);
        // doNothing() é usado para métodos que não retornam nada (void)
        doNothing().when(produtoRepository).deleteById(productId);

        // Act (When)
        produtoService.delete(productId);

        // Assert (Then)
        // Verifica se o método deleteById do repositório foi chamado exatamente uma vez com o ID correto
        verify(produtoRepository, times(1)).deleteById(productId);
    }
}
```

-----

### \#\#\# Aula 6.3: (Avançado) Testes de Integração para a Camada de Controller (`@WebMvcTest`)

**Conceito-Chave:** **Testes de Integração** verificam como diferentes partes do sistema funcionam juntas. Com `@WebMvcTest`, o Spring Boot carrega apenas a camada web (`Controller`, `ExceptionHandler`, serializadores JSON), sem carregar a camada de serviço ou de banco de dados. Isso nos permite testar se nossos endpoints estão configurados corretamente, se a segurança está sendo aplicada e se o JSON está sendo gerado como esperado.

**Ação:** Na pasta de testes, crie a classe `ProdutoControllerTest`.

#### Código: `controller/ProdutoControllerTest.java` (Arquivo Completo)

```java
package br.com.aula.gestaodeestoques.controller;

import br.com.aula.gestaodeestoques.config.security.JwtAuthenticationFilter;
import br.com.aula.gestaodeestoques.dto.ProdutoDTO;
import br.com.aula.gestaodeestoques.exception.ResourceNotFoundException;
import br.com.aula.gestaodeestoques.service.ProdutoService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;

import java.math.BigDecimal;
import java.util.Collections;

import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(ProdutoController.class) // Carrega apenas o contexto web para o ProdutoController
class ProdutoControllerTest {

    @Autowired
    private MockMvc mockMvc; // Objeto para simular requisições HTTP

    @MockBean // Cria um mock do serviço, pois o @WebMvcTest não carrega a camada de serviço
    private ProdutoService produtoService;
    
    // O filtro JWT precisa ser mockado também, pois ele faz parte da camada web
    @MockBean
    private JwtAuthenticationFilter jwtAuthenticationFilter;

    @Test
    @DisplayName("GET /api/produtos deve retornar lista de produtos e status 200")
    @WithMockUser // Simula um usuário autenticado (necessário porque todos os endpoints são protegidos)
    void findAll_shouldReturnListOfProducts_andStatus200() throws Exception {
        // Arrange
        ProdutoDTO produtoDTO = new ProdutoDTO(1, "Teclado", 50, BigDecimal.valueOf(150), "Periféricos", "Fornecedor Y");
        given(produtoService.findAll()).willReturn(Collections.singletonList(produtoDTO));

        // Act & Assert
        mockMvc.perform(get("/api/produtos")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].nome").value("Teclado"));
    }
    
    @Test
    @DisplayName("GET /api/produtos/{id} deve retornar 404 quando produto não existe")
    @WithMockUser
    void findById_shouldReturn404_whenProductNotFound() throws Exception {
        // Arrange
        int productId = 99;
        given(produtoService.findById(productId)).willThrow(new ResourceNotFoundException("Produto não encontrado"));

        // Act & Assert
        mockMvc.perform(get("/api/produtos/{id}", productId))
                .andExpect(status().isNotFound());
    }

    @Test
    @DisplayName("DELETE /api/produtos/{id} deve retornar 403 Forbidden para usuário sem papel de ADMIN")
    @WithMockUser(roles = "USER") // Simula um usuário logado com o papel "USER"
    void delete_shouldReturn403Forbidden_whenUserIsNotAdmin() throws Exception {
        // Arrange
        int productId = 1;
        // Não precisamos configurar o mock do service, pois a segurança deve barrar a requisição antes de chegar lá

        // Act & Assert
        mockMvc.perform(delete("/api/produtos/{id}", productId))
                .andExpect(status().isForbidden());
    }

    @Test
    @DisplayName("DELETE /api/produtos/{id} deve retornar 204 No Content para usuário ADMIN")
    @WithMockUser(roles = "ADMIN") // Simula um usuário logado com o papel "ADMIN"
    void delete_shouldReturn204NoContent_whenUserIsAdmin() throws Exception {
        // Arrange
        int productId = 1;
        // doNothing() porque o método delete do service retorna void
        doNothing().when(produtoService).delete(productId);
        
        // Act & Assert
        mockMvc.perform(delete("/api/produtos/{id}", productId))
                .andExpect(status().isNoContent());
    }
}
```

-----

### Conclusão do Módulo 6 e Próximos Passos

**Parabéns\!** Você adicionou uma camada de profissionalismo e segurança ao seu projeto. Com uma suíte de testes automatizados, você agora pode:

  - **Refatorar com confiança:** Mude a implementação interna de um serviço e execute os testes para garantir que o comportamento externo não mudou.
  - **Validar a segurança:** Provar que suas regras de autorização (`@PreAuthorize`) estão funcionando como esperado.
  - **Acelerar o desenvolvimento:** Testes automatizados são muito mais rápidos e confiáveis do-que testes manuais repetitivos via Postman.

Nossa API está completa, segura, documentada e, mais importante, **testada**. Ela é um produto de backend de nível profissional.

No **próximos módulos**, vamos explorar como essa API robusta pode ser consumida por um **frontend SPA** e como podemos empacotá-la para **deployment com Docker**.

