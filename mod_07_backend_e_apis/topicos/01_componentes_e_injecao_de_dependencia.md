# Módulo Back-end: Componentes e Injeção de Dependência 🧩

Este material aborda os conceitos fundamentais de componentização de software e injeção de dependência, pilares para o desenvolvimento de sistemas modernos, flexíveis e de fácil manutenção.

## Sistema e Componentes 🏗️

Um sistema de software é, em sua essência, um conjunto de componentes que trabalham juntos para entregar uma funcionalidade. Para que o sistema seja robusto e escalável, esses componentes devem seguir dois princípios-chave:

  - **Coesão**: Cada componente deve ter uma responsabilidade clara e única. Por exemplo, um componente calcula impostos, outro gerencia o acesso a dados de usuários, e nada mais.
  - **Baixo Acoplamento**: Os componentes devem ser o mais independentes possível uns dos outros.

Adoar essa abordagem nos traz os seguintes objetivos e benefícios:

  - **Flexibilidade**: Sistemas flexíveis se adaptam mais facilmente a novas regras de negócio.
  - **Manutenção Facilitada**: É muito mais simples atualizar ou substituir um componente isolado do que modificar um sistema monolítico e fortemente acoplado.
  - **Reaproveitamento**: Componentes bem definidos, como um serviço de cálculo de frete, podem ser reutilizados em diferentes projetos.

## Exemplo Didático 🧑‍🏫

Vamos trabalhar com um problema prático para ilustrar esses conceitos.

**O Problema:** Criar um programa que leia os dados de um funcionário (nome e salário bruto). Em seguida, o programa deve calcular e exibir o salário líquido, aplicando os descontos de imposto e previdência.

**Regras de Negócio:**

  - Imposto: **20%** sobre o salário bruto.
  - Previdência: **10%** sobre o salário bruto.

**Exemplo com Novos Dados:**

  - **Nome**: João Silva
  - **Salário Bruto**: R$ 6000,00
  - **Cálculo**: `6000.00 - (6000.00 * 0.20) - (6000.00 * 0.10) = 6000.00 - 1200.00 - 600.00`
  - **Salário Líquido Esperado**: R$ 4200,00

### Solução "Rápida" 💨

Uma primeira abordagem, focada apenas em resolver o problema rapidamente, poderia ser um único bloco de código no método `main`.

```java
package aplicacao;

import java.util.Locale;
import java.util.Scanner;

public class Programa {

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.print("Nome: ");
        String nome = sc.nextLine();

        System.out.print("Salário bruto: ");
        double salarioBruto = sc.nextDouble();

        // Cálculo "mágico" com forte acoplamento
        double salarioLiquido = salarioBruto * 0.7; // 100% - 20% - 10% = 70%

        System.out.printf("Salário líquido = %.2f%n", salarioLiquido);

        sc.close();
    }
}
```

Essa solução funciona, mas é problemática. E se a alíquota do imposto mudar? Teríamos que encontrar e alterar o "número mágico" `0.7` diretamente no código, quebrando a coesão e dificultando a manutenção.

### Solução Pensando em Componentes 🧩

Uma abordagem mais profissional é separar as responsabilidades em componentes.

**Modelo de Domínio (Entidade):**
Primeiro, modelamos os dados do funcionário.

**Componentes (Serviços):**
Depois, criamos componentes para cada responsabilidade de negócio. O `ServicoDeSalario` usará os outros dois serviços para realizar seu trabalho.

> **Dica:** Repare que temos dois tipos de objetos no sistema: **componentes** (como `ServicoDeImposto`), que contêm lógica e regras, e **objetos de dados** (como `Funcionario`), que apenas carregam informações.

## Inversão de Controle (IoC) 🔄

A Inversão de Controle (do inglês, *Inversion of Control*) é um princípio de design que prega que um componente não deve criar ou gerenciar suas próprias dependências.

**Analogia do Carro:**
Pense no motor de um carro. Ele *depende* da bateria para funcionar, mas o suporte da bateria não fica *dentro* do motor. Por quê? Para que você possa trocar a bateria sem precisar abrir e desmontar o motor inteiro. O controle sobre qual bateria usar é "invertido" para fora do motor.

No nosso exemplo, o `ServicoDeSalario` depende do `ServicoDeImposto` e do `ServicoDePrevidencia`. Se o `ServicoDeSalario` instanciar esses serviços diretamente, ele fica fortemente acoplado a eles.

**Forma Errada (Alto Acoplamento):**
Isto está **errado**, pois o `ServicoDeSalario` está controlando diretamente suas dependências.

## Injeção de Dependência (DI) 💉

A Injeção de Dependência (do inglês, *Dependency Injection*) é a técnica que usamos para aplicar a Inversão de Controle. Em vez de o componente criar suas dependências, elas são "injetadas" de fora.

Essa injeção pode ser feita de algumas formas:

1.  **Via Construtor (Recomendado)**: As dependências são passadas como parâmetros no construtor do objeto.
2.  **Via Método Set**: Métodos `set` são usados para fornecer a dependência.
3.  **Via Container (Framework)**: Um framework gerencia todo o processo automaticamente.

**Exemplo com Injeção de Dependência via Construtor:**

```java
public class ServicoDeSalario {

    // Dependências não são mais instanciadas aqui
    private ServicoDeImposto servicoDeImposto;
    private ServicoDePrevidencia servicoDePrevidencia;

    // As dependências são "injetadas" pelo construtor
    public ServicoDeSalario(ServicoDeImposto servicoDeImposto, ServicoDePrevidencia servicoDePrevidencia) {
        this.servicoDeImposto = servicoDeImposto;
        this.servicoDePrevidencia = servicoDePrevidencia;
    }

    public double calcularSalarioLiquido(Funcionario funcionario) {
        double imposto = servicoDeImposto.tax(funcionario.getSalarioBruto());
        double previdencia = servicoDePrevidencia.discount(funcionario.getSalarioBruto());
        return funcionario.getSalarioBruto() - imposto - previdencia;
    }
}
```

Agora, o `ServicoDeSalario` é desacoplado e muito mais fácil de testar e manter.

## Frameworks 🛠️

Um framework é uma estrutura de trabalho que oferece uma infraestrutura completa para desenvolver sistemas de forma mais produtiva e organizada. Em vez de você chamar o código do framework, é o framework que chama o seu código (isso é Inversão de Controle\!).

Frameworks modernos, como o **Spring** para Java, gerenciam automaticamente:

  - **Injeção de dependências**
  - Ciclo de vida e escopo dos componentes
  - Configurações
  - Transações com banco de dados, segurança, integrações e muito mais.

### Usando Injeção de Dependência com Frameworks ⚙️

Para usar a injeção de dependência em um framework como o Spring, o processo geralmente se resume a dois passos simples:

1.  **Registrar os Componentes**: Você "avisa" ao framework quais classes são componentes. No Spring, isso é feito com anotações como `@Component`, `@Service` ou `@Repository`.
2.  **Indicar as Dependências**: Você declara onde um componente precisa de outro. No Spring, a anotação `@Autowired` é usada para isso (geralmente no construtor da classe).

Depois disso, o framework cuida de todo o trabalho pesado:

  - **Instanciar** os componentes na ordem correta.
  - **Resolver e injetar** as dependências automaticamente.
  - **Reaproveitar** componentes, gerenciando seu ciclo de vida.

Essa abordagem permite que o desenvolvedor foque no que realmente importa: as regras de negócio da aplicação.

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)

