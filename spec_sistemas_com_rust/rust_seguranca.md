---
layout: default
title: Rust 🦀:
---

# Rust 🦀: 

## Sistemas Seguros e Performáticos

**Bem-vindo(a) à sua jornada definitiva para dominar o Rust\!** 🚀

Este curso foi meticulosamente planejado para transformar você, mesmo sem nenhum conhecimento prévio, em um(a) desenvolvedor(a) Rust proficiente. Vamos explorar desde a sintaxe mais básica até os conceitos avançados que fazem do Rust a linguagem mais amada pelos desenvolvedores, famosa por sua segurança, performance e concorrência sem medo.

Prepare-se para construir software robusto e eficiente\!

### **Módulo 1: A Fundação - Seus Primeiros Passos com Rust 🌍**

Neste módulo, preparamos o terreno. Você instalará tudo o que precisa e escreverá seu primeiro programa em Rust, entendendo o que o torna tão especial.

#### **Aula 1: Por que Rust? E Configuração do Ambiente 🛠️**

  * **O que é Rust?** Uma visão geral da linguagem, sua filosofia e seus principais casos de uso (sistemas embarcados, CLI, WebAssembly, APIs de alta performance).
  * **A Promessa do Rust:** Segurança de memória sem coletor de lixo (garbage collector) e "concorrência sem medo".
  * **Instalando o Rust (Windows e Linux):**
      * O processo unificado com `rustup`, o gerenciador de toolchains do Rust. Executaremos o comando:
        ```bash
        curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
        ```
      * Verificando a instalação (`rustc --version`, `cargo --version`).
  * **Configurando o Editor de Código:**
      * Instalação e configuração do Visual Studio Code (VS Code).
      * Instalando a extensão essencial `rust-analyzer` para autocompletar, análise de código em tempo real e muito mais.

#### **Aula 2: "Olá, Mundo\!" e o Poder do Cargo 📦**

  * **Cargo, o Melhor Amigo do Rustacean:**
      * O que é o Cargo? (Gerenciador de pacotes e sistema de build).
      * Criando seu primeiro projeto: `cargo new ola_rust`.
  * **Anatomia de um Projeto Rust:**
      * Entendendo o arquivo `Cargo.toml` (o manifesto do projeto).
      * Explorando a pasta `src` e o arquivo `main.rs`.
  * **Seu Primeiro Código:**
      * Escrevendo o clássico "Olá, Mundo\!" com a macro `println!`:
        ```rust
        fn main() {
            println!("Olá, Mundo Rust! 🦀");
        }
        ```
  * **Compilando e Executando:**
      * A magia do `cargo run`.
      * A diferença entre `cargo check`, `cargo build` e `cargo run`.

-----

### **Módulo 2: Fundamentos da Linguagem - Os Blocos de Construção 🧱**

Agora que o ambiente está pronto, vamos mergulhar nos conceitos fundamentais da sintaxe e da semântica do Rust.

#### **Aula 3: Variáveis, Mutabilidade e Tipos de Dados Primitivos**

  * **Variáveis com `let`:** A imutabilidade por padrão.
  * **Mutabilidade com `mut`:** Quando e por que permitir que uma variável mude.
  * **Shadowing (Sombreamento):** Reutilizando nomes de variáveis de forma segura.
  * **Constantes (`const`):** Valores que nunca mudam.
  * **Tipos de Dados Escalares:**
      * Inteiros (com sinal `i8...i128`, sem sinal `u8...u128`).
      * Ponto Flutuante (`f32`, `f64`).
      * Booleanos (`bool`).
      * Caracteres (`char`).
  * Exemplo prático: Programa simples que calcula a área de um retângulo. 📐

#### **Aula 4: Funções e Controle de Fluxo**

  * **Definindo Funções:** A palavra-chave `fn`.
  * **Parâmetros e Argumentos:** Passando dados para funções.
  * **Retornando Valores:** A sintaxe de retorno e expressões (a ausência de `;`).
  * **Controle de Fluxo com `if/else`:** Tomando decisões no seu código.
  * **Laços de Repetição:**
      * `loop`: O laço infinito.
      * `while`: Repetindo enquanto uma condição for verdadeira.
      * `for`: O laço mais comum e idiomático em Rust para iterar sobre coleções.
  * Exemplo prático: Gerador da sequência de Fibonacci. 🔢

-----

### **Módulo 3: O Coração do Rust - Ownership e Empréstimos ❤️‍🩹**

Este é o módulo mais importante. Entender estes conceitos é a chave para se tornar um programador Rust eficaz.

#### **Aula 5: Ownership (Posse) - O Conceito Central ©️**

  * **As Três Regras da Posse:**
    1.  Cada valor em Rust tem um "dono" (owner).
    2.  Só pode haver um dono por vez.
    3.  Quando o dono sai do escopo, o valor é "descartado" (dropped).
  * **O que é o Escopo?**
  * **O tipo `String`:** Um exemplo perfeito para entender a posse na *heap*.
  * **Movendo a Posse (Move):** O que acontece quando você atribui uma variável a outra ou a passa para uma função.
  * **Clonando Dados (`.clone()`):** Quando você realmente precisa de uma cópia.
  * Exemplo prático: Demonstração de erros de compilação clássicos ao tentar usar um valor após ele ter sido movido.

#### **Aula 6: Borrowing (Empréstimo) e Referências 🤝**

  * **O problema:** Como usar um valor sem tomar posse dele?
  * **Referências (`&`):** Criando um "empréstimo" de um valor.
  * **Referências Imutáveis (`&T`):** Você pode ter várias, mas não pode alterar o dado.
  * **Referências Mutáveis (`&mut T`):** Você só pode ter UMA por vez em um determinado escopo, e não pode haver referências imutáveis ao mesmo tempo.
  * **A Garantia do Compilador:** Como essas regras previnem *data races* (condições de corrida) em tempo de compilação.
  * **Referências "Dangling" (Penduradas):** O erro que o Rust torna impossível.
  * Exemplo prático: Refatorar o programa da Aula 5 para usar referências e evitar a movimentação de posse.

-----

### **Módulo 4: Estruturando Dados e Comportamentos 🏛️**

Vamos aprender a criar nossos próprios tipos de dados e a organizar nosso código de forma lógica e expressiva.

#### **Aula 7: Structs - Criando Tipos de Dados Personalizados**

  * **Definindo e Instanciando Structs:** Agrupando dados relacionados.
  * **Sintaxe de Atualização de Structs.**
  * **Tuple Structs:** Quando os nomes dos campos não são importantes.
  * **Adicionando Comportamento com Métodos (`impl`):**
      * Métodos que tomam `&self`, `&mut self` ou `self`.
      * Funções Associadas (como "métodos estáticos").
  * Exemplo prático: Modelar um `Usuario` com nome, email e status, e adicionar um método para formatar suas informações. 👤

#### **Aula 8: Enums e o Poder do `match`**

  * **Enums (Enumerações):** Definindo um tipo que pode ser um de vários valores possíveis.
  * **Anexando Dados a Variantes de Enum.**
  * **O `Option<T>` Enum:** O fim dos valores nulos (`null`)\! Lidando com a possível ausência de um valor de forma segura (`Some(T)` ou `None`).
  * **Controle de Fluxo com `match`:** O "switch" superpoderoso do Rust que força a verificação de todos os casos possíveis (exaustividade).
  * **Padrões que Ligam a Valores.**
  * **A sintaxe `if let`:** Uma forma concisa de lidar com um único padrão de `match`.
  * Exemplo prático: Modelar o status de uma requisição web (`Carregando`, `Sucesso(String)`, `Erro(u16)`) e processá-la com `match`. 🌐

-----

### **Módulo 5: Gerenciamento de Projetos e Coleções 📚**

Agora que você tem os fundamentos, vamos aprender a organizar projetos maiores e a usar as estruturas de dados mais comuns.

#### **Aula 9: Organizando Projetos com Módulos**

  * **O Sistema de Módulos:** Como o Rust gerencia a organização do código.
  * **Palavras-chave `mod` e `use`:** Definindo módulos e trazendo caminhos para o escopo.
  * **Separando Módulos em Arquivos e Pastas Diferentes.**
  * **Visibilidade:** O uso de `pub` para criar uma API pública para seu módulo.
  * Exemplo prático: Reestruturar um projeto maior em uma biblioteca (`lib.rs`) e um binário (`main.rs`).

#### **Aula 10: Coleções Comuns**

  * **Vetores (`Vec<T>`):** Uma lista de valores de tamanho dinâmico na heap.
  * **Strings (`String`):** Aprofundando no tipo string, codificação UTF-8 e manipulação.
  * **Hash Maps (`HashMap<K, V>`):** Armazenando dados no formato chave-valor.
  * **Iterando sobre Coleções.**
  * Exemplo prático: Programa que conta a frequência de palavras em um texto usando um `HashMap`. 📊

-----

### **Módulo 6: Tratamento de Erros, Genéricos e Traits 🛡️**

Vamos explorar os padrões idiomáticos do Rust para lidar com erros e escrever código flexível e reutilizável.

#### **Aula 11: Tratamento de Erros Robusto**

  * **`panic!` vs `Result`:** Erros irrecuperáveis vs. erros recuperáveis.
  * **O Enum `Result<T, E>`:** O padrão para funções que podem falhar.
  * **Propagando Erros:** O operador `?` para um código de tratamento de erros limpo e conciso.
  * **Quando usar `unwrap()` e `expect()`:** A importância de usá-los com sabedoria.
  * Exemplo prático: Criar uma função que lê um arquivo e retorna um `Result`, tratando possíveis erros como "arquivo não encontrado". 📂

#### **Aula 12: Tipos Genéricos e Traits**

  * **Tipos Genéricos (`<T>`):** Escrevendo código que opera sobre múltiplos tipos de dados. Em funções, structs e enums.
  * **Traits: Definindo Comportamentos Compartilhados:** Semelhante a interfaces em outras linguagens.
  * **Implementando um Trait em um Tipo.**
  * **Trait Bounds:** Restringindo tipos genéricos para que eles tenham um determinado comportamento.
  * **Derivando Traits úteis (`Debug`, `Clone`, `Copy`, etc.).**
  * Exemplo prático: Criar um trait `Resumo` com um método `resumir()` e implementá-lo para diferentes structs (`Noticia`, `Tweet`). 📝

#### **Aula 13: Lifetimes (Tempos de Vida) em Detalhe ⏳**

  * **Revisitando o Problema:** Garantindo que referências não sobrevivam aos dados aos quais apontam (evitando *dangling references*).
  * **Anotações de Lifetime Genéricas em Funções.**
  * **As Regras de Elisão de Lifetime:** Por que não precisamos escrever lifetimes na maioria das vezes.
  * **Lifetimes em Definições de Structs.**
  * **O Lifetime Estático (`'static`).**
  * Exemplo prático: Escrever uma função que retorna a maior de duas fatias de string (`&str`), exigindo anotações de lifetime explícitas.

-----

### **Módulo 7: Tópicos Avançados e Concorrência 🚀**

Prepare-se para desbloquear todo o poder do Rust com recursos avançados.

#### **Aula 14: Concorrência sem Medo (Fearless Concurrency)**

  * **Threads:** Criando e executando código em paralelo.
  * **Passagem de Mensagens com Canais (Channels):** Uma forma segura de comunicar entre threads.
  * **Estado Compartilhado e Mutexes:**
      * **`Mutex<T>`:** Garantindo que apenas uma thread acesse os dados por vez.
      * **`Arc<T>` (Atomic Reference Counting):** Permitindo que múltiplos donos compartilhem um valor de forma segura entre threads.
  * **A Mágica da Sincronização:** Como os traits `Send` e `Sync` garantem a segurança em tempo de compilação.
  * Exemplo prático: Um programa que baixa e processa múltiplas URLs em paralelo usando threads e canais. ⚡

#### **Aula 15: Automação de Testes e Documentação**

  * **Escrevendo Testes em Rust:**
      * Testes unitários, testes de integração.
      * A macro `#[test]` e o comando `cargo test`.
      * A macro `assert!`.
  * **Documentação que Funciona:**
      * Escrevendo comentários de documentação (`///`).
      * Incluindo exemplos de código nos seus documentos.
      * Gerando um site de documentação profissional com `cargo doc --open`.

#### **Aula 16: Closures, Iteradores e Ponteiros Inteligentes**

  * **Closures:** Funções anônimas que podem capturar seu ambiente.
  * **Iteradores:** Aprofundando no trait `Iterator` e seus métodos poderosos (`map`, `filter`, `fold`, etc.).
  * **Ponteiros Inteligentes (Smart Pointers):**
      * `Box<T>`: Para alocar dados na heap.
      * `Rc<T>` (Reference Counting): Múltiplos donos em um único thread.
      * `RefCell<T>` e o padrão de "empréstimo interno".

-----

### **Módulo 8: Projeto Final - Construindo uma Aplicação Real 🏆**

Vamos aplicar tudo o que aprendemos para construir um projeto do mundo real do início ao fim.

#### **Projeto: Ferramenta de Linha de Comando (CLI) para Gerenciamento de Tarefas**

  * **Objetivo:** Criar uma CLI completa chamada `tarefas` para adicionar, listar, concluir e remover itens de uma lista de afazeres.
  * **Funcionalidades:**
      * `tarefas adicionar "Comprar leite"`
      * `tarefas listar`
      * `tarefas concluir 1`
      * `tarefas remover 1`
  * **Conceitos Aplicados:**
      * Uso do crate `clap` para parsear argumentos da linha de comando.
      * Uso do crate `serde` e `serde_json` para salvar e carregar as tarefas em um arquivo JSON.
      * Estruturação do código com `structs` e `enums` para modelar as tarefas.
      * Tratamento de erros robusto com `Result`.
      * Organização em módulos.
      * Escrita de testes para garantir a corretude da lógica.

Ao final deste curso, você não apenas entenderá a sintaxe do Rust, mas também pensará como um "Rustacean", escrevendo código seguro, performático e elegante. Parabéns por iniciar esta jornada\! 🎉

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)

