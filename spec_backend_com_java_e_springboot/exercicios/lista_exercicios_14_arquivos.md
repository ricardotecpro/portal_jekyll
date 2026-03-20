---
layout: default
title: Trabalhando com arquivos em Java"**
---

# Trabalhando com arquivos em Java"**

usando as classes da API Java:

* `File`
* `Scanner`
* `IOException`

Abaixo estão **3 exercícios práticos** similares ao da imagem, com foco em leitura de arquivos, manipulação de conteúdo e tratamento de exceções, sempre aplicando princípios de Orientação a Objetos (OO):

---

### 📘 **Exercício 1: Analisador de Arquivo de Texto**

**Objetivo:** Criar uma classe `AnalisadorDeArquivo` que leia um arquivo `.txt` e conte o número total de linhas, palavras e caracteres.

**Requisitos:**

* Crie a classe `AnalisadorDeArquivo` com o método `analisar(String caminhoDoArquivo)`.
* Use `File` e `Scanner` para abrir e ler o arquivo.
* Trate possíveis exceções com `try-catch` e `IOException`.
* Mostre ao final:

  * Total de linhas
  * Total de palavras
  * Total de caracteres

---

### 📘 **Exercício 2: Lista de Produtos**

**Objetivo:** Ler um arquivo chamado `produtos.txt`, onde cada linha contém nome e preço de um produto (ex: `"Mouse, 39.90"`), e criar objetos da classe `Produto`.

**Requisitos:**

* Crie uma classe `Produto` com atributos `nome` e `preco`.
* Crie uma classe `LeitorDeProdutos` com o método `List<Produto> ler(String caminhoArquivo)`.
* Use `File` e `Scanner` para ler o arquivo e instanciar objetos da classe `Produto`.
* Exiba os produtos no console (nome e preço formatados).
* Trate exceções com `IOException`.

---

### 📘 **Exercício 3: Filtro de Palavras**

**Objetivo:** Ler um arquivo `entrada.txt` e salvar em `saida.txt` somente as palavras que comecem com a letra "a" (não importa se maiúscula ou minúscula).

**Requisitos:**

* Crie uma classe `FiltroPalavras`.
* Crie os métodos:

  * `List<String> filtrarPalavras(String caminhoEntrada)`
  * `void salvarPalavras(List<String> palavras, String caminhoSaida)`
* Use `File`, `Scanner` e `PrintWriter`.
* Utilize `IOException` para tratamento de exceções.
* Use conceitos de Orientação a Objetos (modularize bem).

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)

