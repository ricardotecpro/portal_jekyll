---
layout: default
title: 📦 Funções (Métodos) em Programação
---

# 📦 Funções (Métodos) em Programação

Funções, que em Java e em outras linguagens orientadas a objetos são mais comumente chamadas de **métodos**, são um dos pilares da programação estruturada. Elas nos permitem organizar e reutilizar código, tornando nossos programas mais modulares, legíveis e fáceis de manter.

## 🤔 O que são Funções (ou Métodos)?

De maneira informal, uma função (ou método) é uma unidade de código autônoma que realiza uma tarefa específica. Ela também pode ser chamada de subprograma ou sub-rotina. Suas principais características são:

  * **Pode receber parâmetros** (ou argumentos) de entrada.
  * **Pode executar uma lógica** interna.
  * **Pode retornar um valor** de saída.

### Qual a importância de usar funções?

Utilizar funções traz enormes benefícios para o desenvolvimento de software:

  * **Dividir para conquistar**: Permite quebrar um problema complexo em problemas menores e mais gerenciáveis.
  * **Organização e Legibilidade**: O código fica mais limpo e mais fácil de entender.
  * **Reaproveitamento de código**: Uma função escrita uma vez pode ser chamada (usada) várias vezes em diferentes partes do programa.
  * **Delegação**: Facilita a atribuição de responsabilidades em projetos de equipe.

## Dissecando um Método em Java

Vamos analisar a estrutura de um método em Java, traduzindo o exemplo `media` do material de estudo.

```java
//      (1)     (2)     (3)            (4)
public static double calcularMedia(double a, double b) {
    // (5) Corpo do método
    double soma = a + b; // Variável local do método
    
    // (6) Retorno do método
    return soma / 2.0;
}
```

1.  **Modificadores de Acesso e `static`**: `public` significa que o método pode ser chamado de qualquer lugar. `static` indica que o método pertence à classe, e não a um objeto específico (essencial para chamá-lo diretamente do `main`).
2.  **Tipo de Retorno**: `double` indica o tipo de dado que o método irá retornar ao final de sua execução.
3.  **Nome do Método**: `calcularMedia` é o identificador que usamos para chamar o método.
4.  **Parâmetros de Entrada**: `(double a, double b)` é a lista de parâmetros que o método espera receber.
5.  **Corpo do Método**: O bloco de código entre chaves `{}` onde a lógica é executada.
6.  **Comando `return`**: Envia o resultado do cálculo de volta para quem chamou o método.

### Chamando um Método

Para usar um método, você o "chama" pelo nome, passando os valores esperados para os parâmetros.

```java
public static void main(String[] args) {
    // Chamando o método e armazenando o resultado
    double mediaFinal = calcularMedia(8.0, 7.5);

    System.out.println("A média é: " + mediaFinal); // Saída: A média é: 7.75
}
```

## 🔐 Escopo de Variáveis

O **escopo** de uma variável define onde ela é "visível" e pode ser utilizada.

Em Java, as variáveis declaradas dentro de um método, incluindo seus parâmetros, são **locais**. Isso significa que elas só existem e só podem ser acessadas dentro daquele método.

  * Uma função não "enxerga" as variáveis locais de outra função.
  * Se duas funções diferentes tiverem variáveis com o mesmo nome, elas são completamente independentes uma da outra.

**Exemplo:**

```java
public static void funcaoF() {
    int x = 10; // 'x' só existe aqui dentro
    System.out.println("Dentro da funcaoF, x = " + x);
}

public static void funcaoG() {
    int x = 99; // Este é outro 'x', totalmente diferente do anterior
    System.out.println("Dentro da funcaoG, x = " + x);
    // System.out.println(funcaoF.x); // ERRO! Não é possível acessar o 'x' da funcaoF
}
```

> **Boas Práticas**: Para que uma função seja previsível e reutilizável, ela deve, idealmente, ser uma **função pura**. Isso significa que seu resultado deve depender *apenas* de seus parâmetros de entrada, sem acessar ou modificar variáveis de fora de seu escopo (evitando "efeitos colaterais").

## 📝 Documentando Métodos com Javadoc

Documentar seu código é crucial. Em Java, o padrão para isso é o **Javadoc**. A documentação é feita em um bloco de comentário especial (`/** ... */`) logo acima da assinatura do método.

  * **Assinatura**: A primeira linha da definição do método.
  * **Descrição dos Parâmetros**: O que cada parâmetro de entrada representa (usando a tag `@param`).
  * **Efeito da Função**: O que a função faz e o que ela retorna (usando a tag `@return`).

**Exemplo com a fórmula de Heron:**

```java
/**
 * Calcula a área de um triângulo usando a fórmula de Heron.
 *
 * @param a Primeiro lado do triângulo
 * @param b Segundo lado do triângulo
 * @param c Terceiro lado do triângulo
 * @return A área calculada do triângulo
 */
public static double areaTriangulo(double a, double b, double c) {
    double p = (a + b + c) / 2.0;
    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}
```

## 📢 Métodos que Não Retornam Valor (`void`)

Às vezes, uma função precisa executar uma ação (como imprimir algo na tela) em vez de calcular e retornar um valor. Esses métodos são chamados de **procedimentos** em algumas linguagens.

Em Java, eles são declarados com o tipo de retorno `void`.

**Exemplo: Gerar um Relatório**

**Problema:** Ler os dados de um contrato e mostrar um relatório formatado na tela.

**Solução em Java com `void`:**

```java
import java.util.Locale;
import java.util.Scanner;

public class RelatorioFinanceiro {

    /**
     * Exibe um relatório de financiamento formatado no console.
     * @param nome O nome do cliente
     * @param total O valor total do financiamento
     * @param entrada O valor da entrada
     */
    public static void mostrarRelatorio(String nome, double total, double entrada) {
        double restante = total - entrada;
        System.out.println("
--- RELATÓRIO ---");
        System.out.println("NOME: " + nome);
        System.out.printf("VALOR TOTAL: R$ %.2f
", total);
        System.out.printf("VALOR DE ENTRADA: R$ %.2f
", entrada);
        System.out.printf("VALOR PARCELADO: R$ %.2f
", restante);
        System.out.println("-----------------");
    }

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Nome do cliente: ");
        String nomeCliente = sc.nextLine();
        System.out.print("Valor total financiado: ");
        double valorTotal = sc.nextDouble();
        System.out.print("Valor de entrada: ");
        double valorEntrada = sc.nextDouble();

        // A chamada de um método void é uma instrução "solta"
        mostrarRelatorio(nomeCliente, valorTotal, valorEntrada);

        sc.close();
    }
}
```

## ✍️ Exercícios Práticos Resolvidos

### Exercício 1: Área de Triângulos

**Problema:** Ler as medidas dos lados de dois triângulos, X e Y. Em seguida, mostrar o valor da área de cada um, reutilizando a lógica de cálculo.

**Solução em Java:**

```java
// O método areaTriangulo() já foi definido e documentado acima.

public static void main(String[] args) {
    Locale.setDefault(Locale.US);
    
    // Medidas do triângulo X
    double areaX = areaTriangulo(3.00, 4.00, 5.00);
    
    // Medidas do triângulo Y
    double areaY = areaTriangulo(7.50, 4.50, 4.02);

    System.out.printf("Área de X = %.4f
", areaX);
    System.out.printf("Área de Y = %.4f
", areaY);
}
```

**Saída Esperada:**

```
Área de X = 6.0000
Área de Y = 7.5638
```

### Exercício 2: Funções que Chamam Funções

**Problema:** Fazer um programa para ler cinco números inteiros e mostrar o menor dentre eles, reaproveitando a lógica ao máximo.

**Solução em Java:**

```java
/**
 * Encontra o menor valor entre três números inteiros.
 * @return O menor dos três números
 */
public static int menorDeTres(int x, int y, int z) {
    if (x < y && x < z) {
        return x;
    } else if (y < z) {
        return y;
    } else {
        return z;
    }
}

/**
 * Encontra o menor valor entre cinco números inteiros,
 * reutilizando a função menorDeTres.
 * @return O menor dos cinco números
 */
public static int menorDeCinco(int n1, int n2, int n3, int n4, int n5) {
    // Encontra o menor dos três primeiros
    int aux = menorDeTres(n1, n2, n3);
    // Compara o resultado anterior com os dois últimos números
    return menorDeTres(aux, n4, n5);
}

public static void main(String[] args) {
    int menor = menorDeCinco(9, 5, 3, 12, 7);
    System.out.println("Menor = " + menor); // Saída: Menor = 3
}
```

---

### 🚀 [ricardotecpro.github.io](https://ricardotecpro.github.io/)

