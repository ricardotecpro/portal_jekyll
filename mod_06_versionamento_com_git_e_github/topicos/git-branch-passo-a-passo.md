Passo a Passo para Criar uma Nova Branch

Passo 1: Sincronize seu Repositório LocalAntes de criar qualquer nova branch, certifique-se de que sua branch principal (geralmente main ou develop) está atualizada com a versão mais recente do repositório remoto.

1.Vá para a branch principal:Shell Script

git checkout main

(Use develop se o seu projeto seguir o fluxo GitFlow).

2.Puxe as últimas alterações:Shell Script

git pull origin main

Isso evita que você baseie seu novo trabalho em código desatualizado, o que poderia causar conflitos no futuro.

    
Passo 2: Escolha um Nome Descritivo (A Prática Mais Importante)

O nome da branch deve comunicar claramente seu propósito. A convenção mais utilizada e recomendada é usar prefixos para categorizar o trabalho.

Formato Comum: tipo/ID-do-ticket-descricao-curta

•tipo: Categoria da tarefa.
•feature/: Para novas funcionalidades (ex: feature/adicionar-login-social).
•bugfix/ ou fix/: Para correção de bugs não urgentes (ex: fix/corrigir-layout-quebrado-no-mobile).
•hotfix/: Para correções críticas em produção.
•chore/: Para tarefas de manutenção que não alteram a lógica do código (ex: chore/atualizar-dependencias, chore/configurar-linter).
•docs/: Para alterações na documentação.

git checkout -b hotfix/add-h2-and-task-table

Passo 3: Crie e Mude para a Nova Branch

Use o comando git checkout -b. A flag -b cria a nova branch e o checkout já muda seu ambiente para ela em um único passo.


git checkout -b feature/PROJ-123-implementar-login-com-google

O terminal responderá com algo como: Switched to a new branch 'feature/PROJ-123-implementar-login-com-google'

Agora você está na sua nova branch e pode começar a trabalhar com segurança, sem afetar a branch main.

Passo 4: Publique a Branch no Repositório Remoto
Assim que você criar a branch, é uma boa prática publicá-la no repositório remoto (GitHub, GitLab, etc.). Isso a torna visível para outros membros da equipe e serve como um backup do seu trabalho.


git push -u origin hotfix/add-h2-and-task-table



