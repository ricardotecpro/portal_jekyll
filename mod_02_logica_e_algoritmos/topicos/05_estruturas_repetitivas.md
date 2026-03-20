# 🔄 Capítulo: Estruturas Repetitivas

As estruturas repetitivas, também conhecidas como laços ou *loops*, são um pilar da programação. Elas permitem que um bloco de comandos seja executado várias vezes, seja por um número definido de vezes ou enquanto uma determinada condição for atendida. Vamos explorar as três estruturas principais: "enquanto", "para" e "repita-até".

## 🔁 Estrutura "Enquanto" (*while*)

### O que é?

[cite\_start]A estrutura "enquanto" é um laço de repetição que executa um bloco de comandos continuamente **enquanto uma condição específica for verdadeira**[cite: 616].

### Quando Usar?

[cite\_start]É a escolha ideal quando **não se sabe previamente a quantidade exata de repetições** que o programa precisará executar[cite: 617]. A repetição depende de um evento externo, como a digitação de um valor específico pelo usuário (conhecido como **valor de sentinela**).

### Problema Exemplo

> Fazer um programa que lê números inteiros até que um zero seja lido. Ao final, o programa deve mostrar a soma de todos os números digitados (exceto o zero).

#### Exemplo (Novo)

```
Digite um numero: 10
Digite outro numero: 7
Digite outro numero: 3
Digite outro numero: 0
SOMA = 20
```

### Sintaxe e Regras

```portugol
enquanto <condição> faca
   // bloco de comandos
fimenquanto
```

* **Regra**: Antes de cada repetição, a `<condição>` é testada.
    * [cite\_start]Se for **verdadeira (V)**, o bloco de comandos executa, e o fluxo volta para o teste da condição[cite: 626].
    * [cite\_start]Se for **falsa (F)**, o laço é encerrado, e o programa continua na linha seguinte ao `fimenquanto`[cite: 626].

### Código em Portugol

```portugol
algoritmo "SomaComEnquanto"
var
   x, soma: inteiro
inicio
   soma <- 0

   escreva("Digite um numero: ")
   leia(x)

   enquanto x <> 0 faca
      soma <- soma + x
      escreva("Digite outro numero: ")
      leia(x)
   fimenquanto

   escreval("SOMA = ", soma)
fimalgoritmo
```

## 🔢 Estrutura "Para" (*for*)

### O que é?

[cite\_start]A estrutura "para" é um laço de repetição projetado para executar um bloco de comandos por um **intervalo de valores predefinido** ou um número específico de vezes[cite: 744].

### Quando Usar?

[cite\_start]É recomendada quando **se sabe de antemão a quantidade de repetições necessárias**[cite: 745]. É perfeita para tarefas baseadas em contagem.

### Problema Exemplo

> Fazer um programa que primeiro lê um valor inteiro N e, depois, lê N números inteiros. Ao final, mostra a soma dos N números lidos.

#### Exemplo (Novo)

```
Quantos numeros serao digitados? 4
Digite um numero: 10
Digite um numero: 8
Digite um numero: -3
Digite um numero: 5
SOMA = 20
```

### Sintaxe e Regras

```portugol
para <variável> de <valor_inicial> ate <valor_final> [passo <incremento>] faca
   // bloco de comandos
fimpara
```

* **Regras**:
    1.  [cite\_start]**Inicialização**: A `<variável>` de controle recebe o `<valor_inicial>` na primeira vez[cite: 756].
    2.  [cite\_start]**Condição**: Se o valor da `<variável>` não ultrapassou o `<valor_final>`, o bloco executa[cite: 758]. Caso contrário, o laço termina.
    3.  [cite\_start]**Incremento**: Ao final de cada repetição, a `<variável>` é incrementada em 1 (ou pelo valor definido em `passo`)[cite: 759].

### Exemplos de Contagem

**Contagem Progressiva**

```portugol
para i de 1 ate 3 faca
   escreval("Valor de i: ", i)
fimpara
```

*Saída:*

```
Valor de i: 1
Valor de i: 2
Valor de i: 3
```

-----

**Contagem Regressiva**

```portugol
para i de 3 ate 1 passo -1 faca
   escreval("Valor de i: ", i)
fimpara
```

*Saída:*

```
Valor de i: 3
Valor de i: 2
Valor de i: 1
```

## 🎬 Estrutura "Repita-Até" (*do-while*)

### O que é?

[cite\_start]A estrutura "repita-até" é um laço de repetição que **executa o bloco de comandos pelo menos uma vez**, pois a condição de parada só é verificada no final[cite: 879].

### Quando Usar?

É menos comum, mas muito útil em situações onde a ação deve ocorrer ao menos uma vez, como em menus interativos onde se pergunta ao usuário se ele deseja realizar a operação novamente.

### Problema Exemplo

> Fazer um programa para ler uma temperatura em Celsius e mostrar o equivalente em Fahrenheit. Ao final, perguntar se o usuário deseja repetir (s/n). Caso digite "s", o programa repete.

### Fórmula de Conversão

$$F = \frac{9 \times C}{5} + 32$$

#### Exemplo (Novo)

```
Digite a temperatura em Celsius: 25.0
Equivalente em Fahrenheit: 77.0
Deseja repetir (s/n)? s
Digite a temperatura em Celsius: 0.0
Equivalente em Fahrenheit: 32.0
Deseja repetir (s/n)? s
Digite a temperatura em Celsius: -5.0
Equivalente em Fahrenheit: 23.0
Deseja repetir (s/n)? n
```

### Sintaxe e Regras

```portugol
repita
   // bloco de comandos
ate <condição>
```

* **Regra**: O bloco de comandos é executado, e somente depois a `<condição>` é testada.
    * [cite\_start]Se for **falsa (F)**, o laço executa novamente[cite: 885].
    * [cite\_start]Se for **verdadeira (V)**, o laço é encerrado[cite: 885]. (Note que a lógica é o inverso da estrutura `enquanto`).

### Código em Portugol

```portugol
algoritmo "ConversorDeTemperatura"
var
   C, F: real
   resp: caractere
inicio
   repita
      escreva("Digite a temperatura em Celsius: ")
      leia(C)
      F <- 9.0 * C / 5.0 + 32.0
      escreval("Equivalente em Fahrenheit: ", F:4:1)
      escreva("Deseja repetir (s/n)? ")
      leia(resp)
   ate resp = "n"
fimalgoritmo
```

---

### 🚀 [ricardotecpro.github.io](https://ricardotecpro.github.io/)
