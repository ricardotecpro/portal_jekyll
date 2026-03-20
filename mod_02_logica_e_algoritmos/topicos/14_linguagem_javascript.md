---
layout: default
title: Linguagem JavaScript 📜
---

# Linguagem JavaScript 📜

Bem-vindo ao guia de JavaScript (JS), a linguagem de programação que impulsiona a web. Originalmente criada para adicionar interatividade às páginas da internet, hoje o JavaScript é uma linguagem multifuncional que roda em navegadores, servidores (com Node.js), aplicativos mobile e muito mais, sendo uma das tecnologias mais importantes e demandadas do mercado.

## 🛠️ Instalação e Configuração do Ambiente

Uma das grandes vantagens do JavaScript é que ele não exige uma instalação complexa para começar. Ele possui dois ambientes de execução principais:

1.  **Navegador Web (Browser)**:

    * **Instalação**: Nenhuma\! Todo navegador moderno (Chrome, Firefox, Edge) já possui um motor JavaScript integrado.
    * **Como usar**: Pressione a tecla `F12` em qualquer página da web para abrir as **Ferramentas de Desenvolvedor** e vá para a aba **"Console"**. Você pode escrever e executar código JavaScript diretamente ali.

2.  **Node.js (Fora do Navegador)**:

    * **Instalação**: Para rodar JavaScript no seu computador (para criar servidores, scripts de automação, etc.), você precisa do **Node.js**. Baixe a versão LTS do [site oficial](https://nodejs.org/). O instalador já inclui o `npm` (Node Package Manager), que é usado para gerenciar bibliotecas.
    * **Como usar**: Após instalar, você pode criar um arquivo (ex: `meu_programa.js`) e executá-lo no terminal com o comando: `node meu_programa.js`.

### IDE (Ambiente de Desenvolvimento Integrado)

* **Visual Studio Code (Recomendado)**: O VS Code é a escolha principal para desenvolvimento JavaScript. Ele oferece suporte nativo excelente, além de extensões poderosas como "Prettier" para formatação de código e "ESLint" para encontrar erros e forçar boas práticas.

### 🚀 Seu Primeiro Programa em JavaScript

Vamos ver como executar um "Olá, Mundo\!" nos dois ambientes.

**No Console do Navegador ou em um arquivo com Node.js:**

```javascript
console.log("Ola, Universo JavaScript!");
```

`console.log()` é a função universal para imprimir informações no console, seja no navegador ou no terminal do Node.js.

## 📊 Tipos de Dados e Variáveis

JavaScript é uma linguagem de **tipagem dinâmica**, assim como Python. O tipo de uma variável é determinado pelo valor que ela recebe. Para declarar variáveis, usamos as palavras-chave `let` (para valores que podem mudar) e `const` (para valores constantes).

| Significado | Tipo em JavaScript | Observação |
| :--- | :--- | :--- |
| Número | `number` | Usado tanto para inteiros quanto para números de ponto flutuante. Não há distinção entre `int` e `float`. |
| Texto | `string` | Para sequências de caracteres. Pode ser declarado com aspas simples (`'...'`), duplas (`"..."`) ou crases (`` `...` ``). |
| Valor Lógico | `boolean` | Aceita apenas os valores `true` ou `false`. |
| Nulo Intencional | `null` | Representa a ausência intencional de um valor de objeto. |
| Não Definido | `undefined` | Uma variável que foi declarada, mas ainda não teve um valor atribuído. |
| Objeto | `object` | Usado para coleções de dados mais complexas e é a base para quase tudo em JS. |

## 📝 Declaração e Formatação de Saída

Para construir strings com variáveis, a forma mais moderna e legível é usar **Template Literals**, que são strings declaradas entre crases (`` ` ``) e permitem a interpolação de variáveis com `${...}`.

```javascript
// Usamos 'let' para variáveis que podem ser alteradas e 'const' para constantes.
const nome = "Gabriel Lima"; //
let idade = 22; //
let salario = 5500.99; //
let isEstudante = true; //

// Usando Template Literals para uma saída limpa e formatada.
console.log(`NOME = ${nome}`); //
console.log(`IDADE = ${idade}`); //
console.log(`SALARIO = ${salario.toFixed(2)}`); // O método .toFixed(2) formata o número para 2 casas decimais.
console.log(`É ESTUDANTE? = ${isEstudante}`); //
```

## 🔢 Operadores

### Aritméticos

| Operador | Significado |
| :---: | :--- |
| `+` | Adição |
| `-` | Subtração |
| `*` | Multiplicação |
| `/` | Divisão |
| `%` | Resto da divisão (módulo) |
| `**` | Exponenciação |

### Comparativos

| Operador | Significado |
| :---: | :--- |
| `==` | Igual (compara apenas o valor, pode converter o tipo) |
| `===` | Estritamente igual (compara o valor E o tipo) |
| `!=` | Diferente |
| `!==` | Estritamente diferente |
| `>` | Maior que |
| `<` | Menor que |
| `>=` | Maior ou igual a |
| `<=` | Menor ou igual a |

**Importante**: Em JavaScript, prefira **sempre** usar a comparação estrita (`===` e `!==`). Isso evita bugs inesperados causados pela conversão automática de tipos que o `==` faz (por exemplo, `7 == "7"` é `true`, mas `7 === "7"` é `false`).

### Lógicos

| Operador | Significado |
| :---: | :--- |
| `&&` | E |
| `||` | OU |
| `!` | NÃO |

## 📥 Entrada de Dados

A forma de receber dados do usuário varia conforme o ambiente de execução.

### No Navegador

No navegador, a maneira mais simples de pedir uma informação ao usuário é com a função `prompt()`.

```javascript
// prompt() exibe uma caixa de diálogo e sempre retorna uma string.
let nome = prompt("Digite seu nome:");
let idade = parseInt(prompt("Digite sua idade:")); // parseInt() converte a string para um número inteiro.
let altura = parseFloat(prompt("Digite sua altura:")); // parseFloat() converte para número com decimais.

console.log(`Olá, ${nome}! Você tem ${idade} anos e ${altura}m de altura.`);
```

### No Node.js

Para ler dados de forma síncrona no terminal com Node.js (semelhante a outras linguagens), podemos usar uma biblioteca externa. Uma opção simples para iniciantes é a `readline-sync`.

1.  **Instale a biblioteca**: No seu terminal, execute `npm install readline-sync`.
2.  **Use no seu código**:

<!-- end list -->

```javascript
// Importa a biblioteca instalada.
const readline = require('readline-sync');

// Usa os métodos para fazer perguntas e ler as respostas.
const nome = readline.question("Digite seu nome: ");
const idade = readline.questionInt("Digite sua idade: ");
const salario = readline.questionFloat("Digite seu salario: ");

console.log("
--- DADOS REGISTRADOS ---");
console.log(`Nome: ${nome}`);
console.log(`Idade: ${idade}`);
console.log(`Salario: ${salario.toFixed(2)}`);
```

## 🔀 Estruturas de Controle

JavaScript usa chaves `{}` para delimitar blocos de código, de forma similar a C, Java e C\#.

### Estrutura Condicional (`if/else if/else`)

```javascript
const hora = new Date().getHours(); // Pega a hora atual do sistema.

if (hora < 12) {
    console.log("Bom dia!"); //
} else if (hora < 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!"); //
}
```

### Estrutura de Repetição `while`

```javascript
let soma = 0;
// No Node.js com readline-sync
let numero = require('readline-sync').questionInt("Digite um numero (0 para sair): ");

while (numero !== 0) {
    soma = soma + numero;
    numero = require('readline-sync').questionInt("Digite outro numero (0 para sair): ");
}

console.log(`SOMA FINAL = ${soma}`);
```

### Estrutura de Repetição `for`

O laço `for` clássico é idêntico ao de C/Java/C\#.

```javascript
const n = require('readline-sync').questionInt("Quantos numeros voce quer somar? ");
let soma = 0;

for (let i = 0; i < n; i++) {
    let valor = require('readline-sync').questionInt(`Digite o valor #${i + 1}: `);
    soma += valor;
}

console.log(`SOMA = ${soma}`);
```

## 📏 Vetores e Matrizes (Arrays)

O `Array` em JavaScript é uma estrutura de dados extremamente versátil e dinâmica, que pode crescer e diminuir de tamanho.

### Vetores (Arrays)

```javascript
const n = require('readline-sync').questionInt("Quantos numeros voce vai digitar? ");
const vetor = []; // Declara um array vazio.

for (let i = 0; i < n; i++) {
    let numero = require('readline-sync').questionFloat(`Digite o numero #${i + 1}: `);
    vetor.push(numero); // .push() adiciona um elemento ao final do array.
}

console.log("
NUMEROS DIGITADOS:");
for (let i = 0; i < vetor.length; i++) {
    console.log(vetor[i].toFixed(1));
}
```

### Matrizes (Arrays de Arrays)

Uma matriz em JavaScript é um array cujos elementos são outros arrays.

```javascript
const m = require('readline-sync').questionInt("Quantas linhas tera a matriz? ");
const n = require('readline-sync').questionInt("Quantas colunas tera a matriz? ");

const matriz = [];

for (let i = 0; i < m; i++) {
    matriz[i] = []; // Cria uma linha (um array vazio)
    for (let j = 0; j < n; j++) {
        matriz[i][j] = require('readline-sync').questionInt(`Elemento [${i},${j}]: `);
    }
}

console.log("
MATRIZ DIGITADA:");
for (let i = 0; i < m; i++) {
    console.log(matriz[i].join(' ')); // .join(' ') une os elementos da linha com um espaço.
}
```

## 🐞 Depuração (Debugging) em JavaScript

### Debugging no Navegador

1.  Abra a página e pressione `F12` para abrir as Ferramentas de Desenvolvedor.
2.  Vá para a aba **Sources** (Fontes).
3.  Encontre seu arquivo `.js` na lista de arquivos.
4.  Clique na margem esquerda, ao lado do número da linha, para adicionar um **breakpoint** (ponto de parada).
5.  Atualize a página ou execute a ação que dispara o código. A execução pausará no seu breakpoint, permitindo que você inspecione variáveis.

### Debugging no VS Code (com Node.js)

1.  Abra seu arquivo `.js`.
2.  Clique na margem à esquerda de uma linha para adicionar um **breakpoint**.
3.  Pressione `F5` para iniciar o depurador. Se for a primeira vez, o VS Code pode pedir para você selecionar o ambiente (escolha **Node.js**).
4.  A execução pausará no breakpoint, e você poderá inspecionar variáveis, controlar a execução (com `F10` para passar por cima) e ver a pilha de chamadas no painel esquerdo.

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)

