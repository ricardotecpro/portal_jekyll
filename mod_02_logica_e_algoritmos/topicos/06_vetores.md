# ➡️ Vetores (Arrays Unidimensionais) em Programação

Vetores, também conhecidos como **arrays unidimensionais**, são uma das estruturas de dados mais fundamentais na programação. Eles nos permitem armazenar múltiplos valores em uma única variável, de forma organizada e eficiente.

## 🤔 O que são Vetores?

Um vetor é uma coleção de dados que possui quatro características principais:

  - **Indexada**: Cada elemento no vetor possui uma posição única, chamada de índice, que é usada para acessá-lo. Os índices são sempre números inteiros, começando em zero.
  - **Unidimensional**: É uma estrutura de dados linear, como uma lista ou uma fila, possuindo apenas uma dimensão (comprimento).
  - **Homogênea**: Todos os elementos armazenados em um vetor devem ser, obrigatoriamente, do mesmo tipo de dado (todos `int`, todos `double`, todos `String`, etc.).
  - **Tamanho Fixo**: Uma vez que um vetor é criado na memória, seu tamanho (a quantidade de elementos que ele pode conter) é fixo e não pode ser alterado.

## 🛠️ Trabalhando com Vetores em Java

Vamos ver como declarar, instanciar (criar) e manipular vetores na linguagem Java.

### Declaração e Instanciação

Para usar um vetor, você primeiro o declara e depois o instancia, especificando seu tipo e tamanho.

```java
// Sintaxe: tipo[] nomeDoVetor = new tipo[tamanho];

// Exemplo: Criando um vetor de 10 posições para números de ponto flutuante.
// Isso corresponde a "vet: vetor [0..9] de real" do pseudocódigo.
double[] numeros = new double[10];

// Exemplo: Criando um vetor de 5 posições para armazenar nomes.
String[] nomes = new String[5];
```

### Acessando Elementos

O acesso aos elementos é feito através de seus índices. Lembre-se sempre que **o primeiro elemento está no índice 0**.

```java
// Atribuindo o valor 25.4 à primeira posição (índice 0) do vetor.
numeros[0] = 25.4;

// Atribuindo o valor "Ana" à terceira posição (índice 2) do vetor.
nomes[2] = "Ana";

// Lendo e imprimindo o valor da terceira posição de 'nomes'.
System.out.println(nomes[2]); // Saída: Ana
```

Frequentemente, usamos laços de repetição, como o `for`, para percorrer e manipular todos os elementos de um vetor de forma eficiente.

```java
// Exemplo: Preenchendo um vetor com os números de 10 a 14.
// Equivalente à lógica B[i] <- i + 10.
int[] vetorB = new int[5];
for (int i = 0; i < vetorB.length; i++) {
    vetorB[i] = i + 10;
    System.out.println("Posição " + i + " recebeu o valor " + vetorB[i]);
}
```

## ✍️ Exemplo Prático: Lendo e Imprimindo um Vetor

**Problema:** Fazer um programa para ler um número inteiro `N`, depois ler `N` números `double` e armazená-los em um vetor. Em seguida, mostrar na tela todos os elementos do vetor.

**Solução em Java:**

```java
package curso;

import java.util.Locale;
import java.util.Scanner;

public class LerVetor {

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.print("Quantos números você vai digitar? ");
        int N = sc.nextInt();

        // Instanciando o vetor com o tamanho N informado pelo usuário
        double[] vet = new double[N];

        // Laço para ler e armazenar cada número no vetor
        for (int i = 0; i < N; i++) {
            System.out.print("Digite um número: ");
            vet[i] = sc.nextDouble();
        }

        // Laço para imprimir os elementos do vetor
        System.out.println("\nNÚMEROS DIGITADOS:");
        for (int i = 0; i < N; i++) {
            System.out.printf("%.1f\n", vet[i]);
        }

        sc.close();
    }
}
```

**Exemplo de Execução:**

```
Quantos números você vai digitar? 4
Digite um número: 10.5
Digite um número: 4.2
Digite um número: -7.1
Digite um número: 15.0

NÚMEROS DIGITADOS:
10.5
4.2
-7.1
15.0
```

## 📈 Exercício Completo: Análise de Alturas

Vamos resolver um problema mais elaborado que utiliza **vetores paralelos** (vários vetores cujos índices se correspondem).

**Problema:** Fazer um programa para ler nome, idade e altura de `N` pessoas. Depois, o programa deve mostrar a altura média das pessoas e a porcentagem de pessoas com menos de 16 anos, listando o nome delas.

**Solução em Java:**

```java
package curso;

import java.util.Locale;
import java.util.Scanner;

public class AnaliseAlturas {

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.print("Quantas pessoas serão digitadas? ");
        int N = sc.nextInt();

        // Declarando os vetores paralelos
        String[] nomes = new String[N];
        int[] idades = new int[N];
        double[] alturas = new double[N];

        // Lendo os dados de cada pessoa
        for (int i = 0; i < N; i++) {
            System.out.println("Dados da " + (i + 1) + "ª pessoa:");
            System.out.print("Nome: ");
            sc.nextLine(); // Consome a quebra de linha pendente
            nomes[i] = sc.nextLine();
            System.out.print("Idade: ");
            idades[i] = sc.nextInt();
            System.out.print("Altura: ");
            alturas[i] = sc.nextDouble();
        }

        // Processando os dados: calculando a soma das alturas e contando menores de 16
        double somaAlturas = 0.0;
        int contMenores = 0;
        for (int i = 0; i < N; i++) {
            somaAlturas += alturas[i];
            if (idades[i] < 16) {
                contMenores++;
            }
        }

        // Calculando a média de altura
        double alturaMedia = somaAlturas / N;

        // Calculando o percentual de menores de 16 anos
        // A fórmula é x = cont * 100 / N
        double percentualMenores = ((double) contMenores * 100.0) / N;

        // Apresentando os resultados
        System.out.printf("\nAltura média: %.2f\n", alturaMedia);
        System.out.printf("Pessoas com menos de 16 anos: %.1f%%\n", percentualMenores);

        // Imprimindo o nome dos menores de 16
        for (int i = 0; i < N; i++) {
            if (idades[i] < 16) {
                System.out.println(nomes[i]);
            }
        }

        sc.close();
    }
}
```

### 🛠️ Como Executar no VS Code e IntelliJ IDEA

Você pode compilar e executar todos os exemplos de código acima em qualquer uma das IDEs modernas.

#### No Visual Studio Code

1.  **Instale o Pacote de Extensões para Java**: Na aba de Extensões (`Ctrl+Shift+X`), procure por `Extension Pack for Java` da Microsoft e instale-o.
2.  **Crie o Arquivo**: Crie um novo arquivo com a extensão `.java` (ex: `LerVetor.java`).
3.  **Cole o Código**: Copie e cole um dos exemplos no arquivo.
4.  **Execute**: Um botão **"Run"** aparecerá acima do método `main`. Clique nele para compilar e executar o código. A saída aparecerá no terminal integrado.

#### Na IntelliJ IDEA

1.  **Crie um Novo Projeto**: Vá em `File > New > Project`. Escolha `Java` e a versão do JDK.
2.  **Crie uma Nova Classe**: Na janela de projeto, clique com o botão direito na pasta `src`, vá em `New > Java Class` e dê um nome à classe (ex: `AnaliseAlturas`).
3.  **Cole o Código**: Copie e cole o código correspondente na classe criada.
4.  **Execute**: Clique com o botão direito do mouse em qualquer lugar dentro do editor de código e selecione **Run 'NomeDaClasse.main()'**. A saída aparecerá na aba "Run" na parte inferior da IDE.

---

### 🚀 [ricardotecpro.github.io](https://ricardotecpro.github.io/)
