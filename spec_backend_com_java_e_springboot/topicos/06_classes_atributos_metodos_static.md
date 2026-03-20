---
layout: default
title: ☕ Java: Classes, Atributos, Métodos e Static
---

# ☕ Java: Classes, Atributos, Métodos e Static

Este documento aborda os conceitos fundamentais de Orientação a Objetos em Java, incluindo classes, atributos, métodos e membros estáticos, com exemplos práticos.

## 📐 Resolvendo um Problema Sem Orientação a Objetos

Vamos considerar um problema e resolvê-lo inicialmente sem o uso de Orientação a Objetos (OO) para, em seguida, compararmos com a abordagem OO.

### Problema Exemplo 📝

Fazer um programa para ler as medidas dos lados de dois triângulos X e Y (suponha medidas válidas). Em seguida, mostrar o valor das áreas dos dois triângulos e dizer qual dos dois triângulos possui a maior área.

A fórmula para calcular a área de um triângulo a partir das medidas de seus lados a, b e c é a seguinte (fórmula de Heron):

area = raiz(p(p-a)(p-b)(p-c))

onde

p = ((a+b+c)/2))

**Exemplo de Execução:**

```
Digite as medidas do triângulo X:
3.00
4.00
5.00
Digite as medidas do triângulo Y:
7.50
4.50
4.02
Área do triângulo X: 6.0000
Área do triângulo Y: 7.5638
Maior área: Y
```

**Solução em Java (Sem OO):**

```java
package aplicacao;

import java.util.Locale;
import java.util.Scanner;

public class Programa {

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        double ladoXa, ladoXb, ladoXc, ladoYa, ladoYb, ladoYc;

        System.out.println("Digite as medidas do triângulo X:");
        ladoXa = sc.nextDouble();
        ladoXb = sc.nextDouble();
        ladoXc = sc.nextDouble();

        System.out.println("Digite as medidas do triângulo Y:");
        ladoYa = sc.nextDouble();
        ladoYb = sc.nextDouble();
        ladoYc = sc.nextDouble();

        double p = (ladoXa + ladoXb + ladoXc) / 2.0;
        double areaX = Math.sqrt(p * (p - ladoXa) * (p - ladoXb) * (p - ladoXc));

        p = (ladoYa + ladoYb + ladoYc) / 2.0;
        double areaY = Math.sqrt(p * (p - ladoYa) * (p - ladoYb) * (p - ladoYc));

        System.out.printf("Área do triângulo X: %.4f%n", areaX);
        System.out.printf("Área do triângulo Y: %.4f%n", areaY);

        if (areaX > areaY) {
            System.out.println("Maior área: X");
        } else {
            System.out.println("Maior área: Y");
        }
        sc.close();
    }
}
```

**Discussão sobre a Solução Sem OO:**

Na abordagem acima, estamos utilizando variáveis distintas (`ladoXa`, `ladoXb`, `ladoXc`, etc.) para representar os atributos de cada triângulo. Isso pode se tornar complexo e desorganizado à medida que o número de entidades (triângulos, neste caso) ou a complexidade delas aumenta. Um triângulo é uma entidade que naturalmente possui três atributos (lados a, b, c).

Para melhorar essa estrutura, podemos usar uma **CLASSE** para representar um triângulo.

## 🏛️ Criando uma Classe para Melhorar a Representação do Triângulo

### O que é uma Classe?

Uma **classe** é um tipo estruturado que pode conter membros, como:

* **Atributos** (dados / campos): São as características ou informações que os objetos da classe terão. Por exemplo, para um triângulo, os atributos seriam os comprimentos dos seus lados.
* **Métodos** (funções / operações): São as ações ou comportamentos que os objetos da classe podem executar. Por exemplo, um triângulo poderia ter um método para calcular sua área.

Além disso, classes podem prover outros recursos avançados, como:

* Construtores: Métodos especiais para criar e inicializar objetos.
* Sobrecarga (Overloading): Permitir que múltiplos métodos tenham o mesmo nome, mas diferentes parâmetros.
* Encapsulamento: Proteger os dados (atributos) e controlar o acesso a eles.
* Herança: Criar novas classes baseadas em classes existentes, reutilizando e estendendo funcionalidades.
* Polimorfismo: Permitir que objetos de diferentes classes sejam tratados através de uma interface comum.

**Exemplos de uso de classes:**

* **Entidades:** `Produto`, `Cliente`, `Triangulo`
* **Serviços:** `ServicoProduto`, `ServicoCliente`, `ServicoEmail`
* **Controladores:** `ControladorProduto`, `ControladorCliente`
* **Utilitários:** `Calculadora`, `Compactador`

**Definindo a Classe `Triangulo`:**

Vamos criar uma classe `Triangulo` para agrupar os atributos `a`, `b`, e `c`.

```java
// No arquivo Triangulo.java, dentro da pasta "entidades" (ou similar)
package entidades;

public class Triangulo {
    public double a;
    public double b;
    public double c;
}
```

Com a classe `Triangulo`, em vez de:
`double ladoXa, ladoXb, ladoXc, ladoYa, ladoYb, ladoYc;`

Podemos ter:
`Triangulo trianguloX, trianguloY;`
`trianguloX = new Triangulo();`
`trianguloY = new Triangulo();`

Onde `trianguloX` e `trianguloY` são **objetos** (instâncias) da classe `Triangulo`. Cada objeto terá seus próprios atributos `a`, `b`, e `c`.

* `trianguloX` terá `trianguloX.a`, `trianguloX.b`, `trianguloX.c`
* `trianguloY` terá `trianguloY.a`, `trianguloY.b`, `trianguloY.c`

### 🔄 Instanciação (Alocação Dinâmica de Memória)

Quando declaramos `Triangulo trianguloX;`, estamos criando uma variável de referência. Para que `trianguloX` realmente aponte para um objeto `Triangulo` na memória, precisamos **instanciá-lo** usando a palavra-chave `new`:

`trianguloX = new Triangulo();`

**Memória:**

* **Stack (Pilha):** Armazena variáveis locais e referências a objetos. No nosso exemplo, as variáveis `areaX`, `areaY`, `p` (se fossem locais no `main`), e as referências `trianguloX` e `trianguloY` (que guardam endereços de memória) estariam na stack.
* **Heap:** Armazena os objetos propriamente ditos (instâncias de classes). Quando fazemos `new Triangulo()`, um espaço de memória é alocado no heap para guardar os atributos `a`, `b`, e `c` desse objeto `Triangulo`. A referência na stack (`trianguloX` ou `trianguloY`) aponta para essa localização no heap.

**Solução em Java (Com Classe `Triangulo`):**

```java
// Arquivo: Programa.java
package aplicacao;

import java.util.Locale;
import java.util.Scanner;
import entidades.Triangulo; // Importa a classe Triangulo

public class Programa {

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        Triangulo trianguloX, trianguloY; // Declara as referências
        trianguloX = new Triangulo();     // Instancia o objeto trianguloX
        trianguloY = new Triangulo();     // Instancia o objeto trianguloY

        System.out.println("Digite as medidas do triângulo X:");
        trianguloX.a = sc.nextDouble();
        trianguloX.b = sc.nextDouble();
        trianguloX.c = sc.nextDouble();

        System.out.println("Digite as medidas do triângulo Y:");
        trianguloY.a = sc.nextDouble();
        trianguloY.b = sc.nextDouble();
        trianguloY.c = sc.nextDouble();

        double p = (trianguloX.a + trianguloX.b + trianguloX.c) / 2.0;
        double areaX = Math.sqrt(p * (p - trianguloX.a) * (p - trianguloX.b) * (p - trianguloX.c));

        p = (trianguloY.a + trianguloY.b + trianguloY.c) / 2.0;
        double areaY = Math.sqrt(p * (p - trianguloY.a) * (p - trianguloY.b) * (p - trianguloY.c));

        System.out.printf("Área do triângulo X: %.4f%n", areaX);
        System.out.printf("Área do triângulo Y: %.4f%n", areaY);

        if (areaX > areaY) {
            System.out.println("Maior área: X");
        } else {
            System.out.println("Maior área: Y");
        }
        sc.close();
    }
}
```

### 📦 Classes, Objetos e Atributos (Recapitulando)

* **Classe:** É a definição do tipo, o "molde" ou "planta baixa". Ex: `Triangulo`.
* **Objeto:** É uma instância da classe, uma "casa" construída a partir da "planta baixa". Ex: `trianguloX` e `trianguloY` são objetos. Cada objeto tem sua própria cópia dos atributos definidos na classe.
* **Atributos:** São as variáveis dentro da classe que armazenam os dados do objeto. Ex: `a`, `b`, `c` na classe `Triangulo`.

## 🛠️ Adicionando Métodos à Classe Triangulo

Ainda podemos melhorar nosso código. A lógica para calcular a área de um triângulo está atualmente no programa principal (`Programa.java`). Seria mais organizado e reutilizável se essa lógica pertencesse à própria classe `Triangulo`.

### Discussão sobre Métodos

Com o uso da classe, temos variáveis compostas (`trianguloX`, `trianguloY`) do tipo `Triangulo`. Agora, vamos adicionar um **método** à classe `Triangulo` para calcular a área.

Um método representa uma operação ou comportamento que um objeto da classe pode realizar.

**Classe `Triangulo` com Método `calcularArea()`:**

```java
// No arquivo Triangulo.java
package entidades;

public class Triangulo {
    public double a;
    public double b;
    public double c;

    // Método para calcular a área do triângulo
    public double calcularArea() {
        double p = (a + b + c) / 2.0;
        return Math.sqrt(p * (p - a) * (p - b) * (p - c));
    }
}
```

**Componentes de um Método (Ex: `public double calcularArea()`):**

* **`public`**: Modificador de acesso. `public` indica que o método pode ser chamado de qualquer outra classe.
* **`double`**: Tipo de retorno. Indica que o método `calcularArea` retornará um valor do tipo `double` (a área). Se o método não retornasse nada, usaríamos `void`.
* **`calcularArea`**: Nome do método.
* **`()`**: Lista de parâmetros. Este método não recebe parâmetros externos, pois usa os atributos (`a`, `b`, `c`) do próprio objeto.
* **Corpo do Método `{...}`**: Contém as instruções que o método executa.

**Programa Principal Usando o Método `calcularArea()`:**

```java
// Arquivo: Programa.java
package aplicacao;

import java.util.Locale;
import java.util.Scanner;
import entidades.Triangulo;

public class Programa {

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        Triangulo trianguloX = new Triangulo();
        Triangulo trianguloY = new Triangulo();

        System.out.println("Digite as medidas do triângulo X:");
        trianguloX.a = sc.nextDouble();
        trianguloX.b = sc.nextDouble();
        trianguloX.c = sc.nextDouble();

        System.out.println("Digite as medidas do triângulo Y:");
        trianguloY.a = sc.nextDouble();
        trianguloY.b = sc.nextDouble();
        trianguloY.c = sc.nextDouble();

        // Chama o método calcularArea() para cada objeto
        double areaX = trianguloX.calcularArea();
        double areaY = trianguloY.calcularArea();

        System.out.printf("Área do triângulo X: %.4f%n", areaX);
        System.out.printf("Área do triângulo Y: %.4f%n", areaY);

        if (areaX > areaY) {
            System.out.println("Maior área: X");
        } else {
            System.out.println("Maior área: Y");
        }
        sc.close();
    }
}
```

### 📈 Benefícios de Usar Métodos Dentro da Classe

1.  **Reaproveitamento de Código:** Eliminamos o código repetido para o cálculo das áreas no programa principal. A lógica de cálculo está definida uma vez, no método `calcularArea()`.
2.  **Delegação de Responsabilidades (Coesão):** Quem deve ser responsável por saber como calcular a área de um triângulo é o próprio triângulo. A lógica do cálculo da área não deve estar em outro lugar (como no programa principal). Isso torna a classe `Triangulo` mais coesa e o sistema mais fácil de entender e manter.

### 🎨 Projeto da Classe (UML Simplificado)

Uma forma comum de representar classes é através de diagramas UML (Unified Modeling Language).

**Triangulo**
---
- a: double
- b: double
- c: double
---
+ calcularArea(): double

Onde:
* `-` indica atributos (geralmente `private`, mas `public` no exemplo para simplicidade inicial).
* `+` indica métodos (geralmente `public`).
* O nome da classe fica no topo.
* Os atributos são listados no meio.
* Os métodos são listados na parte inferior.

## 📦 Resolvendo um Segundo Problema: Controle de Estoque de Produtos

Vamos aplicar os conceitos de classes, atributos e métodos a um novo problema.

### Problema Exemplo 🛍️

Fazer um programa para ler os dados de um produto em estoque (nome, preço e quantidade no estoque). Em seguida:

* Mostrar os dados do produto (nome, preço, quantidade no estoque, valor total no estoque).
* Realizar uma entrada no estoque e mostrar novamente os dados do produto.
* Realizar uma saída no estoque e mostrar novamente os dados do produto.

Para resolver este problema, você deve criar uma CLASSE `Produto` conforme o projeto:

**Produto**
---
- nome: String
- preco: double
- quantidade: int
---
+ valorTotalEmEstoque(): double
+ adicionarProdutos(quantidade: int): void
+ removerProdutos(quantidade: int): void
+ toString(): String  *(Adicionado para facilitar a exibição)*

**Exemplo de Execução:**

```
Digite os dados do produto:
Nome: TV
Preço: 900.00
Quantidade em estoque: 10

Dados do produto: TV, $900.00, 10 unidades, Total:$ 9000.00

Digite o número de produtos a serem adicionados ao estoque: 5
Dados atualizados: TV, $900.00, 15 unidades, Total:$ 13500.00

Digite o número de produtos a serem removidos do estoque: 3
Dados atualizados: TV, $900.00, 12 unidades, Total:$ 10800.00
```

### 📜 A Classe `Object` e o Método `toString()`

* Toda classe em Java, implicitamente ou explicitamente, é uma subclasse da classe `Object`.
* A classe `Object` possui métodos úteis que são herdados por todas as outras classes, como:
    * `getClass()`: retorna o tipo do objeto em tempo de execução.
    * `equals(obj)`: compara se o objeto é igual a outro objeto.
    * `hashCode()`: retorna um código hash do objeto.
    * `toString()`: converte o objeto para uma representação em String. Por padrão, o `toString()` da classe `Object` retorna o nome da classe seguido por `@` e o código hash do objeto. É uma boa prática sobrescrever (override) o método `toString()` em suas classes para fornecer uma representação textual mais significativa do objeto.

**Implementação da Classe `Produto`:**

```java
// No arquivo Produto.java
package entidades;

public class Produto {
    public String nome;
    public double preco;
    public int quantidade;

    public double valorTotalEmEstoque() {
        return preco * quantidade;
    }

    public void adicionarProdutos(int quantidadeParaAdicionar) {
        // 'this.quantidade' se refere ao atributo da classe
        // 'quantidadeParaAdicionar' se refere ao parâmetro do método
        this.quantidade += quantidadeParaAdicionar;
    }

    public void removerProdutos(int quantidadeParaRemover) {
        this.quantidade -= quantidadeParaRemover;
    }

    // Sobrescrevendo o método toString()
    @Override // Anotação opcional, mas recomendada, para indicar sobrescrita
    public String toString() {
        return nome
            + ", $ "
            + String.format("%.2f", preco) // Formata o preço com 2 casas decimais
            + ", "
            + quantidade
            + " unidades, Total: $ "
            + String.format("%.2f", valorTotalEmEstoque());
    }
}
```
**Nota sobre `this`**: A palavra-chave `this` é uma referência ao próprio objeto corrente. É usada para:
1.  Desambiguar entre atributos da instância e variáveis locais/parâmetros com o mesmo nome (como em `this.quantidade = quantidade;`).
2.  Chamar outros construtores da mesma classe (construtor `this()`).
3.  Passar o objeto atual como argumento para outro método.

No método `adicionarProdutos`, se o parâmetro fosse nomeado `quantidade` (igual ao atributo), seria necessário usar `this.quantidade += quantidade;`. Se os nomes são diferentes, como `quantidadeParaAdicionar`, o `this` é opcional, mas pode ser usado para clareza: `this.quantidade += quantidadeParaAdicionar;`.

**Programa Principal para o Problema do Produto:**

```java
// Arquivo: ProgramaEstoque.java
package aplicacao;

import java.util.Locale;
import java.util.Scanner;
import entidades.Produto;

public class ProgramaEstoque {

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        Produto produto = new Produto(); // Cria um objeto Produto

        System.out.println("Digite os dados do produto:");
        System.out.print("Nome: ");
        produto.nome = sc.nextLine(); // nextLine() para ler o nome completo
        System.out.print("Preço: ");
        produto.preco = sc.nextDouble();
        System.out.print("Quantidade em estoque: ");
        produto.quantidade = sc.nextInt();

        System.out.println();
        // Ao passar o objeto 'produto' para System.out.println(),
        // o método toString() do objeto é chamado automaticamente.
        System.out.println("Dados do produto: " + produto);

        System.out.println();
        System.out.print("Digite o número de produtos a serem adicionados ao estoque: ");
        int qtdAdicionar = sc.nextInt();
        produto.adicionarProdutos(qtdAdicionar); // Chama o método para adicionar

        System.out.println();
        System.out.println("Dados atualizados: " + produto);

        System.out.println();
        System.out.print("Digite o número de produtos a serem removidos do estoque: ");
        int qtdRemover = sc.nextInt();
        produto.removerProdutos(qtdRemover); // Chama o método para remover

        System.out.println();
        System.out.println("Dados atualizados: " + produto);

        sc.close();
    }
}
```

## 🧍 Membros Estáticos (Static Members)

Membros de uma classe (atributos e métodos) podem ser de instância ou estáticos.

* **Membros de Instância:** Pertencem a cada objeto individualmente. Cada objeto tem sua própria cópia dos atributos de instância, e os métodos de instância operam sobre os dados desse objeto específico (usando `this` implicitamente ou explicitamente). Os exemplos `Triangulo` e `Produto` que vimos até agora utilizam membros de instância.
    * `trianguloX.a`, `trianguloY.a` são atributos de instância.
    * `trianguloX.calcularArea()` é um método de instância.

* **Membros Estáticos (ou Membros de Classe):**
    * Pertencem à classe em si, e não a uma instância/objeto específico.
    * Não precisam de um objeto para serem chamados; são acessados diretamente através do nome da classe.
    * Existe apenas uma cópia de um membro estático, compartilhada por todas as instâncias da classe (se houverem).
    * **Aplicações comuns:**
        * **Classes Utilitárias:** Classes que agrupam funções relacionadas, como `Math` (`Math.sqrt()`, `Math.PI`). Essas classes frequentemente contêm apenas membros estáticos e podem até ser declaradas como `final` e ter um construtor privado para impedir a instanciação.
        * **Declaração de Constantes:** Valores que são fixos para a classe, como `Math.PI`.

    * Uma classe que possui *somente* membros estáticos pode, conceitualmente, ser uma classe estática. Em Java, classes de nível superior não podem ser `static`, mas classes aninhadas (inner classes) podem. No entanto, a ideia é que você não precisaria instanciar tal classe.

**Contextualizando com Exemplos Anteriores:**

* No problema dos triângulos, cada triângulo (`trianguloX`, `trianguloY`) tem *sua própria* área. O método `calcularArea()` é uma operação que pertence ao objeto, pois depende dos atributos `a`, `b`, `c` específicos daquele objeto. Portanto, `calcularArea()` é um método de instância.
* Imagine uma calculadora. As operações de uma calculadora (soma, subtração, cálculo de circunferência, etc.) não dependem de uma "instância" específica da calculadora para darem resultados diferentes para as mesmas entradas. O cálculo de uma circunferência para um raio de 3.0 será sempre o mesmo, não importa qual "calculadora" (objeto) você use. O valor de PI também é uma constante. Esses são candidatos a membros estáticos.

### Problema Exemplo para Membros Estáticos: Calculadora 🧮

Fazer um programa para ler um valor numérico qualquer (raio) e, daí, mostrar quanto seria o valor de uma circunferência e do volume de uma esfera para um raio daquele valor. Informar também o valor de PI com duas casas decimais.

**Fórmulas:**
* Circunferência: C = 2 * π * r
* Volume da esfera: V = (4/3) * π * r^3
* Valor de PI: 3.14159 (ou 3.14, dependendo do nível de precisão desejado)


**Exemplo de Execução:**
```
Digite o raio: 3.0
Circunferência: 18.85
Volume: 113.10
Valor de PI: 3.14
```

Vamos explorar três versões para resolver este problema:

#### Versão 1: Métodos Estáticos na Própria Classe do Programa

Podemos colocar os métodos de cálculo e a constante PI diretamente na classe `ProgramaPrincipal` (ou qualquer classe que contenha o `main`) como membros estáticos.

**Importante:** Dentro de um método estático (como `main`), você não pode chamar membros de instância da *mesma classe* diretamente, pois métodos estáticos não estão associados a um objeto específico (não há `this`). No entanto, você pode chamar outros métodos estáticos ou acessar atributos estáticos da mesma classe.

```java
// Arquivo: CalculadoraV1.java
package aplicacao;

import java.util.Locale;
import java.util.Scanner;

public class CalculadoraV1 {

    // Atributo estático (constante)
    public static final double PI = 3.14159; // 'final' indica que o valor não pode ser alterado

    // Método main (sempre estático)
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite o raio: ");
        double raio = sc.nextDouble();

        // Chama os métodos estáticos da própria classe
        double c = calcularCircunferencia(raio);
        double v = calcularVolume(raio);

        System.out.printf("Circunferência: %.2f%n", c);
        System.out.printf("Volume: %.2f%n", v);
        System.out.printf("Valor de PI: %.2f%n", PI); // Acessa o atributo estático

        sc.close();
    }

    // Método estático
    public static double calcularCircunferencia(double raio) {
        return 2.0 * PI * raio; // Acessa o PI estático da classe
    }

    // Método estático
    public static double calcularVolume(double raio) {
        return 4.0 * PI * raio * raio * raio / 3.0; // Acessa o PI estático da classe
    }
}
```

#### Versão 2: Classe `Calculadora` com Membros de Instância

Aqui, criamos uma classe `Calculadora`, mas com seus membros definidos como de instância. Isso significa que precisaríamos criar um objeto `Calculadora` para usar seus métodos.

```java
// Arquivo: CalculadoraV2.java
package utilitarios; // Um pacote para classes utilitárias

public class CalculadoraV2 {

    public final double PI = 3.14159; // Membro de instância

    public double calcularCircunferencia(double raio) { // Método de instância
        return 2.0 * PI * raio;
    }

    public double calcularVolume(double raio) { // Método de instância
        return 4.0 * PI * raio * raio * raio / 3.0;
    }
}
```

**Usando `CalculadoraV2`:**

```java
// Arquivo: CalculadoraV2.java
package aplicacao;

import java.util.Locale;
import java.util.Scanner;
import utilitarios.CalculadoraV2; // Importa a classe

public class ProgramaCalculadoraV2 {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        CalculadoraV2 calc = new CalculadoraV2(); // Precisa instanciar

        System.out.print("Digite o raio: ");
        double raio = sc.nextDouble();

        double c = calc.calcularCircunferencia(raio); // Chama método de instância
        double v = calc.calcularVolume(raio);       // Chama método de instância

        System.out.printf("Circunferência: %.2f%n", c);
        System.out.printf("Volume: %.2f%n", v);
        System.out.printf("Valor de PI: %.2f%n", calc.PI); // Acessa membro de instância

        sc.close();
    }
}
```
Essa abordagem (Versão 2) não é a ideal para uma calculadora, pois não há estado (dados) que precise variar entre diferentes "objetos" de calculadora para que as operações funcionem. Criar um objeto `calc` é um passo desnecessário aqui.

#### Versão 3: Classe `Calculadora` com Membros Estáticos (Recomendado para este caso)

Esta é a abordagem mais adequada para uma classe utilitária como a `Calculadora`. Os métodos e a constante PI são definidos como `static`.

```java
// Arquivo: Calculadora.java (ou CalculadoraV3.java)
package utilitarios;

public class Calculadora {

    public static final double PI = 3.14159; // Membro estático (constante)

    public static double calcularCircunferencia(double raio) { // Método estático
        return 2.0 * PI * raio;
    }

    public static double calcularVolume(double raio) { // Método estático
        return 4.0 * PI * raio * raio * raio / 3.0;
    }
}
```

**Usando `Calculadora` (com membros estáticos):**

```java
// Arquivo: ProgramaCalculadoraV3.java
package aplicacao;

import java.util.Locale;
import java.util.Scanner;
// Não é necessário importar a classe Calculadora para chamar métodos estáticos se estiver em outro pacote,
// mas é preciso usar o nome da classe: Calculadora.metodo()
// Se for importar estaticamente: import static utilitarios.Calculadora.*;
// o que permitiria chamar os métodos diretamente: circunferencia(raio)
import utilitarios.Calculadora; // Importa a classe para facilitar a referência

public class ProgramaCalculadoraV3 {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        // Não é necessário criar um objeto Calculadora:
        // Calculadora calc = new Calculadora(); // ERRADO para membros estáticos

        System.out.print("Digite o raio: ");
        double raio = sc.nextDouble();

        // Chama os métodos estáticos diretamente pela classe
        double c = Calculadora.calcularCircunferencia(raio);
        double v = Calculadora.calcularVolume(raio);

        System.out.printf("Circunferência: %.2f%n", c);
        System.out.printf("Volume: %.2f%n", v);
        System.out.printf("Valor de PI: %.2f%n", Calculadora.PI); // Acessa o atributo estático

        sc.close();
    }
}
```

**Discussão sobre as Versões da Calculadora:**

* A **Versão 3** é a mais apropriada. Os cálculos de circunferência e volume, e o valor de PI, são inerentemente estáticos – eles não dependem de um estado particular de um objeto "calculadora".
* Usar membros estáticos (como em `Math.sqrt()` ou `Calculadora.calcularCircunferencia()`) é mais direto e eficiente para funcionalidades utilitárias, pois evita a necessidade de criar instâncias de objetos desnecessariamente.

## 💻 Executando os Exemplos em IDEs Modernas (VS Code e IntelliJ IDEA)

Os exemplos de código Java fornecidos podem ser facilmente executados em ambientes de desenvolvimento integrado (IDEs) populares como Visual Studio Code (VS Code) e IntelliJ IDEA.

**Requisitos Comuns:**

1.  **JDK (Java Development Kit):** Certifique-se de ter o JDK instalado em seu sistema. As IDEs geralmente detectam o JDK instalado ou permitem que você configure o caminho para ele.
2.  **Extensões (para VS Code):** Se estiver usando o VS Code, instale o "Extension Pack for Java" da Microsoft, que fornece suporte à linguagem Java, depuração, teste, Maven/Gradle, etc.

**Estrutura de Pastas (Exemplo):**

Para os exemplos, você normalmente teria uma estrutura de projeto como:

```
MeuProjetoJava/
├── src/
│   ├── aplicacao/
│   │   ├── Programa.java
│   │   ├── ProgramaEstoque.java
│   │   └── ProgramaCalculadoraV1.java (ou V2, V3)
│   ├── entidades/
│   │   ├── Triangulo.java
│   │   └── Produto.java
│   └── utilitarios/
│       ├── CalculadoraV2.java
│       └── Calculadora.java (para V3)
└── (arquivos de configuração da IDE, como .vscode/ ou .idea/)
```

**Passos Gerais:**

1.  **Criar/Abrir Projeto:**
    * **IntelliJ IDEA:** Crie um novo projeto Java (`File > New > Project...`) ou abra um projeto existente (`File > Open...`).
    * **VS Code:** Abra a pasta do projeto (`File > Open Folder...`).

2.  **Criar Arquivos `.java`:**
    * Crie os arquivos Java (`Triangulo.java`, `Programa.java`, etc.) dentro das pastas de pacotes correspondentes (ex: `entidades`, `aplicacao`). A IDE geralmente ajuda a criar pacotes e classes.

3.  **Escrever o Código:** Cole ou escreva o código Java nos respectivos arquivos.

4.  **Executar o Programa:**
    * Localize a classe que contém o método `public static void main(String[] args)`.
    * **IntelliJ IDEA:** Clique com o botão direito no arquivo ou dentro da classe no editor e selecione "Run 'NomeDaClasse.main()'". Você também pode clicar na seta verde ao lado da declaração do método `main`.
    * **VS Code:** Abra o arquivo com o método `main`. Você verá um link "Run" acima da declaração do método `main`. Clique nele. Alternativamente, clique com o botão direito no arquivo no explorador de arquivos e selecione "Run Java".

As IDEs compilarão o código e executarão o programa, mostrando a saída no console integrado. Elas também oferecem ferramentas poderosas para depuração, refatoração e muito mais, que vão além do escopo destes exemplos básicos.

---
## 📚

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)

