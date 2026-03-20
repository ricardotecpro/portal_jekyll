---
layout: default
title: Herança e Java
---

# Herança e Java

📘 Conceitos:
Herança: mecanismo pelo qual uma classe (subclasse) herda atributos e métodos de outra (superclasse). Serve para reaproveitar código.

Polimorfismo: capacidade de um objeto se comportar de diferentes formas dependendo do contexto. Permite usar referências de forma genérica e alterar o comportamento com métodos sobrescritos (override).


## 📁 Estrutura do Projeto

```
src/
├── aplicacao/
│   └── Programa.java
└── entidades/
    ├── Conta.java
    ├── ContaEmpresa.java
    └── ContaPoupanca.java
```

---

## 📄 Classe `Conta.java` (Superclasse)

```java
package entidades;

public class Conta {
    private Integer numero;
    private String titular;
    protected Double saldo;

    public Conta(Integer numero, String titular, Double saldo) {
        this.numero = numero;
        this.titular = titular;
        this.saldo = saldo;
    }

    public void depositar(double valor) {
        saldo += valor;
    }

    public void sacar(double valor) {
        saldo -= valor + 5.0; // taxa padrão de saque
    }

    public Double getSaldo() {
        return saldo;
    }

    public String toString() {
        return numero + ", Titular: " + titular + ", Saldo: R$ " + String.format("%.2f", saldo);
    }
}
```

---

## 📄 Classe `ContaEmpresa.java` (Subclasse de `Conta`)

```java
package entidades;

public class ContaEmpresa extends Conta {
    private Double limiteEmprestimo;

    public ContaEmpresa(Integer numero, String titular, Double saldo, Double limiteEmprestimo) {
        super(numero, titular, saldo);
        this.limiteEmprestimo = limiteEmprestimo;
    }

    public void emprestar(double valor) {
        if (valor <= limiteEmprestimo) {
            saldo += valor;
        }
    }

    @Override
    public void sacar(double valor) {
        saldo -= valor + 2.0; // taxa reduzida para empresas
    }
}
```

---

## 📄 Classe `ContaPoupanca.java` (Subclasse de `Conta`)

```java
package entidades;

public class ContaPoupanca extends Conta {
    private Double taxaJuros;

    public ContaPoupanca(Integer numero, String titular, Double saldo, Double taxaJuros) {
        super(numero, titular, saldo);
        this.taxaJuros = taxaJuros;
    }

    public void atualizarSaldo() {
        saldo += saldo * taxaJuros;
    }

    @Override
    public void sacar(double valor) {
        saldo -= valor; // sem taxa na poupança
    }
}
```

---

## 📄 Classe `Programa.java` (Exemplo com Polimorfismo)

```java
package aplicacao;

import java.util.ArrayList;
import java.util.List;
import entidades.Conta;
import entidades.ContaEmpresa;
import entidades.ContaPoupanca;

public class Programa {
    public static void main(String[] args) {
        List<Conta> lista = new ArrayList<>();

        lista.add(new ContaPoupanca(1001, "Alex", 1000.0, 0.01));
        lista.add(new ContaEmpresa(1002, "Maria", 1000.0, 500.0));
        lista.add(new ContaPoupanca(1003, "Bob", 1000.0, 0.02));
        lista.add(new ContaEmpresa(1004, "Anna", 1000.0, 400.0));

        double soma = 0.0;
        for (Conta conta : lista) {
            soma += conta.getSaldo();
        }

        System.out.printf("Saldo total: R$ %.2f%n", soma);

        for (Conta conta : lista) {
            conta.sacar(100.0); // comportamento polimórfico
        }

        System.out.println("
Após saque:");
        for (Conta conta : lista) {
            System.out.println(conta);
        }
    }
}
```

---

## 🧪 Saída esperada

```
Saldo total: R$ 4000.00

Após saque:
1001, Titular: Alex, Saldo: R$ 900.00
1002, Titular: Maria, Saldo: R$ 898.00
1003, Titular: Bob, Saldo: R$ 900.00
1004, Titular: Anna, Saldo: R$ 898.00
```

---


## 🧠 1. **Como usar `super` para chamar o construtor da superclasse**

Quando uma **classe herda** de outra, o construtor da subclasse pode (e geralmente deve) chamar o construtor da superclasse para inicializar os atributos herdados.

### 📌 Exemplo:

```java
public ContaEmpresa(Integer numero, String titular, Double saldo, Double limiteEmprestimo) {
    super(numero, titular, saldo); // chama o construtor da classe Conta
    this.limiteEmprestimo = limiteEmprestimo;
}
```

* Aqui, a classe `ContaEmpresa` está chamando o construtor da classe `Conta` usando `super(...)`.
* Isso evita repetição de código e garante que os atributos herdados sejam inicializados corretamente.

---

## 🧠 2. **Como usar `@Override` para sobrescrever métodos**

A anotação `@Override` é usada para indicar que um método está sendo **reescrito (sobrescrito)** em uma subclasse. Isso significa que o comportamento será alterado em relação à implementação da superclasse.

### 📌 Exemplo:

```java
@Override
public void sacar(double valor) {
    saldo -= valor + 2.0; // taxa menor para empresas
}
```

* Este método sobrescreve o `sacar()` da superclasse `Conta`, onde a taxa padrão é `+5.0`.
* Aqui, a `ContaEmpresa` cobra uma taxa de `+2.0`.

> ⚠️ A anotação `@Override` não é obrigatória, mas é **recomendada**, pois o compilador verifica se realmente estamos sobrescrevendo um método existente.

---

## 🧠 3. **Como o polimorfismo permite tratar diferentes tipos com a mesma interface**

**Polimorfismo** permite que objetos de diferentes subclasses sejam tratados como se fossem do tipo da superclasse. Isso permite, por exemplo, usar uma lista de `Conta` para armazenar objetos de `Conta`, `ContaEmpresa`, ou `ContaPoupanca`.

### 📌 Exemplo:

```java
List<Conta> lista = new ArrayList<>();

lista.add(new ContaPoupanca(1001, "Alex", 1000.0, 0.01));
lista.add(new ContaEmpresa(1002, "Maria", 1000.0, 500.0));
```

* Mesmo que `ContaPoupanca` e `ContaEmpresa` sejam diferentes, ambas podem ser adicionadas à lista de `Conta`, pois **herdam** de `Conta`.
* Ao chamar `conta.sacar(100.0)` dentro de um loop, o Java escolhe **automaticamente** o método apropriado com base no **tipo real do objeto** (mesmo que a variável seja do tipo `Conta`).

---

## 🧠 4. **Diferença de comportamento no método `sacar()`**

Todas as classes possuem o método `sacar()`, mas com comportamentos diferentes:

| Classe          | Comportamento de `sacar(double valor)` |
| --------------- | -------------------------------------- |
| `Conta`         | Desconta `valor + 5.0`                 |
| `ContaEmpresa`  | Desconta `valor + 2.0`                 |
| `ContaPoupanca` | Desconta apenas o `valor` (sem taxa)   |

### 📌 Por quê?

Cada classe redefine (sobrescreve) o método de acordo com sua **regra de negócio**. O polimorfismo permite que, mesmo chamando `conta.sacar(...)`, cada tipo de conta aplique a sua própria lógica.

---



