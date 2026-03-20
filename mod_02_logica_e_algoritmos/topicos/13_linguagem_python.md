---
layout: default
title: Linguagem Python 🐍
---

# Linguagem Python 🐍

Bem-vindo ao guia de Python, uma linguagem de programação de alto nível, conhecida por sua sintaxe limpa, legibilidade e vasta gama de aplicações, que vão desde desenvolvimento web e automação de scripts até ciência de dados e inteligência artificial. Sua filosofia incentiva a escrita de código claro e conciso.

## 🛠️ Instalação e Configuração do Ambiente

Para programar em Python, você precisa do interpretador da linguagem e de um bom editor de código ou IDE.

1.  **Instale o Python**:

      * Faça o download da versão mais recente do Python diretamente do [site oficial](https://www.google.com/search?q=https.www.python.org/downloads/).
      * **Importante (para Windows)**: Na primeira tela do instalador, marque a caixa de seleção **"Add Python to PATH"**. Isso permite que você execute o Python a partir de qualquer terminal.
      * Para testar a instalação, abra um terminal e digite `python` ou `python3`. Você deverá ver o prompt do interpretador Python (`>>>`). Para sair, digite `exit()` e pressione Enter.

2.  **Escolha uma IDE (Ambiente de Desenvolvimento Integrado)**:
    O material original foca no PyCharm, que é excelente. O VS Code é outra alternativa extremamente popular.

    ### Opção 1: PyCharm Community Edition

      * Baixe o [PyCharm Community](https://www.jetbrains.com/pycharm/download/). É uma IDE gratuita e poderosa, desenvolvida pela JetBrains e totalmente dedicada ao desenvolvimento em Python, com ótimas ferramentas de depuração e análise de código.

    ### Opção 2: Visual Studio Code

      * Instale o [Visual Studio Code](https://code.visualstudio.com/).
      * Na aba de extensões, instale a extensão **"Python"** da Microsoft. Ela transforma o VS Code em um ambiente de desenvolvimento Python completo, com suporte a depuração, linting e notebooks Jupyter.

### 🚀 Seu Primeiro Programa em Python

A simplicidade do Python brilha desde o início. Um programa "Olá, Mundo" é apenas uma linha de código.

```python
print("Ola, Universo Python!")
```

Diferente de linguagens como Java ou C\#, Python não exige uma estrutura complexa de classes ou métodos `main` para programas simples.

## 📊 Tipos de Dados e Variáveis

Python é uma linguagem de **tipagem dinâmica**, o que significa que você não precisa declarar o tipo de uma variável. O tipo é inferido automaticamente quando você atribui um valor a ela.

| Significado | Tipo em Python | Observação |
| :--- | :--- | :--- |
| Número Inteiro | `int` | Pode armazenar números de tamanho virtualmente ilimitado. |
| Número de Ponto Flutuante | `float` | Usado para números reais (com casas decimais). |
| Texto (String) | `str` | Não há um tipo `char` separado; um caractere é uma `str` de tamanho 1. Pode ser declarado com aspas simples (`'...'`) ou duplas (`"..."`). |
| Valor Lógico | `bool` | Aceita apenas os valores `True` ou `False` (com a primeira letra maiúscula). |

**Nota sobre Type Hints (Dicas de Tipo):**
Embora a tipagem seja dinâmica, o Python moderno suporta "type hints", que permitem anotar o tipo esperado de uma variável (ex: `idade: int = 31`). Isso não afeta a execução, mas melhora a legibilidade e ajuda ferramentas de análise de código a encontrar erros.

## 📝 Declaração e Formatação de Saída

A atribuição de variáveis é direta. Para exibir dados formatados, a melhor abordagem é usar **f-strings**, que permitem incorporar expressões e variáveis diretamente dentro de uma string.

```python
# A anotação de tipo (ex: : int) é opcional, mas uma boa prática.
idade: int = 31
salario: float = 7800.25
altura: float = 1.72
genero: str = 'F'
nome: str = "Sofia Oliveira"

# f-strings (formatted string literals) são a forma moderna de formatar saídas.
print(f"NOME = {nome}")
print(f"IDADE = {idade}")
print(f"GENERO = {genero}")
# Para formatar um float com 2 casas decimais, usa-se :.2f
print(f"SALARIO = {salario:.2f}")
print(f"ALTURA = {altura:.2f}")
```

## 🔢 Operadores

### Aritméticos

| Operador | Significado |
| :---: | :--- |
| `+` | Adição |
| `-` | Subtração |
| `*` | Multiplicação |
| `/` | Divisão (resulta em float) |
| `//` | Divisão inteira (resulta em int, descarta o resto) |
| `%` | Resto da divisão (módulo) |
| `**` | Exponenciação |

### Comparativos

| Operador | Significado |
| :---: | :--- |
| `==` | Igual a |
| `!=` | Diferente de |
| `>` | Maior que |
| `<` | Menor que |
| `>=` | Maior ou igual a |
| `<=` | Menor ou igual a |

### Lógicos

Em Python, os operadores lógicos são palavras em inglês, o que torna o código muito legível.
| Operador | Significado |
| :---: | :--- |
| `and` | E |
| `or` | OU |
| `not` | NÃO |

## 📥 Entrada de Dados

A entrada de dados em Python é feita com a função `input()`.

  * A função `input()` **sempre retorna uma string**.
  * Você deve converter explicitamente o valor para o tipo numérico desejado usando `int()` ou `float()`.
  * A função pode receber uma string como argumento, que será exibida ao usuário como um prompt.

<!-- end list -->

```python
# O prompt é passado diretamente para a função input().
nome_completo = input("Digite seu nome completo: ")
idade = int(input("Digite sua idade: ")) # Converte a entrada para inteiro.
salario = float(input("Digite seu salario: ")) # Converte a entrada para float.

print("
--- DADOS REGISTRADOS ---")
print(f"Nome: {nome_completo}")
print(f"Idade: {idade}")
print(f"Salario: {salario:.2f}")
```

## 🔀 Estruturas de Controle e a Importância da Indentação

Em Python, os blocos de código (corpo de um `if`, `for`, `while`, etc.) não são definidos por chaves `{}`. Em vez disso, eles são definidos pela **indentação** (geralmente 4 espaços). Isso força um estilo de código limpo e organizado.

### Estrutura Condicional (`if/elif/else`)

A estrutura `if` avalia uma condição. `elif` (contração de "else if") permite testar múltiplas condições, e `else` captura todos os outros casos.

```python
hora = int(input("Digite uma hora do dia (0-23): "))

if hora < 12:
    print("Bom dia!")
elif hora < 18:
    print("Boa tarde!")
else:
    print("Boa noite!")
```

### Estrutura de Repetição `while`

O laço `while` executa um bloco de código enquanto uma condição for verdadeira.

```python
soma = 0
numero = int(input("Digite um numero (0 para sair): "))

while numero != 0:
    soma = soma + numero
    numero = int(input("Digite outro numero (0 para sair): "))

print(f"SOMA FINAL = {soma}")
```

### Estrutura de Repetição `for`

O laço `for` em Python é usado para iterar sobre uma sequência (como uma lista, uma string ou um `range`). A função `range(start, stop)` gera uma sequência de números, que é ideal para laços com contagem.

```python
n = int(input("Quantos numeros voce quer somar? "))
soma = 0

for i in range(0, n):
    valor = int(input(f"Digite o valor #{i + 1}: "))
    soma = soma + valor

print(f"SOMA = {soma}")
```

## 📏 Vetores e Matrizes (Listas)

O tipo de dado em Python que mais se assemelha a um vetor ou array é a **lista** (`list`). Listas são coleções ordenadas e mutáveis de itens.

### Vetores (Listas)

Uma forma "pythônica" de inicializar uma lista com valores padrão é usando *list comprehension*.

```python
n = int(input("Quantos numeros voce vai digitar? "))

# Inicializa uma lista com N posições, todas contendo 0.0
# Esta sintaxe é chamada de "list comprehension".
vetor: [float] = [0.0 for x in range(n)]

for i in range(0, n):
    vetor[i] = float(input(f"Digite o numero #{i + 1}: "))

print("
NUMEROS DIGITADOS:")
for numero in vetor:
    print(f"{numero:.1f}")
```

### Matrizes (Listas de Listas)

Uma matriz em Python é implementada como uma lista onde cada elemento é, por sua vez, outra lista.

```python
m = int(input("Quantas linhas tera a matriz? "))
n = int(input("Quantas colunas tera a matriz? "))

# Inicializa uma matriz M x N com zeros usando "nested list comprehension".
matriz: [[int]] = [[0 for x in range(n)] for x in range(m)]

for i in range(0, m):
    for j in range(0, n):
        matriz[i][j] = int(input(f"Elemento [{i},{j}]: "))

print("
MATRIZ DIGITADA:")
for i in range(0, m):
    for j in range(0, n):
        print(f"{matriz[i][j]} ", end="")
    print() # Pula para a próxima linha
```

## 🐞 Depuração (Debugging) em Python

Tanto o PyCharm quanto o VS Code oferecem depuradores visuais excelentes.

### Debugging no PyCharm e VS Code

Os conceitos e atalhos são muito parecidos.

1.  **Habilitar/Desabilitar Breakpoint**: Clique na margem à esquerda do número da linha onde quer que a execução pause. No PyCharm, o atalho é `Ctrl + F8`.
2.  **Iniciar o Debug**:
      * **PyCharm**: Pressione `Shift + F9` ou clique no ícone de inseto.
      * **VS Code**: Pressione `F5` ou vá para a aba "Run and Debug".
3.  **Controlar a Execução**:
      * **Step Over (Passar por cima)**: Executa a linha atual e para na próxima. O atalho costuma ser `F8` no PyCharm e `F10` no VS Code.
4.  **Inspecionar Variáveis**: A aba "Debugger" no PyCharm ou a janela "VARIABLES" no VS Code mostrarão os valores das variáveis em tempo real.

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)

