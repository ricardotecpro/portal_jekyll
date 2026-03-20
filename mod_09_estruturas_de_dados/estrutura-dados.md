---
layout: default
title: Estruturas de Dados 🎯
---

### Estruturas de Dados 🎯

Este capítulo inicial tem como objetivos esclarecer a diferença entre a disciplina de "Lógica de Programação e Algoritmos" e o estudo aprofundado de "Estruturas de Dados e Algoritmos", além de nivelar conhecimentos essenciais sobre objetos, funções, memória e leitura de JSON com Python e Java.

---

### Estruturas de Dados vs. Lógica de Programação 🤔 vs. 💻

Embora "tudo" seja algoritmo, existe uma distinção importante entre o que se aprende inicialmente e o foco deste curso:

* **Lógica de Programação e Algoritmos**: Foca em algoritmos simples, abordando estrutura sequencial, estruturas de controle (condicionais e loops), arrays e funções.
* **Estruturas de Dados e Algoritmos**: Aprofunda-se em técnicas específicas e avançadas para a resolução de algoritmos complexos.

### O Que São Estruturas de Dados? 🏗️

Estruturas de Dados tratam da **organização e armazenamento de dados na memória** de um computador. O objetivo é projetar e implementar métodos para gerenciar dados de forma que a recuperação e modificação sejam eficientes. Seus principais objetivos são:
* Organização e abstração dos dados.
* Eficiência na manipulação dos dados.
* Bom gerenciamento de memória.

Os principais tipos de estruturas de dados incluem:
* **Arrays** 🔢: Coleção de elementos em uma porção contígua de memória, com acesso rápido pelo índice.
* **Listas** 📜: Coleção de elementos em nós sequenciais.
* **Árvores** 🌳: Elementos armazenados em nós de forma hierárquica.
* **Grafos** 🕸️: Nós com livre conexão entre eles.
* **Tabelas Hash** 🔑: Utiliza uma função de hash para mapear chaves a elementos, permitindo acesso rápido.

### Pré-requisitos: Preciso Saber Orientação a Objetos (OO)? 🙋

Não é necessário ter uma base completa de OO antes de estudar Estruturas de Dados (ED). Contudo, é preciso ter conhecimento de **tipos estruturados (classes e atributos)**, pois são a base para a implementação das estruturas.

### Comportamento de Memória: Tipos Referência vs. Tipos Valor 🧠💾

A forma como as variáveis são armazenadas na memória (Stack vs. Heap) é um conceito fundamental:

* **Tipos Referência (Classes)** 🔗:
    * As variáveis não são "caixas" que contêm o objeto, mas sim "ponteiros" (referências) que apontam para o local do objeto na memória Heap.
    * Ao atribuir uma variável a outra (`p2 = p1`), ambas passam a apontar para o mesmo objeto.
    * Aceitam o valor `null`, que indica que a variável não aponta para nenhum objeto.
    * **Em Python**, todos os tipos são tipos referência. No entanto, tipos como números, strings e booleanos são **imutáveis**, o que significa que uma nova atribuição cria um novo objeto em vez de alterar o original.

* **Tipos Valor (Tipos Primitivos / Structs)** 📦:
    * As variáveis são as próprias "caixas" que armazenam o valor diretamente, geralmente na memória Stack.
    * Ao atribuir uma variável a outra (`y = x`), uma **cópia** do valor é criada.
    * Geralmente não aceitam valor `null`.

### Desalocação de Memória 🗑️

A liberação da memória utilizada ocorre de duas formas principais, um fundamento que se aplica a todas as linguagens modernas:

* **Garbage Collector** 🤖: É um processo automático que monitora os objetos alocados dinamicamente na memória Heap. Quando um objeto não possui mais nenhuma referência apontando para ele, o garbage collector o desaloca.
* **Desalocação por Escopo** 🚪: Variáveis locais, que vivem na memória Stack, são desalocadas **imediatamente** assim que seu escopo de execução termina (por exemplo, ao final da execução de uma função).

### Foco do Curso 💡

Este curso foca em **técnicas de elaboração de soluções**, não em uma linguagem específica. O importante é entender o raciocínio e as estruturas para ser capaz de implementá-los em qualquer linguagem de programação. Um bom programador deve ser capaz de "traduzir" soluções entre diferentes linguagens, utilizando ferramentas como Google e Stack Overflow quando necessário.


---

Computação paralela
CUDA - Transformada Rápida de Fourier.

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)

