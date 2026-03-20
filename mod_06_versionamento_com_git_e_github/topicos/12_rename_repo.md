### 📝 Etapa 1: Renomear o Repositório no GitHub

  * **Siga exatamente os mesmos passos da resposta anterior.** Vá para a página do seu repositório \> `Settings` \> e renomeie o repositório no campo "Repository name". O protocolo (SSH ou HTTPS) não interfere nesta etapa.

-----

### 💻 Etapa 2: Atualizar seu Repositório Local (com SSH)

#### Parte A: Renomear a Pasta Local (Idêntico)

  * Se desejar, renomeie a pasta local para corresponder ao novo nome do repositório.
      * No **Windows**: `ren repo-antigo repo-novo`
      * No **macOS/Linux**: `mv repo-antigo repo-novo`

#### Parte B: Atualizar a Conexão Remota SSH do Git (A Parte que Muda)

Esta é a etapa crucial. Você precisa atualizar a URL remota para o novo formato SSH.

1.  **Entre na pasta do seu projeto:**

    ```bash
    cd repo-novo
    ```

2.  **Verifique o remote atual:** O comando é o mesmo.

    ```bash
    git remote -v
    ```

    A saída mostrará a sua URL SSH antiga:

    ```
    origin  git@github.com:SEU_USUARIO/repo-antigo.git (fetch)
    origin  git@github.com:SEU_USUARIO/repo-antigo.git (push)
    ```

3.  **Atualize a URL do remote para a nova URL SSH:** Aqui está a diferença. O formato da URL muda.

    ```bash
    git remote set-url origin git@github.com:SEU_USUARIO/repo-novo.git
    ```

    **Substitua `SEU_USUARIO` e `repo-novo`** pelos seus dados. Note o formato `git@github.com:` em vez de `https://github.com/`.

4.  **Verifique a alteração:** Confirme que a URL foi atualizada corretamente.

    ```bash
    git remote -v
    ```

    A nova saída deve ser:

    ```
    origin  git@github.com:SEU_USUARIO/repo-novo.git (fetch)
    origin  git@github.com:SEU_USUARIO/repo-novo.git (push)
    ```

E é isso\! O processo manual é robusto e funciona perfeitamente com SSH. A única coisa que você precisa lembrar é de usar o formato correto da URL do Git (`git@github.com:usuario/repo.git`) ao executar o comando `set-url`.


---

### 🚀 [ricardotecpro.github.io](https://ricardotecpro.github.io/)
