---
layout: default
title: 🚀 Controle de Gastos com Spring Boot e HTMX
---

# 🚀 Controle de Gastos com Spring Boot e HTMX
v1.1

Neste guia, vamos construir juntos uma aplicação web moderna e robusta chamada **Controle de Gastos**. O objetivo é criar um gerenciador financeiro simples, mas com uma experiência de usuário fluida, similar a uma **Single Page Application (SPA)**, sem a complexidade de frameworks JavaScript.

Ao final, você terá uma aplicação funcional implantada na nuvem, pronta para ser usada e compartilhada.

**O que você vai aprender:**

  * Estruturar um projeto **Spring Boot** do zero.
  * Modelar dados e usar o **Spring Data JPA**.
  * Criar uma interface reativa com **Thymeleaf** e **HTMX**.
  * Gerenciar diferentes ambientes (desenvolvimento e produção) com **Spring Profiles**.
  * Fazer o deploy de um banco de dados **PostgreSQL** no **Neon**.
  * Fazer o deploy de uma aplicação Java no **Render**.

-----

### 🗂️ Fase 1: Preparação do Ambiente e Controle de Versão

Todo projeto profissional começa com um bom controle de versão. Vamos usar Git e hospedá-lo no GitHub.

## GitHub Desktop
Se não estiver habituado a usar o Git por linha de comando, utilize o GitHub Desktop
https://desktop.github.com/download/

---

1.  **Crie a Pasta do Projeto:**
    Abra seu terminal e crie uma pasta para o projeto.

    ```bash
    mkdir controle-de-gastos
    cd controle-de-gastos
    ```

2.  **Inicialize o Repositório Git:**

    ```bash
    git init
    ```

3.  **Crie o Repositório no GitHub:**

      * Vá para o [GitHub](https://github.com) e crie um novo repositório (pode ser público ou privado).
      * **NÃO** inicialize com `README`, `.gitignore` ou licença. Queremos um repositório limpo.
      * Após criar, o GitHub lhe dará os comandos para conectar seu repositório local. Copie-os e execute no seu terminal. Serão parecidos com isto:

    <!-- end list -->

    ```bash
    git remote add origin https://github.com/seu-usuario/controle-de-gastos.git
    git branch -M main
    # Faremos o primeiro push após criar o projeto na próxima fase.
    ```

-----

### 🏗️ Fase 2: Criação do Esqueleto do Projeto


## 🔹 Spring Initializr

Usaremos o **Spring Initializr** para gerar a base da nossa aplicação com todas as dependências necessárias.

1.  Acesse o [Spring Initializr](https://start.spring.io/).

2.  Preencha os campos da seguinte forma:

      * **Project:** Maven
      * **Language:** Java
      * **Spring Boot:** A versão mais recente (ex: 3.x.x)
      * **Project Metadata:**
          * **Group:** `br.com.controledegastos`
          * **Artifact:** `controle-de-gastos`
          * **Name:** `controle-de-gastos`
          * **Description:** `Aplicação para controle de gastos pessoais`
          * **Package name:** `br.com.controledegastos` <--- Fazer exatamente igual, remover excesso
      * **Packaging:** Jar
      * **Java:** 21

3.  No campo **Dependencies**, clique em "ADD DEPENDENCIES" e adicione as seguintes:

      * `Spring Web`: Para criar controllers e APIs REST.
      * `Spring Data JPA`: Para persistência de dados de forma simples.
      * `Thymeleaf`: Nosso motor de templates para renderizar o HTML.
      * `H2 Database`: Banco de dados em memória para o ambiente de desenvolvimento.
      * `PostgreSQL Driver`: Para conectar com nosso banco de produção.
      * `Spring Boot DevTools`: Para live reload durante o desenvolvimento.

4.  Clique em **GENERATE**. Um arquivo `.zip` será baixado.

5.  **Descompacte** o conteúdo do `.zip` dentro da pasta `controle-de-gastos` que criamos na Fase 1. A estrutura de arquivos deve ficar assim:

    ```
    controle-de-gastos/
    ├── .git/
    ├── .mvn/
    ├── src/
    ├── mvnw
    ├── mvnw.cmd
    └── pom.xml
    ```

6.  **Faça o primeiro commit:**

    ```bash
    git add .
    git commit -m "🚀 Feat: Initial project structure from Spring Initializr"
    git push -u origin main
    ```

-----

### 💾 Fase 3: Modelagem de Dados

Vamos definir a estrutura do nosso "Lançamento" financeiro e o repositório para acessá-lo no banco de dados.

1.  **Crie o Enum `TipoLancamento`:**
    Dentro de `src/main/java/br/com/controledegastos/`, crie um novo pacote chamado `model`. Dentro dele, crie um Enum `TipoLancamento.java`.

    ```java
    // src/main/java/br/com/controledegastos/model/TipoLancamento.java
    package br.com.controledegastos.model;

    public enum TipoLancamento {
        RECEITA,
        DESPESA
    }
    ```

2.  **Crie a Entidade `Lancamento`:**
    No mesmo pacote `model`, crie a classe `Lancamento.java`.

    ```java
    // src/main/java/br/com/controledegastos/model/Lancamento.java
    package br.com.controledegastos.model;

    import jakarta.persistence.*;
    import java.math.BigDecimal;
    import java.time.LocalDate;

    @Entity
    public class Lancamento {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        private String descricao;
        private BigDecimal valor;
        private LocalDate data = LocalDate.now();

        @Enumerated(EnumType.STRING)
        private TipoLancamento tipo;

        // Getters e Setters
        public Long getId() { return id; }
        public void setId(Long id) { this.id = id; }
        public String getDescricao() { return descricao; }
        public void setDescricao(String descricao) { this.descricao = descricao; }
        public BigDecimal getValor() { return valor; }
        public void setValor(BigDecimal valor) { this.valor = valor; }
        public LocalDate getData() { return data; }
        public void setData(LocalDate data) { this.data = data; }
        public TipoLancamento getTipo() { return tipo; }
        public void setTipo(TipoLancamento tipo) { this.tipo = tipo; }
    }
    ```

3.  **Crie o Repositório `LancamentoRepository`:**
    Crie um novo pacote chamado `repository`. Dentro dele, crie a interface `LancamentoRepository.java`.

    ```java
    // src/main/java/br/com/controledegastos/repository/LancamentoRepository.java
    package br.com.controledegastos.repository;

    import br.com.controledegastos.model.Lancamento;
    import org.springframework.data.jpa.repository.JpaRepository;
    import org.springframework.stereotype.Repository;

    @Repository
    public interface LancamentoRepository extends JpaRepository<Lancamento, Long> {
    }
    ```

    O `JpaRepository` já nos fornece todos os métodos de CRUD (`save`, `findById`, `findAll`, `deleteById`, etc.) magicamente\!

-----

### ⚙️ Fase 4: Lógica de Backend (Controller)

O `Controller` irá receber as requisições do navegador, processá-las e devolver o HTML.

1.  **Crie o `LancamentoController`:**
    Crie um novo pacote chamado `controller`. Dentro dele, crie a classe `LancamentoController.java`.

    ```java
    // src/main/java/br/com/controledegastos/controller/LancamentoController.java
    package br.com.controledegastos.controller;

    import br.com.controledegastos.model.Lancamento;
    import br.com.controledegastos.model.TipoLancamento;
    import br.com.controledegastos.repository.LancamentoRepository;
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.stereotype.Controller;
    import org.springframework.ui.Model;
    import org.springframework.web.bind.annotation.*;

    import java.util.Comparator;
    import java.util.List;

    @Controller
    public class LancamentoController {

        @Autowired
        private LancamentoRepository lancamentoRepository;

        // Método para carregar a página principal
        @GetMapping("/")
        public String index(Model model) {
            List<Lancamento> lancamentos = lancamentoRepository.findAll();
            lancamentos.sort(Comparator.comparing(Lancamento::getData).reversed());
            model.addAttribute("lancamentos", lancamentos);
            model.addAttribute("novoLancamento", new Lancamento());
            model.addAttribute("tipos", TipoLancamento.values());
            return "index"; // Retorna o arquivo templates/index.html
        }

        // Método para adicionar um novo lançamento (via htmx)
        @PostMapping("/lancamentos")
        public String addLancamento(@ModelAttribute Lancamento novoLancamento, Model model) {
            lancamentoRepository.save(novoLancamento);
            
            // Após salvar, recarregamos a lista e a retornamos como um fragmento
            List<Lancamento> lancamentos = lancamentoRepository.findAll();
            lancamentos.sort(Comparator.comparing(Lancamento::getData).reversed());
            model.addAttribute("lancamentos", lancamentos);
            
            // Retorna apenas o fragmento da tabela, não a página inteira
            return "index :: lista-lancamentos"; 
        }

        // Método para excluir um lançamento (via htmx)
        @DeleteMapping("/lancamentos/{id}")
        public String deleteLancamento(@PathVariable Long id, Model model) {
            lancamentoRepository.deleteById(id);
            
            // Após deletar, recarregamos a lista e a retornamos como um fragmento
            List<Lancamento> lancamentos = lancamentoRepository.findAll();
            lancamentos.sort(Comparator.comparing(Lancamento::getData).reversed());
            model.addAttribute("lancamentos", lancamentos);
            
            // Retorna apenas o fragmento da tabela
            return "index :: lista-lancamentos";
        }
    }
    ```

    **Ponto Chave:** Note que os métodos `addLancamento` e `deleteLancamento` retornam `"index :: lista-lancamentos"`. Isso é uma instrução para o Thymeleaf renderizar apenas o pedaço (fragmento) do HTML chamado `lista-lancamentos` dentro do arquivo `index.html`. É essa a mágica que o htmx usará para atualizar a página dinamicamente.

-----

### 🎨 Fase 5: Construção da Interface com Thymeleaf e htmx

Agora vamos criar a interface que o usuário verá. Ela será um único arquivo HTML que será atualizado dinamicamente pelo htmx.

1.  **Crie o arquivo `index.html`:**
    Dentro de `src/main/resources/templates/`, crie o arquivo `index.html`.

2.  **Adicione o conteúdo HTML:**
    Este código inclui um formulário para adicionar lançamentos e uma tabela para listá-los. Observe os atributos `hx-*`, que são os comandos do htmx.

    ```html
    <!DOCTYPE html>
    <html lang="pt-br" xmlns:th="http://www.thymeleaf.org">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Controle de Gastos</title>
        <style>
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; margin: 40px; background-color: #f4f4f9; color: #333; }
            .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
            form { display: flex; gap: 10px; margin-bottom: 20px; flex-wrap: wrap; }
            input, select, button { padding: 10px; border-radius: 5px; border: 1px solid #ddd; }
            button { background-color: #007bff; color: white; border: none; cursor: pointer; }
            button:hover { background-color: #0056b3; }
            table { width: 100%; border-collapse: collapse; }
            th, td { padding: 10px; border-bottom: 1px solid #ddd; text-align: left; }
            .despesa { color: #d9534f; }
            .receita { color: #5cb85c; }
            .delete-btn { background-color: #d9534f; }
            .delete-btn:hover { background-color: #c9302c; }
        </style>
        <script src="https://unpkg.com/htmx.org@1.9.12"></script>
    </head>
    <body>
        <div class="container">
            <h1>Meu Controle de Gastos 💰</h1>

            <form hx-post="/lancamentos"      
                  hx-target="#lista-lancamentos" 
                  hx-swap="outerHTML"            
                  hx-on::after-request="this.reset()">
                <input type="text" name="descricao" placeholder="Descrição" required>
                <input type="number" step="0.01" name="valor" placeholder="Valor" required>
                <select name="tipo" required>
                    <option th:each="tipoOpt : ${tipos}" th:value="${tipoOpt}" th:text="${tipoOpt}"></option>
                </select>
                <button type="submit">Adicionar</button>
            </form>

            <div id="lista-lancamentos" th:fragment="lista-lancamentos">
                <table>
                    <thead>
                        <tr>
                            <th>Descrição</th>
                            <th>Valor</th>
                            <th>Data</th>
                            <th>Tipo</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr th:each="lancamento : ${lancamentos}">
                            <td th:text="${lancamento.descricao}"></td>
                            <td th:text="|R$ ${#numbers.formatDecimal(lancamento.valor, 1, 'POINT', 2, 'COMMA')}|"
                                th:class="${lancamento.tipo.name() == 'DESPESA' ? 'despesa' : 'receita'}">
                            </td>
                            <td th:text="${#temporals.format(lancamento.data, 'dd/MM/yyyy')}"></td>
                            <td th:text="${lancamento.tipo.name()}"></td>
                            <td>
                                <button class="delete-btn"
                                        hx-delete="@{/lancamentos/{id}(id=${lancamento.id})}"
                                        hx-target="#lista-lancamentos"
                                        hx-swap="outerHTML"
                                        hx-confirm="Tem certeza que deseja excluir?">
                                    Excluir
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </body>
    </html>
    ```

    **Como o htmx funciona aqui:**

      * **Adicionar:** O `<form>` tem `hx-post="/lancamentos"`. Ao submeter, ele envia um POST para essa URL. `hx-target="#lista-lancamentos"` e `hx-swap="outerHTML"` dizem para pegar a resposta (que é o fragmento da tabela atualizada) e substituir todo o elemento `<div id="lista-lancamentos">`.
      * **Excluir:** O `<button>` de exclusão tem `hx-delete="/lancamentos/..."`. Ao clicar, ele envia uma requisição DELETE. A resposta (a tabela atualizada) também substitui o `<div id="lista-lancamentos">`.

### Obs. Crud completo será implementado posteriormente.

-----

### 🌍 Fase 6: Configuração de Ambientes

Vamos configurar a aplicação para usar o H2 em desenvolvimento e o PostgreSQL em produção.

1.  **Arquivo `application.properties` (Desenvolvimento):**
    Este arquivo, localizado em `src/main/resources/`, já é o perfil padrão. Vamos configurá-lo para o H2.

    ```properties
    # Configuracoes do H2 Database (perfil 'default') <-- 'Nao usar acentos por conta do Render'
    spring.datasource.url=jdbc:h2:mem:testdb
    spring.datasource.driverClassName=org.h2.Driver
    spring.datasource.username=sa
    spring.datasource.password=
    spring.h2.console.enabled=true

    # JPA
    #spring.jpa.database-platform=org.hibernate.dialect.H2Dialect <-- 'Comentar por conta do Render'
    spring.jpa.hibernate.ddl-auto=update
    ```

    Agora você pode rodar sua aplicação localmente. Abra a classe `ControleDeGastosApplication.java` na sua IDE e execute-a. Acesse `http://localhost:8080` e `http://localhost:8080/h2-console` (URL do JDBC: `jdbc:h2:mem:testdb`) para testar.

2.  **Arquivo `application-prod.properties` (Produção):**
    Na mesma pasta, crie um novo arquivo chamado `application-prod.properties`. Este arquivo será ativado quando o perfil `prod` estiver ativo.

    ```properties
    # Configuracoes do PostgreSQL (perfil 'prod') <-- 'Nao usar acentos por conta do Render'
    # Usaremos variáveis de ambiente no Render para preencher estes valores
    spring.datasource.url=${DB_URL}
    spring.datasource.username=${DB_USERNAME}
    spring.datasource.password=${DB_PASSWORD}

    # JPA
    spring.jpa.hibernate.ddl-auto=update
    #spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect <-- 'Comentar por conta do Render'
    ```

    Os valores `${...}` serão substituídos por variáveis de ambiente que configuraremos na plataforma de deploy.

---

## 🔹 Caminho 1 — Usando Docker (mais flexível)

Se quiser controlar melhor, crie um arquivo **`Dockerfile`** na raiz do projeto:

```dockerfile
# Estágio 1: Build da Aplicação com Eclipse Temurin JDK
FROM eclipse-temurin:21-jdk-jammy as builder
WORKDIR /app
COPY .mvn/ .mvn
COPY mvnw .
COPY pom.xml .

RUN chmod +x mvnw # <-- ADICIONE ESTA LINHA

RUN ./mvnw dependency:go-offline
COPY src ./src
RUN ./mvnw clean package -DskipTests

# Estágio 2: Imagem Final de Execução com Eclipse Temurin JRE
FROM eclipse-temurin:21-jre-jammy
WORKDIR /app
COPY --from=builder /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
```

---

## Preparando Docker para o Render:

* **Runtime**: Docker
* Ele vai detectar o `Dockerfile` automaticamente e construir sua imagem.

---

## 🔹 Conferindo variáveis de ambiente

No painel do Render → **Environment**:

* Configure variáveis como `SPRING_PROFILES_ACTIVE=prod` ou credenciais do banco (`DATABASE_URL`, `JDBC_URL`, etc).
* Se estiver usando PostgreSQL do Render, ele te dá os dados prontos (host, user, password).


3. **Commit das mudanças:**

    ```bash
    git add .
    git commit -m "✨ Feat: Implement CRUD and SPA interface with htmx"
    git push origin main
    ```

-----

### ☁️ Fase 7: Deploy em Produção

É hora de colocar nossa aplicação no ar\!

## 🔹 Neon

#### 7.1. Criando o Banco de Dados no Neon

1.  Vá para [Neon](https://neon.tech) e faça login (pode usar sua conta do GitHub).
2.  Crie um novo projeto. Dê um nome, como `controle-de-gastos-db`.
3.  Após a criação, Clique no botão superior direito **Connect**, você será levado a um painel. Na seção **Connection Details**, você encontrará as informações que precisamos.
4.  O Neon fornece uma URL de conexão completa. Guarde as seguintes partes:
      * **Host:** (ex: `ep-plain-snow-123456.us-east-2.aws.neon.tech`)
      * **Database:** (o nome do seu banco)
      * **User:** (o nome do seu usuário)
      * **Password:** (a senha que foi gerada)
5. Ou mais simples clique onde está **psql**, e mude para **Connection string**, depois clique em **Copy snippet** e salve no bloco de notas, para ser usado posteriormente no Render.

## 🔹 Render

#### 7.2. Fazendo o Deploy da Aplicação no Render

1.  Vá para [Render](https://render.com) e faça login (também pode usar sua conta do GitHub).

2.  No painel, clique em **New +** \> **Web Service**.

3.  Conecte seu repositório do GitHub e selecione o repositório `controle-de-gastos`.

4.  Na tela de configuração, preencha:

      * **Name:** `controle-de-gastos[NomeSobrenome]` (ou o que preferir).      
      * **Language:** `Docker`.  
      * **Branch:** `main`. <-- ou **master** conferir no seu GitHub      
      * **Region:** Escolha a mais próxima de você. Ohio (US East)
      * **Instance Type:** **Free**. 512 (RAM) 0.1 CPU 

5.  Agora, a parte mais importante: as **Variáveis de Ambiente**. Clique em **Advanced**.

    * Clique em **Add Environment Variable** e adicione as seguintes chaves e valores:

    | Chave                    | Valor                                                                                   |
    |:-------------------------|:----------------------------------------------------------------------------------------|
    | `SPRING_PROFILES_ACTIVE` | `prod`                                                                                  |
    | `DB_USERNAME`            | O usuário do seu banco de dados Neon.                                                   | `neondb_owner` |
    | `DB_PASSWORD`            | A senha do seu banco de dados Neon.                                                     | `:*********@` |fica entre os dois pontos e o arroba.
    | `DB_URL`                 | Exemplo: `postgresql://neondb_owner:*****@----?sslmode=require&channel_binding=require` |

    **Atenção:** Substitua `<HOST_DO_NEON>` e `<DB_NAME_DO_NEON>` pelos valores que você pegou do painel do Neon. A parte `?sslmode=require` é **essencial** para a conexão funcionar.

---

6. Role para baixo e clique em **Create Web Service**.

O Render irá buscar seu código do GitHub, construir a aplicação e iniciá-la. O primeiro deploy pode levar alguns minutos. Você pode acompanhar o progresso nos logs.

Quando terminar, o Render fornecerá uma URL pública:

### Exemplo: `https://controle-de-gastosNomeSobrenome.onrender.com`

Agora sua aplicação estará **Online** e pronta para ser usada de forma remota! 🎉

-----

## 🔹 Caminho 2 — Sem Docker 
Mais simples para deploy com outras linguagens, como Elixir, Go, Node, Python, Ruby, Rust.

1. Vá em **New Web Service** → **Connect Repo** → selecione o repositório `controle-de-gastos`.
2. Quando Render pedir a configuração, escolha **Runtime: Docker (ou  sua linguagem de preferência)**.
3. Preencha manualmente:

   * **Name**: `controle-de-gastos`
   * **Region**: (ex. Ohio se você está no Brasil)
   * **Branch**: `main`
   * **Build Command**:

     ```bash
     ./mvnw clean install -DskipTests
     ```

     ou, se não tiver wrapper (`mvnw`):

     ```bash
     mvn clean install -DskipTests
     ```
   * **Start Command**:

     ```bash
     java -jar target/*.jar
     ```
4. Certifique-se de que o seu projeto **gera o JAR executável** (padrão do Spring Boot). No `pom.xml`, deve ter:

   ```xml
   <build>
       <plugins>
           <plugin>
               <groupId>org.springframework.boot</groupId>
               <artifactId>spring-boot-maven-plugin</artifactId>
           </plugin>
       </plugins>
   </build>
   ```

   Isso garante que o JAR gerado seja “fat jar” (`target/controle-de-gastos-0.0.1-SNAPSHOT.jar`).


./mvnw clean package -DskipTests   


### ✅ Conclusão

Parabéns\! Você construiu do zero e implantou uma aplicação web completa com uma stack moderna. Você aprendeu a combinar o poder do Spring Boot no backend com a simplicidade e reatividade do htmx no frontend, criando uma experiência de usuário ágil sem escrever JavaScript complexo.

**Próximos Passos Sugeridos:**

  * Adicionar validação nos campos do formulário.
  * Implementar a funcionalidade de **edição** de um lançamento.
  * Melhorar o CSS e a aparência geral da aplicação.
  * Adicionar um sistema de usuários e autenticação com Spring Security.

---

## Obs 1.
Seu build falhou novamente devido ao erro **`Permission denied`**. Isso significa que o arquivo `mvnw` dentro do seu repositório Git não tem a permissão necessária para ser executado no ambiente de build do Docker.

### A Causa

O Git armazena as permissões dos arquivos. Se o arquivo `mvnw` foi enviado (commitado) a partir de um sistema que não marcou a permissão de execução, o ambiente de build do Docker herda essa restrição e não consegue rodar o script.

-----

### Como Corrigir

Você tem duas maneiras de resolver isso. A primeira é a mais recomendada.

#### Solução 1 (Recomendada): Corrigir a Permissão no Git

Esta é a solução permanente e correta, pois conserta o problema na origem.

1.  **Abra o terminal** na pasta do seu projeto local.
2.  Execute o seguinte comando para dar a permissão de execução ao arquivo no Git:
    ```bash
    git update-index --chmod=+x mvnw
    ```
3.  **Faça o commit e o push** desta alteração de permissão:
    ```bash
    git commit -m "fix: Adiciona permissão de execução ao mvnw"
    git push origin main
    ```

#### Solução 2 (Alternativa Rápida): Corrigir no Dockerfile

Você pode adicionar um comando no seu `Dockerfile` para dar a permissão durante cada build.

1.  **Abra seu `Dockerfile`**.

2.  Adicione a linha `RUN chmod +x mvnw` logo após as linhas `COPY`.

---

## Obs 2.

O seu build no Render está falhando por um erro de codificação de caracteres (**`MalformedInputException`**) dentro do seu arquivo `application.properties`.

Este é o mesmo tipo de erro que encontramos anteriormente, mas agora no outro arquivo de propriedades. Isso acontece quando o Maven, durante o processo de build dentro do Docker, tenta ler o arquivo e encontra um caractere inválido ou uma codificação que ele não espera (o padrão é UTF-8).

-----

### Como Corrigir (3 Passos)

Para resolver isso, você precisa garantir que o arquivo esteja "limpo" e que o Maven esteja configurado para ler em UTF-8.

#### Passo 1: Corrija o Arquivo Localmente

1.  Abra o arquivo **`src/main/resources/application.properties`** na sua IDE.

2.  Apague **todo** o conteúdo dele.

3.  Copie e cole o conteúdo limpo abaixo:

    ```properties
    # Configurações do H2 Database (perfil 'default')
    spring.datasource.url=jdbc:h2:mem:testdb
    spring.datasource.driverClassName=org.h2.Driver
    spring.datasource.username=sa
    spring.datasource.password=
    spring.h2.console.enabled=true
    spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
    spring.jpa.hibernate.ddl-auto=update
    ```

4.  Salve o arquivo. Garanta que sua IDE está salvando os arquivos com a codificação **UTF-8**.

-----

#### Passo 2: Verifique o `pom.xml`

Confirme que a seguinte propriedade ainda está presente no seu arquivo `pom.xml`. Ela é essencial para instruir o Maven a usar a codificação correta.

```xml
<properties>
    <java.version>21</java.version>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
</properties>
```

-----

#### Passo 3: Envie a Correção para o GitHub

Para que o Render use o arquivo corrigido, você precisa enviar a nova versão para o seu repositório.

Execute os seguintes comandos no seu terminal:

```bash
# Adiciona todas as alterações (incluindo o arquivo corrigido)
git add .

# Cria um commit com uma mensagem clara
git commit -m "fix: Corrige codificação do application.properties"

# Envia o commit para o GitHub
git push origin main
```

Após fazer o `push`, o Render irá automaticamente iniciar um novo build com o arquivo corrigido, e o erro de `MalformedInputException` será resolvido.

---

### 🚀 [ricardotecpro.github.io](https://ricardotecpro.github.io/)

