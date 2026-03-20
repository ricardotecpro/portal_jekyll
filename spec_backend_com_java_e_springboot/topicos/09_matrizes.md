---
layout: default
title: ☕ Java: Matrizes
---

# ☕ Java: Matrizes

Este material aborda o conceito de matrizes em Java, incluindo sua declaração, instanciação, manipulação e o uso da propriedade `length`.

## 📋 Checklist

-   Revisão do conceito de matriz
-   Declaração e instanciação
-   Acesso aos elementos / como percorrer uma matriz
-   Propriedade `length`

## 📐 Matrizes

Em programação, **matriz** é o nome dado a arranjos bidimensionais. Uma maneira útil de pensar em matrizes é como um "vetor de vetores". Imagine uma tabela ou uma grade; isso é essencialmente como uma matriz organiza os dados.

Um **arranjo (array)** é uma estrutura de dados fundamental que possui as seguintes características:
-   **Homogênea**: Todos os dados armazenados na matriz devem ser do mesmo tipo (por exemplo, todos inteiros, todos strings).
-   **Ordenada**: Os elementos são acessados por meio de suas posições (índices), geralmente representados por um par `[linha][coluna]`.
-   **Alocada de uma vez só**: A memória para a matriz é alocada em um bloco contíguo quando a matriz é criada.

**Exemplo de uma Matriz 2D (3x4):**

|       | Coluna 0 | Coluna 1 | Coluna 2 | Coluna 3 |
| :---- | :------- | :------- | :------- | :------- |
| Linha 0 | 3.5      | 17.0     | 12.3     | 8.2      |
| Linha 1 | 4.1      | 6.2      | 7.5      | 2.9      |
| Linha 2 | 11.0     | 9.5      | 14.8     | 21.7     |

### Declaração e Instanciação de Matrizes em Java

Para usar uma matriz em Java, você primeiro precisa declará-la e depois instanciá-la (criar o objeto matriz e alocar memória).

```java
// Declaração de uma matriz de inteiros
int[][] minhaMatriz;

// Instanciação: criando uma matriz com 3 linhas e 4 colunas
minhaMatriz = new int[3][4];

// Declaração e instanciação em uma única linha
double[][] matrizDeReais = new double[2][5];

// Também é possível inicializar com valores diretamente
String[][] nomes = {
    {"Ana", "Beatriz"},
    {"Carlos", "Daniel"},
    {"Eduarda", "Fernanda"}
};
```

### Acesso aos Elementos e Como Percorrer uma Matriz

Os elementos de uma matriz são acessados usando seus índices de linha e coluna, começando do zero. Para acessar o elemento na primeira linha e primeira coluna de `minhaMatriz`, você usaria `minhaMatriz[0][0]`.

Para percorrer (ou iterar sobre) todos os elementos de uma matriz, geralmente se utilizam laços `for` aninhados:

```java
// Supondo que matrizDeInteiros já foi declarada e instanciada
// por exemplo: int[][] matrizDeInteiros = new int[3][3];

// Preenchendo a matriz com valores (exemplo: produto dos índices)
for (int i = 0; i < matrizDeInteiros.length; i++) { // Itera sobre as linhas
    for (int j = 0; j < matrizDeInteiros[i].length; j++) { // Itera sobre as colunas da linha i
        matrizDeInteiros[i][j] = (i + 1) * (j + 1);
    }
}

// Imprimindo os elementos da matriz
System.out.println("Elementos da matriz:");
for (int i = 0; i < matrizDeInteiros.length; i++) {
    for (int j = 0; j < matrizDeInteiros[i].length; j++) {
        System.out.print(matrizDeInteiros[i][j] + "\t"); // \t para tabular
    }
    System.out.println(); // Nova linha após cada linha da matriz
}
```

### Propriedade `length`

A propriedade `length` é crucial ao trabalhar com matrizes:
-   `nomeDaMatriz.length` retorna o **número de linhas** da matriz.
-   `nomeDaMatriz[i].length` retorna o **número de colunas** da *i*-ésima linha.

Isso é particularmente importante em Java porque as matrizes podem ser "irregulares" (jagged arrays), onde cada linha pode ter um número diferente de colunas.

```java
int[][] matrizIrregular = new int[3][];
matrizIrregular[0] = new int[2]; // Linha 0 tem 2 colunas
matrizIrregular[1] = new int[4]; // Linha 1 tem 4 colunas
matrizIrregular[2] = new int[3]; // Linha 2 tem 3 colunas

System.out.println("Número de linhas: " + matrizIrregular.length); // Saída: 3
System.out.println("Número de colunas na linha 0: " + matrizIrregular[0].length); // Saída: 2
System.out.println("Número de colunas na linha 1: " + matrizIrregular[1].length); // Saída: 4
```

### 👍 Vantagens das Matrizes:

-   **Acesso imediato aos elementos pela sua posição**: Se você sabe os índices `[i][j]`, pode acessar o elemento diretamente em tempo constante, O(1).
-   **Estrutura de dados simples e eficiente** para representar grades, tabelas e outros dados bidimensionais.

### 👎 Desvantagens das Matrizes:

-   **Tamanho fixo**: Uma vez que uma matriz é criada, seu tamanho (número de linhas e colunas) não pode ser alterado. Para adicionar ou remover linhas/colunas, é necessário criar uma nova matriz e copiar os elementos.
-   **Dificuldade para se realizar inserções e deleções**: Inserir ou deletar um elemento no meio da matriz pode exigir o deslocamento de muitos outros elementos, o que é ineficiente. Para operações dinâmicas de inserção/deleção, estruturas como `ArrayList` de `ArrayLists` (`ArrayList<ArrayList<Integer>>`) podem ser mais adequadas, embora com um custo maior de memória e complexidade.

## 💡 Exercício Resolvido

Fazer um programa para ler um número inteiro N e uma matriz de ordem N (quadrada) contendo números inteiros. Em seguida, mostrar a diagonal principal e a quantidade de valores negativos da matriz.

**Exemplo:**

**Input:**
```
3
5 -3 10
15 8 2
7 9 -4
```

**Output:**
```
Diagonal principal:
5 8 -4
Números negativos = 2
```

### Solução em Java

```java
package aplicacao;

import java.util.Scanner;

public class ProgramaMatriz {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite a ordem da matriz (N): ");
        int n = sc.nextInt();
        int[][] matriz = new int[n][n]; // Matriz quadrada N x N

        System.out.println("Digite os elementos da matriz:");
        for (int i = 0; i < n; i++) { // ou matriz.length
            for (int j = 0; j < n; j++) { // ou matriz[i].length
                System.out.printf("Elemento [%d][%d]: ", i, j);
                matriz[i][j] = sc.nextInt();
            }
        }

        System.out.println("
Diagonal principal:");
        for (int i = 0; i < n; i++) {
            System.out.print(matriz[i][i] + " ");
        }
        System.out.println(); // Nova linha

        int contadorNegativos = 0;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (matriz[i][j] < 0) {
                    contadorNegativos++;
                }
            }
        }
        System.out.println("Quantidade de números negativos = " + contadorNegativos);

        sc.close();
    }
}
```

### 💻 Executando o Código Java

Você pode compilar e executar este código Java em diversos ambientes de desenvolvimento (IDEs) ou diretamente pelo terminal.

**No VS Code:**
1.  Certifique-se de ter o Java Development Kit (JDK) instalado.
2.  Instale o pacote de extensões "Extension Pack for Java" da Microsoft no VS Code.
3.  Crie um arquivo chamado `ProgramaMatriz.java` (ou o nome da sua classe principal) dentro de uma pasta de projeto (por exemplo, `src/aplicacao/ProgramaMatriz.java` se estiver usando a estrutura de pacotes).
4.  Cole o código no arquivo.
5.  Para executar, você pode clicar com o botão direito no editor e selecionar "Run Java" ou usar o ícone de "play" que aparece no canto superior direito. A saída e a entrada de dados ocorrerão no painel "TERMINAL".

**No IntelliJ IDEA:**
1.  Certifique-se de ter o JDK instalado.
2.  Crie um novo projeto Java: `File` > `New` > `Project...`. Selecione "Java" e seu JDK.
3.  Dentro da pasta `src` do seu projeto, crie um pacote (se desejar, por exemplo, `aplicacao`) clicando com o botão direito em `src` > `New` > `Package`.
4.  Crie uma classe Java (`ProgramaMatriz`) dentro do pacote: clique com o botão direito no pacote > `New` > `Java Class`.
5.  Cole o código na classe.
6.  Para executar, clique na seta verde ao lado da declaração do método `main` ou da classe e selecione "Run 'ProgramaMatriz.main()' ". A entrada e saída de dados ocorrerão na janela "Run" na parte inferior.

---

## 🧠 Memória

Quando você trabalha com **matrizes** (e objetos em geral) em **Java**, é importante entender como a memória é gerenciada:

### 📌 Stack (Pilha)

* Armazena:

  * Variáveis de **tipos primitivos** (como `int n`)
  * **Referências** a objetos
* Tem acesso rápido
* Escopo limitado ao bloco de execução (por exemplo, dentro do método `main`)

### 📌 Heap (Monte)

* Onde os **objetos reais** são alocados (como arrays e instâncias de classes)
* Quando usamos `new int[N][N]`, a matriz é criada no **Heap**
* A variável `mat` (na Stack) armazena o **endereço de memória** da matriz no Heap

---

### 🧩 Diagrama de Memória (baseado no exercício anterior)

```
Memória
+--------------------------+     +-----------------------------+
|         Stack            |     |            Heap             |
+--------------------------+     +-----------------------------+
| int n = 3                |     | int[][]                      |
|                          |     | +-----+-----+-----+         |
| int[][] mat ------------ | --> | |  5  | -3  | 10  | <-- linha 0
|                          |     | +-----+-----+-----+         |
|                          |     | | 15  |  8  |  2  | <-- linha 1
|                          |     | +-----+-----+-----+         |
|                          |     | |  7  |  9  | -4  | <-- linha 2
+--------------------------+     +-----------------------------+
```

### 🔍 Explicação

* `n` é um **tipo primitivo** armazenado diretamente na **Stack**, com valor `3`.
* `mat` é uma **referência** (tipo objeto), também na **Stack**, mas aponta para o objeto real no **Heap**.
* A matriz de inteiros é armazenada no Heap e acessada indiretamente por meio de `mat`.

---

### 💡 Importância prática

* A passagem de arrays e objetos para métodos em Java é feita **por valor da referência**.
* O **Garbage Collector** (coletor de lixo) é responsável por liberar automaticamente a memória no Heap que **não está mais sendo referenciada** em nenhum lugar do código.
* Isso permite que você se concentre mais na lógica do programa e menos na gestão manual de memória, como seria necessário em linguagens como C/C++.

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)

