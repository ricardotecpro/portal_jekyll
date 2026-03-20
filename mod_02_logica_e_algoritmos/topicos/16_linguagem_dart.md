---
layout: default
title: 🐦 Linguagem Dart
---

## 🐦 Linguagem Dart

**Dart** é uma linguagem de programação moderna, flexível e otimizada, desenvolvida pelo Google. É a linguagem utilizada pelo framework Flutter.

### 📊 Tipos de Dados e Variáveis em Dart

Dart é uma linguagem **estaticamente tipada**, mas possui um poderoso sistema de **inferência de tipo** com a palavra-chave `var`.

  * `var`: Declara uma variável cujo tipo é inferido pelo compilador. Uma vez inferido, o tipo não pode mudar.
  * `final`: Declara uma variável que só pode ser definida uma vez (constante em tempo de execução).
  * `const`: Declara uma variável que é uma constante em tempo de compilação.

| Significado | Tipo em Dart | Observação |
| :--- | :--- | :--- |
| Número Inteiro | `int` | Números inteiros sem parte decimal. |
| Número de Ponto Flutuante | `double` | Números com casas decimais. |
| Texto | `String` | Uma sequência de caracteres, declarada com aspas simples ou duplas. |
| Valor Lógico | `bool` | Aceita apenas os valores `true` ou `false`. |
| Listas (Arrays) | `List` | Uma coleção ordenada de itens. Ex: `List<int>`. |
| Mapas | `Map` | Uma coleção de pares chave-valor. Ex: `Map<String, int>`. |

### 📝 Declaração e Saída de Dados

Em Dart, a interpolação de strings é a maneira mais comum de formatar texto. A função `print()` é usada para depuração e imprime no console.

```dart
// A função print() é usada para depuração e imprime no console de depuração.
void VariaveisExemplo() {
  final String nome = "Rafael Mendes"; // 'final' porque o nome não mudará.
  var idade = 25; // O tipo 'int' é inferido.
  var altura = 1.80; // O tipo 'double' é inferido.
  var isDesenvolvedor = true; // O tipo 'bool' é inferido.

  // Usando interpolação de string ($) para formatar a saída.
  print('NOME = $nome');
  print('IDADE = $idade');
  // Para formatar um double, podemos usar o método .toStringAsFixed().
  print('ALTURA = ${altura.toStringAsFixed(2)}');
  print('É DESENVOLVEDOR? = $isDesenvolvedor');
}
```

### 🔢 Operadores

#### Operadores Aritméticos

| Operador | Significado |
| :---: | :--- |
| `+` | Adição |
| `-` | Subtração |
| `*` | Multiplicação |
| `/` | Divisão |
| `~/` | Divisão inteira |
| `%` | Resto da divisão (módulo) |

#### Operadores de Igualdade e Relacionais

| Operador | Significado |
| :---: | :--- |
| `==` | Igual a |
| `!=` | Diferente de |
| `>` | Maior que |
| `<` | Menor que |
| `>=` | Maior ou igual a |
| `<=` | Menor ou igual a |

#### Operadores Lógicos

| Operador | Significado |
| :---: | :--- |
| `&&` | E |
| `||` | OU |
| `!` | NÃO |

#### Operadores Especiais de Dart

  * `??` (Null Coalescing): `var nome = nomeDoUsuario ?? "Convidado";` (Se `nomeDoUsuario` for nulo, use "Convidado").
  * `?.` (Null-aware access): `print(usuario?.email);` (Acesse `email` somente se `usuario` não for nulo, senão retorne `null`).

### 🔀 Estruturas de Controle

#### Estrutura Condicional (`if/else`)

```dart
var idade = 25;
if (idade >= 18) {
  print("É maior de idade.");
} else {
  print("É menor de idade.");
}
```

#### Estruturas de Repetição

**`for` (Laço Clássico):**

```dart
for (int i = 1; i <= 5; i++) {
  print('Número: $i');
}
```

**`for-in` (Para Coleções):**

```dart
var nomes = ['Rafael', 'Helena', 'Gabriel'];
for (var nome in nomes) {
  print(nome);
}
```

### 📏 Estruturas de Dados (Listas e Mapas)

#### Listas

As listas em Dart são o equivalente a arrays ou vetores.

```dart
// Cria uma lista de inteiros.
var numeros = <int>[10, 20, 30];
// Adiciona um novo elemento.
numeros.add(40);
// Acessa um elemento pelo índice.
print(numeros[1]); // Imprime 20
```

#### Mapas

Mapas são coleções de pares chave-valor.

```dart
var pontuacoes = <String, int>{
  'Rafael': 100,
  'Helena': 95,
};
// Adiciona um novo par.
pontuacoes['Gabriel'] = 98;
// Acessa um valor pela chave.
print(pontuacoes['Rafael']); // Imprime 100
```

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)

