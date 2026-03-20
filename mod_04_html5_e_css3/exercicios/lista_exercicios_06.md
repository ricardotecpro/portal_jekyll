---
layout: default
title: ☕ Java e Orientação a Objetos
---

# ☕ Java e Orientação a Objetos
## 📐 Exercícios de Fixação: 06 Exercícios Java e Orientação a Objetos


06 # Lista de Exercícios de Fixação em Java e POO

Este documento apresenta uma série de exercícios de fixação para praticar os conceitos fundamentais da Programação Orientada a Objetos (POO) em Java, incluindo classes, atributos, métodos e membros estáticos. Os problemas foram elaborados para reforçar o aprendizado e a aplicação prática desses conceitos.

## 🧩 Parte 1: Classes, Atributos e Métodos

Nesta seção, focaremos na criação de classes para representar entidades do mundo real ou de um sistema, definindo seus atributos (dados) e métodos (comportamentos).

### Problema 1: Retângulo 📐

**Enunciado:** Desenvolva um programa que leia os valores da largura e altura de um retângulo. Em seguida, o programa deve calcular e exibir o valor de sua área, perímetro e a diagonal. Para isso, crie uma classe `Retangulo`.

**Diagrama da Classe:**
```
+------------------+
|    Retangulo     |
+------------------+
| - largura: double|
| - altura: double |
+------------------+
| + area(): double     |
| + perimetro(): double|
| + diagonal(): double |
+------------------+
```

**Exemplo de Execução:**

* **Entrada:**
    ```
    Digite a largura e a altura do retângulo:
    5.0
    12.0
    ```
* **Saída Esperada:**
    ```
    AREA = 60.00
    PERIMETRO = 34.00
    DIAGONAL = 13.00
    ```

**Resolução Proposta:**

A solução é dividida em duas classes: `Retangulo`, que contém os dados e as operações, e `Programa`, que interage com o usuário.

**`entidades/Retangulo.java`**
```java
package entidades;

public class Retangulo {

    public double largura;
    public double altura;

    // Calcula a área do retângulo
    public double area() {
        return largura * altura;
    }

    // Calcula o perímetro do retângulo
    public double perimetro() {
        return 2 * (largura + altura);
    }

    // Calcula a diagonal do retângulo usando o Teorema de Pitágoras
    public double diagonal() {
        return Math.sqrt(largura * largura + altura * altura);
    }
}
```

**`aplicacao/Programa.java`**
```java
package aplicacao;

import java.util.Locale;
import java.util.Scanner;
import entidades.Retangulo;

public class Programa {

    public static void main(String[] args) {
        // Configura o Locale para usar o ponto como separador decimal
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        Retangulo retangulo = new Retangulo();

        System.out.println("Digite a largura e a altura do retângulo:");
        retangulo.largura = sc.nextDouble();
        retangulo.altura = sc.nextDouble();

        // Exibe os resultados formatados
        System.out.printf("AREA = %.2f%n", retangulo.area());
        System.out.printf("PERIMETRO = %.2f%n", retangulo.perimetro());
        System.out.printf("DIAGONAL = %.2f%n", retangulo.diagonal());

        sc.close();
    }
}
```

---

### Problema 2: Funcionário 👨‍💼

**Enunciado:** Crie um programa para ler os dados de um funcionário (nome, salário bruto e imposto). O programa deve exibir o nome e o salário líquido. Em seguida, deve ser possível aumentar o salário com base em uma porcentagem fornecida pelo usuário (a porcentagem afeta apenas o salário bruto) e mostrar os dados atualizados do funcionário. Utilize uma classe `Funcionario`.

**Diagrama da Classe:**
```
+------------------------------------------+
|                Funcionario               |
+------------------------------------------+
| - nome: String                           |
| - salarioBruto: double                   |
| - imposto: double                        |
+------------------------------------------+
| + salarioLiquido(): double               |
| + aumentarSalario(porcentagem: double): void |
+------------------------------------------+
```

**Exemplo de Execução:**

* **Entrada:**
    ```
    Nome: Maria Souza
    Salário bruto: 7500.00
    Imposto: 1200.00
    ```
* **Saída Intermediária:**
    ```
    Funcionário: Maria Souza, R$ 6300.00
    ```
* **Entrada Adicional:**
    ```
    Qual a porcentagem para aumentar o salário? 15.0
    ```
* **Saída Final:**
    ```
    Dados atualizados: Maria Souza, R$ 7425.00
    ```

**Resolução Proposta:**

**`entidades/Funcionario.java`**
```java
package entidades;

public class Funcionario {

    public String nome;
    public double salarioBruto;
    public double imposto;

    // Calcula o salário líquido
    public double salarioLiquido() {
        return salarioBruto - imposto;
    }

    // Aumenta o salário bruto com base em uma porcentagem
    public void aumentarSalario(double porcentagem) {
        salarioBruto += salarioBruto * porcentagem / 100.0;
    }

    // Sobrescreve o método toString para formatar a saída dos dados
    @Override
    public String toString() {
        return nome + ", R$ " + String.format("%.2f", salarioLiquido());
    }
}
```

**`aplicacao/Programa.java`**
```java
package aplicacao;

import java.util.Locale;
import java.util.Scanner;
import entidades.Funcionario;

public class Programa {

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        Funcionario func = new Funcionario();

        System.out.print("Nome: ");
        func.nome = sc.nextLine();
        System.out.print("Salário bruto: ");
        func.salarioBruto = sc.nextDouble();
        System.out.print("Imposto: ");
        func.imposto = sc.nextDouble();

        System.out.println();
        System.out.println("Funcionário: " + func);
        System.out.println();

        System.out.print("Qual a porcentagem para aumentar o salário? ");
        double porcentagem = sc.nextDouble();
        func.aumentarSalario(porcentagem);

        System.out.println();
        System.out.println("Dados atualizados: " + func);

        sc.close();
    }
}
```

---

### Problema 3: Aluno 🎓

**Enunciado:** Faça um programa para ler o nome de um aluno e as três notas que ele obteve nos trimestres do ano. O primeiro trimestre vale 30 pontos, e o segundo e terceiro valem 35 pontos cada. Ao final, o programa deve mostrar a nota final do aluno, indicar se ele foi **APROVADO** ou **REPROVADO** e, caso reprovado, informar quantos pontos faltam para atingir a nota mínima de aprovação (60% do total, ou seja, 60 pontos).

**Exemplos de Execução:**

**Exemplo 1 (Aprovado):**
* **Entrada:**
    ```
    Carlos Andrade
    28.00
    33.00
    34.00
    ```
* **Saída:**
    ```
    NOTA FINAL = 95.00
    APROVADO
    ```

**Exemplo 2 (Reprovado):**
* **Entrada:**
    ```
    Ana Beatriz
    15.00
    18.00
    22.00
    ```
* **Saída:**
    ```
    NOTA FINAL = 55.00
    REPROVADO
    FALTARAM 5.00 PONTOS
    ```

**Resolução Proposta:**

**`entidades/Estudante.java`**
```java
package entidades;

public class Estudante {

    public String nome;
    public double nota1;
    public double nota2;
    public double nota3;

    // Calcula a nota final somando as notas dos trimestres
    public double notaFinal() {
        return nota1 + nota2 + nota3;
    }

    // Verifica quantos pontos faltam para a aprovação (mínimo de 60)
    public double pontosFaltantes() {
        if (notaFinal() < 60.0) {
            return 60.0 - notaFinal();
        } else {
            return 0.0;
        }
    }
}
```

**`aplicacao/Programa.java`**
```java
package aplicacao;

import java.util.Locale;
import java.util.Scanner;
import entidades.Estudante;

public class Programa {

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        Estudante estudante = new Estudante();

        System.out.println("Digite o nome do aluno e suas três notas:");
        estudante.nome = sc.nextLine();
        estudante.nota1 = sc.nextDouble();
        estudante.nota2 = sc.nextDouble();
        estudante.nota3 = sc.nextDouble();

        System.out.printf("NOTA FINAL = %.2f%n", estudante.notaFinal());

        if (estudante.notaFinal() < 60.0) {
            System.out.println("REPROVADO");
            System.out.printf("FALTARAM %.2f PONTOS%n", estudante.pontosFaltantes());
        } else {
            System.out.println("APROVADO");
        }

        sc.close();
    }
}
```

## ⚙️ Parte 2: Membros Estáticos

Membros estáticos (atributos ou métodos) pertencem à classe, e não a uma instância específica (objeto) da classe. Eles são úteis para definir constantes ou criar funções auxiliares que não dependem do estado de um objeto.

### Problema 4: Câmbio 💵

**Enunciado:** Faça um programa que leia a cotação do dólar e um valor em dólares a ser comprado. O programa deve informar quantos reais a pessoa pagará pelos dólares, considerando que a compra tem uma taxa de **6% de IOF (Imposto sobre Operações Financeiras)** sobre o valor em dólar. Crie uma classe `ConversorDeMoeda` com métodos estáticos para realizar os cálculos.

**Conceito-chave:** O uso de `static` é ideal aqui porque a conversão do dólar e a taxa de IOF são operações que não dependem de um objeto específico. Elas são regras de negócio que se aplicam de forma geral.

**Exemplo de Execução:**

* **Entrada:**
    ```
    Qual o valor do dólar? 5.25
    Quantos dólares serão comprados? 350.00
    ```
* **Saída Esperada:**
    ```
    Valor a ser pago em reais = R$ 1947.75
    ```

**Resolução Proposta:**

**`utilitarios/ConversorDeMoeda.java`**
```java
package utilitarios;

public class ConversorDeMoeda {

    // A taxa de IOF é uma constante, ideal para ser um atributo estático
    public static final double IOF = 0.06;

    /**
     * Converte um valor de dólar para real, aplicando a taxa de IOF.
     * @param quantidadeEmDolar A quantidade de dólares a ser convertida.
     * @param cotacaoDolar A cotação atual do dólar.
     * @return O valor final em reais a ser pago.
     */
    public static double dolarParaReal(double quantidadeEmDolar, double cotacaoDolar) {
        double valorSemIOF = quantidadeEmDolar * cotacaoDolar;
        double valorIOF = valorSemIOF * IOF;
        return valorSemIOF + valorIOF;
        // Ou de forma simplificada: return quantidadeEmDolar * cotacaoDolar * (1.0 + IOF);
    }
}
```

**`aplicacao/Programa.java`**
```java
package aplicacao;

import java.util.Locale;
import java.util.Scanner;
import utilitarios.ConversorDeMoeda;

public class Programa {

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.print("Qual o valor do dólar? ");
        double cotacaoDolar = sc.nextDouble();

        System.out.print("Quantos dólares serão comprados? ");
        double quantidade = sc.nextDouble();

        // Chama o método estático diretamente da classe, sem precisar criar um objeto
        double resultado = ConversorDeMoeda.dolarParaReal(quantidade, cotacaoDolar);

        System.out.printf("Valor a ser pago em reais = R$ %.2f%n", resultado);

        sc.close();
    }
}
```

## 🚀 Como Compilar e Executar os Projetos

Você pode usar qualquer IDE moderna de sua preferência. Abaixo estão as instruções para o **VS Code** e **IntelliJ IDEA**, que são duas das opções mais populares.

### Usando o Visual Studio Code

1.  **Instalação:** Certifique-se de ter o [**Extension Pack for Java**](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack) instalado no VS Code.
2.  **Criar Projeto:**
    * Abra o VS Code e pressione `Ctrl+Shift+P` para abrir a paleta de comandos.
    * Digite e selecione `Java: Create Java Project`.
    * Escolha `No build tools`.
    * Selecione um local para salvar seu projeto.
    * Dê um nome ao projeto (ex: `exercicios-poo`).
3.  **Criar Pacotes e Classes:**
    * Na aba do Explorer (`Ctrl+Shift+E`), clique com o botão direito na pasta `src`.
    * Selecione `New Folder` para criar os pacotes: `aplicacao`, `entidades` e `utilitarios`.
    * Clique com o botão direito em cada pasta de pacote e selecione `New File` para criar as classes (ex: `Retangulo.java` dentro de `entidades`).
4.  **Copiar e Executar:**
    * Copie e cole o código correspondente em cada arquivo.
    * Abra o arquivo que contém o método `main` (ex: `Programa.java`).
    * Clique no botão **Run** que aparece acima do método `main` ou pressione `F5`.

### Usando o IntelliJ IDEA

1.  **Instalação:** Baixe e instale a versão [Community ou Ultimate do IntelliJ IDEA](https://www.jetbrains.com/idea/).
2.  **Criar Projeto:**
    * Na tela de boas-vindas, clique em `New Project`.
    * Dê um nome ao projeto (ex: `exercicios-poo`).
    * Selecione `Java` como linguagem e `IntelliJ` como sistema de build.
    * Verifique se o JDK está configurado corretamente.
    * Clique em `Create`.
3.  **Criar Pacotes e Classes:**
    * No painel do projeto à esquerda, expanda a pasta do projeto e clique com o botão direito na pasta `src`.
    * Selecione `New` -> `Package` e digite o nome do pacote (ex: `entidades`). Repita para os outros pacotes.
    * Clique com o botão direito no pacote desejado e selecione `New` -> `Java Class` para criar sua classe (ex: `Retangulo`).
4.  **Copiar e Executar:**
    * Copie e cole os códigos nos arquivos criados.
    * Abra o arquivo que contém o método `main` (ex: `Programa.java`).
    * Clique na seta verde ao lado da declaração do método `main` e selecione `Run 'Programa.main()'`.
