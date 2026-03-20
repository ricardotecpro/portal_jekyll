---
layout: default
title: ☕ Java e Orientação a Objetos
---

# ☕ Java e Orientação a Objetos
## 📐 Exercícios de Fixação: 03 Exercícios POO

---

# ☕ Java e Orientação a Objetos

# Estrutura Condicional: Exercícios em Java ☕

Este documento apresenta uma série de exercícios práticos focados no uso de estruturas condicionais em Java, como `if`, `else if` e `else`. Os problemas abrangem desde cálculos simples até lógicas mais elaboradas, ideais para solidificar o conhecimento fundamental de programação.

## Ambiente de Desenvolvimento Integrado (IDE) 🛠️

Para compilar e executar os códigos de exemplo, você pode usar qualquer IDE moderna de sua preferência. Abaixo estão as instruções básicas para as duas mais populares:

### IntelliJ IDEA

1.  **Crie um novo projeto**: Vá em `File > New > Project`.
2.  Selecione `Java` na lateral e escolha um JDK (Java Development Kit).
3.  Dê um nome ao seu projeto e clique em `Create`.
4.  Na pasta `src` (source), clique com o botão direito e vá em `New > Java Class`.
5.  Dê um nome à classe (ex: `Notas`), cole o código e clique no ícone de "play" verde ao lado do método `main` para executar.

### Visual Studio Code (VS Code)

1.  **Instale o "Extension Pack for Java"**: Vá para a aba de Extensões (`Ctrl+Shift+X`) e procure por `Extension Pack for Java` da Microsoft.
2.  **Crie uma pasta para o projeto**: Abra uma nova pasta no VS Code (`File > Open Folder`).
3.  **Crie um novo arquivo**: Crie um arquivo com a extensão `.java` (ex: `Notas.java`).
4.  **Escreva e execute o código**: Cole o código no arquivo. O VS Code automaticamente mostrará um link `Run` acima do método `main`. Clique nele para executar o programa.

-----

## Problema 1: Notas 📝

Desenvolva um programa que leia as duas notas de um aluno, obtidas no primeiro e segundo semestres. O programa deve calcular e exibir a nota final (soma das duas notas) com uma casa decimal. Se a nota final for inferior a 60.0, o programa também deve exibir a mensagem "REPROVADO".

**Exemplo 1: Aluno Aprovado**

```
Digite a primeira nota: 55.0
Digite a segunda nota: 30.5
NOTA FINAL = 85.5
```

**Exemplo 2: Aluno Reprovado**

```
Digite a primeira nota: 25.0
Digite a segunda nota: 30.0
NOTA FINAL = 55.0
REPROVADO
```

### 💡 Solução em Java

```java
package aplicacao;

import java.util.Locale;
import java.util.Scanner;

public class Notas {

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        double primeiraNota, segundaNota, notaFinal;

        System.out.print("Digite a primeira nota: ");
        primeiraNota = sc.nextDouble();

        System.out.print("Digite a segunda nota: ");
        segundaNota = sc.nextDouble();

        notaFinal = primeiraNota + segundaNota;

        System.out.printf("NOTA FINAL = %.1f%n", notaFinal);

        if (notaFinal < 60.0) {
            System.out.println("REPROVADO");
        }

        sc.close();
    }
}
```

-----

## Problema 2: Fórmula de Bhaskara 📐

Crie um programa que leia os três coeficientes (a, b, c) de uma equação de segundo grau. Utilizando a fórmula de Bhaskara, o programa deve calcular e exibir as raízes x1 e x2 da equação com quatro casas decimais. Caso a equação não possua raízes reais (ou seja, se o 'a' for zero ou o delta for negativo), o programa deve exibir uma mensagem apropriada.

**Fórmula de Bhaskara:** `x = [-b ± sqrt(b² - 4ac)] / (2a)`

**Exemplo 1: Raízes Reais**

```
Coeficiente a: 1
Coeficiente b: 12
Coeficiente c: -13
X1 = 1.0000
X2 = -13.0000
```

**Exemplo 2: Sem Raízes Reais**

```
Coeficiente a: 2
Coeficiente b: 3
Coeficiente c: 4
Esta equacao nao possui raizes reais
```

### 💡 Solução em Java

```java
package aplicacao;

import java.util.Locale;
import java.util.Scanner;

public class Bhaskara {

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        double a, b, c, delta, x1, x2;

        System.out.print("Coeficiente a: ");
        a = sc.nextDouble();

        System.out.print("Coeficiente b: ");
        b = sc.nextDouble();

        System.out.print("Coeficiente c: ");
        c = sc.nextDouble();

        delta = b * b - 4.0 * a * c;

        if (a == 0 || delta < 0.0) {
            System.out.println("Esta equacao nao possui raizes reais");
        } else {
            x1 = (-b + Math.sqrt(delta)) / (2.0 * a);
            x2 = (-b - Math.sqrt(delta)) / (2.0 * a);

            System.out.printf("X1 = %.4f%n", x1);
            System.out.printf("X2 = %.4f%n", x2);
        }

        sc.close();
    }
}
```

-----

## Problema 3: Menor de Três 🥉

Faça um programa que leia três números inteiros e determine e exiba qual deles é o menor. Se houver empate, o valor deve ser mostrado apenas uma vez.

**Exemplo 1:**

```
Primeiro valor: 10
Segundo valor: 5
Terceiro valor: 12
MENOR = 5
```

**Exemplo 2: Com Empate**

```
Primeiro valor: 20
Segundo valor: 7
Terceiro valor: 20
MENOR = 7
```

### 💡 Solução em Java

```java
package aplicacao;

import java.util.Scanner;

public class MenorDeTres {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int valor1, valor2, valor3, menor;

        System.out.print("Primeiro valor: ");
        valor1 = sc.nextInt();
        System.out.print("Segundo valor: ");
        valor2 = sc.nextInt();
        System.out.print("Terceiro valor: ");
        valor3 = sc.nextInt();

        if (valor1 <= valor2 && valor1 <= valor3) {
            menor = valor1;
        } else if (valor2 <= valor3) {
            menor = valor2;
        } else {
            menor = valor3;
        }

        System.out.println("MENOR = " + menor);

        sc.close();
    }
}
```

-----

## Problema 4: Plano de Telefonia 📱

Uma operadora de telefonia cobra `R$ 50.00` por um plano básico que inclui 100 minutos de ligação. Cada minuto que excede a franquia de 100 minutos custa `R$ 2.00`. Crie um programa que leia a quantidade de minutos consumidos por uma pessoa e exiba o valor final a ser pago.

**Exemplo 1: Dentro da Franquia**

```
Digite a quantidade de minutos: 90
Valor a pagar: R$ 50.00
```

**Exemplo 2: Excedendo a Franquia**

```
Digite a quantidade de minutos: 125
Valor a pagar: R$ 100.00
```

### 💡 Solução em Java

```java
package aplicacao;

import java.util.Locale;
import java.util.Scanner;

public class Operadora {

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite a quantidade de minutos: ");
        int minutos = sc.nextInt();

        double valorAPagar = 50.0;
        if (minutos > 100) {
            valorAPagar += (minutos - 100) * 2.0;
        }

        System.out.printf("Valor a pagar: R$ %.2f%n", valorAPagar);

        sc.close();
    }
}
```

-----

## Problema 5: Troco ou Falta 🛒

Elabore um programa para calcular o troco na venda de um produto. O programa deve ler o preço unitário do produto, a quantidade comprada e o valor em dinheiro recebido pelo cliente. Em seguida, deve exibir o valor do troco. Se o dinheiro for insuficiente, o programa deve informar quanto dinheiro falta para completar o pagamento.

**Exemplo 1: Troco Correto**

```
Preço unitário do produto: 10.00
Quantidade comprada: 3
Dinheiro recebido: 50.00
TROCO = 20.00
```

**Exemplo 2: Dinheiro Insuficiente**

```
Preço unitário do produto: 15.50
Quantidade comprada: 4
Dinheiro recebido: 60.00
DINHEIRO INSUFICIENTE. FALTAM 2.00 REAIS
```

### 💡 Solução em Java

```java
package aplicacao;

import java.util.Locale;
import java.util.Scanner;

public class Troco {

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.print("Preço unitário do produto: ");
        double precoUnitario = sc.nextDouble();
        System.out.print("Quantidade comprada: ");
        int quantidade = sc.nextInt();
        System.out.print("Dinheiro recebido: ");
        double dinheiroRecebido = sc.nextDouble();

        double totalCompra = precoUnitario * quantidade;

        if (dinheiroRecebido >= totalCompra) {
            double troco = dinheiroRecebido - totalCompra;
            System.out.printf("TROCO = %.2f%n", troco);
        } else {
            double falta = totalCompra - dinheiroRecebido;
            System.out.printf("DINHEIRO INSUFICIENTE. FALTAM %.2f REAIS%n", falta);
        }

        sc.close();
    }
}
```

-----

## Problema 6: Medidor de Glicose 🩸

Faça um programa para ler a quantidade de glicose no sangue de uma pessoa e exibir sua classificação (Normal, Elevado, Diabetes) com base na tabela de referência abaixo.

| Classificação | Nível de Glicose |
| :--- | :--- |
| Normal | Até 100 mg/dl |
| Elevado | Maior que 100 até 140 mg/dl |
| Diabetes | Maior que 140 mg/dl |

**Exemplos:**

```
Digite a medida da glicose: 95.5
Classificacao: Normal

Digite a medida da glicose: 140.0
Classificacao: Elevado

Digite a medida da glicose: 160.1
Classificacao: Diabetes
```

### 💡 Solução em Java

```java
package aplicacao;

import java.util.Locale;
import java.util.Scanner;

public class Glicose {

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite a medida da glicose: ");
        double glicose = sc.nextDouble();
        String classificacao;

        if (glicose <= 100.0) {
            classificacao = "Normal";
        } else if (glicose <= 140.0) {
            classificacao = "Elevado";
        } else {
            classificacao = "Diabetes";
        }

        System.out.println("Classificacao: " + classificacao);

        sc.close();
    }
}
```

-----

## Problema 7: Lançamento de Dardo 🎯

No arremesso de dardo, um atleta tem três tentativas para alcançar a maior distância possível. Crie um programa que leia as distâncias dos três lançamentos e informe qual foi a maior delas.

**Exemplo:**

```
Digite as tres distancias:
78.90
81.25
75.40
MAIOR DISTANCIA = 81.25
```

### 💡 Solução em Java

```java
package aplicacao;

import java.util.Locale;
import java.util.Scanner;

public class Dardo {

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.println("Digite as tres distancias:");
        double dist1 = sc.nextDouble();
        double dist2 = sc.nextDouble();
        double dist3 = sc.nextDouble();

        double maiorDistancia;

        if (dist1 > dist2 && dist1 > dist3) {
            maiorDistancia = dist1;
        } else if (dist2 > dist3) {
            maiorDistancia = dist2;
        } else {
            maiorDistancia = dist3;
        }

        System.out.printf("MAIOR DISTANCIA = %.2f%n", maiorDistancia);

        sc.close();
    }
}
```

-----

## Problema 8: Conversor de Temperatura 🌡️

Construa um programa para converter temperaturas entre as escalas Celsius e Fahrenheit. O programa deve primeiro perguntar ao usuário qual escala ele usará para inserir a temperatura (`C` ou `F`). Em seguida, ele deve ler a temperatura e convertê-la para a outra escala, exibindo o resultado com duas casas decimais.

**Fórmulas de Conversão:**

* Fahrenheit para Celsius: `C = 5/9 * (F - 32)`
* Celsius para Fahrenheit: `F = C * 9/5 + 32`

**Exemplo 1: Fahrenheit para Celsius**

```
Voce vai digitar a temperatura em qual escala (C/F)? F
Digite a temperatura em Fahrenheit: 95.0
Temperatura equivalente em Celsius: 35.00
```

**Exemplo 2: Celsius para Fahrenheit**

```
Voce vai digitar a temperatura em qual escala (C/F)? C
Digite a temperatura em Celsius: 30.0
Temperatura equivalente em Fahrenheit: 86.00
```

### 💡 Solução em Java

```java
package aplicacao;

import java.util.Locale;
import java.util.Scanner;

public class Temperatura {

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.print("Voce vai digitar a temperatura em qual escala (C/F)? ");
        char escala = sc.next().charAt(0);

        if (escala == 'F' || escala == 'f') {
            System.out.print("Digite a temperatura em Fahrenheit: ");
            double tempFahrenheit = sc.nextDouble();
            double tempCelsius = 5.0 / 9.0 * (tempFahrenheit - 32.0);
            System.out.printf("Temperatura equivalente em Celsius: %.2f%n", tempCelsius);
        } else if (escala == 'C' || escala == 'c') {
            System.out.print("Digite a temperatura em Celsius: ");
            double tempCelsius = sc.nextDouble();
            double tempFahrenheit = tempCelsius * 9.0 / 5.0 + 32.0;
            System.out.printf("Temperatura equivalente em Fahrenheit: %.2f%n", tempFahrenheit);
        }

        sc.close();
    }
}
```

-----

## Problema 9: Lanchonete 🍔

Uma lanchonete tem o seguinte cardápio:

| Código | Produto | Preço |
| :--- | :--- | :--- |
| 1 | Cachorro Quente | R$ 5.00 |
| 2 | X-Salada | R$ 3.50 |
| 3 | X-Bacon | R$ 4.80 |
| 4 | Torrada simples | R$ 8.90 |
| 5 | Refrigerante | R$ 7.32 |

Faça um programa que leia o código de um produto e a quantidade comprada. Em seguida, calcule e exiba o valor total a ser pago, com duas casas decimais. Suponha que o código inserido será sempre válido.

**Exemplo 1:**

```
Codigo do produto comprado: 3
Quantidade comprada: 4
Valor a pagar: R$ 19.20
```

**Exemplo 2:**

```
Codigo do produto comprado: 5
Quantidade comprada: 2
Valor a pagar: R$ 14.64
```

### 💡 Solução em Java

```java
package aplicacao;

import java.util.Locale;
import java.util.Scanner;

public class Lanchonete {

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.print("Codigo do produto comprado: ");
        int codigo = sc.nextInt();
        System.out.print("Quantidade comprada: ");
        int quantidade = sc.nextInt();

        double valorAPagar;

        switch (codigo) {
            case 1:
                valorAPagar = quantidade * 5.00;
                break;
            case 2:
                valorAPagar = quantidade * 3.50;
                break;
            case 3:
                valorAPagar = quantidade * 4.80;
                break;
            case 4:
                valorAPagar = quantidade * 8.90;
                break;
            case 5:
                valorAPagar = quantidade * 7.32;
                break;
            default:
                valorAPagar = 0; // Código inválido, embora o problema assuma que será válido
                break;
        }

        System.out.printf("Valor a pagar: R$ %.2f%n", valorAPagar);
        sc.close();
    }
}
```

-----

## Problema 10: Múltiplos 🔢

Crie um programa que leia dois números inteiros e determine se um é múltiplo do outro. Os números podem ser inseridos em qualquer ordem.

**Conceito:** Um número `A` é múltiplo de `B` se a divisão `A / B` resulta em um resto zero. Em programação, usamos o operador de módulo (`%`) para encontrar o resto.

**Exemplo 1:**

```
Digite dois numeros inteiros:
12
48
Sao multiplos
```

**Exemplo 2:**

```
Digite dois numeros inteiros:
7
15
Nao sao multiplos
```

### 💡 Solução em Java

```java
package aplicacao;

import java.util.Scanner;

public class Multiplos {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Digite dois numeros inteiros:");
        int num1 = sc.nextInt();
        int num2 = sc.nextInt();

        if (num1 % num2 == 0 || num2 % num1 == 0) {
            System.out.println("Sao multiplos");
        } else {
            System.out.println("Nao sao multiplos");
        }

        sc.close();
    }
}
```

-----

## Problema 11: Aumento Salarial 💼

Uma empresa concederá um aumento salarial aos seus funcionários com base nas seguintes faixas:

| Salário Atual | Aumento |
| :--- | :--- |
| Até R$ 1000.00 | 20% |
| \> R$ 1000.00 até R$ 3000.00 | 15% |
| \> R$ 3000.00 até R$ 8000.00 | 10% |
| Acima de R$ 8000.00 | 5% |

Desenvolva um programa que leia o salário de um funcionário e calcule e exiba:

1.  O novo salário.
2.  O valor do aumento.
3.  A porcentagem do aumento.

**Exemplo 1:**

```
Digite o salario da pessoa: 990.00
Novo salario: R$ 1188.00
Aumento: R$ 198.00
Porcentagem: 20 %
```

**Exemplo 2:**

```
Digite o salario da pessoa: 4000.00
Novo salario: R$ 4400.00
Aumento: R$ 400.00
Porcentagem: 10 %
```

### 💡 Solução em Java

```java
package aplicacao;

import java.util.Locale;
import java.util.Scanner;

public class Aumento {

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite o salario da pessoa: ");
        double salario = sc.nextDouble();

        double novoSalario, aumento;
        int porcentagem;

        if (salario <= 1000.0) {
            porcentagem = 20;
        } else if (salario <= 3000.0) {
            porcentagem = 15;
        } else if (salario <= 8000.0) {
            porcentagem = 10;
        } else {
            porcentagem = 5;
        }

        aumento = salario * porcentagem / 100.0;
        novoSalario = salario + aumento;

        System.out.printf("Novo salario: R$ %.2f%n", novoSalario);
        System.out.printf("Aumento: R$ %.2f%n", aumento);
        System.out.println("Porcentagem: " + porcentagem + " %");

        sc.close();
    }
}
```

-----

## Problema 12: Duração do Jogo 🕒

Leia a hora inicial e a hora final de um jogo. A seguir, calcule a duração do jogo, sabendo que ele pode começar em um dia e terminar no outro. A duração mínima é de 1 hora e a máxima é de 24 horas.

**Exemplo 1: Jogo que vira o dia**

```
Hora inicial: 14
Hora final: 3
O JOGO DUROU 13 HORA(S)
```

**Exemplo 2: Jogo no mesmo dia**

```
Hora inicial: 10
Hora final: 12
O JOGO DUROU 2 HORA(S)
```

**Exemplo 3: Jogo com 24 horas**

```
Hora inicial: 0
Hora final: 0
O JOGO DUROU 24 HORA(S)
```

### 💡 Solução em Java

```java
package aplicacao;

import java.util.Scanner;

public class TempoDeJogo {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Hora inicial: ");
        int horaInicial = sc.nextInt();
        System.out.print("Hora final: ");
        int horaFinal = sc.nextInt();

        int duracao;
        if (horaInicial < horaFinal) {
            duracao = horaFinal - horaInicial;
        } else {
            duracao = 24 - horaInicial + horaFinal;
        }

        System.out.println("O JOGO DUROU " + duracao + " HORA(S)");

        sc.close();
    }
}
```

-----

## Problema 13: Coordenadas Cartesianas 🗺️

Leia os valores das coordenadas X e Y de um ponto no plano cartesiano. A seguir, determine a qual quadrante o ponto pertence (Q1, Q2, Q3 ou Q4). Se o ponto estiver na origem, exiba "Origem". Se estiver sobre um dos eixos, exiba "Eixo X" ou "Eixo Y", conforme a situação.

**Exemplo 1:**

```
Valor de X: 5.0
Valor de Y: 7.0
Q1
```

**Exemplo 2:**

```
Valor de X: -4.0
Valor de Y: -5.0
Q3
```

**Exemplo 3:**

```
Valor de X: 0.0
Valor de Y: 10.0
Eixo Y
```

### 💡 Solução em Java

```java
package aplicacao;

import java.util.Locale;
import java.util.Scanner;

public class Coordenadas {

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.print("Valor de X: ");
        double x = sc.nextDouble();
        System.out.print("Valor de Y: ");
        double y = sc.nextDouble();

        if (x == 0.0 && y == 0.0) {
            System.out.println("Origem");
        } else if (x == 0.0) {
            System.out.println("Eixo Y");
        } else if (y == 0.0) {
            System.out.println("Eixo X");
        } else if (x > 0.0 && y > 0.0) {
            System.out.println("Q1");
        } else if (x < 0.0 && y > 0.0) {
            System.out.println("Q2");
        } else if (x < 0.0 && y < 0.0) {
            System.out.println("Q3");
        } else {
            System.out.println("Q4");
        }

        sc.close();
    }
}
```

