# Histórico de Sessões do Antigravity

Este diretório contém backups históricos dos artefatos do Antigravity.

## 📅 Estrutura

Cada subdiretório representa uma sessão de trabalho com timestamp:

```
history/
├── 2025-11-20_23-30-00/
│   ├── task.md
│   ├── implementation_plan.md
│   └── walkthrough.md
├── 2025-11-21_00-15-00/
│   ├── task.md
│   ├── implementation_plan.md
│   └── walkthrough.md
└── ...
```

## 🔄 Como Usar

### Criar Backup Manual
```powershell
..\sync.ps1 -Backup
```

### Restaurar de Backup
```powershell
..\sync.ps1 -Restore
```

### Comparar Versões
```powershell
# Ver diferenças entre versões
git diff history/2025-11-20_23-30-00/task.md history/2025-11-21_00-15-00/task.md
```

## 📊 Política de Retenção

- **Backups Recentes**: Manter últimos 30 dias
- **Backups Mensais**: Manter 1 por mês dos últimos 12 meses
- **Backups Anuais**: Manter indefinidamente

## 🗑️ Limpeza

Para limpar backups antigos (manter últimos 10):
```powershell
Get-ChildItem . -Directory | 
    Sort-Object Name -Descending | 
    Select-Object -Skip 10 | 
    Remove-Item -Recurse -Force
```

---

**Nota**: Backups são criados automaticamente antes de mudanças significativas.
