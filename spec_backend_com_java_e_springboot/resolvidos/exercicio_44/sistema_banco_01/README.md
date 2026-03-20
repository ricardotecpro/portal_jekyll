---
layout: default
title: 📘 Exercício de Fixação (p.43)
---

# 📘 Exercício de Fixação (p.43)

## 💼 Contexto

Você foi contratado para desenvolver um sistema para um **banco**.
Para isso, você deve implementar um programa em **Java**, utilizando os conceitos de **orientação a objetos**.

O sistema deve gerenciar:

* Funcionários
* Setores
* Clientes
* Contas Bancárias

(continua nos slides p.43)
---
Estrutura básica em Java para o sistema proposto, com foco nos conceitos de **Orientação a Objetos (OO)**, como **encapsulamento**, **associação de classes** e uso de **regras de negócio** para promoção e alocação de funcionários.

---

### 📦 Estrutura de Classes

* `Setor`
* `Funcionario`
* `Cargo` (enum para melhor controle dos cargos)

---

### ✅ Classe `Cargo.java` (enum)

```java
public enum Cargo {
    OPERADOR_CAIXA,
    GERENTE_CONTA,
    GERENTE_AGENCIA;
}
```

---

### ✅ Classe `Setor.java`

```java
public class Setor {
    private String codigo;
    private String nome;
    private int qtdMaxFunc;
    private int qtdFunc;

    public Setor(String codigo, String nome, int qtdMaxFunc) {
        this.codigo = codigo;
        this.nome = nome;
        this.qtdMaxFunc = qtdMaxFunc;
        this.qtdFunc = 0;
    }

    public boolean temVaga() {
        return qtdFunc < qtdMaxFunc;
    }

    public void incrementaFunc() {
        if (temVaga()) {
            qtdFunc++;
        } else {
            System.out.println("Setor cheio. Não é possível adicionar mais funcionários.");
        }
    }

    public void decrementaFunc() {
        if (qtdFunc > 0) {
            qtdFunc--;
        }
    }

    // Getters e Setters
    public String getCodigo() { return codigo; }
    public void setCodigo(String codigo) { this.codigo = codigo; }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public int getQtdMaxFunc() { return qtdMaxFunc; }
    public void setQtdMaxFunc(int qtdMaxFunc) { this.qtdMaxFunc = qtdMaxFunc; }

    public int getQtdFunc() { return qtdFunc; }
}
```

---

### ✅ Classe `Funcionario.java`

```java
public class Funcionario {
    private String nome;
    private String cpf;
    private Cargo cargo;
    private Setor setor;
    private int experiencia; // em anos

    public Funcionario(String nome, String cpf, int experiencia) {
        this.nome = nome;
        this.cpf = cpf;
        this.experiencia = experiencia;
        this.cargo = Cargo.OPERADOR_CAIXA;
    }

    public void contratar(Setor setor) {
        if (setor.temVaga()) {
            this.setor = setor;
            setor.incrementaFunc();
            System.out.println(nome + " contratado(a) como " + cargo + " no setor " + setor.getNome());
        } else {
            System.out.println("Setor sem vagas para contratação.");
        }
    }

    public void promover() {
        switch (cargo) {
            case OPERADOR_CAIXA:
                if (experiencia >= 10) {
                    cargo = Cargo.GERENTE_AGENCIA;
                    System.out.println(nome + " promovido(a) a GERENTE_AGENCIA");
                } else if (experiencia >= 2) {
                    cargo = Cargo.GERENTE_CONTA;
                    System.out.println(nome + " promovido(a) a GERENTE_CONTA");
                } else {
                    System.out.println("Experiência insuficiente para promoção.");
                }
                break;
            case GERENTE_CONTA:
                if (experiencia >= 10) {
                    cargo = Cargo.GERENTE_AGENCIA;
                    System.out.println(nome + " promovido(a) a GERENTE_AGENCIA");
                } else {
                    System.out.println("Experiência insuficiente para promoção.");
                }
                break;
            case GERENTE_AGENCIA:
                System.out.println("Cargo mais alto já atingido.");
                break;
        }
    }

    public void demitir() {
        if (this.setor != null) {
            setor.decrementaFunc();
            this.setor = null;
            System.out.println(nome + " foi demitido(a).");
        } else {
            System.out.println("Funcionário não está alocado a nenhum setor.");
        }
    }

    // Getters e Setters
    public String getNome() { return nome; }
    public String getCpf() { return cpf; }
    public Cargo getCargo() { return cargo; }
    public Setor getSetor() { return setor; }
    public int getExperiencia() { return experiencia; }

    public void setExperiencia(int experiencia) { this.experiencia = experiencia; }
}
```

---

### ✅ Exemplo de Uso (`Main.java`)

```java
public class Main {
    public static void main(String[] args) {
        Setor financeiro = new Setor("001", "Financeiro", 2);

        Funcionario joao = new Funcionario("João", "123.456.789-00", 3);
        joao.contratar(financeiro);
        joao.promover(); // Deve ser promovido para GERENTE_CONTA

        Funcionario maria = new Funcionario("Maria", "987.654.321-00", 11);
        maria.contratar(financeiro);
        maria.promover(); // Deve ser promovida para GERENTE_AGENCIA

        Funcionario jose = new Funcionario("José", "111.222.333-44", 1);
        jose.contratar(financeiro); // Sem vaga (limite é 2)

        joao.demitir(); // Libera uma vaga

        jose.contratar(financeiro); // Agora consegue ser contratado
    }
}
```

---

### 📌 

