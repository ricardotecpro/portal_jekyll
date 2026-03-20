# ⚖️ Estrutura Condicional em Programação

Após entendermos como os programas executam comandos em sequência, vamos explorar a **estrutura condicional**. Ela permite que um programa tome decisões, alterando seu fluxo de execução com base em condições específicas. É o que torna os programas "inteligentes" e dinâmicos.

## 🔍 Expressões Lógicas e Comparativas

Para que uma estrutura condicional funcione, ela precisa avaliar uma condição. O resultado dessa avaliação é sempre um valor lógico: **verdadeiro** ou **falso**. Essas condições são construídas com expressões comparativas e lógicas.

### Expressões Comparativas

Comparam dois valores e o resultado é sempre um `boolean` (`true` ou `false`).

**Operadores Comparativos em Java:**

| Operador VisualG | Operador Java | Significado |
| :--- | :--- | :--- |
| `>` | `>` | Maior que |
| `<` | `<` | Menor que |
| `>=` | `>=` | Maior ou igual a |
| `<=` | `<=` | Menor ou igual a |
| `=` | `==` | **Igual a** (Note a diferença\!) |
| `<>` | `!=` | Diferente de |

**Exemplos (supondo `int x = 10;`):**

  - `x > 0` → Resultado: `true`
  - `x == 10` → Resultado: `true`
  - `x != 10` → Resultado: `false`
  - `20 <= 15` → Resultado: `false`

### Expressões Lógicas

Combinam duas ou mais expressões comparativas, permitindo criar condições mais complexas.

**Operadores Lógicos em Java:**

| Operador VisualG | Operador Java | Descrição |
| :--- | :--- | :--- |
| `E` | `&&` | **E (AND)**: Verdadeiro somente se **todas** as condições forem verdadeiras. |
| `OU` | `||` | **OU (OR)**: Verdadeiro se **pelo menos uma** condição for verdadeira. |
| `NAO` | `!` | **NÃO (NOT)**: **Inverte** o valor da condição (de `true` para `false` e vice-versa). |

#### Operador `&&` (E)

Pense na regra para obter uma habilitação de motorista: você precisa ser aprovado no exame psicotécnico **E** no exame de legislação **E** no exame de direção. Se falhar em qualquer um deles, o resultado final é "reprovado". Todas as condições devem ser verdadeiras.

**Tabela Verdade (E):**

| A | B | A && B |
| :--- | :--- | :--- |
| `false` | `false` | `false` |
| `false` | `true` | `false` |
| `true` | `false` | `false` |
| `true` | `true` | `true` |

#### Operador `||` (OU)

Pense nas vagas de estacionamento preferenciais: você pode usá-las se for idoso(a), **OU** pessoa com deficiência, **OU** gestante. Basta atender a uma das condições para ter o direito.

**Tabela Verdade (OU):**

| A | B | A || B |
| :--- | :--- | :--- |
| `false` | `false` | `false` |
| `false` | `true` | `true` |
| `true` | `false` | `true` |
| `true` | `true` | `true` |

#### Operador `!` (NÃO)

Pense na regra para uma bolsa de estudos: você tem direito se **NÃO** possuir renda maior que R$ 3.000,00. Este operador inverte o resultado da condição. Se a condição `renda > 3000` for verdadeira, `!(renda > 3000)` será falsa.

**Tabela Verdade (NÃO):**

| A | \!A |
| :--- | :--- |
| `false` | `true` |
| `true` | `false` |

## 🔀 A Estrutura `if-else`

É a principal estrutura de controle condicional. Ela permite que um bloco de comandos seja executado somente se uma determinada condição for atendida.

### `if` Simples

Executa um bloco de código se a condição for verdadeira. Se for falsa, o bloco é simplesmente ignorado.

**Sintaxe em Java:**

```java
if (condicao) {
    // Bloco de comandos a ser executado
    // se a condição for verdadeira.
}
```

### `if-else` Composta

Oferece um caminho alternativo. Se a condição for verdadeira, o bloco `if` é executado. Caso contrário (`else`), o bloco `else` é executado.

**Sintaxe em Java:**

```java
if (condicao) {
    // Bloco de comandos a ser executado
    // se a condição for verdadeira.
} else {
    // Bloco de comandos a ser executado
    // se a condição for falsa.
}
```

### Encadeamento com `else if`

Para cenários com múltiplas condições (mais de duas possibilidades), podemos encadear várias estruturas `if-else`.

**Exemplo: Saudação baseada na hora do dia**

```java
import java.util.Scanner;

public class Saudacao {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Digite a hora atual (0-23): ");
        int hora = sc.nextInt();
        
        if (hora < 12) { // se a hora for menor que 12
            System.out.println("Bom dia!"); // imprime Bom dia!
        } else if (hora < 18) { // senão, se a hora for menor que 18
            System.out.println("Boa tarde!"); // imprime Boa tarde!
        } else { // senão (para qualquer outra hora >= 18)
            System.out.println("Boa noite!"); // imprime Boa noite!
        }
        
        sc.close();
    }
}
```

> **Boa Prática**: Repare na **indentação** (o recuo dos blocos de código). Ela não afeta o funcionamento em Java, mas é fundamental para a legibilidade do código\!

## 🔢 A Estrutura `switch-case`

Quando temos várias opções de fluxo que dependem do valor de uma **única variável**, podemos usar a estrutura `switch-case` como uma alternativa mais limpa e organizada a um longo encadeamento de `if-else if`.

**Problema Exemplo:** Ler um número inteiro de 1 a 7 e escrever o dia da semana correspondente.

**Solução com `switch-case` em Java:**

```java
import java.util.Scanner;

public class DiaDaSemana {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite um número para o dia da semana (1-7): ");
        int x = sc.nextInt();
        String dia;

        switch (x) { // A variável a ser avaliada
            case 1: // Se o valor for 1
                dia = "Domingo";
                break; // Interrompe a execução do switch
            case 2: // Se o valor for 2
                dia = "Segunda-feira";
                break;
            case 3:
                dia = "Terça-feira";
                break;
            case 4:
                dia = "Quarta-feira";
                break;
            case 5:
                dia = "Quinta-feira";
                break;
            case 6:
                dia = "Sexta-feira";
                break;
            case 7:
                dia = "Sábado";
                break;
            default: // Equivalente ao "outrocaso", se nenhum caso corresponder
                dia = "Valor inválido";
                break;
        }

        System.out.println("Dia da semana: " + dia);
        sc.close();
    }
}
```

> **Importante:** O comando `break` é essencial. Sem ele, o código continuaria a executar os `case` seguintes ("fall-through"), o que geralmente não é o comportamento desejado. O bloco `default` é opcional e lida com todos os valores não cobertos pelos `case`.

## ✍️ Exercícios Práticos Resolvidos em Java

### Exercício 1: Fórmula de Bhaskara com Validação

**Problema:** Relembrando a fórmula de Bhaskara ($$ax^2 + bx + c = 0$$), precisamos criar um programa que calcule as raízes, mas com duas validações importantes:

1.  O coeficiente `a` não pode ser zero, pois senão não é uma equação do segundo grau.
2.  O valor de delta ($$\Delta = b^2 - 4ac$$) não pode ser negativo, pois não existe raiz quadrada real de número negativo.

O programa deve tratar essas condições antes de tentar calcular as raízes.

**Solução em Java:**

```java
package curso;

import java.util.Locale;
import java.util.Scanner;

public class Bhaskara {

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.print("Coeficiente a: ");
        double a = sc.nextDouble();
        System.out.print("Coeficiente b: ");
        double b = sc.nextDouble();
        System.out.print("Coeficiente c: ");
        double c = sc.nextDouble();

        if (a == 0) {
            System.out.println("Esta não é uma equação de segundo grau!");
        } else {
            double delta = Math.pow(b, 2.0) - 4.0 * a * c;

            if (delta < 0) {
                System.out.println("Esta equação não possui raízes reais.");
            } else {
                double x1 = (-b + Math.sqrt(delta)) / (2.0 * a);
                double x2 = (-b - Math.sqrt(delta)) / (2.0 * a);
                System.out.printf("X1 = %.4f\n", x1);
                System.out.printf("X2 = %.4f\n", x2);
            }
        }
        sc.close();
    }
}
```

**Exemplos de Execução:**

  - **Entrada:** `a=1`, `b=0`, `c=-9` → **Saída:** `X1 = 3.0000`, `X2 = -3.0000`
  - **Entrada:** `a=2`, `b=9`, `c=10` → **Saída:** `X1 = -2.0000`, `X2 = -2.5000`
  - **Entrada:** `a=5`, `b=2`, `c=3` → **Saída:** `Esta equação não possui raízes reais.`
  - **Entrada:** `a=0`, `b=4`, `c=2` → **Saída:** `Esta não é uma equação de segundo grau!`

---

### 🚀 [ricardotecpro.github.io](https://ricardotecpro.github.io/)
