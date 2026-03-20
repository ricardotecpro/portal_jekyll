---
layout: default
title: Slides do Curso Python Backend
---

# Slides do Curso Python Backend

Este diretório contém os slides do curso em formato Marp.

## 📁 Estrutura

```
slides/
├── brutos/              # Slides fonte (.md)
│   ├── python-theme.css # Tema customizado
│   ├── 00-introducao.md
│   ├── 01-instalacao.md
│   └── ...
└── html/                # Slides gerados (.html)
    ├── 00-introducao.html
    └── ...
```

## 🎨 Gerar Slides

### Com Poetry/Taskipy

```bash
poetry run task slides
```

### Com Marp CLI Diretamente

```bash
marp -I brutos --html --theme brutos/python-theme.css --allow-local-files -o html
```

## 📊 Visualizar Slides

Após gerar, abra os arquivos HTML em `slides/html/` no navegador.

## 🎯 Tema

Os slides usam o tema customizado `python-theme.css` com as cores oficiais do Python.org:
- 🔵 Azul Python: `#306998`
- 🟡 Amarelo Python: `#FFD43B`
- 🟠 Laranja: `#FFA500`

