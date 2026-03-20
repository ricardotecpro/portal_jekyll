---
layout: default
title: 💻 Exercícios Resolvidos com Matrizes em Java
---

# 💻 Exercícios Resolvidos com Matrizes em Java

Esta seção apresenta uma série de problemas práticos envolvendo matrizes (arrays bidimensionais), com suas respectivas soluções completas em Java. Cada exercício foca em uma operação comum, como travessia, busca, agregação e manipulação de elementos.

> **Atenção:** Nos exemplos de execução, os dados em **vermelho** representam os valores digitados pelo usuário no console.

## 1\. Problema "diagonal\_negativos"

**Descrição:** Fazer um programa para ler um número inteiro N e uma matriz quadrada de ordem N contendo números inteiros. [cite\_start]Em seguida, o programa deve mostrar a diagonal principal e a quantidade de valores negativos da matriz[cite: 454].

### Solução em Java

```java
package exercicios;

import java.util.Scanner;

public class DiagonalNegativos {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Qual a ordem da matriz? ");
        int n = sc.nextInt();

        // Garante que a matriz não exceda o tamanho máximo de 10x10
        if (n > 10) {
            System.out.println("O número máximo para a ordem é 10.");
            n = 10;
        }

        int[][] mat = new int[n][n];
        int countNegativos = 0;

        // Leitura da matriz
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                System.out.printf("Elemento [%d,%d]: ", i, j);
                mat[i][j] = sc.nextInt();
                if (mat[i][j] < 0) {
                    countNegativos++;
                }
            }
        }

        // Saída - Diagonal Principal
        System.out.println("
DIAGONAL PRINCIPAL:");
        for (int i = 0; i < n; i++) {
            System.out.print(mat[i][i] + " ");
        }

        // Saída - Quantidade de negativos
        System.out.println("

QUANTIDADE DE NEGATIVOS = " + countNegativos);

        sc.close();
    }
}
```

### Exemplo de Execução

```
Qual a ordem da matriz? 3
Elemento [0,0]: 5
Elemento [0,1]: -3
Elemento [0,2]: 10
Elemento [1,0]: 15
Elemento [1,1]: 8
Elemento [1,2]: 2
Elemento [2,0]: 7
Elemento [2,1]: 9
Elemento [2,2]: -4

DIAGONAL PRINCIPAL:
5 8 -4 

QUANTIDADE DE NEGATIVOS = 2
```

-----

## 2\. Problema "soma\_linhas"

[cite\_start]**Descrição:** Fazer um programa para ler dois números inteiros M e N. Em seguida, ler uma matriz de M linhas e N colunas contendo números reais[cite: 474]. [cite\_start]O programa deve gerar um vetor onde cada elemento é a soma dos elementos da linha correspondente da matriz[cite: 475]. [cite\_start]Por fim, mostrar o vetor gerado[cite: 476].

### Solução em Java

```java
package exercicios;

import java.util.Locale;
import java.util.Scanner;

public class SomaLinhas {

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.print("Qual a quantidade de linhas da matriz? ");
        int m = sc.nextInt();
        System.out.print("Qual a quantidade de colunas da matriz? ");
        int n = sc.nextInt();

        double[][] mat = new double[m][n];
        double[] vetSoma = new double[m];

        // Leitura da matriz
        for (int i = 0; i < m; i++) {
            System.out.printf("Digite os elementos da %da. linha:
", i + 1);
            for (int j = 0; j < n; j++) {
                mat[i][j] = sc.nextDouble();
            }
        }

        // Calculando a soma de cada linha
        for (int i = 0; i < m; i++) {
            double soma = 0;
            for (int j = 0; j < n; j++) {
                soma += mat[i][j];
            }
            vetSoma[i] = soma;
        }

        // Saída - Vetor Gerado
        System.out.println("
VETOR GERADO:");
        for (int i = 0; i < m; i++) {
            System.out.printf("%.1f
", vetSoma[i]);
        }

        sc.close();
    }
}
```

### Exemplo de Execução

```
Qual a quantidade de linhas da matriz? 2
Qual a quantidade de colunas da matriz? 3
Digite os elementos da 1a. linha:
7.0
8.0
10.0
Digite os elementos da 2a. linha:
2.0
3.0
5.0

VETOR GERADO:
25.0
10.0
```

-----

## 3\. Problema "cada\_linha"

[cite\_start]**Descrição:** Ler um inteiro N e uma matriz quadrada de ordem N. O programa deve mostrar qual o maior elemento de cada linha, supondo que não haja empates[cite: 508].

### Solução em Java

```java
package exercicios;

import java.util.Scanner;

public class CadaLinha {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Qual a ordem da matriz? ");
        int n = sc.nextInt();

        int[][] mat = new int[n][n];

        // Leitura da matriz
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                System.out.printf("Elemento [%d,%d]: ", i, j);
                mat[i][j] = sc.nextInt();
            }
        }

        // Encontrando e mostrando o maior elemento de cada linha
        System.out.println("
MAIOR ELEMENTO DE CADA LINHA:");
        for (int i = 0; i < n; i++) {
            int maior = mat[i][0]; // Assume o primeiro como maior
            for (int j = 1; j < n; j++) {
                if (mat[i][j] > maior) {
                    maior = mat[i][j];
                }
            }
            System.out.println(maior);
        }

        sc.close();
    }
}
```

### Exemplo de Execução

```
Qual a ordem da matriz? 4
Elemento [0,0]: 5
Elemento [0,1]: -3
Elemento [0,2]: 10
Elemento [0,3]: 8
Elemento [1,0]: 15
Elemento [1,1]: 8
Elemento [1,2]: 2
Elemento [1,3]: 10
Elemento [2,0]: 7
Elemento [2,1]: 9
Elemento [2,2]: -4
Elemento [2,3]: 3
Elemento [3,0]: 8
Elemento [3,1]: -7
Elemento [3,2]: 4
Elemento [3,3]: 13

MAIOR ELEMENTO DE CADA LINHA:
10
15
9
13
```

-----

## 4\. Problema "soma\_matrizes"

[cite\_start]**Descrição:** Fazer um programa para ler duas matrizes de números inteiros, A e B, com M linhas e N colunas cada[cite: 536]. [cite\_start]Depois, gerar uma terceira matriz, C, onde cada elemento é a soma dos elementos correspondentes de A e B[cite: 537]. [cite\_start]Por fim, imprimir a matriz C gerada[cite: 538].

### Solução em Java

```java
package exercicios;

import java.util.Scanner;

public class SomaMatrizes {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Quantas linhas vai ter cada matriz? ");
        int m = sc.nextInt();
        System.out.print("Quantas colunas vai ter cada matriz? ");
        int n = sc.nextInt();

        int[][] matA = new int[m][n];
        int[][] matB = new int[m][n];
        int[][] matC = new int[m][n];

        // Leitura da Matriz A
        System.out.println("Digite os valores da matriz A:");
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                System.out.printf("Elemento [%d,%d]: ", i, j);
                matA[i][j] = sc.nextInt();
            }
        }

        // Leitura da Matriz B
        System.out.println("Digite os valores da matriz B:");
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                System.out.printf("Elemento [%d,%d]: ", i, j);
                matB[i][j] = sc.nextInt();
            }
        }

        // Gerando a Matriz C (Soma) e imprimindo
        System.out.println("
MATRIZ SOMA:");
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                matC[i][j] = matA[i][j] + matB[i][j];
                System.out.print(matC[i][j] + " ");
            }
            System.out.println();
        }

        sc.close();
    }
}
```

### Exemplo de Execução

```
Quantas linhas vai ter cada matriz? 2
Quantas colunas vai ter cada matriz? 3
Digite os valores da matriz A:
Elemento [0,0]: 3
Elemento [0,1]: 5
Elemento [0,2]: 2
Elemento [1,0]: 4
Elemento [1,1]: 5
Elemento [1,2]: 1
Digite os valores da matriz B:
Elemento [0,0]: 2
Elemento [0,1]: 4
Elemento [0,2]: 5
Elemento [1,0]: 1
Elemento [1,1]: 8
Elemento [1,2]: 8

MATRIZ SOMA:
5 9 7 
5 13 9 
```

-----

## 5\. Problema "acima\_diagonal"

**Descrição:** Ler um inteiro N e uma matriz quadrada de ordem N contendo números inteiros. [cite\_start]O programa deve mostrar a soma dos elementos que estão acima da diagonal principal[cite: 568]. Um elemento está acima da diagonal principal se o índice de sua coluna for maior que o índice de sua linha.

### Solução em Java

```java
package exercicios;

import java.util.Scanner;

public class AcimaDiagonal {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Qual a ordem da matriz? ");
        int n = sc.nextInt();
        int[][] mat = new int[n][n];
        int soma = 0;

        // Leitura da matriz
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                System.out.printf("Elemento [%d,%d]: ", i, j);
                mat[i][j] = sc.nextInt();
            }
        }

        // Somando os elementos acima da diagonal principal
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (j > i) { // Condição para estar acima da diagonal principal
                    soma += mat[i][j];
                }
            }
        }

        System.out.println("
SOMA DOS ELEMENTOS ACIMA DA DIAGONAL PRINCIPAL = " + soma);
        sc.close();
    }
}
```

### Exemplo de Execução

```
Qual a ordem da matriz? 4
Elemento [0,0]: 5
Elemento [0,1]: 2
Elemento [0,2]: 3
Elemento [0,3]: 1
Elemento [1,0]: 8
Elemento [1,1]: 2
Elemento [1,2]: 4
Elemento [1,3]: 5
Elemento [2,0]: 7
Elemento [2,1]: 3
Elemento [2,2]: 1
Elemento [2,3]: 3
Elemento [3,0]: 9
Elemento [3,1]: 12
Elemento [3,2]: 9
Elemento [3,3]: 5

SOMA DOS ELEMENTOS ACIMA DA DIAGONAL PRINCIPAL = 18
```

-----

## 6\. Problema "matriz\_geral"

[cite\_start]**Descrição:** Ler uma matriz quadrada de ordem N contendo números reais e, em seguida, executar uma série de ações: a) calcular e imprimir a soma dos elementos positivos [cite: 574][cite\_start]; b) ler um índice de linha e imprimir a linha escolhida [cite: 575][cite\_start]; c) ler um índice de coluna e imprimir a coluna escolhida [cite: 576][cite\_start]; d) imprimir a diagonal principal [cite: 577][cite\_start]; e) alterar a matriz, elevando ao quadrado todos os seus números negativos, e imprimir a matriz alterada[cite: 578].

### Solução em Java

```java
package exercicios;

import java.util.Locale;
import java.util.Scanner;

public class MatrizGeral {

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.print("Qual a ordem da matriz? ");
        int n = sc.nextInt();
        double[][] mat = new double[n][n];

        // Leitura da matriz
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                System.out.printf("Elemento [%d,%d]: ", i, j);
                mat[i][j] = sc.nextDouble();
            }
        }

        // a) Soma dos positivos
        double somaPositivos = 0;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (mat[i][j] > 0) {
                    somaPositivos += mat[i][j];
                }
            }
        }
        System.out.printf("
SOMA DOS POSITIVOS: %.1f
", somaPositivos);

        // b) Imprimir linha escolhida
        System.out.print("
Escolha uma linha: ");
        int linhaEscolhida = sc.nextInt();
        System.out.print("LINHA ESCOLHIDA: ");
        for (int j = 0; j < n; j++) {
            System.out.print(mat[linhaEscolhida][j] + " ");
        }
        System.out.println();

        // c) Imprimir coluna escolhida
        System.out.print("
Escolha uma coluna: ");
        int colunaEscolhida = sc.nextInt();
        System.out.print("COLUNA ESCOLHIDA: ");
        for (int i = 0; i < n; i++) {
            System.out.print(mat[i][colunaEscolhida] + " ");
        }
        System.out.println();

        // d) Imprimir diagonal principal
        System.out.print("
DIAGONAL PRINCIPAL: ");
        for (int i = 0; i < n; i++) {
            System.out.print(mat[i][i] + " ");
        }
        System.out.println();

        // e) Alterar matriz e imprimir
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (mat[i][j] < 0) {
                    mat[i][j] = Math.pow(mat[i][j], 2);
                }
            }
        }

        System.out.println("
MATRIZ ALTERADA:");
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                System.out.print(mat[i][j] + " ");
            }
            System.out.println();
        }

        sc.close();
    }
}
```

### Exemplo de Execução

```
Qual a ordem da matriz? 3
Elemento [0,0]: 7.0
Elemento [0,1]: -8.0
Elemento [0,2]: 10.0
Elemento [1,0]: -2.0
Elemento [1,1]: 3.0
Elemento [1,2]: 5.0
Elemento [2,0]: 11.0
Elemento [2,1]: -15.0
Elemento [2,2]: 4.0

SOMA DOS POSITIVOS: 40.0

Escolha uma linha: 1
LINHA ESCOLHIDA: -2.0 3.0 5.0 

Escolha uma coluna: 2
COLUNA ESCOLHIDA: 10.0 5.0 4.0 

DIAGONAL PRINCIPAL: 7.0 3.0 4.0 

MATRIZ ALTERADA:
7.0 64.0 10.0 
4.0 3.0 5.0 
11.0 225.0 4.0 
```


---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)

