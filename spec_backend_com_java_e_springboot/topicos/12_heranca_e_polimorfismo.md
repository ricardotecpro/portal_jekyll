---
layout: default
title: Java: Herança e Polimorfismo
---

# Java: Herança e Polimorfismo

## Herança 🧬

Herança é um tipo de associação entre classes que permite que uma classe (subclasse) herde todos os dados (atributos) e comportamentos (métodos) de outra classe (superclasse). Isso promove o reuso de código e estabelece uma relação hierárquica entre as classes.

### Definições Importantes

* **Relação "é-um"**: A herança representa uma relação "é-um". Por exemplo, um `Carro` *é um* `Veiculo`.
* **Generalização/Especialização**: A superclasse é uma generalização, enquanto a subclasse é uma especialização. `Veiculo` é genérico; `Carro` e `Moto` são especializações.
* **Superclasse (Classe Base)**: A classe cujas características são herdadas.
* **Subclasse (Classe Derivada)**: A classe que herda características de outra classe.
* **Herança / Extensão**: A subclasse estende a superclasse.
* **Associação entre Classes**: Herança é uma relação definida entre classes, não entre objetos individuais.

### Vantagens da Herança

* **Reuso de Código**: Atributos e métodos comuns definidos na superclasse não precisam ser reescritos nas subclasses.
* **Polimorfismo**: Permite que objetos de diferentes subclasses sejam tratados como objetos da superclasse, possibilitando comportamentos específicos em tempo de execução. (Mais detalhes sobre polimorfismo adiante).

### Sintaxe em Java

Para uma classe `A` herdar de uma classe `B`, utiliza-se a palavra-chave `extends`:

```java
class B {
    // Atributos e métodos de B
}

class A extends B {
    // A herda os membros de B
    // Atributos e métodos adicionais específicos de A
}
```

### Exemplo Prático: Contas Bancárias

Suponha um sistema bancário que possui uma conta comum (`Conta`) e uma conta para empresas (`ContaEmpresarial`). A conta para empresa possui todos os membros da conta comum, mais um limite de empréstimo e uma operação para realizar empréstimo.

**Classe `Conta`**

```java
// Representação conceitual
public class Conta {
    private Integer numero;
    private String titular;
    protected Double saldo; // protected para ser acessível por subclasses diretas

    public Conta(Integer numero, String titular, Double saldo) {
        this.numero = numero;
        this.titular = titular;
        this.saldo = saldo;
    }

    public void sacar(Double quantia) {
        saldo -= quantia;
    }

    public void depositar(Double quantia) {
        saldo += quantia;
    }

    // Getters para numero e titular
    public Integer getNumero() { return numero; }
    public String getTitular() { return titular; }
    public Double getSaldo() { return saldo; }
}
```

**Classe `ContaEmpresarial`**

Esta classe herda de `Conta` e adiciona funcionalidades específicas.

```java
// Representação conceitual
public class ContaEmpresarial extends Conta {
    private Double limiteEmprestimo;

    public ContaEmpresarial(Integer numero, String titular, Double saldo, Double limiteEmprestimo) {
        super(numero, titular, saldo); // Chama o construtor da superclasse
        this.limiteEmprestimo = limiteEmprestimo;
    }

    public void realizarEmprestimo(Double quantia) {
        if (quantia <= limiteEmprestimo) {
            depositar(quantia); // Reutiliza o método depositar da superclasse
            // Ou, se houver taxas no empréstimo que afetam o saldo diretamente:
            // saldo += quantia - TAXA_EMPRESTIMO; (se 'saldo' for protected)
        } else {
            System.out.println("Quantia excede o limite de empréstimo.");
        }
    }

    // Getter para limiteEmprestimo
    public Double getLimiteEmprestimo() { return limiteEmprestimo; }
}
```
Com a herança, `ContaEmpresarial` reutiliza `numero`, `titular`, `saldo` e os métodos `sacar` e `depositar` da classe `Conta`.

### Modificador de Acesso `protected`

O modificador `protected` em Java torna um membro (atributo ou método) acessível:
* Dentro da própria classe.
* Por outras classes no mesmo pacote.
* Por subclasses, mesmo que estejam em pacotes diferentes.

No exemplo acima, se `saldo` na classe `Conta` fosse `private`, a classe `ContaEmpresarial` não poderia acessá-lo diretamente para realizar o empréstimo (a menos que usasse métodos `public` ou `protected` da superclasse para alterar o saldo). Torná-lo `protected` permite esse acesso direto pela subclasse.

**Exemplo de Acesso a `balance` (saldo) ao fazer um empréstimo:**
Se na `ContaEmpresarial` quiséssemos adicionar uma taxa ao realizar um empréstimo diretamente no saldo:

```java
// Na classe ContaEmpresarial
public void realizarEmprestimoComTaxa(double quantia) {
    if (quantia <= limiteEmprestimo) {
        // Supondo que 'saldo' seja 'protected' na classe Conta
        // e que a taxa de empréstimo seja de 10.0
        saldo += quantia - 10.0; // Acesso direto ao saldo herdado
    }
}
```
**Atenção:** Embora o acesso direto a campos `protected` seja possível, geralmente é uma prática melhor encapsular o acesso através de métodos `public` ou `protected` na superclasse, se uma lógica mais complexa for necessária para alterar o estado.

## Upcasting e Downcasting 🔄

São mecanismos de conversão entre tipos de classes em uma hierarquia de herança.

### Upcasting

* É a conversão de um objeto da subclasse para um objeto da superclasse.
* É sempre seguro e implícito (não requer um *cast* explícito).
* **Uso comum**: Polimorfismo, onde você pode tratar objetos de subclasses de forma genérica através de uma referência da superclasse.

```java
// Upcasting
Conta conta1 = new ContaEmpresarial(1002, "Maria", 0.0, 500.0);
Conta conta2 = new ContaPoupanca(1003, "Bob", 0.0, 0.01); // Supondo que ContaPoupanca exista
```
Aqui, `conta1` é do tipo `Conta`, mas aponta para um objeto `ContaEmpresarial`. Você só pode chamar métodos definidos em `Conta` através de `conta1`, a menos que use downcasting.

### Downcasting

* É a conversão de um objeto da superclasse (que na verdade aponta para um objeto de uma subclasse) de volta para o tipo da subclasse.
* Requer um *cast* explícito e pode gerar uma `ClassCastException` em tempo de execução se o objeto não for realmente uma instância da subclasse para a qual está sendo convertido.
* **Palavra-chave `instanceof`**: Usada para verificar o tipo real do objeto antes de tentar o downcasting, evitando a `ClassCastException`.
* **Uso comum**: Quando você precisa acessar membros específicos da subclasse que não existem na superclasse.

```java
Conta contaDoTipoEmpresarial = new ContaEmpresarial(1003, "Bob", 0.0, 200.0);
Conta contaDoTipoPoupanca = new ContaPoupanca(1004, "Anna", 0.0, 0.01);

// Downcasting
// Para acessar o método realizarEmprestimo, específico de ContaEmpresarial
if (contaDoTipoEmpresarial instanceof ContaEmpresarial) {
    ContaEmpresarial contaEspecificaEmpresarial = (ContaEmpresarial) contaDoTipoEmpresarial;
    contaEspecificaEmpresarial.realizarEmprestimo(100.0);
    System.out.println("Empréstimo realizado!");
} else {
    System.out.println("O objeto não é uma ContaEmpresarial.");
}

// Tentativa de downcasting incorreto (para ilustrar o uso de instanceof)
if (contaDoTipoPoupanca instanceof ContaEmpresarial) {
    ContaEmpresarial contaErrada = (ContaEmpresarial) contaDoTipoPoupanca; // Isso não ocorreria devido ao 'if'
    // Se o 'if' não estivesse aqui, uma ClassCastException ocorreria
}

// Downcasting correto para ContaPoupanca
if (contaDoTipoPoupanca instanceof ContaPoupanca) {
    ContaPoupanca contaEspecificaPoupanca = (ContaPoupanca) contaDoTipoPoupanca;
    contaEspecificaPoupanca.atualizarSaldo(); // Supondo um método atualizarSaldo()
    System.out.println("Saldo da poupança atualizado!");
}
```

## Sobreposição, Palavra `super` e Anotação `@Override` 📝

### Sobreposição (Sobrescrita)

* É a capacidade de uma subclasse fornecer uma implementação específica para um método que já é definido em sua superclasse.
* O método na subclasse deve ter a mesma assinatura (nome, tipo de retorno e parâmetros) do método na superclasse.
* **Anotação `@Override`**:
    * É fortemente recomendável usar `@Override` antes de um método sobrescrito.
    * Facilita a leitura e compreensão do código, indicando explicitamente que o método está sobrescrevendo um método da superclasse.
    * Ajuda o compilador a verificar se a sobrescrita está correta (mesma assinatura). É uma boa prática.

**Exemplo: Sobrescrevendo o método `sacar`**

Suponha que a `Conta` comum tenha uma taxa de saque de R$ 5.00, mas a `ContaPoupanca` não cobra essa taxa.

**Classe `Conta`:**
```java
public class Conta {
    // ... outros atributos e métodos ...
    protected double saldo;

    public void sacar(double quantia) {
        saldo -= quantia + 5.0; // Taxa de 5.0 para saque na conta comum
    }
}
```

**Classe `ContaPoupanca`:**
```java
public class ContaPoupanca extends Conta {
    // ... outros atributos e métodos ...

    @Override
    public void sacar(double quantia) {
        saldo -= quantia; // Sem taxa de saque para ContaPoupanca
    }
}
```

### Palavra-chave `super`

A palavra-chave `super` é usada para se referir a membros da superclasse.
* **Acessar métodos da superclasse**: `super.metodoDaSuperclasse()`.
* **Acessar atributos da superclasse**: `super.atributoDaSuperclasse` (geralmente menos comum se o atributo for `protected`, e impossível se for `private`).
* **Chamar construtores da superclasse**: `super(parametros)` deve ser a primeira instrução em um construtor da subclasse.

**Exemplo: Usando `super` no método `sacar`**

Suponha que na `ContaEmpresarial`, a regra para saque seja realizar o saque normalmente (como na superclasse `Conta`, que já inclui a taxa de R$ 5.00), e depois descontar uma taxa adicional de R$ 2.00.

```java
public class ContaEmpresarial extends Conta {
    // ... outros atributos e métodos ...

    @Override
    public void sacar(double quantia) {
        super.sacar(quantia); // Chama o método sacar da classe Conta (que já desconta 5.0)
        saldo -= 2.0;         // Desconta a taxa adicional de 2.0
    }
}
```

### Usando `super` em Construtores

Quando uma subclasse é instanciada, o construtor da superclasse também precisa ser chamado. Se você não chamar explicitamente `super()` no construtor da subclasse, o Java tentará chamar o construtor padrão (sem argumentos) da superclasse. Se a superclasse não tiver um construtor padrão, ou se você precisar chamar um construtor específico da superclasse, você deve usar `super(parametros)`.

**Classe `Conta`:**
```java
public class Conta {
    private Integer numero;
    private String titular;
    protected Double saldo;

    public Conta(Integer numero, String titular, Double saldo) {
        this.numero = numero;
        this.titular = titular;
        this.saldo = saldo;
    }
    // ...
}
```

**Classe `ContaEmpresarial`:**
```java
public class ContaEmpresarial extends Conta {
    private double limiteEmprestimo;

    public ContaEmpresarial(Integer numero, String titular, Double saldo, double limiteEmprestimo) {
        super(numero, titular, saldo); // Chama o construtor de Conta
        this.limiteEmprestimo = limiteEmprestimo;
    }
    // ...
}
```

## Classes e Métodos `final` 🔒

A palavra-chave `final` pode ser usada com classes, métodos e variáveis, cada um com um significado diferente.

### Classe `final`

* **Evita que a classe seja herdada**: Uma classe declarada como `final` não pode ter subclasses.
    ```java
    public final class MinhaClasseFinal {
        // ...
    }

    // class OutraClasse extends MinhaClasseFinal {} // Erro de compilação!
    ```
* **Exemplo**: Se você quisesse garantir que `ContaPoupanca` não pudesse ser estendida por outras classes:
    ```java
    public final class ContaPoupanca extends Conta {
        // ...
    }
    ```

### Método `final`

* **Evita que o método seja sobrescrito**: Um método declarado como `final` em uma superclasse não pode ser sobrescrito em nenhuma subclasse.
    ```java
    public class ClasseBase {
        public final void meuMetodoFinal() {
            System.out.println("Este método não pode ser sobrescrito.");
        }
    }

    public class SubClasse extends ClasseBase {
        // @Override
        // public void meuMetodoFinal() {} // Erro de compilação!
    }
    ```
* **Exemplo**: Se você não quisesse que o método `sacar` da `ContaPoupanca` fosse modificado por futuras subclasses de `ContaPoupanca`:
    ```java
    public class ContaPoupanca extends Conta {
        // ...
        @Override
        public final void sacar(double quantia) { // Agora este método não pode ser sobrescrito
            saldo -= quantia;
        }
    }
    ```

### Por que usar `final`?

* **Segurança**: Garante que o comportamento de uma classe ou método não seja alterado por subclasses, o que pode ser crucial para manter a consistência e integridade de certas lógicas de negócio. Geralmente, convém acrescentar `final` em métodos sobrepostos se não há intenção de permitir futuras sobreposições, pois sobreposições múltiplas podem ser uma porta de entrada para inconsistências.
* **Performance**: Em alguns casos, o compilador/JVM pode fazer otimizações em chamadas a métodos `final` (como *inlining*), pois sabe que a implementação não mudará. Atributos de tipo de uma classe `final` também podem ser analisados de forma mais rápida em tempo de execução. O exemplo clássico é a classe `String` em Java, que é `final`.

## Introdução ao Polimorfismo 🎭

Polimorfismo é um dos pilares da Programação Orientada a Objetos, junto com encapsulamento e herança. A palavra "polimorfismo" significa "muitas formas".

Em POO, polimorfismo é o recurso que permite que variáveis de um mesmo tipo mais genérico (superclasse) possam apontar para objetos de tipos específicos diferentes (subclasses), e assim, o comportamento do método chamado através dessa variável genérica dependerá do tipo real do objeto para o qual ela aponta.

**Exemplo Básico:**

Considerando as classes `Conta` e `ContaPoupanca` (onde `ContaPoupanca` sobrescreve o método `sacar`):

```java
Conta x = new Conta(1020, "Alex", 1000.0);
Conta y = new ContaPoupanca(1023, "Maria", 1000.0, 0.01); // Upcasting implícito

x.sacar(50.0); // Chama o sacar() de Conta (com taxa de 5.0)
               // Saldo de Alex: 1000 - 50 - 5 = 945

y.sacar(50.0); // Chama o sacar() de ContaPoupanca (sem taxa)
               // Saldo de Maria: 1000 - 50 = 950
```
Mesmo ambas as variáveis `x` e `y` sendo do tipo `Conta`, a chamada ao método `sacar()` executa implementações diferentes, dependendo do tipo real do objeto (`Conta` ou `ContaPoupanca`).

### Entendendo o Polimorfismo em Detalhes

* **Ligação Tardia (Late Binding)**: A associação do tipo específico com o tipo genérico (upcasting) e a decisão de qual método específico da subclasse será executado são feitas em tempo de execução.
* **Visão do Compilador**: O compilador verifica se o método chamado existe na classe de referência (a superclasse, no caso de `x` e `y` serem do tipo `Conta`). Ele não sabe, em tempo de compilação, qual implementação específica do método (`Conta.sacar()` ou `ContaPoupanca.sacar()`) será executada. Ele só sabe que ambas são variáveis do tipo `Conta` e que a classe `Conta` possui um método `sacar()`.

**Representação em Memória (Simplificada):**

* **Stack (Pilha)**: Armazena as variáveis de referência (`x`, `y`).
* **Heap (Monte)**: Armazena os objetos reais.
    * `x` (na Stack) aponta para um objeto `Conta` (no Heap).
    * `y` (na Stack) aponta para um objeto `ContaPoupanca` (no Heap).

Quando `y.sacar()` é chamado, a JVM verifica o tipo real do objeto para o qual `y` aponta (que é `ContaPoupanca`) e executa o método `sacar()` dessa classe.

## Exercício Resolvido: Pagamento de Funcionários 👨‍💼👩‍💼

**Problema:**
Uma empresa possui funcionários próprios (`Funcionario`) e terceirizados (`FuncionarioTerceirizado`).
* Para cada funcionário: nome, horas trabalhadas, valor por hora.
* Funcionários terceirizados têm uma despesa adicional (`despesaAdicional`).
* Pagamento: `valorPorHora * horasTrabalhadas`.
* Funcionários terceirizados recebem um bônus de 110% da sua `despesaAdicional`.
Fazer um programa para ler os dados de N funcionários, armazená-los em uma lista e, ao final, mostrar nome e pagamento de cada um.

**Estrutura das Classes (UML Simplificado):**

```
+---------------------+      +----------------------------+
| Funcionario         |----->| FuncionarioTerceirizado    |
+---------------------+      +----------------------------+
| - nome: String      |      | - despesaAdicional: Double |
| - horas: Integer    |      +----------------------------+
| - valorPorHora: Double|    | + calcularPagamento(): Double|
+---------------------+      +----------------------------+
| + calcularPagamento(): Double|
+---------------------+
```
(`FuncionarioTerceirizado` herda de `Funcionario`)

**Exemplo de Código (Conceitual):**

**Classe `Funcionario.java`**
```java
package entidades;

public class Funcionario {
    private String nome;
    private Integer horas;
    private Double valorPorHora;

    public Funcionario(String nome, Integer horas, Double valorPorHora) {
        this.nome = nome;
        this.horas = horas;
        this.valorPorHora = valorPorHora;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    // Outros getters e setters...

    public Double calcularPagamento() {
        return horas * valorPorHora;
    }
}
```

**Classe `FuncionarioTerceirizado.java`**
```java
package entidades;

public class FuncionarioTerceirizado extends Funcionario {
    private Double despesaAdicional;

    public FuncionarioTerceirizado(String nome, Integer horas, Double valorPorHora, Double despesaAdicional) {
        super(nome, horas, valorPorHora);
        this.despesaAdicional = despesaAdicional;
    }

    public Double getDespesaAdicional() {
        return despesaAdicional;
    }

    public void setDespesaAdicional(Double despesaAdicional) {
        this.despesaAdicional = despesaAdicional;
    }

    @Override
    public Double calcularPagamento() {
        // super.calcularPagamento() retorna (horas * valorPorHora)
        return super.calcularPagamento() + (despesaAdicional * 1.10);
    }
}
```

**Classe Principal `Programa.java`**
```java
package aplicacao;

import entidades.Funcionario;
import entidades.FuncionarioTerceirizado;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.Scanner;

public class Programa {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);
        List<Funcionario> listaFuncionarios = new ArrayList<>();

        System.out.print("Digite o número de funcionários: ");
        int n = sc.nextInt();

        for (int i = 1; i <= n; i++) {
            System.out.println("Dados do funcionário #" + i + ":");
            System.out.print("É terceirizado (s/n)? ");
            char terceirizado = sc.next().charAt(0);
            sc.nextLine(); // Consumir quebra de linha
            System.out.print("Nome: ");
            String nome = sc.nextLine();
            System.out.print("Horas: ");
            int horas = sc.nextInt();
            System.out.print("Valor por hora: ");
            double valorPorHora = sc.nextDouble();

            if (terceirizado == 's' || terceirizado == 'S') {
                System.out.print("Despesa adicional: ");
                double despesaAdicional = sc.nextDouble();
                listaFuncionarios.add(new FuncionarioTerceirizado(nome, horas, valorPorHora, despesaAdicional));
            } else {
                listaFuncionarios.add(new Funcionario(nome, horas, valorPorHora));
            }
        }

        System.out.println("
PAGAMENTOS:");
        for (Funcionario func : listaFuncionarios) {
            System.out.println(func.getNome() + " - R$ " + String.format("%.2f", func.calcularPagamento()));
        }

        sc.close();
    }
}
```
**Como executar (VS Code / IntelliJ IDEA):**
1.  Certifique-se de ter o JDK (Java Development Kit) instalado.
2.  Crie um projeto Java.
3.  Crie as pastas de pacotes (`entidades`, `aplicacao`) dentro do diretório `src` do seu projeto.
4.  Coloque as classes `Funcionario.java` e `FuncionarioTerceirizado.java` no pacote `entidades`.
5.  Coloque a classe `Programa.java` no pacote `aplicacao`.
6.  Abra o arquivo `Programa.java` e clique com o botão direito do mouse no editor. Selecione "Run" ou "Run 'Programa.main()'".

## Exercício de Fixação: Etiqueta de Preços de Produtos 🛍️

**Problema:**
Ler dados de N produtos. Mostrar a etiqueta de preço de cada produto.
* Todo produto tem nome e preço.
* Produtos importados (`ProdutoImportado`) têm taxa de alfândega (`taxaAlfandega`).
* Produtos usados (`ProdutoUsado`) têm data de fabricação (`dataFabricacao`).
* Estes dados específicos devem constar na etiqueta.
* Para produtos importados, a taxa de alfândega é somada ao preço final.

**Estrutura das Classes (UML Simplificado):**
```
+---------------------+      +---------------------------+
| Produto             |<-----| ProdutoImportado          |
+---------------------+      +---------------------------+
| - nome: String      |      | - taxaAlfandega: Double   |
| - preco: Double     |      +---------------------------+
+---------------------+      | + etiquetaPreco(): String |
| + etiquetaPreco(): String| | + precoTotal(): Double    |
+---------------------+      +---------------------------+
        ^
        |
        |                +---------------------------+
        +--------------- | ProdutoUsado              |
                         +---------------------------+
                         | - dataFabricacao: Date    |
                         +---------------------------+
                         | + etiquetaPreco(): String |
                         +---------------------------+
```

**Exemplo de Código (Conceitual):**

**Classe `Produto.java`**
```java
package entidades;

public class Produto {
    private String nome;
    private Double preco;

    public Produto(String nome, Double preco) {
        this.nome = nome;
        this.preco = preco;
    }

    public String getNome() { return nome; }
    public Double getPreco() { return preco; }
    // Setters...

    public String etiquetaPreco() {
        return nome + " R$ " + String.format("%.2f", preco);
    }
}
```

**Classe `ProdutoImportado.java`**
```java
package entidades;

public class ProdutoImportado extends Produto {
    private Double taxaAlfandega;

    public ProdutoImportado(String nome, Double preco, Double taxaAlfandega) {
        super(nome, preco);
        this.taxaAlfandega = taxaAlfandega;
    }

    public Double getTaxaAlfandega() { return taxaAlfandega; }
    // Setter...

    public Double precoTotal() {
        return getPreco() + taxaAlfandega;
    }

    @Override
    public String etiquetaPreco() {
        return getNome() + " R$ " + String.format("%.2f", precoTotal())
               + " (Taxa de Alfândega: R$ " + String.format("%.2f", taxaAlfandega) + ")";
    }
}
```

**Classe `ProdutoUsado.java`**
```java
package entidades;

import java.text.SimpleDateFormat;
import java.util.Date;

public class ProdutoUsado extends Produto {
    private static final SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
    private Date dataFabricacao;

    public ProdutoUsado(String nome, Double preco, Date dataFabricacao) {
        super(nome, preco);
        this.dataFabricacao = dataFabricacao;
    }

    public Date getDataFabricacao() { return dataFabricacao; }
    // Setter...

    @Override
    public String etiquetaPreco() {
        return getNome() + " (usado) R$ " + String.format("%.2f", getPreco())
               + " (Data de fabricação: " + sdf.format(dataFabricacao) + ")";
    }
}
```

**Classe Principal `Programa.java`**
(Semelhante ao exercício anterior, com leitura de dados e instanciação polimórfica)
```java
package aplicacao;

import entidades.Produto;
import entidades.ProdutoImportado;
import entidades.ProdutoUsado;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import java.util.Scanner;

public class Programa {
    public static void main(String[] args) throws ParseException { // Adicionado throws para SimpleDateFormat
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        List<Produto> listaProdutos = new ArrayList<>();

        System.out.print("Digite o número de produtos: ");
        int n = sc.nextInt();

        for (int i = 1; i <= n; i++) {
            System.out.println("Dados do produto #" + i + ":");
            System.out.print("Comum, usado ou importado (c/u/i)? ");
            char tipo = sc.next().charAt(0);
            sc.nextLine(); // Consumir quebra de linha
            System.out.print("Nome: ");
            String nome = sc.nextLine();
            System.out.print("Preço: ");
            double preco = sc.nextDouble();

            if (tipo == 'i' || tipo == 'I') {
                System.out.print("Taxa de alfândega: ");
                double taxaAlfandega = sc.nextDouble();
                listaProdutos.add(new ProdutoImportado(nome, preco, taxaAlfandega));
            } else if (tipo == 'u' || tipo == 'U') {
                System.out.print("Data de fabricação (DD/MM/AAAA): ");
                Date dataFabricacao = sdf.parse(sc.next());
                listaProdutos.add(new ProdutoUsado(nome, preco, dataFabricacao));
            } else {
                listaProdutos.add(new Produto(nome, preco));
            }
        }

        System.out.println("
ETIQUETAS DE PREÇO:");
        for (Produto prod : listaProdutos) {
            System.out.println(prod.etiquetaPreco());
        }

        sc.close();
    }
}
```

## Classes Abstratas 🏛️

* **Definição**: São classes que não podem ser instanciadas diretamente. Elas servem como modelos (abstrações) para suas subclasses.
* **Herança Total**: São uma forma de garantir a herança total: somente subclasses não abstratas podem ser instanciadas, mas nunca a superclasse abstrata em si.
* **Palavra-chave `abstract`**: Para declarar uma classe como abstrata, use a palavra-chave `abstract`.
    ```java
    public abstract class MinhaClasseAbstrata {
        // ... pode conter métodos abstratos e concretos
    }
    ```
* **Notação UML**: O nome da classe abstrata é geralmente escrito em *itálico*.

**Exemplo: Conta Bancária Abstrata**

Suponha que em um banco, apenas contas poupança e contas para empresas são permitidas. Não deve existir uma "conta comum" genérica que possa ser instanciada.

Para garantir que instâncias de `Conta` não possam ser criadas diretamente, declaramos a classe `Conta` como `abstract`:
```java
// Em Conta.java
public abstract class Conta {
    private Integer numero;
    private String titular;
    protected Double saldo;

    public Conta(Integer numero, String titular, Double saldo) {
        this.numero = numero;
        this.titular = titular;
        this.saldo = saldo;
    }

    public void sacar(Double quantia) {
        saldo -= quantia;
    }

    public void depositar(Double quantia) {
        saldo += quantia;
    }

    public Double getSaldo() {
        return saldo;
    }
    // Outros getters e setters
}
```
Agora, você não pode fazer `new Conta(...)`. Você só pode instanciar subclasses concretas como `ContaPoupanca` ou `ContaEmpresarial`.

### Por que usar Classes Abstratas?

* **Reuso**: Permitem que você defina atributos e métodos comuns que serão herdados por múltiplas subclasses, evitando duplicação de código.
* **Polimorfismo**: A superclasse abstrata serve como um tipo genérico para tratar de forma uniforme todos os tipos de contas (ou qualquer outra entidade modelada). Por exemplo, você pode ter uma `List<Conta>` que armazena objetos `ContaPoupanca` e `ContaEmpresarial`.
    * **Exemplo de Polimorfismo com Classe Abstrata**:
        * Totalizar o saldo de todas as contas em uma lista.
        * Depositar R$ 10,00 em todas as contas.

    ```java
    List<Conta> listaDeContas = new ArrayList<>();
    listaDeContas.add(new ContaPoupanca(101, "Ana", 1000.0, 0.01));
    listaDeContas.add(new ContaEmpresarial(102, "Empresa X", 5000.0, 10000.0));

    double saldoTotal = 0.0;
    for (Conta c : listaDeContas) {
        saldoTotal += c.getSaldo();
        c.depositar(10.0); // Polimorfismo em ação
    }
    System.out.println("Saldo total de todas as contas: " + saldoTotal);
    ```

## Métodos Abstratos 🧩

* **Definição**: São métodos declarados em uma classe abstrata que não possuem implementação (corpo). Eles apenas definem uma assinatura.
* **Obrigatoriedade de Implementação**: As subclasses concretas (não abstratas) são obrigadas a fornecer uma implementação para todos os métodos abstratos herdados da superclasse.
* **Quando usar**: Métodos precisam ser abstratos quando a classe superclasse é genérica demais para fornecer uma implementação significativa, e cada subclasse precisa definir seu próprio comportamento específico para aquele método.
* **Regra**: Se uma classe contém pelo menos um método abstrato, a classe inteira deve ser declarada como `abstract`.
* **Palavra-chave `abstract`**: Usada para declarar um método como abstrato.
    ```java
    public abstract class MinhaClasseAbstrata {
        public abstract void meuMetodoAbstrato(); // Sem corpo, termina com ;
    }

    public class MinhaSubclasseConcreta extends MinhaClasseAbstrata {
        @Override
        public void meuMetodoAbstrato() {
            // Implementação obrigatória aqui
            System.out.println("Implementação do método abstrato.");
        }
    }
    ```
* **Notação UML**: Nomes de métodos abstratos são geralmente escritos em *itálico*.

### Exemplo Prático: Cálculo de Áreas de Figuras Geométricas

Fazer um programa para ler os dados de N figuras (retângulo ou círculo), e depois mostrar as áreas destas figuras.

**Estrutura das Classes:**

* `Forma` (Shape): Classe abstrata.
    * Atributo: `cor` (enum `Cor`).
    * Método abstrato: `calcularArea() : Double`.
* `Retangulo` (Rectangle): Subclasse de `Forma`.
    * Atributos: `largura`, `altura`.
    * Implementa `calcularArea()`.
* `Circulo` (Circle): Subclasse de `Forma`.
    * Atributo: `raio`.
    * Implementa `calcularArea()`.
* `Cor` (Color): Enum com valores `PRETO`, `AZUL`, `VERMELHO`.

**Classe `Cor.java` (Enum)**
```java
package entidades.enums;

public enum Cor {
    PRETO,
    AZUL,
    VERMELHO;
}
```

**Classe `Forma.java` (Abstrata)**
```java
package entidades;

import entidades.enums.Cor;

public abstract class Forma {
    private Cor cor;

    public Forma(Cor cor) {
        this.cor = cor;
    }

    public Cor getCor() {
        return cor;
    }

    public void setCor(Cor cor) {
        this.cor = cor;
    }

    public abstract Double calcularArea(); // Método abstrato
}
```

**Classe `Retangulo.java`**
```java
package entidades;

import entidades.enums.Cor;

public class Retangulo extends Forma {
    private Double largura;
    private Double altura;

    public Retangulo(Cor cor, Double largura, Double altura) {
        super(cor);
        this.largura = largura;
        this.altura = altura;
    }

    // Getters e Setters para largura e altura

    @Override
    public Double calcularArea() {
        return largura * altura;
    }
}
```

**Classe `Circulo.java`**
```java
package entidades;

import entidades.enums.Cor;

public class Circulo extends Forma {
    private Double raio;

    public Circulo(Cor cor, Double raio) {
        super(cor);
        this.raio = raio;
    }

    // Getter e Setter para raio

    @Override
    public Double calcularArea() {
        return Math.PI * raio * raio;
    }
}
```

**Classe Principal `Programa.java`**
```java
package aplicacao;

import entidades.Circulo;
import entidades.Forma;
import entidades.Retangulo;
import entidades.enums.Cor;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.Scanner;

public class Programa {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);
        List<Forma> listaFormas = new ArrayList<>();

        System.out.print("Digite o número de formas: ");
        int n = sc.nextInt();

        for (int i = 1; i <= n; i++) {
            System.out.println("Dados da forma #" + i + ":");
            System.out.print("Retângulo ou Círculo (r/c)? ");
            char tipoForma = sc.next().charAt(0);
            System.out.print("Cor (PRETO/AZUL/VERMELHO): ");
            // Leitura da cor e conversão para o enum Cor
            Cor cor = Cor.valueOf(sc.next().toUpperCase());

            if (tipoForma == 'r' || tipoForma == 'R') {
                System.out.print("Largura: ");
                double largura = sc.nextDouble();
                System.out.print("Altura: ");
                double altura = sc.nextDouble();
                listaFormas.add(new Retangulo(cor, largura, altura));
            } else if (tipoForma == 'c' || tipoForma == 'C') {
                System.out.print("Raio: ");
                double raio = sc.nextDouble();
                listaFormas.add(new Circulo(cor, raio));
            }
        }

        System.out.println("
ÁREAS DAS FORMAS:");
        for (Forma forma : listaFormas) {
            System.out.println(String.format("%.2f", forma.calcularArea()));
        }

        sc.close();
    }
}
```
**Entrada de Exemplo:**
```
Digite o número de formas: 2
Dados da forma #1:
Retângulo ou Círculo (r/c)? r
Cor (PRETO/AZUL/VERMELHO): PRETO
Largura: 4.0
Altura: 5.0
Dados da forma #2:
Retângulo ou Círculo (r/c)? c
Cor (PRETO/AZUL/VERMELHO): VERMELHO
Raio: 3.0
```
**Saída Esperada:**
```
ÁREAS DAS FORMAS:
20.00
28.27
```

## Exercício de Fixação: Cálculo de Impostos de Contribuintes 💸

**Problema:**
Ler dados de N contribuintes (pessoa física ou jurídica). Mostrar o valor do imposto pago por cada um e o total de imposto arrecadado.
* **Pessoa Física (`PessoaFisica`)**:
    * Dados: nome, renda anual, gastos com saúde.
    * Imposto:
        * Renda < R$ 20000.00: 15% da renda.
        * Renda >= R$ 20000.00: 25% da renda.
        * Se teve gastos com saúde, 50% desses gastos são abatidos do imposto.
* **Pessoa Jurídica (`PessoaJuridica`)**:
    * Dados: nome, renda anual, número de funcionários.
    * Imposto:
        * <= 10 funcionários: 16% da renda.
        * > 10 funcionários: 14% da renda.

**Estrutura das Classes (UML Simplificado):**
```
+-----------------------+      +---------------------------+
| Contribuinte (abstrata)|----->| PessoaFisica             |
+-----------------------+      +---------------------------+
| - nome: String        |      | - gastosSaude: Double     |
| - rendaAnual: Double  |      +---------------------------+
+-----------------------+      | + calcularImposto(): Double |
| + calcularImposto(): Double (abstrato)|
+-----------------------+      +---------------------------+
        ^
        |
        |                      +---------------------------+
        +--------------------- | PessoaJuridica           |
                               +---------------------------+
                               | - numeroFuncionarios: int |
                               +---------------------------+
                               | + calcularImposto(): Double |
                               +---------------------------+
```

**Classe `Contribuinte.java` (Abstrata)**
```java
package entidades;

public abstract class Contribuinte {
    private String nome;
    private Double rendaAnual;

    public Contribuinte(String nome, Double rendaAnual) {
        this.nome = nome;
        this.rendaAnual = rendaAnual;
    }

    public String getNome() {
        return nome;
    }

    public Double getRendaAnual() {
        return rendaAnual;
    }

    // Setters...

    public abstract Double calcularImposto();
}
```

**Classe `PessoaFisica.java`**
```java
package entidades;

public class PessoaFisica extends Contribuinte {
    private Double gastosSaude;

    public PessoaFisica(String nome, Double rendaAnual, Double gastosSaude) {
        super(nome, rendaAnual);
        this.gastosSaude = gastosSaude;
    }

    public Double getGastosSaude() {
        return gastosSaude;
    }

    // Setter...

    @Override
    public Double calcularImposto() {
        double impostoBase;
        if (getRendaAnual() < 20000.00) {
            impostoBase = getRendaAnual() * 0.15;
        } else {
            impostoBase = getRendaAnual() * 0.25;
        }

        if (gastosSaude > 0) {
            impostoBase -= gastosSaude * 0.50;
        }
        return Math.max(impostoBase, 0.0); // Imposto não pode ser negativo
    }
}
```

**Classe `PessoaJuridica.java`**
```java
package entidades;

public class PessoaJuridica extends Contribuinte {
    private Integer numeroFuncionarios;

    public PessoaJuridica(String nome, Double rendaAnual, Integer numeroFuncionarios) {
        super(nome, rendaAnual);
        this.numeroFuncionarios = numeroFuncionarios;
    }

    public Integer getNumeroFuncionarios() {
        return numeroFuncionarios;
    }

    // Setter...

    @Override
    public Double calcularImposto() {
        if (numeroFuncionarios > 10) {
            return getRendaAnual() * 0.14;
        } else {
            return getRendaAnual() * 0.16;
        }
    }
}
```

**Classe Principal `Programa.java`**
```java
package aplicacao;

import entidades.Contribuinte;
import entidades.PessoaFisica;
import entidades.PessoaJuridica;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.Scanner;

public class Programa {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);
        List<Contribuinte> listaContribuintes = new ArrayList<>();

        System.out.print("Digite o número de contribuintes: ");
        int n = sc.nextInt();

        for (int i = 1; i <= n; i++) {
            System.out.println("Dados do contribuinte #" + i + ":");
            System.out.print("Pessoa física ou jurídica (f/j)? ");
            char tipoContribuinte = sc.next().charAt(0);
            sc.nextLine(); // Consumir quebra de linha
            System.out.print("Nome: ");
            String nome = sc.nextLine();
            System.out.print("Renda anual: ");
            double rendaAnual = sc.nextDouble();

            if (tipoContribuinte == 'f' || tipoContribuinte == 'F') {
                System.out.print("Gastos com saúde: ");
                double gastosSaude = sc.nextDouble();
                listaContribuintes.add(new PessoaFisica(nome, rendaAnual, gastosSaude));
            } else if (tipoContribuinte == 'j' || tipoContribuinte == 'J') {
                System.out.print("Número de funcionários: ");
                int numFuncionarios = sc.nextInt();
                listaContribuintes.add(new PessoaJuridica(nome, rendaAnual, numFuncionarios));
            }
        }

        System.out.println("
IMPOSTOS PAGOS:");
        double totalImpostos = 0.0;
        for (Contribuinte contr : listaContribuintes) {
            double imposto = contr.calcularImposto();
            System.out.println(contr.getNome() + ": R$ " + String.format("%.2f", imposto));
            totalImpostos += imposto;
        }

        System.out.println("
TOTAL DE IMPOSTOS: R$ " + String.format("%.2f", totalImpostos));

        sc.close();
    }
}
```

**Entrada de Exemplo:**
```
Digite o número de contribuintes: 3
Dados do contribuinte #1:
Pessoa física ou jurídica (f/j)? f
Nome: Alex
Renda anual: 50000.00
Gastos com saúde: 2000.00
Dados do contribuinte #2:
Pessoa física ou jurídica (f/j)? j
Nome: SoftTech
Renda anual: 400000.00
Número de funcionários: 25
Dados do contribuinte #3:
Pessoa física ou jurídica (f/j)? f
Nome: Bob
Renda anual: 120000.00
Gastos com saúde: 1000.00
```

**Saída Esperada:**
```
IMPOSTOS PAGOS:
Alex: R$ 11500.00
SoftTech: R$ 56000.00
Bob: R$ 29500.00

TOTAL DE IMPOSTOS: R$ 97000.00
```

---
## 📚

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)

