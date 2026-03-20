# Linguagem C\# 💎

Bem-vindo ao guia de C\# (pronuncia-se "C Sharp"), uma linguagem de programação moderna, orientada a objetos e desenvolvida pela Microsoft. Ela é a principal linguagem da plataforma **.NET**, sendo amplamente utilizada para criar aplicações web, jogos (com a engine Unity), serviços de backend, aplicações desktop e muito mais.

## 🛠️ Instalação e Configuração do Ambiente

Para começar a desenvolver em C\#, você precisa do **.NET SDK (Software Development Kit)**, que inclui o compilador, bibliotecas e o runtime.

1.  **Instale o .NET SDK**:

      * Faça o download da versão mais recente (ou de uma versão LTS - Long-Term Support) do .NET SDK no [site oficial da Microsoft](https://dotnet.microsoft.com/download).
      * Execute o instalador, que já configurará o `Path` do sistema automaticamente.
      * Para verificar a instalação, abra um novo terminal e digite `dotnet --version`.

2.  **Escolha uma IDE (Ambiente de Desenvolvimento Integrado)**:
    O material original focava no Visual Studio 2019, mas vamos abordar as opções mais modernas.

    ### Opção 1: Visual Studio Community (Recomendado)

      * Baixe o [Visual Studio Community](https://visualstudio.microsoft.com/downloads/) (versão gratuita para estudantes e desenvolvedores individuais).
      * Durante a instalação, na aba "Workloads", selecione a carga de trabalho **".NET desktop development"** para garantir que todas as ferramentas para C\# sejam instaladas.

    ### Opção 2: Visual Studio Code

      * Instale o [Visual Studio Code](https://code.visualstudio.com/).
      * Na aba de extensões, instale o pacote **"C\# Dev Kit"** da Microsoft. Ele fornece um ambiente leve e poderoso para o desenvolvimento .NET.

### 🚀 Seu Primeiro Programa em C\#

A estrutura de um programa C\# é organizada em `namespaces` e `classes`.

```csharp
// Importa o namespace System, que contém funcionalidades essenciais como o Console.
using System;

// Namespace é usado para organizar o código e evitar conflitos de nomes.
namespace CursoCSharp
{
    // A classe é um contêiner para dados e métodos.
    class Program
    {
        // O método Main é o ponto de entrada de qualquer aplicação C#.
        static void Main(string[] args)
        {
            // Imprime uma linha de texto no console.
            Console.WriteLine("Ola, Universo C#!");
        }
    }
}
```

**Nota sobre C\# Moderno**: Versões recentes do C\# introduziram "top-level statements", que permitem escrever código simples diretamente em um arquivo, sem a necessidade de declarar explicitamente a classe `Program` e o método `Main`. Isso é ótimo para iniciantes e scripts rápidos.

## 📊 Tipos de Dados e Variáveis

Os tipos de dados em C\# são robustos e bem definidos.

| Significado | Tipo em C\# | Valor Padrão | Observação |
| :--- | :--- | :--- | :--- |
| Número Inteiro | `int` | 0 | Tipo padrão para inteiros de 32 bits. Para números maiores, use `long` (64 bits). |
| Número de Ponto Flutuante | `double` | 0.0 | Tipo padrão para números reais com precisão dupla. |
| Um Único Caractere | `char` | `'\0'` | Armazena um caractere Unicode, sempre entre **aspas simples**. |
| Texto | `string` | `null` | Um tipo por referência para sequências de caracteres, declarado com **aspas duplas**. |
| Valor Lógico | `bool` | `false` | Aceita apenas os valores `true` ou `false`. |

## 📝 Declaração e Atribuição de Variáveis

A declaração e atribuição de variáveis em C\# é direta. Para formatação de texto, C\# se destaca com a **interpolação de strings**, que é uma forma mais limpa e legível de construir strings com variáveis.

```csharp
using System;
using System.Globalization; // Necessário para usar o CultureInfo.

namespace CursoCSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            // Declaração e inicialização de variáveis.
            int idade = 42;
            double salario = 9500.75;
            double altura = 1.78;
            char genero = 'M';
            string nome = "Lucas Almeida";

            // Usando interpolação de string ($) para uma saída mais limpa.
            Console.WriteLine($"NOME = {nome}");
            Console.WriteLine($"IDADE = {idade}");
            Console.WriteLine($"GENERO = {genero}");

            // A formatação de casas decimais é feita com :F2 dentro das chaves.
            Console.WriteLine($"ALTURA = {altura:F2}");

            // Para garantir o ponto como separador decimal, usa-se CultureInfo.InvariantCulture.
            Console.WriteLine($"SALARIO = {salario.ToString("F2", CultureInfo.InvariantCulture)}");
        }
    }
}
```

## 🔢 Operadores

Os operadores em C\# são os mesmos encontrados em Java, C e C++, seguindo a mesma precedência e significado.

### Aritméticos

| Operador | Significado |
| :---: | :--- |
| `+` | Adição |
| `-` | Subtração |
| `*` | Multiplicação |
| `/` | Divisão |
| `%` | Resto da divisão ("mod") |

### Comparativos

| Operador | Significado |
| :---: | :--- |
| `<` | Menor que |
| `>` | Maior que |
| `<=` | Menor ou igual a |
| `>=` | Maior ou igual a |
| `==` | Igual a |
| `!=` | Diferente de |

### Lógicos

| Operador | Significado |
| :---: | :--- |
| `&&` | E |
| `||` | OU |
| `!` | NÃO |

## 📥 Entrada de Dados

Em C\#, a entrada de dados pelo console é feita com `Console.ReadLine()`. Este método sempre retorna os dados como uma `string`. Portanto, é necessário **converter (fazer o parse)** essa string para o tipo de dado desejado.

  * **Converter para `int`**: `int.Parse(Console.ReadLine())`
  * **Converter para `double`**: `double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture)`
  * **Converter para `char`**: `char.Parse(Console.ReadLine())`

O uso de `CultureInfo.InvariantCulture` ao converter para `double` é uma boa prática para garantir que o programa interprete o ponto (`.`) como separador decimal, independentemente da configuração regional do sistema operacional.

```csharp
using System;
using System.Globalization;

namespace CursoCSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            string nomeCompleto;
            int idade;
            double salario;
            char genero;

            Console.Write("Digite seu nome completo: ");
            nomeCompleto = Console.ReadLine(); // Lê a linha inteira como string.

            Console.Write("Digite sua idade: ");
            idade = int.Parse(Console.ReadLine()); // Lê a string e converte para int.

            Console.Write("Digite seu salario: ");
            // Lê a string e converte para double, usando o ponto como separador.
            salario = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);

            Console.Write("Digite seu genero (F/M): ");
            genero = char.Parse(Console.ReadLine()); // Lê a string e converte para char.

            Console.WriteLine("\n--- DADOS REGISTRADOS ---");
            Console.WriteLine($"Nome: {nomeCompleto}");
            Console.WriteLine($"Idade: {idade}");
            Console.WriteLine($"Salario: {salario.ToString("F2", CultureInfo.InvariantCulture)}");
            Console.WriteLine($"Genero: {genero}");
        }
    }
}
```

## 🔀 Estruturas de Controle

### Estrutura Condicional (`if-else`)

Permite a execução de código com base em uma ou mais condições.

```csharp
// ... (dentro do método Main)
Console.Write("Digite a hora atual (0-23): ");
int hora = int.Parse(Console.ReadLine());

if (hora < 12)
{
    Console.WriteLine("Bom dia!");
}
else if (hora < 18)
{
    Console.WriteLine("Boa tarde!");
}
else
{
    Console.WriteLine("Boa noite!");
}
```

### Estrutura de Repetição `while`

Executa um bloco de código repetidamente enquanto uma condição for verdadeira.

```csharp
// ... (dentro do método Main)
Console.Write("Digite um numero (0 para sair): ");
int numero = int.Parse(Console.ReadLine());
int soma = 0;

while (numero != 0)
{
    soma = soma + numero;
    Console.Write("Digite outro numero (0 para sair): ");
    numero = int.Parse(Console.ReadLine());
}

Console.WriteLine($"SOMA FINAL = {soma}");
```

### Estrutura de Repetição `for`

Ideal para laços com um número de iterações predefinido.

```csharp
// ... (dentro do método Main)
Console.Write("Quantos numeros voce quer somar? ");
int N = int.Parse(Console.ReadLine());
int soma = 0;

for (int i = 0; i < N; i++)
{
    Console.Write($"Digite o valor #{i + 1}: ");
    int valor = int.Parse(Console.ReadLine());
    soma = soma + valor;
}

Console.WriteLine($"SOMA = {soma}");
```

## 📏 Vetores e Matrizes

### Vetores (Arrays)

Em C\#, vetores são coleções de tamanho fixo de um mesmo tipo de dado.

```csharp
// ... (dentro do método Main)
Console.Write("Quantos numeros voce vai digitar? ");
int N = int.Parse(Console.ReadLine());

// Declaração e instanciação de um vetor de doubles com N posições.
double[] vetor = new double[N];

for (int i = 0; i < N; i++)
{
    Console.Write($"Digite o numero #{i + 1}: ");
    vetor[i] = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);
}

Console.WriteLine("\nNUMEROS DIGITADOS:");
for (int i = 0; i < N; i++)
{
    Console.WriteLine(vetor[i].ToString("F1", CultureInfo.InvariantCulture));
}
```

### Matrizes (Arrays Bidimensionais)

C\# tem uma sintaxe própria e simplificada para matrizes, usando uma vírgula para separar as dimensões.

```csharp
// ... (dentro do método Main)
Console.Write("Quantas linhas tera a matriz? ");
int M = int.Parse(Console.ReadLine());
Console.Write("Quantas colunas tera a matriz? ");
int N = int.Parse(Console.ReadLine());

// Declaração e instanciação de uma matriz M x N.
int[,] matriz = new int[M, N];

for (int i = 0; i < M; i++)
{
    for (int j = 0; j < N; j++)
    {
        Console.Write($"Elemento [{i},{j}]: ");
        matriz[i, j] = int.Parse(Console.ReadLine());
    }
}

Console.WriteLine("\nMATRIZ DIGITADA:");
for (int i = 0; i < M; i++)
{
    for (int j = 0; j < N; j++)
    {
        Console.Write(matriz[i, j] + " ");
    }
    Console.WriteLine(); // Pula para a próxima linha.
}
```

## 🐞 Depuração (Debugging) em C\#

Depurar código C\# é uma tarefa facilitada pelas excelentes ferramentas disponíveis no Visual Studio e no VS Code.

### Debugging no Visual Studio e VS Code

Os atalhos e conceitos são muito semelhantes e padronizados.

1.  **Habilitar/Desabilitar Breakpoint**: Pressione `F9` na linha desejada para criar um ponto de parada.
2.  **Iniciar o Debug**: Pressione `F5` para iniciar o programa em modo de depuração. A execução pausará no primeiro breakpoint encontrado.
3.  **Controlar a Execução**:
      * **Step Over (Passar por cima)**: Pressione `F10` para executar a linha atual e parar na próxima.
      * **Stop (Parar)**: Pressione `Shift + F5` para encerrar a sessão de depuração.
4.  **Inspecionar Variáveis**: Na parte inferior da tela, abas como "Locals" (Variáveis Locais) no Visual Studio ou a janela "VARIABLES" no VS Code exibirão os valores atuais das variáveis, permitindo que você os monitore em tempo real.

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)
