# Linguagem C 📖

Este guia é um material de apoio completo para quem está começando na linguagem C, especialmente para estudantes que já possuem uma base em lógica de programação.

## 🛠️ Instalação e Configuração do Ambiente (VS Code)

Para programar em C, você precisará de duas ferramentas principais: um **compilador** e um **Editor de Código/IDE**.

* **Compilador**: É o programa que traduz seu código C (legível por humanos) para código de máquina (executável pelo computador). Usaremos o **GCC**, que faz parte do pacote **MinGW** para Windows.
* **IDE (Ambiente de Desenvolvimento Integrado)**: É um editor de texto com superpoderes para programadores. Usaremos o **Visual Studio Code (VS Code)**, que é moderno, gratuito e altamente customizável.

### Passos para Configuração:

1.  **Instale o Compilador (MinGW-w64)**:

    * Acesse o site oficial do [MinGW-w64](https://www.mingw-w64.org/downloads/) e faça o download do instalador.
    * Durante a instalação, na tela de "Settings", certifique-se de que a arquitetura (`Architecture`) está definida como `x86_64` e clique em `Next`.
    * **Adicione o MinGW ao Path do Windows**: É crucial que o sistema operacional saiba onde encontrar o compilador. Adicione o caminho da pasta `bin` do MinGW (ex: `C:\Program Files\mingw-w64\x86_64-8.1.0-posix-seh-rt_v6-rev0\mingw64\bin`) à variável de ambiente `Path`.

2.  **Instale o VS Code**:

    * Baixe e instale o [Visual Studio Code](https://code.visualstudio.com/).

3.  **Instale a Extensão C/C++ no VS Code**:

    * Abra o VS Code, vá para a aba de `Extensions` (ícone de blocos no menu lateral).
    * Procure por "C/C++" da Microsoft e clique em `Install`.

### 🚀 Seu Primeiro Programa em C

Vamos criar um programa clássico que exibe uma mensagem na tela.

```c
#include <stdio.h>

int main() {
    printf("Ola, Universo C!\n");

    return 0;
}
```

**Análise do Código:**

* `#include <stdio.h>`: Importa a biblioteca padrão de entrada e saída de dados (`Standard Input/Output`), que nos dá acesso a funções como `printf`.
* `int main()`: É a função principal, o ponto de partida de todo programa em C.
* `printf("Ola, Universo C!\n");`: A função `printf` é usada para "imprimir" texto no console. O `\n` é um caractere especial que significa "nova linha".
* `return 0;`: Indica que o programa foi executado com sucesso e terminou sem erros.

## 📊 Tipos de Dados e Variáveis

Variáveis são espaços na memória que reservamos para armazenar dados. Em C, toda variável precisa ter um tipo definido.

| Significado | Tipo em C | Exemplo de Declaração | Observações |
| :--- | :--- | :--- | :--- |
| Número Inteiro | `int` | `int idade;` | Armazena números inteiros. O intervalo pode ser estendido com `long int` ou `long long int`. |
| Número com Ponto Flutuante | `double` | `double salario;` | Armazena números reais com alta precisão. Para precisão menor (e menos uso de memória), pode-se usar `float`. |
| Um Único Caractere | `char` | `char genero;` | Armazena um único caractere, que deve ser envolvido por **aspas simples**. Ex: `'F'`. |
| Texto (String) | `char[]` | `char nome[50];` | Em C, um texto é um **vetor (array) de caracteres**. O valor deve ser envolvido por **aspas duplas**. Ex: `"Ana Souza"`. |
| Valor Lógico (Booleano) | `int` (tradicional) ou `bool` | `int temFilhos;` | C tradicionalmente usa `int`: **0** representa `falso` e qualquer outro número representa `verdadeiro`. |

**Nota:** Em C moderno (padrão C99 em diante), você pode incluir a biblioteca `<stdbool.h>` para usar os tipos `bool`, `true` e `false`, o que torna o código mais legível.

## 📝 Declaração e Atribuição de Variáveis

Você pode declarar uma variável e atribuir um valor a ela na mesma linha ou em momentos diferentes.

```c
#include <stdio.h>
#include <string.h> // Necessário para a função strcpy

int main() {
    // Declaração de variáveis
    int idade;
    double salario, altura;
    char genero;
    char nome[50];

    // Atribuição de valores
    idade = 25;
    salario = 6200.75;
    altura = 1.70;
    genero = 'F';
    strcpy(nome, "Ana Souza"); // Função para copiar um texto para uma variável string

    // Saída de dados
    printf("IDADE = %d\n", idade);
    printf("SALARIO = %.2f\n", salario); // %.2f formata para 2 casas decimais
    printf("ALTURA = %.2f\n", altura);
    printf("GENERO = %c\n", genero);
    printf("NOME = %s\n", nome);

    return 0;
}
```

**Saída Esperada:**

```
IDADE = 25
SALARIO = 6200.75
ALTURA = 1.70
GENERO = F
NOME = Ana Souza
```

**Importante:**

* A atribuição de texto a um vetor `char` após sua declaração deve ser feita com a função `strcpy` (string copy).
* Você também pode inicializar a variável na mesma linha da declaração, o que é mais comum: `int idade = 25;` ou `char nome[50] = "Ana Souza";`.

## 🔢 Operadores

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

## 📤 Saída de Dados (`printf`)

A função `printf` usa "placeholders" (marcadores de posição) para exibir o conteúdo de variáveis.

| Tipo | Placeholder |
| :--- | :--- |
| `int` | `%d` ou `%i` |
| `long int` | `%li` |
| `long long int` | `%lli` |
| `float` | `%f` |
| `double` | `%lf` (com `scanf`), mas `%f` é comum para `printf` |
| `char` (um caractere) | `%c` |
| `char[]` (texto) | `%s` |

**Exemplo Prático:**

```c
#include <stdio.h>
#include <string.h>

int main() {
    int idade = 25;
    double salario = 6200.75;
    char nome[50] = "Ana Souza";
    char genero = 'F';

    // Imprimindo uma frase formatada
    printf("A funcionaria %s, do sexo %c, tem %d anos e recebe R$ %.2f.\n", nome, genero, idade, salario);

    return 0;
}
```

**Saída Esperada:**

```
A funcionaria Ana Souza, do sexo F, tem 25 anos e recebe R$ 6200.75.
```

## 🔄 Processamento de Dados e Casting

O *casting* é uma conversão explícita de um tipo de dado para outro. É útil em situações como a divisão de inteiros, onde o resultado pode ser truncado.

**Exemplo 1: Divisão de Inteiros**

```c
#include <stdio.h>

int main() {
    int a = 10;
    int b = 3;
    int resultado;

    resultado = a / b;

    printf("Resultado: %d\n", resultado); // Saída será 3, a parte decimal é perdida

    return 0;
}
```

**Saída Esperada:**

```
Resultado: 3
```

**Exemplo 2: Casting para Divisão Correta**
Para obter um resultado com casas decimais, precisamos converter um dos operandos para `double` ou `float`.

```c
#include <stdio.h>

int main() {
    int a = 10;
    int b = 3;
    double resultado;

    resultado = (double) a / b; // Casting de 'a' para double antes da divisão

    printf("Resultado: %.2f\n", resultado); // Saída será 3.33

    return 0;
}
```

**Saída Esperada:**

```
Resultado: 3.33
```

## 📥 Entrada de Dados (`scanf`)

Para ler dados digitados pelo usuário, usamos a função `scanf`. Ela utiliza os mesmos placeholders que o `printf`.

**O Desafio do Buffer de Entrada**

Um problema comum em C é o "lixo" deixado no buffer de entrada (uma área de memória temporária). Quando você lê um número com `scanf("%d", &idade);`, o número é lido, mas a tecla `Enter` (`\n`) que você pressionou continua no buffer. Se a próxima leitura for de um caractere ou de um texto, ela pode capturar esse `\n` indesejado.

**Solução: Funções de Limpeza**
Para evitar problemas, podemos criar uma função para limpar o buffer antes de ler um texto ou um caractere que venha depois de uma leitura de número.

```c
#include <stdio.h>
#include <string.h>

// Função para limpar o buffer de entrada
void limpar_entrada() {
    char c;
    while ((c = getchar()) != '\n' && c != EOF) {}
}

// Função para ler texto de forma segura
void ler_texto(char *buffer, int length) {
    fgets(buffer, length, stdin);
    strtok(buffer, "\n"); // Remove a quebra de linha que o fgets captura
}

int main() {
    int idade;
    double salario;
    char nome[50];
    char genero;

    printf("Digite seu nome completo: ");
    ler_texto(nome, 50);

    printf("Digite sua idade: ");
    scanf("%d", &idade);
    
    // Limpa o buffer antes de ler o próximo caractere
    limpar_entrada();

    printf("Digite seu genero (M/F): ");
    scanf("%c", &genero);
    
    printf("Digite seu salario: ");
    scanf("%lf", &salario);

    printf("\n--- DADOS CADASTRADOS ---\n");
    printf("Nome: %s\n", nome);
    printf("Idade: %d\n", idade);
    printf("Genero: %c\n", genero);
    printf("Salario: %.2f\n", salario);

    return 0;
}
```

## 🔀 Estrutura Condicional (`if-else`)

Permite que o programa tome decisões com base em condições.

```c
#include <stdio.h>

int main() {
    int hora;

    printf("Digite uma hora do dia (0-23): ");
    scanf("%d", &hora);

    if (hora < 12) {
        printf("Bom dia!\n");
    }
    else if (hora < 18) {
        printf("Boa tarde!\n");
    }
    else {
        printf("Boa noite!\n");
    }

    return 0;
}
```

## 🔁 Estruturas de Repetição

### `while` (Enquanto)

Executa um bloco de código **enquanto** uma condição for verdadeira. A condição é testada **antes** da primeira execução.

```c
#include <stdio.h>

int main() {
    int numero, soma = 0;

    printf("Digite um numero (0 para sair): ");
    scanf("%d", &numero);

    while (numero != 0) {
        soma = soma + numero;
        printf("Digite outro numero (0 para sair): ");
        scanf("%d", &numero);
    }

    printf("SOMA FINAL = %d\n", soma);

    return 0;
}
```

### `for` (Para)

Ideal para repetir um bloco de código um número definido de vezes.

```c
#include <stdio.h>

int main() {
    int N, i, valor, soma;

    printf("Quantos numeros serao digitados? ");
    scanf("%d", &N);

    soma = 0;
    for (i = 0; i < N; i++) {
        printf("Digite o valor #%d: ", i + 1);
        scanf("%d", &valor);
        soma += valor; // Forma abreviada de soma = soma + valor
    }

    printf("SOMA FINAL = %d\n", soma);

    return 0;
}
```

### `do-while` (Faça-Enquanto)

Similar ao `while`, mas garante que o bloco de código seja executado **pelo menos uma vez**, pois a condição é testada no **final**.

```c
#include <stdio.h>

void limpar_entrada() {
    char c;
    while ((c = getchar()) != '\n' && c != EOF) {}
}

int main() {
    double C, F;
    char resposta;

    do {
        printf("Digite a temperatura em Celsius: ");
        scanf("%lf", &C);
        
        F = C * 9.0 / 5.0 + 32.0;
        
        printf("Equivalente em Fahrenheit: %.1f\n", F);
        
        printf("Deseja repetir (s/n)? ");
        limpar_entrada();
        scanf("%c", &resposta);

    } while (resposta == 's');

    return 0;
}
```

## 📏 Vetores (Arrays)

Vetores são coleções de dados do mesmo tipo, acessados por um índice. Em C, o primeiro índice é sempre **0**.

```c
#include <stdio.h>

int main() {
    int N, i;

    printf("Quantos numeros voce vai digitar? ");
    scanf("%d", &N);

    double numeros[N]; // Declara um vetor de 'N' posições

    for (i = 0; i < N; i++) {
        printf("Digite o numero %d: ", i + 1);
        scanf("%lf", &numeros[i]);
    }

    printf("\nNUMEROS DIGITADOS:\n");
    for (i = 0; i < N; i++) {
        printf("%.1f\n", numeros[i]);
    }

    return 0;
}
```

## ▦ Matrizes (Arrays 2D)

Matrizes são vetores de vetores, usados para representar tabelas ou grades.

```c
#include <stdio.h>

int main() {
    int M, N, i, j;

    printf("Quantas linhas tera a matriz? ");
    scanf("%d", &M);
    printf("Quantas colunas tera a matriz? ");
    scanf("%d", &N);

    int matriz[M][N];

    for (i = 0; i < M; i++) {
        for (j = 0; j < N; j++) {
            printf("Elemento [%d,%d]: ", i, j);
            scanf("%d", &matriz[i][j]);
        }
    }

    printf("\nMATRIZ DIGITADA:\n");
    for (i = 0; i < M; i++) {
        for (j = 0; j < N; j++) {
            printf("%d ", matriz[i][j]);
        }
        printf("\n"); // Pula para a próxima linha
    }

    return 0;
}
```

## 🐞 Depuração (Debugging) no VS Code

Debugging é o processo de encontrar e corrigir erros no seu código. O VS Code oferece uma ferramenta de depuração poderosa.

**Passos Básicos:**

1.  **Marcar um Breakpoint**: Clique na margem esquerda do editor, ao lado do número da linha. Uma bola vermelha aparecerá. O *breakpoint* é um ponto de parada onde a execução do programa será pausada.
2.  **Iniciar a Depuração**: Pressione `F5` ou vá para a aba `Run and Debug` e clique no botão verde `Start Debugging`.
3.  **Analisar Variáveis**: Com a execução pausada, a janela `VARIABLES` no painel esquerdo mostrará o valor atual de todas as variáveis locais.
4.  **Controlar a Execução**:
    * **Step Over (`F10`)**: Executa a linha atual e para na próxima.
    * **Step Into (`F11`)**: Se a linha atual for uma chamada de função, entra na função para depurá-la.
    * **Continue (`F5`)**: Continua a execução normal até o próximo breakpoint ou o fim do programa.
    * **Stop (`Shift+F5`)**: Para a sessão de depuração.

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)
