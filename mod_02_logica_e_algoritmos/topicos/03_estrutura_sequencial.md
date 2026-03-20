---
layout: default
title: 🚀 Estrutura Sequencial em Programação
---

# 🚀 Estrutura Sequencial em Programação

Este capítulo aborda os conceitos fundamentais da **estrutura sequencial**, a base para a construção de qualquer algoritmo. Nela, os comandos são executados em uma sequência lógica, um após o outro, de cima para baixo.

## 🤔 O que é a Estrutura Sequencial?

A "estrutura sequencial" recebe esse nome para destacar que as instruções de um algoritmo são executadas em uma ordem predefinida, passo a passo. Um algoritmo só funciona corretamente se seus comandos seguirem uma sequência lógica.

Imagine que você precisa calcular a soma de dois números. Primeiro, você precisa conhecer esses números e, só depois, realizar a soma.

**Exemplo da ordem correta:**

```java
// 1. Atribui o valor 15 à variável x
int x = 15;

// 2. Atribui o valor 25 à variável y
int y = 25;

// 3. Soma x e y e guarda o resultado
int soma = x + y; // Correto!
```

Se a ordem for invertida, o programa tentará somar variáveis que ainda não têm valor, resultando em um erro.

**Exemplo da ordem incorreta:**

```java
// 1. Tenta somar x e y, que ainda não foram definidos
int soma = x + y; // Errado!

// 2. Só depois define os valores
int x = 15;
int y = 25;
```

## 💻 As Três Operações Fundamentais

Um programa de computador, em sua essência, realiza três operações básicas:

- **Entrada de dados**: Receber informações do usuário ou de outra fonte.
- **Processamento de dados**: Realizar cálculos e manipular as informações recebidas.
- **Saída de dados**: Apresentar os resultados para o usuário.

## 📦 Variáveis e Tipos de Dados

Para um programa funcionar, ele precisa armazenar e manipular dados. Esses dados são guardados em **variáveis**.

De forma simplificada, uma variável é um "espaço" na memória RAM do computador reservado para armazenar um dado durante a execução do programa.

### 📜 Declaração de Variáveis

Cada variável possui:

- **Nome** (ou identificador): Para que possamos nos referir a ela.
- **Tipo**: Define que tipo de dado ela pode armazenar (número, texto, etc.).
- **Valor**: O dado que está armazenado nela.
- **Endereço**: Sua localização na memória.

Em Java, a sintaxe de declaração é:

```java
<tipo> <nome>;

// Exemplos
int idade;
double altura;
String nome;
```

### 🏷️ Nomenclatura de Variáveis (Boas Práticas)

Para manter o código legível e funcional, siga estas regras ao nomear variáveis:

- **Não pode começar com dígito**: Use uma letra ou o caractere `_`.
- **Não pode ter espaços em branco**.
- **Não use acentos ou caracteres especiais** (como `ç` ou `~`).
- **Use o padrão "Camel Case"**: A primeira palavra começa com letra minúscula e as palavras seguintes começam com maiúscula.

| Errado | Correto |
| :--- | :--- |
| `int 5minutos;` | `int cincoMinutos;` |
| `double salário;` | `double salario;` |
| `String nome do funcionario;` | `String nomeDoFuncionario;` |

### 📊 Tipos de Dados Primitivos em Java

Estes são os tipos de dados mais comuns que você usará:

| Tipo | Descrição | Exemplo de Valor |
| :--- | :--- |
| `int` | Armazena números inteiros. | `35` |
| `double` | Armazena números com ponto flutuante (decimais). | `1.75` |
| `char` | Armazena um único caractere. | `'M'` |
| `String`| Armazena sequências de caracteres (texto). | `"Maria da Silva"` |
| `boolean`| Armazena um valor lógico de verdade. | `true` ou `false` |

## ⚙️ Processamento de Dados

O processamento ocorre quando o programa realiza cálculos ou manipula dados. A principal ferramenta para isso é o **comando de atribuição**, representado pelo sinal de igual (`=`) em Java.

**Sintaxe:** `<variável> = <expressão>;`

A regra é simples:

1.  A expressão à direita do `=` é totalmente calculada.
2.  O resultado final é armazenado na variável à esquerda.

### ➕ Expressões Aritméticas

São combinações de números, variáveis e operadores que resultam em um valor numérico.

**Operadores Aritméticos em Java:**

| Operador | Significado |
| :--- | :--- |
| `+` | Adição |
| `-` | Subtração |
| `*` | Multiplicação |
| `/` | Divisão |
| `%` | Módulo (resto da divisão inteira) |

**Ordem de Precedência:**

1.  `*`, `/`, `%` (são avaliados primeiro, da esquerda para a direita)
2.  `+`, `-` (são avaliados por último, da esquerda para a direita)

*Use parênteses `()` para forçar uma ordem de cálculo diferente.*

**Exemplos de Expressões:**

- `5 + 3 * 2` → `5 + 6` → **Resultado: 11**
- `(5 + 3) * 2` → `8 * 2` → **Resultado: 16**
- `70 / (5 + 2) * 4` → `70 / 7 * 4` → `10 * 4` → **Resultado: 40**
- `15 % 4` (15 dividido por 4 dá 3 e sobra 3) → **Resultado: 3**

## 🖥️ Saída de Dados

A saída de dados é como o programa apresenta informações e resultados ao usuário, geralmente na tela (console). Em Java, usamos os seguintes comandos:

- `System.out.println()`: Escreve o conteúdo na tela e **salta para a próxima linha**.
- `System.out.print()`: Escreve o conteúdo na tela e **permanece na mesma linha**.

### Exemplo Prático: Ficha de Cadastro

Vamos criar variáveis, atribuir valores e exibi-las de forma organizada.

```java
// Declarando e inicializando as variáveis
String produto1 = "Smartphone";
String produto2 = "Notebook";

double preco1 = 2500.99;
double preco2 = 4250.00;

int idade = 25;
int codigo = 1024;
char genero = 'M';

// Exibindo os dados na tela
System.out.println("Produtos:");
System.out.printf("O produto %s custa R$ %.2f
", produto1, preco1);
System.out.printf("O produto %s custa R$ %.2f
", produto2, preco2);
System.out.println(); // Pula uma linha em branco
System.out.println("Código = " + codigo);
System.out.println(); // Pula uma linha em branco
System.out.println("Dados da pessoa: gênero " + genero + " e idade " + idade);
```

**Saída Esperada:**

```
Produtos:
O produto Smartphone custa R$ 2500,99
O produto Notebook custa R$ 4250,00

Código = 1024

Dados da pessoa: gênero M e idade 25
```

> **Nota:** Usamos `System.out.printf()` para formatar os preços com duas casas decimais. `%.2f` é um especificador que formata um número de ponto flutuante (`f`) com duas casas decimais (`.2`), e `
` quebra a linha.

## ⌨️ Entrada de Dados

A entrada de dados permite que o programa se torne interativo, lendo informações digitadas pelo usuário no teclado. Em Java, a forma mais comum de fazer isso é usando a classe `Scanner`.

Primeiro, você precisa importar a classe e criar um objeto `Scanner`:

```java
import java.util.Scanner; // Importação necessária

public class Programa {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in); // Cria o objeto Scanner

        // Agora você pode ler os dados
        // ...

        sc.close(); // Boa prática: fechar o scanner ao final
    }
}
```

### Lendo Diferentes Tipos de Dados

```java
Scanner sc = new Scanner(System.in);

System.out.print("Digite seu nome: ");
String nome = sc.nextLine(); // Lê uma linha de texto

System.out.print("Digite sua idade: ");
int idade = sc.nextInt(); // Lê um número inteiro

System.out.print("Digite seu salário: ");
double salario = sc.nextDouble(); // Lê um número double

System.out.println("DADOS DIGITADOS:");
System.out.println("Nome: " + nome);
System.out.println("Idade: " + idade);
System.out.printf("Salário: R$ %.2f
", salario);

sc.close();
```

> **Atenção:** Ao ler um número (`nextInt` ou `nextDouble`) e depois um texto com `nextLine`, uma quebra de linha "invisível" pode ser consumida pelo `nextLine`, causando um pulo indesejado. Para corrigir, consuma essa quebra de linha extra com um `sc.nextLine()` adicional antes de ler o texto.

## 🧮 Funções Matemáticas em Java

Java oferece a classe `Math` com diversas funções matemáticas prontas para uso.

| Exemplo em Java | Significado |
| :--- | :--- |
| `A = Math.sqrt(x);` | A variável `A` recebe a raiz quadrada de `x`. |
| `A = Math.pow(x, y);` | A variável `A` recebe o resultado de `x` elevado a `y`. |
| `A = Math.abs(x);` | A variável `A` recebe o valor absoluto (positivo) de `x`. |
| `A = Math.PI;` | A variável `A` recebe o valor de Pi (3.14159...). |

### Exemplo: Fórmula de Bhaskara

Para calcular as raízes de uma equação de segundo grau ($$ax^2 + bx + c = 0$$), usamos as funções da classe `Math`.

$$ \Delta = b^2 - 4ac $$
$$ x = \frac{-b \pm \sqrt{\Delta}}{2a} $$

```java
double a = 1.0, b = -3.0, c = -4.0;

double delta = Math.pow(b, 2.0) - 4 * a * c;
double x1 = (-b + Math.sqrt(delta)) / (2.0 * a);
double x2 = (-b - Math.sqrt(delta)) / (2.0 * a);

System.out.println("Delta = " + delta);   // Saída: Delta = 25.0
System.out.println("x1 = " + x1);       // Saída: x1 = 4.0
System.out.println("x2 = " + x2);       // Saída: x2 = -1.0
```

## ✍️ Exercícios Práticos Resolvidos em Java

Vamos aplicar tudo o que aprendemos em alguns problemas práticos.

### Exercício 1: Cálculo de Área de Terreno

**Problema:** Fazer um programa que leia a largura e o comprimento de um terreno retangular, e também o valor do metro quadrado. Em seguida, o programa deve mostrar o valor da área do terreno e o valor do preço do terreno, ambos com duas casas decimais.

**Fórmulas:**

- `área = largura × comprimento`
- `preço = área × preço do metro quadrado`

**Solução em Java:**

```java
package curso;

import java.util.Locale;
import java.util.Scanner;

public class Terreno {

    public static void main(String[] args) {
        Locale.setDefault(Locale.US); // Para usar o ponto como separador decimal
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite a largura do terreno: ");
        double largura = sc.nextDouble();

        System.out.print("Digite o comprimento do terreno: ");
        double comprimento = sc.nextDouble();

        System.out.print("Digite o valor do metro quadrado: ");
        double valorMetroQuadrado = sc.nextDouble();

        double area = largura * comprimento;
        double preco = area * valorMetroQuadrado;

        System.out.printf("Área do terreno = %.2f
", area);
        System.out.printf("Preço do terreno = %.2f
", preco);

        sc.close();
    }
}
```

**Exemplo de Execução:**

```
Digite a largura do terreno: 15.0
Digite o comprimento do terreno: 40.0
Digite o valor do metro quadrado: 500.0
Área do terreno = 600.00
Preço do terreno = 300000.00
```

### Exercício 2: Medidas de um Retângulo

**Problema:** Fazer um programa para ler as medidas da base e da altura de um retângulo. Em seguida, mostrar o valor da área, do perímetro e da diagonal deste retângulo, com quatro casas decimais.

**Fórmulas:**

- `área = base × altura`
- `perímetro = 2 × (base + altura)`
- `diagonal = √(base² + altura²)`

**Solução em Java:**

```java
package curso;

import java.util.Locale;
import java.util.Scanner;

public class Retangulo {

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite a base do retângulo: ");
        double base = sc.nextDouble();

        System.out.print("Digite a altura do retângulo: ");
        double altura = sc.nextDouble();

        double area = base * altura;
        double perimetro = 2 * (base + altura);
        double diagonal = Math.sqrt(Math.pow(base, 2.0) + Math.pow(altura, 2.0));

        System.out.printf("ÁREA = %.4f
", area);
        System.out.printf("PERÍMETRO = %.4f
", perimetro);
        System.out.printf("DIAGONAL = %.4f
", diagonal);

        sc.close();
    }
}
```

**Exemplo de Execução:**

```
Digite a base do retângulo: 6.0
Digite a altura do retângulo: 8.0
ÁREA = 48.0000
PERÍMETRO = 28.0000
DIAGONAL = 10.0000
```

### 🛠️ Como Executar no VS Code e IntelliJ IDEA

Você pode compilar e executar todos os exemplos de código acima em qualquer uma das IDEs modernas.

#### No Visual Studio Code

1.  **Instale o Pacote de Extensões para Java**: Na aba de Extensões (`Ctrl+Shift+X`), procure por `Extension Pack for Java` da Microsoft e instale-o.
2.  **Crie o Arquivo**: Crie um novo arquivo com a extensão `.java` (ex: `Terreno.java`).
3.  **Cole o Código**: Copie e cole um dos exemplos no arquivo.
4.  **Execute**: Um botão **"Run"** aparecerá acima do método `main`. Clique nele para compilar e executar o código. A saída aparecerá no terminal integrado.

#### Na IntelliJ IDEA

1.  **Crie um Novo Projeto**: Vá em `File > New > Project`. Escolha `Java` e a versão do JDK.
2.  **Crie uma Nova Classe**: Na janela de projeto, clique com o botão direito na pasta `src`, vá em `New > Java Class` e dê um nome à classe (ex: `Retangulo`).
3.  **Cole o Código**: Copie e cole o código correspondente na classe criada.
4.  **Execute**: Clique com o botão direito do mouse em qualquer lugar dentro do editor de código e selecione **Run 'NomeDaClasse.main()'**. A saída aparecerá na aba "Run" na parte inferior da IDE.

---

### 🚀 [ricardotecpro.github.io](https://ricardotecpro.github.io/)

