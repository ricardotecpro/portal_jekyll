---
layout: default
title: 🐱 GitHub (Plataforma de Hospedagem e Colaboração)
---

## 🐱 GitHub (Plataforma de Hospedagem e Colaboração)

### O que é Github?

**Github** é uma plataforma online que hospeda repositórios Git remotos. Ele adiciona uma camada de colaboração e gerenciamento sobre o Git.

  * **Interface Gráfica Web:** Oferece uma interface amigável para visualizar e gerenciar seus repositórios.
  * **Plataforma Social:** Funciona como uma rede social para desenvolvedores e é uma excelente vitrine para seu portfólio.
  * **Hospedagem de Projetos:** É o maior serviço do mundo para hospedar projetos de código aberto.

### Repositório Remoto e Local

1.  **Servidor (Repositório Remoto):** Uma cópia "oficial" do repositório fica salva em um servidor online (como o Github).
2.  **Seu Computador (Repositório Local):** Cada pessoa faz uma cópia ("clone") desse repositório para seu próprio computador.

### Configurar Chave SSH para o Github 🔑

**SSH (Secure Shell)** é o método preferencial e mais seguro para se conectar ao Github, substituindo a antiga autenticação por senha.

**Passos gerais:**

1.  **Gerar uma chave SSH no seu computador:**
    ```bash
    ssh-keygen -t ed25519 -C "seu_email_cadastrado_no_github@exemplo.com"
    ```
2.  **Cadastrar essa chave no seu Github:**
      * Copie o conteúdo da sua chave pública (arquivo `id_ed25519.pub`).
      * No Github, vá em *Settings* -\> *SSH and GPG keys* -\> *New SSH key* e cole sua chave.

### 🔄 Fluxo de Trabalho Básico com o GitHub

#### Passo a passo: Enviando um Projeto Local para o Github pela Primeira Vez

1.  **`git init`**, **`git add .`**, **`git commit -m "..."`**: Prepare seu projeto localmente (como visto na seção Git).
2.  **`git branch -M main`**: Renomeia a branch principal para `main`.
3.  **`git remote add origin git@github.com:seu_usuario/seu_repo.git`**: Conecta seu repositório local a um repositório remoto (`origin`) que você criou previamente no Github.
4.  **`git push -u origin main`**: Envia seus commits locais para o Github. A flag `-u` cria uma ligação para que nos próximos envios você possa usar apenas `git push`.

#### Passo a passo: Salvando uma Nova Versão (Commit e Push)

Após o primeiro envio, o fluxo para atualizar o repositório remoto é:

1.  Modifique seus arquivos.
2.  `git add .`
3.  `git commit -m "Adiciona nova funcionalidade"`
4.  `git push`

#### Clonando um Projeto Existente do Github

Se o projeto já existe no Github e você quer baixá-lo:

1.  **`git clone git@github.com:usuario_do_dono/nome_do_repositorio.git`**: Baixa ("clona") um repositório remoto para o seu computador.
2.  Entre na pasta criada: `cd nome_do_repositorio`.
3.  Faça suas modificações, `add`, `commit` e `push`.


#### Focados em GitHub

  * [Documentação do Github](https://docs.github.com/)
  * [GitHub Guides](https://guides.github.com/)
  * [GitHub Learning Lab](https://lab.github.com/)
  * [Git Cheat Sheet (da GitHub Education)](https://education.github.com/git-cheat-sheet-education.pdf)
  * [GitHub Desktop](https://desktop.github.com/) - Aplicação gráfica para gerenciar repositórios.
  * [GitKraken](https://www.gitkraken.com/) - Outra ferramenta gráfica poderosa.

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)

