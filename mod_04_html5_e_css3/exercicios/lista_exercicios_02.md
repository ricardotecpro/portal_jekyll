---
layout: default
title: ☕ Java e Orientação a Objetos
---

# ☕ Java e Orientação a Objetos
## 📐 Exercícios de Fixação: 02 Estrutura Sequencial

Este capítulo foca em problemas que podem ser resolvidos utilizando uma sequência direta de comandos, sem a necessidade de estruturas de decisão ou repetição. Abordaremos a leitura de dados, processamento e a exibição dos resultados.

---

### 🏞️ Problema "terreno"

Fazer um programa para ler as medidas da largura e comprimento de um terreno retangular com uma casa decimal, bem como o valor do metro quadrado do terreno com duas casas decimais. Em seguida, o programa deve mostrar o valor da área do terreno, bem como o valor do preço do terreno, ambos com duas casas decimais.

**Exemplo 1:**

```
Digite a largura do terreno: 15.0
Digite o comprimento do terreno: 40.0
Digite o valor do metro quadrado: 250.00
Area do terreno = 600.00
Preco do terreno = 150000.00
```

**Exemplo 2:**

```
Digite a largura do terreno: 8.5
Digite o comprimento do terreno: 22.0
Digite o valor do metro quadrado: 180.50
Area do terreno = 187.00
Preco do terreno = 33753.50
```

#### 💡 Conceitos Envolvidos:
* **Variáveis**: `largura`, `comprimento`, `valorMetroQuadrado`, `areaTerreno`, `precoTerreno`.
* **Tipos de Dados**: `double` para todas as variáveis, devido à necessidade de casas decimais.
* **Entrada de Dados**: Utilização da classe `Scanner` para ler os valores digitados pelo usuário.
* **Operações Aritméticas**: Multiplicação para calcular a área (`largura * comprimento`) e o preço (`areaTerreno * valorMetroQuadrado`).
* **Saída de Dados Formatada**: Utilização de `System.out.printf` para exibir os resultados com o número de casas decimais especificado.

#### 💻 Código de Exemplo em Java (Conceitual):

```java
package curso;

import java.util.Locale;
import java.util.Scanner;

public class CalculoTerreno {

    public static void main(String[] args) {
        // Configura o Locale para US para garantir o ponto como separador decimal
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite a largura do terreno: ");
        double largura = sc.nextDouble();

        System.out.print("Digite o comprimento do terreno: ");
        double comprimento = sc.nextDouble();

        System.out.print("Digite o valor do metro quadrado: ");
        double valorMetroQuadrado = sc.nextDouble();

        double areaTerreno = largura * comprimento;
        double precoTerreno = areaTerreno * valorMetroQuadrado;

        System.out.printf("Area do terreno = %.2f%n", areaTerreno);
        System.out.printf("Preco do terreno = %.2f%n", precoTerreno);

        sc.close(); // É uma boa prática fechar o Scanner
    }
}
```

---

### 🖼️ Problema "retangulo"

Fazer um programa para ler as medidas da base e altura de um retângulo. Em seguida, mostrar o valor da área, perímetro e diagonal deste retângulo, com quatro casas decimais.

**Fórmulas:**
* Área: `base * altura`
* Perímetro: `2 * (base + altura)`
* Diagonal: `√(base² + altura²)` (raiz quadrada da soma dos quadrados da base e altura)

**Exemplo 1:**

```
Base do retangulo: 5.0
Altura do retangulo: 6.0
AREA = 30.0000
PERIMETRO = 22.0000
DIAGONAL = 7.8102
```

**Exemplo 2:**

```
Base do retangulo: 12.5
Altura do retangulo: 15.2
AREA = 190.0000
PERIMETRO = 55.4000
DIAGONAL = 19.6797
```

#### 💡 Conceitos Envolvidos:
* **Variáveis**: `baseRetangulo`, `alturaRetangulo`, `area`, `perimetro`, `diagonal`.
* **Tipos de Dados**: `double` para precisão decimal.
* **Biblioteca Math**: Uso de `Math.sqrt()` para calcular a raiz quadrada e `Math.pow()` para calcular potências.
* **Entrada e Saída de Dados**: Similar ao problema anterior, usando `Scanner` e `System.out.printf`.

#### 💻 Código de Exemplo em Java (Conceitual):

```java
package curso;

import java.util.Locale;
import java.util.Scanner;

public class CalculoRetangulo {

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.print("Base do retangulo: ");
        double baseRetangulo = sc.nextDouble();

        System.out.print("Altura do retangulo: ");
        double alturaRetangulo = sc.nextDouble();

        double area = baseRetangulo * alturaRetangulo;
        double perimetro = 2 * (baseRetangulo + alturaRetangulo);
        double diagonal = Math.sqrt(Math.pow(baseRetangulo, 2.0) + Math.pow(alturaRetangulo, 2.0));

        System.out.printf("AREA = %.4f%n", area);
        System.out.printf("PERIMETRO = %.4f%n", perimetro);
        System.out.printf("DIAGONAL = %.4f%n", diagonal);

        sc.close();
    }
}
```

---

### 🧑‍🤝‍🧑 Problema "idades"

Fazer um programa para ler o nome e idade de duas pessoas. Ao final mostrar uma mensagem com os nomes e a idade média entre essas pessoas, com uma casa decimal.

**Exemplo:**

```
Dados da primeira pessoa:
Nome: Ana Paula
Idade: 25
Dados da segunda pessoa:
Nome: Carlos Jose
Idade: 30
A idade média de Ana Paula e Carlos Jose é de 27.5 anos
```

#### 💡 Conceitos Envolvidos:
* **Variáveis**: `nome1`, `idade1`, `nome2`, `idade2`, `idadeMedia`.
* **Tipos de Dados**: `String` para os nomes, `int` para as idades, `double` para a média (para garantir a casa decimal).
* **Leitura de Strings**: `sc.next()` ou `sc.nextLine()` para ler nomes. Atenção à quebra de linha pendente ao ler números antes de strings.
* **Cálculo de Média**: `(idade1 + idade2) / 2.0` (dividir por `2.0` para forçar uma divisão de ponto flutuante).

#### 💻 Código de Exemplo em Java (Conceitual):

```java
package curso;

import java.util.Locale;
import java.util.Scanner;

public class MediaIdades {

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.println("Dados da primeira pessoa:");
        System.out.print("Nome: ");
        String nome1 = sc.nextLine(); // Usar nextLine() para nomes completos
        System.out.print("Idade: ");
        int idade1 = sc.nextInt();

        System.out.println("Dados da segunda pessoa:");
        System.out.print("Nome: ");
        sc.nextLine(); // Consumir a quebra de linha pendente do nextInt() anterior
        String nome2 = sc.nextLine();
        System.out.print("Idade: ");
        int idade2 = sc.nextInt();

        double idadeMedia = (double)(idade1 + idade2) / 2.0; // Casting para double garante a divisão correta

        System.out.printf("A idade média de %s e %s é de %.1f anos%n", nome1, nome2, idadeMedia);

        sc.close();
    }
}
```

---

### ➕ Problema "soma"

Fazer um programa para ler dois valores inteiros X e Y, e depois mostrar na tela o valor da soma destes números.

**Exemplo 1:**

```
Digite o valor de X: 15
Digite o valor de Y: 20
SOMA = 35
```

**Exemplo 2:**

```
Digite o valor de X: -5
Digite o valor de Y: 50
SOMA = 45
```

#### 💡 Conceitos Envolvidos:
* **Variáveis**: `x`, `y`, `soma`.
* **Tipos de Dados**: `int` para todos os valores, pois são inteiros.
* **Operação Aritmética**: Adição (`x + y`).

#### 💻 Código de Exemplo em Java (Conceitual):

```java
package curso;

import java.util.Scanner; // Locale não é estritamente necessário aqui pois são inteiros

public class SomaInteiros {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite o valor de X: ");
        int x = sc.nextInt();

        System.out.print("Digite o valor de Y: ");
        int y = sc.nextInt();

        int soma = x + y;

        System.out.println("SOMA = " + soma);

        sc.close();
    }
}
```

---

### 💸 Problema "troco"

Fazer um programa para calcular o troco no processo de pagamento de um produto de uma mercearia. O programa deve ler o preço unitário do produto, a quantidade de unidades compradas deste produto, e o valor em dinheiro dado pelo cliente (suponha que haja dinheiro suficiente). Seu programa deve mostrar o valor do troco a ser devolvido ao cliente, com duas casas decimais.

**Exemplo 1:**

```
Preço unitário do produto: 12.50
Quantidade comprada: 3
Dinheiro recebido: 50.00
TROCO = 12.50
```

**Exemplo 2:**

```
Preço unitário do produto: 40.00
Quantidade comprada: 2
Dinheiro recebido: 100.00
TROCO = 20.00
```

#### 💡 Conceitos Envolvidos:
* **Variáveis**: `precoUnitario`, `quantidadeComprada`, `dinheiroRecebido`, `valorTotal`, `troco`.
* **Tipos de Dados**: `double` para `precoUnitario`, `dinheiroRecebido`, `troco`. `int` para `quantidadeComprada`.
* **Cálculo do Total**: `precoUnitario * quantidadeComprada`.
* **Cálculo do Troco**: `dinheiroRecebido - valorTotal`.

#### 💻 Código de Exemplo em Java (Conceitual):

```java
package curso;

import java.util.Locale;
import java.util.Scanner;

public class CalculoTroco {

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.print("Preço unitário do produto: ");
        double precoUnitario = sc.nextDouble();

        System.out.print("Quantidade comprada: ");
        int quantidadeComprada = sc.nextInt();

        System.out.print("Dinheiro recebido: ");
        double dinheiroRecebido = sc.nextDouble();

        double valorTotal = precoUnitario * quantidadeComprada;
        double troco = dinheiroRecebido - valorTotal;

        System.out.printf("TROCO = %.2f%n", troco);

        sc.close();
    }
}
```

---

### ⭕ Problema "circulo"

Fazer um programa para ler o valor "r" do raio de um círculo, e depois mostrar o valor da área do círculo com três casas decimais. A fórmula da área do círculo é a seguinte: `area = π * r²`. Você pode usar o valor de π fornecido pela biblioteca da sua linguagem de programação (ex: `Math.PI` em Java), ou então, se preferir, use diretamente o valor 3.14159.

**Exemplo 1:**

```
Digite o valor do raio do circulo: 3.0
AREA = 28.274
```

**Exemplo 2:**

```
Digite o valor do raio do circulo: 15.5
AREA = 754.769
```

#### 💡 Conceitos Envolvidos:
* **Variáveis**: `raio`, `areaCirculo`.
* **Tipos de Dados**: `double`.
* **Constante PI**: Uso de `Math.PI` ou um valor literal (3.14159).
* **Cálculo de Potência**: `Math.pow(raio, 2)` ou `raio * raio`.

#### 💻 Código de Exemplo em Java (Conceitual):

```java
package curso;

import java.util.Locale;
import java.util.Scanner;

public class AreaCirculo {

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        final double PI = 3.14159; // Definindo PI como uma constante

        System.out.print("Digite o valor do raio do circulo: ");
        double raio = sc.nextDouble();

        // double areaCirculo = Math.PI * Math.pow(raio, 2); // Usando Math.PI
        double areaCirculo = PI * raio * raio; // Usando a constante definida

        System.out.printf("AREA = %.3f%n", areaCirculo);

        sc.close();
    }
}
```

---

### 💰 Problema "pagamento"

Fazer um programa para ler o nome de um(a) funcionário(a), o valor que ele(a) recebe por hora, e a quantidade de horas trabalhadas por ele(a). Ao final, mostrar o valor do pagamento do funcionário com uma mensagem explicativa e duas casas decimais.

**Exemplo 1:**

```
Nome: Carlos Santana
Valor por hora: 60.00
Horas trabalhadas: 80
O pagamento para Carlos Santana deve ser 4800.00
```

**Exemplo 2:**

```
Nome: Juliana Paes
Valor por hora: 75.50
Horas trabalhadas: 120
O pagamento para Juliana Paes deve ser 9060.00
```

#### 💡 Conceitos Envolvidos:
* **Variáveis**: `nomeFuncionario`, `valorPorHora`, `horasTrabalhadas`, `pagamento`.
* **Tipos de Dados**: `String` para `nomeFuncionario`, `double` para `valorPorHora` e `pagamento`, `int` para `horasTrabalhadas`.
* **Cálculo do Pagamento**: `valorPorHora * horasTrabalhadas`.

#### 💻 Código de Exemplo em Java (Conceitual):

```java
package curso;

import java.util.Locale;
import java.util.Scanner;

public class CalculoPagamento {

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.print("Nome: ");
        String nomeFuncionario = sc.nextLine();

        System.out.print("Valor por hora: ");
        double valorPorHora = sc.nextDouble();

        System.out.print("Horas trabalhadas: ");
        int horasTrabalhadas = sc.nextInt();

        double pagamento = valorPorHora * horasTrabalhadas;

        System.out.printf("O pagamento para %s deve ser %.2f%n", nomeFuncionario, pagamento);

        sc.close();
    }
}
```

---

### 🚗 Problema "consumo"

Fazer um programa para ler a distância total (em Km) percorrida por um carro, bem como o total de combustível gasto por este carro ao percorrer tal distância. Seu programa deve mostrar o consumo médio do carro, com três casas decimais.
Fórmula: `consumoMedio = distanciaPercorrida / combustivelGasto`

**Exemplo 1:**

```
Distancia percorrida: 600
Combustível gasto: 45.5
Consumo medio = 13.187
```

**Exemplo 2:**

```
Distancia percorrida: 1250
Combustível gasto: 80.2
Consumo medio = 15.586
```

#### 💡 Conceitos Envolvidos:
* **Variáveis**: `distanciaPercorrida`, `combustivelGasto`, `consumoMedio`.
* **Tipos de Dados**: `int` para `distanciaPercorrida` (ou `double` se distâncias fracionadas forem permitidas), `double` para `combustivelGasto` e `consumoMedio`.
* **Cálculo de Consumo Médio**: Divisão.

#### 💻 Código de Exemplo em Java (Conceitual):

```java
package curso;

import java.util.Locale;
import java.util.Scanner;

public class ConsumoCombustivel {

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.print("Distancia percorrida: ");
        int distanciaPercorrida = sc.nextInt();

        System.out.print("Combustível gasto: ");
        double combustivelGasto = sc.nextDouble();

        double consumoMedio = (double)distanciaPercorrida / combustivelGasto; // Casting para garantir divisão de double

        System.out.printf("Consumo medio = %.3f%n", consumoMedio);

        sc.close();
    }
}
```

---

### 📏 Problema "medidas"

Fazer um programa para ler três medidas A, B e C. Em seguida, calcular e mostrar (imprimir os dados com quatro casas decimais):

a) a área do quadrado que tem lado A (`AreaQuadrado = A²`)
b) a área do triângulo retângulo que tem base A e altura B (`AreaTriangulo = (A * B) / 2`)
c) a área do trapézio que tem bases A e B, e altura C (`AreaTrapezio = ((A + B) * C) / 2`)

**Exemplo 1:**

```
Digite a medida A: 5.0
Digite a medida B: 4.5
Digite a medida C: 6.2
AREA DO QUADRADO = 25.0000
AREA DO TRIANGULO = 11.2500
AREA DO TRAPEZIO = 29.4500
```

**Exemplo 2:**

```
Digite a medida A: 8.22
Digite a medida B: 9.15
Digite a medida C: 10.505
AREA DO QUADRADO = 67.5684
AREA DO TRIANGULO = 37.6065
AREA DO TRAPEZIO = 91.2359
```

#### 💡 Conceitos Envolvidos:
* **Variáveis**: `medidaA`, `medidaB`, `medidaC`, `areaQuadrado`, `areaTriangulo`, `areaTrapezio`.
* **Tipos de Dados**: `double` para todas as medidas e áreas.
* **Múltiplos Cálculos**: Aplicação das fórmulas geométricas.

#### 💻 Código de Exemplo em Java (Conceitual):

```java
package curso;

import java.util.Locale;
import java.util.Scanner;

public class CalculoMedidas {

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite a medida A: ");
        double medidaA = sc.nextDouble();

        System.out.print("Digite a medida B: ");
        double medidaB = sc.nextDouble();

        System.out.print("Digite a medida C: ");
        double medidaC = sc.nextDouble();

        double areaQuadrado = Math.pow(medidaA, 2);
        // Ou: double areaQuadrado = medidaA * medidaA;
        double areaTriangulo = (medidaA * medidaB) / 2.0;
        double areaTrapezio = ((medidaA + medidaB) * medidaC) / 2.0;

        System.out.printf("AREA DO QUADRADO = %.4f%n", areaQuadrado);
        System.out.printf("AREA DO TRIANGULO = %.4f%n", areaTriangulo);
        System.out.printf("AREA DO TRAPEZIO = %.4f%n", areaTrapezio);

        sc.close();
    }
}
```

---

### ⏱️ Problema "duracao"

Fazer um programa para ler uma duração de tempo em segundos, daí imprimir na tela esta duração no formato horas:minutos:segundos.

**Exemplo 1:**

```
Digite a duracao em segundos: 400
0:6:40
```

**Exemplo 2:**

```
Digite a duracao em segundos: 15000
4:10:0
```

**Exemplo 3:**

```
Digite a duracao em segundos: 150820
41:53:40
```

#### 💡 Conceitos Envolvidos:
* **Variáveis**: `duracaoSegundosTotal`, `horas`, `minutos`, `segundos`.
* **Tipos de Dados**: `int` para todas as variáveis.
* **Operações Aritméticas**:
    * Divisão inteira (`/`) para obter horas e minutos.
    * Módulo (`%`) para obter os restos (segundos restantes após calcular horas, minutos restantes após calcular segundos).
* **Conversão de Tempo**:
    * `horas = duracaoSegundosTotal / 3600`
    * `resto = duracaoSegundosTotal % 3600`
    * `minutos = resto / 60`
    * `segundos = resto % 60`

#### 💻 Código de Exemplo em Java (Conceitual):

```java
package curso;

import java.util.Scanner;

public class ConversaoDuracao {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite a duracao em segundos: ");
        int duracaoSegundosTotal = sc.nextInt();

        int horas = duracaoSegundosTotal / 3600;
        int resto = duracaoSegundosTotal % 3600;
        int minutos = resto / 60;
        int segundos = resto % 60;

        System.out.printf("%d:%d:%d%n", horas, minutos, segundos);

        sc.close();
    }
}
```

---

## 🛠️ Configuração do Ambiente de Desenvolvimento e Execução

Para compilar e executar os códigos Java apresentados, você pode utilizar ambientes de desenvolvimento integrado (IDEs) populares como o **Visual Studio Code (VS Code)** ou o **IntelliJ IDEA**.

### Para VS Code:

1.  **Instale o Java Development Kit (JDK)**: Certifique-se de ter o JDK instalado em sua máquina. Você pode baixá-lo do site oficial da Oracle ou optar por uma distribuição como o OpenJDK.
2.  **Instale a Extensão Java no VS Code**:
    * Abra o VS Code.
    * Vá para a aba de Extensões (ícone de quadrados no menu lateral ou `Ctrl+Shift+X`).
    * Procure por "Extension Pack for Java" da Microsoft e instale-o. Este pacote inclui diversas ferramentas úteis para desenvolvimento Java.
3.  **Crie seu Projeto**:
    * Crie uma pasta para o seu projeto (ex: `MeusExerciciosJava`).
    * Dentro desta pasta, crie uma subpasta para o pacote (ex: `curso`).
    * Dentro da pasta `curso`, crie seu arquivo Java (ex: `CalculoTerreno.java`).
4.  **Escreva e Execute o Código**:
    * Copie e cole o código Java no arquivo correspondente.
    * Para executar, você pode clicar com o botão direito no editor de código e selecionar "Run Java" ou usar o botão "Run" que aparece acima do método `main`. A saída será exibida no terminal integrado do VS Code.

### Para IntelliJ IDEA:

1.  **Instale o Java Development Kit (JDK)**: Similar ao VS Code, garanta que o JDK esteja instalado.
2.  **Instale o IntelliJ IDEA**: Baixe e instale a versão Community (gratuita) ou Ultimate do IntelliJ IDEA do site da JetBrains.
3.  **Crie um Novo Projeto**:
    * Abra o IntelliJ IDEA.
    * Clique em "New Project".
    * Selecione "Java" na lista à esquerda.
    * Escolha o JDK instalado.
    * Clique em "Next" (não precisa de template adicional para esses exemplos simples).
    * Dê um nome ao seu projeto (ex: `ExerciciosSequenciais`) e defina o local. Clique em "Finish".
4.  **Crie Pacotes e Classes**:
    * No painel "Project" (geralmente à esquerda), clique com o botão direito na pasta `src`.
    * Selecione "New" > "Package" e nomeie-o como `curso`.
    * Clique com o botão direito no pacote `curso` e selecione "New" > "Java Class".
    * Dê o nome à sua classe (ex: `CalculoTerreno`) e pressione Enter.
5.  **Escreva e Execute o Código**:
    * Copie e cole o código Java no arquivo.
    * Para executar, clique na seta verde ao lado da declaração da classe ou do método `main`, e selecione "Run 'NomeDaClasse.main()'". A saída será exibida na aba "Run" na parte inferior do IntelliJ IDEA.

Lembre-se que para os exemplos que utilizam `Scanner` para entrada de dados, você precisará interagir com o console (Terminal no VS Code, aba Run no IntelliJ) para fornecer os valores quando solicitado. A configuração `Locale.setDefault(Locale.US);` é importante para garantir que a entrada de números decimais com ponto (ex: `10.0`) funcione corretamente, independentemente da configuração regional do seu sistema operacional.
