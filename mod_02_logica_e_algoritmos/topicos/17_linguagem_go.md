# Linguagem Go (Golang) 🐹

Bem-vindo ao guia da linguagem Go, uma linguagem de programação de código aberto criada pelo Google. O Go foi projetado para ser simples, eficiente, legível e altamente performático, com um foco especial em programação concorrente (execução de múltiplas tarefas simultaneamente). É amplamente utilizado na construção de microsserviços, ferramentas de linha de comando, processamento de dados e infraestrutura de backend.

## 🛠️ Instalação e Configuração do Ambiente

Para começar a programar em Go, você precisa do conjunto de ferramentas oficial da linguagem.

1.  **Instale o Go**:

    * Faça o download do instalador apropriado para o seu sistema operacional a partir do [site oficial do Go](https://go.dev/dl/).
    * Execute o instalador. Ele cuidará da configuração das variáveis de ambiente necessárias, como `GOPATH` e a adição do Go ao `PATH` do sistema.
    * Para verificar se a instalação foi bem-sucedida, abra um novo terminal e execute o comando `go version`.

2.  **Escolha uma IDE (Ambiente de Desenvolvimento Integrado)**:

    ### Opção 1: Visual Studio Code (Recomendado)

    * Instale o [Visual Studio Code](https://code.visualstudio.com/).
    * Na aba de extensões, instale a extensão **"Go"** oficial, publicada pela equipe do Go no Google. Ela oferece um suporte excelente, incluindo preenchimento automático, formatação e depuração.

    ### Opção 2: GoLand

    * Baixe o [GoLand](https://www.jetbrains.com/go/), uma IDE da JetBrains totalmente dedicada ao desenvolvimento em Go. É uma ferramenta extremamente poderosa, com recursos avançados de análise de código e refatoração (similar ao PyCharm para Python ou IntelliJ para Java).

### 🚀 Seu Primeiro Programa em Go

A estrutura de um programa Go é simples e organizada em pacotes. Todo programa executável deve ter um pacote `main` e uma função `main`.

```go
// Todo arquivo Go pertence a um pacote. O pacote 'main' é especial: ele define um programa executável.
package main

// A declaração 'import' lista os pacotes que o programa usará. "fmt" é o pacote para formatação de I/O.
import "fmt"

// A função 'main' é o ponto de entrada do programa.
func main() {
	// A função Println do pacote fmt imprime uma linha no console.
	fmt.Println("Ola, Universo Go!")
}
```

## 📊 Tipos de Dados e Variáveis

Go é uma linguagem **estaticamente tipada**, o que significa que o tipo de uma variável é conhecido em tempo de compilação.

| Significado | Tipo em Go | Observação |
| :--- | :--- | :--- |
| Número Inteiro | `int` | O tamanho (32 ou 64 bits) depende da arquitetura do sistema. |
| Número de Ponto Flutuante | `float64` | O tipo padrão para números reais, oferecendo precisão dupla. |
| Texto | `string` | Representa uma sequência de caracteres. Strings em Go são imutáveis. |
| Valor Lógico | `bool` | Aceita apenas os valores `true` ou `false`. |

### Formas de Declaração

Go oferece duas maneiras principais de declarar variáveis:

1.  **Declaração com `var`**: `var nome string = "Mariana"`
2.  **Declaração Curta (`:=`)**: `idade := 33`

A declaração curta é mais comum e idiomática em Go. Ela infere o tipo da variável a partir do valor atribuído e só pode ser usada dentro de funções.

## 📝 Declaração e Formatação de Saída

Para exibir dados formatados, o pacote `fmt` oferece funções semelhantes às da linguagem C.

* `fmt.Println()`: Imprime os itens e adiciona uma nova linha.
* `fmt.Printf()`: Imprime uma string formatada usando "verbos" de formatação.

**Verbos de formatação comuns:**

* `%s` para strings
* `%d` para inteiros
* `%.2f` para floats com 2 casas decimais
* `%t` para booleanos
* `%v` para o valor em um formato padrão

<!-- end list -->

```go
package main

import "fmt"

func main() {
	// Usando a declaração curta (:=)
	nome := "Mariana Rocha"
	idade := 33
	salario := 12500.00
	isRemoto := true

	// Usando Printf para formatação controlada
	fmt.Printf("NOME = %s\n", nome)
	fmt.Printf("IDADE = %d\n", idade)
	fmt.Printf("SALARIO = %.2f\n", salario)
	fmt.Printf("TRABALHO REMOTO? = %t\n", isRemoto)
}
```

## 🔢 Operadores

Os operadores em Go são diretos e seguem o padrão da família de linguagens C.

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

A entrada de dados em Go é mais verbosa, pois exige o tratamento explícito de erros. A abordagem padrão usa os pacotes `bufio` para ler a entrada e `strconv` para converter a string para outros tipos.

```go
package main

import (
	"bufio" // Para leitura de buffer
	"fmt"
	"os"      // Para acessar a entrada padrão (teclado)
	"strconv" // Para conversão de strings
	"strings" // Para manipulação de strings
)

func main() {
	// Cria um leitor para a entrada padrão (stdin).
	reader := bufio.NewReader(os.Stdin)

	fmt.Print("Digite seu nome completo: ")
	nome, _ := reader.ReadString('\n') // Lê até a quebra de linha
	nome = strings.TrimSpace(nome)     // Remove espaços em branco e a quebra de linha

	fmt.Print("Digite sua idade: ")
	idadeStr, _ := reader.ReadString('\n')
	idade, _ := strconv.Atoi(strings.TrimSpace(idadeStr)) // Converte string para int

	fmt.Print("Digite seu salario: ")
	salarioStr, _ := reader.ReadString('\n')
	salario, _ := strconv.ParseFloat(strings.TrimSpace(salarioStr), 64) // Converte para float64

	fmt.Println("\n--- DADOS REGISTRADOS ---")
	fmt.Printf("Nome: %s\n", nome)
	fmt.Printf("Idade: %d\n", idade)
	fmt.Printf("Salario: %.2f\n", salario)
}
```

**Nota sobre Erros**: O `_` nos exemplos acima está ignorando o valor de erro que as funções de leitura e conversão retornam. Em código de produção, é crucial tratar esses erros.

## 🔀 Estruturas de Controle

Go usa chaves `{}` para delimitar blocos.

### Estrutura Condicional (`if/else if/else`)

```go
//...
if idade < 18 {
	fmt.Println("Menor de idade")
} else if idade >= 18 && idade < 60 {
	fmt.Println("Adulto")
} else {
	fmt.Println("Idoso")
}
```

### Estrutura de Repetição `for`

Go possui apenas uma estrutura de laço: o `for`, que pode ser usado de três maneiras diferentes.

**1. Laço `for` no estilo C:**

```go
soma := 0
for i := 0; i < 5; i++ {
	soma += i
}
fmt.Printf("Soma (estilo C): %d\n", soma)
```

**2. Laço `for` no estilo `while`:**

```go
n := 5
for n > 0 {
	fmt.Printf("n = %d\n", n)
	n--
}
```

**3. Laço `for` para iteração (estilo `for-each`):**

```go
nomes := []string{"Ana", "Carlos", "Beatriz"}
for indice, nome := range nomes {
	fmt.Printf("Indice: %d, Nome: %s\n", indice, nome)
}
```

## 📏 Vetores (Arrays e Slices)

Go faz uma distinção importante entre Arrays e Slices.

* **Array**: Uma coleção de tamanho **fixo**. Ex: `var meuArray [5]int`. É raramente usado diretamente.
* **Slice**: Uma visão dinâmica e flexível de um array subjacente. É a estrutura de dados mais comum em Go para listas.

### Slices

```go
package main

import "fmt"

func main() {
	var n int
	fmt.Print("Quantos numeros voce vai digitar? ")
	fmt.Scanln(&n) // fmt.Scanln é outra forma de ler entrada simples.

	// Cria um slice de floats com tamanho e capacidade n.
	vetor := make([]float64, n)

	for i := 0; i < n; i++ {
		fmt.Printf("Digite o numero #%d: ", i+1)
		fmt.Scanln(&vetor[i])
	}

	fmt.Println("\nNUMEROS DIGITADOS:")
	for _, numero := range vetor { // _ ignora o índice
		fmt.Printf("%.1f\n", numero)
	}
}
```

### Matrizes (Slices de Slices)

Uma matriz em Go é implementada como um slice, onde cada elemento é outro slice.

```go
//...
m := 2
n := 3
matriz := make([][]int, m) // Cria um slice com m "linhas"

for i := 0; i < m; i++ {
	matriz[i] = make([]int, n) // Cria a "coluna" (um slice de n inteiros) para cada linha
	for j := 0; j < n; j++ {
		matriz[i][j] = i + j
	}
}
fmt.Println("Matriz:", matriz) // Saída: [[0 1 2] [1 2 3]]
```

## 🐞 Depuração (Debugging) em Go

A depuração em Go é feita com a ferramenta **Delve**, que se integra perfeitamente com as IDEs.

### Debugging no VS Code

1.  A extensão "Go" do VS Code pedirá para instalar o Delve na primeira vez que você tentar depurar. Aceite a instalação.
2.  Abra seu arquivo `.go`.
3.  Clique na margem à esquerda de uma linha para adicionar um **breakpoint**.
4.  Pressione `F5` para iniciar o depurador.
5.  O VS Code iniciará a sessão de depuração, pausando no breakpoint e permitindo que você inspecione variáveis, execute o código passo a passo (`F10`) e veja a pilha de chamadas.

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)
