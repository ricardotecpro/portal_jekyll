# Script de Sincronização de Artefatos do Antigravity
# Copia artefatos do diretório do Gemini para o projeto

param(
    [switch]$Backup,
    [switch]$Restore
)

$projectRoot = "c:\Dropbox\Crossover\github.io\ads_spec_backend_com_python"
$geminiDir = "C:\Users\rlp\.gemini\antigravity\brain\4bef5690-d60f-4da3-899f-b5abbf8193b4"
$antigravityDir = "$projectRoot\.antigravity"

# Cores para output
function Write-Success { param($msg) Write-Host "✅ $msg" -ForegroundColor Green }
function Write-Info { param($msg) Write-Host "ℹ️  $msg" -ForegroundColor Cyan }
function Write-Error { param($msg) Write-Host "❌ $msg" -ForegroundColor Red }

# Criar backup com timestamp
if ($Backup) {
    $timestamp = Get-Date -Format "yyyy-MM-dd_HH-mm-ss"
    $backupDir = "$antigravityDir\history\$timestamp"
    
    Write-Info "Criando backup em: $backupDir"
    New-Item -ItemType Directory -Path $backupDir -Force | Out-Null
    
    Copy-Item "$antigravityDir\*.md" $backupDir -Exclude "README.md" -Force
    Write-Success "Backup criado com sucesso!"
    
    # Listar backups
    Write-Info "Backups disponíveis:"
    Get-ChildItem "$antigravityDir\history" -Directory | 
        Sort-Object Name -Descending | 
        Select-Object -First 5 | 
        ForEach-Object { Write-Host "  📁 $($_.Name)" }
    
    exit 0
}

# Restaurar de backup
if ($Restore) {
    Write-Info "Backups disponíveis:"
    $backups = Get-ChildItem "$antigravityDir\history" -Directory | 
        Sort-Object Name -Descending
    
    for ($i = 0; $i -lt $backups.Count; $i++) {
        Write-Host "  [$i] $($backups[$i].Name)"
    }
    
    $choice = Read-Host "Escolha o número do backup para restaurar"
    $selectedBackup = $backups[$choice]
    
    if ($selectedBackup) {
        Write-Info "Restaurando de: $($selectedBackup.Name)"
        Copy-Item "$($selectedBackup.FullName)\*.md" $antigravityDir -Force
        Write-Success "Backup restaurado com sucesso!"
    } else {
        Write-Error "Backup inválido!"
    }
    
    exit 0
}

# Sincronização padrão: Gemini -> Projeto
Write-Info "Sincronizando artefatos do Gemini para o projeto..."

# Criar diretório se não existir
if (-not (Test-Path $antigravityDir)) {
    New-Item -ItemType Directory -Path $antigravityDir -Force | Out-Null
    Write-Success "Diretório .antigravity criado"
}

# Lista de artefatos para copiar
$artifacts = @(
    "task.md",
    "implementation_plan.md",
    "walkthrough.md"
)

$copiedCount = 0
foreach ($artifact in $artifacts) {
    $source = "$geminiDir\$artifact"
    $dest = "$antigravityDir\$artifact"
    
    if (Test-Path $source) {
        Copy-Item $source $dest -Force
        $size = (Get-Item $dest).Length
        Write-Success "Copiado: $artifact ($([math]::Round($size/1KB, 2)) KB)"
        $copiedCount++
    } else {
        Write-Error "Não encontrado: $artifact"
    }
}

Write-Info "`nResumo:"
Write-Host "  📊 Artefatos copiados: $copiedCount/$($artifacts.Count)"
Write-Host "  📁 Destino: $antigravityDir"

# Listar arquivos no diretório
Write-Info "`nArquivos em .antigravity:"
Get-ChildItem $antigravityDir -File | 
    Select-Object Name, @{N='Size';E={"{0:N2} KB" -f ($_.Length/1KB)}}, LastWriteTime |
    Format-Table -AutoSize

Write-Success "`nSincronização concluída!"
Write-Info "Dica: Use -Backup para criar backup antes de mudanças importantes"
Write-Info "      Use -Restore para restaurar de um backup anterior"
