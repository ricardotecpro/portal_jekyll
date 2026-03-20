# Linguagem Java ☕

Bem-vindo ao guia da linguagem Java, uma das linguagens de programação mais populares e versáteis do mundo. Famosa por sua filosofia "escreva uma vez, rode em qualquer lugar" (*write once, run anywhere*), o Java é fundamental para o desenvolvimento de aplicações web, mobile (Android), e sistemas de grande escala.

## 🛠️ Instalação e Configuração do Ambiente

Para desenvolver em Java, o primeiro passo é instalar o **JDK (Java Development Kit)**, que é um pacote de software contendo o compilador e outras ferramentas essenciais.

1.  **Instale o Java JDK**:

      * Faça o download do JDK (versão LTS, como 11, 17 ou 21, é recomendada) a partir do site oficial da Oracle ou de uma distribuição como o OpenJDK.
      * Siga o instalador.
      * **Configure as Variáveis de Ambiente**:
          * Crie uma nova variável de ambiente `JAVA_HOME` apontando para a pasta de instalação do JDK (ex: `C:\Program Files\Java\jdk-17.0.2`).
          * Adicione o caminho da pasta `bin` do JDK à variável `Path` do sistema (ex: `%JAVA_HOME%\bin`).
      * Para verificar a instalação, abra um terminal e execute o comando `java -version`.

2.  **Escolha uma IDE (Ambiente de Desenvolvimento Integrado)**:
    Enquanto o material original foca no Eclipse, as IDEs mais utilizadas atualmente para desenvolvimento Java são o VS Code e o IntelliJ IDEA.

    ### Opção 1: VS Code

      * Instale o [Visual Studio Code](https://code.visualstudio.com/).
      * Na aba de extensões, instale o pacote **"Extension Pack for Java"** da Microsoft. Ele inclui tudo o que é necessário para compilar, executar e depurar código Java.

    ### Opção 2: IntelliJ IDEA

      * Baixe a versão **Community** (gratuita) do [IntelliJ IDEA](https://www.jetbrains.com/idea/download/).
      * O IntelliJ IDEA é altamente especializado para Java e oferece uma experiência de desenvolvimento muito produtiva, com ferramentas de análise de código e refatoração de ponta.

### 🚀 Seu Primeiro Programa em Java

Todo programa em Java é contido dentro de uma **classe**. A execução sempre começa no método `main`.

```java
// É uma boa prática definir um pacote para organizar suas classes.
package curso;

// Declaração da classe principal.
public class Programa {

    // Método principal, ponto de entrada do programa.
    public static void main(String[] args) {
        // Comando para imprimir uma linha no console.
       System.out.println("Ola, Universo Java!");
    }
}
```

## 📊 Tipos de Dados e Variáveis

Java possui tipos de dados primitivos para armazenar valores simples e tipos por referência (classes) para objetos complexos.

| Significado | Tipo em Java | Valor Padrão | Observação |
| :--- | :--- | :--- | :--- |
| Número Inteiro | `int` | 0 | O tipo padrão para inteiros. Use `long` para valores muito grandes. |
| Número de Ponto Flutuante | `double` | 0.0 | O tipo padrão para números reais. `float` oferece precisão simples. |
| Um Único Caractere | `char` | `'\u0000'` | Armazena um caractere Unicode, sempre entre **aspas simples** (ex: `'F'`). |
| Texto | `String` | `null` | `String` é uma classe, não um tipo primitivo, e por isso começa com 'S' maiúsculo. Textos são declarados entre **aspas duplas** (ex: "Beatriz Costa"). |
| Valor Lógico | `boolean` | `false` | Aceita apenas os valores `true` ou `false`. |

## 📝 Declaração e Atribuição de Variáveis

A declaração de variáveis em Java exige a especificação de um tipo e um nome. A atribuição pode ser feita na mesma linha ou posteriormente.

```java
package curso;

import java.util.Locale; // Importa a classe Locale para formatação.

public class Programa {

    public static void main(String[] args) {

       // Define o Locale para US para usar o ponto como separador decimal.
       Locale.setDefault(Locale.US);

       // Declaração e inicialização de variáveis.
       int idade = 28;
       double salario = 8200.50;
       double altura = 1.65;
       char genero = 'F';
       String nome = "Beatriz Costa";

       // Saída de dados.
       System.out.println("NOME = " + nome);
       System.out.println("IDADE = " + idade);
       System.out.println("GENERO = " + genero);
        // Usando String.format para formatar a saída com 2 casas decimais.
       System.out.println("ALTURA = " + String.format("%.2f", altura));
       System.out.println("SALARIO = " + String.format("%.2f", salario));
    }
}
```

## 🔢 Operadores

Os operadores em Java são herdados de C/C++ e seguem a mesma lógica.

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
| `<` | Menor |
| `>` | Maior |
| `<=` | Menor ou igual |
| `>=` | Maior ou igual |
| `==` | Igual |
| `!=` | Diferente |

### Lógicos

| Operador | Significado |
| :---: | :--- |
| `&&` | E |
| `||` | OU |
| `!` | NÃO |

## 📥 Entrada de Dados com a Classe `Scanner`

Para ler dados do teclado em Java, utilizamos a classe `Scanner`, que deve ser importada da biblioteca `java.util`.

1.  **Importe a classe**: `import java.util.Scanner;`.
2.  **Crie um objeto Scanner**: `Scanner sc = new Scanner(System.in);`.
3.  **Use os métodos de leitura**:
      * `nextInt()`: Lê um número inteiro.
      * `nextDouble()`: Lê um número double.
      * `next()`: Lê a próxima palavra (até o espaço).
      * `nextLine()`: Lê a linha inteira de texto.
      * `next().charAt(0)`: Lê uma palavra e pega apenas o primeiro caractere.
4.  **Feche o Scanner**: `sc.close();` para liberar os recursos do sistema.

**Atenção à Quebra de Linha Pendente:**
Quando você lê um número (`nextInt` ou `nextDouble`), o cursor de leitura para após o número, deixando o "Enter" (`\n`) no buffer de entrada. Se a próxima leitura for um `nextLine()`, ele lerá essa quebra de linha vazia.
**Solução**: Consuma a quebra de linha pendente com um `sc.nextLine()` extra antes de ler o texto.

```java
package curso;

import java.util.Locale;
import java.util.Scanner;

public class Programa {

    public static void main(String[] args) {
       Locale.setDefault(Locale.US);
       Scanner sc = new Scanner(System.in);

       String nomeCompleto;
       int idade;
       double salario;
       char genero;

       System.out.print("Digite seu nome completo: ");
       nomeCompleto = sc.nextLine();

       System.out.print("Digite sua idade: ");
       idade = sc.nextInt();

       System.out.print("Digite seu salario: ");
       salario = sc.nextDouble();

       System.out.print("Digite seu genero (F/M): ");
       genero = sc.next().charAt(0);

       System.out.println("\n--- DADOS REGISTRADOS ---");
       System.out.println("Nome: " + nomeCompleto);
       System.out.println("Idade: " + idade);
       System.out.println("Salario: " + String.format("%.2f", salario));
       System.out.println("Genero: " + genero);

       sc.close();
    }
}
```

## 🔀 Estruturas de Controle

### Estrutura Condicional (`if-else`)

Permite que o programa execute diferentes caminhos com base em condições.

```java
// ... (dentro do método main)
Scanner sc = new Scanner(System.in);
System.out.print("Digite a hora atual (0-23): ");
int hora = sc.nextInt();

if (hora < 12) {
    System.out.println("Bom dia!");
} else if (hora < 18) {
    System.out.println("Boa tarde!");
} else {
    System.out.println("Boa noite!");
}
sc.close();
```

### Estrutura de Repetição `while`

O bloco de código é executado enquanto a condição for verdadeira.

```java
// ... (dentro do método main)
Scanner sc = new Scanner(System.in);
int numero;
int soma = 0;
System.out.print("Digite um numero (0 para sair): ");
numero = sc.nextInt();

while (numero != 0) { 
    soma += numero;
    System.out.print("Digite outro numero (0 para sair): ");
    numero = sc.nextInt();
}

System.out.println("SOMA FINAL = " + soma);
sc.close();
```

### Estrutura de Repetição `for`

Ideal para laços que precisam ser executados um número específico de vezes.

```java
// ... (dentro do método main)
Scanner sc = new Scanner(System.in);
System.out.print("Quantos numeros serao somados? ");
int N = sc.nextInt();
int soma = 0;

for (int i = 0; i < N; i++) { 
    System.out.print("Digite o valor #" + (i + 1) + ": ");
    int x = sc.nextInt();
    soma += x;
}

System.out.println("SOMA = " + soma);
sc.close();
```

## 📏 Vetores e Matrizes

### Vetores (Arrays)

Em Java, vetores são objetos que armazenam uma coleção de tamanho fixo de elementos do mesmo tipo.

```java
// ... (dentro do método main)
Locale.setDefault(Locale.US);
Scanner sc = new Scanner(System.in);

System.out.print("Quantos numeros voce vai digitar? ");
int N = sc.nextInt();

// Declaração e instanciação do vetor
double[] vetor = new double[N];

for (int i = 0; i < N; i++) {
    System.out.print("Digite um numero: ");
    vetor[i] = sc.nextDouble();
}

System.out.println("\nNUMEROS DIGITADOS:");
for (int i = 0; i < N; i++) {
    System.out.println(String.format("%.1f", vetor[i]));
}
sc.close();
```

### Matrizes (Arrays Bidimensionais)

São vetores de vetores, úteis para representar dados em formato de tabela.

```java
// ... (dentro do método main)
Scanner sc = new Scanner(System.in);

System.out.print("Quantas linhas tera a matriz? ");
int M = sc.nextInt();
System.out.print("Quantas colunas tera a matriz? ");
int N = sc.nextInt();

// Declaração e instanciação da matriz
int[][] matriz = new int[M][N];

for (int i = 0; i < M; i++) {
    for (int j = 0; j < N; j++) {
        System.out.print("Elemento [" + i + "," + j + "]: ");
        matriz[i][j] = sc.nextInt();
    }
}

System.out.println("\nMATRIZ DIGITADA:");
for (int i = 0; i < M; i++) {
    for (int j = 0; j < N; j++) {
        System.out.print(matriz[i][j] + " ");
    }
    System.out.println(); // Pula para a próxima linha
}
sc.close();
```

## 🐞 Depuração (Debugging) em Java

Depurar é o processo de encontrar e corrigir bugs no seu código. Tanto o VS Code quanto o IntelliJ IDEA possuem excelentes ferramentas de depuração visual. Os comandos do material original eram para o Eclipse.

### Debugging no VS Code e IntelliJ IDEA

Os conceitos são os mesmos, apenas os atalhos podem variar.

1.  **Habilitar/Desabilitar Breakpoint**: Clique na margem à esquerda do número da linha onde você quer que a execução pause.
2.  **Iniciar o Debug**:
      * **IntelliJ**: Pressione `Shift + F9` ou clique no ícone de inseto ao lado da configuração de execução.
      * **VS Code**: Pressione `F5` ou vá para a aba "Run and Debug" e inicie a sessão.
3.  **Controlar a Execução**:
      * **Step Over (Passar por cima)**: Executa a linha atual e para na próxima. (**F8** no IntelliJ, **F10** no VS Code).
      * **Continue (Continuar)**: Continua a execução até o próximo breakpoint ou o fim do programa. (**F9** no IntelliJ, **F5** no VS Code).
4.  **Inspecionar Variáveis**: A aba "Debug" em ambas as IDEs mostrará uma janela "Variables" onde você pode ver e monitorar o valor das variáveis em tempo real.

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)
