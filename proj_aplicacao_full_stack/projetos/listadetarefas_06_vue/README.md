---
layout: default
title: Projeto Lista de Tarefas 06
---

# Projeto Lista de Tarefas 06

## Spring Boot com Vue.js com CORS

Crie um diretório raiz para o projeto e, dentro dele, as subpastas para o backend e o frontend.

```bash
mkdir projeto-listatarefas_spring_vue_cors
cd projeto-listatarefas_spring_vue_cors
mkdir backend
mkdir frontend
```

---

## **Backend: Spring Boot**

#### **1. Geração do Projeto**

1.  Acesse o [Spring Initializr](https://start.spring.io/).
2.  Preencha os metadados do projeto:
    - **Project**: Maven
    - **Language**: Java
    - **Spring Boot**: 3.x.x
    - **Group**: `br.com.tarefas`
    - **Artifact**: `api`
    - **Name**: `api`
    - **Package name**: `br.com.tarefas.api`
    - **Packaging**: Jar
    - **Java**: 21 ou superior
3.  Adicione as dependências essenciais:
    - `Spring Web`: Para criar APIs REST.
    - `Spring Data JPA`: Para persistência de dados.
    - `H2 Database`: Banco de dados em memória para desenvolvimento.
    - `Lombok`: Para reduzir código boilerplate (getters, setters, construtores).
    - `Dev tools`: Hot Reload.
4.  Clique em "GENERATE" e extraia o conteúdo do arquivo `.zip` para a pasta `backend`.

---

**Inicie sua aplicação Spring Boot.**

```bash
mvn spring-boot:run
```

---

#### **2. Código Inicial (Prática a ser corrigida)**

Este é um exemplo comum onde o Controller acessa o Repository diretamente, misturando responsabilidades.

**`src/main/java/br/com/tarefas/api/Tarefa.java`**

```java
package br.com.tarefas.api;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Tarefa {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titulo;
    private boolean concluida;
}
```

**`src/main/java/br/com/tarefas/api/TarefaRepository.java`**

```java
package br.com.tarefas.api;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TarefaRepository extends JpaRepository<Tarefa, Long> {
}
```

**`src/main/java/br/com/tarefas/api/TarefaController.java` (Incorreto)**

```java
package br.com.tarefas.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/tarefas")
public class TarefaController {

    @Autowired
    private TarefaRepository tarefaRepository; // Injeção direta do Repository

    @GetMapping
    public List<Tarefa> listar() {
        return tarefaRepository.findAll(); // Lógica de busca no controller
    }

    @PostMapping
    public Tarefa criar(@RequestBody Tarefa tarefa) {
        return tarefaRepository.save(tarefa); // Lógica de persistência no controller
    }
}
```

---

**Inicie sua aplicação Spring Boot.**

```bash
mvn spring-boot:run
```

---

#### **3. Refatoração para o Padrão MVC**

Separamos as responsabilidades em camadas: `Controller` (apresentação), `Service` (regras de negócio) e `Repository` (acesso a dados).

**a. Camada de Serviço (Service)**

Crie um novo pacote `br.com.tarefas.api.service`.

**`src/main/java/br/com/tarefas/api/service/TarefaService.java`**

```java
package br.com.tarefas.api.service;

import br.com.tarefas.api.Tarefa;
import br.com.tarefas.api.TarefaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service // Anotação que define a classe como um serviço
public class TarefaService {

    @Autowired
    private TarefaRepository tarefaRepository;

    public List<Tarefa> listarTodas() {
        // A lógica de negócio reside aqui.
        // Ex: validações, orquestração de chamadas, etc.
        return tarefaRepository.findAll();
    }

    public Tarefa criarTarefa(Tarefa tarefa) {
        // Validação de entrada
        if (tarefa.getTitulo() == null || tarefa.getTitulo().isBlank()) {
            throw new IllegalArgumentException("O título da tarefa é obrigatório.");
        }
        return tarefaRepository.save(tarefa);
    }

    public void deletarTarefa(Long id) {
        if (!tarefaRepository.existsById(id)) {
            throw new RuntimeException("Tarefa não encontrada com o id: " + id); // Exceção mais específica seria melhor
        }
        tarefaRepository.deleteById(id);
    }
}
```

**b. Controller Refatorado**

O Controller agora delega a lógica para o `TarefaService`.

**`src/main/java/br/com/tarefas/api/controller/TarefaController.java` (Correto)**

```java
package br.com.tarefas.api.controller; // Pacote corrigido

import br.com.tarefas.api.Tarefa;
import br.com.tarefas.api.service.TarefaService; // Importa o serviço
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/tarefas") // Prefixo /api para rotas de dados
public class TarefaController {

    @Autowired
    private TarefaService tarefaService; // Injeta o Serviço, não o Repositório

    @GetMapping
    public ResponseEntity<List<Tarefa>> listar() {
        List<Tarefa> tarefas = tarefaService.listarTodas();
        return ResponseEntity.ok(tarefas);
    }

    @PostMapping
    public ResponseEntity<Tarefa> criar(@RequestBody Tarefa tarefa) {
        Tarefa novaTarefa = tarefaService.criarTarefa(tarefa);
        return new ResponseEntity<>(novaTarefa, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        tarefaService.deletarTarefa(id);
        return ResponseEntity.noContent().build();
    }
}
```

#### **4. Configuração de CORS (Cross-Origin Resource Sharing)**

O frontend (ex: `http://localhost:5173`) tentará acessar o backend (ex: `http://localhost:8080`). O navegador bloqueará essa requisição por padrão por segurança. O CORS informa ao navegador que o acesso é permitido.

**Método 1: Anotação `@CrossOrigin` (Rápido, menos flexível)**

Adicione a anotação diretamente na classe do Controller. Útil para testes rápidos.

```java
// Em TarefaController.java
@CrossOrigin(origins = "http://localhost:5173") // Permite requisições desta origem
@RestController
@RequestMapping("/api/tarefas")
public class TarefaController {
    // ...
}
```

**Método 2: Configuração Global (Recomendado, centralizado e flexível)**

Crie uma classe de configuração.

**`src/main/java/br/com/tarefas/api/config/WebConfig.java`**

```java
package br.com.tarefas.api.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**") // Aplica a política para todas as rotas sob /api/
            .allowedOrigins("http://localhost:5173") // Origem do frontend
            .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Métodos HTTP permitidos
            .allowedHeaders("*") // Permite todos os cabeçalhos
            .allowCredentials(true);
    }
}
```

---

**Inicie sua aplicação Spring Boot.**

```bash
mvn spring-boot:run
```

---

Esta abordagem centraliza a configuração de CORS para toda a aplicação, tornando-a mais fácil de manter.

---

## 🟩 1. Verificar se o Node.js já está instalado

Abra o **terminal** (PowerShell, CMD ou Bash) e execute:

```bash
node -v
npm -v
```

Se ambos mostrarem versões (ex: `v20.x.x` e `10.x.x`), o Node.js já está instalado.

---

## 🧩 2. Instalar Node.js LTS

### 🪟 **Windows**

1. Vá até o site oficial:
   👉 [https://nodejs.org/](https://nodejs.org/)
2. Baixe a versão **LTS (Long Term Support)** — geralmente marcada como “Recommended for most users”.
3. Execute o instalador `.msi` e:

   - Mantenha as opções padrão (incluindo “Add to PATH” ✅).
   - Após concluir, feche e reabra o PowerShell.

4. Teste novamente:

   ```bash
   node -v
   npm -v
   ```

---

### 🐧 **Linux (Ubuntu, etc.)**

Use o **NodeSource**, que mantém pacotes oficiais e atualizados:

```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs
```

Depois, confirme a instalação:

```bash
node -v
npm -v
```

---

### 🍎 **macOS**

Com **Homebrew** instalado, basta rodar:

```bash
brew install node@lts
```

ou, se preferir a versão mais recente LTS:

```bash
brew install node
```

Verifique:

```bash
node -v
npm -v
```

---

## ⚙️ 3. Instalar o Vue CLI (opcional)

Para criar e gerenciar projetos Vue 2 ou Vue 3 com interface de linha de comando:

```bash
npm install -g @vue/cli
```

Verifique:

```bash
vue --version
```

---

## 🚀 4. Criar um novo projeto Vue.js (usando Vite — recomendado)

A forma moderna de criar projetos Vue 3:

---

## **Frontend: Vue.js**

#### **1. Geração do Projeto**

Navegue até a pasta `listatarefas_spring_vue_cors` e execute o comando abaixo no terminal.

```bash
# Na pasta /listatarefas_spring_vue_cors
npm create vue@latest
```

Siga as instruções:

---

Com base na sua tela, siga estas seleções para manter o foco nos objetivos de arquitetura e boas práticas para este projeto específico.

### **Seleção de Recursos**

Use as setas (↑/↓) para navegar, a barra de espaço para selecionar/desmarcar e `Enter` para confirmar.

- `Project name`: **app-tarefas** (Pressione `Enter`)

- `Add TypeScript?`: **No**

  - **Justificativa**: Para um projeto didático focado na arquitetura de serviços e na separação de responsabilidades, usar JavaScript puro remove uma camada de complexidade. O foco permanece na estrutura do código, não no sistema de tipos.

- `Add JSX Support?`: **No**

  - **Justificativa**: A sintaxe de templates do Vue (`<template>...`) é mais idiomática e clara para a maioria dos casos de uso. JSX não é necessário e adicionaria uma etapa de transpilação extra sem um benefício claro para este projeto.

- `Add Vue Router for Single Page Application development?`: **No**

  - **Justificativa**: Nossa aplicação de lista de tarefas é uma única tela. O Vue Router é projetado para gerenciar a navegação entre múltiplas "páginas" ou views, o que é desnecessário aqui.

- `Add Pinia for state management?`: **No**

  - **Justificativa**: Pinia é uma excelente biblioteca para gerenciar o estado global da aplicação. No entanto, para uma lista de tarefas simples, o estado pode ser gerenciado localmente dentro do componente principal (`App.vue`), tornando o uso de uma biblioteca externa um excesso de engenharia (_over-engineering_).

- `Add Vitest for Unit Testing?`: **No**

  - **Justificativa**: Embora testes sejam uma prática essencial, o objetivo desta aula é focar na arquitetura cliente-servidor e na configuração do CORS. A introdução de testes seria um tópico para uma aula separada.

- `Add an End-to-End Testing Solution?`: **No**

  - **Justificativa**: Pelos mesmos motivos da recusa do Vitest, manteremos o escopo focado nos objetivos primários.

- `Add ESLint for code quality?`: **Yes** (Pressione espaço para selecionar)

  - **Justificativa**: **Prática fundamental**. ESLint analisa estaticamente o código para encontrar problemas, bugs em potencial e inconsistências de estilo. Ele garante uma qualidade de código mais alta desde o início.

- `Add Prettier for code formatting?`: **Yes** (Pressione espaço para selecionar)

  - **Justificativa**: **Prática fundamental**. Prettier formata automaticamente seu código para garantir um estilo consistente em todo o projeto. Isso elimina discussões sobre formatação e melhora drasticamente a legibilidade.

---

### **Resumo da Seleção Final**

Sua tela de seleção deve ficar assim antes de pressionar `Enter` para confirmar:

```
◆  Select features to include in your project:
│  ◻ TypeScript
│  ◻ JSX Support
│  ◻ Router (SPA development)
│  ◻ Pinia (state management)
│  ◻ Vitest (unit testing)
│  ◻ End-to-End Testing
│  ◉ ESLint (error prevention)
│  ◉ Prettier (code formatting)
```

---

### **Próximos Passos (Após a criação)**

Após pressionar `Enter`, o terminal exibirá as seguintes instruções. Execute-as em ordem.

1. **Navegue para o diretório do projeto:**

   ```bash
   cd frontend
   ```

2. **Instale as dependências do projeto:**

   > Este comando lê o arquivo `package.json` e baixa todas as bibliotecas necessárias (Vue, ESLint, Prettier, etc.) para a pasta `node_modules`.

   ```bash
   npm install
   ```

2.1 **Formate o código do projeto:**

> Este comando executa o Prettier (ou outra ferramenta configurada) para padronizar a formatação do código.

```bash
npm run format
```

3. **Inicie o servidor de desenvolvimento:**

   > Este comando compila a aplicação e a serve localmente, geralmente em uma porta como `http://localhost:5173`.
   > Ele também observa as alterações nos arquivos e recarrega a página automaticamente.

   ```bash
   npm run dev
   ```

---

Acesse a pasta do projeto e instale as dependências e o `axios` para requisições HTTP.

No **Vue.js**, o `axios` é uma **biblioteca JavaScript** usada para fazer **requisições HTTP** (como GET, POST, PUT, DELETE) entre o **frontend (Vue)** e o **backend (ex: Spring Boot, Node.js, etc.)**.

👉 Em resumo, o `axios` é o **"mensageiro"** que permite que o Vue.js **busque dados de uma API** ou **envie informações para ela**.

---

## 🚀 O que o `axios` faz no Vue.js

| Função                        | Descrição                                                                                     |
| ----------------------------- | --------------------------------------------------------------------------------------------- |
| 🔹 **Requisições HTTP**       | Envia e recebe dados da API (ex: `/api/tarefas`)                                              |
| 🔹 **Integração com Backend** | Permite comunicação entre Vue.js e servidores como Spring Boot                                |
| 🔹 **Suporte a Promises**     | Trabalha de forma assíncrona (`async/await`)                                                  |
| 🔹 **Interceptores**          | Permite adicionar tokens JWT, logs ou tratamento de erros antes de enviar/receber requisições |
| 🔹 **Configuração Global**    | Define URL base, cabeçalhos e tempo limite para todas as requisições                          |

---

```bash
cd frontend
npm install
npm install axios
```

#### **2. Código Inicial (Prática a ser corrigida)**

Lógica de API misturada diretamente com o componente visual.

**`src/App.vue` (Incorreto)**

```vue
<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const tarefas = ref([]);
const novaTarefaTitulo = ref("");

async function carregarTarefas() {
  // Chamada de API hardcoded no componente
  const response = await axios.get("http://localhost:8080/api/tarefas");
  tarefas.value = response.data;
}

async function adicionarTarefa() {
  if (!novaTarefaTitulo.value) return;
  // Lógica de post diretamente no componente
  const response = await axios.post("http://localhost:8080/api/tarefas", {
    titulo: novaTarefaTitulo.value,
    concluida: false,
  });
  tarefas.value.push(response.data);
  novaTarefaTitulo.value = "";
}

onMounted(carregarTarefas);
</script>

<template>
  <h1>Lista de Tarefas</h1>
  <input
    v-model="novaTarefaTitulo"
    @keyup.enter="adicionarTarefa"
    placeholder="Nova tarefa..."
  />
  <ul>
    <li v-for="tarefa in tarefas" :key="tarefa.id">{{ tarefa.titulo }}</li>
  </ul>
</template>
```

#### **3. Refatoração com Camada de Serviço**

Isolamos toda a lógica de comunicação com a API em um módulo dedicado.

**a. Camada de Serviço (API Service)**

Crie a pasta `src/services` e o arquivo `tarefaService.js`.

**`src/services/tarefaService.js`**

```javascript
import axios from "axios";

// Instância do Axios com baseURL centralizada
const apiClient = axios.create({
  baseURL: "http://localhost:8080/api", // URL base da API
  headers: {
    "Content-Type": "application/json",
  },
});

// Exporta funções específicas para cada endpoint
export default {
  getTarefas() {
    return apiClient.get("/tarefas");
  },
  addTarefa(tarefa) {
    return apiClient.post("/tarefas", tarefa);
  },
  deleteTarefa(id) {
    return apiClient.delete(`/tarefas/${id}`);
  },
};
```

**b. Componente Refatorado**

O componente agora importa e usa o serviço, focando apenas na lógica da UI e no estado.

**`src/App.vue` (Correto)**

```vue
<script setup>
import { ref, onMounted } from "vue";
// Importa o serviço de API, não o axios diretamente
import tarefaService from "./services/tarefaService";

const tarefas = ref([]);
const novaTarefaTitulo = ref("");
const erro = ref(null);

async function carregarTarefas() {
  try {
    erro.value = null;
    const response = await tarefaService.getTarefas();
    tarefas.value = response.data;
  } catch (e) {
    erro.value = "Falha ao carregar tarefas.";
    console.error(e);
  }
}

async function adicionarTarefa() {
  if (!novaTarefaTitulo.value.trim()) return;

  const novaTarefa = {
    titulo: novaTarefaTitulo.value,
    concluida: false,
  };

  try {
    erro.value = null;
    const response = await tarefaService.addTarefa(novaTarefa);
    tarefas.value.push(response.data);
    novaTarefaTitulo.value = "";
  } catch (e) {
    erro.value = "Falha ao adicionar tarefa.";
    console.error(e);
  }
}

async function removerTarefa(id) {
  try {
    erro.value = null;
    await tarefaService.deleteTarefa(id);
    tarefas.value = tarefas.value.filter((t) => t.id !== id);
  } catch (e) {
    erro.value = "Falha ao remover tarefa.";
    console.error(e);
  }
}

onMounted(carregarTarefas);
</script>

<template>
  <main>
    <h1>Lista de Tarefas</h1>
    <div class="form-container">
      <input
        v-model="novaTarefaTitulo"
        @keyup.enter="adicionarTarefa"
        placeholder="Adicionar uma nova tarefa"
      />
      <button @click="adicionarTarefa">Adicionar</button>
    </div>

    <p v-if="erro" class="erro">{{ erro }}</p>

    <ul>
      <li v-for="tarefa in tarefas" :key="tarefa.id">
        <span>{{ tarefa.titulo }}</span>
        <button @click="removerTarefa(tarefa.id)" class="btn-remover">X</button>
      </li>
    </ul>
  </main>
</template>

<style scoped>
/* Estilos para melhor visualização */
.erro {
  color: red;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid #ccc;
}
.btn-remover {
  background-color: #ff4d4d;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
```

---

### **Estrutura do Backend ANTES da Refatoração**

Nesta abordagem inicial, todas as classes (Entidade, Repositório e Controlador) estão no mesmo pacote raiz (`br.com.tarefas.api`). Embora funcional para projetos muito pequenos, essa estrutura não escala bem e viola o princípio de separação de conceitos.

```
src
└── main
    └── java
        └── br
            └── com
                └── tarefas
                    └── api
                        ├── Tarefa.java           // (Model)
                        ├── TarefaRepository.java // (Repository - Data)
                        ├── TarefaController.java // (Controller com lógica de negócio)
                        └── ApiApplication.java   // (Classe principal)
```

**Características:**

- **Baixa Coesão:** O pacote `api` contém classes com responsabilidades distintas (acesso a dados, regras de negócio e apresentação).
- **Alto Acoplamento:** O `Controller` está diretamente acoplado ao `Repository`, tornando difícil a reutilização da lógica de negócio e a implementação de testes unitários.
- **Difícil Manutenção:** À medida que o projeto cresce, encontrar e modificar classes torna-se complicado.

---

### **Estrutura do Backend DEPOIS da Refatoração (Padrão MVC)**

A estrutura é reorganizada em pacotes que representam as camadas da arquitetura MVC. Cada pacote tem uma responsabilidade clara e bem definida.

```
src
└── main
    └── java
        └── br
            └── com
                └── tarefas
                    └── api
                        ├── model                  // Pacote para entidades (Model)
                        |   └── Tarefa.java
                        ├── repository             // Pacote para acesso a dados (Data)
                        |   └── TarefaRepository.java
                        ├── service                // Pacote para regras de negócio (Service/Business)
                        |   └── TarefaService.java
                        ├── controller             // Pacote para endpoints HTTP (Controller/Presentation)
                        |   └── TarefaController.java
                        ├── config                 // Pacote para classes de configuração (ex: CORS)
                        |   └── WebConfig.java
                        └── ApiApplication.java    // (Classe principal)
```

**Características:**

- **Alta Coesão:** Classes com responsabilidades similares são agrupadas no mesmo pacote (ex: `controller`, `service`).
- **Baixo Acoplamento:** O `Controller` depende do `Service`, e o `Service` depende do `Repository`. As camadas comunicam-se através de interfaces bem definidas, facilitando a substituição de implementações e os testes.
- **Clareza e Manutenibilidade:** A estrutura é intuitiva. Um novo desenvolvedor pode facilmente localizar onde a lógica de negócio (`service`), os endpoints (`controller`) ou o acesso a dados (`repository`) estão implementados.
- **Escalabilidade:** É simples adicionar novas funcionalidades mantendo a organização. Por exemplo, ao adicionar uma entidade "Usuário", seriam criados `Usuario.java` em `model`, `UsuarioRepository` em `repository`, e assim por diante.

---

### **Configuração do `application.properties`**

O arquivo `application.properties` é o principal local para configurar o comportamento da sua aplicação Spring Boot, como a conexão com o banco de dados, a porta do servidor e outras propriedades essenciais.

**Localização:** `src/main/resources/application.properties`

---

#### **Conteúdo do `application.properties`**

```properties
# ===================================================================
# CONFIGURACAO DO SERVIDOR WEB EMBUTIDO (TOMCAT)
# ===================================================================
# Define a porta em que a aplicacao backend sera executada.
# O padrao e 8080. Usar 8088 evita conflitos com outras aplicacoes.
server.port=8088

# Define um prefixo para todos os endpoints da aplicacao.
# Ajuda a organizar as rotas e a evitar colisoes, especialmente em ambientes com proxy.
# Ex: http://localhost:8088/api/tarefas em vez de http://localhost:8088/tarefas
server.servlet.context-path=/api

# ===================================================================
# CONFIGURACAO DO BANCO DE DADOS (DATASOURCE)
# ===================================================================
# URL de conexao para o banco de dados em memoria H2.
# 'mem' indica que e em memoria (dados sao perdidos ao reiniciar).
# 'tarefasdb' e o nome do banco de dados.
spring.datasource.url=jdbc:h2:mem:tarefasdb

# Driver JDBC para o H2. O Spring Boot geralmente o detecta automaticamente.
spring.datasource.driverClassName=org.h2.Driver

# Nome de usuario para acessar o banco de dados H2.
# 'sa' e o padrao (System Administrator).
spring.datasource.username=sa

# Senha para o banco de dados H2.
# Para desenvolvimento, uma senha em branco e comum.
spring.datasource.password=

# ===================================================================
# CONFIGURACAO DO H2 CONSOLE (INTERFACE WEB PARA O BANCO DE DADOS)
# ===================================================================
# Habilita o console web do H2, uma ferramenta util para visualizar
# e manipular os dados do banco diretamente no navegador.
spring.h2.console.enabled=true

# Define o caminho para acessar o console H2.
# Voce podera acessa-lo em: http://localhost:8088/api/h2-console
spring.h2.console.path=/h2-console

# ===================================================================
# CONFIGURACAO DO JPA (JAVA PERSISTENCE API) E HIBERNATE
# ===================================================================
# Dialeto do banco de dados que o Hibernate (implementacao JPA do Spring) deve usar.
# Isso permite que o Hibernate gere o SQL correto para o H2.
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect

# Acao a ser tomada no schema do banco de dados na inicializacao.
# 'create-drop': Cria o schema (tabelas) quando a aplicacao inicia e o destroi quando a aplicacao para.
# Perfeito para desenvolvimento, pois garante um ambiente limpo a cada reinicio.
# Outras opcoes: 'update', 'validate', 'none'.
spring.jpa.hibernate.ddl-auto=create-drop

# Mostra no console o SQL gerado pelo Hibernate.
# Extremamente util para depuracao e para entender o que esta acontecendo no banco de dados.
spring.jpa.show-sql=true

# Formata o SQL exibido no console para ser mais legivel.
spring.jpa.properties.hibernate.format_sql=true
```

### **Guia Didático: Como usar esta configuração**

1.  **Copie e Cole**: Substitua o conteúdo do seu arquivo `application.properties` pelo código acima.
2.  **Reinicie a Aplicação**: Pare e inicie novamente sua aplicação Spring Boot para que as novas configurações sejam carregadas.
3.  **Verifique a Porta e o Contexto**:
    - Sua aplicação agora está rodando em `http://localhost:8088`.
    - O endpoint para listar tarefas será `http://localhost:8088/api/tarefas` (note o `/api` adicionado).
4.  **Acesse o H2 Console**:
    - Abra seu navegador e acesse a URL: `http://localhost:8088/h2-console`.
    - Na tela de login do H2 Console, **é crucial** que o campo `JDBC URL` seja exatamente o mesmo definido em `spring.datasource.url`: `jdbc:h2:mem:tarefasdb`.
    - Use o usuário `sa` e deixe a senha em branco.
    - Clique em "Connect". Agora você pode visualizar a tabela `TAREFA`, ver os dados que foram inseridos pela classe `DataInitializer` e até mesmo executar queries SQL diretamente.
5.  **Observe o Console da IDE**:
    - Ao iniciar a aplicação, você verá o Hibernate criando as tabelas (`create table...`).
    - Ao fazer uma requisição para `GET /api/tarefas`, o SQL formatado (`select ... from tarefa`) aparecerá no console, mostrando exatamente a consulta que o `show-sql=true` revelou.
    -

---

### **Classe para Popular o Banco de Dados (Seed)**

Para popular o banco de dados com dados iniciais toda vez que a aplicação é iniciada, a abordagem mais comum e didática no Spring Boot é utilizar a interface `CommandLineRunner`. Ela garante que um código seja executado _após_ a inicialização da aplicação e de todos os seus componentes.

#### **1. Localização do Arquivo**

Crie a classe dentro do pacote `config`, pois sua função é configurar um estado inicial para a aplicação.

**Caminho:** `src/main/java/br/com/tarefas/api/config/DataInitializer.java`

#### **2. Código da Classe `DataInitializer`**

```java
package br.com.tarefas.api.config;

import br.com.tarefas.api.model.Tarefa;
import br.com.tarefas.api.repository.TarefaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

/**
 * Componente que executa um código na inicialização da aplicação Spring Boot.
 * Ideal para popular o banco de dados com dados de teste para desenvolvimento.
 */
@Component // Anotação que transforma a classe em um Bean gerenciado pelo Spring.
public class DataInitializer implements CommandLineRunner {

    // Injeção de dependência do repositório de tarefas.
    // O Spring fornecerá uma instância de TarefaRepository para esta classe.
    private final TarefaRepository tarefaRepository;

    @Autowired // Boas práticas recomendam a injeção via construtor.
    public DataInitializer(TarefaRepository tarefaRepository) {
        this.tarefaRepository = tarefaRepository;
    }

    /**
     * Este método é executado automaticamente pelo Spring Boot na inicialização.
     * @param args Argumentos de linha de comando (não utilizados aqui).
     * @throws Exception
     */
    @Override
    public void run(String... args) throws Exception {
        // Limpa o repositório para evitar duplicação a cada reinicialização
        tarefaRepository.deleteAll();

        // Criação de uma lista de tarefas iniciais com temas relevantes ao projeto
        Tarefa t1 = new Tarefa();
        t1.setTitulo("Configurar o backend Spring Boot com MVC");
        t1.setConcluida(true);

        Tarefa t2 = new Tarefa();
        t2.setTitulo("Criar a entidade Tarefa e o Repository");
        t2.setConcluida(true);

        Tarefa t3 = new Tarefa();
        t3.setTitulo("Desenvolver a camada de Serviço e o Controller");
        t3.setConcluida(false);

        Tarefa t4 = new Tarefa();
        t4.setTitulo("Estudar e configurar o CORS para o frontend");
        t4.setConcluida(false);

        Tarefa t5 = new Tarefa();
        t5.setTitulo("Inicializar o projeto Vue.js com a CLI");
        t5.setConcluida(false);

        Tarefa t6 = new Tarefa();
        t6.setTitulo("Criar um serviço no frontend para consumir a API");
        t6.setConcluida(false);

        Tarefa t7 = new Tarefa();
        t7.setTitulo("Desenvolver o componente principal para listar e adicionar tarefas");
        t7.setConcluida(false);

        // Salva todas as tarefas no banco de dados de uma só vez
        // O método saveAll é mais performático do que salvar uma por uma em um loop.
        tarefaRepository.saveAll(Arrays.asList(t1, t2, t3, t4, t5, t6, t7));

        // Feedback no console para o desenvolvedor
        System.out.println("✅ Base de dados inicializada com 7 tarefas.");
    }
}
```

### **Guia Didático: Entendendo o `DataInitializer`**

1.  **Anotação `@Component`**: Esta anotação informa ao Spring que ele deve criar e gerenciar um objeto (um _Bean_) desta classe. Sem isso, a classe seria ignorada pela aplicação.

2.  **Interface `CommandLineRunner`**: Ao implementar esta interface, obrigamos a classe a ter um método `run(String... args)`. O Spring Boot identifica todos os _Beans_ que implementam `CommandLineRunner` e executa seus métodos `run` logo após a aplicação iniciar completamente.

3.  **Injeção de Dependência (`@Autowired`)**: A classe precisa do `TarefaRepository` para salvar dados no banco. Em vez de criá-lo manualmente (`new TarefaRepository()`), declaramos que precisamos dele no construtor. O Spring, que já gerencia o `TarefaRepository`, automaticamente "injeta" ou fornece a instância pronta para uso. Esta é uma prática fundamental chamada **Inversão de Controle (IoC)**.

4.  **Método `run`**:

    - **Lógica Central**: É aqui que a "mágica" acontece. Todo o código dentro deste método será executado na ordem definida.
    - **Criação dos Objetos**: Instanciamos objetos `Tarefa` normais, como faríamos em qualquer código Java.
    - **Definição dos Dados**: Usamos os métodos `set` para popular os objetos com títulos e status relevantes para o projeto do aluno.
    - **Persistência em Lote**: O `tarefaRepository.saveAll()` recebe uma lista de objetos e os salva no banco de dados. É mais eficiente para múltiplas inserções.
    - **Feedback Visual**: A linha `System.out.println` é um feedback simples, mas crucial para o desenvolvedor saber que o processo de seed foi executado com sucesso ao olhar o console da aplicação.

### **Como Executar**

Não é necessário chamar esta classe em nenhum lugar. Apenas reinicie sua aplicação Spring Boot. As anotações e a implementação da interface farão com que o Spring a execute automaticamente. Você verá a mensagem "✅ Base de dados inicializada com 7 tarefas." no log de inicialização e, ao acessar o endpoint `GET /api/tarefas`, os dados já estarão lá.

---

### **Tratamento de erros**

O erro "Falha ao carregar tarefas" é causado por uma incompatibilidade de porta entre a configuração do frontend (Vue) e a do backend (Spring Boot).

Analisando os arquivos, a causa do problema é a seguinte:

- No backend, o arquivo `application.properties` foi configurado para executar o servidor na porta **`8088`**.
- No frontend, o arquivo `tarefaService.js` está tentando fazer requisições para a porta **`8080`**.

O navegador tenta contatar `localhost:8080`, não encontra nenhum serviço respondendo e a requisição falha, acionando a mensagem de erro no bloco `catch` do seu componente Vue.

### **Correção**

Para corrigir, você deve alinhar a `baseURL` no arquivo `tarefaService.js` com a porta definida no seu backend.

**Arquivo a ser modificado:** `frontend/app-tarefas/src/services/tarefaService.js`

**Código Antigo (Incorreto):**

```javascript
//...
const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api', // URL base da API
//...
```

**Código Novo (Correto):**

```javascript
import axios from "axios";

// Instância do Axios com baseURL centralizada
const apiClient = axios.create({
  baseURL: "http://localhost:8088/api", // URL base da API CORRIGIDA
  headers: {
    "Content-Type": "application/json",
  },
});

// Exporta funções específicas para cada endpoint
export default {
  getTarefas() {
    return apiClient.get("/tarefas");
  },
  addTarefa(tarefa) {
    return apiClient.post("/tarefas", tarefa);
  },
  deleteTarefa(id) {
    return apiClient.delete(`/tarefas/${id}`);
  },
};
```

**Próximos Passos:**

1.  Altere a linha da `baseURL` no arquivo `tarefaService.js` de `8080` para `8088`.
2.  Salve o arquivo. O servidor de desenvolvimento do Vue (`npm run dev`) irá recarregar automaticamente.
3.  Atualize a página no seu navegador (`http://localhost:5173`). O erro deve desaparecer e a lista de tarefas, populada pela classe `DataInitializer`, será exibida.

---

### **Diagnóstico: Como Confirmar o Erro de CORS**

Para ter 100% de certeza, siga estes passos no seu navegador (onde a aplicação Vue está aberta):

1.  **Abra as Ferramentas de Desenvolvedor**: Pressione a tecla `F12` (ou `Ctrl+Shift+I` / `Cmd+Opt+I`).

2.  **Vá para a Aba "Console"**: Atualize a página (`F5`). Você verá uma mensagem de erro detalhada em vermelho, parecida com esta:

    > Access to XMLHttpRequest at 'http://localhost:8088/api/tarefas' from origin 'http://localhost:5173' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

3.  **Vá para a Aba "Network" (Rede)**:

    - Atualize a página novamente.
    - Você verá a requisição para `tarefas` aparecer na lista, provavelmente em vermelho.
    - O status da requisição não será `200 OK`, mas sim algo como `(failed)` e o tipo será `cors`.

Essa mensagem confirma que o servidor backend (na porta `8088`) não está dando permissão explícita para que o frontend (na porta `5173`) acesse seus recursos.

---

### **Revisão e Solução**

Vamos garantir que a configuração de CORS no seu backend Spring Boot está correta e sendo carregada. A melhor abordagem é a configuração global, pois ela centraliza a regra em um único lugar.

#### **Plano de Ação Corretivo**

1.  **Verifique a Porta no Frontend (Mais uma vez)**:
    O arquivo `tarefaService.js` que você enviou **ainda mostra a porta 8080**. Este é o primeiro ponto a ser corrigido. Garanta que a `baseURL` esteja correta e que o arquivo foi salvo.

    **Arquivo**: `frontend/app-tarefas/src/services/tarefaService.js`

    ```javascript
    // ...
    const apiClient = axios.create({
      baseURL: "http://localhost:8088/api", // GARANTA QUE ESTÁ 8088
      // ...
    });
    // ...
    ```

2.  **Crie ou Verifique a Classe de Configuração de CORS no Backend**:
    Esta é a solução recomendada e mais robusta. Se você ainda não criou este arquivo, crie-o exatamente como abaixo.

    **Localização**: `backend/src/main/java/br/com/tarefas/api/config/WebConfig.java`

    ```java
    package br.com.tarefas.api.config;

    import org.springframework.context.annotation.Configuration;
    import org.springframework.web.servlet.config.annotation.CorsRegistry;
    import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

    @Configuration
    public class WebConfig implements WebMvcConfigurer {

        @Override
        public void addCorsMappings(CorsRegistry registry) {
            registry.addMapping("/**") // Aplica a política para TODAS as rotas
                .allowedOrigins("http://localhost:5173") // Origem do frontend Vue
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Métodos HTTP permitidos
                .allowedHeaders("*") // Permite todos os cabeçalhos
                .allowCredentials(true);
        }
    }
    ```

    - **Atenção**: O `addMapping("/**")` garante que a regra de CORS se aplique a todos os controllers da sua API, não apenas ao `/api/tarefas`.

3.  **Reinicie o Servidor Backend**:
    **Este passo é crucial.** Pare completamente sua aplicação Spring Boot e inicie-a novamente. As classes de `@Configuration` só são lidas durante a inicialização.

4.  **Limpe o Cache e Teste Novamente**:

    - Volte para a página do frontend no navegador.
    - Faça uma atualização forçada para limpar o cache (geralmente `Ctrl+F5` ou `Cmd+Shift+R`).
    - O erro deve desaparecer e as tarefas devem ser carregadas.

---


Observe na sua própria imagem a linha **`Request URL`**:

- **`Request URL: http://localhost:8080/api/tarefas`**

Isso mostra inequivocamente que a requisição está sendo enviada para a porta `8080`.

No entanto, o seu backend Spring Boot está configurado para rodar na porta **`8088`**. A requisição falha porque não há nenhum servidor escutando na porta `8080`, e a chamada nem chega a ser recebida pelo backend para que a política de CORS seja avaliada.

### **Solução Definitiva**

A correção continua a mesma: você **precisa** alterar o arquivo de serviço no frontend.

1.  **Abra o arquivo:** `frontend/services/tarefaService.js`.
2.  **Localize a linha** `baseURL`.
3.  **Altere a porta** de `8080` para `8088`.
4.  **Salve o arquivo**.

**Código a ser corrigido em `tarefaService.js`:**

```javascript
import axios from "axios";

const apiClient = axios.create({
  //           👇 AQUI ESTÁ O ERRO
  baseURL: "http://localhost:8080/api",
  // ...
});
```

**Código Corrigido:**

```javascript
import axios from "axios";

const apiClient = axios.create({
  //           👇 CORREÇÃO APLICADA
  baseURL: "http://localhost:8088/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// O resto do arquivo permanece igual...
export default {
  getTarefas() {
    return apiClient.get("/tarefas");
  },
  addTarefa(tarefa) {
    return apiClient.post("/tarefas", tarefa);
  },
  deleteTarefa(id) {
    return apiClient.delete(`/tarefas/${id}`);
  },
};
```

**Passos Finais:**

1.  Após salvar a alteração no `tarefaService.js`, observe o terminal onde `npm run dev` está rodando para garantir que ele recompilou o projeto sem erros.
2.  Volte ao navegador e atualize a página (`F5`). A requisição será feita para a porta correta (`8088`) e a aplicação deverá funcionar.

---

Com base nas imagens e logs, o problema é um erro **`404 Not Found`** causado por uma duplicação no caminho (path) da URL da sua API.

O seu backend está esperando uma URL e o seu frontend está chamando outra.

---

### **Diagnóstico 👨‍🏫**

1.  **Configuração do Backend:** No seu `application.properties`, você configurou `server.servlet.context-path=/api`. Isso significa que o Spring Boot **automaticamente adiciona o prefixo `/api`** a todos os endpoints da sua aplicação.

2.  **Mapeamento do Controller:** No seu `TarefaController.java`, o endpoint está mapeado como `@RequestMapping("/api/tarefas")`.

3.  **O Problema (A Duplicação):** O Spring Boot combina os dois caminhos. O `context-path` e o `@RequestMapping`.

    - Caminho do Servidor: `/api`
    - Caminho do Controller: `/api/tarefas`
    - **URL Final no Servidor:** `/api/api/tarefas`

4.  **Requisição do Frontend:** Seu frontend está configurado para chamar `http://localhost:8080/api/tarefas`, como mostra a imagem.

A requisição do frontend em `/api/tarefas` não encontra o endpoint, pois o servidor o registrou em `/api/api/tarefas`. Por isso, o servidor responde corretamente com **`404 Not Found`**.

---

### **Soluções ✅**

Você tem duas maneiras de corrigir isso. A primeira é a mais recomendada por ser mais limpa e evitar redundância.

#### **Solução 1 (Recomendada): Corrigir o Controller no Backend**

Altere o mapeamento do seu controller para não repetir o `/api`, já que ele é gerenciado globalmente pelo `context-path`.

1.  **Abra o arquivo:** `TarefaController.java`

2.  **Altere a anotação `@RequestMapping`:**

    **Código Antigo:**

    ```java
    // ...
    @RestController
    @RequestMapping("/api/tarefas") // <-- Caminho redundante
    public class TarefaController {
        // ...
    }
    ```

    **Código Novo (Correto):**

    ```java
    // ...
    @RestController
    @RequestMapping("/tarefas") // <-- Correção: Removido o "/api"
    public class TarefaController {
        // ...
    }
    ```

3.  **Reinicie sua aplicação Spring Boot.** As alterações no backend só têm efeito após a reinicialização.

---

#### **Solução 2 (Alternativa): Remover o `context-path` do Backend**

Se você preferir que cada controller defina seu caminho completo, você pode remover a configuração global.

1.  **Abra o arquivo:** `application.properties`

2.  **Comente ou remova a linha:**

    **Código Antigo:**

    ```properties
    # ...
    server.servlet.context-path=/api
    # ...
    ```

    **Código Novo (Correto):**

    ```properties
    # ...
    # server.servlet.context-path=/api
    # ...
    ```

3.  **Reinicie sua aplicação Spring Boot.**

```bash
mvn spring-boot:run
```

---

Agora que a comunicação está estabelecida, vamos implementar o CRUD completo e modernizar o visual.

## **Backend: Completando o CRUD**

Vamos adicionar as funcionalidades de **Update** (Atualizar). Teremos duas formas de atualização:

1.  **`PUT`**: Para marcar uma tarefa como concluída/não concluída.
2.  **`PATCH`**: Para editar o título de uma tarefa.

#### **1. Camada de Serviço (`TarefaService.java`)**

Adicione os métodos para atualizar a tarefa.

**Arquivo:** `src/main/java/br/com/tarefas/api/service/TarefaService.java`

```java
package br.com.tarefas.api.service;

import br.com.tarefas.api.model.Tarefa;
import br.com.tarefas.api.repository.TarefaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional; // Importar Optional

@Service
public class TarefaService {

    @Autowired
    private TarefaRepository tarefaRepository;

    public List<Tarefa> listarTodas() {
        return tarefaRepository.findAll();
    }

    public Tarefa criarTarefa(Tarefa tarefa) {
        if (tarefa.getTitulo() == null || tarefa.getTitulo().isBlank()) {
            throw new IllegalArgumentException("O título da tarefa é obrigatório.");
        }
        return tarefaRepository.save(tarefa);
    }

    // --- NOVOS MÉTODOS ADICIONADOS ---

    /**
     * Atualiza o status de conclusão de uma tarefa.
     * @param id O ID da tarefa a ser atualizada.
     * @param concluida O novo status de conclusão.
     * @return A tarefa atualizada.
     */
    public Tarefa atualizarStatus(Long id, boolean concluida) {
        // orElseThrow lança uma exceção se a tarefa não for encontrada.
        Tarefa tarefaExistente = tarefaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Tarefa não encontrada com o id: " + id));

        tarefaExistente.setConcluida(concluida);
        return tarefaRepository.save(tarefaExistente);
    }

    /**
     * Atualiza o título de uma tarefa.
     * @param id O ID da tarefa a ser atualizada.
     * @param titulo O novo título.
     * @return A tarefa atualizada.
     */
    public Tarefa atualizarTitulo(Long id, String titulo) {
        if (titulo == null || titulo.isBlank()) {
            throw new IllegalArgumentException("O novo título não pode ser vazio.");
        }

        Tarefa tarefaExistente = tarefaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Tarefa não encontrada com o id: " + id));

        tarefaExistente.setTitulo(titulo);
        return tarefaRepository.save(tarefaExistente);
    }

    public void deletarTarefa(Long id) {
        if (!tarefaRepository.existsById(id)) {
            throw new RuntimeException("Tarefa não encontrada com o id: " + id);
        }
        tarefaRepository.deleteById(id);
    }
}
```

#### **2. Camada de Controller (`TarefaController.java`)**

Adicione os novos endpoints (`PUT` e `PATCH`).

**Arquivo:** `src/main/java/br/com/tarefas/api/controller/TarefaController.java`

```java
package br.com.tarefas.api.controller;

import br.com.tarefas.api.model.Tarefa;
import br.com.tarefas.api.service.TarefaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map; // Importar Map

@RestController
@RequestMapping("/tarefas") // Caminho corrigido para não duplicar /api
public class TarefaController {

    @Autowired
    private TarefaService tarefaService;

    @GetMapping
    public ResponseEntity<List<Tarefa>> listar() {
        List<Tarefa> tarefas = tarefaService.listarTodas();
        return ResponseEntity.ok(tarefas);
    }

    @PostMapping
    public ResponseEntity<Tarefa> criar(@RequestBody Tarefa tarefa) {
        Tarefa novaTarefa = tarefaService.criarTarefa(tarefa);
        return new ResponseEntity<>(novaTarefa, HttpStatus.CREATED);
    }

    // --- NOVOS ENDPOINTS ADICIONADOS ---

    @PutMapping("/{id}/status")
    public ResponseEntity<Tarefa> atualizarStatus(@PathVariable Long id, @RequestBody Map<String, Boolean> status) {
        // @RequestBody Map... permite receber um JSON simples como {"concluida": true}
        Tarefa tarefaAtualizada = tarefaService.atualizarStatus(id, status.get("concluida"));
        return ResponseEntity.ok(tarefaAtualizada);
    }

    @PatchMapping("/{id}/titulo")
    public ResponseEntity<Tarefa> atualizarTitulo(@PathVariable Long id, @RequestBody Map<String, String> payload) {
        Tarefa tarefaAtualizada = tarefaService.atualizarTitulo(id, payload.get("titulo"));
        return ResponseEntity.ok(tarefaAtualizada);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        tarefaService.deletarTarefa(id);
        return ResponseEntity.noContent().build();
    }
}

```

**Importante:** Reinicie seu servidor backend para aplicar as mudanças.

---

### **Frontend: CRUD e Novo Visual**

#### **1. Atualizando o Serviço (`tarefaService.js`)**

Adicione as funções para se comunicar com os novos endpoints.

**Arquivo:** `frontend/app-tarefas/src/services/tarefaService.js`

```javascript
import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8088/api", // Verifique a porta e o /api
  headers: {
    "Content-Type": "application/json",
  },
});

export default {
  getTarefas() {
    return apiClient.get("/tarefas");
  },
  addTarefa(tarefa) {
    return apiClient.post("/tarefas", tarefa);
  },
  deleteTarefa(id) {
    return apiClient.delete(`/tarefas/${id}`);
  },
  // --- NOVAS FUNÇÕES ADICIONADAS ---
  updateStatusTarefa(id, concluida) {
    return apiClient.put(`/tarefas/${id}/status`, { concluida });
  },
  updateTituloTarefa(id, titulo) {
    return apiClient.patch(`/tarefas/${id}/titulo`, { titulo });
  },
};
```

#### **2. Componente Principal (`App.vue`)**

Esta é a maior mudança. Adicionaremos reatividade, métodos para edição e um `<style>` completamente novo.

**Arquivo:** `frontend/src/App.vue`

```vue
<script setup>
import { ref, onMounted, nextTick } from "vue";
import tarefaService from "./services/tarefaService";

const tarefas = ref([]);
const novaTarefaTitulo = ref("");
const erro = ref(null);
const tarefaEditandoId = ref(null); // ID da tarefa sendo editada
const tituloEditando = ref(""); // Título temporário durante a edição

// Funções de API
async function carregarTarefas() {
  try {
    erro.value = null;
    const response = await tarefaService.getTarefas();
    // Ordena as tarefas: pendentes primeiro, depois por ID
    tarefas.value = response.data.sort(
      (a, b) => a.concluida - b.concluida || a.id - b.id
    );
  } catch (e) {
    erro.value = "Falha ao carregar tarefas.";
    console.error(e);
  }
}

async function adicionarTarefa() {
  if (!novaTarefaTitulo.value.trim()) return;
  const novaTarefa = { titulo: novaTarefaTitulo.value, concluida: false };
  try {
    erro.value = null;
    const response = await tarefaService.addTarefa(novaTarefa);
    tarefas.value.push(response.data);
    novaTarefaTitulo.value = "";
    // Recarrega para manter a ordem
    await carregarTarefas();
  } catch (e) {
    erro.value = "Falha ao adicionar tarefa.";
    console.error(e);
  }
}

async function removerTarefa(id) {
  try {
    erro.value = null;
    await tarefaService.deleteTarefa(id);
    tarefas.value = tarefas.value.filter((t) => t.id !== id);
  } catch (e) {
    erro.value = "Falha ao remover tarefa.";
    console.error(e);
  }
}

// --- NOVAS FUNÇÕES ---
async function alternarStatus(tarefa) {
  try {
    erro.value = null;
    const novoStatus = !tarefa.concluida;
    const response = await tarefaService.updateStatusTarefa(
      tarefa.id,
      novoStatus
    );
    // Atualiza o objeto local para reatividade instantânea
    tarefa.concluida = response.data.concluida;
    // Recarrega para reordenar a lista
    await carregarTarefas();
  } catch (e) {
    erro.value = "Falha ao atualizar status.";
    console.error(e);
  }
}

function ativarEdicao(tarefa) {
  tarefaEditandoId.value = tarefa.id;
  tituloEditando.value = tarefa.titulo;
  // nextTick garante que o DOM foi atualizado antes de focar no input
  nextTick(() => {
    document.querySelector(`#input-edit-${tarefa.id}`).focus();
  });
}

async function salvarEdicao(tarefa) {
  if (
    !tituloEditando.value.trim() ||
    tituloEditando.value.trim() === tarefa.titulo
  ) {
    cancelarEdicao();
    return;
  }
  try {
    erro.value = null;
    const response = await tarefaService.updateTituloTarefa(
      tarefa.id,
      tituloEditando.value
    );
    tarefa.titulo = response.data.titulo;
    cancelarEdicao();
  } catch (e) {
    erro.value = "Falha ao salvar edição.";
    console.error(e);
  }
}

function cancelarEdicao() {
  tarefaEditandoId.value = null;
  tituloEditando.value = "";
}

// Carrega as tarefas quando o componente é montado
onMounted(carregarTarefas);
</script>

<template>
  <div class="container">
    <header>
      <h1>Lista de Tarefas</h1>
      <p>Aplicação Full-Stack com Vue e Spring Boot</p>
    </header>
    <main>
      <div class="form-container">
        <input
          v-model="novaTarefaTitulo"
          @keyup.enter="adicionarTarefa"
          placeholder="O que precisa ser feito?"
        />
        <button @click="adicionarTarefa">+</button>
      </div>

      <p v-if="erro" class="erro">{{ erro }}</p>

      <ul class="tarefa-lista">
        <li
          v-for="tarefa in tarefas"
          :key="tarefa.id"
          :class="{ concluida: tarefa.concluida }"
        >
          <div class="info-tarefa">
            <input
              type="checkbox"
              :checked="tarefa.concluida"
              @change="alternarStatus(tarefa)"
            />
            <span
              v-if="tarefaEditandoId !== tarefa.id"
              @dblclick="ativarEdicao(tarefa)"
            >
              {{ tarefa.titulo }}
            </span>
            <input
              v-else
              :id="`input-edit-${tarefa.id}`"
              type="text"
              v-model="tituloEditando"
              @blur="salvarEdicao(tarefa)"
              @keyup.enter="salvarEdicao(tarefa)"
              @keyup.esc="cancelarEdicao"
              class="input-edicao"
            />
          </div>
          <div class="acoes">
            <button @click="removerTarefa(tarefa.id)" class="btn-remover">
              ×
            </button>
          </div>
        </li>
      </ul>
    </main>
  </div>
</template>

<style>
/* Reset Básico e Estilo Global */
:root {
  --cor-fundo: #1a1a1a;
  --cor-surface: #242424;
  --cor-primaria: #646cff;
  --cor-texto: rgba(255, 255, 255, 0.87);
  --cor-borda: #424242;
  --cor-perigo: #ff6b6b;
}

body {
  font-family: "Inter", system-ui, Avenir, Helvetica, Arial, sans-serif;
  background-color: var(--cor-fundo);
  color: var(--cor-texto);
  margin: 0;
  display: flex;
  justify-content: center;
  padding-top: 40px;
}

/* Container Principal */
.container {
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  padding: 0 20px;
}

header {
  text-align: center;
  margin-bottom: 40px;
}
header h1 {
  font-size: 3.2em;
  margin: 0;
  color: var(--cor-primaria);
}
header p {
  color: #a0a0a0;
}

/* Formulário de Nova Tarefa */
.form-container {
  display: flex;
  margin-bottom: 20px;
  gap: 10px;
}
.form-container input {
  flex-grow: 1;
  padding: 12px 15px;
  font-size: 1em;
  background-color: var(--cor-surface);
  border: 1px solid var(--cor-borda);
  border-radius: 8px;
  color: var(--cor-texto);
  outline: none;
  transition: border-color 0.2s;
}
.form-container input:focus {
  border-color: var(--cor-primaria);
}
.form-container button {
  padding: 0;
  width: 48px;
  height: 48px;
  font-size: 2em;
  border-radius: 8px;
  border: 1px solid transparent;
  background-color: var(--cor-primaria);
  color: white;
  cursor: pointer;
  transition: background-color 0.2s;
  line-height: 48px;
}
.form-container button:hover {
  background-color: #535bf2;
}

/* Mensagem de Erro */
.erro {
  color: var(--cor-perigo);
  text-align: center;
  margin-bottom: 20px;
}

/* Lista de Tarefas */
.tarefa-lista {
  list-style: none;
  padding: 0;
  margin: 0;
}
.tarefa-lista li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: var(--cor-surface);
  border-bottom: 1px solid var(--cor-borda);
  transition: background-color 0.2s;
}
.tarefa-lista li:first-child {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.tarefa-lista li:last-child {
  border-bottom: none;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

.info-tarefa {
  display: flex;
  align-items: center;
  gap: 15px;
  flex-grow: 1;
}

/* Checkbox customizado */
.info-tarefa input[type="checkbox"] {
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid var(--cor-borda);
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
}
.info-tarefa input[type="checkbox"]:hover {
  border-color: var(--cor-primaria);
}
.info-tarefa input[type="checkbox"]:checked {
  background-color: var(--cor-primaria);
  border-color: var(--cor-primaria);
}
.info-tarefa input[type="checkbox"]:checked::after {
  content: "✔";
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 12px;
}

.info-tarefa span {
  cursor: pointer;
}

/* Estilo da tarefa concluída */
li.concluida .info-tarefa span {
  text-decoration: line-through;
  color: #a0a0a0;
}

/* Input de Edição */
.input-edicao {
  font-size: 1em;
  padding: 5px;
  background-color: var(--cor-fundo);
  border: 1px solid var(--cor-primaria);
  border-radius: 4px;
  color: var(--cor-texto);
  flex-grow: 1;
}

/* Botão de Remover */
.btn-remover {
  background: none;
  border: none;
  color: #a0a0a0;
  font-size: 1.5em;
  cursor: pointer;
  transition: color 0.2s;
  visibility: hidden;
  opacity: 0;
}
li:hover .btn-remover {
  visibility: visible;
  opacity: 1;
}
.btn-remover:hover {
  color: var(--cor-perigo);
}
</style>
```

---

