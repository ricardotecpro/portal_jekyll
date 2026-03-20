---
layout: default
title: Linguagem Rust 🦀
---

# Linguagem Rust 🦀

Bem-vindo ao guia da linguagem Rust, uma linguagem de programação de sistemas focada em três objetivos principais: **segurança, velocidade e concorrência**. Rust alcança segurança de memória sem a necessidade de um *garbage collector* (coletor de lixo), utilizando um sistema inovador de **propriedade (ownership)** e **empréstimo (borrowing)**. Isso permite que Rust seja tão rápido quanto C/C++, mas com garantias de segurança que previnem classes inteiras de bugs.

## 🛠️ Instalação e Configuração do Ambiente

O ecossistema de Rust é gerenciado pela ferramenta `rustup`, que instala o compilador (`rustc`), o gerenciador de pacotes e build (`cargo`) e a documentação.

1.  **Instale o Rust**:

    * Visite o [site oficial do Rust](https://www.rust-lang.org/tools/install) e siga as instruções para o seu sistema operacional. O comando fornecido no site baixa e executa o script `rustup-init`, que cuida de toda a instalação.
    * `rustup` irá configurar automaticamente o `PATH` do sistema. Após a instalação, abra um novo terminal e verifique as versões com `rustc --version` e `cargo --version`.

2.  **Escolha uma IDE (Ambiente de Desenvolvimento Integrado)**:

    ### Opção 1: Visual Studio Code (Recomendado)

    * Instale o [Visual Studio Code](https://code.visualstudio.com/).
    * Na aba de extensões, instale a extensão **`rust-analyzer`**. Ela oferece um suporte de primeira linha para Rust, com autocompletar, análise de código em tempo real e integração com o `cargo`.

    ### Opção 2: CLion com o plugin Rust

    * Para quem prefere uma IDE mais robusta da JetBrains, o [RustRover](https://www.jetbrains.com/rust/) ou [CLion](https://www.jetbrains.com/clion/) com o plugin oficial do Rust é uma excelente alternativa.

### 🚀 Seu Primeiro Programa em Rust

A ferramenta `cargo` facilita a criação e gerenciamento de projetos.

1.  **Crie um novo projeto**: No terminal, execute `cargo new ola_rust`.
2.  **Entre no diretório**: `cd ola_rust`.
3.  O `cargo` cria um arquivo `src/main.rs` com o seguinte conteúdo:

<!-- end list -->

```rust
// A função main() é o ponto de entrada de todo programa executável em Rust.
fn main() {
    // println! é uma macro (indicado pela '!') que imprime texto no console.
    println!("Olá, Universo Rust!");
}
```

4.  **Compile e execute o projeto**: No terminal, dentro do diretório do projeto, execute `cargo run`.

## 📊 Tipos de Dados e Variáveis

Rust é uma linguagem **estaticamente e fortemente tipada**. Uma de suas características mais importantes é a **imutabilidade por padrão**.

* **Imutabilidade**: Variáveis declaradas com `let` são imutáveis. Para torná-las mutáveis, você deve usar a palavra-chave `mut`.

| Significado | Tipo em Rust | Observação |
| :--- | :--- | :--- |
| Número Inteiro | `i32` | Tipo inteiro de 32 bits com sinal. Outros tipos incluem `i8`, `i64`, `u8` (sem sinal), etc. |
| Número de Ponto Flutuante | `f64` | Padrão para números reais, com precisão dupla de 64 bits. |
| Texto (String) | `String` | Um tipo de string que pode crescer e ser modificado, alocado na *heap*. `&str` é uma "fatia" de string imutável. |
| Valor Lógico | `bool` | Aceita apenas os valores `true` ou `false`. |
| Um Único Caractere | `char` | Representa um único caractere Unicode, declarado com **aspas simples**. |

## 📝 Declaração e Formatação de Saída

A declaração de variáveis com `let` e a formatação com a macro `println!` são centrais em Rust.

```rust
fn main() {
    // 'let' cria uma variável imutável.
    let nome: &str = "Helena Vargas";
    // 'let mut' cria uma variável mutável.
    let mut idade: i32 = 29;
    let salario: f64 = 14200.50;
    let is_gerente: bool = false;

    // A formatação é feita com placeholders {} dentro da string.
    println!("NOME = {}", nome);
    println!("IDADE = {}", idade);

    // Para formatar um float com 2 casas decimais, usa-se {:.2}
    println!("SALÁRIO = {:.2}", salario);
    println!("É GERENTE? = {}", is_gerente);

    // Modificando uma variável mutável
    idade = 30;
    println!("NOVA IDADE = {}", idade);
}
```

## 🔢 Operadores

Os operadores em Rust são padrão e seguem a convenção da família C.

### Aritméticos

| Operador | Significado |
| :---: | :--- |
| `+` | Adição |
| `-` | Subtração |
| `*` | Multiplicação |
| `/` | Divisão |
| `%` | Resto da divisão (módulo) |

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

| Operador | Significado |
| :---: | :--- |
| `&&` | E |
| `||` | OU |
| `!` | NÃO |

## 📥 Entrada de Dados

A leitura de dados do usuário em Rust é feita através do módulo `std::io` e exige tratamento de erros explícito. O compilador de Rust ajuda a garantir que você não se esqueça de tratar possíveis falhas.

```rust
use std::io; // Importa o módulo de entrada e saída.

fn main() {
    println!("Digite seu nome completo:");
    // Declara uma nova String mutável para armazenar a entrada.
    let mut nome = String::new();
    // Lê a linha da entrada padrão.
    io::stdin()
        .read_line(&mut nome)
        .expect("Falha ao ler a linha"); // .expect() para o programa se ocorrer um erro.
    // Remove espaços em branco e a quebra de linha da entrada.
    nome = nome.trim().to_string();

    println!("Digite sua idade:");
    let mut idade_str = String::new();
    io::stdin()
        .read_line(&mut idade_str)
        .expect("Falha ao ler a linha");
    // Converte a string para um número, tratando o erro.
    let idade: i32 = idade_str
        .trim()
        .parse()
        .expect("Por favor, digite um número!");

    println!("
--- DADOS REGISTRADOS ---");
    println!("Nome: {}", nome);
    println!("Idade: {}", idade);
}
```

## 🔀 Estruturas de Controle

Rust usa chaves `{}` para delimitar blocos de código.

### Estrutura Condicional (`if/else if/else`)

Em Rust, a condição de um `if` não precisa de parênteses. Além disso, `if` é uma expressão, o que significa que pode retornar um valor.

```rust
let idade = 29;
// 'if' pode ser usado para atribuir um valor a uma variável.
let status = if idade >= 18 {
    "Adulto"
} else {
    "Menor de idade"
};
println!("Status: {}", status); // Status: Adulto
```

### Estruturas de Repetição

Rust oferece três tipos de laços:

**1. `loop` (Laço Infinito)**: Executa para sempre, a menos que seja interrompido por um `break`.

```rust
let mut contador = 0;
loop {
    println!("Repetindo...");
    contador += 1;
    if contador == 3 {
        break; // Para o laço
    }
}
```

**2. `while` (Laço Condicional)**: Executa enquanto uma condição for verdadeira.

```rust
let mut numero = 3;
while numero != 0 {
    println!("{}!", numero);
    numero -= 1;
}
println!("LANÇAR!");
```

**3. `for` (Laço de Iteração)**: O mais comum, usado para iterar sobre uma coleção ou um `range`.

```rust
// Itera de 1 até 4 (o 5 não é incluído).
for i in 1..5 {
    println!("O valor é: {}", i);
}
```

## 📏 Vetores (Arrays e Vectors)

Assim como Go, Rust distingue entre coleções de tamanho fixo e dinâmico.

* **Array**: Tamanho fixo, conhecido em tempo de compilação. Ex: `let a: [i32; 3] = [1, 2, 3];`.
* **Vector (`Vec<T>`)**: Uma "lista" que pode crescer e diminuir de tamanho, similar ao `std::vector` do C++ ou `ArrayList` do Java. É a escolha mais comum.

### Vectors

```rust
fn main() {
    // Cria um novo vetor mutável e vazio.
    let mut numeros: Vec<i32> = Vec::new();

    // Adiciona elementos ao vetor.
    numeros.push(10);
    numeros.push(20);
    numeros.push(30);

    println!("Vetor: {:?}", numeros); // {:?} é um formatador de debug.

    // Iterando sobre o vetor
    for numero in &numeros { // & para emprestar o vetor sem mover a propriedade
        println!("Número: {}", numero);
    }
}
```

### Matrizes (Vetores de Vetores)

Uma matriz em Rust é tipicamente representada por um vetor, onde cada elemento é outro vetor.

```rust
// Uma matriz 2x3
let matriz: Vec<Vec<i32>> = vec![
    vec![1, 2, 3],
    vec![4, 5, 6],
];
println!("Elemento (1,1): {}", matriz[1][1]); // Acessa o elemento na segunda linha, segunda coluna (valor 5)
```

## 🐞 Depuração (Debugging) em Rust

### Debugging no VS Code

1.  Além do `rust-analyzer`, instale a extensão **`CodeLLDB`** ou **`C/C++`** da Microsoft, que fornecem o depurador.
2.  Abra seu projeto `cargo` no VS Code.
3.  Vá para o seu arquivo `src/main.rs` e clique na margem à esquerda de uma linha para adicionar um **breakpoint**.
4.  Pressione `F5`. O VS Code usará o `cargo` para compilar seu programa em modo de depuração e, em seguida, iniciará o depurador.
5.  A execução pausará no breakpoint, permitindo que você inspecione variáveis, execute o código passo a passo (`F10`) e utilize o console de depuração.

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)

