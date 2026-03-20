# 🌳 Branches e Trabalho em Equipe com Git e GitHub

Este guia aborda o uso de branches no Git para desenvolvimento colaborativo e gerenciamento de projetos, além de fluxos de trabalho comuns utilizando o GitHub.

## 🤝 Convidando Colaboradores para o Projeto no GitHub

Projetos públicos no GitHub podem ser lidos, baixados, clonados ou "forkados" por qualquer pessoa. Um **fork** é uma cópia pessoal de um repositório que fica na sua conta do GitHub, permitindo que você experimente livremente sem afetar o projeto original.

Por padrão, outros usuários não têm **permissão de escrita** (ou seja, não podem fazer `push` de alterações diretamente) no seu repositório remoto.

**Como liberar permissão de escrita a um repositório remoto?**
Para permitir que outros usuários enviem alterações diretamente para o seu repositório:
1.  No GitHub, navegue até o seu repositório.
2.  Vá em `Settings` (Configurações).
3.  No menu lateral, clique em `Collaborators` (Colaboradores).
4.  Adicione os usuários desejados pelo nome de usuário, email ou nome completo.

## 🌿 Introdução aos Branches

**Branches** (ramificações) são linhas de desenvolvimento independentes dentro de um repositório Git. Eles permitem que você trabalhe em diferentes funcionalidades, correções de bugs ou experimentos isoladamente, sem afetar a linha principal de desenvolvimento (comumente chamada de `main` ou `master`).

*Imagine os branches como universos paralelos do seu projeto. Você pode criar um novo branch (`ft-login`) a partir do `main`, trabalhar nele e, quando estiver pronto, mesclar essas alterações de volta ao `main`.*

### 🔧 Manipulando Branches Localmente

Aqui estão os comandos básicos para gerenciar branches no seu repositório local:

-   **Listar branches:**
    Mostra todos os branches locais. O branch ativo (aquele em que você está trabalhando) será destacado, geralmente com um asterisco (`*`) e em cor diferente.
    ```bash
    git branch
    ```

-   **Criar um novo branch:**
    Cria um novo branch a partir do commit atual do branch em que você está, mas **não** muda para o novo branch.
    ```bash
    git branch nome-do-branch
    ```
    Exemplo:
    ```bash
    git branch ft-nova-funcionalidade
    ```

-   **Mudar para um branch (checkout):**
    Para começar a trabalhar em um branch existente ou recém-criado, você precisa "fazer checkout" dele.
    ```bash
    git checkout nome-do-branch
    ```
    Exemplo:
    ```bash
    git checkout ft-nova-funcionalidade
    ```
    **Dica:** Você pode criar e mudar para um novo branch em um único comando:
    ```bash
    git checkout -b nome-do-novo-branch
    # Exemplo: git checkout -b ft-correcao-urgente
    ```
    A partir do Git 2.23+, você também pode usar o comando `git switch`:
    ```bash
    # Para criar e mudar
    git switch -c nome-do-novo-branch
    # Para mudar para um branch existente
    git switch nome-do-branch
    ```

-   **Deletar um branch (ação destrutiva):**
    Deleta o branch especificado. Por segurança, o Git não permite deletar um branch que contenha trabalho (commits) que ainda não foi mesclado (merged) em outro branch.
    ```bash
    git branch -d nome-do-branch-a-deletar
    ```
    Exemplo:
    ```bash
    git branch -d ft-funcionalidade-concluida
    ```
    Você não pode deletar o branch em que está atualmente. Mude para outro branch primeiro.

-   **Forçar a deleção de um branch (ação destrutiva):**
    Deleta o branch especificado **mesmo que ele não tenha sido mesclado**. Use com extrema cautela, pois você pode perder trabalho permanentemente.
    ```bash
    git branch -D nome-do-branch-a-deletar-com-forca
    ```
    Exemplo:
    ```bash
    git branch -D ft-experimento-falho
    ```

## ⏩ Merge: Integrando Alterações entre Branches

A operação de `merge` (mesclagem) serve para integrar o histórico de commits de um branch de origem (por exemplo, `ft-login`) em um branch de destino (por exemplo, `main`).

**Importante:** O comando `merge` deve ser executado **a partir do branch de DESTINO**. Ou seja, se você quer trazer as alterações de `ft-login` para `main`, primeiro você deve estar no branch `main`.

### Merge Fast-Forward

Um merge "fast-forward" (avanço rápido) é o tipo mais simples de merge. Ele ocorre quando o branch de destino (`main`) não teve nenhum commit novo desde que o branch de feature (`ft-login`) foi criado a partir dele. Nesse caso, o Git simplesmente move o ponteiro do `main` para frente, para apontar para o mesmo commit que o `ft-login`. Não é criado um novo commit de merge.

**Passo a passo (exemplo de merge fast-forward):**

1.  Suponha que `ft-login` foi criado a partir de `main` e teve alguns commits. `main` não teve novos commits.
2.  Mude para o branch de destino:
    ```bash
    # (Estando em qualquer branch)
    git checkout main
    ```
3.  Execute o merge com o branch de origem:
    ```bash
    # (Estando no branch main)
    git merge ft-login
    ```
    O `main` agora aponta para o último commit de `ft-login`.

**Relação com `git pull`:**
O comando `git pull` é uma conveniência que combina dois outros comandos:
1.  `git fetch`: Baixa as alterações do repositório remoto (mas não as aplica ao seu diretório de trabalho local).
2.  `git merge`: Mescla o branch remoto correspondente (por exemplo, `origin/main`) no seu branch local atual (por exemplo, `main`).

**Procedimento Recomendado: Atualizar Branch de Feature ANTES do Merge Final**

Uma prática comum e recomendada é atualizar seu branch de feature com as últimas alterações do `main` *antes* de propor a integração final do feature branch no `main` (geralmente via Pull Request). Isso ajuda a resolver conflitos localmente no branch de feature.

Fluxo:
1.  No seu branch de feature (ex: `ft-login`), traga as últimas alterações do `main` remoto:
    ```bash
    # Estando no branch ft-login
    git checkout ft-login

    # Garanta que seu main local está atualizado (opcional, mas bom)
    # git checkout main
    # git pull origin main
    # git checkout ft-login

    # Mescle as alterações do main no seu branch de feature
    git merge main
    ```
2.  Resolva quaisquer conflitos que surjam.
3.  Continue seu trabalho, faça commits.
4.  Quando a feature estiver pronta, aí sim ela é mesclada no `main` (via `git merge main` localmente, ou, mais comumente, via Pull Request no GitHub).

## 🔄 Fluxo de Trabalho: Atualizando e Enviando Features com Repositórios Remotos

Ao trabalhar em equipe ou com repositórios remotos (como no GitHub), o fluxo se expande:

1.  **Sincronize seu `main` local e mescle-o no seu branch de feature:**
    * Garanta que seu branch `main` local está atualizado com o `main` do repositório remoto (`origin`):
        ```bash
        # Mude para o branch main
        git checkout main

        # Baixe e mescle as alterações do main remoto
        git pull origin main
        ```
    * Volte para o seu branch de feature e mescle o `main` nele:
        ```bash
        # Mude para o seu branch de feature (ex: ft-login)
        git checkout ft-login

        # Mescle o branch main no seu branch de feature
        git merge main
        ```
        Resolva quaisquer conflitos, se houver.

2.  **Envie (push) seu branch de feature para o repositório remoto:**
    Após commitar suas alterações locais no branch de feature, envie-o para o repositório remoto. A flag `-u` (ou `--set-upstream`) é usada na primeira vez para vincular seu branch local ao branch remoto com o mesmo nome.
    ```bash
    # Estando no seu branch de feature (ex: ft-login)
    git push -u origin ft-login
    ```
    Para pushes subsequentes no mesmo branch, `git push` geralmente é suficiente.

3.  **Abra um Pull Request (PR) no GitHub:**
    * No GitHub, vá para a página do repositório.
    * O GitHub frequentemente detecta branches recém-enviados e oferece um botão para "Compare & pull request".
    * Crie o Pull Request, escolhendo o branch de base (ex: `main`) e o branch de comparação (ex: `ft-login`). Descreva suas alterações.
    * O PR inicia um processo de revisão, discussão e testes.

4.  **Processo de Homologação e Aprovação:**
    * O PR é revisado pela equipe. Testes automatizados (CI/CD) podem rodar.
    * Após aprovação, o PR é mesclado ao branch `main` no repositório remoto.

5.  **Opcional: Delete o Branch de Feature:**
    * No GitHub, após o merge do PR, geralmente há uma opção para deletar o branch de feature remoto.
    * Delete também o branch localmente:
        ```bash
        # Mude para o main (ou outro branch que não seja o que você quer deletar)
        git checkout main

        # Delete o branch de feature localmente
        git branch -d ft-login
        ```

## 🔀 Merge de Três Vias (3-Way Merge)

Quando você mescla dois branches que divergiram (ambos têm commits que o outro não tem desde o ponto em que se separaram) e o Git não pode fazer um fast-forward, ele realiza um "merge de três vias" (3-way merge).

*Isso acontece quando, por exemplo, tanto o `main` quanto o `ft-login` tiveram novos commits desde que `ft-login` foi criado.*

O Git analisa três pontos (commits) para realizar a mesclagem:
1.  O commit mais recente no branch de destino (ex: `main`).
2.  O commit mais recente no branch de origem (ex: `ft-login`).
3.  O ancestral comum mais recente de ambos os branches (o "ponto de divergência").

Um **novo commit de merge** é criado no branch de destino. Este commit é especial porque tem *dois pais*: o último commit do `main` (antes do merge) e o último commit do `ft-login`. Ele representa a consolidação das duas linhas de trabalho.

### ⚠️ Resolução de Conflitos de Merge

Um **conflito de merge** ocorre quando o Git não consegue decidir automaticamente como combinar as alterações de dois branches. Isso geralmente acontece quando:
* A mesma linha (ou linhas próximas) de um arquivo foi alterada de formas diferentes nos dois branches.
* Um branch deletou um arquivo que foi modificado no outro branch.

**A resolução de conflitos é uma operação manual que exige atenção e, por vezes, discussão com a equipe.**

**Passos para resolver um conflito:**

1.  **Identifique os Arquivos Conflitantes:**
    Quando um merge resulta em conflitos, o Git informará. O comando `git status` também mostrará os arquivos em estado de "unmerged paths" (caminhos não mesclados).
    O Git insere marcadores de conflito diretamente nos arquivos problemáticos:
    ```diff
    Algum código sem conflito...
    <<<<<<< HEAD
    Esta é a alteração vinda do seu branch atual (HEAD, ex: main).
    =======
    Esta é a alteração vinda do branch que você está tentando mesclar (ex: ft-login).
    >>>>>>> ft-login
    Mais código sem conflito...
    ```
    * `<<<<<<< HEAD`: Marca o início da seção conflitante do seu branch atual.
    * `=======`: Separa as duas versões conflitantes.
    * `>>>>>>> nome-do-outro-branch`: Marca o fim da seção conflitante do outro branch.

2.  **Edite o Código Fonte:**
    Abra cada arquivo conflitante em seu editor de texto ou IDE.
    * Decida qual versão manter: a do `HEAD`, a do outro branch, uma combinação de ambas, ou até mesmo algo completamente novo.
    * **Remova manualmente os marcadores de conflito** (`<<<<<<<`, `=======`, `>>>>>>>`).
    * Certifique-se de que o resultado final é o código funcional e desejado.

    **Dica sobre IDEs para Resolução de Conflitos:**
    * **VS Code:** Oferece uma interface visual integrada para resolver conflitos. Ele destaca as seções conflitantes e permite escolher "Aceitar Mudança Atual", "Aceitar Mudança Recebida", "Aceitar Ambas as Mudanças", ou editar manualmente o resultado combinado.
    * **IntelliJ IDEA (e outras IDEs da JetBrains):** Possuem uma ferramenta de merge visual de três painéis muito poderosa. Ela mostra sua versão, a versão do outro branch e o resultado (que você edita) lado a lado, facilitando a visualização e a combinação das alterações.

3.  **Adicione (Stage) os Arquivos Resolvidos:**
    Depois de editar e salvar cada arquivo, informando ao Git que você resolveu o conflito nele:
    ```bash
    git add nome-do-arquivo-resolvido.txt
    # Ou, se resolveu múltiplos arquivos:
    git add .
    ```

4.  **Complete o Merge com um Commit:**
    Uma vez que todos os conflitos foram resolvidos e os arquivos marcados como resolvidos (com `git add`), finalize o processo de merge criando o commit de merge:
    ```bash
    git commit
    ```
    O Git geralmente sugere uma mensagem de commit padrão para o merge (ex: "Merge branch 'ft-login' into main"). Você pode usar essa mensagem ou editá-la.

## 🍴 Procedimento Fork + Pull Request: Contribuindo para Projetos Externos

Quando você quer contribuir para um projeto no GitHub no qual você **não tem permissão de escrita direta** (o que é o caso da maioria dos projetos de código aberto ou projetos de outras equipes/empresas), o fluxo de trabalho padrão é o "Fork + Pull Request".

1.  **Faça um "Fork" do Repositório Original:**
    * No GitHub, navegue até a página do repositório que você quer contribuir (ex: `usuario-original/projeto-incrivel`).
    * Clique no botão "Fork" no canto superior direito. Isso cria uma cópia completa do repositório na sua própria conta do GitHub (ex: `seu-username/projeto-incrivel`).

2.  **Clone o Seu Repositório "Forkado" para o Seu Computador:**
    Trabalhe na sua cópia local do fork.
    ```bash
    git clone [https://github.com/seu-username/projeto-incrivel.git](https://github.com/seu-username/projeto-incrivel.git)
    cd projeto-incrivel
    ```

3.  **(Recomendado) Configure um "Remote" para o Repositório Original (Upstream):**
    Isso permite que você mantenha seu fork sincronizado com as últimas alterações do projeto original.
    ```bash
    git remote add upstream [https://github.com/usuario-original/projeto-incrivel.git](https://github.com/usuario-original/projeto-incrivel.git)
    ```
    Você pode verificar seus remotes com `git remote -v`. Você deverá ver `origin` (seu fork) e `upstream` (o projeto original).

4.  **Crie um Novo Branch para Suas Alterações (no seu clone local):**
    Sempre crie um branch específico para sua contribuição. Não trabalhe diretamente no `main` do seu fork para isso.
    ```bash
    git checkout -b minha-nova-feature
    # Exemplo: git checkout -b corrige-bug-123
    ```

5.  **Faça Suas Alterações e Commits:**
    Desenvolva sua feature ou correção, fazendo commits locais normalmente.
    ```bash
    # ... edite arquivos ...
    git add .
    git commit -m "Adiciona nova feature X"
    ```

6.  **(Importante) Mantenha Seu Branch Sincronizado com o Repositório Original (Upstream):**
    Antes de enviar suas alterações, especialmente se você demorou um tempo, é bom buscar as últimas atualizações do `upstream` e mesclá-las no seu branch de feature para evitar conflitos no Pull Request.
    ```bash
    # Busque as alterações do upstream (não mescla automaticamente)
    git fetch upstream

    # Uma forma comum é mesclar o main do upstream no seu branch de feature:
    # (Estando no seu branch minha-nova-feature)
    git merge upstream/main
    # Resolva conflitos se houver, e faça commit do merge.

    # Alternativamente, você pode usar rebase (mais avançado, mantém o histórico linear):
    # git rebase upstream/main
    ```

7.  **Envie (Push) Seu Branch de Feature para o *Seu Fork* no GitHub:**
    ```bash
    git push origin minha-nova-feature
    ```

8.  **Abra um Pull Request (PR) do Seu Fork para o Repositório Original:**
    * Vá para a página do *seu fork* no GitHub (`https://github.com/seu-username/projeto-incrivel`).
    * O GitHub geralmente mostrará uma notificação "Your recently pushed branches: minha-nova-feature" com um botão "Compare & pull request". Clique nele.
    * Ou, vá na aba "Pull requests" e clique em "New pull request".
    * **Configure o PR:**
        * **Base repository:** `usuario-original/projeto-incrivel` (o projeto original).
        * **Base branch:** `main` (ou o branch de desenvolvimento principal do projeto original).
        * **Head repository:** `seu-username/projeto-incrivel` (seu fork).
        * **Compare branch:** `minha-nova-feature` (o branch com suas alterações).
    * Escreva um título e uma descrição claros para o seu PR, explicando o que você fez e por quê.
    * Clique em "Create pull request".

9.  **Discussão e Revisão:**
    Os mantenedores do projeto original revisarão seu PR. Eles podem fazer comentários, pedir alterações ou aprovar. Se pedirem alterações, faça novos commits no seu branch `minha-nova-feature` local e faça `git push origin minha-nova-feature` novamente. O PR será atualizado automaticamente.

10. **Merge do Pull Request:**
    Se aprovado, um mantenedor do projeto original fará o "Merge pull request". Suas contribuições agora fazem parte do projeto original!

11. **(Opcional) Limpeza Pós-Merge:**
    * Você pode deletar seu branch de feature no seu fork (o GitHub geralmente oferece um botão para isso após o merge do PR).
    * Delete também o branch local:
        ```bash
        git checkout main  # ou o branch principal do seu fork
        git branch -d minha-nova-feature
        ```
    * Para manter seu fork atualizado com o `upstream`, você pode periodicamente fazer:
        ```bash
        git checkout main
        git fetch upstream
        git merge upstream/main
        git push origin main
        ```

Este é o ciclo fundamental de contribuição em muitos projetos de software colaborativos.

## 🛠️ Resumo dos Comandos Principais
| Comando | Descrição |
| --- | --- |
| `git branch` | Lista branches locais. |
| `git branch nome-do-branch` | Cria um novo branch. |
| `git checkout nome-do-branch` | Muda para o branch especificado. |
| `git checkout -b nome-do-branch` | Cria e muda para um novo branch. |
| `git branch -d nome-do-branch` | Deleta um branch localmente. |
| `git branch -D nome-do-branch` | Força a deleção de um branch localmente. |
| `git merge nome-do-branch` | Mescla o branch especificado no branch atual. |
| `git pull` | Baixa e mescla alterações do repositório remoto. |
| `git push -u origin nome-do-branch` | Envia o branch local para o repositório remoto e vincula-o. |
| `git fetch upstream` | Baixa alterações do repositório original (upstream). |
| `git merge upstream/main` | Mescla o branch `main` do repositório original no branch atual. |
| `git rebase upstream/main` | Reaplica commits do branch atual sobre o `main` do repositório original. |
| `git status` | Mostra o estado atual do repositório, incluindo arquivos modificados e conflitos. |
| `git add .` | Adiciona todas as alterações ao staging area. |
| `git commit -m "mensagem"` | Cria um novo commit com a mensagem especificada. |
| `git push origin nome-do-branch` | Envia o branch local para o repositório remoto. |
| `git remote add upstream url` | Adiciona um repositório remoto como upstream. |
| `git remote -v` | Lista os repositórios remotos configurados. |
| `git switch -c nome-do-branch` | Cria e muda para um novo branch (alternativa ao checkout). |
| `git switch nome-do-branch` | Muda para um branch existente (alternativa ao checkout). |

## 📚 Recursos Adicionais
- [Documentação Oficial do Git](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Pro Git Book](https://git-scm.com/book/en/v2) - Livro gratuito sobre Git
- [GitHub Learning Lab](https://lab.github.com/) - Cursos interativos sobre Git e GitHub
- [Atlassian Git Tutorials](https://www.atlassian.com/git/tutorials) - Tutoriais abrangentes sobre Git e fluxos de trabalho
- [Git Branching and Merging](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging) - Capítulo do Pro Git Book sobre branches e merges
- [GitHub Flow](https://guides.github.com/introduction/flow/) - Guia sobre o fluxo de trabalho do GitHub
- [GitHub Pull Requests](https://docs.github.com/en/pull-requests) - Documentação oficial sobre Pull Requests no GitHub
- [GitHub Forking Workflow](https://docs.github.com/en/get-started/quickstart/fork-a-repo) - Guia sobre o fluxo de trabalho de fork no GitHub
- [GitHub Issues](https://docs.github.com/en/issues) - Documentação sobre como usar Issues para rastreamento de bugs e gerenciamento de tarefas
- [GitHub Projects](https://docs.github.com/en/projects) - Documentação sobre como usar GitHub Projects para gerenciamento de projetos
- [GitHub Actions](https://docs.github.com/en/actions) - Documentação sobre automação de fluxos de trabalho com GitHub Actions
- [GitHub Discussions](https://docs.github.com/en/discussions) - Documentação sobre como usar Discussions para discussões e perguntas
- [GitHub Codespaces](https://docs.github.com/en/codespaces) - Documentação sobre ambientes de desenvolvimento na nuvem com GitHub Codespaces
- [GitHub CLI](https://cli.github.com/) - Ferramenta de linha de comando para interagir com o GitHub
- [GitHub API](https://docs.github.com/en/rest) - Documentação da API do GitHub para automação e integração
- [GitHub Security](https://docs.github.com/en/code-security) - Documentação sobre segurança no GitHub, incluindo Dependabot e alertas de segurança
- [GitHub Community Forum](https://github.community/) - Fórum para discutir e obter ajuda sobre GitHub
- [GitHub Learning Lab](https://lab.github.com/) - Cursos interativos para aprender Git e GitHub
- [GitHub Education](https://education.github.com/) - Recursos educacionais e programas para estudantes e professores

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)
