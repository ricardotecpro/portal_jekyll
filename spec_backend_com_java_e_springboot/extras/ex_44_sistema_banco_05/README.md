---
layout: default
title: README
---


## Cenário p.50

1. Use o método de depósito para depositar valores em ambas as contas.  
2. Use o método de saque para retirar valores possíveis das contas.  
   - O método de saque também deve receber um número de conta para validar com o próprio número da conta (passar essa informação através do objeto cliente).  
3. Use o método de extrato para verificar o saldo das contas.  
   - O método de extrato deve receber um número de conta para validar com o próprio número da conta (passar essa informação através do objeto cliente).  
4. Tente realizar saques de valores não permitidos.
```

---

## 🎯 Objetivos desta etapa:

1. O **saque** e o **extrato** devem:

    * Receber o **número da conta**.
    * Validar se esse número é da **conta do cliente**.
2. Criar **um cenário completo**:

    * Depositar valores nas contas.
    * Realizar saques válidos e inválidos.
    * Mostrar extratos.
3. Testar **valores inválidos** (como saque não múltiplo de 15 ou maior que o saldo).

---

## ✅ Atualizações necessárias

### 🔹 1. Atualizar `ContaBancaria.java`

```java
public class ContaBancaria {
    private static int contadorContas = 1;

    private int numero;
    private Cliente titular;
    private double saldo;
    private int estado; // 0 = válido

    public ContaBancaria() {
        this.numero = contadorContas++;
        this.saldo = 0.0;
        this.estado = 0;
    }

    public void setTitular(Cliente titular) {
        this.titular = titular;
    }

    public int getNumero() { return numero; }

    public double getSaldo() { return saldo; }

    public Cliente getTitular() { return titular; }

    public void depositar(double valor, Cliente cliente, int numeroInformado) {
        if (numero != numeroInformado || !cliente.getCpf().equals(titular.getCpf())) {
            System.out.println("Depósito negado. Conta não pertence ao cliente.");
            return;
        }
        if (estado != 0) {
            System.out.println("Conta inválida.");
            return;
        }
        saldo += valor;
        System.out.printf("Depósito de R$%.2f na conta %d realizado com sucesso.
", valor, numero);
    }

    public void sacar(double valor, Cliente cliente, int numeroInformado) {
        if (numero != numeroInformado || !cliente.getCpf().equals(titular.getCpf())) {
            System.out.println("Saque negado. Conta não pertence ao cliente.");
            return;
        }
        if (estado != 0) {
            System.out.println("Conta inválida.");
            return;
        }
        if (valor % 15 != 0) {
            System.out.println("Valor deve ser múltiplo de 15.");
            return;
        }
        if (valor > saldo) {
            System.out.println("Saldo insuficiente.");
            return;
        }
        saldo -= valor;
        System.out.printf("Saque de R$%.2f da conta %d realizado com sucesso.
", valor, numero);
    }

    public void extrato(Cliente cliente, int numeroInformado) {
        if (numero != numeroInformado || !cliente.getCpf().equals(titular.getCpf())) {
            System.out.println("Extrato negado. Conta não pertence ao cliente.");
            return;
        }
        System.out.printf("Extrato da conta %d - Titular: %s
", numero, titular.getNome());
        System.out.printf("Saldo atual: R$%.2f
", saldo);
    }
}
```

---

### 🔹 2. Classe `Cliente.java` (sem alterações, mantemos o vínculo com a conta)

```java
import java.util.Scanner;

public class Cliente {
    private String nome;
    private String cpf;
    private ContaBancaria conta;

    public Cliente(Scanner sc, ContaBancaria conta) {
        System.out.print("Digite o nome do cliente: ");
        this.nome = sc.nextLine();
        System.out.print("Digite o CPF do cliente: ");
        this.cpf = sc.nextLine();
        this.conta = conta;
        conta.setTitular(this);
        System.out.println("Conta " + conta.getNumero() + " criada para " + nome + "
");
    }

    public String getNome() { return nome; }
    public String getCpf() { return cpf; }
    public ContaBancaria getConta() { return conta; }
}
```

---

### 🔹 3. Classe `Main.java` com cenário completo

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Criação das contas
        ContaBancaria conta1 = new ContaBancaria();
        ContaBancaria conta2 = new ContaBancaria();

        // Criação dos clientes
        Cliente cliente1 = new Cliente(sc, conta1);
        Cliente cliente2 = new Cliente(sc, conta2);

        // Depositar valores nas contas
        conta1.depositar(150.0, cliente1, conta1.getNumero());
        conta2.depositar(90.0, cliente2, conta2.getNumero());

        // Realizar saques válidos
        conta1.sacar(45.0, cliente1, conta1.getNumero()); // OK
        conta2.sacar(30.0, cliente2, conta2.getNumero()); // OK

        // Saques inválidos
        conta1.sacar(22.0, cliente1, conta1.getNumero()); // não múltiplo de 15
        conta2.sacar(500.0, cliente2, conta2.getNumero()); // saldo insuficiente
        conta1.sacar(30.0, cliente2, conta1.getNumero()); // cliente errado

        // Mostrar extratos
        conta1.extrato(cliente1, conta1.getNumero()); // OK
        conta2.extrato(cliente2, conta2.getNumero()); // OK

        // Tentativa de extrato por cliente errado
        conta1.extrato(cliente2, conta1.getNumero()); // deve negar

        sc.close();
    }
}
```

---

## ✅ Saída esperada (exemplo):

```
Digite o nome do cliente: João
Digite o CPF do cliente: 111.222.333-44
Conta 1 criada para João

Digite o nome do cliente: Maria
Digite o CPF do cliente: 222.333.444-55
Conta 2 criada para Maria

Depósito de R$150.00 na conta 1 realizado com sucesso.
Depósito de R$90.00 na conta 2 realizado com sucesso.
Saque de R$45.00 da conta 1 realizado com sucesso.
Saque de R$30.00 da conta 2 realizado com sucesso.
Valor deve ser múltiplo de 15.
Saldo insuficiente.
Saque negado. Conta não pertence ao cliente.
Extrato da conta 1 - Titular: João
Saldo atual: R$105.00
Extrato da conta 2 - Titular: Maria
Saldo atual: R$60.00
Extrato negado. Conta não pertence ao cliente.
```

---
### 📌 
