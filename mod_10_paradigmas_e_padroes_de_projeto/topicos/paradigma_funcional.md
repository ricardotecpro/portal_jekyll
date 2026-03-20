---
layout: default
title: Paradigma Funcional: Entendendo o Básico
---

# Paradigma Funcional: Entendendo o Básico

O **paradigma funcional** é um modelo de programação baseado em funções matemáticas, onde a computação é tratada como a avaliação de expressões em vez da execução de comandos. Ele enfatiza **imutabilidade**, **funções puras** e **ausência de efeitos colaterais**, tornando o código mais previsível e fácil de testar.

### **Principais características do paradigma funcional:**

1. **Funções Puras** 🧑‍💻
    
    - Uma função pura sempre retorna o mesmo resultado para os mesmos argumentos e não modifica estados externos.
    - Exemplo:
        
        ```haskell
        soma :: Int -> Int -> Int
        soma x y = x + y
        ```
        
2. **Imutabilidade** 🔒
    
    - Os dados não podem ser modificados após a criação, evitando efeitos colaterais.
    - Em vez de alterar uma lista, cria-se uma nova com as modificações.
3. **Funções de Alta Ordem** 🚀
    
    - Funções podem receber outras funções como parâmetro ou retornar funções.
    - Exemplo em JavaScript:
        
        ```javascript
        const dobrar = (x) => x * 2;
        const mapear = (fn, lista) => lista.map(fn);
        console.log(mapear(dobrar, [1, 2, 3])); // [2, 4, 6]
        ```
        
4. **Recursão** 🔄
    
    - No lugar de laços (`for`, `while`), o paradigma funcional usa recursão.
    - Exemplo em Python:
        
        ```python
        def fatorial(n):
            return 1 if n == 0 else n * fatorial(n - 1)
        ```
        
5. **Avaliação Preguiçosa** 🛑⚡
    
    - Expressões só são avaliadas quando necessárias, otimizando a execução.

### **Linguagens Funcionais Populares:**

- **Haskell** (puramente funcional)
- **Clojure** (roda na JVM)
- **Elixir** (baseado em Erlang)
- **Scala** (suporta programação funcional e orientada a objetos)
- **F#** (para .NET)

Embora linguagens como **JavaScript, Python e Java** não sejam puramente funcionais, elas suportam esse paradigma.

📌 **Quando usar?**  
O paradigma funcional é ideal para aplicações que exigem **concorrência**, **manutenção simplificada** e **previsibilidade**, como sistemas distribuídos, processamento de dados e IA.

---

### 🚀 [ricardotecpro.github.io](https://ricardotecpro.github.io/)

