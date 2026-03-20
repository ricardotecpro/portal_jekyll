## 🐐 Git SCM (Sistema de Controle de Versão)

### O que é Git?

**Git** é um sistema de controle de versionamento distribuído. Ele permite que você controle as modificações de um projeto ao longo do tempo por meio de versões chamadas "commits". Cada commit é como uma fotografia do seu projeto em um determinado ponto, registrando o que foi alterado.

Imagine o histórico de um projeto como uma linha do tempo de commits:
`e8aab78 (commit 1) <-- 38k2ane (commit 2) <-- c9g57ef (commit 3) <-- k2f89m3 (commit 4)`

**Benefícios do Git:**

  * **Histórico de Alterações:** Você pode ver quem alterou o quê e quando.
  * **Reversão de Mudanças:** Facilidade para voltar a versões anteriores do projeto caso algo dê errado.
  * **Trabalho em Equipe:** Permite que múltiplos desenvolvedores trabalhem no mesmo projeto de forma organizada.
  * **Ramificações (Branches):** Desenvolvedores podem trabalhar em novas funcionalidades ou correções de forma isolada em "branches" sem afetar a versão principal do projeto.

### 🛠️ Instalação e Configuração do Git

#### Instalação do Git no Computador

Antes de usar o Git, você precisa instalá-lo.
Você pode encontrar os downloads e instruções em: [https://git-scm.com/downloads](https://git-scm.com/downloads)

#### Configurando sua Identificação no Git

Após a instalação, configure seu nome de usuário e email. Essa informação será usada para identificar seus commits.

Abra um terminal ou prompt de comando e execute:

```bash
git config --global user.name "Seu Nome Completo"
git config --global user.email "seu_email_cadastrado_no_github@exemplo.com"
```

Para verificar as configurações:

```bash
git config --list
```

### 🔍 Comandos e Conceitos Fundamentais

#### `git init`

  * **O que faz:** Inicializa um novo repositório Git na pasta atual do seu projeto. Cria uma subpasta oculta chamada `.git` que armazena todas as informações do versionamento.
    ```bash
    git init
    ```

#### `git status`, `git add` e o "Stage" (Área de Preparação)

O Git tem um conceito chamado "área de stage" (ou "index"). É uma área intermediária onde você prepara as alterações que farão parte do próximo commit.

O fluxo é:

1.  **`modified` / `untracked` (Modificado / Não Rastreado):** Seus arquivos no diretório de trabalho. `git status` mostra esses arquivos.
2.  **`staged` (Preparado):** Você usa `git add <arquivo>` para mover as alterações para a área de stage.
3.  **`committed` (Commitado):** Você usa `git commit` para salvar o que está na área de stage como uma nova versão.

<!-- end list -->

  * **`git add .`**: Adiciona todos os arquivos e modificações do diretório de trabalho atual à área de stage.
    ```bash
    git add .
    ```
  * **`git commit -m "Mensagem"`**: Salva as alterações que estão na área de stage como uma nova versão (commit) no seu repositório local.
    ```bash
    git commit -m "Primeiro commit: Estrutura inicial do projeto"
    ```

#### Verificando o Histórico de Versões 📜

  * **`git log`**: Mostra o histórico completo de commits, com detalhes como autor, data e mensagem.
    ```bash
    git log
    ```
  * **`git log --oneline`**: Mostra uma listagem resumida do histórico de commits.
    ```bash
    git log --oneline
    ```

#### `git diff`

  * **O que faz:** Mostra as diferenças entre os arquivos modificados e a última versão commitada ou entre diferentes estados/commits.
      * `git diff`: Mostra as alterações no diretório de trabalho que ainda não foram para o stage.
      * `git diff --staged`: Mostra as alterações que estão no stage.

#### `git checkout`: Navegando entre Versões

  * **O que faz:** Permite modificar temporariamente os arquivos do seu projeto para o estado de um dado commit ou branch.

  * **`HEAD`**: É uma referência especial que aponta para o último commit.

  * **`HEAD~N`**: Refere-se a um commit N versões antes de `HEAD` (`HEAD~1` é o penúltimo).

    ```bash
    # Voltar para o estado de um commit específico
    git checkout <hash_do_commit>

    # Voltar para o penúltimo commit
    git checkout HEAD~1

    # Para voltar para o commit mais recente da sua branch
    git checkout main
    ```

  * **Desfazendo alterações locais:**

    ```bash
    # Descarta todas as alterações nos arquivos monitorados
    git checkout -- .

    # CUIDADO: remove arquivos não rastreados permanentemente!
    git clean -df
    ```

#### Ignorando Arquivos com `.gitignore` 🚫

  * **O que é:** O `.gitignore` é um arquivo de texto onde você lista arquivos e pastas que o Git deve ignorar.
  * **Casos Comuns para Ignorar:**
    1.  **Arquivos Compilados e de Build:** `target/`, `build/`, `dist/`, `*.class`.
    2.  **Dependências:** `node_modules/`.
    3.  **Arquivos de IDEs:** `.vscode/`, `.idea/`.
    4.  **Arquivos de Sistema Operacional:** `.DS_Store`, `Thumbs.db`.
    5.  **Arquivos de Credenciais:** `.env`, senhas, chaves de API.

-----


### 📚 Recursos Adicionais

#### Ferramentas Gerais

  * **Visual Studio Code:** Editor de código recomendado. [Download](https://code.visualstudio.com/download).

#### Focados em Git

  * [Documentação Oficial do Git](https://git-scm.com/doc)
  * [Pro Git Book](https://git-scm.com/book/en/v2) - Um livro completo e gratuito.
  * [Atlassian Git Tutorials](https://www.atlassian.com/git/tutorials)

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)
