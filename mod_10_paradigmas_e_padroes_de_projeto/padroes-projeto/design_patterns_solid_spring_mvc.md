---
layout: default
title: Design Patterns, SOLID e Spring MVC
---

# Design Patterns, SOLID e Spring MVC


https://medium.com/backticks-tildes/the-s-o-l-i-d-principles-in-pictures-b34ce2f1e898

## Introdução

O desenvolvimento de software moderno requer organização e boas práticas para criar aplicações escaláveis e de fácil manutenção. Para isso, utilizamos **princípios de design**, como os conceitos do **SOLID**, e padrões de projeto, como o **Strategy**. Além disso, frameworks como o **Spring MVC** ajudam a estruturar aplicações baseadas na arquitetura MVC (Model-View-Controller).

Este guia abordará:

- Os princípios do **SOLID** e como aplicá-los.
- O padrão de projeto **Strategy**.
- O funcionamento do **Spring MVC**.
- As principais anotações do **Spring**.

---

## 1. Os Princípios do SOLID

O SOLID é um conjunto de cinco princípios fundamentais para o desenvolvimento de software orientado a objetos. Eles ajudam a tornar o código mais flexível, reutilizável e fácil de manter.

[[]]
### 1.1. **S**ingle Responsibility Principle (Princípio da Responsabilidade Única)

Cada classe deve ter apenas **uma única responsabilidade**. Isso significa que ela deve ter **um único motivo para mudar**.

Exemplo:

```java
public class GeradorDeRelatorio {
    public void gerarRelatorio() {
        // Gera o relatório
    }
}
```

Aqui, a classe **GeradorDeRelatorio** só tem a função de gerar um relatório. Se fosse também responsável por salvar ou enviar por e-mail, quebraria este princípio.

---

### 1.2. **O**pen/Closed Principle (Princípio Aberto/Fechado)

Uma classe deve estar **aberta para extensão, mas fechada para modificação**. Isso significa que, ao precisar adicionar novos comportamentos, devemos criar novas classes em vez de modificar código existente.

Exemplo com **Strategy** (explicado mais à frente):

```java
public interface EstrategiaPagamento {
    void pagar(double valor);
}
```

Com essa interface, podemos adicionar novos métodos de pagamento sem alterar as classes existentes.

---

### 1.3. **L**iskov Substitution Principle (Princípio da Substituição de Liskov)

Subclasses devem ser substituíveis por suas classes base sem quebrar o comportamento esperado.

Exemplo incorreto:

```java
public class Pato {
    public void nadar() {}
    public void voar() {}
}
```

Se criarmos uma classe `Pinguim extends Pato`, teremos um problema, pois pinguins não voam. O ideal seria separar esses comportamentos.

---

### 1.4. **I**nterface Segregation Principle (Princípio da Segregação de Interface)

Interfaces grandes devem ser divididas em **múltiplas interfaces específicas**, para que as classes não precisem implementar métodos que não utilizam.

Errado:

```java
public interface Ave {
    void voar();
    void nadar();
}
```

Nem todas as aves voam e nem todas nadam. O correto seria dividir:

```java
public interface AveQueVoa {
    void voar();
}

public interface AveQueNada {
    void nadar();
}
```

---

### 1.5. **D**ependency Inversion Principle (Princípio da Inversão de Dependência)

Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de **abstrações**.

Exemplo com **injeção de dependências** no Spring:

```java
@Service
public class ProcessadorPagamento {
    private final EstrategiaPagamento estrategiaPagamento;

    @Autowired
    public ProcessadorPagamento(EstrategiaPagamento estrategiaPagamento) {
        this.estrategiaPagamento = estrategiaPagamento;
    }

    public void processar(double valor) {
        estrategiaPagamento.pagar(valor);
    }
}
```

Aqui, `ProcessadorPagamento` não depende de uma implementação específica, mas de uma abstração (`EstrategiaPagamento`).

---

## 2. O Padrão Strategy

O **Padrão Strategy** é um padrão de projeto comportamental que permite definir uma família de algoritmos, encapsulá-los e torná-los intercambiáveis. Ele permite que o comportamento de um objeto seja alterado em tempo de execução sem modificar seu código-fonte.

### Exemplo de Implementação do Strategy em Java

1. **Definição da interface Strategy**:

```java
public interface EstrategiaPagamento {
    void pagar(double valor);
}
```

2. **Implementações concretas do Strategy**:

```java
public class PagamentoCartaoCredito implements EstrategiaPagamento {
    @Override
    public void pagar(double valor) {
        System.out.println("Pagamento de " + valor + " realizado com Cartão de Crédito.");
    }
}

public class PagamentoBoleto implements EstrategiaPagamento {
    @Override
    public void pagar(double valor) {
        System.out.println("Pagamento de " + valor + " realizado com Boleto Bancário.");
    }
}
```

3. **Classe que utiliza o Strategy**:

```java
public class CarrinhoDeCompras {
    private EstrategiaPagamento estrategiaPagamento;

    public void setEstrategiaPagamento(EstrategiaPagamento estrategiaPagamento) {
        this.estrategiaPagamento = estrategiaPagamento;
    }

    public void finalizarCompra(double valor) {
        estrategiaPagamento.pagar(valor);
    }
}
```

4. **Exemplo de uso do Strategy**:

```java
public class Main {
    public static void main(String[] args) {
        CarrinhoDeCompras carrinho = new CarrinhoDeCompras();

        carrinho.setEstrategiaPagamento(new PagamentoCartaoCredito());
        carrinho.finalizarCompra(150.00);

        carrinho.setEstrategiaPagamento(new PagamentoBoleto());
        carrinho.finalizarCompra(300.00);
    }
}
```

✔ **Vantagens do Padrão Strategy**:

- Permite substituir algoritmos sem alterar código existente.
- Segue o princípio **O** do SOLID (**Open/Closed Principle**).
- Evita grandes estruturas `if-else`, tornando o código mais modular.

---

## 3. O que é o Spring MVC?

O **Spring MVC** é um framework que segue a arquitetura **Model-View-Controller**, facilitando a separação de responsabilidades em aplicações web.

- **Model**: Representa os dados e a lógica de negócio.
- **View**: Interface com o usuário.
- **Controller**: Intermedia a comunicação entre Model e View.

Exemplo básico de um **Controller** no Spring MVC:

```java
@Controller
@RequestMapping("/usuarios")
public class UsuarioController {
    @GetMapping("/{id}")
    public ResponseEntity<String> getUsuario(@PathVariable Long id) {
        return ResponseEntity.ok("Usuário " + id);
    }
}
```

---

## Conclusão

Compreender os princípios do **SOLID**, o padrão **Strategy** e o **Spring MVC** é essencial para o desenvolvimento de software moderno.

Este guia fornece uma base sólida para iniciantes aplicarem boas práticas no desenvolvimento Java. 🚀


Adicionar tópicos sobre:

✅ **Outros Padrões de Projeto:** Factory Method, Singleton, Observer, Decorator, Adapter.  
✅ **Arquiteturas:** Microservices vs Monólito, DDD (Domain-Driven Design), Arquitetura Hexagonal.  
✅ **Testes e Qualidade:** JUnit, Mockito, Testes de Integração no Spring.  
✅ **Banco de Dados:** JDBC, JPA/Hibernate, NoSQL.  
✅ **Boas Práticas:** Clean Code, DRY, KISS, YAGNI.

---

### 🚀 [ricardotecpro.github.io](https://ricardotecpro.github.io/)

