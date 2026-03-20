# ☕ Exercícios Resolvidos com Funções em Java

Este documento apresenta uma série de problemas práticos e suas soluções em Java, com foco na criação e utilização de funções (métodos). Cada exercício foi projetado para reforçar conceitos como modularidade, reutilização de código e a diferença entre funções que retornam valores e procedimentos (`void`).

> **Atenção:** Nos exemplos de execução, os dados em **vermelho** representam os valores digitados pelo usuário no console.

## 1\. Problema "temperatura"

**Descrição:** Fazer um programa que solicite uma temperatura em Fahrenheit e mostre a conversão para Celsius. A fórmula é: $$C = \frac{5}{9}(F - 32)$$

### Solução em Java

```java
package exercicios;

import java.util.Locale;
import java.util.Scanner;

public class Temperatura {

    /**
     * Converte uma temperatura de Fahrenheit para Celsius.
     * @param f A temperatura em Fahrenheit.
     * @return A temperatura equivalente em Celsius.
     */
    public static double fahrenheitParaCelsius(double f) {
        // É crucial usar 5.0/9.0 para garantir a divisão de ponto flutuante.
        return 5.0 / 9.0 * (f - 32.0);
    }

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite a temperatura em Fahrenheit: ");
        double fahrenheit = sc.nextDouble();

        double celsius = fahrenheitParaCelsius(fahrenheit);

        System.out.printf("Temperatura em Celsius = %.2f\n", celsius);

        sc.close();
    }
}
```

### Exemplo de Execução

```
Digite a temperatura em Fahrenheit: 75.0
Temperatura em Celsius = 23.89
```

-----

## 2\. Problema "retangulo"

**Descrição:** Fazer um programa para ler a base e a altura de um retângulo. Em seguida, usando funções, mostrar os valores da área, do perímetro e da diagonal.

### Solução em Java

```java
package exercicios;

import java.util.Locale;
import java.util.Scanner;

public class Retangulo {

    public static double calcularArea(double base, double altura) {
        return base * altura;
    }

    public static double calcularPerimetro(double base, double altura) {
        return 2 * (base + altura);
    }

    public static double calcularDiagonal(double base, double altura) {
        return Math.sqrt(Math.pow(base, 2.0) + Math.pow(altura, 2.0));
    }

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite o valor da base do retângulo: ");
        double base = sc.nextDouble();
        System.out.print("Digite o valor da altura do retângulo: ");
        double altura = sc.nextDouble();

        double area = calcularArea(base, altura);
        double perimetro = calcularPerimetro(base, altura);
        double diagonal = calcularDiagonal(base, altura);

        System.out.printf("Área = %.2f\n", area);
        System.out.printf("Perímetro = %.2f\n", perimetro);
        System.out.printf("Diagonal = %.2f\n", diagonal);

        sc.close();
    }
}
```

### Exemplo de Execução

```
Digite o valor da base do retângulo: 3.0
Digite o valor da altura do retângulo: 4.0
Área = 12.00
Perímetro = 14.00
Diagonal = 5.00
```

-----

## 3\. Problema "tabuada"

**Descrição:** Fazer um programa para imprimir a tabuada de multiplicação (de 1 a 10) de um número N fornecido pelo usuário, usando um procedimento (`void`).

### Solução em Java

```java
package exercicios;

import java.util.Scanner;

public class Tabuada {

    /**
     * Exibe na tela a tabuada de multiplicação de 1 a 10 para um dado número.
     * @param n O número para o qual a tabuada será gerada.
     */
    public static void mostrarTabuada(int n) {
        for (int i = 1; i <= 10; i++) {
            System.out.printf("%d x %d = %d\n", n, i, n * i);
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Você quer a tabuada de qual número? ");
        int numero = sc.nextInt();
        
        mostrarTabuada(numero);

        sc.close();
    }
}
```

### Exemplo de Execução

```
Você quer a tabuada de qual número? 7
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70
```

-----

## 4\. Problema "classificar\_imc"

**Descrição:** Fazer um programa para ler o peso e altura de uma pessoa. Primeiro, calcular o IMC ($$IMC = \frac{Peso}{Altura^2}$$). Depois, classificar o resultado de acordo com a tabela:

* **Abaixo de 20:** "abaixo do peso"
* **De 20 a 25 (exclusive):** "peso normal"
* **De 25 a 30 (exclusive):** "sobrepeso"
* **30 ou mais:** "obeso"

### Solução em Java

```java
package exercicios;

import java.util.Locale;
import java.util.Scanner;

public class ClassificarImc {

    /**
     * Calcula o Índice de Massa Corporal (IMC).
     * @param peso O peso da pessoa em kg.
     * @param altura A altura da pessoa em metros.
     * @return O valor do IMC.
     */
    public static double calcularImc(double peso, double altura) {
        return peso / Math.pow(altura, 2.0);
    }

    /**
     * Exibe a classificação do IMC de acordo com as faixas de referência.
     * @param imc O valor do IMC a ser classificado.
     */
    public static void classificar(double imc) {
        String classificacao;
        if (imc < 20.0) {
            classificacao = "abaixo do peso";
        } else if (imc < 25.0) {
            classificacao = "peso normal";
        } else if (imc < 30.0) {
            classificacao = "sobrepeso";
        } else {
            classificacao = "obeso";
        }
        System.out.println("Classificação: " + classificacao);
    }

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite o peso: ");
        double peso = sc.nextDouble();
        System.out.print("Digite a altura: ");
        double altura = sc.nextDouble();

        double imc = calcularImc(peso, altura);
        
        System.out.printf("Resultado do IMC: %.2f\n", imc);
        classificar(imc);

        sc.close();
    }
}
```

### Exemplo de Execução

```
Digite o peso: 83.5
Digite a altura: 1.86
Resultado do IMC: 24.16
Classificação: peso normal
```

-----

## 5\. Problema "salario\_liquido"

**Descrição:** Fazer um programa que informa o salário líquido a partir do salário bruto, descontando imposto e previdência com base em faixas de valores.

* **Imposto:** 20% para salários até R$ 4000.00; 25% para salários acima.
* **Previdência:** 10% para salários até R$ 1500.00; 15% para salários acima.

### Solução em Java

```java
package exercicios;

import java.util.Locale;
import java.util.Scanner;

public class SalarioLiquido {

    /**
     * Calcula o valor do imposto com base no salário bruto.
     * @param quantia O valor do salário bruto.
     * @return O valor do imposto a ser pago.
     */
    public static double imposto(double quantia) {
        if (quantia <= 4000.00) {
            return quantia * 0.20;
        } else {
            return quantia * 0.25;
        }
    }

    /**
     * Calcula o valor da previdência com base no salário bruto.
     * @param quantia O valor do salário bruto.
     * @return O valor do desconto da previdência.
     */
    public static double previdencia(double quantia) {
        if (quantia <= 1500.00) {
            return quantia * 0.10;
        } else {
            return quantia * 0.15;
        }
    }

    /**
     * Calcula o salário líquido.
     * @param quantia O valor do salário bruto.
     * @return O valor do salário líquido.
     */
    public static double calcularSalarioLiquido(double quantia) {
        double impostoPago = imposto(quantia);
        double previdenciaPaga = previdencia(quantia);
        return quantia - impostoPago - previdenciaPaga;
    }

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite o valor do salário bruto: ");
        double salarioBruto = sc.nextDouble();

        double liquido = calcularSalarioLiquido(salarioBruto);

        System.out.printf("Salário líquido = R$ %.2f\n", liquido);

        sc.close();
    }
}
```

### Exemplo de Execução

```
Digite o valor do salário bruto: 5000.00
Salário líquido = R$ 3000.00
```

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)
