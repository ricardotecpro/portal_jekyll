---
layout: default
title: ☕ Java: Programação Funcional e Expressões Lambda
---

# ☕ Java: Programação Funcional e Expressões Lambda

## 🎯 Uma Experiência com Comparator

Vamos explorar como a programação funcional e as expressões lambda podem simplificar e tornar mais flexível o trabalho com coleções em Java, usando `Comparator` como um exemplo inicial.

### Problema com Comparação Tradicional

Suponha uma classe `Produto` com atributos `nome` e `preco`.

```java
// Modelo da classe Produto
public class Produto {
    private String nome;
    private Double preco;

    public Produto(String nome, Double preco) {
        this.nome = nome;
        this.preco = preco;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Double getPreco() {
        return preco;
    }

    public void setPreco(Double preco) {
        this.preco = preco;
    }

    @Override
    public String toString() {
        return "Produto{" +
               "nome='" + nome + '\'' +
               ", preco=" + String.format("%.2f", preco) +
               '}';
    }
}
```

Se quisermos ordenar uma lista de produtos, uma abordagem comum seria fazer a classe `Produto` implementar a interface `Comparable<Produto>`.

```java
// Exemplo de Produto implementando Comparable
public class Produto implements Comparable<Produto> {
    private String nome;
    private Double preco;

    // Construtor e getters/setters omitidos para brevidade

    @Override
    public int compareTo(Produto outro) {
        return this.preco.compareTo(outro.getPreco()); // Compara por preço
    }
}
```

No entanto, essa abordagem tem uma desvantagem: a classe `Produto` não fica "fechada para alteração". Se o critério de comparação mudar (por exemplo, quisermos ordenar por nome em vez de preço), precisaríamos alterar a classe `Produto`. Isso viola o Princípio Aberto/Fechado (Open/Closed Principle) da programação orientada a objetos, que afirma que entidades de software devem ser abertas para extensão, mas fechadas para modificação.

### A Solução com `Comparator` e `List.sort`

Podemos usar o método `sort` da interface `List`, que aceita um `Comparator` como argumento. Isso nos permite definir diferentes critérios de ordenação sem modificar a classe `Produto`.

```java
// Interface List possui o método:
// default void sort(Comparator<? super E> c)
```

Um `Comparator` é uma interface que define um método `compare(obj1, obj2)`, permitindo a criação de lógicas de comparação personalizadas e externas à classe dos objetos sendo comparados.

### Abordagens para Implementar `Comparator` 🔍

Existem várias maneiras de fornecer uma implementação de `Comparator`:

1.  **Objeto de classe separada**: Criar uma classe que implementa `Comparator`.
2.  **Objeto de classe anônima**: Definir e instanciar uma classe sem nome diretamente.
3.  **Objeto de expressão lambda com chaves**: Usar uma expressão lambda com um bloco de código.
4.  **Objeto de expressão lambda sem chaves**: Usar uma expressão lambda concisa para uma única instrução.
5.  **Expressão lambda "direto no argumento"**: Passar a expressão lambda diretamente como argumento do método `sort`.

##  Paradigm Shifts: Programação Funcional 🚀

A programação funcional é um paradigma de programação que trata a computação como a avaliação de funções matemáticas. É baseada no formalismo matemático **Cálculo Lambda**, desenvolvido por Alonzo Church nos anos 1930.

### Paradigmas de Programação Comuns:

* **Imperativo**: Descreve a computação em termos de declarações que mudam o estado de um programa (ex: C, Pascal, Fortran).
* **Orientado a Objetos**: Baseado no conceito de "objetos", que podem conter dados na forma de campos (atributos) e código na forma de procedimentos (métodos) (ex: Java < 8, C++).
* **Funcional**: Trata funções como cidadãos de primeira classe, enfatiza a imutabilidade e evita efeitos colaterais (ex: Haskell, Clojure).
* **Lógico**: Baseado na lógica formal (ex: Prolog).
* **Multiparadigma**: Suporta mais de um paradigma de programação (ex: Java 8+, JavaScript, Python, C#).

### Comparativo: Programação Imperativa vs. Funcional

| Característica                               | Programação Imperativa             | Programação Funcional                |
| :------------------------------------------- | :--------------------------------- | :----------------------------------- |
| Como se descreve algo a ser computado      | Comandos ("como" - imperativa)     | Expressões ("o quê" - declarativa)   |
| Funções possuem transparência referencial    | Fraco                              | Forte                                |
| Objetos imutáveis                            | Raro                               | Comum                                |
| Funções são objetos de primeira ordem        | Não                                | Sim                                  |
| Expressividade / código conciso              | Baixa                              | Alta                                 |
| Tipagem dinâmica / inferência de tipos       | Raro                               | Comum                                |
| Execução tardia (lazy)                       | Raro                               | Comum                                |

### ✨ Transparência Referencial

Uma função possui **transparência referencial** se seu resultado for sempre o mesmo para os mesmos dados de entrada, sem causar efeitos colaterais observáveis.
* **Benefícios**: Simplicidade e previsibilidade. Código com transparência referencial é mais fácil de testar, depurar e paralelizar.

**Exemplo de função que NÃO é referencialmente transparente:**

```java
package aplicacao;

import java.util.Arrays;

public class Programa {

    public static int valorGlobal = 3; // Variável global que pode mudar o comportamento da função

    public static void main(String[] args) {
        int[] vetor = new int[] {3, 4, 5};
        alterarValoresImpares(vetor);
        System.out.println(Arrays.toString(vetor)); // Saída depende do valorGlobal

        valorGlobal = 10; // Alterando o estado externo
        alterarValoresImpares(vetor); // Chamada subsequente pode produzir resultado diferente para a mesma entrada inicial de vetor
        System.out.println(Arrays.toString(vetor));
    }

    // Esta função modifica o array de entrada e depende de uma variável global
    public static void alterarValoresImpares(int[] numeros) {
        for (int i = 0; i < numeros.length; i++) {
            if (numeros[i] % 2 != 0) {
                numeros[i] += valorGlobal; // Efeito colateral: modifica o array e usa valorGlobal
            }
        }
    }
}
```
Neste exemplo, `alterarValoresImpares` não é referencialmente transparente porque:
1.  Modifica o array `numeros` passado como argumento (efeito colateral).
2.  Seu comportamento depende de `valorGlobal`, que é externo à função e pode mudar.

### 🥇 Funções como Objetos de Primeira Ordem (Primeira Classe)

Isso significa que funções podem ser:
* Passadas como argumentos para outras funções.
* Retornadas como resultado de outras funções.
* Atribuídas a variáveis.

**Exemplo com "Method References"**:
O operador `::` (dois pontos duplos) é usado para "method references", uma forma concisa de expressão lambda para chamar um método existente.

Sintaxe: `Classe::metodoEstatico` ou `objeto::metodoDeInstancia` ou `Classe::metodoDeInstancia`.

```java
import java.util.ArrayList;
import java.util.List;
import java.util.Comparator;

// Classe Produto definida anteriormente

public class Programa {

    // Método estático que compara dois produtos pelo preço
    public static int compararProdutos(Produto p1, Produto p2) {
        return p1.getPreco().compareTo(p2.getPreco());
    }

    public static void main(String[] args) {
        List<Produto> lista = new ArrayList<>();
        lista.add(new Produto("TV", 900.00));
        lista.add(new Produto("Notebook", 1200.00));
        lista.add(new Produto("Tablet", 450.00));

        // Usando method reference para passar a função de comparação
        lista.sort(Programa::compararProdutos);

        // Usando method reference para imprimir cada produto
        lista.forEach(System.out::println);
    }
}
```

### 📝 Tipagem Dinâmica / Inferência de Tipos

Em expressões lambda, muitas vezes o compilador Java pode inferir os tipos dos parâmetros, tornando o código mais conciso.

```java
import java.util.ArrayList;
import java.util.List;

// Classe Produto definida anteriormente

public class AplicacaoPrincipal {
    public static void main(String[] args) {
        List<Produto> lista = new ArrayList<>();
        lista.add(new Produto("TV", 900.00));
        lista.add(new Produto("Notebook", 1200.00));
        lista.add(new Produto("Tablet", 450.00));

        // O compilador infere que p1 e p2 são do tipo Produto
        lista.sort((p1, p2) -> p1.getPreco().compareTo(p2.getPreco()));

        lista.forEach(System.out::println);
    }
}
```

### 📏 Expressividade / Código Conciso

A programação funcional e as expressões lambda permitem escrever código mais expressivo e enxuto.

**Exemplo: Somar elementos de uma lista**

**Abordagem imperativa:**
```java
List<Integer> numeros = Arrays.asList(1, 2, 3, 4, 5);
Integer somaImperativa = 0;
for (Integer x : numeros) {
    somaImperativa += x;
}
System.out.println("Soma Imperativa: " + somaImperativa); // Soma Imperativa: 15
```

**Abordagem funcional com Streams:**
```java
List<Integer> numerosFunc = Arrays.asList(1, 2, 3, 4, 5);
// Integer::sum é um method reference para o método estático sum da classe Integer
Integer somaFuncional = numerosFunc.stream().reduce(0, Integer::sum);
System.out.println("Soma Funcional: " + somaFuncional); // Soma Funcional: 15
```

## 💡 O que são "Expressões Lambda"?

Em programação funcional, uma **expressão lambda** corresponde a uma **função anônima de primeira classe**.
* **Anônima**: Não possui um nome declarado como um método tradicional.
* **Função**: Define um comportamento, recebe parâmetros e pode retornar um valor.
* **Primeira Classe**: Pode ser tratada como qualquer outro valor (passada como argumento, retornada, atribuída a variáveis).

**Sintaxe básica**: `(parâmetros) -> expressão` ou `(parâmetros) -> { bloco de código }`

**Exemplo de uso em `list.sort()`**:

```java
import java.util.ArrayList;
import java.util.List;
import java.util.Comparator;

// Classe Produto definida anteriormente

public class ProgramaLambda {

    public static int compararProdutos(Produto p1, Produto p2) {
        return p1.getPreco().compareTo(p2.getPreco());
    }

    public static void main(String[] args) {
        List<Produto> lista = new ArrayList<>();
        lista.add(new Produto("TV", 900.00));
        lista.add(new Produto("Notebook", 1200.00));
        lista.add(new Produto("Tablet", 450.00));

        // Usando method reference
        // lista.sort(ProgramaLambda::compararProdutos);

        // Usando expressão lambda diretamente
        lista.sort((p1, p2) -> p1.getPreco().compareTo(p2.getPreco()));

        lista.forEach(System.out::println);
    }
}
```

## 🧩 Interface Funcional

Uma **interface funcional** é uma interface que possui **um único método abstrato**. Suas implementações podem ser tratadas como expressões lambda, method references ou classes anônimas. A anotação `@FunctionalInterface` pode ser usada para garantir que a interface atenda a esse critério em tempo de compilação, embora não seja obrigatória.

**Exemplo com `Comparator`**:
A interface `java.util.Comparator` é uma interface funcional (embora tenha outros métodos `default` e `static`, ela tem apenas um método abstrato, `compare`).

**Implementação tradicional com classe separada**:
```java
import java.util.Comparator;

// Classe Produto definida anteriormente

// Classe separada que implementa Comparator
class MeuComparadorDeProdutos implements Comparator<Produto> {
    @Override
    public int compare(Produto p1, Produto p2) {
        return p1.getNome().toUpperCase().compareTo(p2.getNome().toUpperCase());
    }
}

// No método main ou onde for usar:
// list.sort(new MeuComparadorDeProdutos());
```

Com expressões lambda, a criação de uma classe separada ou anônima se torna mais concisa:
```java
// Usando classe anônima (pré-Java 8)
/*
lista.sort(new Comparator<Produto>() {
    @Override
    public int compare(Produto p1, Produto p2) {
        return p1.getNome().toUpperCase().compareTo(p2.getNome().toUpperCase());
    }
});
*/

// Usando expressão lambda (Java 8+)
// lista.sort((p1, p2) -> p1.getNome().toUpperCase().compareTo(p2.getNome().toUpperCase()));
```

### Algumas Outras Interfaces Funcionais Comuns do Pacote `java.util.function`

* **`Predicate<T>`**:
    * Método: `boolean test(T t)`
    * Uso: Avalia uma condição sobre um objeto `T` e retorna `true` ou `false`. Comum em filtragens.
* **`Function<T, R>`**:
    * Método: `R apply(T t)`
    * Uso: Recebe um objeto do tipo `T` como entrada e retorna um objeto do tipo `R`. Usada para transformações de dados (mapeamento).
* **`Consumer<T>`**:
    * Método: `void accept(T t)`
    * Uso: Realiza uma operação em um objeto do tipo `T` sem retornar nada. Espera-se que possa gerar efeitos colaterais (ex: imprimir, modificar um objeto).

### Exemplo com `Predicate` e `removeIf` 🗑️

**Problema**: Remover de uma lista de produtos aqueles cujo preço mínimo seja 100.

```java
import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

// Classe Produto definida anteriormente

public class ExemploPredicate {
    public static void main(String[] args) {
        List<Produto> lista = new ArrayList<>();
        lista.add(new Produto("TV", 900.00));
        lista.add(new Produto("Mouse", 50.00));
        lista.add(new Produto("Tablet", 350.50));
        lista.add(new Produto("HD Case", 80.90));

        // Definindo o critério de remoção com uma expressão lambda
        // Remove produtos se o preço for menor que 100
        Predicate<Produto> criterioPreco = p -> p.getPreco() < 100.0;
        lista.removeIf(criterioPreco);

        // Ou, diretamente no argumento:
        // lista.removeIf(p -> p.getPreco() < 100.0);

        lista.forEach(System.out::println);
        // Saída esperada:
        // Produto{nome='TV', preco=900.00}
        // Produto{nome='Tablet', preco=350.50}
    }
}
```
**Versões de implementação para `removeIf` (que espera um `Predicate`)**:
1.  **Implementação da interface**:
    ```java
    // class ProdutoComPrecoMinimo implements Predicate<Produto> {
    //     @Override
    //     public boolean test(Produto p) {
    //         return p.getPreco() >= 100.0; // Manter se >= 100, então remover se < 100
    //     }
    // }
    // lista.removeIf(p -> !new ProdutoComPrecoMinimo().test(p)); // Lógica invertida para removeIf
    // ou
    // lista.removeIf(p -> p.getPreco() < 100.0);
    ```
2.  **Reference method com método estático**:
    ```java
    // class CriteriosProduto {
    //     public static boolean temPrecoAbaixoDe100(Produto p) {
    //         return p.getPreco() < 100.0;
    //     }
    // }
    // lista.removeIf(CriteriosProduto::temPrecoAbaixoDe100);
    ```
3.  **Reference method com método não estático**:
    ```java
    // class VerificadorDePreco {
    //     private double precoMinimo;
    //     public VerificadorDePreco(double precoMinimo) { this.precoMinimo = precoMinimo; }
    //     public boolean abaixoDoMinimo(Produto p) { return p.getPreco() < this.precoMinimo; }
    // }
    // VerificadorDePreco verificador = new VerificadorDePreco(100.0);
    // lista.removeIf(verificador::abaixoDoMinimo);
    ```
4.  **Expressão lambda declarada**:
    ```java
    // Predicate<Produto> abaixoDe100 = p -> p.getPreco() < 100.0;
    // lista.removeIf(abaixoDe100);
    ```
5.  **Expressão lambda inline**:
    ```java
    // lista.removeIf(p -> p.getPreco() < 100.0); // Como no exemplo principal
    ```

### Exemplo com `Consumer` e `forEach` 🗣️

**Problema**: Aumentar o preço dos produtos em uma lista em 10%.

```java
import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;

// Classe Produto definida anteriormente e com setPreco

public class ExemploConsumer {
    public static void main(String[] args) {
        List<Produto> lista = new ArrayList<>();
        lista.add(new Produto("TV", 900.00));
        lista.add(new Produto("Mouse", 50.00));
        lista.add(new Produto("Tablet", 350.50));
        lista.add(new Produto("HD Case", 80.90));

        // Definindo a ação com uma expressão lambda
        // Aumenta o preço em 10%
        Consumer<Produto> aumentarPreco = p -> p.setPreco(p.getPreco() * 1.1);
        lista.forEach(aumentarPreco);

        // Ou, diretamente no argumento:
        // lista.forEach(p -> p.setPreco(p.getPreco() * 1.1));

        lista.forEach(System.out::println);
        // Saída esperada (preços aumentados):
        // Produto{nome='TV', preco=990.00}
        // Produto{nome='Mouse', preco=55.00}
        // Produto{nome='Tablet', preco=385.55}
        // Produto{nome='HD Case', preco=88.99}
    }
}
```

### Exemplo com `Function` e `map` (via Streams) 🔄

**Problema**: A partir de uma lista de produtos, gerar uma nova lista contendo apenas os nomes dos produtos em caixa alta.

A interface `Function<T, R>` tem o método `R apply(T t)`. Ela é usada para transformar um objeto de tipo `T` em um objeto de tipo `R`.

```java
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.function.Function;

// Classe Produto definida anteriormente

public class ExemploFunction {
    public static void main(String[] args) {
        List<Produto> listaProdutos = new ArrayList<>();
        listaProdutos.add(new Produto("Tv", 900.00));
        listaProdutos.add(new Produto("Mouse", 50.00));
        listaProdutos.add(new Produto("Tablet", 350.50));
        listaProdutos.add(new Produto("HD Case", 80.90));

        // Definindo a função de transformação com uma expressão lambda
        // Transforma um Produto em seu nome em maiúsculas (String)
        Function<Produto, String> obterNomeMaiusculo = p -> p.getNome().toUpperCase();

        List<String> nomesMaiusculos = listaProdutos.stream()
                                             .map(obterNomeMaiusculo)
                                             .collect(Collectors.toList());

        // Ou, diretamente no argumento de map:
        // List<String> nomesMaiusculos = listaProdutos.stream()
        //                                      .map(p -> p.getNome().toUpperCase())
        //                                      .collect(Collectors.toList());

        nomesMaiusculos.forEach(System.out::println);
        // Saída esperada:
        // TV
        // MOUSE
        // TABLET
        // HD CASE
    }
}
```

**Nota sobre a função `map` (de Streams)**:
* A função `map` (não confunda com a estrutura de dados `Map`) é uma operação intermediária de `Stream` que aplica uma função a todos os elementos de uma stream, produzindo uma nova stream com os resultados.
* **Conversões comuns com Streams**:
    * `List` para `Stream`: `lista.stream()`
    * `Stream` para `List`: `stream.collect(Collectors.toList())`

## 🛠️ Criando Funções que Recebem Funções como Argumento

Vimos exemplos como `removeIf(Predicate)`, `forEach(Consumer)` e `stream().map(Function)`. Podemos criar nossos próprios métodos que aceitam interfaces funcionais como parâmetros, permitindo um comportamento personalizável.

**Problema**: Calcular a soma dos preços somente dos produtos cujo nome começa com "T".

```java
import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

// Classe Produto definida anteriormente

class ServicoProduto {
    // Método que recebe uma lista e uma condição (Predicate)
    // e retorna a soma dos preços dos produtos que atendem à condição.
    public double somaFiltrada(List<Produto> lista, Predicate<Produto> criterio) {
        double soma = 0.0;
        for (Produto p : lista) {
            if (criterio.test(p)) { // Usa o Predicate para testar a condição
                soma += p.getPreco();
            }
        }
        return soma;
    }
}

public class ExemploFuncaoComoArgumento {
    public static void main(String[] args) {
        List<Produto> lista = new ArrayList<>();
        lista.add(new Produto("Tv", 900.00));
        lista.add(new Produto("Mouse", 50.00));
        lista.add(new Produto("Tablet", 350.50));
        lista.add(new Produto("HD Case", 80.90));

        ServicoProduto servico = new ServicoProduto();

        // Passando a condição como uma expressão lambda
        Predicate<Produto> comecaComT = p -> p.getNome().charAt(0) == 'T';
        double somaProdutosComT = servico.somaFiltrada(lista, comecaComT);

        System.out.printf("Soma dos produtos cujo nome começa com 'T': %.2f%n", somaProdutosComT); // Esperado: 1250.50 (900.00 + 350.50)

        // Poderia ser direto também:
        // double somaProdutosComT = servico.somaFiltrada(lista, p -> p.getNome().charAt(0) == 'T');
    }
}
```

## 🌊 Streams API

Uma **Stream** é uma sequência de elementos advinda de uma fonte de dados (como coleções, arrays, recursos de E/S ou funções geradoras) que oferece suporte a **operações agregadas**.

### Características das Streams:

* **Declarativa**: A iteração é interna, escondida do programador. Você especifica "o que" fazer, não "como" fazer.
* **Parallel-friendly**: Operações em streams idealmente não têm efeitos colaterais e operam sobre dados imutáveis, o que facilita a paralelização (ex: `parallelStream()`).
* **Sem efeitos colaterais (idealmente)**: As operações intermediárias não modificam a fonte de dados original; elas produzem novas streams.
* **Sob demanda (lazy evaluation)**: Operações intermediárias só são executadas quando uma operação terminal é invocada.
* **Acesso sequencial**: Elementos são processados em sequência (não há acesso por índice como em listas).
* **Single-use**: Uma stream só pode ser "usada" (consumida por uma operação terminal) uma vez. Se precisar processá-la novamente, uma nova stream deve ser criada a partir da fonte de dados.
* **Pipeline**: Operações em streams retornam novas streams. Isso permite criar uma cadeia de operações (um fluxo de processamento).

### ⚙️ Operações Intermediárias e Terminais

Um **pipeline** de stream é composto por:
1.  Uma fonte de dados (ex: `List.stream()`).
2.  Zero ou mais **operações intermediárias**.
3.  Uma **operação terminal**.

* **Operação Intermediária**:
    * Produz uma nova stream (encadeamento).
    * É *lazy*: só executa quando uma operação terminal é invocada.
    * Exemplos: `filter(Predicate)`, `map(Function)`, `flatMap(Function)`, `peek(Consumer)`, `distinct()`, `sorted()`, `sorted(Comparator)`, `skip(long)`, `limit(long)` (esta última é *short-circuiting*).

* **Operação Terminal**:
    * Produz um resultado não-stream (um valor, uma coleção, ou nenhum valor no caso de `forEach`).
    * Determina o fim do processamento da stream e dispara a execução das operações intermediárias.
    * Exemplos: `forEach(Consumer)`, `forEachOrdered(Consumer)`, `toArray()`, `reduce()`, `collect(Collector)`, `min(Comparator)`, `max(Comparator)`, `count()`, `anyMatch(Predicate)` (*short-circuiting*), `allMatch(Predicate)` (*short-circuiting*), `noneMatch(Predicate)` (*short-circuiting*), `findFirst()` (*short-circuiting*), `findAny()` (*short-circuiting*).
    * Operações *short-circuiting* podem terminar o processamento antes de percorrer todos os elementos da stream se o resultado já puder ser determinado.

### Como Criar uma Stream 🏞️

1.  **A partir de uma Coleção**:
    ```java
    List<String> minhaLista = Arrays.asList("a", "b", "c");
    Stream<String> streamDaLista = minhaLista.stream(); // Sequencial
    Stream<String> streamParalela = minhaLista.parallelStream(); // Paralela
    ```

2.  **Usando `Stream.of()`**:
    ```java
    Stream<String> streamDeElementos = Stream.of("Maria", "Alex", "Bob");
    Stream<Integer> streamDeInteiros = Stream.of(1, 2, 3);
    ```

3.  **Usando `Stream.ofNullable()` (Java 9+)**: Cria uma stream com um único elemento se não for nulo, ou uma stream vazia se for nulo.
    ```java
    String nome = podeSerNulo();
    Stream<String> streamDeNome = Stream.ofNullable(nome);
    ```

4.  **Usando `Stream.iterate()`**: Cria uma stream infinita (ou potencialmente infinita) a partir de um valor inicial e uma função para gerar o próximo elemento. Geralmente usada com `limit()`.
    ```java
    // Stream de números pares começando em 0: 0, 2, 4, 6, ...
    Stream<Integer> numerosPares = Stream.iterate(0, x -> x + 2);
    // Para usar, é preciso limitar:
    // List<Integer> primeirosDezPares = numerosPares.limit(10).collect(Collectors.toList());
    // System.out.println(primeirosDezPares); // [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
    ```
    **Exemplo: Sequência de Fibonacci** (pares de números `[atual, proximo]`)
    ```java
    // Gera a sequência de Fibonacci: 0, 1, 1, 2, 3, 5, ...
    // Stream<Long> fibonacci = Stream.iterate(new long[]{0L, 1L}, p -> new long[]{p[1], p[0] + p[1]})
    //                              .map(p -> p[0]); // Pega o primeiro elemento do par
    // List<Long> primeirosDezFibonacci = fibonacci.limit(10).collect(Collectors.toList());
    // System.out.println(primeirosDezFibonacci); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
    ```

5.  **Usando `Stream.generate(Supplier<T>)`**: Cria uma stream infinita onde cada elemento é gerado por um `Supplier`.
    ```java
    // Stream<Double> numerosAleatorios = Stream.generate(Math::random);
    // numerosAleatorios.limit(5).forEach(System.out::println);
    ```

### Exemplo de Pipeline de Stream 🏞️➡️💧

```java
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class DemoPipeline {
    public static void main(String[] args) {
        List<Integer> lista = Arrays.asList(3, 4, 5, 10, 7);

        // 1. Criar stream, map (op. intermediária) e toArray (op. terminal)
        Stream<Integer> st1 = lista.stream().map(x -> x * 10);
        System.out.println("Stream mapeada (toArray): " + Arrays.toString(st1.toArray())); // [30, 40, 50, 100, 70]

        // 2. Reduce (op. terminal) para somar os elementos
        // A stream original 'lista.stream()' é consumida aqui novamente, pois st1 já foi consumida por toArray()
        int soma = lista.stream().reduce(0, (x, y) -> x + y); // 0 é o valor identidade
        System.out.println("Soma (reduce): " + soma); // 29

        // 3. Pipeline: filter (intermediária), map (intermediária), collect (terminal)
        List<Integer> novaLista = lista.stream()
                                     .filter(x -> x % 2 == 0)   // Filtra apenas os pares: [4, 10]
                                     .map(x -> x * 10)          // Multiplica por 10: [40, 100]
                                     .collect(Collectors.toList()); // Coleta em uma nova lista
        System.out.println("Nova lista (filter, map, collect): " + novaLista); // [40, 100]
    }
}
```

## 🧩 Exercício Resolvido: Análise de Produtos de um CSV

**Problema**: Fazer um programa para ler um conjunto de produtos a partir de um arquivo em formato `.csv` (suponha que exista pelo menos um produto). Em seguida, mostrar o preço médio dos produtos. Depois, mostrar os nomes, em ordem decrescente, dos produtos que possuem preço inferior ao preço médio.

**Arquivo de entrada (ex: `produtos.csv`):**
```csv
Tv,900.00
Mouse,50.00
Tablet,350.50
HD Case,80.90
Computer,850.00
Monitor,290.00
```

**Classe `Produto` (reutilizada):**
```java
// package entidades; // Exemplo de pacote
// public class Produto { ... } // Já definida anteriormente
```

**Código Principal:**
```java
package aplicacao;

import entidades.Produto; // Supondo que Produto está em entidades

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Locale;
import java.util.Scanner;
import java.util.stream.Collectors;

public class ProgramaCsvProdutos {

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite o caminho completo do arquivo: ");
        String caminhoArquivo = sc.nextLine(); // Ex: /caminho/para/produtos.csv ou C:\\temp\\produtos.csv

        try (BufferedReader br = new BufferedReader(new FileReader(caminhoArquivo))) {
            List<Produto> produtos = new ArrayList<>();
            String linha = br.readLine();
            while (linha != null) {
                String[] campos = linha.split(",");
                produtos.add(new Produto(campos[0], Double.parseDouble(campos[1])));
                linha = br.readLine();
            }

            // Calcular o preço médio
            double precoMedio = produtos.stream()
                                   .mapToDouble(Produto::getPreco) // Converte para DoubleStream para ter o 'average()'
                                   .average()
                                   .orElse(0.0); // Caso a lista esteja vazia

            System.out.printf("Preço médio: %.2f%n", precoMedio);

            // Nomes dos produtos com preço inferior à média, em ordem decrescente de nome
            Comparator<String> comparadorNomeDesc = Comparator.reverseOrder(); // Ou (s1, s2) -> s2.compareTo(s1)

            List<String> nomesAbaixoDaMedia = produtos.stream()
                                                 .filter(p -> p.getPreco() < precoMedio)
                                                 .map(Produto::getNome)
                                                 .sorted(comparadorNomeDesc) // Ordena os nomes em ordem decrescente
                                                 .collect(Collectors.toList());

            System.out.println("Produtos com preço abaixo da média (ordenados por nome decrescente):");
            nomesAbaixoDaMedia.forEach(System.out::println);

        } catch (IOException e) {
            System.out.println("Erro: " + e.getMessage());
        }
        sc.close();
    }
}
```
**Execução Esperada (com o CSV de exemplo):**
```
Digite o caminho completo do arquivo: [caminho/para/produtos.csv]
Preço médio: 420.23
Produtos com preço abaixo da média (ordenados por nome decrescente):
Tablet
Mouse
Monitor
HD Case
```

## 🏋️ Exercício de Fixação: Análise de Funcionários

**Problema**: Fazer um programa para ler os dados (nome, email e salário) de funcionários a partir de um arquivo em formato `.csv`. Em seguida:
1.  Mostrar, em ordem alfabética, o email dos funcionários cujo salário seja superior a um dado valor fornecido pelo usuário.
2.  Mostrar também a soma dos salários dos funcionários cujo nome começa com a letra 'M'.

**Modelo da classe `Funcionario`**:
```java
package entidades;

public class Funcionario {
    private String nome;
    private String email;
    private Double salario;

    public Funcionario(String nome, String email, Double salario) {
        this.nome = nome;
        this.email = email;
        this.salario = salario;
    }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public Double getSalario() { return salario; }
    public void setSalario(Double salario) { this.salario = salario; }

    @Override
    public String toString() {
        return nome + ", " + email + ", " + String.format("%.2f", salario);
    }
}
```

**Arquivo de entrada (ex: `funcionarios.csv`):**
```csv
Maria,maria@gmail.com,3200.00
Alex,alex@gmail.com,1900.00
Marco,marco@gmail.com,1700.00
Bob,bob@gmail.com,3500.00
Anna,anna@gmail.com,2800.00
```

**Código Principal (esqueleto para desenvolvimento):**
```java
package aplicacao;

import entidades.Funcionario; // Supondo que Funcionario está em entidades

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.Scanner;
import java.util.stream.Collectors;

public class ProgramaCsvFuncionarios {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite o caminho completo do arquivo: ");
        String caminhoArquivo = sc.nextLine(); // Ex: /caminho/para/funcionarios.csv

        System.out.print("Digite o salário base para filtro: ");
        double salarioBase = sc.nextDouble();

        try (BufferedReader br = new BufferedReader(new FileReader(caminhoArquivo))) {
            List<Funcionario> funcionarios = new ArrayList<>();
            String linha = br.readLine();
            while (linha != null) {
                String[] campos = linha.split(",");
                funcionarios.add(new Funcionario(campos[0], campos[1], Double.parseDouble(campos[2])));
                linha = br.readLine();
            }

            // 1. Emails dos funcionários com salário superior ao salarioBase, em ordem alfabética
            System.out.println("
Email das pessoas cujo salário é maior que " + String.format("%.2f", salarioBase) + ":");
            List<String> emailsFiltrados = funcionarios.stream()
                                               .filter(f -> f.getSalario() > salarioBase)
                                               .map(Funcionario::getEmail)
                                               .sorted() // Ordem alfabética natural para Strings
                                               .collect(Collectors.toList());
            emailsFiltrados.forEach(System.out::println);

            // 2. Soma dos salários dos funcionários cujo nome começa com 'M'
            double somaSalariosM = funcionarios.stream()
                                       .filter(f -> f.getNome().toUpperCase().startsWith("M"))
                                       .mapToDouble(Funcionario::getSalario)
                                       .sum();
            System.out.println("
Soma do salário das pessoas cujo nome começa com 'M': " + String.format("%.2f", somaSalariosM));

        } catch (IOException e) {
            System.out.println("Erro de leitura do arquivo: " + e.getMessage());
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Erro: Formato de linha inválido no CSV.");
        } catch (NumberFormatException e) {
            System.out.println("Erro: Formato numérico inválido para salário no CSV.");
        }

        sc.close();
    }
}
```
**Execução Esperada (com o CSV de exemplo e salário base 2000.00):**
```
Digite o caminho completo do arquivo: [caminho/para/funcionarios.csv]
Digite o salário base para filtro: 2000.00

Email das pessoas cujo salário é maior que 2000.00:
anna@gmail.com
bob@gmail.com
maria@gmail.com

Soma do salário das pessoas cujo nome começa com 'M': 4900.00
```

---

**Nota sobre IDEs (VS Code, IntelliJ IDEA):**
Todos os exemplos de código Java apresentados são padrão e podem ser compilados e executados em qualquer ambiente de desenvolvimento Java moderno, como **Visual Studio Code (com o Java Extension Pack)** ou **IntelliJ IDEA (Community ou Ultimate Edition)**. Não há recursos específicos do Eclipse utilizados. Para executar:
1.  Certifique-se de ter o JDK (Java Development Kit) instalado.
2.  Crie um projeto Java na sua IDE de preferência.
3.  Crie as classes (`Produto.java`, `Funcionario.java`, etc.) nos pacotes apropriados (se especificado).
4.  Copie e cole o código nas respectivas classes.
5.  Para os exemplos que leem arquivos CSV, crie os arquivos de dados (`.csv`) e forneça o caminho correto quando solicitado pelo programa.
6.  Execute a classe principal que contém o método `main`.


---
## 📚

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)

