---
layout: default
title: ☕ Java: Memória, Vetores e Listas
---

# ☕ Java: Memória, Vetores e Listas

## 🧠 Tipos Referência vs. Tipos Valor

Em Java, a forma como as variáveis armazenam dados difere crucialmente entre tipos primitivos (valor) e tipos complexos (referência, como classes e arrays).

### 🔗 Classes são Tipos Referência

Variáveis que são instâncias de classes não armazenam o objeto diretamente. Em vez disso, elas contêm um endereço de memória que "aponta" para o local onde o objeto real está armazenado. Essa área de memória é chamada de *Heap*. As variáveis de referência em si residem em uma área de memória chamada *Stack*.

**Analogia:** Pense em uma variável de referência como um "controle remoto" (o ponteiro) e o objeto como a "TV" (os dados na Heap).

**Exemplo de Atribuição:**

Quando você atribui uma variável de referência a outra (`p2 = p1;`), ambas as variáveis passam a apontar para o *mesmo* objeto na Heap. Não é criada uma cópia do objeto.

```java
// Declaração de duas variáveis do tipo Produto
Produto p1, p2;

// p1 recebe um novo objeto Produto ("TV", 900.00, 0) alocado na Heap
p1 = new Produto("TV", 900.00, 0);

// p2 agora aponta para o MESMO objeto que p1 aponta
p2 = p1;
```

**Visualização da Memória (Conceitual):**

* **Stack (Pilha):**
    * `p1` (contém o endereço, ex: 0x100358)
    * `p2` (contém o mesmo endereço, ex: 0x100358, após `p2 = p1;`)
* **Heap (Monte):**
    * `0x100358: [Objeto Produto: nome="TV", preco=900.0, quantidade=0]`

Se você alterar o estado do objeto através de `p1` (por exemplo, `p1.setPreco(850.0)`), a mudança será refletida quando você acessar o objeto através de `p2`, pois ambos se referem à mesma instância.

### 👻 Valor "null"

Tipos referência podem ter um valor especial chamado `null`. Isso significa que a variável não está apontando para nenhum objeto na Heap.

```java
Produto p1, p2;
p1 = new Produto("TV", 900.00, 0);
p2 = null; // p2 não referencia nenhum objeto
```

Se você tentar acessar um membro de uma variável que é `null` (ex: `p2.getNome();`), o Java lançará uma `NullPointerException`.

### 📦 Tipos Primitivos são Tipos Valor

Tipos primitivos em Java (como `int`, `double`, `boolean`, `char`, etc.) são tratados como **tipos valor**. Isso significa que a variável armazena o valor *diretamente* dentro do espaço alocado para ela na Stack.

**Analogia:** Pense em uma variável de tipo valor como uma "caixa" que contém o valor diretamente.

**Exemplo de Atribuição:**

Quando você atribui uma variável de tipo valor a outra (`y = x;`), uma *cópia* do valor é feita.

```java
double x, y;
x = 10.0;
y = x; // y recebe uma CÓPIA do valor de x (10.0)

// Alterar y não afeta x
y = 20.0;
// Agora, x é 10.0 e y é 20.0
```

**Visualização da Memória (Conceitual):**

* **Stack (Pilha):**
    * `x` (contém o valor 10.0)
    * `y` (contém o valor 10.0, após `y = x;`, e depois 20.0 após `y = 20.0;`)
* **Heap (Monte):**
    * Não utilizada para esses tipos primitivos diretamente.

### 📜 Tabela de Tipos Primitivos em Java

| Tipo    | Conteúdo             | Padrão | Tamanho   | Intervalo (aproximado)                      |
| :------ | :------------------- | :----- | :-------- | :------------------------------------------ |
| `boolean` | `true` ou `false`    | `false`| 1 bit     | N/A                                         |
| `char`  | Caractere Unicode    | `\u0000`| 16 bits   | `\u0000` a `\uFFFF`                          |
| `byte`  | Inteiro com sinal    | `0`    | 8 bits    | -128 a 127                                  |
| `short` | Inteiro com sinal    | `0`    | 16 bits   | -32.768 a 32.767                            |
| `int`   | Inteiro com sinal    | `0`    | 32 bits   | -2.147.483.648 a 2.147.483.647              |
| `long`  | Inteiro com sinal    | `0L`   | 64 bits   | -9x10^18 a 9x10^18                          |
| `float` | Ponto flutuante IEEE 754 | `0.0f` | 32 bits   | ±1.4E-45 a ±3.4028235E+38                    |
| `double`| Ponto flutuante IEEE 754 | `0.0`  | 64 bits   | ±4.9E-324 a ±1.7976931348623157E+308        |

**Observação sobre Inicialização de Tipos Primitivos:**

Variáveis locais de tipo primitivo *não* são inicializadas automaticamente. Você deve atribuir um valor a elas antes de usá-las, caso contrário, ocorrerá um erro de compilação.

```java
// Exemplo de erro:
int p;
// System.out.println(p); // ERRO: variável p não foi inicializada

p = 10;
System.out.println(p); // OK
```

### 🎁 Valores Padrão para Tipos Estruturados

Quando você aloca (usando `new`) qualquer tipo estruturado (classe ou array), seus elementos (atributos de classe ou posições do array) recebem valores padrão se não forem explicitamente inicializados no construtor (para classes) ou na criação (para arrays).

* **Números** ( `byte`, `short`, `int`, `long`, `float`, `double`): `0` (ou `0.0`)
* **`boolean`**: `false`
* **`char`**: `\u0000` (caractere nulo)
* **Tipos Referência (Objetos, Arrays)**: `null`

**Exemplo:**

```java
class Produto {
    String nome;
    double preco;
    int quantidade;
    // Construtor padrão implícito ou explícito sem inicializações
}

// ...

Produto p = new Produto();
// Neste ponto:
// p.nome é null
// p.preco é 0.0
// p.quantidade é 0
```

### ⚖️ Tabela Comparativa: Tipos Referência vs. Tipos Valor

| Característica                                  | CLASSE (Tipo Referência)                                 | TIPO PRIMITIVO (Tipo Valor)                               |
| :---------------------------------------------- | :------------------------------------------------------- | :-------------------------------------------------------- |
| **Vantagem Principal** | Usufrui de todos os recursos de Orientação a Objetos (OO) | É mais simples e mais performático para operações diretas |
| **Natureza da Variável** | Variáveis são "ponteiros" ou "referências"               | Variáveis são "caixas" contendo o valor diretamente      |
| **Instanciação** | Objetos precisam ser instanciados com `new`              | Não se instancia. Declarou, está pronto para uso.         |
| **Valor `null`** | Aceita valor `null` (aponta para ninguém)                | Não aceita valor `null`                                   |
| **Atribuição (`Y = X`)** | `Y` passa a apontar para onde `X` aponta                 | `Y` recebe uma *cópia* do valor de `X`                    |
| **Local de Armazenamento do "Dado"** | Objetos instanciados na memória *Heap* | "Objetos" (valores) instanciados na memória *Stack* |
| **Desalocação de Memória (quando não utilizado)** | Pelo *Garbage Collector* em um momento oportuno          | Imediatamente quando seu escopo de execução é finalizado    |

## 🗑️ Desalocação de Memória: Garbage Collector e Escopo

### 🧹 Garbage Collector (Coletor de Lixo)

O Garbage Collector (GC) é um processo automático em Java que gerencia a memória. Ele monitora os objetos alocados dinamicamente na *Heap*. Quando um objeto não possui mais nenhuma referência apontando para ele (ou seja, tornou-se inacessível pelo código), o GC o considera "lixo" e, eventualmente, desaloca a memória que ele ocupava, tornando-a disponível para futuras alocações.

**Exemplo de Objeto se Tornando Elegível para Coleta:**

```java
Produto p1 = new Produto("TV", 900.00, 0);       // Objeto 1 (TV) é criado na Heap, p1 aponta para ele
Produto p2 = new Produto("Mouse", 30.00, 0);   // Objeto 2 (Mouse) é criado na Heap, p2 aponta para ele

p1 = p2; // Agora p1 também aponta para o Objeto 2 (Mouse).
         // O Objeto 1 (TV) não tem mais nenhuma referência (p1 foi redirecionado).
         // O Objeto 1 (TV) se torna elegível para ser coletado pelo Garbage Collector.
```

### 🚪 Desalocação por Escopo (Variáveis Locais)

Variáveis locais, tanto de tipo primitivo quanto de tipo referência, existem apenas dentro do escopo em que foram declaradas (geralmente um método ou um bloco de código como `if`, `for`, `while`).

Quando a execução do programa sai desse escopo, a memória alocada na *Stack* para essas variáveis locais é automaticamente liberada.

**Importante:**
* Se uma variável local era do tipo referência e apontava para um objeto na *Heap*, a *variável em si* (o ponteiro na Stack) é desalocada.
* O *objeto na Heap* ao qual ela apontava *não* é imediatamente desalocado. Ele só será desalocado pelo Garbage Collector se não houver mais *nenhuma outra referência* para ele.

**Exemplo 1: Escopo de Bloco `if`**

```java
void meuMetodo1() {
    int x = 10;      // x é local ao método meuMetodo1
    if (x > 0) {
        int y = 20;  // y é local apenas ao bloco if
        // y é utilizável aqui
    } // Fim do escopo do if: y é desalocado da Stack
    // System.out.println(y); // ERRO: y não existe mais aqui
    System.out.println(x);   // x ainda existe
} // Fim do escopo de meuMetodo1: x é desalocado da Stack
```

**Visualização da Stack (Conceitual):**

1.  **Dentro de `meuMetodo1`, antes do `if`:**
    * `meuMetodo1 scope`
        * `x: 10`

2.  **Dentro do `if`:**
    * `meuMetodo1 scope`
        * `x: 10`
        * `if scope`
            * `y: 20`

3.  **Dentro de `meuMetodo1`, após o `if`:**
    * `meuMetodo1 scope`
        * `x: 10` (o `if scope` e `y` já foram liberados)

**Exemplo 2: Retornando Referência de um Método**

```java
class Produto {
    String nome;
    // ... construtor e outros métodos
    public Produto(String nome, double preco, int qtd) { this.nome = nome; /*...*/ }
}

class ExemploEscopo {
    void metodoPrincipal() {
        // p é local ao metodoPrincipal
        // O objeto Produto retornado por criarProduto() será atribuído a p
        Produto p = criarProduto();
        System.out.println(p.nome); // Acessa o objeto criado em criarProduto()
    } // Fim do escopo de metodoPrincipal: p (referência na Stack) é desalocado.
      // O objeto Produto na Heap se torna elegível para o GC,
      // a menos que outra referência a ele exista em outro lugar (não neste exemplo simples).

    Product criarProduto() {
        // prod é local ao método criarProduto
        Produto prod = new Produto("TV", 900.0, 0); // Objeto é criado na Heap
        return prod; // Retorna a REFERÊNCIA para o objeto na Heap
    } // Fim do escopo de criarProduto: prod (referência na Stack) é desalocado.
      // Mas o objeto na Heap continua existindo porque sua referência foi retornada
      // e atribuída a 'p' em metodoPrincipal.
}
```

**Visualização da Memória (Conceitual durante a chamada `p = criarProduto();`):**

1.  **Antes de `criarProduto` retornar:**
    * **Stack:**
        * `metodoPrincipal scope`
            * `p` (ainda não inicializado ou com valor antigo)
        * `criarProduto scope`
            * `prod` (contém o endereço do objeto "TV" na Heap, ex: 0xHEAP123)
    * **Heap:**
        * `0xHEAP123: [Objeto Produto: nome="TV", ...]`

2.  **Após `criarProduto` retornar e a atribuição a `p`:**
    * **Stack:**
        * `metodoPrincipal scope`
            * `p` (agora contém o endereço 0xHEAP123)
    * **Heap:**
        * `0xHEAP123: [Objeto Produto: nome="TV", ...]` (o `criarProduto scope` e `prod` já foram liberados da Stack)

### 📝 Resumo da Desalocação

* **Objetos na Heap:** Quando não possuem mais referências apontando para eles, são desalocados pelo *Garbage Collector*.
* **Variáveis Locais na Stack:** São desalocadas *imediatamente* assim que seu escopo local (método, bloco) termina a execução.

## 📏 Vetores (Arrays) - Parte 1

### ✅ Checklist de Vetores

* Revisão do conceito de vetor
* Declaração e instanciação
* Manipulação de vetor de elementos tipo valor (tipo primitivo)
* Manipulação de vetor de elementos tipo referência (classe)
* Acesso aos elementos
* Propriedade `length`

### 📐 O que são Vetores?

Em programação, "vetor" (ou *array*, em inglês) é o nome dado a arranjos unidimensionais. Um array é uma estrutura de dados que armazena uma coleção de elementos do *mesmo tipo* em um bloco *contíguo* de memória.

**Características Principais:**

* **Homogênea:** Todos os elementos devem ser do mesmo tipo (ex: um array de `int`, um array de `String`, um array de `Produto`).
* **Ordenada:** Os elementos são acessados por meio de um índice numérico (posição), começando em 0.
* **Alocada de uma vez só:** O tamanho do array é definido no momento da sua criação e não pode ser alterado posteriormente.
* **Acesso Direto:** O acesso a um elemento pela sua posição (índice) é muito rápido (vantagem).

**Vantagens:**

* Acesso imediato (rápido) aos elementos pela sua posição.

**Desvantagens:**

* **Tamanho fixo:** Uma vez criado, o tamanho de um array não pode ser aumentado ou diminuído. Se você precisar de mais espaço, terá que criar um novo array maior e copiar os elementos.
* **Dificuldade para inserções e deleções:** Inserir ou remover um elemento no meio de um array pode ser ineficiente, pois exige o deslocamento dos elementos subsequentes.

### 📋 Problema Exemplo 1: Altura Média de Pessoas

**Enunciado:** Fazer um programa para ler um número inteiro N e a altura de N pessoas. Armazene as N alturas em um vetor. Em seguida, mostrar a altura média dessas pessoas.

**Exemplo de Entrada/Saída:**

| Entrada: | Saída:                    |
|:--------------|:--------------------------|
| 3             | `Média da alturas = 1.69` |
| 1.72          |                           |
| 1.56          |                           |
| 1.80          |                           |

**Solução em Java:**

Este exemplo demonstra um vetor de tipos primitivos (`double`).

```java
package aplicacao;

import java.util.Locale;
import java.util.Scanner;

public class Programa {

    public static void main(String[] args) {
        Locale.setDefault(Locale.US); // Para usar o ponto como separador decimal
        Scanner leitor = new Scanner(System.in);

        System.out.print("Quantas alturas você vai digitar? ");
        int n = leitor.nextInt();

        // Declaração e instanciação do vetor de doubles
        // 'vetorAlturas' é uma variável de referência na Stack
        // que aponta para o bloco de memória do array na Heap.
        double[] vetorAlturas = new double[n];

        // Leitura das alturas e armazenamento no vetor
        for (int i = 0; i < n; i++) { // ou i < vetorAlturas.length
            System.out.printf("Digite a altura da pessoa %d: ", i + 1);
            vetorAlturas[i] = leitor.nextDouble();
        }

        // Cálculo da soma das alturas
        double soma = 0.0;
        for (int i = 0; i < n; i++) {
            soma += vetorAlturas[i];
        }

        // Cálculo da média
        double media = soma / n;

        System.out.printf("ALTURA MÉDIA: %.2f%n", media);

        leitor.close(); // Boa prática: fechar o Scanner
    }
}
```

**Visualização da Memória (Conceitual para `n=3` e as alturas do exemplo):**

* **Stack:**
    * `n: 3`
    * `vetorAlturas` (contém o endereço do array na Heap, ex: 0xHEAP_ARR1)
    * `leitor` (referência para o objeto Scanner)
    * `soma`, `media` (variáveis double)
    * `i` (variável int do loop)
* **Heap:**
    * `0xHEAP_ARR1: [1.72, 1.56, 1.80]` (bloco contíguo de memória para os doubles)
    * Objeto `Scanner`

**Como executar este código (VS Code / IntelliJ IDEA):**

1.  **Pré-requisito:** Certifique-se de ter o JDK (Java Development Kit) instalado e configurado no seu sistema.
2.  **VS Code:**
    * Instale o "Extension Pack for Java" da Microsoft.
    * Crie um arquivo chamado `Programa.java` dentro de uma pasta (ex: `projetoAlturas/src/aplicacao/Programa.java`).
    * Cole o código no arquivo.
    * Abra o terminal integrado (Ctrl+`) e navegue até a pasta `projetoAlturas/src`.
    * Compile: `javac aplicacao/Programa.java`
    * Execute: `java aplicacao.Programa`
    * Alternativamente, clique com o botão direito no editor e selecione "Run Java".
3.  **IntelliJ IDEA:**
    * Crie um novo projeto Java.
    * Na pasta `src`, crie um pacote `aplicacao`.
    * Dentro do pacote `aplicacao`, crie uma classe `Programa`.
    * Cole o código na classe.
    * Clique na seta verde ao lado da declaração do método `main` e selecione "Run 'Programa.main()'".

## 🛍️ Vetores (Arrays) - Parte 2

### 🛒 Problema Exemplo 2: Preço Médio de Produtos

**Enunciado:** Fazer um programa para ler um número inteiro N e os dados (nome e preço) de N Produtos. Armazene os N produtos em um vetor. Em seguida, mostrar o preço médio dos produtos.

**Exemplo de Entrada/Saída:**

| Entrada: | Saída:               |
|:--------------|:---------------------------|
| 3             | `Média do preços = 700.00` |
| PC            |                            |
| 900.00        |                            |
| Microondas    |                            |
| 400.00        |                            |
| Forno         |                            |
| 800.00        |                            |

**Classe `Produto` (Entidade):**

```java
package entidades;

public class Produto {
    private String nome;
    private double preco;

    public Produto(String nome, double preco) {
        this.nome = nome;
        this.preco = preco;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }
}
```

**Solução em Java (Programa Principal):**

Este exemplo demonstra um vetor de tipos referência (objetos `Produto`).

```java
package aplicacao;

import java.util.Locale;
import java.util.Scanner;
import entidades.Produto; // Importa a classe Produto

public class Programa {

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner leitor = new Scanner(System.in);

        System.out.print("Quantos produtos você vai cadastrar? ");
        int n = leitor.nextInt();

        // Declaração e instanciação do vetor de Produtos
        // 'vetorProdutos' é um array de REFERÊNCIAS para objetos Produto.
        // Inicialmente, cada posição do array contém 'null'.
        Produto[] vetorProdutos = new Produto[n];

        for (int i = 0; i < vetorProdutos.length; i++) {
            leitor.nextLine(); // Consome a quebra de linha pendente do nextInt()
            System.out.printf("--- Produto %d ---%n", i + 1);
            System.out.print("Nome: ");
            String nome = leitor.nextLine();
            System.out.print("Preço: ");
            double preco = leitor.nextDouble();

            // Cria o objeto Produto e armazena sua REFERÊNCIA no vetor
            vetorProdutos[i] = new Produto(nome, preco);
        }

        double somaPrecos = 0.0;
        for (int i = 0; i < vetorProdutos.length; i++) {
            // vetorProdutos[i] é a referência para um objeto Produto
            // vetorProdutos[i].getPreco() acessa o método do objeto referenciado
            somaPrecos += vetorProdutos[i].getPreco();
        }

        double mediaPrecos = somaPrecos / vetorProdutos.length; // ou n

        System.out.printf("PREÇO MÉDIO = %.2f%n", mediaPrecos);

        leitor.close();
    }
}
```

**Visualização da Memória (Conceitual para `n=3` e os produtos do exemplo):**

* **Stack:**
    * `n: 3`
    * `vetorProdutos` (contém o endereço do array de referências na Heap, ex: 0xHEAP_ARR_REF1)
    * `leitor` (referência para o objeto Scanner)
    * `somaPrecos`, `mediaPrecos`
    * `i`, `nome`, `preco` (variáveis locais do loop)
* **Heap:**
    * `0xHEAP_ARR_REF1: [ref_obj1, ref_obj2, ref_obj3]` (array de referências)
        * `ref_obj1` aponta para `[Objeto Produto: nome="TV", preco=900.0]` (em outro local da Heap)
        * `ref_obj2` aponta para `[Objeto Produto: nome="Fryer", preco=400.0]` (em outro local da Heap)
        * `ref_obj3` aponta para `[Objeto Produto: nome="Stove", preco=800.0]` (em outro local da Heap)
    * Objeto `Scanner`

**Como executar (VS Code / IntelliJ IDEA):**

1.  Crie a classe `Produto.java` no pacote `entidades` (ex: `projetoProdutos/src/entidades/Produto.java`).
2.  Crie a classe `Programa.java` no pacote `aplicacao` (ex: `projetoProdutos/src/aplicacao/Programa.java`).
3.  Siga os mesmos passos de compilação e execução descritos para o "Problema Exemplo 1".

## 🥊 Boxing, Unboxing e Wrapper Classes

### 🎁 Boxing

*Boxing* é o processo de conversão de um tipo valor (primitivo) para um objeto do tipo referência compatível (sua respectiva *wrapper class*). O Java faz isso automaticamente em muitos contextos (autoboxing).

**Exemplo:**

```java
int x = 20;        // Tipo primitivo (valor) na Stack
Object obj = x;    // Autoboxing: x é "encaixotado" em um objeto Integer.
                   // 'obj' na Stack aponta para este objeto Integer na Heap.
                   // O objeto Integer na Heap armazena o valor 20.

// Também poderia ser:
// Integer objInteger = x;
```

**Visualização da Memória (Conceitual):**

* **Stack:**
    * `x: 20`
    * `obj` (contém o endereço do objeto `Integer` na Heap, ex: 0xHEAP_INT1)
* **Heap:**
    * `0xHEAP_INT1: [Objeto Integer: valor=20]`

### 🔓 Unboxing

*Unboxing* é o processo inverso: converter um objeto do tipo referência (de uma wrapper class) de volta para o seu tipo valor primitivo correspondente. O Java também faz isso automaticamente em muitos contextos (auto-unboxing).

**Exemplo:**

```java
int x = 20;
Object obj = x;       // Autoboxing para Integer

// Para usar o valor em um contexto que espera um int, o unboxing acontece:
int y = (int) obj;  // Unboxing explícito (cast)
                    // O valor 20 do objeto Integer na Heap é copiado para 'y' na Stack.

// Com auto-unboxing:
// Integer numeroEmCaixa = 100;
// int numeroPrimitivo = numeroEmCaixa; // Auto-unboxing
```

**Visualização da Memória (Conceitual após `int y = (int) obj;`):**

* **Stack:**
    * `x: 20`
    * `obj` (ainda aponta para 0xHEAP_INT1)
    * `y: 20` (cópia do valor)
* **Heap:**
    * `0xHEAP_INT1: [Objeto Integer: valor=20]` (ainda existe)

###  (Wrapper Classes)

Wrapper classes são classes em Java que "embrulham" os tipos de dados primitivos, permitindo que eles sejam tratados como objetos. Cada tipo primitivo tem uma classe wrapper correspondente:

* `byte` → `Byte`
* `short` → `Short`
* `int` → `Integer`
* `long` → `Long`
* `float` → `Float`
* `double` → `Double`
* `char` → `Character`
* `boolean` → `Boolean`

(Todas as classes wrapper numéricas herdam de `Number`, que por sua vez herda de `Object`).

**Por que usar Wrapper Classes?**

1.  **Coleções:** Estruturas de dados como `ArrayList`, `HashMap`, etc., só podem armazenar objetos. Se você quiser armazenar `int`s em um `ArrayList`, você usará `ArrayList<Integer>`. O boxing e unboxing cuidam da conversão.
2.  **Valor `null`:** Variáveis de tipo wrapper podem ser `null`, o que é útil para representar a ausência de um valor (ex: em campos de banco de dados que permitem nulos). Tipos primitivos não podem ser `null`.
3.  **Métodos Utilitários:** As classes wrapper fornecem métodos úteis (ex: `Integer.parseInt()` para converter uma String em `int`, `Double.toString()` para converter `double` em String).
4.  **Recursos de Orientação a Objetos:** Como são classes, podem participar de hierarquias de herança, ter métodos, etc.

**Uso Comum (Importante):** Campos de entidades em sistemas de informação frequentemente usam classes wrapper (ex: `Double` para preço, `Integer` para quantidade) para permitir valores `null` e usufruir dos recursos de OO.

```java
public class Produto {
    public String nome;
    public Double preco;     // Usando Double para permitir preço nulo
    public Integer quantidade; // Usando Integer para permitir quantidade nula
    // ... construtor, getters, setters
}

// Exemplo de uso
Produto prod = new Produto();
prod.nome = "Laptop";
prod.preco = null; // Válido, pois preco é Double
// prod.quantidade = 0; // Ou poderia ser null se fosse o caso

// Demonstração de auto-unboxing em operações
Integer xCaixa = 10;
int yPrimitivo = xCaixa * 2; // xCaixa é auto-desencaixotado para int antes da multiplicação
System.out.println(yPrimitivo); // Imprime 20
```

## 🔄 Laço "For Each" (Enhanced For Loop)

O laço "for each" (ou laço `for` aprimorado) oferece uma sintaxe opcional e mais simplificada para percorrer os elementos de coleções (como arrays e `List`s) ou qualquer objeto que implemente a interface `Iterable`.

**Sintaxe:**

```java
for (Tipo apelidoElemento : colecaoOuArray) {
    // Comandos usando apelidoElemento
    // Ex: System.out.println(apelidoElemento);
}
```

**Leitura:** "Para cada objeto do tipo `Tipo` chamado `apelidoElemento` contido em `colecaoOuArray`, faça:"

**Vantagens:**

* **Mais Legível:** Geralmente mais conciso e fácil de entender para simples iteração.
* **Menos Propenso a Erros:** Evita erros comuns com índices (ex: `ArrayIndexOutOfBoundsException`).

**Desvantagens:**

* **Acesso Somente Leitura (Geralmente):** Não é ideal se você precisar modificar a coleção *enquanto itera* de certas maneiras (remover elementos pode causar `ConcurrentModificationException` em algumas coleções) ou se precisar do índice do elemento.
* **Apenas para Frente:** Itera apenas do início ao fim, um elemento por vez. Não permite controle fino sobre a iteração (ex: pular elementos, iterar para trás).

**Exemplo com Array:**

```java
String[] vetorNomes = new String[] {"Maria", "Bob", "Alex"};

// Usando for tradicional com índice
System.out.println("--- Usando for tradicional ---");
for (int i = 0; i < vetorNomes.length; i++) {
    System.out.println(vetorNomes[i]);
}

// Usando for each
System.out.println("--- Usando for each ---");
for (String nome : vetorNomes) {
    System.out.println(nome);
}
```

Ambos os loops acima produzirão a mesma saída:

```
--- Usando for tradicional ---
Maria
Bob
Alex
--- Usando for each ---
Maria
Bob
Alex
```

## 📜 Listas - Parte 1

### ✅ Checklist de Listas (Parte 1)

* Conceito de lista
* Tipo `List` - Declaração, instanciação
* Demonstração (operações básicas)
* Assuntos pendentes (a serem explorados posteriormente):
    * Interfaces (em profundidade)
    * Generics (`<T>`)
    * Predicados (expressões lambda)

Referência:
[https://docs.oracle.com/javase/10/docs/api/java/util/List.html]{https://docs.oracle.com/javase/10/docs/api/java/util/List.html}

### 🍃 O que são Listas?

Uma **Lista** é uma estrutura de dados do tipo coleção que representa uma sequência ordenada de elementos. Diferentemente dos arrays, as listas em Java (implementações comuns como `ArrayList`) têm **tamanho dinâmico**.

**Características Principais:**

* **Homogênea (com Generics):** Geralmente, você especificará o tipo de dados que a lista irá conter usando generics (ex: `List<String>`, `List<Produto>`).
* **Ordenada:** Mantém a ordem de inserção dos elementos. Os elementos podem ser acessados por um índice (posição), começando em 0.
* **Dinâmica:** Começa vazia (ou com elementos iniciais) e seu tamanho aumenta ou diminui conforme elementos são adicionados ou removidos.
* **Alocação sob Demanda:** Os elementos são alocados conforme necessário. Cada elemento pode ser pensado como ocupando um "nó" ou posição dentro da estrutura interna da lista.

**Interface Principal:** `java.util.List`

**Classes Comuns que Implementam `List`:**

* `ArrayList`: Implementação baseada em um array redimensionável internamente. Boa para acesso rápido por índice (`get`) e iteração. Menos eficiente para inserções/remoções no meio da lista, pois pode exigir o deslocamento de elementos.
* `LinkedList`: Implementação baseada em uma lista duplamente encadeada. Mais eficiente para inserções e remoções em qualquer posição, mas o acesso por índice (`get`) pode ser mais lento (requer percorrer a lista).

**Vantagens sobre Arrays:**

* **Tamanho Variável:** Adapta-se dinamicamente à quantidade de dados.
* **Facilidade para Inserções e Deleções:** Métodos convenientes para adicionar e remover elementos.

**Desvantagens (especialmente para `ArrayList` em comparação com acesso direto a array, ou `LinkedList` para acesso por índice):**

* **Acesso Sequencial (Conceitual para `LinkedList`):** Embora `ArrayList` ofereça acesso rápido por índice, a natureza de algumas operações ou implementações (como `LinkedList`) pode implicar em percorrer parte da lista para encontrar um elemento específico se o índice não for usado.
* **Overhead:** Pode ter um pouco mais de consumo de memória e processamento em comparação com arrays simples devido à sua natureza dinâmica e aos objetos que gerenciam a estrutura.

## 📜 Listas - Parte 2: Operações Comuns

### ⚙️ Demonstração de Operações com `List` (usando `ArrayList`)

```java
package aplicacao;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors; // Para operações com Streams

public class ProgramaLista {

    public static void main(String[] args) {
        // Declaração e instanciação de uma Lista de Strings
        // Usando o polimorfismo: List é a interface, ArrayList é a implementação concreta.
        List<String> listaNomes = new ArrayList<>();

        // 1. Adicionar elementos: add(obj), add(indice, obj)
        listaNomes.add("Maria");    // Adiciona ao final
        listaNomes.add("Alex");
        listaNomes.add("Bob");
        listaNomes.add("Anna");
        System.out.println("Lista original: " + listaNomes);

        listaNomes.add(2, "Marco"); // Adiciona "Marco" na posição 2 (empurra "Bob" e "Anna")
        System.out.println("Após add(2, 'Marco'): " + listaNomes); // [Maria, Alex, Marco, Bob, Anna]

        // 2. Tamanho da lista: size()
        System.out.println("Tamanho da lista: " + listaNomes.size()); // 5

        // 3. Obter o elemento de uma posição: get(posicao)
        System.out.println("Elemento na posição 1: " + listaNomes.get(1)); // Alex

        // 4. Iterar sobre a lista (for each)
        System.out.println("--- Elementos da lista (for each) ---");
        for (String nome : listaNomes) {
            System.out.println(nome);
        }

        // 5. Remover elementos: remove(obj), remove(indice), removeIf(Predicate)
        // listaNomes.remove("Alex"); // Remove a primeira ocorrência do objeto "Alex"
        // System.out.println("Após remove('Alex'): " + listaNomes);

        // listaNomes.remove(0); // Remove o elemento na posição 0 ("Maria")
        // System.out.println("Após remove(0): " + listaNomes);

        // Remover todos os nomes que começam com a letra 'M' (usando Predicado lambda)
        // Predicado: uma função que retorna true/false.
        // x -> x.charAt(0) == 'M'  (para cada string x, verifica se o primeiro caractere é 'M')
        listaNomes.removeIf(x -> x.charAt(0) == 'M');
        System.out.println("Após removeIf(x -> x.charAt(0) == 'M'): " + listaNomes); // [Alex, Bob, Anna]

        // 6. Encontrar posição de elemento: indexOf(obj), lastIndexOf(obj)
        System.out.println("Índice de 'Bob': " + listaNomes.indexOf("Bob"));       // 1 (na lista atual)
        System.out.println("Índice de 'Marco': " + listaNomes.indexOf("Marco")); // -1 (não encontrado, pois foi removido)

        // Adicionando novamente para próximos exemplos
        listaNomes.add(0, "Maria");
        listaNomes.add("Mariana");
        System.out.println("Lista para próximos exemplos: " + listaNomes); // [Maria, Alex, Bob, Anna, Mariana]
        System.out.println("Índice de 'Maria': " + listaNomes.indexOf("Maria")); // 0 (primeira ocorrência)
        System.out.println("Último índice de 'Maria' (se houvesse duplicatas, aqui não há): " + listaNomes.lastIndexOf("Maria")); // 0

        // 7. Filtrar lista com base em predicado (usando Stream API)
        // Stream: uma sequência de elementos que suporta operações de agregação.
        // filter(): recebe um predicado e retorna um novo stream com elementos que satisfazem o predicado.
        // collect(Collectors.toList()): coleta os elementos do stream resultante em uma nova List.
        List<String> resultadoFiltro = listaNomes.stream()
                                             .filter(x -> x.charAt(0) == 'A')
                                             .collect(Collectors.toList());
        System.out.println("Nomes começando com 'A': " + resultadoFiltro); // [Alex, Anna]

        // 8. Encontrar primeira ocorrência com base em predicado (usando Stream API)
        // findFirst(): retorna um Optional contendo o primeiro elemento que satisfaz o predicado,
        //              ou um Optional vazio se nenhum for encontrado.
        // orElse(null): se o Optional estiver vazio, retorna null (ou outro valor padrão).
        String primeiroNomeComA = listaNomes.stream()
                                        .filter(x -> x.charAt(0) == 'A')
                                        .findFirst()
                                        .orElse(null);
        System.out.println("Primeiro nome começando com 'A': " + primeiroNomeComA); // Alex

        String primeiroNomeComJ = listaNomes.stream()
                                        .filter(x -> x.charAt(0) == 'J')
                                        .findFirst()
                                        .orElse(null);
        System.out.println("Primeiro nome começando com 'J': " + primeiroNomeComJ); // null
    }
}
```

**Como executar (VS Code / IntelliJ IDEA):**

1.  Crie um arquivo `ProgramaLista.java` (ex: `projetoListas/src/aplicacao/ProgramaLista.java`).
2.  Cole o código.
3.  Compile e execute como os exemplos anteriores.

**Assuntos Pendentes (Breve Introdução):**

* **Interfaces:** `List` é uma interface. Ela define *o quê* uma lista deve fazer (contrato de métodos), mas não *como*. Classes como `ArrayList` e `LinkedList` *implementam* essa interface, fornecendo o comportamento concreto.
* **Generics (`<String>`):** Permitem criar classes, interfaces e métodos que operam com tipos especificados em tempo de compilação. No exemplo `List<String>`, `<String>` indica que a lista só pode conter objetos `String`, garantindo segurança de tipo.
* **Predicados (Lambda Expressions `x -> x.charAt(0) == 'M'`):** São funções anônimas (sem nome) concisas, frequentemente usadas com a Stream API para filtrar, mapear ou realizar outras operações em coleções. `x -> x.charAt(0) == 'M'` é uma lambda que pega uma string `x` e retorna `true` se seu primeiro caractere for 'M', `false` caso contrário.

## 🛠️ Exercício de Fixação: Cadastro e Aumento Salarial de Funcionários

**Objetivo:** Praticar conceitos de Orientação a Objetos, Listas e encapsulamento em Java.

**Enunciado do Problema:**

Fazer um programa para ler um número inteiro N e depois os dados (id, nome e salário) de N funcionários. **Não deve haver repetição de id.**

Em seguida, efetuar o aumento de X por cento no salário de um determinado funcionário. Para isso, o programa deve ler um id e o valor X. Se o id informado não existir, mostrar uma mensagem "Este id não existe!" e abortar a operação de aumento.

Ao final, mostrar a listagem atualizada dos funcionários.

**Restrições e Dicas:**

* Use uma `List` para armazenar os funcionários.
* Crie uma classe `Funcionario` com os atributos `id`, `nome`, e `salario`.
* **Encapsulamento:** O salário de um funcionário não deve poder ser mudado livremente de fora da classe. Ele só pode ser aumentado através de um método específico que recebe a porcentagem de aumento. Crie um método `aumentarSalario(double porcentagem)` na classe `Funcionario`.
* Para verificar se um `id` já existe, você pode percorrer a lista ou usar Streams.

**Diagrama da Classe `Funcionario` (Simplificado):**

```
-------------------------
| Funcionario           |
-------------------------
| - id: Integer         |  // Usar Integer para permitir comparação com null se necessário
| - nome: String        |  // e para facilitar busca em coleções que esperam objetos.
| - salario: Double     |
-------------------------
| + Funcionario(id, nome, salario) |
| + getId(): Integer    |
| + getNome(): String   |
| + getSalario(): Double|
| + aumentarSalario(porcentagem: double): void |
-------------------------
```

**Exemplo de Interação 1 (ID encontrado):**

```
Quantos funcionários serão registrados? 3

Funcionário #1:
Id: 333
Nome: Maria Brown
Salário: 4000.00

Funcionário #2:
Id: 536
Nome: Alex Grey
Salário: 3000.00

Funcionário #3:
Id: 772
Nome: Bob Green
Salário: 5000.00

Digite o id do funcionário que terá aumento salarial: 536
Digite a porcentagem de aumento: 10.0

Lista de funcionários:
333, Maria Brown, 4000.00
536, Alex Grey, 3300.00
772, Bob Green, 5000.00
```

**Exemplo de Interação 2 (ID não encontrado):**

```
Quantos funcionários serão registrados? 2

Funcionário #1:
Id: 333
Nome: Maria Brown
Salário: 4000.00

Funcionário #2:
Id: 536
Nome: Alex Grey
Salário: 3000.00

Digite o id do funcionário que terá aumento salarial: 776
Este id não existe!

Lista de funcionários:
333, Maria Brown, 4000.00
536, Alex Grey, 3000.00
```

---

**(Solução do Exercício será implementada em arquivos separados: `Funcionario.java` e `ProgramaPrincipal.java`)**

**`Funcionario.java` (Entidade):**

```java
package entidades;

public class Funcionario {
    private Integer id; // Usar Integer para facilitar a busca em streams e permitir null (embora não usado aqui)
    private String nome;
    private Double salario;

    public Funcionario(Integer id, String nome, Double salario) {
        this.id = id;
        this.nome = nome;
        this.salario = salario;
    }

    public Integer getId() {
        return id;
    }

    // Não teremos setId para manter o id imutável após a criação.
    // Se necessário, a lógica de alteração de id seria mais complexa.

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Double getSalario() {
        return salario;
    }

    // O salário só pode ser alterado através deste método, garantindo o encapsulamento.
    public void aumentarSalario(double porcentagem) {
        if (porcentagem > 0) {
            salario += salario * (porcentagem / 100.0);
        }
    }

    @Override
    public String toString() {
        // Formata a saída para facilitar a impressão da lista de funcionários
        return id + ", " + nome + ", " + String.format("%.2f", salario);
    }
}
```

**`ProgramaPrincipal.java` (Aplicação):**

```java
package aplicacao;

import entidades.Funcionario; // Importa a classe Funcionario
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.Scanner;
// Optional: import java.util.stream.Collectors; // Se usar stream para buscar

public class ProgramaPrincipal {

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner leitor = new Scanner(System.in);
        List<Funcionario> listaFuncionarios = new ArrayList<>();

        System.out.print("Quantos funcionários serão registrados? ");
        int n = leitor.nextInt();

        for (int i = 0; i < n; i++) {
            System.out.printf("%nFuncionário #%d:%n", i + 1);
            System.out.print("Id: ");
            Integer id = leitor.nextInt();

            // Verifica se o ID já existe
            while (idJaExiste(listaFuncionarios, id)) {
                System.out.print("Id já cadastrado. Tente novamente: ");
                id = leitor.nextInt();
            }

            leitor.nextLine(); // Consome a quebra de linha do nextInt()
            System.out.print("Nome: ");
            String nome = leitor.nextLine();
            System.out.print("Salário: ");
            Double salario = leitor.nextDouble();

            listaFuncionarios.add(new Funcionario(id, nome, salario));
        }

        System.out.print("
Digite o id do funcionário que terá aumento salarial: ");
        Integer idAumento = leitor.nextInt();

        Funcionario funcParaAumentar = encontrarFuncionarioPorId(listaFuncionarios, idAumento);

        if (funcParaAumentar != null) {
            System.out.print("Digite a porcentagem de aumento: ");
            double porcentagem = leitor.nextDouble();
            funcParaAumentar.aumentarSalario(porcentagem);
        } else {
            System.out.println("Este id não existe!");
        }

        System.out.println("
Lista de funcionários:");
        for (Funcionario func : listaFuncionarios) {
            System.out.println(func); // Chama o método toString() de Funcionario
        }

        leitor.close();
    }

    // Método auxiliar para verificar se o ID já existe na lista
    public static boolean idJaExiste(List<Funcionario> lista, Integer id) {
        for (Funcionario func : lista) {
            if (func.getId().equals(id)) { // Importante usar .equals() para comparar objetos Integer
                return true;
            }
        }
        return false;
        // Alternativa com Stream:
        // return lista.stream().anyMatch(func -> func.getId().equals(id));
    }

    // Método auxiliar para encontrar um funcionário pelo ID
    public static Funcionario encontrarFuncionarioPorId(List<Funcionario> lista, Integer id) {
        for (Funcionario func : lista) {
            if (func.getId().equals(id)) {
                return func;
            }
        }
        return null; // Retorna null se não encontrar
        // Alternativa com Stream:
        // return lista.stream().filter(func -> func.getId().equals(id)).findFirst().orElse(null);
    }
}
```

**Como executar (VS Code / IntelliJ IDEA):**

1.  **Estrutura de Pastas (Exemplo):**
    ```
    projetoFuncionarios/
    └── src/
        ├── aplicacao/
        │   └── ProgramaPrincipal.java
        └── entidades/
            └── Funcionario.java
    ```
2.  Crie os arquivos `Funcionario.java` (no pacote `entidades`) e `ProgramaPrincipal.java` (no pacote `aplicacao`) com os códigos fornecidos.
3.  **VS Code:**
    * Abra a pasta `projetoFuncionarios` no VS Code.
    * Certifique-se de que o "Extension Pack for Java" está ativo.
    * Abra o arquivo `ProgramaPrincipal.java`.
    * Clique com o botão direito no editor e selecione "Run Java" ou use o atalho (geralmente um ícone de play).
4.  **IntelliJ IDEA:**
    * Crie um novo projeto Java.
    * Crie os pacotes `entidades` e `aplicacao` dentro da pasta `src`.
    * Copie as classes para seus respectivos pacotes.
    * Abra `ProgramaPrincipal.java`.
    * Clique na seta verde ao lado do método `main` e selecione "Run 'ProgramaPrincipal.main()'".

Este exercício cobre os principais tópicos abordados: uso de classes (OO), listas para coleções dinâmicas, encapsulamento para proteger dados (salário), e interação com o usuário.

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)

