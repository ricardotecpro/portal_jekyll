# Linguagem C++ 💻

Bem-vindo ao guia de C++, uma evolução da linguagem C com recursos poderosos como orientação a objetos, strings nativas e um sistema de entrada e saída mais robusto. Este material é ideal para quem já tem noções de lógica e busca dominar os fundamentos do C++.

## 🛠️ Instalação e Configuração do Ambiente (VS Code)

Assim como em C, para programar em C++ você precisa de um **compilador** e de um **IDE**. O compilador para C++ que usaremos é o **g++**, que também faz parte do pacote **MinGW**.

O processo de instalação é o mesmo do guia de C:

1.  **Instale o Compilador (MinGW-w64)**: Siga as instruções para instalar o MinGW e adicionar sua pasta `bin` à variável de ambiente `Path` do Windows. Isso dará ao sistema acesso tanto ao `gcc` (para C) quanto ao `g++` (para C++).
2.  **Instale o VS Code**: Baixe e instale o [Visual Studio Code](https://code.visualstudio.com/).
3.  **Instale a Extensão C/C++**: No VS Code, instale a extensão "C/C++" da Microsoft para habilitar o suporte completo à linguagem.

### 🚀 Seu Primeiro Programa em C++

Vamos criar o programa "Olá, Mundo\!" na versão C++.

```cpp
#include <iostream>

using namespace std;

int main() {
    cout << "Ola, Universo C++!" << endl;

    return 0;
}
```

**Saída Esperada:**

```
Ola, Universo C++!
```

**Análise do Código:**

  * `#include <iostream>`: Importa a biblioteca de *stream* (fluxo) de entrada e saída, essencial para usar `cout` e `cin`.
  * `using namespace std;`: Indica que usaremos elementos do *namespace* (espaço de nomes) `std` (standard/padrão). Isso nos permite escrever `cout` em vez de `std::cout`.
  * `int main()`: A função principal onde a execução do programa começa.
  * `cout << "..." << endl;`: `cout` é o objeto de saída padrão (o console). O operador `<<` "insere" dados no fluxo de saída. `endl` insere uma nova linha e limpa o buffer.
  * `return 0;`: Informa ao sistema operacional que o programa terminou com sucesso.

## 📊 Tipos de Dados e Variáveis

C++ herda os tipos de dados de C, mas adiciona tipos nativos que facilitam muito a programação, como `string` e `bool`.

| Significado | Tipo em C++ | Exemplo de Declaração | Observações |
| :--- | :--- | :--- | :--- |
| Número Inteiro | `int` | `int quantidade;` | Armazena números inteiros. Use `long long` para números muito grandes. |
| Número com Ponto Flutuante | `double` | `double preco;` | Armazena números reais com alta precisão. `float` pode ser usado para precisão simples. |
| Um Único Caractere | `char` | `char categoria;` | Armazena um caractere entre **aspas simples**. Ex: `'A'`. |
| Texto (String) | `string` | `string nomeProduto;` | Um tipo nativo poderoso e flexível para textos. Requer a biblioteca `<string>` e usa **aspas duplas**. |
| Valor Lógico (Booleano) | `bool` | `bool emEstoque;` | Armazena os valores `true` (verdadeiro) ou `false` (falso). |

## 📝 Declaração e Atribuição de Variáveis

A declaração e atribuição em C++ são diretas e intuitivas, especialmente com o tipo `string`.

```cpp
#include <iostream>
#include <string>
#include <iomanip> // Para formatar a saída de dados

using namespace std;

int main() {
    // Declaração e inicialização de variáveis
    int idade = 35;
    double salario = 7500.90;
    double altura = 1.82;
    char genero = 'M';
    string nome = "Carlos Pereira"; // Atribuição direta e simples

    // Configura a saída para exibir 2 casas decimais em números double
    cout << fixed << setprecision(2);

    // Saída de dados
    cout << "NOME = " << nome << endl;
    cout << "IDADE = " << idade << endl;
    cout << "GENERO = " << genero << endl;
    cout << "ALTURA = " << altura << endl;
    cout << "SALARIO = R$ " << salario << endl;

    return 0;
}
```

**Saída Esperada:**

```
NOME = Carlos Pereira
IDADE = 35
GENERO = M
ALTURA = 1.82
SALARIO = R$ 7500.90
```

## 🔢 Operadores

Os operadores em C++ são, em sua maioria, idênticos aos da linguagem C.

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
| `<` | Menor que |
| `>` | Maior que |
| `<=` | Menor ou igual a |
| `>=` | Maior ou igual a |
| `==` | Igual a |
| `!=` | Diferente de |

### Lógicos

| Operador | Significado |
| :---: | :--- |
| `&&` | E (AND) |
| `||` | OU (OR) |
| `!` | NÃO (NOT) |

## 📤 Saída de Dados com `cout`

O `cout` é o principal meio de exibir informações no console em C++. Para formatar números, usamos manipuladores da biblioteca `<iomanip>`.

  * `cout << fixed << setprecision(N);`: Define que a saída de números de ponto flutuante terá um número fixo de `N` casas decimais.

**Nota sobre `#include <bits/stdc++.h>`**:
Você pode encontrar este comando em alguns códigos. Ele é um atalho (não padrão do C++) que inclui todas as bibliotecas padrão de uma vez. Embora seja prático para competições de programação, **não é recomendado** em projetos profissionais, pois aumenta o tempo de compilação e pode não ser compatível com todos os compiladores.

## 🔄 Processamento de Dados e Casting

O *casting* (conversão de tipo) em C++ funciona de forma similar ao C e é crucial para operações matemáticas precisas.

```cpp
#include <iostream>
#include <iomanip>

using namespace std;

int main() {
    int a = 11;
    int b = 4;
    double resultado;

    // A divisão de dois inteiros resulta em um inteiro (a parte decimal é truncada)
    cout << "Divisao de inteiros: " << a / b << endl; // Saída: 2

    // Fazendo o casting de 'a' para double para obter um resultado preciso
    resultado = (double) a / b;

    cout << fixed << setprecision(2);
    cout << "Divisao com casting: " << resultado << endl; // Saída: 2.75

    return 0;
}
```

## 📥 Entrada de Dados com `cin`

Para receber dados do usuário, usamos o objeto `cin` com o operador de extração `>>`.

**Lendo Textos com Espaços (`getline`)**
O `cin >>` lê a entrada até encontrar um espaço em branco. Para ler uma linha inteira de texto (com espaços), usamos a função `getline(cin, variavel_string);`.

**Limpando o Buffer de Entrada**
Assim como em C, ler um número com `cin >>` deixa uma quebra de linha (`\n`) no buffer. Isso pode atrapalhar uma chamada subsequente a `getline`. Para resolver isso, limpamos o buffer.

  * `cin.ignore(INT_MAX, '\n');`: Ignora todos os caracteres no buffer até encontrar e descartar a próxima quebra de linha.

<!-- end list -->

```cpp
#include <iostream>
#include <string>
#include <iomanip>
#include <climits> // Para usar INT_MAX

using namespace std;

int main() {
    int idade;
    double salario;
    string nome;

    cout << "Digite sua idade: ";
    cin >> idade;

    cout << "Digite seu nome completo: ";
    cin.ignore(INT_MAX, '\n'); // Limpeza de buffer obrigatória aqui!
    getline(cin, nome);

    cout << "Digite seu salario: ";
    cin >> salario;

    cout << fixed << setprecision(2);
    cout << "\n--- DADOS DIGITADOS ---\n";
    cout << "Nome: " << nome << endl;
    cout << "Idade: " << idade << " anos" << endl;
    cout << "Salario: R$ " << salario << endl;

    return 0;
}
```

## 🔀 Estrutura Condicional (`if-else`)

Permite executar blocos de código diferentes com base em uma condição.

```cpp
#include <iostream>

using namespace std;

int main() {
    int hora;

    cout << "Digite uma hora do dia (0-23): ";
    cin >> hora;

    if (hora < 12) {
        cout << "Bom dia!" << endl;
    }
    else if (hora < 18) {
        cout << "Boa tarde!" << endl;
    }
    else {
        cout << "Boa noite!" << endl;
    }

    return 0;
}
```

## 🔁 Estruturas de Repetição

### `while` (Enquanto)

Executa um bloco de código repetidamente enquanto uma condição for verdadeira. A condição é verificada **antes** de cada iteração.

```cpp
#include <iostream>

using namespace std;

int main() {
    int numero, soma = 0;

    cout << "Digite um numero (0 para parar): ";
    cin >> numero;

    while (numero != 0) {
        soma += numero;
        cout << "Digite outro numero (0 para parar): ";
        cin >> numero;
    }

    cout << "SOMA FINAL = " << soma << endl;

    return 0;
}
```

### `for` (Para)

É a estrutura ideal para laços com um número conhecido de repetições.

Sintaxe: `for (inicialização; condição; incremento) { ... }`

```cpp
#include <iostream>

using namespace std;

int main() {
    int N, valor, soma;

    cout << "Quantos numeros voce quer somar? ";
    cin >> N;

    soma = 0;
    for (int i = 0; i < N; i++) {
        cout << "Digite o valor #" << i + 1 << ": ";
        cin >> valor;
        soma += valor;
    }

    cout << "SOMA = " << soma << endl;

    return 0;
}
```

### `do-while` (Faça-Enquanto)

Garante que o bloco de código seja executado **pelo menos uma vez**, pois a condição é verificada **ao final** da iteração.

```cpp
#include <iostream>

using namespace std;

int main() {
    double C, F;
    char resposta;

    do {
        cout << "Digite a temperatura em Celsius: ";
        cin >> C;

        F = 9.0 * C / 5.0 + 32.0;
        cout << "Equivalente em Fahrenheit: " << F << endl;

        cout << "Deseja repetir (s/n)? ";
        cin >> resposta;

    } while (resposta == 's');

    return 0;
}
```

## 📏 Vetores e Matrizes

### Vetores (Arrays C-style)

Vetores são coleções de tamanho fixo de elementos do mesmo tipo.

```cpp
#include <iostream>
#include <iomanip>

using namespace std;

int main() {
    int N;

    cout << "Quantos numeros voce vai digitar? ";
    cin >> N;

    double vet[N]; // Vetor C-style de tamanho N

    for (int i = 0; i < N; i++) {
        cout << "Digite um numero: ";
        cin >> vet[i];
    }

    cout << fixed << setprecision(1);
    cout << "\nNUMEROS DIGITADOS:\n";
    for (int i = 0; i < N; i++) {
        cout << vet[i] << endl;
    }
    return 0;
}
```

**Nota Moderna**: Em C++ moderno, prefira usar `std::vector` (da biblioteca `<vector>`), que é um contêiner dinâmico e mais seguro.

### Matrizes (Arrays 2D C-style)

Matrizes são estruturas bidimensionais, basicamente um vetor de vetores.

```cpp
#include <iostream>

using namespace std;

int main() {
    int M, N;

    cout << "Quantas linhas tera a matriz? ";
    cin >> M;
    cout << "Quantas colunas tera a matriz? ";
    cin >> N;

    int mat[M][N];

    for (int i = 0; i < M; i++) {
        for (int j = 0; j < N; j++) {
            cout << "Elemento [" << i << "," << j << "]: ";
            cin >> mat[i][j];
        }
    }

    cout << "\nMATRIZ DIGITADA:\n";
    for (int i = 0; i < M; i++) {
        for (int j = 0; j < N; j++) {
            cout << mat[i][j] << " ";
        }
        cout << endl;
    }

    return 0;
}
```

**Nota Moderna**: Para matrizes dinâmicas em C++, a abordagem recomendada é `std::vector<std::vector<int>>`.

## 🐞 Depuração (Debugging) no VS Code

O processo de depuração em C++ no VS Code é idêntico ao de C.

1.  **Marcar Breakpoints**: Clique na margem à esquerda do número da linha para criar um ponto de parada.
2.  **Iniciar Depuração**: Pressione `F5` para iniciar.
3.  **Controlar Execução**: Use `F10` (Step Over) para executar linha por linha e `F5` para continuar até o próximo breakpoint.
4.  **Analisar Variáveis**: Inspecione os valores das variáveis na janela `VARIABLES` do painel de depuração.

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)
