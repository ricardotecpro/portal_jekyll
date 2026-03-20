---
layout: default
title: README
---

Construir uma aplicação full stack robusta, como o **"ListOn"**, exige uma fundação sólida. Começaremos pelo "coração" do sistema: o **Back-end API com Spring Boot**.

Este guia é modular. Vamos focar 100% em construir, testar e documentar nossa API primeiro. Uma vez que o back-end esteja funcional e servindo dados, construiremos o front-end Angular e o aplicativo Ionic para consumi-lo.

Aqui está o guia completo para a **Parte 1: O Back-end API**.

---

# 🚀 Guia Completo: Lista de Tarefas "ListOn" (Full Stack)

## 📘 Visão Geral do Projeto

Vamos construir uma API RESTful completa para o "ListOn". Esta API será responsável por todas as regras de negócio: criar, ler, atualizar, excluir e gerenciar tarefas. Ela será a "única fonte da verdade" para nossos aplicativos web e mobile.

### ⚙️ Stack Tecnológica (Revisão)

- **Back-end:** Java 21, Spring Boot
- **Front-end Web:** Angular (Parte 2)
- **Mobile:** Ionic (Parte 3)
- **Banco de Dados:** H2 (Desenvolvimento), PostgreSQL (Produção)

---

## 🌎 Parte 0: Preparação do Ambiente

Antes de começar, garanta que você tenha as ferramentas essenciais instaladas:

1.  **JDK 21:** (Amazon Corretto, OpenJDK ou Oracle JDK).
2.  **Maven ou Gradle:** (Usaremos Maven neste guia).
3.  **IDE de sua escolha:** (IntelliJ IDEA, VS Code com Java extensions, ou Eclipse).
4.  **Node.js e NPM:** (Necessário para o front-end nas próximas partes).
5.  **PostgreSQL:** (Banco de dados de produção).
6.  **Um cliente de API:** (Postman ou Insomnia).

---

## ☕ Parte 1: Construindo o Back-end (API REST com Spring Boot)

Vamos criar a fundação do nosso sistema.

### 1.1. Inicializando o Projeto Spring Boot

A forma mais fácil de começar é usando o **Spring Initializr** (`start.spring.io`).

Preencha os campos da seguinte forma:

- **Project:** Maven
- **Language:** Java
- **Spring Boot:** 3.x.x (ou a mais recente)
- **Group:** `br.com.liston`
- **Artifact:** `api`
- **Name:** `api`
- **Package name:** `br.com.liston.api`
- **Java:** 21

**Dependências (Clique em "Add Dependencies"):**

- `Spring Web` (Para criar APIs REST)
- `Spring Data JPA` (Para persistência de dados)
- `Spring Security` (Para proteger nossa API)
- `PostgreSQL Driver` (Driver do banco de produção)
- `H2 Database` (Driver do banco em memória)
- `Lombok` (Reduz boilerplate code)
- `Spring Boot DevTools` (Para hot reload)
- `Springdoc-openapi-starter-webmvc-ui` (Para documentação Swagger/OpenAPI)

Clique em **"Generate"** e extraia o arquivo `.zip` em seu workspace.

### 1.2. Estrutura de Pacotes (Arquitetura)

Dentro de `src/main/java/br/com/liston/api`, crie os seguintes pacotes. Esta é uma arquitetura em camadas (layered) clássica e robusta:

```
br.com.liston.api
├── config/           (Configurações de segurança, CORS, etc.)
├── controller/       (Nossos Endpoints REST)
├── dto/              (Data Transfer Objects - Padrão de projeto)
├── model/            (Entidades JPA - "Tabelas" do banco)
├── repository/       (Interfaces do Spring Data JPA)
├── service/          (Regras de Negócio)
└── ApiApplication.java
```

### 1.3. Configurando os Bancos (H2 e PostgreSQL)

Vamos usar **Spring Profiles** para alternar facilmente entre o banco H2 (desenvolvimento) e o PostgreSQL (produção).

1.  Renomeie `application.properties` para `application.yml`.
2.  Crie dois novos arquivos: `application-dev.yml` e `application-prod.yml`.

**`src/main/resources/application.yml`**
(Este arquivo apenas define qual perfil está ativo)

```yaml
spring:
  profiles:
    active: dev # Mude para 'prod' quando for para produção
```

**`src/main/resources/application-dev.yml`**
(Configuração do H2 para desenvolvimento rápido)

```yaml
# Perfil de Desenvolvimento (H2 em Memória)
spring:
  h2:
    console:
      enabled: true # Habilita o console H2 em http://localhost:8080/h2-console
      path: /h2-console
  datasource:
    url: jdbc:h2:mem:listondb # Banco em memória
    username: sa
    password:
    driverClassName: org.h2.Driver
  jpa:
    database-platform: org.hibernate.dialect.H2Dialect
    hibernate:
      ddl-auto: update # Cria/atualiza tabelas automaticamente
```

**`src/main/resources/application-prod.yml`**
(Configuração do PostgreSQL para produção)

```yaml
# Perfil de Produção (PostgreSQL)
spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/liston_db # (mude se seu banco estiver em outro host)
    username: postgres # (seu usuário do postgres)
    password: admin # (sua senha do postgres)
    driverClassName: org.postgresql.Driver
  jpa:
    database-platform: org.hibernate.dialect.PostgreSQLDialect
    hibernate:
      ddl-auto: validate # Em produção, apenas valida o schema (não altera)
```

### 1.4. Modelagem da Entidade `Tarefa`

Vamos definir nossa tabela `tarefa`.

**`src/main/java/br/com/liston/api/model/Tarefa.java`**

```java
package br.com.liston.api.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@Entity // Marca esta classe como uma entidade JPA (tabela no banco)
@Table(name = "tarefas") // Nome da tabela
@Data // Lombok: gera getters, setters, equals, hashCode e toString
@NoArgsConstructor // Lombok: gera um construtor vazio (exigido pelo JPA)
public class Tarefa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 150)
    private String titulo;

    @Column(nullable = true, length = 500)
    private String descricao;

    @Column(nullable = false)
    private boolean concluida = false; // Valor padrão

    @Column(name = "data_criacao", nullable = false, updatable = false)
    private LocalDateTime dataCriacao;

    @Column(name = "data_atualizacao")
    private LocalDateTime dataAtualizacao;

    // Garante que a data de criação seja definida antes de salvar
    @PrePersist
    protected void onCreate() {
        this.dataCriacao = LocalDateTime.now();
        this.dataAtualizacao = LocalDateTime.now();
    }

    // Garante que a data de atualização seja definida antes de atualizar
    @PreUpdate
    protected void onUpdate() {
        this.dataAtualizacao = LocalDateTime.now();
    }

    public Tarefa(String titulo, String descricao) {
        this.titulo = titulo;
        this.descricao = descricao;
    }
}
```

### 1.5. Criando DTOs (Data Transfer Objects)

**Importante (Prática de Arquiteto):** Nunca exponha suas Entidades (`@Entity`) diretamente na API. Use DTOs para controlar quais dados entram e saem.

**`src/main/java/br/com/liston/api/dto/TarefaRequestDTO.java`**
(DTO para Criar ou Atualizar uma tarefa)

```java
package br.com.liston.api.dto;

// Usamos 'record' do Java 21 para DTOs imutáveis e concisos
// jakarta.validation será usado futuramente para validar (@NotEmpty, @Size)
public record TarefaRequestDTO(
        String titulo,
        String descricao,
        Boolean concluida // Usamos Boolean (objeto) para permitir nulo se quisermos
) {}
```

**`src/main/java/br/com/liston/api/dto/TarefaResponseDTO.java`**
(DTO para Retornar uma tarefa ao cliente)

```java
package br.com.liston.api.dto;

import br.com.liston.api.model.Tarefa;
import java.time.LocalDateTime;

public record TarefaResponseDTO(
        Long id,
        String titulo,
        String descricao,
        boolean concluida,
        LocalDateTime dataCriacao,
        LocalDateTime dataAtualizacao
) {
    // Construtor "Mapper" para converter a Entidade Tarefa em TarefaResponseDTO
    public TarefaResponseDTO(Tarefa tarefa) {
        this(
                tarefa.getId(),
                tarefa.getTitulo(),
                tarefa.getDescricao(),
                tarefa.isConcluida(),
                tarefa.getDataCriacao(),
                tarefa.getDataAtualizacao()
        );
    }
}
```

### 1.6. Camada de Repositório (Acesso ao Banco)

O Spring Data JPA faz a mágica. Apenas precisamos da interface.

**`src/main/java/br/com/liston/api/repository/TarefaRepository.java`**

```java
package br.com.liston.api.repository;

import br.com.liston.api.model.Tarefa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TarefaRepository extends JpaRepository<Tarefa, Long> {

    // O Spring Data JPA cria a query automaticamente pelo nome do método
    List<Tarefa> findByTituloContainingIgnoreCase(String titulo);
}
```

### 1.7. Camada de Serviço (Regras de Negócio)

Aqui fica a lógica principal (o CRUD).

**`src/main/java/br/com/liston/api/service/TarefaService.java`**

```java
package br.com.liston.api.service;

import br.com.liston.api.dto.TarefaRequestDTO;
import br.com.liston.api.dto.TarefaResponseDTO;
import br.com.liston.api.model.Tarefa;
import br.com.liston.api.repository.TarefaRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service // Marca como um componente de serviço (onde fica a lógica)
public class TarefaService {

    @Autowired // Injeção de dependência do repositório
    private TarefaRepository repository;

    // Busca todas as tarefas e converte para DTO
    @Transactional(readOnly = true) // Transação apenas de leitura
    public List<TarefaResponseDTO> listarTodas() {
        return repository.findAll()
                .stream()
                .map(TarefaResponseDTO::new) // Converte Tarefa -> TarefaResponseDTO
                .collect(Collectors.toList());
    }

    // Busca por ID
    @Transactional(readOnly = true)
    public TarefaResponseDTO buscarPorId(Long id) {
        Tarefa tarefa = repository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Tarefa não encontrada com id: " + id));
        return new TarefaResponseDTO(tarefa);
    }

    // Cria uma nova tarefa
    @Transactional
    public TarefaResponseDTO criar(TarefaRequestDTO dto) {
        if (dto.titulo() == null || dto.titulo().isBlank()) {
            throw new IllegalArgumentException("Título é obrigatório.");
        }

        Tarefa novaTarefa = new Tarefa(dto.titulo(), dto.descricao());

        // Se 'concluida' foi enviado no DTO, usa o valor. Senão, mantém o padrão (false).
        if (dto.concluida() != null) {
            novaTarefa.setConcluida(dto.concluida());
        }

        Tarefa tarefaSalva = repository.save(novaTarefa);
        return new TarefaResponseDTO(tarefaSalva);
    }

    // Atualiza uma tarefa existente
    @Transactional
    public TarefaResponseDTO atualizar(Long id, TarefaRequestDTO dto) {
        Tarefa tarefaExistente = repository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Tarefa não encontrada com id: " + id));

        // Atualiza apenas os campos fornecidos
        if (dto.titulo() != null && !dto.titulo().isBlank()) {
            tarefaExistente.setTitulo(dto.titulo());
        }
        if (dto.descricao() != null) {
            tarefaExistente.setDescricao(dto.descricao());
        }
        if (dto.concluida() != null) {
            tarefaExistente.setConcluida(dto.concluida());
        }

        Tarefa tarefaAtualizada = repository.save(tarefaExistente);
        return new TarefaResponseDTO(tarefaAtualizada);
    }

    // Deleta uma tarefa
    @Transactional
    public void deletar(Long id) {
        if (!repository.existsById(id)) {
            throw new EntityNotFoundException("Tarefa não encontrada com id: " + id);
        }
        repository.deleteById(id);
    }
}
```

### 1.8. Camada de Controller (API REST)

Aqui expomos nossa lógica para o mundo exterior via HTTP.

**`src/main/java/br/com/liston/api/controller/TarefaController.java`**

```java
package br.com.liston.api.controller;

import br.com.liston.api.dto.TarefaRequestDTO;
import br.com.liston.api.dto.TarefaResponseDTO;
import br.com.liston.api.service.TarefaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.net.URI;
import java.util.List;

@RestController // Define a classe como um Controller REST
@RequestMapping("/api/tarefas") // Mapeia todas as requisições para este endpoint
public class TarefaController {

    @Autowired
    private TarefaService service;

    @GetMapping
    public ResponseEntity<List<TarefaResponseDTO>> listarTodasTarefas() {
        List<TarefaResponseDTO> tarefas = service.listarTodas();
        return ResponseEntity.ok(tarefas); // Retorna 200 OK
    }

    @GetMapping("/{id}")
    public ResponseEntity<TarefaResponseDTO> buscarTarefaPorId(@PathVariable Long id) {
        // Tratamento de exceção (EntityNotFoundException) será feito globalmente depois
        TarefaResponseDTO tarefa = service.buscarPorId(id);
        return ResponseEntity.ok(tarefa);
    }

    @PostMapping
    public ResponseEntity<TarefaResponseDTO> criarTarefa(@RequestBody TarefaRequestDTO dto) {
        TarefaResponseDTO novaTarefa = service.criar(dto);

        // Retorna 201 Created com a URL do novo recurso no header 'Location'
        URI location = URI.create("/api/tarefas/" + novaTarefa.id());
        return ResponseEntity.created(location).body(novaTarefa);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TarefaResponseDTO> atualizarTarefa(@PathVariable Long id, @RequestBody TarefaRequestDTO dto) {
        TarefaResponseDTO tarefaAtualizada = service.atualizar(id, dto);
        return ResponseEntity.ok(tarefaAtualizada);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarTarefa(@PathVariable Long id) {
        service.deletar(id);
        return ResponseEntity.noContent().build(); // Retorna 204 No Content
    }
}
```

### 1.9. Configuração de Segurança (Spring Security)

O Spring Security bloqueia tudo por padrão. Vamos criar uma configuração básica para liberar nossos endpoints da API e o Swagger.

**`src/main/java/br/com/liston/api/config/SecurityConfig.java`**

```java
package br.com.liston.api.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            // Desabilita CSRF, pois usaremos uma API REST stateless (sem sessão)
            .csrf(csrf -> csrf.disable())

            // Define a política de criação de sessão como STATELESS
            .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))

            .authorizeHttpRequests(authorize -> authorize
                // Libera os endpoints do H2 Console (APENAS EM PERFIL 'dev')
                .requestMatchers("/h2-console/**").permitAll()

                // Libera os endpoints do Swagger
                .requestMatchers("/v3/api-docs/**", "/swagger-ui/**", "/swagger-ui.html").permitAll()

                // Libera todos os endpoints da nossa API de tarefas
                .requestMatchers("/api/tarefas/**").permitAll()

                // Qualquer outra requisição precisa de autenticação (ex: /actuator)
                .anyRequest().authenticated()
            )

            // Necessário para o H2 Console funcionar em frames
            .headers(headers -> headers.frameOptions(frameOptions -> frameOptions.sameOrigin()));

        return http.build();
    }
}
```

### 1.10. Testando a Aplicação

1.  Rode a aplicação (clicando "Run" na classe `ApiApplication.java`).
2.  Como estamos no perfil `dev`, o H2 será usado.

**Teste 1: Console H2**

- Acesse: `http://localhost:8080/h2-console`
- JDBC URL: `jdbc:h2:mem:listondb`
- User Name: `sa`
- Password: (deixe em branco)
- Clique em "Connect". Você verá a tabela `TAREFAS` criada.

**Teste 2: Documentação Swagger**

- Acesse: `http://localhost:8080/swagger-ui.html`
- Você verá a documentação completa da sua API, com todos os endpoints (GET, POST, PUT, DELETE). Você pode testar a API diretamente por esta interface.

**Teste 3: Postman / Insomnia**

- **POST (Criar):** `http://localhost:8080/api/tarefas`
  - Body (JSON):
    ```json
    {
      "titulo": "Minha primeira tarefa",
      "descricao": "Configurar o backend Spring Boot"
    }
    ```
- **GET (Listar):** `http://localhost:8080/api/tarefas`
- **GET (Buscar por ID):** `http://localhost:8080/api/tarefas/1`
- **PUT (Atualizar):** `http://localhost:8080/api/tarefas/1`
  - Body (JSON):
    ```json
    {
      "titulo": "Minha primeira tarefa (Atualizada)",
      "concluida": true
    }
    ```
- **DELETE (Deletar):** `http://localhost:8080/api/tarefas/1`

---

## 🏁 Conclusão da Parte 1

Parabéns\! Você construiu uma API RESTful completa, segura, documentada e pronta para produção com Spring Boot.

Nós temos:

- CRUD completo para Tarefas.
- Uma arquitetura em camadas (Controller, Service, Repository).
- Mapeamento de Entidade (JPA) para DTOs (Boas Práticas).
- Dois perfis de banco de dados (H2 e PostgreSQL).
- Documentação de API automatizada com Swagger.
- Segurança básica configurada.

---

## 📚 Próximos Passos

O nosso "coração" está batendo. Agora, vamos consumir esses dados.

---

**Parte 2: Construindo o Front-end Web com Angular e Angular Material**?

Aqui está a reescrita completa da **Parte 2** do guia, utilizando a arquitetura moderna **Standalone** do Angular.

Esta abordagem elimina a necessidade de `NgModules` (`app.module.ts`), resultando em um código mais limpo, menos boilerplate e com carregamento lento (lazy loading) por padrão.

---

## 🅰️ Parte 2 (Modo Standalone): Construindo o Front-end (Web com Angular)

Vamos criar um Single Page Application (SPA) que se comunica com nossa API Spring Boot, usando a arquitetura **Standalone**, que é a padrão e moderna do Angular.

### 2.1. Preparação do Ambiente Front-end

(Sem alteração)

1.  **Instale o Angular CLI:** Se você ainda não o tem, abra seu terminal e rode:
    ```bash
    npm install -g @angular/cli
    ```

### 2.2. Inicializando o Projeto Angular (Modo Standalone)

1.  No seu workspace (fora da pasta `api`), rode o comando:

    ```bash
    ng new webapp --standalone --routing --style=scss
    ```

    - `ng new webapp`: Cria um novo projeto chamado `webapp`.
    - `--standalone`: (Padrão nas novas versões) Indica que usaremos a arquitetura Standalone, **sem `NgModule`**.
    - `--routing`: Habilita o roteamento, mas agora ele cria um arquivo `app.routes.ts` (em vez de `app-routing.module.ts`).
    - `--style=scss`: Usaremos SCSS para estilização.

2.  Acesse a pasta do projeto:

    ```bash
    cd webapp
    ```

3.  **Adicione o Angular Material:** (Usaremos para componentes de UI)

    ```bash
    ng add @angular/material
    ```

    - O CLI fará as mesmas perguntas:
      - `Choose a prebuilt theme:` Escolha `Indigo/Pink`.
      - `Set up global Angular Material typography styles?` **Yes**.
      - `Include and enable animations?` **Yes**. (Isso irá configurar `provideAnimations()` no seu `app.config.ts` automaticamente).

### 2.3. 🚨 IMPORTANTE: Configurando o CORS no Back-end

(Sem alteração. Esta é uma configuração do Back-end Spring Boot e é idêntica.)

Nosso Angular (http://localhost:4200) tentará acessar a API (http://localhost:8080). Precisamos dizer ao Spring Boot para "confiar" no nosso front-end.

**Volte ao projeto Back-end (`api`)** e atualize o arquivo `SecurityConfig.java`:

**`src/main/java/br/com/liston/api/config/SecurityConfig.java`**

```java
package br.com.liston.api.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import java.util.Arrays;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .cors(cors -> cors.configurationSource(corsConfigurationSource()))
            .csrf(csrf -> csrf.disable())
            .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authorizeHttpRequests(authorize -> authorize
                .requestMatchers("/h2-console/**").permitAll()
                .requestMatchers("/v3/api-docs/**", "/swagger-ui/**", "/swagger-ui.html").permitAll()
                .requestMatchers("/api/tarefas/**").permitAll()
                .anyRequest().authenticated()
            )
            .headers(headers -> headers.frameOptions(frameOptions -> frameOptions.sameOrigin()));

        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("http://localhost:4200"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        configuration.setAllowedHeaders(Arrays.asList("Authorization", "Cache-Control", "Content-Type"));

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}
```

**Reinicie sua API Spring Boot** para que a mudança tenha efeito.

---

### 2.4. Estrutura de Componentes e Configuração (Standalone)

Com a arquitetura Standalone, não temos mais `app.module.ts`. O "centro" da aplicação agora é o `app.config.ts`.

1.  **Configurando os Provedores Globais:**
    Precisamos "prover" o `HttpClient` globalmente. O `provideAnimations` (para o Material) já deve ter sido adicionado pelo `ng add`.

    **`src/app/app.config.ts`**

    ```typescript
    import { ApplicationConfig } from "@angular/core";
    import { provideRouter } from "@angular/router";

    import { routes } from "./app.routes"; // Nossas rotas
    import { provideAnimations } from "@angular/platform-browser/animations";
    import { provideHttpClient } from "@angular/common/http"; // Novo!

    export const appConfig: ApplicationConfig = {
      providers: [
        provideRouter(routes),
        provideAnimations(),
        provideHttpClient(), // Adiciona o HttpClient globalmente
      ],
    };
    ```

2.  **Gerando os Componentes:**
    No terminal, dentro da pasta `webapp`, rode:

    ```bash
    # Cria o componente para listar tarefas
    ng generate component components/tarefa-list

    # Cria o componente para o formulário (criar/editar)
    ng generate component components/tarefa-form

    # Cria o serviço para comunicar com a API
    ng generate service services/tarefa
    ```

    > **Nota:** Como o projeto é `--standalone`, esses componentes já serão gerados com `standalone: true`.

### 2.5. Definindo o Modelo (Interface)

(Sem alteração. Isto é TypeScript puro.)

**`src/app/models/tarefa.model.ts`** (crie esta pasta e arquivo)

```typescript
export interface Tarefa {
  id: number;
  titulo: string;
  descricao: string;
  concluida: boolean;
  dataCriacao: string; // O JSON converte LocalDateTime para String
  dataAtualizacao: string;
}
```

### 2.6. Camada de Serviço (Comunicação API)

(Sem alteração. Serviços `@Injectable` são nativamente compatíveis com Standalone.)

**`src/app/services/tarefa.service.ts`**

```typescript
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Tarefa } from "../models/tarefa.model";

@Injectable({
  providedIn: "root",
})
export class TarefaService {
  private readonly API_URL = "http://localhost:8080/api/tarefas/";

  constructor(private http: HttpClient) {}

  // GET /api/tarefas
  listarTodas(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.API_URL);
  }

  // GET /api/tarefas/{id}
  buscarPorId(id: number): Observable<Tarefa> {
    return this.http.get<Tarefa>(`${this.API_URL}${id}`);
  }

  // POST /api/tarefas
  criar(tarefa: Partial<Tarefa>): Observable<Tarefa> {
    return this.http.post<Tarefa>(this.API_URL, tarefa);
  }

  // PUT /api/tarefas/{id}
  atualizar(id: number, tarefa: Partial<Tarefa>): Observable<Tarefa> {
    return this.http.put<Tarefa>(`${this.API_URL}${id}`, tarefa);
  }

  // DELETE /api/tarefas/{id}
  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}${id}`);
  }
}
```

### 2.7. Componente Principal (Layout)

O `AppComponent` agora também é standalone e precisa importar seus próprios módulos.

**`src/app/app.component.ts`**

```typescript
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { MatToolbarModule } from "@angular/material/toolbar"; // Importe aqui

@Component({
  selector: "app-root",
  standalone: true, // Marcado como standalone
  imports: [
    RouterOutlet,
    MatToolbarModule, // Adicione o módulo aqui
  ],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "webapp";
}
```

**`src/app/app.component.html`** (Sem alteração)

```html
<mat-toolbar color="primary">
  <span>ListOn - Gerenciador de Tarefas</span>
</mat-toolbar>

<main class="content">
  <router-outlet></router-outlet>
</main>
```

**`src/app/app.component.scss`** (Sem alteração)

```scss
main.content {
  padding: 20px;
  max-width: 900px;
  margin: 20px auto;
}
```

### 2.8. Configurando as Rotas (Standalone)

Não temos `app-routing.module.ts`. As rotas são definidas em `app.routes.ts` e usam **lazy loading** por padrão, o que é mais performático.

**`src/app/app.routes.ts`**

```typescript
import { Routes } from "@angular/router";

export const routes: Routes = [
  // Rota principal: carrega o TarefaListComponent
  {
    path: "",
    loadComponent: () =>
      import("./components/tarefa-list/tarefa-list.component").then(
        (m) => m.TarefaListComponent
      ),
  },

  // Rota para criar nova tarefa: carrega o TarefaFormComponent
  {
    path: "novo",
    loadComponent: () =>
      import("./components/tarefa-form/tarefa-form.component").then(
        (m) => m.TarefaFormComponent
      ),
  },

  // Rota para editar uma tarefa (passando o ID): carrega o mesmo TarefaFormComponent
  {
    path: "editar/:id",
    loadComponent: () =>
      import("./components/tarefa-form/tarefa-form.component").then(
        (m) => m.TarefaFormComponent
      ),
  },

  // Redireciona qualquer rota não encontrada para a principal
  { path: "**", redirectTo: "" },
];
```

### 2.9. Componente de Lista de Tarefas (`tarefa-list`)

O componente agora precisa importar seus próprios módulos de UI.

**`src/app/components/tarefa-list/tarefa-list.component.ts`**

```typescript
import { Component, OnInit } from "@angular/core";
import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar"; // Importar
import { Router, RouterLink } from "@angular/router"; // Importar RouterLink
import { Observable } from "rxjs";
import { Tarefa } from "src/app/models/tarefa.model";
import { TarefaService } from "src/app/services/tarefa.service";

// Imports de UI e Módulos Standalone
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { CommonModule } from "@angular/common"; // Para | date e | async

@Component({
  selector: "app-tarefa-list",
  standalone: true, // Standalone
  imports: [
    // Importa tudo que o template usa
    CommonModule,
    RouterLink,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatSnackBarModule,
  ],
  templateUrl: "./tarefa-list.component.html",
  styleUrls: ["./tarefa-list.component.scss"],
})
export class TarefaListComponent implements OnInit {
  tarefas$!: Observable<Tarefa[]>;
  displayedColumns: string[] = [
    "id",
    "titulo",
    "concluida",
    "dataCriacao",
    "acoes",
  ];

  constructor(
    private tarefaService: TarefaService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.carregarTarefas();
  }

  carregarTarefas(): void {
    this.tarefas$ = this.tarefaService.listarTodas();
  }

  editar(id: number): void {
    this.router.navigate(["/editar", id]);
  }

  deletar(id: number): void {
    if (confirm("Tem certeza que deseja excluir esta tarefa?")) {
      this.tarefaService.deletar(id).subscribe(
        () => {
          this.snackBar.open("Tarefa excluída com sucesso!", "Fechar", {
            duration: 3000,
          });
          this.carregarTarefas();
        },
        (error) => {
          this.snackBar.open("Erro ao excluir tarefa.", "Fechar", {
            duration: 3000,
          });
        }
      );
    }
  }
}
```

**`src/app/components/tarefa-list/tarefa-list.component.html`** (Sem alteração no HTML)

```html
<mat-card>
  <mat-card-header>
    <mat-card-title>Minhas Tarefas</mat-card-title>
  </mat-card-header>
  <mat-card-content>
    <table mat-table [dataSource]="tarefas$ | async" class="mat-elevation-z8">
      <ng-container matColumnDef="id">
        <th mat-header-cell *matHeaderCellDef>ID</th>
        <td mat-cell *matCellDef="let t">{{t.id}}</td>
      </ng-container>

      <ng-container matColumnDef="titulo">
        <th mat-header-cell *matHeaderCellDef>Título</th>
        <td mat-cell *matCellDef="let t">{{t.titulo}}</td>
      </ng-container>

      <ng-container matColumnDef="concluida">
        <th mat-header-cell *matHeaderCellDef>Concluída</th>
        <td mat-cell *matCellDef="let t">
          <mat-checkbox [checked]="t.concluida" disabled="true"></mat-checkbox>
        </td>
      </ng-container>

      <ng-container matColumnDef="dataCriacao">
        <th mat-header-cell *matHeaderCellDef>Criada em</th>
        <td mat-cell *matCellDef="let t">
          {{t.dataCriacao | date: 'dd/MM/yyyy HH:mm'}}
        </td>
      </ng-container>

      <ng-container matColumnDef="acoes">
        <th mat-header-cell *matHeaderCellDef>Ações</th>
        <td mat-cell *matCellDef="let t">
          <button
            mat-icon-button
            color="primary"
            (click)="editar(t.id)"
            aria-label="Editar"
          >
            <mat-icon>edit</mat-icon>
          </button>
          <button
            mat-icon-button
            color="warn"
            (click)="deletar(t.id)"
            aria-label="Excluir"
          >
            <mat-icon>delete</mat-icon>
          </button>
        </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>
  </mat-card-content>
  <mat-card-actions>
    <button mat-raised-button color="primary" [routerLink]="['/novo']">
      <mat-icon>add</mat-icon>
      Nova Tarefa
    </button>
  </mat-card-actions>
</mat-card>
```

**`src/app/components/tarefa-list/tarefa-list.component.scss`** (Sem alteração)

```scss
table {
  width: 100%;
}

mat-card-actions {
  padding: 16px;
}
```

### 2.10. Componente de Formulário (`tarefa-form`)

Este componente também será standalone e precisará importar `ReactiveFormsModule` diretamente.

**`src/app/components/tarefa-form/tarefa-form.component.ts`**

```typescript
import { Component, OnInit } from "@angular/core";
// Importa o ReactiveFormsModule aqui!
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar"; // Importar
import { ActivatedRoute, Router } from "@angular/router";
import { TarefaService } from "src/app/services/tarefa.service";

// Imports de UI e Módulos Standalone
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { CommonModule } from "@angular/common"; // Para *ngIf

@Component({
  selector: "app-tarefa-form",
  standalone: true, // Standalone
  imports: [
    // Importa tudo que o template usa
    CommonModule,
    ReactiveFormsModule, // Essencial para [formGroup]
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSnackBarModule,
  ],
  templateUrl: "./tarefa-form.component.html",
  styleUrls: ["./tarefa-form.component.scss"],
})
export class TarefaFormComponent implements OnInit {
  tarefaForm: FormGroup;
  isEditMode = false;
  tarefaId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private tarefaService: TarefaService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.tarefaForm = this.fb.group({
      titulo: ["", [Validators.required, Validators.minLength(3)]],
      descricao: [""],
      concluida: [false],
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idParam = params.get("id");
      if (idParam) {
        this.isEditMode = true;
        this.tarefaId = Number(idParam);

        this.tarefaService.buscarPorId(this.tarefaId).subscribe((tarefa) => {
          this.tarefaForm.patchValue(tarefa);
        });
      }
    });
  }

  onSubmit(): void {
    if (this.tarefaForm.invalid) {
      return;
    }

    const tarefaData = this.tarefaForm.value;

    if (this.isEditMode && this.tarefaId) {
      // Modo Edição (PUT)
      this.tarefaService.atualizar(this.tarefaId, tarefaData).subscribe(
        () => {
          this.snackBar.open("Tarefa atualizada com sucesso!", "Fechar", {
            duration: 3000,
          });
          this.router.navigate(["/"]);
        },
        () =>
          this.snackBar.open("Erro ao atualizar tarefa.", "Fechar", {
            duration: 3000,
          })
      );
    } else {
      // Modo Criação (POST)
      this.tarefaService.criar(tarefaData).subscribe(
        () => {
          this.snackBar.open("Tarefa criada com sucesso!", "Fechar", {
            duration: 3000,
          });
          this.router.navigate(["/"]);
        },
        () =>
          this.snackBar.open("Erro ao criar tarefa.", "Fechar", {
            duration: 3000,
          })
      );
    }
  }

  getErrorMessage(fieldName: string): string {
    const field = this.tarefaForm.get(fieldName);
    if (field?.hasError("required")) {
      return "Campo obrigatório";
    }
    if (field?.hasError("minlength")) {
      return "Deve ter no mínimo 3 caracteres";
    }
    return "";
  }

  cancelar(): void {
    this.router.navigate(["/"]);
  }
}
```

**`src/app/components/tarefa-form/tarefa-form.component.html`** (Sem alteração no HTML)

```html
<mat-card>
  <mat-card-header>
    <mat-card-title
      >{{ isEditMode ? 'Editar Tarefa' : 'Nova Tarefa' }}</mat-card-title
    >
  </mat-card-header>

  <mat-card-content>
    <form [formGroup]="tarefaForm" (ngSubmit)="onSubmit()">
      <mat-form-field appearance="fill">
        <mat-label>Título</mat-label>
        <input
          matInput
          formControlName="titulo"
          placeholder="Ex: Estudar Angular"
        />
        <mat-error *ngIf="tarefaForm.get('titulo')?.invalid">
          {{ getErrorMessage('titulo') }}
        </mat-error>
      </mat-form-field>

      <mat-form-field appearance="fill">
        <mat-label>Descrição (Opcional)</mat-label>
        <textarea matInput formControlName="descricao" rows="3"></textarea>
      </mat-form-field>

      <mat-checkbox formControlName="concluida" color="primary">
        Concluída
      </mat-checkbox>
    </form>
  </mat-card-content>

  <mat-card-actions>
    <button
      mat-raised-button
      color="primary"
      (click)="onSubmit()"
      [disabled]="tarefaForm.invalid"
    >
      Salvar
    </button>
    <button mat-button (click)="cancelar()">Cancelar</button>
  </mat-card-actions>
</mat-card>
```

**`src/app/components/tarefa-form/tarefa-form.component.scss`** (Sem alteração)

```scss
mat-card {
  max-width: 600px;
  margin: 0 auto;
}

mat-form-field {
  width: 100%;
  margin-bottom: 10px;
}

mat-checkbox {
  margin-bottom: 20px;
}

mat-card-actions {
  padding: 16px;
  display: flex;
  gap: 10px;
}
```

### 2.11. Testando a Aplicação Web

(Sem alteração. O processo de teste é o mesmo.)

1.  **Verifique se o Back-end (Spring Boot) está rodando\!** (em `http://localhost:8080`)
2.  No terminal, na pasta `webapp`, rode:
    ```bash
    ng serve --open
    ```
    - Isso iniciará o servidor de desenvolvimento e abrirá seu navegador em `http://localhost:4200`.

Você deve conseguir testar todo o fluxo CRUD exatamente como antes, mas agora com uma arquitetura mais moderna e performática.

---

### 🏁 Conclusão da Parte 2 (Standalone)

Temos uma aplicação web SPA funcional com a arquitetura Standalone\!

- **Arquitetura Limpa:** Sem `NgModules`.
- **Performance:** Roteamento com Lazy Loading por padrão.
- **Componentes Autossuficientes:** Cada componente declara suas próprias dependências.
- **Configuração Centralizada:** `app.config.ts` gerencia provedores globais (`HttpClient`).
- Comunicação total com a API (CRUD completo).
- Interface com Angular Material e formulários reativos.

---

## 🛠️ Resolução de Erros de Compilaçã

A correção é usar **caminhos relativos** (ex: `../../`).

---

## Código Corrigido

Aqui estão os arquivos com os caminhos de importação corrigidos e a tipagem `(error: any)` adicionada para resolver todos os erros de compilação.

### 1\. `tarefa-list.component.ts` (Corrigido)

Os caminhos para `Tarefa` e `TarefaService` foram corrigidos.

```typescript
import { Component, OnInit } from "@angular/core";
import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar"; // Importar
import { Router, RouterLink } from "@angular/router"; // Importar RouterLink
import { Observable } from "rxjs";

// CORREÇÃO: Caminhos relativos para sair de 'components/tarefa-list' e entrar em 'models' e 'services'
import { Tarefa } from "../../models/tarefa.model";
import { TarefaService } from "../../services/tarefa.service";

// Imports de UI e Módulos Standalone
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { CommonModule } from "@angular/common"; // Para | date e | async

@Component({
  selector: "app-tarefa-list",
  standalone: true, // Standalone
  imports: [
    // Importa tudo que o template usa
    CommonModule,
    RouterLink,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatSnackBarModule,
  ],
  templateUrl: "./tarefa-list.component.html",
  styleUrls: ["./tarefa-list.component.scss"],
})
export class TarefaListComponent implements OnInit {
  tarefas$!: Observable<Tarefa[]>;
  displayedColumns: string[] = [
    "id",
    "titulo",
    "concluida",
    "dataCriacao",
    "acoes",
  ];

  constructor(
    private tarefaService: TarefaService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.carregarTarefas();
  }

  carregarTarefas(): void {
    this.tarefas$ = this.tarefaService.listarTodas();
  }

  editar(id: number): void {
    this.router.navigate(["/editar", id]);
  }

  deletar(id: number): void {
    if (confirm("Tem certeza que deseja excluir esta tarefa?")) {
      this.tarefaService.deletar(id).subscribe(
        () => {
          this.snackBar.open("Tarefa excluída com sucesso!", "Fechar", {
            duration: 3000,
          });
          this.carregarTarefas();
        },
        // CORREÇÃO: Adicionado tipo 'any' para evitar erro TS7006 (implicit any)
        (error: any) => {
          this.snackBar.open("Erro ao excluir tarefa.", "Fechar", {
            duration: 3000,
          });
        }
      );
    }
  }
}
```

---

### 2\. `tarefa-form.component.ts` (Corrigido)

O caminho para `TarefaService` foi corrigido e a tipagem de erro foi adicionada.

```typescript
import { Component, OnInit } from "@angular/core";
// Importa o ReactiveFormsModule aqui!
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar"; // Importar
import { ActivatedRoute, Router } from "@angular/router";

// CORREÇÃO: Caminho relativo para sair de 'components/tarefa-form' e entrar em 'services'
import { TarefaService } from "../../services/tarefa.service";

// Imports de UI e Módulos Standalone
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { CommonModule } from "@angular/common"; // Para *ngIf

@Component({
  selector: "app-tarefa-form",
  standalone: true, // Standalone
  imports: [
    // Importa tudo que o template usa
    CommonModule,
    ReactiveFormsModule, // Essencial para [formGroup]
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSnackBarModule,
  ],
  templateUrl: "./tarefa-form.component.html",
  styleUrls: ["./tarefa-form.component.scss"],
})
export class TarefaFormComponent implements OnInit {
  tarefaForm: FormGroup;
  isEditMode = false;
  tarefaId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private tarefaService: TarefaService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.tarefaForm = this.fb.group({
      titulo: ["", [Validators.required, Validators.minLength(3)]],
      descricao: [""],
      concluida: [false],
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idParam = params.get("id");
      if (idParam) {
        this.isEditMode = true;
        this.tarefaId = Number(idParam);

        // CORREÇÃO: Adicionado tipo 'any' para evitar erro TS7006 (implicit any)
        this.tarefaService
          .buscarPorId(this.tarefaId)
          .subscribe((tarefa: any) => {
            this.tarefaForm.patchValue(tarefa);
          });
      }
    });
  }

  onSubmit(): void {
    if (this.tarefaForm.invalid) {
      return;
    }

    const tarefaData = this.tarefaForm.value;

    if (this.isEditMode && this.tarefaId) {
      // Modo Edição (PUT)
      this.tarefaService.atualizar(this.tarefaId, tarefaData).subscribe(
        () => {
          this.snackBar.open("Tarefa atualizada com sucesso!", "Fechar", {
            duration: 3000,
          });
          this.router.navigate(["/"]);
        },
        // CORREÇÃO: Adicionado tipo 'any'
        (error: any) =>
          this.snackBar.open("Erro ao atualizar tarefa.", "Fechar", {
            duration: 3000,
          })
      );
    } else {
      // Modo Criação (POST)
      this.tarefaService.criar(tarefaData).subscribe(
        () => {
          this.snackBar.open("Tarefa criada com sucesso!", "Fechar", {
            duration: 3000,
          });
          this.router.navigate(["/"]);
        },
        // CORREÇÃO: Adicionado tipo 'any'
        (error: any) =>
          this.snackBar.open("Erro ao criar tarefa.", "Fechar", {
            duration: 3000,
          })
      );
    }
  }

  getErrorMessage(fieldName: string): string {
    const field = this.tarefaForm.get(fieldName);
    if (field?.hasError("required")) {
      return "Campo obrigatório";
    }
    if (field?.hasError("minlength")) {
      return "Deve ter no mínimo 3 caracteres";
    }
    return "";
  }

  cancelar(): void {
    this.router.navigate(["/"]);
  }
}
```

---

### 3\. `app.routes.ts` (Sem alteração)

Este arquivo já estava correto. Os caminhos `./components/...` estão certos porque o arquivo `app.routes.ts` está na pasta `src/app/`, no mesmo nível da pasta `components`.

```typescript
import { Routes } from "@angular/router";

export const routes: Routes = [
  // Rota principal: carrega o TarefaListComponent
  {
    path: "",
    loadComponent: () =>
      import("./components/tarefa-list/tarefa-list.component").then(
        (m) => m.TarefaListComponent
      ),
  },

  // Rota para criar nova tarefa: carrega o TarefaFormComponent
  {
    path: "novo",
    loadComponent: () =>
      import("./components/tarefa-form/tarefa-form.component").then(
        (m) => m.TarefaFormComponent
      ),
  },

  // Rota para editar uma tarefa (passando o ID): carrega o mesmo TarefaFormComponent
  {
    path: "editar/:id",
    loadComponent: () =>
      import("./components/tarefa-form/tarefa-form.component").then(
        (m) => m.TarefaFormComponent
      ),
  },

  // Redireciona qualquer rota não encontrada para a principal
  { path: "**", redirectTo: "" },
];
```

Substitua o conteúdo dos seus arquivos por estes e o comando `ng serve` deverá funcionar.

---

Este é um erro clássico e muito comum ao ligar o `async` pipe com o `mat-table`.

### 🧠 Por que o Erro Acontece?

1.  Você tem `[dataSource]="tarefas$ | async"`.
2.  O `tarefas$` é um `Observable`. Antes que o `HttpClient` complete a requisição, o `Observable` ainda não emitiu nada.
3.  Nesse estado inicial, o `async` pipe retorna `null`.
4.  O `[dataSource]` do `mat-table` recebe esse `null` e quebra, pois ele não aceita `null` (ele espera um array, como `[]`).

---

### 🛠️ A Correção (Simples)

Nós só precisamos garantir que o `dataSource` **nunca** seja `null`. Se o `async` pipe retornar `null`, nós devemos fornecer um array vazio (`[]`) como alternativa.

Basta adicionar `|| []` (OU um array vazio) à sua expressão.

**Arquivo:** `src/app/components/tarefa-list/tarefa-list.component.html`

**Mude isto:**

```html
<table
  mat-table
  [dataSource]="tarefas$ | async"
  class="mat-elevation-z8"
></table>
```

**Para isto:**

```html
<table
  mat-table
  [dataSource]="(tarefas$ | async) || []"
  class="mat-elevation-z8"
></table>
```

_(Note os parênteses para garantir a ordem da operação)._

---

### Código Completo Corrigido

Aqui está o `tarefa-list.component.html` com a correção aplicada.

```html
<mat-card>
  <mat-card-header>
    <mat-card-title>Minhas Tarefas</mat-card-title>
  </mat-card-header>
  <mat-card-content>
    <table
      mat-table
      [dataSource]="(tarefas$ | async) || []"
      class="mat-elevation-z8"
    >
      <ng-container matColumnDef="id">
        <th mat-header-cell *matHeaderCellDef>ID</th>
        <td mat-cell *matCellDef="let t">{{t.id}}</td>
      </ng-container>

      <ng-container matColumnDef="titulo">
        <th mat-header-cell *matHeaderCellDef>Título</th>
        <td mat-cell *matCellDef="let t">{{t.titulo}}</td>
      </ng-container>

      <ng-container matColumnDef="concluida">
        <th mat-header-cell *matHeaderCellDef>Concluída</th>
        <td mat-cell *matCellDef="let t">
          <mat-checkbox [checked]="t.concluida" disabled="true"></mat-checkbox>
        </td>
      </ng-container>

      <ng-container matColumnDef="dataCriacao">
        <th mat-header-cell *matHeaderCellDef>Criada em</th>
        <td mat-cell *matCellDef="let t">
          {{t.dataCriacao | date: 'dd/MM/yyyy HH:mm'}}
        </td>
      </ng-container>

      <ng-container matColumnDef="acoes">
        <th mat-header-cell *matHeaderCellDef>Ações</th>
        <td mat-cell *matCellDef="let t">
          <button
            mat-icon-button
            color="primary"
            (click)="editar(t.id)"
            aria-label="Editar"
          >
            <mat-icon>edit</mat-icon>
          </button>
          <button
            mat-icon-button
            color="warn"
            (click)="deletar(t.id)"
            aria-label="Excluir"
          >
            <mat-icon>delete</mat-icon>
          </button>
        </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>
  </mat-card-content>
  <mat-card-actions>
    <button mat-raised-button color="primary" [routerLink]="['/novo']">
      <mat-icon>add</mat-icon>
      Nova Tarefa
    </button>
  </mat-card-actions>
</mat-card>
```

Faça essa pequena alteração no HTML e seu `ng serve` funcionará.

---

Sua tela está "em branco" (provavelmente a tabela de tarefas está vazia) porque estamos usando o banco de dados **H2 em memória** (perfil `dev`).

**Toda vez que você reinicia sua API Spring Boot, o banco H2 é apagado e recriado do zero.**

Sua ideia de adicionar "seed data" (dados iniciais) é a solução perfeita para isso. Vamos fazer com que o Spring Boot popule o banco para nós toda vez que ele iniciar (apenas no perfil `dev`).

---

### 🚀 Solução: Adicionando "Seed Data" no Back-end

Vamos criar uma classe de configuração no Spring Boot que roda na inicialização e insere dados. Usaremos `CommandLineRunner` para isso.

1.  **Volte para o seu projeto Back-end** (o projeto `api` do Spring Boot).
2.  Dentro do pacote `br.com.liston.api.config`, crie um novo arquivo chamado `DataInitializer.java`.

**Arquivo:** `src/main/java/br/com/liston/api/config/DataInitializer.java`

```java
package br.com.liston.api.config;

import br.com.liston.api.model.Tarefa;
import br.com.liston.api.repository.TarefaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile; // Importante!

import java.util.List;

@Configuration
@Profile("dev") // 1. Garante que este bean só será criado no perfil 'dev' (H2)
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private TarefaRepository tarefaRepository;

    // 2. Este método 'run' será executado assim que a aplicação iniciar
    @Override
    public void run(String... args) throws Exception {

        System.out.println("--- INICIALIZANDO DADOS DE TESTE (SEED) ---");

        // Limpa o banco (caso haja algo)
        tarefaRepository.deleteAll();

        // Cria as tarefas iniciais
        Tarefa t1 = new Tarefa("Estudar Spring Boot", "Concluir o guia de API REST");
        t1.setConcluida(true); // Marca a primeira como concluída

        Tarefa t2 = new Tarefa("Estudar Angular", "Aprender sobre componentes Standalone");

        Tarefa t3 = new Tarefa("Estudar Ionic", "Preparar o ambiente mobile");

        // Salva todas de uma vez
        tarefaRepository.saveAll(List.of(t1, t2, t3));

        System.out.println("--- DADOS DE TESTE INSERIDOS COM SUCESSO ---");
    }
}
```

---

### 🏃‍♂️ Próximos Passos

1.  **Adicione** esse arquivo `DataInitializer.java` ao seu projeto Spring Boot.
2.  **Reinicie sua API Spring Boot.** Você deverá ver as mensagens "INICIALIZANDO DADOS..." no log do console.
3.  **Atualize (F5) seu navegador** onde o Angular (`webapp`) está rodando.

Seus três dados de teste agora devem aparecer magicamente na tabela\! Isso acontecerá toda vez que você iniciar o back-end no perfil `dev`.

---

Ótimo. Agora que a API e o Web App estão funcionando, vamos levar o **"ListOn"** para o mobile.

Manteremos a consistência arquitetural, usando **Standalone** com Ionic e Angular. Você notará que o _conceito_ é o mesmo, mas os _componentes de UI_ (HTML) serão trocados por componentes nativos do Ionic.

---

## 📱 Parte 3: Construindo o Aplicativo Mobile (com Ionic Standalone)

Vamos criar um aplicativo nativo para iOS e Android que consome a **mesma API** Spring Boot.

### 3.1. Preparação do Ambiente Mobile

1.  **Instale o Ionic CLI:** Se você ainda não o tem, abra seu terminal e rode:
    ```bash
    npm install -g @ionic/cli
    ```

### 3.2. Inicializando o Projeto Ionic

1.  No seu workspace (fora das pastas `api` e `webapp`), rode o comando:

    ```bash
    ionic start mobileapp tabs --type=angular --capacitor --standalone
    ```

    - `ionic start mobileapp`: Cria um novo projeto na pasta `mobileapp`.
    - `tabs`: Começa com um template básico de abas (vamos modificá-lo).
    - `--type=angular`: Especifica que usaremos Angular.
    - `--capacitor`: Adiciona o Capacitor para build nativo (iOS/Android).
    - `--standalone`: **Importante\!** Diz ao Ionic para usar a arquitetura Standalone, assim como fizemos no `webapp`.

2.  Acesse a pasta do projeto:

    ```bash
    cd mobileapp
    ```

3.  Rode o app pela primeira vez para ver o template:

    ```bash
    ionic serve
    ```

    - Isso abrirá o app no seu navegador em `http://localhost:8100`.

### 3.3. 🚨 IMPORTANTE: Configurando CORS e Acesso de Rede

Temos duas novas configurações a fazer no nosso Back-end Spring Boot.

**1. CORS (Para `ionic serve`)**
O `ionic serve` roda em `http://localhost:8100`. Precisamos que nossa API confie nessa origem.

**Volte ao projeto Back-end (`api`)** e atualize o `SecurityConfig.java`:

**`src/main/java/br/com/liston/api/config/SecurityConfig.java`**

```java
// ... (imports)

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    // ... (seu método securityFilterChain)

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();

        // CORREÇÃO: Adicione a origem do Ionic (localhost:8100)
        configuration.setAllowedOrigins(Arrays.asList(
            "http://localhost:4200", // Angular WebApp
            "http://localhost:8100"  // Ionic Serve
        ));

        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        configuration.setAllowedHeaders(Arrays.asList("Authorization", "Cache-Control", "Content-Type"));

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}
```

**Reinicie sua API Spring Boot** para que a mudança tenha efeito.

**2. Acesso em Dispositivos Reais (Android/iOS)**
Quando você rodar o app no seu celular, ele **não** será `localhost`. Ele acessará a API pelo IP da sua rede (ex: `192.168.1.10`). A forma mais fácil de permitir isso é liberar o acesso via IP na configuração do Capacitor.

**Volte para o projeto Ionic (`mobileapp`)** e abra o arquivo:

**`capacitor.config.ts`**

```typescript
import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "io.ionic.starter",
  appName: "mobileapp",
  webDir: "www",
  // ADICIONE ESTA CONFIGURAÇÃO:
  server: {
    // Permite que o app acesse a API pelo IP (ex: http://192.168.1.10:8080)
    // Isso é crucial para testes em dispositivos físicos.
    cleartext: true,
  },
};

export default config;
```

### 3.4. Configurando o `HttpClient`

Assim como no `webapp`, precisamos "prover" o `HttpClient` globalmente.

**`src/app/app.config.ts`**

```typescript
import { ApplicationConfig } from "@angular/core";
import { provideRouter, withComponentInputBinding } from "@angular/router";
import { routes } from "./app.routes";
import { provideIonicAngular } from "@ionic/angular/standalone";

// 1. Importe o provider
import { provideHttpClient } from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideIonicAngular({}),

    // 2. Adicione o provider globalmente
    provideHttpClient(),
  ],
};
```

### 3.5. Reutilizando o Código (Serviço e Modelo)

Esta é a beleza de ter uma API. Não precisamos reinventar nada.

1.  **Copie o Modelo:**

    - Vá na pasta `webapp/src/app/models/` e copie `tarefa.model.ts`.
    - Cole na pasta `mobileapp/src/app/models/` (crie a pasta `models`).

2.  **Copie o Serviço:**

    - Vá na pasta `webapp/src/app/services/` e copie `tarefa.service.ts`.
    - Cole na pasta `mobileapp/src/app/services/` (crie a pasta `services`).

**🚨 ATENÇÃO: Verifique a URL da API no Serviço**
O `localhost` funciona para `ionic serve` no navegador. Mas para um dispositivo físico, você **DEVE** usar o IP da sua máquina.

_No Windows, ache seu IP com `ipconfig` no CMD._

**`mobileapp/src/app/services/tarefa.service.ts`**

```typescript
// ... (imports)
@Injectable({
  providedIn: "root",
})
export class TarefaService {
  // Mude 'localhost' para o IP da sua máquina se for testar em um celular
  // Ex: private readonly API_URL = 'http://192.168.1.10:8080/api/tarefas/';
  private readonly API_URL = "http://localhost:8080/api/tarefas/";

  // ... (todo o resto do serviço é IDÊNTICO e não precisa mudar)
}
```

### 3.6. Limpando e Criando as Páginas (Pages)

O template do Ionic (`tabs`) é focado em abas. Vamos simplificar e criar duas páginas:

1.  **Lista de Tarefas:** Uma página principal.
2.  **Formulário de Tarefa:** Uma página modal para criar/editar.

**1. Gerando as Novas Páginas**
No terminal, dentro da pasta `mobileapp`, rode:

```bash
# Cria a página para listar as tarefas
ionic generate page pages/tarefa-list

# Cria a página-modal para o formulário
ionic generate modal pages/tarefa-form
```

- Usamos `page` para a lista e `modal` para o formulário, pois esta é uma excelente prática de UX mobile.

**2. Limpando as Rotas**
Vamos remover as rotas de "Tabs" e definir nossa lista como a principal.

**`src/app/app.routes.ts`**

```typescript
import { Routes } from "@angular/router";

export const routes: Routes = [
  // 1. Define a rota principal para nossa página de lista
  {
    path: "",
    redirectTo: "tarefa-list", // Redireciona de '/' para '/tarefa-list'
    pathMatch: "full",
  },
  // 2. Carrega nossa página de lista
  {
    path: "tarefa-list",
    loadComponent: () =>
      import("./pages/tarefa-list/tarefa-list.page").then(
        (m) => m.TarefaListPage
      ),
  },
  // 3. A página de formulário (modal) não precisa de rota,
  //    pois será chamada programaticamente.

  // (As rotas 'tabs', 'tab1', 'tab2', 'tab3' podem ser removidas)
];
```

### 3.7. Implementando a Página de Lista (`tarefa-list`)

Aqui, trocamos `mat-table` por `ion-list` e `ion-item-sliding`.

**`src/app/pages/tarefa-list/tarefa-list.page.ts`**

```typescript
import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Observable } from "rxjs";
import { Tarefa } from "src/app/models/tarefa.model";
import { TarefaService } from "src/app/services/tarefa.service";

// Imports de UI do Ionic
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonCheckbox,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonFab,
  IonFabButton,
  IonIcon,
  IonSpinner,
  ModalController,
  IonListHeader,
  IonToast,
} from "@ionic/angular/standalone";
import { addIcons } from "ionicons"; // Para ícones
import { add, pencil, trash } from "ionicons/icons"; // Ícones que usaremos

// Importe o Modal que criamos
import { TarefaFormPage } from "../tarefa-form/tarefa-form.page";

@Component({
  selector: "app-tarefa-list",
  templateUrl: "./tarefa-list.page.html",
  styleUrls: ["./tarefa-list.page.scss"],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonCheckbox,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonFab,
    IonFabButton,
    IonIcon,
    IonSpinner,
    IonListHeader,
    IonToast,
  ],
})
export class TarefaListPage implements OnInit {
  tarefas$!: Observable<Tarefa[]>;
  isLoading = true; // Para controle do Spinner

  constructor(
    private tarefaService: TarefaService,
    private modalCtrl: ModalController, // Para abrir o formulário
    private toastCtrl: IonToast // Para notificações
  ) {
    // Adiciona os ícones que vamos usar
    addIcons({ add, pencil, trash });
  }

  ngOnInit() {
    this.carregarTarefas();
  }

  carregarTarefas() {
    this.isLoading = true;
    this.tarefas$ = this.tarefaService.listarTodas();
    // Simplesmente para o spinner não sumir rápido demais
    this.tarefas$.subscribe(() => (this.isLoading = false));
  }

  // Abre o Modal (Formulário)
  async abrirFormulario(tarefa: Tarefa | null = null) {
    const modal = await this.modalCtrl.create({
      component: TarefaFormPage, // Nosso modal de formulário
      componentProps: {
        tarefaParaEditar: tarefa, // Passa a tarefa (ou null se for 'novo')
      },
    });

    await modal.present();

    // 'onDidDismiss' roda quando o modal é fechado
    const { data } = await modal.onDidDismiss();
    if (data === "salvo") {
      this.mostrarNotificacao("Tarefa salva com sucesso!");
      this.carregarTarefas(); // Recarrega a lista
    }
  }

  deletar(id: number, slidingItem: IonItemSliding) {
    this.tarefaService.deletar(id).subscribe(
      () => {
        this.mostrarNotificacao("Tarefa excluída!", "danger");
        this.carregarTarefas();
      },
      (error: any) => this.mostrarNotificacao("Erro ao excluir.", "danger")
    );
    slidingItem.close(); // Fecha o 'sliding'
  }

  async mostrarNotificacao(mensagem: string, cor: string = "success") {
    const toast = await this.toastCtrl.create({
      message: mensagem,
      duration: 2000,
      color: cor,
    });
    toast.present();
  }
}
```

**`src/app/pages/tarefa-list/tarefa-list.page.html`**

```html
<ion-header>
  <ion-toolbar color="primary">
    <ion-title>ListOn Mobile</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <div *ngIf="isLoading" class="spinner-container">
    <ion-spinner name="crescent"></ion-spinner>
  </div>

  <ng-container *ngIf="!isLoading && (tarefas$ | async) as tarefas">
    <ion-list-header *ngIf="tarefas.length === 0">
      Nenhuma tarefa encontrada.
    </ion-list-header>

    <ion-list>
      <ion-item-sliding #slidingItem *ngFor="let t of tarefas">
        <ion-item>
          <ion-checkbox
            [checked]="t.concluida"
            [disabled]="true"
            slot="start"
          ></ion-checkbox>
          <ion-label>
            <h2>{{ t.titulo }}</h2>
            <p>{{ t.descricao }}</p>
          </ion-label>
        </ion-item>

        <ion-item-options side="end">
          <ion-item-option
            color="primary"
            (click)="abrirFormulario(t); slidingItem.close()"
          >
            <ion-icon slot="icon-only" name="pencil"></ion-icon>
          </ion-item-option>
          <ion-item-option color="danger" (click)="deletar(t.id, slidingItem)">
            <ion-icon slot="icon-only" name="trash"></ion-icon>
          </ion-item-option>
        </ion-item-options>
      </ion-item-sliding>
    </ion-list>
  </ng-container>

  <ion-fab slot="fixed" vertical="bottom" horizontal="end">
    <ion-fab-button (click)="abrirFormulario()">
      <ion-icon name="add"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</ion-content>
```

**`src/app/pages/tarefa-list/tarefa-list.page.scss`**

```scss
.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
}
```

### 3.8. Implementando o Formulário Modal (`tarefa-form`)

Esta página receberá a `tarefaParaEditar` (via `componentProps`) e usará `ReactiveFormsModule`.

**`src/app/pages/tarefa-form/tarefa-form.page.ts`**

```typescript
import { Component, Input, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Tarefa } from "src/app/models/tarefa.model";
import { TarefaService } from "src/app/services/tarefa.service";

// Imports de UI do Ionic
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonCheckbox,
  IonButton,
  IonButtons,
  ModalController,
  IonTextarea,
} from "@ionic/angular/standalone";

@Component({
  selector: "app-tarefa-form",
  templateUrl: "./tarefa-form.page.html",
  styleUrls: ["./tarefa-form.page.scss"],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule, // Essencial para formulários
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonCheckbox,
    IonButton,
    IonButtons,
    IonTextarea,
  ],
})
export class TarefaFormPage implements OnInit {
  // 'Input' recebe a propriedade passada pelo ModalController
  @Input() tarefaParaEditar: Tarefa | null = null;

  tarefaForm: FormGroup;
  isEditMode = false;
  tituloPagina = "Nova Tarefa";

  constructor(
    private fb: FormBuilder,
    private tarefaService: TarefaService,
    private modalCtrl: ModalController // Para fechar o modal
  ) {
    this.tarefaForm = this.fb.group({
      titulo: ["", [Validators.required, Validators.minLength(3)]],
      descricao: [""],
      concluida: [false],
    });
  }

  ngOnInit() {
    if (this.tarefaParaEditar) {
      this.isEditMode = true;
      this.tituloPagina = "Editar Tarefa";
      // Preenche o formulário com os dados da tarefa
      this.tarefaForm.patchValue(this.tarefaParaEditar);
    }
  }

  // Fecha o modal sem salvar
  cancelar() {
    return this.modalCtrl.dismiss(null, "cancelado");
  }

  // Salva (Cria ou Atualiza)
  onSubmit() {
    if (this.tarefaForm.invalid) {
      return;
    }

    const tarefaData = this.tarefaForm.value;

    // Escolhe qual método do serviço chamar
    const request = this.isEditMode
      ? this.tarefaService.atualizar(this.tarefaParaEditar!.id, tarefaData)
      : this.tarefaService.criar(tarefaData);

    request.subscribe(
      () => {
        // Fecha o modal e retorna 'salvo'
        this.modalCtrl.dismiss("salvo", "salvo");
      },
      (error: any) => {
        // (Em um app real, mostraríamos o erro)
        console.error("Erro ao salvar:", error);
        this.modalCtrl.dismiss(null, "erro");
      }
    );
  }
}
```

**`src/app/pages/tarefa-form/tarefa-form.page.html`**

```html
<ion-header>
  <ion-toolbar color="primary">
    <ion-buttons slot="start">
      <ion-button (click)="cancelar()">Cancelar</ion-button>
    </ion-buttons>

    <ion-title>{{ tituloPagina }}</ion-title>

    <ion-buttons slot="end">
      <ion-button (click)="onSubmit()" [disabled]="tarefaForm.invalid"
        >Salvar</ion-button
      >
    </ion-buttons>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-padding">
  <form [formGroup]="tarefaForm">
    <ion-list>
      <ion-item>
        <ion-input
          label="Título"
          labelPlacement="floating"
          formControlName="titulo"
          placeholder="Ex: Estudar Ionic"
          errorText="Título é obrigatório (min. 3 caracteres)"
          required
        ></ion-input>
      </ion-item>

      <ion-item>
        <ion-textarea
          label="Descrição"
          labelPlacement="floating"
          formControlName="descricao"
          placeholder="(Opcional)"
          [autoGrow]="true"
        ></ion-textarea>
      </ion-item>

      <ion-item lines="none">
        <ion-checkbox formControlName="concluida" slot="start"></ion-checkbox>
        <ion-label>Concluída</ion-label>
      </ion-item>
    </ion-list>
  </form>
</ion-content>
```

### 3.9. Testando o Aplicativo Mobile

1.  **Verifique se o Back-end (Spring Boot) está rodando\!** (em `http://localhost:8080`)
2.  No terminal, na pasta `mobileapp`, rode:
    ```bash
    ionic serve
    ```
    - Isso abrirá seu navegador em `http://localhost:8100`.
    - Use o "modo desenvolvedor" (F12) do navegador para simular um celular.

Você agora deve ter um aplicativo mobile totalmente funcional, consumindo a mesma API que o seu aplicativo web, ambos construídos com a arquitetura Standalone\!

---

## 🏁 Conclusão da Parte 3

Parabéns\! Você concluiu o ecossistema "ListOn" Full Stack:

- **Parte 1:** Uma API RESTful robusta com Java e Spring Boot.
- **Parte 2:** Um Web App SPA moderno com Angular Standalone e Material.
- **Parte 3:** Um Aplicativo Mobile nativo com Ionic Standalone.

