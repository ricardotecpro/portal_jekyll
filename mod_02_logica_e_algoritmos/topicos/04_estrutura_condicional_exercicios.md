---
layout: default
title: 🧠 Capítulo: Estrutura Condicional - Exercícios
---

# 🧠 Capítulo: Estrutura Condicional - Exercícios

Estes exercícios foram projetados para praticar o uso de estruturas condicionais (`se-então-senão`). Cada problema requer uma lógica de decisão para produzir a saída correta com base nos dados de entrada.

## 💡 Problema "notas"

> Fazer um programa para ler as duas notas que um aluno obteve no primeiro e segundo semestres. Em seguida, mostrar a nota final (soma das duas notas), com uma casa decimal. Caso a nota final seja inferior a 60.00, mostrar a mensagem "REPROVADO".

### Exemplos (Novos)

**Exemplo 1: Aluno Aprovado**

```
Digite a primeira nota: 55.0
Digite a segunda nota: 30.0
NOTA FINAL = 85.0
```

**Exemplo 2: Aluno Reprovado**

```
Digite a primeira nota: 25.5
Digite a segunda nota: 30.0
NOTA FINAL = 55.5
REPROVADO
```

## 💡 Problema "baskara"

> Fazer um programa para ler os três coeficientes (a, b, c) de uma equação do segundo grau. Usando a fórmula de Bhaskara, calcular e mostrar os valores das raízes x1 e x2 com quatro casas decimais. Se a equação não possuir raízes reais (o delta for negativo), mostrar uma mensagem.

### Fórmulas

1.  **Cálculo do Delta**: $\\Delta = b^2 - 4ac$
2.  **Cálculo das Raízes**: $x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}$
      - A equação só possui raízes reais se $\\Delta \\ge 0$.

### Exemplos (Novos)

**Exemplo 1: Duas raízes reais**

```
Coeficiente a: 1
Coeficiente b: -2
Coeficiente c: -15
X1 = 5.0000
X2 = -3.0000
```

**Exemplo 2: Nenhuma raiz real**

```
Coeficiente a: 2
Coeficiente b: 3
Coeficiente c: 4
Esta equacao nao possui raizes reais
```

## 💡 Problema "menor\_de\_tres"

> Fazer um programa para ler três números inteiros e, em seguida, mostrar qual o menor dentre eles. Em caso de empate, o valor deve ser mostrado apenas uma vez.

### Exemplos (Novos)

**Exemplo 1**

```
Primeiro valor: 10
Segundo valor: 5
Terceiro valor: 12
MENOR = 5
```

**Exemplo 2 (com empate)**

```
Primeiro valor: 18
Segundo valor: 18
Terceiro valor: 25
MENOR = 18
```

## 💡 Problema "operadora"

> Uma operadora de telefonia cobra R$ 50.00 por um plano básico de 100 minutos. Cada minuto excedente custa R$ 2.00. Faça um programa para ler a quantidade de minutos consumidos e mostrar o valor total a ser pago.

### Exemplos (Novos)

**Exemplo 1: Dentro da franquia**

```
Digite a quantidade de minutos: 99
Valor a pagar: R$ 50.00
```

**Exemplo 2: Excedente**

```
Digite a quantidade de minutos: 120
Valor a pagar: R$ 90.00
```

## 💡 Problema "troco\_verificado"

> Fazer um programa para calcular o troco. O programa deve ler o preço unitário, a quantidade comprada e o dinheiro recebido. Se o dinheiro for suficiente, mostre o troco. Caso contrário, informe quanto dinheiro falta.

### Exemplos (Novos)

**Exemplo 1: Troco calculado**

```
Preço unitário do produto: 10.00
Quantidade comprada: 3
Dinheiro recebido: 50.00
TROCO = 20.00
```

**Exemplo 2: Dinheiro insuficiente**

```
Preço unitário do produto: 15.00
Quantidade comprada: 2
Dinheiro recebido: 25.00
DINHEIRO INSUFICIENTE. FALTAM 5.00 REAIS
```

## 💡 Problema "glicose"

> Fazer um programa que lê a medida de glicose no sangue de uma pessoa e informa sua classificação (Normal, Elevado, Diabetes) com base na tabela de referência.

### Tabela de Referência

| Classificação | Glicose (mg/dl) |
| :--- | :--- |
| Normal | Até 100 mg/dl |
| Elevado | Maior que 100 até 140 mg/dl |
| Diabetes | Maior que 140 mg/dl |

### Exemplos (Novos)

```
Digite a medida da glicose: 95.0
Classificacao: normal

Digite a medida da glicose: 120.0
Classificacao: elevado

Digite a medida da glicose: 150.0
Classificacao: diabetes
```

## 💡 Problema "dardo"

> No arremesso de dardo, o atleta tem três tentativas. Crie um programa que, dadas as três distâncias, informa qual foi a maior delas.

### Exemplo (Novo)

```
Digite as tres distancias:
80.0
95.5
90.1
MAIOR DISTANCIA = 95.5
```

## 💡 Problema "temperatura"

> Construa um programa que converte temperaturas entre Celsius e Fahrenheit. O usuário deve primeiro informar a escala de origem ('C' ou 'F') e depois a temperatura. O programa deve então exibir o valor na outra escala.

### Fórmulas

  * **Fahrenheit para Celsius**: $C=\\frac{5}{9}(F-32)$
  * **Celsius para Fahrenheit**: $F = \\frac{9}{5}C + 32$ (fórmula deduzida)

### Exemplos (Novos)

**Exemplo 1**

```
Voce vai digitar a temperatura em qual escala (C/F)? C
Digite a temperatura em Celsius: 100.0
Temperatura equivalente em Fahrenheit: 212.00
```

**Exemplo 2**

```
Voce vai digitar a temperatura em qual escala (C/F)? F
Digite a temperatura em Fahrenheit: 98.6
Temperatura equivalente em Celsius: 37.00
```

## 💡 Problema "lanchonete"

> Uma lanchonete tem produtos com código e preço. Faça um programa que lê o código de um produto e a quantidade comprada, e informa o valor a pagar, com duas casas decimais, com base na tabela.

### Tabela de Produtos

| Código | Preço |
| :--- | :--- |
| 1 | R$ 5.00 |
| 2 | R$ 3.50 |
| 3 | R$ 4.80 |
| 4 | R$ 8.90 |
| 5 | R$ 7.32 |

### Exemplo (Novo)

```
Codigo do produto comprado: 2
Quantidade comprada: 4
Valor a pagar: R$ 14.00
```

## 💡 Problema "multiplos"

> Fazer um programa para ler dois números inteiros (que podem ser digitados em qualquer ordem) e dizer se um é múltiplo do outro.

### Lógica

Dois números, `A` e `B`, são múltiplos se `A % B == 0` ou `B % A == 0`.

### Exemplos (Novos)

```
Digite dois numeros inteiros:
7
21
Sao multiplos

Digite dois numeros inteiros:
8
15
Nao sao multiplos
```

## 💡 Problema "aumento"

> Uma empresa concederá um aumento de salário conforme a tabela. Faça um programa que lê o salário de uma pessoa e mostra o novo salário, o valor do aumento e a porcentagem aplicada.

### Tabela de Aumento

| Salário | Aumento |
| :--- | :--- |
| Até R$ 1000.00 | 20% |
| Acima de R$ 1000.00 até R$ 3000.00 | 15% |
| Acima de R$ 3000.00 até R$ 8000.00 | 10% |
| Acima de R$ 8000.00 | 5% |

### Exemplos (Novos)

**Exemplo 1**

```
Digite o salario da pessoa: 900.00
Novo salario = R$ 1080.00
Aumento = R$ 180.00
Porcentagem = 20 %
```

**Exemplo 2**

```
Digite o salario da pessoa: 4000.00
Novo salario = R$ 4400.00
Aumento = R$ 400.00
Porcentagem = 10 %
```

## 💡 Problema "tempo\_de\_jogo"

> Leia a hora inicial e a hora final de um jogo. Calcule a duração, sabendo que ele pode começar em um dia e terminar no outro, com duração mínima de 1 hora e máxima de 24 horas.

### Lógica

  * Se `hora_final > hora_inicial`, a duração é `hora_final - hora_inicial`.
  * Se não, o jogo cruzou a meia-noite. A duração é `(24 - hora_inicial) + hora_final`.

### Exemplos (Novos)

```
Hora inicial: 22
Hora final: 3
O JOGO DUROU 5 HORA(S)

Hora inicial: 10
Hora final: 18
O JOGO DUROU 8 HORA(S)
```

## 💡 Problema "coordenadas"

> Leia as coordenadas (X, Y) de um ponto no plano cartesiano e determine a qual quadrante ele pertence (Q1, Q2, Q3, Q4). Se estiver na origem, informe "Origem". Se estiver sobre um dos eixos, informe "Eixo X" ou "Eixo Y".

### Regras do Plano Cartesiano

  * **Origem**: X = 0 e Y = 0
  * **Eixo X**: Y = 0
  * **Eixo Y**: X = 0
  * **Q1**: X \> 0 e Y \> 0
  * **Q2**: X \< 0 e Y \> 0
  * **Q3**: X \< 0 e Y \< 0
  * **Q4**: X \> 0 e Y \< 0

### Exemplos (Novos)

```
Valor de X: -1.0
Valor de Y: 5.0
Q2

Valor de X: 0
Valor de Y: -10.0
Eixo Y
```

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)

