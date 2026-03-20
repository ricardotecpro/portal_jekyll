# ✅ Boas práticas para mensagens de commit

### 1. **Use o tempo verbal imperativo**

* Ex: *"Adiciona página de login"* em vez de *"Adicionando"* ou *"Adicionado"*.
* Isso segue a ideia: “Se este commit for aplicado, ele **fará** tal coisa”.

### 2. **Seja breve e claro no título (primeira linha)**

* **Máximo de 50 caracteres**.
* A primeira letra deve ser **maiúscula**.
* **Não coloque ponto final**.

### 3. **Adicione uma descrição (opcional)**

* Pule uma linha após o título.
* Explique **o que foi feito e por quê**, se necessário.
* Ideal para mudanças mais complexas.

### 4. **Use prefixos para categorizar o commit (opcional, mas comum)**

Alguns times usam convenções como:

| Prefixo    | Uso                                                   |
| ---------- | ----------------------------------------------------- |
| `feat`     | Nova funcionalidade                                   |
| `fix`      | Correção de bug                                       |
| `docs`     | Alterações na documentação                            |
| `style`    | Formatação, indentação, etc (sem alteração de lógica) |
| `refactor` | Refatoração de código                                 |
| `test`     | Adição ou correção de testes                          |
| `chore`    | Tarefas gerais (build, CI, configs)                   |

---

## ✍️ **Exemplos de boas mensagens de commit**

### Simples

```bash
git commit -m "Adiciona botão de logout na navbar"
```

### Com descrição

```bash
git commit -m "Corrige bug ao salvar tarefas concluídas

O erro acontecia quando o usuário clicava rapidamente duas vezes. 
Foi adicionada uma verificação de debounce."
```

### Com prefixo (padrão convencional)

```bash
git commit -m "feat: Implementa drag and drop de tarefas"
```

```bash
git commit -m "fix: Corrige erro de ordenação nas tarefas finalizadas"
```

---

## 🛠️ Dica extra: usar `git commit` interativo

Ao invés de usar `git commit -m`, apenas digite:

```bash
git commit
```

Assim o Git abre um editor de texto onde você pode escrever:

```txt
feat: Cria componente de card de tarefa

Este componente será usado tanto na lista de tarefas pendentes quanto 
na de tarefas concluídas. Ele inclui botões de editar e deletar.
```

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)
