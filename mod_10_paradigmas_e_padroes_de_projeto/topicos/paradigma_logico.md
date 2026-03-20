# Aulas sobre Linguagens de Programação Lógica

Este documento oferece uma série de aulas sobre o paradigma de programação lógica, uma abordagem fascinante e poderosa que trata a computação como um processo de dedução lógica. Diferente de dar comandos passo a passo (paradigma imperativo), aqui nós descrevemos um universo de fatos e regras e deixamos que o computador "raciocine" para encontrar as respostas.

-----

## Aula 1: Introdução ao Paradigma Lógico

Nesta primeira aula, vamos entender o que é o paradigma lógico, sua base fundamental e por que ele representa uma forma diferente de pensar sobre programação.

### O que é Programação Lógica?

O **paradigma de programação lógica** é uma forma de programação declarativa baseada na lógica formal, mais especificamente no cálculo de predicados de primeira ordem.

Em vez de escrever um algoritmo que diz **como** resolver um problema, o programador se concentra em descrever **o que** é verdade sobre o problema. O programa consiste em um conjunto de axiomas lógicos (fatos e regras), e a execução consiste em fazer uma pergunta (uma *query*) ao sistema, que tentará provar se essa pergunta é verdadeira com base no conhecimento fornecido.

A ideia central é: **Programa = Lógica + Controle**.

  * **Lógica:** O conhecimento que o programador fornece (fatos e regras).
  * **Controle:** O mecanismo de inferência que a linguagem utiliza para encontrar a solução (geralmente, o programador não precisa se preocupar com isso).

### A Base: Lógica de Predicados

As linguagens lógicas são construídas sobre a lógica matemática. Elas usam um subconjunto da lógica de predicados de primeira ordem, conhecido como **Cláusulas de Horn**. Não é preciso ser um especialista em lógica para programar, mas entender os conceitos básicos ajuda muito:

  * **Átomos:** Declarações simples que podem ser verdadeiras ou falsas. Ex: `socrates_e_homem`.
  * **Predicados:** Relações entre átomos. Ex: `mortal(socrates)`.
  * **Variáveis:** Representam objetos genéricos (geralmente começam com letra maiúscula). Ex: `mortal(X)`.
  * **Implicação (Regras):** Se uma condição é verdadeira, então uma consequência também é. Ex: "Para todo X, se X é um homem, então X é mortal".

### Por que aprender sobre Linguagens Lógicas?

  * **Resolução de Problemas Complexos:** É ideal para domínios onde as relações e a lógica são mais importantes que os algoritmos, como inteligência artificial, sistemas especialistas, processamento de linguagem natural e prova de teoremas.
  * **Mudança de Perspectiva:** Força o programador a pensar no "o quê" em vez do "como", o que pode levar a soluções mais elegantes e concisas para certos tipos de problemas.
  * **Prototipagem Rápida:** Permite criar rapidamente protótipos de sistemas baseados em regras.

-----

## Aula 2: Conceitos Fundamentais da Programação Lógica

Toda linguagem lógica se baseia em alguns pilares. Vamos explorar os blocos de construção essenciais, usando uma sintaxe inspirada na linguagem Prolog, a mais famosa do paradigma.

### 1\. Fatos (Facts)

**Fatos** são axiomas incondicionais sobre nosso domínio. Eles declaram algo que é sempre verdade. Um fato é um predicado seguido por seus argumentos (átomos) entre parênteses.

**Sintaxe:** `predicado(atomo1, atomo2, ...).` (O ponto final é crucial).

**Exemplo:** Vamos modelar relações familiares.

```prolog
% Fatos: predicado 'progenitor(Pai/Mae, Filho/Filha)'.
progenitor(joao, ana).        % João é progenitor de Ana.
progenitor(maria, joao).      % Maria é progenitora de João.
progenitor(jose, maria).      % José é progenitor de Maria.
progenitor(ana, helena).      % Ana é progenitora de Helena.
```

### 2\. Regras (Rules)

**Regras** são axiomas condicionais. Elas nos permitem inferir novos fatos a partir dos existentes. Uma regra define que uma conclusão é verdadeira **se** (if) uma ou mais condições forem verdadeiras.

**Sintaxe:** `conclusao :- condicao1, condicao2, ... .`

  * `:-` é lido como "se".
  * A vírgula `,` é lida como "e" (conjunção lógica).

**Exemplo:** Vamos definir o que significa ser um "avô" ou "avó".

```prolog
% Regra: Alguém (Avo) é avô/avó de um Neto se
%        Avo for progenitor de um Pai, E
%        esse mesmo Pai for progenitor do Neto.

avô(Avo, Neto) :-
    progenitor(Avo, Pai),
    progenitor(Pai, Neto).
```

Aqui, `Avo`, `Neto` e `Pai` são **variáveis**. A linguagem tentará encontrar valores para elas que satisfaçam ambas as condições.

### 3\. Consultas (Queries)

Uma vez que temos nossa base de conhecimento (fatos e regras), podemos fazer **consultas** para extrair informações. A execução de um programa lógico é, na verdade, a resposta a uma consulta.

**Exemplo:** Usando nosso código acima, podemos perguntar ao sistema:

  * **Consulta 1: José é avô de João?**

    ```prolog
    ?- avô(jose, joao).
    ```

    **Resposta:** `true.` (ou `yes.`)
    *Raciocínio do sistema:* Para provar `avô(jose, joao)`, eu preciso encontrar um `Pai` tal que `progenitor(jose, Pai)` e `progenitor(Pai, joao)`. Olhando os fatos, eu vejo `progenitor(jose, maria)`. Então, `Pai = maria`. Agora preciso provar `progenitor(maria, joao)`. Olho os fatos e encontro `progenitor(maria, joao)`. Ambas as condições são verdadeiras. A consulta é `true`.

  * **Consulta 2: Quem são os netos de José?**

    ```prolog
    ?- avô(jose, Neto).
    ```

    **Resposta:** `Neto = joao.`
    *Raciocínio:* O sistema busca um valor para a variável `Neto` que torne a consulta verdadeira. Ele encontra `joao` e nos informa. Se houvesse outros netos, poderíamos pedir mais soluções.

### 4\. Unificação e Backtracking

Estes são os dois mecanismos mágicos que fazem tudo funcionar:

  * **Unificação (Unification):** É o processo de encontrar substituições para as variáveis que tornem duas expressões lógicas idênticas. Na consulta `avô(jose, Neto)`, o sistema "unifica" `Avo` da regra com o átomo `jose` da consulta.
  * **Backtracking (Retrocesso):** Se o sistema de inferência segue um caminho de regras que leva a um beco sem saída (uma condição não pode ser provada), ele **retrocede** (volta atrás) para o último ponto de decisão e tenta um caminho diferente. Por exemplo, se João tivesse múltiplos filhos, o sistema testaria um de cada vez para ver qual deles leva a uma solução para a consulta.

-----

## Aula 3: Prolog na Prática

Prolog (acrônimo para *PROgramming in LOGic*) é a linguagem lógica mais conhecida e influente. Foi criada no início dos anos 1970 por Alain Colmerauer e sua equipe.

### Sintaxe Básica em Prolog

  * **Comentários:** Iniciam com `%`.
  * **Variáveis:** Começam com letra maiúscula ou sublinhado (`_`). Ex: `X`, `Pessoa`, `_QualquerCoisa`. A variável anônima `_` é usada quando não nos importamos com o valor.
  * **Átomos:** Começam com letra minúscula ou são cercados por aspas simples. Ex: `joao`, `ana`, `'Rio de Janeiro'`.
  * **Estrutura do Programa:** Um arquivo `.pl` contém uma lista de fatos e regras.

### Exemplo 1: Recursividade - Ancestrais

Como definir um ancestral? Um progenitor é um ancestral. E o progenitor de um ancestral também é um ancestral. Isso é uma definição recursiva\!

```prolog
% Fatos (base da recursão)
progenitor(joao, ana).
progenitor(maria, joao).
progenitor(jose, maria).

% Regra 1: Um progenitor direto é um ancestral.
ancestral(Anc, Desc) :-
    progenitor(Anc, Desc).

% Regra 2: O progenitor de um ancestral também é um ancestral.
ancestral(Anc, Desc) :-
    progenitor(Anc, Alguem),
    ancestral(Alguem, Desc).
```

**Consulta:** Quem são os ancestrais de Ana?

```prolog
?- ancestral(X, ana).
```

**Respostas:**
`X = joao` (pela Regra 1)
`X = maria` (pela Regra 2, onde `Alguem = joao`)
`X = jose` (pela Regra 2, onde `Alguem = maria`)

### Exemplo 2: Manipulação de Listas

Listas são uma estrutura de dados fundamental em Prolog. A sintaxe `[Cabeça | Cauda]` é usada para separar o primeiro elemento (`Cabeça`) do resto da lista (`Cauda`).

**Problema:** Verificar se um elemento pertence a uma lista.

```prolog
% Predicado: membro(Elemento, Lista)

% Caso base: X é membro de uma lista se for a cabeça dela.
membro(X, [X | _]).

% Caso recursivo: X é membro de uma lista se for membro da cauda dela.
membro(X, [_ | Cauda]) :-
    membro(X, Cauda).
```

**Consulta:** O número 3 pertence à lista `[1, 2, 3, 4]`?

```prolog
?- membro(3, [1, 2, 3, 4]).
```

**Resposta:** `true.`

-----

## Aula 4: Comparando Paradigmas e Casos de Uso

É crucial entender quando o paradigma lógico brilha e quando outras abordagens são mais adequadas.

| Característica | Paradigma Lógico | Paradigma Imperativo (C, Python) | Paradigma Funcional (Haskell, Lisp) |
| :--- | :--- | :--- | :--- |
| **Foco** | **O que** é verdade (relações). | **Como** fazer (passo a passo). | **O que** é a transformação (funções). |
| **Estado** | Implícito no banco de dados de fatos. Evita estado mutável. | Central e mutável (variáveis). | Evita estado mutável e efeitos colaterais. |
| **Fluxo de Controle** | Backtracking e unificação. | Laços, condicionais (`for`, `if`). | Composição de funções, recursão. |
| **Execução** | Resposta a uma consulta. | Execução de uma sequência de comandos. | Avaliação de uma expressão. |

### Onde as Linguagens Lógicas são Usadas?

  * **Inteligência Artificial:** Sistemas especialistas, planejamento, robótica. O IBM Watson usou Prolog em seus componentes de análise de linguagem.
  * **Processamento de Linguagem Natural (PLN):** Análise sintática e semântica de frases.
  * **Bancos de Dados:** Linguagens de consulta como Datalog são baseadas no paradigma lógico.
  * **Computação Simbólica e Prova de Teoremas:** Para manipular expressões matemáticas e lógicas.
  * **Sistemas de Configuração:** Para resolver problemas complexos de compatibilidade de componentes.

Com estas aulas, você tem uma base sólida para entender o poder e a elegância da programação lógica. É uma ferramenta que, embora não seja de uso geral como Python ou Java, é extremamente poderosa para a classe certa de problemas, abrindo novas formas de pensar sobre software e solução de problemas.