# Projeto Simplificado: Jekyll + Marp

Este projeto foi criado para substituir uma stack mais complexa por uma estrutura simples, facil de manter e com deploy rapido no GitHub Pages.

## Objetivos

- Conteudo de aulas de TI com markdown simples.
- Quizzes interativos com JS leve e sem plugin pesado.
- Slides com Marp (fonte em markdown, exportando HTML/PDF).
- Pipeline unica de publicacao com GitHub Actions.

## Estrutura

- \_config.yml: configuracao do Jekyll.
- index.md: pagina inicial.
- aulas/: paginas de aula.
- quizzes/: quizzes interativos.
- exercicios/: exercicios.
- projetos/: projetos/labs.
- slides-src/: fonte dos slides Marp.
- slides/: artefatos de slides gerados.
- assets/css e assets/js: frontend minimo.

## Execucao local

### 1) Dependencias Ruby

Instale Ruby + Bundler e execute:

```bash
bundle install
bundle exec jekyll serve
```

Site local:

- http://127.0.0.1:4000

### 2) Gerar slides Marp

```bash
npm install
npm run slides:build
```

## Deploy no GitHub Pages

Use o workflow em:

- .github/workflows/jekyll-simplificado.yml

Fluxo:

1. Build dos slides Marp.
2. Build do Jekyll.
3. Publicacao via GitHub Pages.

## Observacao

Este scaffold pode coexistir com o projeto MkDocs atual, pois esta isolado em `jekyll_simplificado/`.
