---
layout: default
title: **Módulo 17: Paradigmas de Programação**
---

# **Módulo 17: Paradigmas de Programação**

## Introdução ao Módulo

Bem-vindo ao Módulo 17\! Até agora, você aprendeu a escrever código que funciona. Neste módulo, vamos dar um passo atrás para entender *como* pensamos sobre a estrutura do código. Um paradigma de programação é um estilo fundamental, uma "escola de pensamento" que molda a forma como resolvemos problemas e organizamos nossas soluções.

Compreender os diferentes paradigmas fará de você um programador mais versátil, capaz de escolher a ferramenta certa para o trabalho certo e de entender por que suas linguagens favoritas funcionam da maneira que funcionam.

-----

### **Aula 1: O Que é um Paradigma? Imperativo vs. Declarativo**

#### 1\. Definição de Paradigma

  * Não é uma linguagem ou uma ferramenta, mas sim um **modelo** ou um **estilo** de programação.
  * Define a visão do programador sobre como a computação ocorre e como o código deve ser estruturado.

#### 2\. A Grande Divisão: As Duas Famílias Principais

  * **Paradigma Imperativo:**

      * **Foco:** **Como** fazer uma tarefa.
      * **Descrição:** O programador dá ao computador uma sequência explícita de comandos que alteram o estado do programa para chegar ao resultado final.
      * **Analogia:** Uma receita de bolo, com instruções passo a passo.

  * **Paradigma Declarativo:**

      * **Foco:** **O que** deve ser feito.
      * **Descrição:** O programador descreve a lógica e o resultado desejado, mas não detalha o fluxo de controle (o "como"). A linguagem se encarrega de encontrar a solução.
      * **Analogia:** Encomendar um bolo mostrando uma foto, sem detalhar como o confeiteiro deve prepará-lo.

-----

### **Aula 2: Paradigma Imperativo - Procedural e Orientado a Objetos**

#### 1\. A Base: Programação Procedural

  * **Conceito:** Uma evolução do código imperativo "puro", onde as instruções são agrupadas em **procedimentos** (ou funções/sub-rotinas).
  * **Características:**
      * Foco em uma sequência de ações.
      * Uso de variáveis para armazenar o **estado** (que é mutável).
      * Estruturas de controle explícitas (`for`, `while`, `if/else`).
  * **Linguagens Clássicas:** C, Pascal, Fortran.

#### 2\. A Evolução: Programação Orientada a Objetos (POO)

  * **Conceito:** Organiza o código em torno de **objetos**, que agrupam dados (atributos) e os comportamentos que operam nesses dados (métodos). É o paradigma mais popular na indústria.
  * **Foco:** Modelar o mundo real de forma mais próxima.
  * **Os 4 Pilares da POO:**
    1.  **Encapsulamento:** Esconder os detalhes internos de um objeto e expor apenas o necessário.
    2.  **Abstração:** Focar nos aspectos essenciais de um objeto, ignorando detalhes irrelevantes.
    3.  **Herança:** Permitir que uma classe (filha) herde atributos e métodos de outra classe (mãe), promovendo o reuso de código.
    4.  **Polimorfismo:** A capacidade de um objeto de assumir muitas formas, permitindo que objetos de classes diferentes respondam à mesma mensagem (chamada de método) de maneiras específicas.
  * **Linguagens:** Java, C\#, Python, Ruby, C++.

-----

### **Aula 3: Paradigma Declarativo - A Programação Funcional**

#### 1\. Introdução à Programação Funcional (PF)

  * **Conceito:** Trata a computação como a avaliação de funções matemáticas. É o subtipo mais proeminente do paradigma declarativo.
  * **Foco:** Evitar estado mutável e efeitos colaterais.

#### 2\. Conceitos-Chave da Programação Funcional

  * **Imutabilidade:** Dados não podem ser alterados após sua criação. Em vez de modificar um dado, cria-se um novo.
  * **Funções Puras:** Uma função que, para a mesma entrada, sempre produz a mesma saída e não tem efeitos colaterais observáveis (não altera nada fora de seu escopo).
  * **Funções de Primeira Classe (First-Class Citizens):** Funções podem ser tratadas como qualquer outra variável: podem ser passadas como argumentos, retornadas de outras funções e atribuídas a variáveis.
  * **Composição de Funções:** Construir funções complexas combinando funções mais simples. `h(x) = f(g(x))`
  * **Exemplo Prático:** Usar `.map()`, `.filter()` e `.reduce()` em vez de um laço `for`.

<!-- end list -->

```javascript
// Imperativo
const numeros = [1, 2, 3, 4, 5];
const dobrados = [];
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > 2) {
    dobrados.push(numeros[i] * 2);
  }
}

// Declarativo (Funcional)
const dobradosFuncional = numeros
  .filter(n => n > 2)
  .map(n => n * 2);
```

  * **Linguagens/Features:** Haskell, Lisp, F\#, JavaScript (moderno), Python, Java (Streams API).

-----

### **Aula 4: Paradigma Declarativo - A Programação Lógica**

#### 1\. Introdução à Programação Lógica

  * **Conceito:** Um paradigma baseado em lógica formal. O programa é uma base de conhecimento de fatos e regras.
  * **Foco:** Provar se uma afirmação é verdadeira com base no conhecimento existente.

#### 2\. Componentes da Programação Lógica

  * **Fatos:** Declarações incondicionalmente verdadeiras sobre o problema.
      * `progenitor(joao, ana).` // João é progenitor de Ana.
  * **Regras:** Declarações condicionais para inferir novos fatos.
      * `avô(A, B) :- progenitor(A, C), progenitor(C, B).` // A é avô de B se A é progenitor de C, e C é progenitor de B.
  * **Consultas (Queries):** Perguntas feitas ao sistema, que ele tentará provar.
      * `?- avô(joao, X).` // Quem são os netos de João?

#### 3\. Mecanismos Internos

  * **Unificação e Backtracking:** Como a linguagem busca e testa diferentes caminhos para encontrar uma solução.
  * **Linguagem Principal:** Prolog.
  * **Casos de Uso:** Inteligência Artificial, sistemas especialistas, processamento de linguagem natural.

-----

### **Aula 5: Resumo e O Mundo Multi-paradigma**

#### 1\. Tabela Comparativa dos Paradigmas

| Paradigma | Foco Principal | Estado | Fluxo de Controle | Exemplo de Linguagem |
| :--- | :--- | :--- | :--- | :--- |
| **Procedural** | Como fazer (sequência de passos) | Mutável e central | `if`, `while`, `for` | C |
| **Orientado a Objetos** | Como fazer (modelagem de objetos) | Encapsulado nos objetos, mutável | Métodos dos objetos | Java, C\# |
| **Funcional** | O que fazer (transformação de dados) | Evitado, imutável | Composição de funções | Haskell, JavaScript |
| **Lógico**| O que é verdade (dedução lógica) | Implícito nos fatos | Mecanismo de inferência | Prolog |

#### 2\. Linguagens Multi-paradigma

  * **Conceito:** A maioria das linguagens modernas não é "pura" e permite que o programador utilize conceitos de diferentes paradigmas.
  * **Exemplos:**
      * **Python:** É orientado a objetos, mas suporta fortemente programação procedural e funcional (com `lambda`, `map`, etc.).
      * **JavaScript:** Começou procedural, tornou-se orientado a objetos (baseado em protótipos) e hoje é uma das linguagens funcionais mais populares.
      * **Java:** Fortemente orientado a objetos, mas a partir do Java 8, adotou muitos conceitos funcionais com a API de Streams.

#### 3\. Conclusão do Módulo

  * Não existe um "melhor paradigma". A escolha depende do problema a ser resolvido.
  * Entender os diferentes paradigmas amplia seu repertório e permite criar soluções mais limpas, eficientes e elegantes. O objetivo é saber escolher a abordagem certa para cada contexto.


---

### 🚀 [ricardotecpro.github.io](https://ricardotecpro.github.io/)

