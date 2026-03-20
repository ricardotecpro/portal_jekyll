---
layout: default
title: ☕ Java e Orientação a Objetos
---

# ☕ Java e Orientação a Objetos
## 📐 Exercícios de Fixação: 08 Exercícios em Java: Memória Vetores e Listas

---
08 

## 📝 Problema 1: Números Negativos

**Enunciado:** Faça um programa que leia um número inteiro positivo N (máximo de 10) e, em seguida, leia N números inteiros, armazenando-os em um vetor. Ao final, o programa deve exibir apenas os números negativos que foram digitados.

### Conceitos-Chave
* **Vetores (Arrays):** Estruturas de dados que armazenam uma coleção de elementos do mesmo tipo em uma sequência contínua de memória. Em Java, um vetor é declarado com `tipo[] nomeDoVetor = new tipo[tamanho];`.
* **Entrada de Dados (`Scanner`):** A classe `java.util.Scanner` é utilizada para ler dados de entrada do usuário a partir do console.
* **Estrutura de Repetição (`for`):** Ideal para percorrer coleções de dados, como vetores. Usaremos um loop `for` para preencher o vetor e outro para verificar os números negativos.
* **Estrutura Condicional (`if`):** Permite executar um bloco de código apenas se uma determinada condição for verdadeira. Neste caso, usaremos `if` para testar se um número é menor que zero.

### Exemplo Modificado

> ```
> Quantos numeros voce vai digitar? 5
>
> Digite um numero: 10
> Digite um numero: -15
> Digite um numero: -8
> Digite um numero: 0
> Digite um numero: 23
>
> NUMEROS NEGATIVOS:
> -15
> -8
> ```

### Código de Exemplo em Java

```java
package exercicios.vetores;

import java.util.Locale;
import java.util.Scanner;

public class ProgramaNegativos {

    public static void main(String[] args) {
        // Define o Locale para usar o ponto como separador decimal
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.print("Quantos numeros voce vai digitar? ");
        int n = sc.nextInt();

        // Declara e instancia o vetor com o tamanho informado
        int[] vetor = new int[n];

        // Loop para ler e armazenar os números no vetor
        for (int i = 0; i < vetor.length; i++) {
            System.out.print("Digite um numero: ");
            vetor[i] = sc.nextInt();
        }

        System.out.println("
NUMEROS NEGATIVOS:");

        // Loop para verificar e imprimir os números negativos
        for (int i = 0; i < vetor.length; i++) {
            if (vetor[i] < 0) {
                System.out.println(vetor[i]);
            }
        }

        sc.close();
    }
}
```

### 🚀 Como Executar o Código

**No IntelliJ IDEA:**
1.  Crie um novo projeto Java.
2.  Dentro da pasta `src`, crie os pacotes `exercicios.vetores`.
3.  Crie uma nova classe Java chamada `ProgramaNegativos` dentro do pacote `vetores`.
4.  Copie e cole o código acima.
5.  Clique com o botão direito no arquivo e selecione **Run 'ProgramaNegativos.main()'**.

**No Visual Studio Code:**
1.  Certifique-se de ter o **Extension Pack for Java** instalado.
2.  Crie uma nova pasta para o seu projeto e abra-a no VS Code.
3.  Crie a estrutura de pastas `src/exercicios/vetores`.
4.  Crie um novo arquivo chamado `ProgramaNegativos.java` dentro da pasta `vetores`.
5.  Copie e cole o código acima.
6.  Clique no botão **Run** que aparece acima do método `main`.

---

## 📊 Problema 2: Soma e Média de Vetor

**Enunciado:** Faça um programa que leia N números reais e os armazene em um vetor. Em seguida, o programa deve:
1.  Imprimir todos os elementos do vetor.
2.  Mostrar na tela a soma e a média dos elementos do vetor.

### Conceitos-Chave
* **Variáveis de Acumulação:** Uma variável (como `soma`) é usada dentro de um loop para acumular valores a cada iteração.
* **Cálculo de Média:** A média é calculada dividindo-se a soma total dos elementos pela quantidade de elementos.
* **Formatação de Saída:** Utilização de `System.out.printf()` para formatar números de ponto flutuante com um número específico de casas decimais.

### Exemplo Modificado

> ```
> Quantos numeros voce vai digitar? 3
>
> Digite um numero: 15.5
> Digite um numero: 10.0
> Digite um numero: 9.5
>
> VALORES = 15.5 10.0 9.5
> SOMA = 35.00
> MEDIA = 11.67
> ```

### Código de Exemplo em Java

```java
package exercicios.vetores;

import java.util.Locale;
import java.util.Scanner;

public class ProgramaSomaVetor {

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.print("Quantos numeros voce vai digitar? ");
        int n = sc.nextInt();

        double[] vetor = new double[n];

        for (int i = 0; i < vetor.length; i++) {
            System.out.print("Digite um numero: ");
            vetor[i] = sc.nextDouble();
        }

        double soma = 0.0;
        for (int i = 0; i < vetor.length; i++) {
            soma += vetor[i]; // Acumula os valores na variável 'soma'
        }

        double media = soma / vetor.length; // Calcula a média

        System.out.print("
VALORES = ");
        for (int i = 0; i < vetor.length; i++) {
            System.out.printf("%.1f ", vetor[i]);
        }

        System.out.printf("
SOMA = %.2f
", soma);
        System.out.printf("MEDIA = %.2f
", media);

        sc.close();
    }
}
```

---

## 🧍 Problema 3: Alturas

**Enunciado:** Fazer um programa para ler nome, idade e altura de N pessoas. Depois, mostrar na tela a altura média e a porcentagem de pessoas com menos de 16 anos, bem como os seus nomes.

### Conceitos-Chave
* **Vetores Paralelos:** Utilização de múltiplos vetores para armazenar diferentes tipos de informações relacionadas pelo mesmo índice. Por exemplo, `nomes[i]`, `idades[i]`, e `alturas[i]` se referem à i-ésima pessoa.
* **Cálculo de Porcentagem:** A porcentagem é calculada pela fórmula: `(parte / total) * 100`.

### Exemplo Modificado

> ```
> Quantas pessoas serao digitadas? 4
> Dados da 1a pessoa:
> Nome: Ana
> Idade: 17
> Altura: 1.65
>
> Dados da 2a pessoa:
> Nome: Bruno
> Idade: 15
> Altura: 1.72
>
> Dados da 3a pessoa:
> Nome: Clara
> Idade: 14
> Altura: 1.60
>
> Dados da 4a pessoa:
> Nome: Daniel
> Idade: 22
> Altura: 1.80
>
> Altura média: 1.69
> Pessoas com menos de 16 anos: 50.0%
> Bruno
> Clara
> ```

### Código de Exemplo em Java

```java
package exercicios.vetores;

import java.util.Locale;
import java.util.Scanner;

public class ProgramaAlturas {

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.print("Quantas pessoas serao digitadas? ");
        int n = sc.nextInt();

        // Vetores paralelos para armazenar os dados das pessoas
        String[] nomes = new String[n];
        int[] idades = new int[n];
        double[] alturas = new double[n];

        for (int i = 0; i < n; i++) {
            System.out.printf("Dados da %da pessoa:
", i + 1);
            System.out.print("Nome: ");
            sc.nextLine(); // Limpa o buffer do scanner
            nomes[i] = sc.nextLine();
            System.out.print("Idade: ");
            idades[i] = sc.nextInt();
            System.out.print("Altura: ");
            alturas[i] = sc.nextDouble();
        }

        // Cálculo da altura média
        double somaAlturas = 0.0;
        for (int i = 0; i < n; i++) {
            somaAlturas += alturas[i];
        }
        double alturaMedia = somaAlturas / n;

        System.out.printf("
Altura média: %.2f
", alturaMedia);

        // Cálculo da porcentagem de menores de 16 anos
        int contMenores = 0;
        for (int i = 0; i < n; i++) {
            if (idades[i] < 16) {
                contMenores++;
            }
        }
        double percentualMenores = ((double)contMenores / n) * 100.0;
        System.out.printf("Pessoas com menos de 16 anos: %.1f%%
", percentualMenores);

        // Imprime o nome dos menores de 16 anos
        for (int i = 0; i < n; i++) {
            if (idades[i] < 16) {
                System.out.println(nomes[i]);
            }
        }

        sc.close();
    }
}
```

---
## 🔢 Problema 4: Números Pares

**Enunciado:** Faça um programa que leia N números inteiros e os armazene em um vetor. Em seguida, mostre na tela todos os números pares e a quantidade total de números pares encontrados.

### Conceitos-Chave
* **Operador Módulo (`%`):** O operador módulo retorna o resto de uma divisão. Um número é par se o resto da sua divisão por 2 for igual a zero (`numero % 2 == 0`).
* **Variável Contadora:** Uma variável, como `quantidadePares`, é usada para contar quantas vezes uma condição (o número ser par) é satisfeita.

### Exemplo Modificado

> ```
> Quantos numeros voce vai digitar? 5
>
> Digite um numero: 7
> Digite um numero: 12
> Digite um numero: 21
> Digite um numero: 4
> Digite um numero: 30
>
> NUMEROS PARES:
> 12 4 30
>
> QUANTIDADE DE PARES = 3
> ```

### Código de Exemplo em Java

```java
package exercicios.vetores;

import java.util.Locale;
import java.util.Scanner;

public class ProgramaNumerosPares {

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.print("Quantos numeros voce vai digitar? ");
        int n = sc.nextInt();

        int[] vetor = new int[n];

        for (int i = 0; i < n; i++) {
            System.out.print("Digite um numero: ");
            vetor[i] = sc.nextInt();
        }

        System.out.println("
NUMEROS PARES:");

        int quantidadePares = 0;
        for (int i = 0; i < n; i++) {
            if (vetor[i] % 2 == 0) {
                System.out.printf("%d ", vetor[i]);
                quantidadePares++;
            }
        }

        System.out.printf("

QUANTIDADE DE PARES = %d
", quantidadePares);
        sc.close();
    }
}
```

---

## 🥇 Problema 5: Maior Posição

**Enunciado:** Faça um programa que leia N números reais, armazene-os em um vetor e, em seguida, mostre na tela o maior número do vetor e a posição (índice) onde ele se encontra. Considere que não haverá empates e que a primeira posição é 0.

### Conceitos-Chave
* **Busca de Maior Valor:** Para encontrar o maior valor em um vetor, inicializamos uma variável `maior` com o primeiro elemento do vetor. Em seguida, percorremos o restante do vetor e, se encontrarmos um elemento maior que o valor atual de `maior`, nós o atualizamos.
* **Armazenamento de Índice:** Juntamente com o maior valor, guardamos seu índice em uma variável auxiliar, como `posicaoMaior`.

### Exemplo Modificado

> ```
> Quantos numeros voce vai digitar? 5
>
> Digite um numero: 20.5
> Digite um numero: 10.0
> Digite um numero: 50.8
> Digite um numero: 30.2
> Digite um numero: 15.0
>
> MAIOR VALOR = 50.8
> POSICAO DO MAIOR VALOR = 2
> ```

### Código de Exemplo em Java

```java
package exercicios.vetores;

import java.util.Locale;
import java.util.Scanner;

public class ProgramaMaiorPosicao {

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.print("Quantos numeros voce vai digitar? ");
        int n = sc.nextInt();

        double[] vetor = new double[n];

        for (int i = 0; i < n; i++) {
            System.out.print("Digite um numero: ");
            vetor[i] = sc.nextDouble();
        }

        // Assume o primeiro elemento como o maior inicialmente
        double maiorValor = vetor[0];
        int posicaoMaior = 0;

        // Percorre o vetor a partir do segundo elemento
        for (int i = 1; i < n; i++) {
            if (vetor[i] > maiorValor) {
                maiorValor = vetor[i];
                posicaoMaior = i;
            }
        }

        System.out.printf("
MAIOR VALOR = %.1f
", maiorValor);
        System.out.printf("POSICAO DO MAIOR VALOR = %d
", posicaoMaior);

        sc.close();
    }
}
```
