---
layout: default
title: Guia de Desenvolvimento: Padrões de Projeto, Arquiteturas, Testes, Banco de Dados e Boas Práticas
---

# Guia de Desenvolvimento: Padrões de Projeto, Arquiteturas, Testes, Banco de Dados e Boas Práticas

## 1. Outros Padrões de Projeto

Os padrões de projeto são soluções reutilizáveis para problemas recorrentes no desenvolvimento de software. Eles ajudam a estruturar o código de maneira eficiente e facilitam a manutenção e escalabilidade do sistema.

### 1.1 Factory Method

- Define uma interface para criação de objetos, mas permite que subclasses alterem o tipo de objetos criados.
- Útil quando a criação de um objeto envolve lógica complexa ou quando não queremos expor diretamente a instância da classe.
- Exemplo:

```java
interface Produto {
    void criar();
}

class ProdutoA implements Produto {
    public void criar() {
        System.out.println("Produto A criado");
    }
}

class FabricaDeProdutos {
    public static Produto criarProduto(String tipo) {
        if (tipo.equals("A")) {
            return new ProdutoA();
        }
        throw new IllegalArgumentException("Tipo desconhecido");
    }
}
```

### 1.2 Singleton

- Garante que uma classe tenha apenas uma instância e fornece um ponto global de acesso a ela.
- Usado para gerenciar recursos compartilhados, como conexões de banco de dados.
- Exemplo:

```java
public class Configuracao {
    private static Configuracao instancia;
    private Configuracao() {}
    
    public static Configuracao getInstance() {
        if (instancia == null) {
            instancia = new Configuracao();
        }
        return instancia;
    }
}
```

### 1.3 Observer

- Define uma dependência um-para-muitos entre objetos, onde um objeto (sujeito) notifica múltiplos observadores sobre mudanças de estado.
- Muito utilizado em eventos e sistemas de notificação.
- Exemplo:

```java
interface Observador {
    void atualizar(String mensagem);
}

class Usuario implements Observador {
    private String nome;
    public Usuario(String nome) { this.nome = nome; }
    public void atualizar(String mensagem) {
        System.out.println(nome + " recebeu: " + mensagem);
    }
}

class Notificador {
    private List<Observador> observadores = new ArrayList<>();
    public void adicionar(Observador o) { observadores.add(o); }
    public void notificarTodos(String mensagem) {
        for (Observador o : observadores) {
            o.atualizar(mensagem);
        }
    }
}
```

### 1.4 Decorator

- Permite adicionar funcionalidades a objetos dinamicamente sem modificar suas classes.
- Exemplo:

```java
interface Cafe {
    String descricao();
}

class CafeSimples implements Cafe {
    public String descricao() { return "Café Simples"; }
}

class LeiteDecorator implements Cafe {
    private Cafe cafe;
    public LeiteDecorator(Cafe cafe) { this.cafe = cafe; }
    public String descricao() { return cafe.descricao() + ", com leite"; }
}
```

### 1.5 Adapter

- Converte a interface de uma classe em outra interface esperada pelos clientes.
- Útil para integrar sistemas legados com novas APIs.
- Exemplo:

```java
class TomadaAntiga {
    public void ligarNaTomadaDoisPinos() {
        System.out.println("Ligado na tomada de dois pinos");
    }
}

class AdaptadorTomada {
    private TomadaAntiga tomada;
    public AdaptadorTomada(TomadaAntiga tomada) { this.tomada = tomada; }
    public void ligarNaTomadaTresPinos() {
        tomada.ligarNaTomadaDoisPinos();
    }
}
```

---

## 2. Arquiteturas

Diferentes arquiteturas são usadas para estruturar aplicações de forma escalável e organizada.

### 2.1 Microservices vs Monólito

- **Monólito**: Aplicação única e indivisível.
- **Microservices**: Divisão da aplicação em serviços independentes e interoperáveis.
- Vantagens dos microservices: escalabilidade, deploy independente.
- Vantagens do monólito: menor complexidade inicial, mais fácil de testar.

### 2.2 DDD (Domain-Driven Design)

- Modela o software com base na lógica do domínio de negócio.
- Utiliza conceitos como **Entidades**, **Agregados**, **Repositorios** e **Serviços de Domínio**.
- Focado em colaboração com especialistas do domínio.

### 2.3 Arquitetura Hexagonal

- Separa a lógica de negócios da infraestrutura (banco de dados, frameworks, interfaces gráficas).
- Utiliza portas e adaptadores para desacoplar dependências externas.
- Facilita testes e manutenibilidade.

---

## 3. Testes e Qualidade

Os testes garantem a confiabilidade e robustez do código.

### 3.1 JUnit

- Framework para testes unitários em Java.
- Exemplo de teste:

```java
@Test
public void testSoma() {
    assertEquals(4, Calculadora.somar(2, 2));
}
```

### 3.2 Mockito

- Framework para simulação (mocking) de objetos.
- Exemplo:

```java
Mockito.when(repositorio.buscarPorId(1L)).thenReturn(new Cliente("João"));
```

### 3.3 Testes de Integração no Spring

- Testes que validam a integração entre diferentes partes do sistema.
- Utilizam o Spring Boot Test para configurar um ambiente de testes realista.

---

## 4. Banco de Dados

Os bancos de dados armazenam e gerenciam dados da aplicação.

### 4.1 JDBC

- API para interação direta com bancos de dados SQL.

### 4.2 JPA/Hibernate

- **JPA**: Especificação Java para persistência de dados.
- **Hibernate**: Implementação da JPA.

### 4.3 NoSQL

- Bancos de dados não relacionais (MongoDB, Redis, Cassandra).
- Utilizados para alta escalabilidade e flexibilidade de estrutura de dados.

---

## 5. Boas Práticas

- **Clean Code**: Código limpo e de fácil entendimento.
- **DRY (Don't Repeat Yourself)**: Evitar duplicação de código.
- **KISS (Keep It Simple, Stupid)**: Manter o código simples e direto.
- **YAGNI (You Aren't Gonna Need It)**: Implementar apenas o que é necessário.

---

## 6. Conclusão

Este guia fornece uma visão geral de padrões de projeto, arquiteturas, testes, banco de dados e boas práticas essenciais para desenvolvimento de software. Além disso, explorar tópicos complementares ajudará o estudante a aprofundar seus conhecimentos e desenvolver sistemas robustos e escaláveis.

---

### 🚀 [ricardotecpro.github.io](https://ricardotecpro.github.io/)

