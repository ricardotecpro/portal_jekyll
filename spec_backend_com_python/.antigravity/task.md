---
layout: default
title: Lista de Tarefas - Migração MkDocs
---

# Lista de Tarefas - Migração MkDocs

- [x] Infraestrutura e Configuração <!-- id: 0 -->
    - [x] Remover arquivos Jekyll (`_config.yml`, etc.) <!-- id: 27 -->
    - [x] Criar ambiente virtual Python e `requirements.txt` <!-- id: 1 -->
    - [x] Criar configuração `mkdocs.yml` (Site) e `mkdocs_slides.yml` (Slides) <!-- id: 2 -->
    - [x] Criar script de orquestração `build.py` (Substitui package.json) <!-- id: 3 -->
    - [x] Corrigir geração de slides (mkdocs-slides) <!-- id: 33 -->
- [x] Reestruturação de Conteúdo e Design <!-- id: 4 -->
    - [x] Mover `topicos/` para `docs/aulas/` <!-- id: 5 -->
    - [x] Criar `docs/index.md` (Home com Cards: Aulas, Slides, Exercícios) <!-- id: 6 -->
    - [x] Organizar pastas: `docs/slides/`, `docs/exercicios/`, `docs/projetos/` <!-- id: 30 -->
- [x] Integração de Funcionalidades <!-- id: 7 -->
    - [x] Verificar/Habilitar suporte a Mermaid <!-- id: 8 -->
    - [x] Mover e verificar assets <!-- id: 9 -->
    - [x] Adicionar melhorias "Nano Banana" (Admonitions, Tabs) <!-- id: 10 -->
    - [x] Implementar Sistema de Quiz Interativo (JS/CSS) <!-- id: 31 -->
    - [ ] Criar quizzes para cada tópico <!-- id: 32 -->
- [x] Melhoria de Conteúdo (Português e Iniciantes) <!-- id: 11 -->
    - [x] Revisar e atualizar `python_basico.md` <!-- id: 12 -->
    - [x] Revisar e atualizar `python_avancado.md` <!-- id: 13 -->
    - [x] Gerar imagens de IA para conceitos <!-- id: 21 -->
- [x] Automação CI/CD e GitHub Pages <!-- id: 22 -->
    - [x] Criar `.github/workflows/ci.yml` <!-- id: 23 -->
    - [x] Configurar GitHub Pages para deploy via Actions (Documentar passos) <!-- id: 28 -->
- [x] Testes Automatizados <!-- id: 24 -->
    - [x] Criar `tests/test_layout.py` com Playwright <!-- id: 25 -->
    - [x] Executar testes via `build.py` e verificar <!-- id: 26 -->

