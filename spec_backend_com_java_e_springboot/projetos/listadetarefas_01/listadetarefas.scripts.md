---
layout: default
title: 🚀 Guia de Execução: Do VS Code para o Mundo
---

## 🚀 Guia de Execução: Do VS Code para o Mundo
v3.1
### 1\. O Pré-requisito: A "Caixa de Ferramentas" do Java

Para o VS Code se tornar uma ferramenta poderosa para Java e Spring Boot, você precisa de UMA extensão essencial.

1.  Vá até a aba de **Extensões** (ícone de blocos 🧩).
2.  Procure por: **"Extension Pack for Java"** (publicado pela Microsoft).
3.  Clique em **Instalar**.
4.  (Opcional, mas recomendado) Instale também o **"Spring Boot Extension Pack"**.

Isso lhe dará os botões de "Run" sobre os métodos `main` e o painel do Spring Boot.

### 2\. A Melhor Forma de Abrir seu Projeto (Workspace)

Como você tem dois projetos separados (`.api` e `.desktop`), a melhor forma de trabalhar é com um "Workspace" (Área de Trabalho) do VS Code.

1.  Abra o VS Code.
2.  Vá em **"Arquivo" \> "Abrir Pasta..."** e abra a pasta `listadetarefas.api`.
3.  Depois, vá em **"Arquivo" \> "Adicionar Pasta à Área de Trabalho..."**.
4.  Selecione a pasta `listadetarefas.desktop`.
5.  Pronto\! Agora você verá as duas pastas no seu explorador de arquivos, lado a lado.
6.  (Opcional) Salve esta configuração: **"Arquivo" \> "Salvar Área de Trabalho como..."** e dê um nome (ex: `ProjetoTarefas.code-workspace`). Da próxima vez, é só abrir esse arquivo.

### 3\. Parte 1: Executando a API e o App Web (Spring Boot)

Há duas formas fáceis de fazer isso no VS Code:

#### Método A: O Botão "Run" (Mais Simples)

1.  No explorador de arquivos, navegue até o seu projeto `listadetarefas.api`.
2.  Encontre o arquivo da sua aplicação principal:
    `src/main/java/br/com/curso/listadetarefas/Application.java`
3.  Abra o arquivo. Você verá um pequeno link **"Run"** (Executar) aparecer logo acima da linha `public static void main(String[] args)`.
4.  **Clique em "Run"**.

[Imagem de um botão "Run" acima do método main em um arquivo Java no VS Code]

É só isso\! O VS Code vai iniciar seu servidor Spring Boot no painel "Terminal" ou "Debug Console".

#### Método B: O Painel do Spring Boot (Mais Completo)

1.  Na barra lateral do VS Code, procure por um ícone do Spring (um 'S' verde). Se não o vir, clique no ícone do Explorer (pastas) e você verá uma seção chamada "SPRING BOOT".
2.  Expanda essa seção. Você verá seu projeto `listadetarefas.api`.
3.  Clique no **ícone de "Play" (▶)** ao lado do nome do projeto.

[Imagem do painel Spring Boot no VS Code com um projeto e um botão de play ao lado]

-----

### 4\. Parte 2: Acessando o App Web no Navegador

Agora que sua API está rodando, você pode testar o aplicativo web.

1.  **Abra seu navegador** (Chrome, Firefox, etc.).
2.  **Digite a URL:**
    ```
    http://localhost:8080/tarefas
    ```
      * **Por quê?** `localhost:8080` é o endereço padrão do servidor Spring. `/tarefas` é o caminho que você definiu no `@RequestMapping` da sua classe `TarefaWebController.java`.

Você deverá ver sua aplicação web com HTMX funcionando\!

-----

### 5\. Parte 3: Executando o App Desktop (JavaFX)

**IMPORTANTE:** Para o aplicativo desktop funcionar, a **API (Parte 1) deve estar em execução**. O desktop precisa da API para buscar e salvar os dados.

1.  Com a API já rodando, vá até o explorador de arquivos do VS Code.
2.  Navegue até o seu projeto `listadetarefas.desktop`.
3.  Encontre o arquivo que tem o método `main` para o JavaFX. Com base nos seus arquivos, este é o `Launcher.java`:
    `src/main/java/br/com/curso/listadetarefas/desktop/Launcher.java`
4.  Abra o arquivo.
5.  Assim como antes, clique no botão **"Run"** que aparece acima do `public static void main(String[] args)`.

A janela do seu aplicativo JavaFX deverá abrir e, como a API está no ar, ela conseguirá carregar a lista de tarefas.

### ✅ Resumo (A "Cola" Rápida)

1.  **Abra o Workspace** do VS Code que contém os dois projetos.
2.  **Inicie a API:**
      * Abra `listadetarefas.api` \> `.../Application.java`
      * Clique em **Run**.
3.  **Acesse o App Web:**
      * Abra o navegador em `http://localhost:8080/tarefas`
4.  **Inicie o App Desktop:**
      * Abra `listadetarefas.desktop` \> `.../Launcher.java`
      * Clique em **Run**.

---


