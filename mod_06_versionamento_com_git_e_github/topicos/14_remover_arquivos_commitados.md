---
layout: default
title: Como remover do seu repositório arquivos que já foram "commitados"
---

# Como remover do seu repositório arquivos que já foram "commitados" 

Mas que agora estão no `.gitignore`, não basta apenas criar o arquivo de ignore. O Git continuará rastreando os arquivos que ele já conhece.

O comando principal para resolver isso é o `git rm --cached`. Ele remove o arquivo do controle do Git (da "staging area"), mas **mantém o arquivo no seu computador**.

-----

### Cuidado Antes de Começar

Antes de executar os comandos abaixo, certifique-se de que todas as suas alterações importantes já foram "commitadas" ou salvas. O ideal é começar com um "working directory clean". Você pode verificar isso com o comando `git status`.

-----

### Método 1: O Mais Completo e Recomendado (Para Limpar Tudo)

Esta é a forma mais eficaz de garantir que seu repositório fique perfeitamente alinhado com as regras do seu `.gitignore`.

**Passo 1: Remova tudo do índice do Git (não do seu disco\!)**
Execute o seguinte comando na pasta raiz do seu projeto. Ele vai remover o rastreamento de todos os arquivos de forma recursiva.

```bash
git rm -r --cached .
```

  * `rm`: Comando para remover.
  * `-r`: Recursivo, para aplicar a pastas e subpastas.
  * `--cached`: A opção mais importante. Garante que os arquivos sejam removidos apenas do índice do Git, mas permaneçam no seu disco.
  * `.`: Representa o diretório atual.

Após rodar este comando, se você executar `git status`, verá todos os arquivos do seu projeto como "deleted" ou "untracked". Não se preocupe, isso é o esperado.

**Passo 2: Adicione tudo de volta**
Agora, vamos adicionar tudo novamente. Desta vez, o Git irá ler o seu arquivo `.gitignore` e vai ignorar todos os arquivos e pastas listados nele.

```bash
git add .
```

**Passo 3: Faça o commit da limpeza**
Agora basta fazer o commit dessas alterações. É uma boa prática usar uma mensagem clara para explicar o que foi feito.

```bash
git commit -m "Chore: Limpa o repositório e aplica o gitignore"
```

**Passo 4: Envie para o GitHub**
Finalmente, envie a alteração para o seu repositório remoto.

```bash
git push
```

-----

### Método 2: Manual (Para Remover Arquivos Específicos)

Se você quer remover apenas um arquivo ou uma pasta específica que foi adicionada por engano, pode usar o mesmo comando de forma mais direcionada.

**Para remover um arquivo específico:**

```bash
git rm --cached caminho/para/o/arquivo.log
```

**Para remover uma pasta específica (como `node_modules` ou `build`):**

```bash
git rm -r --cached caminho/para/a/pasta/
```

Depois de remover manualmente, o processo é o mesmo: faça o commit da remoção e envie para o GitHub.

```bash
git commit -m "Fix: Remove arquivos/pastas ignorados do rastreamento"
git push
```

Resumindo, a abordagem **automática (Método 1)** é a mais segura e completa para garantir que todo o repositório respeite as regras do seu `.gitignore`.


---

### 🚀 [ricardotecpro.github.io](https://ricardotecpro.github.io/)

