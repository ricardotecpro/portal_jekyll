---
layout: default
title: README
---


# EXERCÍCIO DE FIXAÇÃO p.68  
## Herança  

Considere um sistema de gerenciamento de funcionários de uma empresa.  
Cada funcionário possui:  
- **Nome**  
- **Número de identificação**  
- **Salário**  

Existem dois tipos de funcionários:  
- **Funcionários Assalariados**: Recebem um salário fixo mensal.  
- **Funcionários Horistas**: Recebem um valor por hora trabalhada.  

### Objetivo  
Implemente um programa em **Java** que modele essa situação utilizando **herança**.  

### Estrutura do Código  
- Crie uma **classe base** chamada `Funcionario`, que contenha os atributos comuns a todos os funcionários:  
  - `nome`  
  - `número de identificação`  
  - `salário`  

- Crie duas **classes derivadas**:  
  - `Assalariado`: Representa funcionários que recebem um salário fixo mensal e deve ter um método para calcular o salário mensal.  
  - `Horista`: Representa funcionários que recebem um valor por hora trabalhada e deve ter um método para calcular o salário com base nas horas trabalhadas.  
```

### 📦 Estrutura de Classes

```java
// Classe base Funcionario
public abstract class Funcionario {
    protected String nome;
    protected int id;
    protected double salario;

    public Funcionario(String nome, int id) {
        this.nome = nome;
        this.id = id;
    }

    public abstract double calcularSalario();

    public void exibirDados() {
        System.out.println("Nome: " + nome);
        System.out.println("ID: " + id);
        System.out.println("Salário: R$ " + calcularSalario());
    }
}
```

```java
// Classe derivada Assalariado
public class Assalariado extends Funcionario {
    public Assalariado(String nome, int id, double salarioMensal) {
        super(nome, id);
        this.salario = salarioMensal;
    }

    @Override
    public double calcularSalario() {
        return salario;
    }
}
```

```java
// Classe derivada Horista
public class Horista extends Funcionario {
    private double valorHora;
    private int horasTrabalhadas;

    public Horista(String nome, int id, double valorHora, int horasTrabalhadas) {
        super(nome, id);
        this.valorHora = valorHora;
        this.horasTrabalhadas = horasTrabalhadas;
    }

    @Override
    public double calcularSalario() {
        return valorHora * horasTrabalhadas;
    }
}
```

```java
// Classe principal para testar
public class Principal {
    public static void main(String[] args) {
        Funcionario f1 = new Assalariado("João Silva", 101, 3000.0);
        Funcionario f2 = new Horista("Maria Souza", 102, 50.0, 160);

        System.out.println("== Funcionário Assalariado ==");
        f1.exibirDados();

        System.out.println("
== Funcionário Horista ==");
        f2.exibirDados();
    }
}
```

---

### ✅ Explicação

* `Funcionario` é uma classe abstrata com o método abstrato `calcularSalario()`.
* `Assalariado` implementa esse método retornando o salário fixo.
* `Horista` calcula o salário com base nas horas trabalhadas e no valor por hora.
* A classe `Principal` instancia e testa os dois tipos de funcionários.



