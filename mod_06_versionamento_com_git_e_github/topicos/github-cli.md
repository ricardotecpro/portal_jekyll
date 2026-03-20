---
layout: default
title: CLI
---

# CLI

```
gh: The term 'gh' is not recognized as a name of a cmdlet...
```

significa que o **GitHub CLI (`gh`) não está instalado ou não está no PATH** do seu Windows/PowerShell.

---

## 🔹 1. Instalar o GitHub CLI no Windows

Você tem algumas opções:

### 👉 Instalação com **winget** (mais simples)

No PowerShell (como administrador):

```powershell
winget install --id GitHub.cli
```

---

### 👉 Instalação com **scoop** (se já tiver o gerenciador Scoop)

```powershell
scoop install gh
```

---

### 👉 Instalação manual

1. Baixe o instalador `.msi` aqui:
   [https://github.com/cli/cli/releases/latest](https://github.com/cli/cli/releases/latest)
2. Execute o instalador e finalize.
3. Reinicie o terminal.

---

## 🔹 2. Verificar se funcionou

Depois da instalação, rode no PowerShell:

```powershell
gh --version
```

Se aparecer algo como `gh version 2.x.x`, está tudo certo ✅.

---

## 🔹 3. Fazer login no GitHub

Depois de instalado:

```powershell
gh auth login
```

E siga os passos (ele vai abrir o navegador para autenticar sua conta).

---

📌 Pergunto: você prefere que eu monte um **roteiro completo usando apenas o PowerShell** (instalação via `winget` + login nas duas contas + troca entre elas), para já deixar pronto no seu Windows?

