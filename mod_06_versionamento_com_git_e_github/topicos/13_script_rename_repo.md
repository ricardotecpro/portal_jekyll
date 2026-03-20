# Automatizar esse processo de Rename

pode economizar tempo e evitar erros, especialmente se você faz isso com frequência. Abaixo está um **script em PowerShell** que:

1. Renomeia a pasta local no Windows.
2. Atualiza o link remoto do Git para o novo nome do repositório no GitHub.

---

### ⚙️ **Script PowerShell para Automatizar a Renomeação**

```powershell
# Parâmetros
$usuarioGitHub = "SEU_USUARIO"
$nomeAntigo = "repositorio-antigo"
$nomeNovo = "repositorio-novo"
$caminhoBase = "C:\caminho\para\seus\repositorios"

# Caminhos completos
$caminhoAntigo = Join-Path $caminhoBase $nomeAntigo
$caminhoNovo = Join-Path $caminhoBase $nomeNovo

# Renomear pasta
Rename-Item -Path $caminhoAntigo -NewName $nomeNovo

# Navegar para a nova pasta
Set-Location $caminhoNovo

# Atualizar URL remota do Git
$novaURL = "https://github.com/$usuarioGitHub/$nomeNovo.git"
git remote set-url origin $novaURL

# Verificar se funcionou
git remote -v
```

---

### 📝 **Instruções para Usar**

1. Substitua:
   - `"SEU_USUARIO"` pelo seu nome de usuário no GitHub.
   - `"repositorio-antigo"` e `"repositorio-novo"` pelos nomes desejados.
   - `"C:\caminho\para\seus\repositorios"` pelo caminho onde está sua pasta local.

2. Salve o script como `renomear.ps1`.

3. Execute no PowerShell com permissões adequadas:
   ```powershell
   .\renomear.ps1
   ```

---

### 🚀 **Dica Extra: Renomear no GitHub via API (Opcional)**


---

### 🚀 [ricardotecpro.github.io](https://ricardotecpro.github.io/)
