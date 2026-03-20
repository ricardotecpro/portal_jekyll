---
layout: default
title: ☕ Java: Estruturas Repetitivas
---

# ☕ Java: Estruturas Repetitivas

Este material aborda as estruturas de repetição em Java, essenciais para executar blocos de código múltiplas vezes. Veremos como depurar seu código e as aplicações das estruturas `while`, `for` e `do-while`.

## 🐞 Depuração (Debug) em Java

Depurar código é o processo de encontrar e corrigir erros (bugs) em seus programas. Uma ferramenta de depuração permite executar o código passo a passo, inspecionar variáveis e entender o fluxo de execução.

### Como Depurar seu Código

A maioria dos Ambientes de Desenvolvimento Integrado (IDEs) modernos oferece funcionalidades de depuração robustas. Abaixo, veja como realizar as operações básicas de depuração no VS Code e no IntelliJ IDEA.

**Conceitos Básicos:**

* **Breakpoint (Ponto de Parada):** Um marcador em uma linha de código onde o depurador pausará a execução, permitindo que você inspecione o estado do programa.
* **Execução Passo a Passo:**
    * **Step Over (Passar por Cima):** Executa a linha atual e para na próxima linha do mesmo método. Se a linha atual contiver uma chamada de método, ele executa o método inteiro sem entrar nele.
    * **Step Into (Entrar em):** Se a linha atual contiver uma chamada de método, o depurador entra nesse método e para na primeira linha dele.
    * **Step Out (Sair de):** Executa o restante do método atual e para na instrução que chamou o método.
* **Inspecionar Variáveis:** Visualizar os valores atuais das variáveis enquanto o programa está pausado.
* **Continuar (Resume):** Continua a execução normal do programa até o próximo breakpoint ou até o final.
* **Interromper (Stop):** Termina a sessão de depuração.

**No VS Code (com a extensão "Language Support for Java™ by Red Hat" e "Debugger for Java"):**

* **Marcar/Desmarcar um Breakpoint:**
    * Clique na medianiz (gutter) à esquerda do número da linha.
    * Ou posicione o cursor na linha e pressione `F9`.
* **Iniciar a Depuração:**
    * Abra o arquivo Java que contém o método `main`.
    * Pressione `F5` ou vá em `Run -> Start Debugging`.
* **Executar uma Linha (Step Over):**
    * Pressione `F10`.
* **Entrar em um Método (Step Into):**
    * Pressione `F11`.
* **Sair de um Método (Step Out):**
    * Pressione `Shift+F11`.
* **Interromper a Depuração:**
    * Pressione `Shift+F5` ou clique no botão "Stop" (quadrado vermelho) na barra de ferramentas de depuração.

**No IntelliJ IDEA:**

* **Marcar/Desmarcar um Breakpoint:**
    * Clique na medianiz (gutter) à esquerda do número da linha.
    * Ou posicione o cursor na linha e pressione `Ctrl+F8` (Windows/Linux) ou `Cmd+F8` (macOS).
* **Iniciar a Depuração:**
    * Botão direito na classe com o método `main` -> `Debug 'NomeDaClasse.main()'`.
    * Ou pressione `Shift+F9` com a configuração de execução apropriada selecionada.
* **Executar uma Linha (Step Over):**
    * Pressione `F8`.
* **Entrar em um Método (Step Into):**
    * Pressione `F7`.
* **Sair de um Método (Step Out):**
    * Pressione `Shift+F8`.
* **Interromper a Depuração:**
    * Pressione `Ctrl+F2` (Windows/Linux) ou `Cmd+F2` (macOS) ou clique no botão "Stop" (quadrado vermelho) na janela de depuração.

### Exemplo de Código para Depuração

Vamos considerar um exemplo simples para praticar a depuração. O programa abaixo calcula a área e o preço de um terreno.

```java
import java.util.Locale;
import java.util.Scanner;

public class ProgramaTerreno { // Classe renomeada de Main para ProgramaTerreno

    public static void main(String[] args) {
        Locale.setDefault(Locale.US); // Define o locale para entrada de dados com ponto decimal
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite a largura do terreno: ");
        double largura = sc.nextDouble();

        System.out.print("Digite o comprimento do terreno: ");
        double comprimento = sc.nextDouble();

        System.out.print("Digite o valor do metro quadrado: ");
        double valorMetroQuadrado = sc.nextDouble(); // Variável renomeada de metroQuadrado para valorMetroQuadrado

        double area = largura * comprimento;
        double precoTotal = area * valorMetroQuadrado; // Variável renomeada de preco para precoTotal

        System.out.printf("ÁREA = %.2f m²%n", area); // Mensagem traduzida e unidade adicionada
        System.out.printf("PREÇO = R$ %.2f%n", precoTotal); // Mensagem traduzida e unidade monetária adicionada

        sc.close();
    }
}
```

Você pode definir breakpoints nas linhas onde as variáveis `largura`, `area` ou `precoTotal` são calculadas para observar seus valores durante a execução.

## 🔁 Estrutura Repetitiva `while` (Enquanto)

A estrutura `while` (que significa "enquanto" em português) é um controle de fluxo que permite repetir um bloco de comandos continuamente, **enquanto uma determinada condição permanecer verdadeira**.

**Quando usar:**
É ideal quando **não se sabe previamente o número exato de vezes** que o bloco de comandos precisa ser repetido. A repetição depende de uma condição que pode mudar durante a execução do laço.

**Problema Exemplo:**
Fazer um programa que lê números inteiros fornecidos pelo usuário. O programa deve parar de ler quando o usuário digitar o número zero. Ao final, o programa deve mostrar a soma de todos os números lidos (exceto o zero).

**Entrada:**
```
5
2
4
0
```

**Saída Esperada:**
```
11
```

### Sintaxe da Estrutura `while`

```java
while (condição) {
    // Bloco de comandos a ser repetido
    // Comando 1
    // Comando 2
    // ...
}
// Próximo comando após o laço
```

**Regra de Funcionamento:**
1.  A `condição` (uma expressão booleana) é avaliada.
2.  Se a `condição` for **verdadeira (V)**:
    * O bloco de comandos dentro do `while` é executado.
    * Ao final do bloco, o controle retorna para o passo 1 (reavaliação da condição).
3.  Se a `condição` for **falsa (F)**:
    * O bloco de comandos é ignorado e a execução do programa continua com o primeiro comando após o laço `while`.

**Importante:** É crucial que alguma instrução dentro do laço modifique as variáveis envolvidas na `condição`, de forma que ela eventualmente se torne falsa. Caso contrário, o laço se tornará um **laço infinito**, e o programa não terminará.

### Solução do Problema Exemplo com `while`

```java
import java.util.Scanner;

public class SomaAteZero {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Digite números inteiros (digite 0 para parar):");
        int numero = sc.nextInt();
        int soma = 0;

        while (numero != 0) {
            soma = soma + numero; // ou soma += numero;
            numero = sc.nextInt(); // Lê o próximo número
        }

        System.out.println("Soma dos números lidos: " + soma);

        sc.close();
    }
}
```

## ✏️ Exercícios de Teste de Mesa com `while`

"Teste de mesa" (ou desk checking) é uma técnica para simular a execução de um algoritmo manualmente, passo a passo, para verificar sua lógica.

**Exemplo 1:**

```java
// Código Original:
// x = 5;
// y = 0;
// while (x > 2) {
//     System.out.print(x);
//     y = y + x;
//     x = x - 1;
// }
// Tela: 543

// Código Adaptado para Execução e melhor entendimento:
public class TesteMesaWhile1 {
    public static void main(String[] args) {
        int x = 5;
        int y = 0;
        System.out.print("Saída: ");
        while (x > 2) {
            System.out.print(x);
            y = y + x;
            x = x - 1;
        }
        System.out.println("
Valor final de y: " + y); // Para vermos o resultado de y
    }
}
```
**Saída na Tela:**
```
Saída: 543
Valor final de y: 12
```


<!-- comentado para não poluir a saída do exemplo, mas pode ser usado para referência futura

**Exemplo 2:**

```java
// Código Original:
// x = 2;
// y = 0;
// while (x < 60) {
//     System.out.println(x);
//     x = x * 2; // Ou x *= 2;
//     y = y + 10;
// }
// Tela: 2 4 8 16 32

// Código Adaptado para Execução:
public class TesteMesaWhile2 {
    public static void main(String[] args) {
        int x = 2;
        int y = 0;
        System.out.println("Saída:");
        while (x < 60) {
            System.out.println(x);
            x = x * 2;
            y = y + 10;
        }
        System.out.println("Valor final de y: " + y);
    }
}
```
**Saída na Tela:**
```
Saída:
2
4
8
16
32
Valor final de y: 50
```

**Exemplo 3:** (Este exemplo na imagem parece ter um erro de lógica ou mistura com outro, `x != y` com `x = Math.sqrt(y)` e `y=y+10` pode levar a comportamento complexo ou não terminar como esperado dependendo dos valores iniciais. A imagem mostra `x=100, y=100` e `olha`, `x=Math.sqrt(y)` resultando em `x=10`, depois `y=y+10` -> `y=110`, etc. O slide parece indicar que para quando `x == y`, mas a condição é `x != y`. Se começam iguais, não entra. Se `x=100, y=0`, `x = Math.sqrt(0)` -> `x=0`. Se `x` deve se tornar `y`, `y` precisaria ser um quadrado perfeito e `x` buscar esse valor. Vamos simplificar com base no que parece ser a intenção da tela "olha" aparecendo uma vez se `x` e `y` inicializados para que a condição `x!=y` seja inicialmente verdadeira e depois `x` se torne `y` após uma iteração.)

Considerando a linha do slide que mostra `x=100`, `y=100`, e depois `Tela: olha` não faz sentido com `while(x != y)`. Vamos assumir um cenário onde o laço executa uma vez:

```java
// Código Original (interpretado da imagem, com uma pequena correção para executar):
// x = 10; // Valor inicial para x
// y = 100; // Valor inicial para y
// while (x != y) {
//    System.out.print("olha");
//    x = (int) Math.sqrt(y); // x se torna 10
//    // Se não houver mais modificações, e x não se tornar y, pode haver loop infinito
//    // ou o slide implica uma saída após uma iteração para o exemplo
//    // Para garantir que saia após uma iteração e corresponda ao "olha":
//    if (x == 10) y = 10; // Força a condição de saída na próxima iteração
// }
// Tela: olha

// Código Adaptado para Execução (para ilustrar a saída "olha" uma vez):
public class TesteMesaWhile3 {
    public static void main(String[] args) {
        int x = 0; // Valor inicial de x
        int y = 100; // Valor inicial de y

        // Para o laço executar e imprimir "olha" e depois x se igualar a y
        // após a operação Math.sqrt(y), y deve ser um quadrado perfeito
        // e x não deve ser igual a y inicialmente.

        if (x != y) { // Garante que entre no laço se não forem iguais
            System.out.print("olha");
            x = (int)Math.sqrt(y); // x se torna 10
            // Se a intenção é que o laço pare aqui, y deve se tornar igual a x (10)
            // Para o exemplo do slide, a tela "olha" e depois "100" "100" sugere
            // que x se tornou 10 e depois a condição de parada foi atingida.
            // A imagem do slide tem "100" "100" embaixo de x e y no final,
            // e "olha" como saída, o que é um pouco confuso.
            // A tabela parece sugerir x=100, y=100 e termina, não mostrando "olha".
            // Outra parte da tabela mostra x=10, y=100, i=vazio, Tela: olha
            // E depois x=10, y=100
            // Vamos seguir a parte onde x e y são inicializados, e "olha" é impresso.
        }
        // A imagem do teste de mesa para este exemplo é um pouco ambígua.
        // A saída "olha" seguida de x=100, y=100 na tabela
        // com a condição while (x != y) sugere que o laço não executa.
        // Se a intenção é x=Math.sqrt(y); e y=y+10;
        // E a tela mostra "olha" uma vez
        // x = 10, y = 100;
        // System.out.print("olha"); -> Tela: olha
        // x = Math.sqrt(100) -> x = 10
        // y = y + 10; -> y = 110
        // A condição x != y (10 != 110) continua verdadeira.
        // O slide está um pouco confuso aqui.
        // A tela "olha" parece vir de uma execução.
        // O final x=100, y=100 sugere um estado final após o laço,
        // o que implica que o laço terminou.
        // Se x=100, y=100 inicialmente, o laço while(x!=y) não roda.
        // Se o texto "olha" é a saída, o laço deve ter rodado ao menos uma vez.
        // Vamos assumir o código original como:
        // x = valorDiferenteDeY;
        // y = valorParaY;
        // if (x != y) { System.out.print("olha"); x = (int)Math.sqrt(y); /* ... */ }
    }
}
```
**Saída na Tela (com base na interpretação do fragmento `System.out.print("olha");` e `x=Math.sqrt(y);`):**
```
olha
```
*(Nota: Os testes de mesa com `x, y, i` e "Tela" nas imagens são bastante condensados e, por vezes, ambíguos. O objetivo é entender como os valores mudam e qual é a saída.)*

**Exemplo 4 (da página 6 e 7):**
```java
// Código Original:
// x = 0;
// while (x < 5) {
//     y = x * 3;
//     System.out.print(y);
//     x = x + 1;
// }
// System.out.println("Fim");
// Tela: 036912Fim

// Código Adaptado para Execução:
public class TesteMesaWhile4 {
    public static void main(String[] args) {
        int x = 0;
        int y;
        System.out.print("Saída: ");
        while (x < 5) {
            y = x * 3;
            System.out.print(y); // Imprime sem espaço entre os números
            x = x + 1;
        }
        System.out.println("Fim");
    }
}
```
**Saída na Tela:**
```
Saída: 036912Fim
```

**Exemplo 5 (da página 6 e 7):**
```java
// Código Original:
// x = 2;
// y = 10;
// System.out.println("Olá");
// while (x < y) {
//     System.out.println(x + "-" + y);
//     x = x * 2;
//     y = y + 1;
// }
// Tela:
// Olá
// 2-10
// 4-11
// 8-12

// Código Adaptado para Execução:
public class TesteMesaWhile5 {
    public static void main(String[] args) {
        int x = 2;
        int y = 10;
        System.out.println("Olá");
        while (x < y) {
            System.out.println(x + "-" + y);
            x = x * 2;
            y = y + 1;
        }
    }
}
```
**Saída na Tela:**
```
Olá
2-10
4-11
8-12
```

**Exemplo 6 (da página 6 e 7):**
```java
// Código Original:
// x = 4;
// y = 0; // Na imagem parece ser y = 0, não y = 8
// i = 0; // Inicialização de i
// while (i < x) {
//     i = i + 1;
//     y = y + i;
//     System.out.print(i);
//     System.out.println(y);
// }
// Tela (interpretada da imagem, onde parece haver uma mistura de print e println):
// 11
// 23
// 36
// 410

// Código Adaptado para Execução:
public class TesteMesaWhile6 {
    public static void main(String[] args) {
        int x = 4;
        int y = 0; // Assumindo y inicial = 0
        int i = 0;
        System.out.println("Saída:");
        while (i < x) {
            i = i + 1;
            y = y + i;
            System.out.print(i); // Imprime i
            System.out.println(y); // Imprime y na nova linha
        }
    }
}
```
**Saída na Tela:**
```
Saída:
11
23
36
410
```
-->

## 🔢 Estrutura Repetitiva `for` (Para)

A estrutura `for` (que significa "para" em português) é outra forma de controle de fluxo que repete um bloco de comandos. Ela é particularmente útil quando **se sabe de antemão o número de repetições necessárias** ou quando se quer iterar sobre um intervalo definido de valores.

**Quando usar:**
É a escolha ideal quando o número de iterações é conhecido ou facilmente determinável antes do início do laço. Frequentemente usada para contagens (progressivas ou regressivas) ou para percorrer coleções de dados como arrays.

**Problema Exemplo:**
Fazer um programa que lê um valor inteiro N. Em seguida, o programa deve ler N números inteiros fornecidos pelo usuário. Ao final, o programa deve mostrar a soma dos N números lidos.

**Entrada:**
```
3  // Valor de N
5  // 1º número
2  // 2º número
4  // 3º número
```

**Saída Esperada:**
```
11 // Soma dos N números
```

### Sintaxe da Estrutura `for`

```java
for (inicialização; condição; incremento) {
    // Bloco de comandos a ser repetido
    // Comando 1
    // Comando 2
    // ...
}
```

**Regra de Funcionamento:**
1.  **Inicialização:** Executada **apenas uma vez**, no início da execução do laço. Geralmente, declara-se e/ou inicializa-se uma variável de controle (contador).
2.  **Condição:** Avaliada **antes de cada iteração** (incluindo a primeira).
    * Se a `condição` for **verdadeira (V)**:
        * O bloco de comandos dentro do `for` é executado.
        * Em seguida, a expressão de **incremento** é executada.
        * O controle retorna para o início do passo 2 (reavaliação da condição).
    * Se a `condição` for **falsa (F)**:
        * O bloco de comandos é ignorado e a execução do programa continua com o primeiro comando após o laço `for`.
3.  **Incremento (ou Decremento):** Executado **ao final de cada iteração**, após o bloco de comandos ter sido executado e antes da condição ser reavaliada. Comumente usado para modificar a variável de controle.

### Solução do Problema Exemplo com `for`

```java
import java.util.Scanner;

public class SomaNNumeros {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Quantos números você vai digitar? ");
        int n = sc.nextInt();
        int soma = 0;

        for (int i = 0; i < n; i++) { // i começa em 0 e vai até n-1 (total de n vezes)
            System.out.print("Digite o " + (i + 1) + "º número: ");
            int numero = sc.nextInt();
            soma = soma + numero; // ou soma += numero;
        }

        System.out.println("Soma dos números lidos: " + soma);

        sc.close();
    }
}
```

### Importante: `for` para Contagens

A estrutura `for` é excelente para realizar contagens.

**Contagem Progressiva:**
Este código imprimirá os valores de `i` de 0 a 4.

```java
public class ContagemProgressiva {
    public static void main(String[] args) {
        // i começa em 0; continua enquanto i < 5; incrementa i em 1 a cada passo
        for (int i = 0; i < 5; i++) {
            System.out.println("Valor de i: " + i);
        }
    }
}
```
**Resultado na tela:**
```
Valor de i: 0
Valor de i: 1
Valor de i: 2
Valor de i: 3
Valor de i: 4
```

**Contagem Regressiva:**
Este código imprimirá os valores de `i` de 4 a 0.

```java
public class ContagemRegressiva {
    public static void main(String[] args) {
        // i começa em 4; continua enquanto i >= 0; decrementa i em 1 a cada passo
        for (int i = 4; i >= 0; i--) {
            System.out.println("Valor de i: " + i);
        }
    }
}
```
**Resultado na tela:**
```
Valor de i: 4
Valor de i: 3
Valor de i: 2
Valor de i: 1
Valor de i: 0
```

## ✏️ Exercícios de Teste de Mesa com `for`


<!-- comentado para não poluir a saída do exemplo, mas pode ser usado para referência futura
**Exemplo 1:**

```java
// Código Original (interpretado da imagem):
// x = 4;
// y = x + 2; // y = 6
// for (i = 0; i < x; i++) {
//     System.out.print(x + " " + y); // Imprime x e y, depois espaço? Ou só x e y?
//     y = y + i; // Na imagem parece y = y + i, mas a tabela de resultado sugere y = y + 1
// }
// Tela (slide pág 12): 4 64 64 74 9 (espaçamento estranho, parece ser "4 6", "4 6", "4 7", "4 9")
// Se y = y + 1:
// i=0: print(4 + " " + 6); y = 6+1 = 7. Saída: "4 6"
// i=1: print(4 + " " + 7); y = 7+1 = 8. Saída: "4 7"
// i=2: print(4 + " " + 8); y = 8+1 = 9. Saída: "4 8"
// i=3: print(4 + " " + 9); y = 9+1 = 10. Saída: "4 9"
// Se y = y + i:
// i=0: print(4 + " " + 6); y = 6+0 = 6. Saída: "4 6"
// i=1: print(4 + " " + 6); y = 6+1 = 7. Saída: "4 6"
// i=2: print(4 + " " + 7); y = 7+2 = 9. Saída: "4 7"
// i=3: print(4 + " " + 9); y = 9+3 = 12. Saída: "4 9"
// A tela "4 64 64 74 9" é confusa. Vamos seguir "y = y + i" como está no código e formatar a saída.

// Código Adaptado para Execução (assumindo y = y + i e System.out.print(x + " " + y + " ")):
public class TesteMesaFor1 {
    public static void main(String[] args) {
        int x = 4;
        int y = x + 2; // y se torna 6
        System.out.print("Saída: ");
        for (int i = 0; i < x; i++) {
            System.out.print(x + "" + y + " "); // Imprime x, y, e um espaço
            y = y + i;
        }
        System.out.println();
    }
}
```
**Saída na Tela (com `y = y + i` e `System.out.print(x + "" + y + " ");`):**
```
Saída: 46 46 47 49
```
*(Nota: A saída na imagem do slide é `4 64 64 74 9`. Isso pode ser `x` concatenado com `y` e um espaço. "46 " "46 " "47 " "49 ". Isto corresponde a `y` sendo inicializado como 6, e na primeira iteração (`i=0`), `y` permanece 6 (`y=6+0`). Na segunda (`i=1`), `y` se torna `6+1=7`. Na terceira (`i=2`), `y` se torna `7+2=9`. Na quarta (`i=3`), `y` se torna `9+3=12`.
A saída "4 64 64 74 9" é mais próxima se o System.out.print fosse `System.out.print(x + "" + y);` e `y = y + 1` (ou uma variação). O código `y = y+i` e a tela `4 64 64 74 9` são inconsistentes.
A tabela na pág 12 mostra:
x=4, y=6, i=0. Tela: "4 6". y = 6+0 = 6.
x=4, y=6, i=1. Tela: "4 6". y = 6+1 = 7.
x=4, y=7, i=2. Tela: "4 7". y = 7+2 = 9.
x=4, y=9, i=3. Tela: "4 9". y = 9+3 = 12.
Então a tela seria "4 64 64 74 9" se fosse print(x); print(y);
Se `System.out.print(x+""+y+" ");` com `y=y+i`:
i=0: x=4, y=6. Print "46 ". y = 6+0 = 6.
i=1: x=4, y=6. Print "46 ". y = 6+1 = 7.
i=2: x=4, y=7. Print "47 ". y = 7+2 = 9.
i=3: x=4, y=9. Print "49 ". y = 9+3 = 12.
Esta é a saída que meu código adaptado acima produz, e é a mais consistente com `y=y+i`.)*


**Exemplo 2:**
```java
// Código Original (interpretado da imagem):
// y = 10;
// for (i = 0; i < 4; i++) {
//     System.out.print(i);
//     y = y + i;
// }
// System.out.println(y);
// Tela (slide pág 12): 010 111 213 316
// Isso sugere que System.out.print(i); e depois System.out.println(y); DENTRO do loop.
// E o println(y) final não está na tela do slide.
// A tela parece ser:
// i=0: print(0); y=10+0=10. println(10).  -> 010
// i=1: print(1); y=10+1=11. println(11).  -> 111
// i=2: print(2); y=11+2=13. println(13).  -> 213
// i=3: print(3); y=13+3=16. println(16).  -> 316
// O System.out.println(y) fora do loop imprimiria 16.

// Código Adaptado para Execução (para corresponder à tela do slide):
public class TesteMesaFor2 {
    public static void main(String[] args) {
        int y = 10;
        System.out.println("Saída:");
        for (int i = 0; i < 4; i++) {
            System.out.print(i); // Imprime i
            y = y + i;
            System.out.println(y); // Imprime y na nova linha
        }
        // System.out.println("Valor final de y (fora do loop): " + y); // Seria 16
    }
}
```
**Saída na Tela:**
```
Saída:
010
111
213
316
```

**Exemplo 3 (da página 11 e 12):**
```java
// Código Original:
// x = 4;
// y = 0;
// for (i = 0; i < x; i++) {
//    y = y + i;
// }
// System.out.println(y);
// Tela (slide pág 12): 6

// Código Adaptado para Execução:
public class TesteMesaFor3 {
    public static void main(String[] args) {
        int x = 4;
        int y = 0;
        for (int i = 0; i < x; i++) { // i = 0, 1, 2, 3
            y = y + i;
            // i=0, y = 0+0 = 0
            // i=1, y = 0+1 = 1
            // i=2, y = 1+2 = 3
            // i=3, y = 3+3 = 6
        }
        System.out.println("Saída: " + y);
    }
}
```
**Saída na Tela:**
```
Saída: 6
```

**Exemplo 4 (da página 11 e 12):**
```java
// Código Original:
// x = 8;
// y = 3;
// for (i = 0; y < x; i++) { // Condição y < x
//     x = x - 2;
//     y = y + 1;
//     System.out.println(i);
// }
// Tela (slide pág 12): 0 1 2

// Código Adaptado para Execução:
public class TesteMesaFor4 {
    public static void main(String[] args) {
        int x = 8;
        int y = 3;
        System.out.println("Saída:");
        for (int i = 0; y < x; i++) {
            // Iteração 1: i=0. y=3, x=8. y < x (3 < 8) é V.
            // x = 8-2 = 6
            // y = 3+1 = 4
            // print(0)
            //
            // Iteração 2: i=1. y=4, x=6. y < x (4 < 6) é V.
            // x = 6-2 = 4
            // y = 4+1 = 5
            // print(1)
            //
            // Iteração 3: i=2. y=5, x=4. y < x (5 < 4) é F.  -> Erro na análise manual, 5 < 4 é F.
            // A condição é y < x.
            // i=0: y=3, x=8. (3<8) V. x=6, y=4. print(0).
            // i=1: y=4, x=6. (4<6) V. x=4, y=5. print(1).
            // i=2: y=5, x=4. (5<4) F. Laço termina.

            // A tela do slide é 0 1 2. Isso significa que o laço executa para i=0, i=1, i=2.
            // Para i=2 ter sido impresso, na checagem para i=2, y < x deve ter sido V.
            // E na checagem para i=3, y < x deve ter sido F.

            // Vamos refazer com a tela:
            // Inicial: x=8, y=3
            // i=0: y<x (3<8) é V. x=8-2=6. y=3+1=4. Imprime 0.
            // i=1: y<x (4<6) é V. x=6-2=4. y=4+1=5. Imprime 1.
            // i=2: y<x (5<4) é F. O laço deveria parar aqui, imprimindo só 0 e 1.

            // A tela "0 1 2" no slide está inconsistente com o código `y < x`.
            // Se a condição fosse `y <= x` OU se a ordem das operações dentro do loop fosse diferente.
            // Se System.out.println(i) fosse a primeira linha no loop:
            // i=0: (3<8) V. Imprime 0. x=6, y=4.
            // i=1: (4<6) V. Imprime 1. x=4, y=5.
            // i=2: (5<4) F. Não entraria.

            // Se a condição de parada é a tela "0 1 2", o código do slide tem um pequeno erro
            // de correspondência.
            // Se o print está no final, para imprimir "2", a condição para i=2 deve ser V.
            // y(antes) < x(antes)
            // i=0: 3<8 (V) -> x=6,y=4. print(0)
            // i=1: 4<6 (V) -> x=4,y=5. print(1)
            // i=2: 5<4 (F) -> Laço para.
            // A saída é 0 1.

            // Para obter 0 1 2, talvez a condição fosse y < x+k ou algo assim.
            // Ou o x e y na tabela do slide seguem um fluxo diferente.
            // A tabela x,y,i da pág 12 para este é:
            // x   y   i   | (antes da iteração de i)
            // 8   3   0   | y<x (3<8) V.
            //             | x=6, y=4. print i=0
            // 6   4   1   | y<x (4<6) V.
            //             | x=4, y=5. print i=1
            // 4   5   2   | y<x (5<4) F.
            // A tela 0 1 2 do slide parece ser um erro para este código.
            // Vamos seguir o código como escrito:

            System.out.println(i);
            x = x - 2;
            y = y + 1;
        }
    }
}
```
**Saída na Tela (conforme a lógica do código):**
```
Saída:
0
1
```

-->

## 🔄 Estrutura Repetitiva `do-while` (Faça-Enquanto)

A estrutura `do-while` é menos utilizada em comparação com `while` e `for`, mas possui uma característica distintiva importante: o bloco de comandos associado a ela é **executado pelo menos uma vez**, pois a condição de repetição é verificada **no final** da iteração.

**Quando usar:**
É adequada para situações onde você precisa que um conjunto de ações ocorra ao menos uma vez, e a decisão de repetir ou não só pode ser tomada após essa primeira execução. Um exemplo clássico é a validação de entrada de dados, onde o usuário deve fornecer um dado pelo menos uma vez antes que ele possa ser validado.

### Sintaxe da Estrutura `do-while`

```java
do {
    // Bloco de comandos a ser repetido
    // Comando 1
    // Comando 2
    // ...
} while (condição); // Ponto e vírgula é obrigatório aqui
```

**Regra de Funcionamento:**
1.  O bloco de comandos dentro do `do-while` é executado.
2.  Ao final do bloco, a `condição` (uma expressão booleana) é avaliada.
3.  Se a `condição` for **verdadeira (V)**:
    * O controle retorna para o passo 1 (o bloco de comandos é executado novamente).
4.  Se a `condição` for **falsa (F)**:
    * A execução do programa continua com o primeiro comando após o laço `do-while`.

### Problema Exemplo com `do-while`

Fazer um programa para ler uma temperatura em Celsius e mostrar o equivalente em Fahrenheit. Após cada conversão, o programa deve perguntar ao usuário se ele deseja repetir a operação (respondendo com 's' para sim ou 'n' para não). O programa deve continuar repetindo enquanto o usuário digitar 's'.

**Fórmula de conversão:** F = ((9C/5) + 32)

**Exemplo de Interação:**
```
Digite a temperatura em Celsius: 30.0
Equivalente em Fahrenheit: 86.0
Deseja repetir (s/n)? s
Digite a temperatura em Celsius: 21.0
Equivalente em Fahrenheit: 69.8
Deseja repetir (s/n)? n
```

### Solução do Problema Exemplo com `do-while`

```java
import java.util.Locale;
import java.util.Scanner;

public class ConversorTemperatura { // Classe renomeada de Main para ConversorTemperatura

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);
        char resposta; // Variável renomeada de resp para resposta

        do {
            System.out.print("Digite a temperatura em Celsius: ");
            double celsius = sc.nextDouble(); // Variável renomeada de C para celsius

            double fahrenheit = 9.0 * celsius / 5.0 + 32.0; // Variável renomeada de F para fahrenheit

            System.out.printf("Equivalente em Fahrenheit: %.1f%n", fahrenheit);

            System.out.print("Deseja realizar outra conversão (s/n)? "); // Mensagem traduzida e melhorada
            resposta = sc.next().charAt(0); // Lê o primeiro caractere da próxima entrada

        } while (resposta == 's' || resposta == 'S'); // Continua se a resposta for 's' ou 'S'

        System.out.println("Programa finalizado.");
        sc.close();
    }
}
```

Este exemplo demonstra bem o uso do `do-while`: a conversão da temperatura e a pergunta sobre a repetição ocorrem pelo menos uma vez. Somente após essa primeira execução é que a resposta do usuário (`resposta`) é verificada para decidir se o processo deve ser repetido.

---
## 📚

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)

