---
layout: default
title: ☕ Introdução à Linguagem Java
---

# ☕ Introdução à Linguagem Java

Este documento oferece uma introdução à linguagem de programação Java, abordando seu histórico, características, edições, o processo de compilação e execução, e os passos iniciais para configurar um ambiente de desenvolvimento.

## Versões da Linguagem Java

A linguagem Java passou por diversas versões ao longo dos anos, com algumas delas sendo designadas como LTS (Long-Term Support), o que significa que recebem atualizações de segurança e correções por um período mais extenso. Algumas versões notáveis incluem:

* Java 8 LTS
* Java 11 LTS
* Java 17 LTS
* Java 21 LTS, e a 25 a LTS mais recente no momento da última atualização deste conteúdo contextual).

Outras versões intermediárias (10, 12, 13, 14, 15, 16, etc.) introduzem novas funcionalidades que são posteriormente consolidadas nas versões LTS.

## Java - Contextualização

### O que é Java?

Java é mais do que apenas uma linguagem de programação. É um ecossistema completo que inclui:

* **Linguagem de programação**: Define a sintaxe e as regras para escrever código Java.
* **Plataforma de desenvolvimento e execução**: Um ambiente completo que permite desenvolver, compilar e executar aplicações Java.
* **Bibliotecas (API - Application Programming Interface)**: Um vasto conjunto de classes e métodos pré-construídos que facilitam o desenvolvimento de diversas funcionalidades, desde manipulação de strings e redes até interfaces gráficas e acesso a bancos de dados.
* **Ambientes de execução**: Principalmente a Java Virtual Machine (JVM), que permite que o código Java seja executado em diferentes sistemas operacionais.

## Histórico

### Problemas Resolvidos e Motivo de Sucesso

Java ganhou popularidade rapidamente por resolver alguns dos desafios comuns enfrentados por desenvolvedores no início dos anos 90:

* **Gerenciamento de memória**: Diferentemente de linguagens como C/C++, Java automatiza o gerenciamento de memória através de um processo chamado *garbage collection* (coleta de lixo), eliminando a necessidade de alocação e liberação manual de memória e reduzindo erros como *memory leaks* e *dangling pointers*.
* **Portabilidade falha**: Antes de Java, era comum ter que reescrever ou adaptar significativamente partes do código ao mudar de sistema operacional (SO). Java introduziu o conceito "Write Once, Run Anywhere" (WORA - Escreva uma vez, execute em qualquer lugar).
* **Utilização em dispositivos diversos**: Projetada para ser versátil, Java pode ser usada em uma ampla gama de dispositivos, desde servidores robustos até pequenos dispositivos embarcados.
* **Custo**: Sendo uma tecnologia de código aberto (OpenJDK) e com ferramentas de desenvolvimento gratuitas, Java se tornou uma opção acessível para muitos desenvolvedores e empresas.

### Criação e Aquisição

* Java foi criada pela **Sun Microsystems** em meados da década de 1990, liderada por James Gosling.
* Em 2010, a **Oracle Corporation** adquiriu a Sun Microsystems, tornando-se a principal mantenedora da plataforma Java.

### Aspectos Notáveis

* **Compilação para Bytecode**: O código fonte Java (`.java`) é compilado para um formato intermediário chamado *bytecode* (`.class`).
* **Execução em Máquina Virtual (JVM)**: O bytecode é então interpretado e executado pela Java Virtual Machine (JVM), que é específica para cada sistema operacional. Isso garante a portabilidade.
* **Portável, Segura e Robusta**: A JVM e as características da linguagem contribuem para a portabilidade, segurança (com recursos como o Security Manager) e robustez das aplicações Java (tratamento de exceções, por exemplo).
* **Ampla Aplicação**: Java roda em vários tipos de dispositivos, desde servidores corporativos, aplicações desktop, dispositivos móveis (foi a base do Android por muitos anos) e sistemas embarcados.
* **Domínio Corporativo**: Desde o final do século 20, Java tem sido uma das linguagens dominantes no mercado de desenvolvimento de software corporativo.
* Segundo a Oracle, "3 Billion Devices Run Java", destacando sua ampla adoção.

## Edições da Plataforma Java

Java é disponibilizada em diferentes edições para atender a various tipos de aplicações:

* **Java ME (Micro Edition)**: Destinada a dispositivos com recursos limitados, como sistemas embarcados, sensores e dispositivos móveis mais antigos (IoT - Internet of Things).
* **Java SE (Standard Edition)**: É a edição principal (core) da plataforma Java. Fornece as APIs fundamentais e a JVM para o desenvolvimento de aplicações desktop, servidores e aplicações de console. É a base para as outras edições.
* **Java EE (Enterprise Edition)**: Construída sobre o Java SE, a Java EE (atualmente Jakarta EE) fornece um conjunto de especificações e APIs para o desenvolvimento de aplicações corporativas robustas, escaláveis e seguras, como sistemas web e serviços distribuídos.

## Plataforma Java SE

### JVM - Java Virtual Machine

* A JVM é o coração da plataforma Java. É uma máquina abstrata que fornece o ambiente de execução para o bytecode Java.
* Para executar qualquer sistema Java, é necessário ter uma JVM compatível instalada no dispositivo.

### Compilação e Interpretação de Linguagens

Para entender o modelo de execução do Java, é útil compará-lo com outros tipos de linguagens:

* **Linguagens Compiladas (ex: C, C++)**:
    * O código fonte é traduzido diretamente para código de máquina específico de um processador e sistema operacional.
    * O executável resultante é rápido, mas não é portável entre diferentes sistemas operacionais sem recompilação (e, às vezes, adaptações no código).

    *Exemplo conceitual em C++ :*
    ```cpp
    #include <iostream> // Para std::cout e std::cin

    int main() {
        double x, y, media;
        std::cout << "Digite o primeiro número: ";
        std::cin >> x;
        std::cout << "Digite o segundo número: ";
        std::cin >> y;
        media = (x + y) / 2.0; // Cálculo da média
        std::cout << "Média = " << media << std::endl;
        return 0;
    }
    ```
    Este código C++, após compilado, geraria um executável específico para a plataforma onde foi compilado (Windows, Linux, Mac OS). Pode haver necessidade de adaptações para compilar em diferentes sistemas.

* **Linguagens Interpretadas (ex: PHP, JavaScript, Python)**:
    * O código fonte é lido e executado linha por linha por um programa chamado interpretador.
    * Geralmente são mais portáveis, pois o mesmo código pode rodar em qualquer sistema que tenha o interpretador adequado.
    * A execução pode ser mais lenta em comparação com código compilado nativamente.

    *Exemplo conceitual em PHP:*
    ```php
    <?php
    echo "Digite o primeiro número: ";
    $x = trim(fgets(STDIN));
    echo "Digite o segundo número: ";
    $y = trim(fgets(STDIN));
    // É importante converter para número antes de somar, pois fgets lê como string
    $media = (floatval($x) + floatval($y)) / 2;
    echo "Média = " . $media;
    ?>
    ```
    Este script PHP seria executado por um interpretador PHP instalado no sistema operacional.

* **Linguagens Pré-compiladas + Máquina Virtual (ex: Java, C#)**:
    * Java adota uma abordagem híbrida. O código fonte (`.java`) é primeiro compilado para um código intermediário chamado **bytecode** (`.class`).
    * Esse bytecode não é específico de um sistema operacional, mas sim da **Java Virtual Machine (JVM)**.
    * A JVM, que é específica para cada plataforma (Windows, Linux, Mac OS), interpreta (ou compila em tempo real) o bytecode para código de máquina nativo.

    **Modelo de Execução Java:**
    1.  **Código Fonte Java (`MeuPrograma.java`)**
        ```java
        package curso; // Exemplo de pacote
        // importações (ex: java.util.Scanner)

        public class Programa {
            public static void main(String[] args) {
                System.out.println("Olá Mundo!");
            }
        }
        ```
    2.  **Compilador Java (`javac`)** transforma o código fonte em **Bytecode (`Programa.class`)**.
        *Este bytecode é uma representação intermediária e portável.*
    3.  **Java Virtual Machine (JVM)**:
        * Carrega o arquivo `.class`.
        * Verifica a segurança do bytecode.
        * Interpreta o bytecode ou usa a **Compilação Just-In-Time (JIT)**.
            * O compilador JIT traduz o bytecode para código de máquina nativo durante a execução, em seções de código frequentemente usadas. Isso otimiza a performance, tornando a execução quase tão rápida quanto a de código compilado nativamente após um período inicial de "aquecimento".
    4.  **Execução** do código de máquina no hardware subjacente (Windows, Linux, Mac OS, etc.).

    Este modelo permite que o mesmo arquivo `.class` (bytecode) seja executado em qualquer dispositivo que possua uma JVM compatível, alcançando o objetivo "Write Once, Run Anywhere".

    *Exemplo de cálculo de média em Java (adaptado do slide):*
    ```java
    package curso;

    import java.util.Scanner;

    public class Programa {
        public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);
            double x, y, media;

            System.out.print("Digite o primeiro número: ");
            x = sc.nextInt(); // Lê um inteiro, que será promovido a double na atribuição

            System.out.print("Digite o segundo número: ");
            y = sc.nextInt(); // Lê um inteiro, que será promovido a double na atribuição

            media = (x + y) / 2.0; // Divisão de ponto flutuante

            System.out.printf("Média = %.2f%n", media); // %.2f formata para 2 casas decimais, %n para nova linha

            sc.close(); // Fecha o Scanner para liberar recursos
        }
    }
    ```

## Estrutura de uma Aplicação Java

Uma aplicação Java é organizada de forma hierárquica:

1.  **Classes**: A unidade fundamental de programação em Java. Uma aplicação é composta por uma ou mais classes. Cada classe geralmente reside em seu próprio arquivo `.java`.
    *Exemplo: `class MinhaClasse { ... }`*

2.  **Pacotes (Packages)**: São usados para agrupar classes relacionadas logicamente, ajudando a organizar o código e a evitar conflitos de nomes. Fisicamente, pacotes correspondem a estruturas de diretórios.
    *Exemplo: `package com.minhaempresa.projeto.entidades;`*
    * No diagrama são mostrados pacotes como `Entities`, `Services`, `Repositories`.

3.  **Módulos (Java 9+)**: Introduzidos a partir do Java 9, os módulos são um agrupamento lógico de pacotes relacionados. Eles permitem uma melhor encapsulação e organização de grandes aplicações, especificando quais pacotes são exportados (visíveis para outros módulos) e quais são as dependências de outros módulos.
    *Exemplo: um módulo `Financeiro` poderia agrupar pacotes de `entidades`, `servicos` e `repositorios` financeiros.*

4.  **Aplicação**: Uma aplicação Java completa é um agrupamento de módulos (ou pacotes, em versões anteriores ao Java 9) que trabalham juntos para realizar uma tarefa específica, como um sistema de comércio eletrônico.
    * O **Runtime** refere-se ao agrupamento físico dos arquivos (classes, módulos) necessários para executar a aplicação.

## Instalando o Java JDK (Java Development Kit)

Para desenvolver e executar aplicações Java, você precisa do JDK. O JDK inclui o JRE (Java Runtime Environment, que contém a JVM) e ferramentas de desenvolvimento como o compilador (`javac`).

### Builds OpenJDK

Existem várias distribuições (builds) do OpenJDK (a implementação de referência de código aberto do Java SE). Algumas populares incluem:

* **Adoptium Temurin (anteriormente AdoptOpenJDK)**
* **Oracle OpenJDK**
* **Amazon Corretto**
* **Microsoft Build of OpenJDK**
* **Azul Zulu**

### Passos Gerais para Instalação

**No Windows:**

1.  **Baixar o JDK**: Escolha uma distribuição OpenJDK (ex: Adoptium Temurin) e baixe o instalador `.msi` para Windows.
2.  **Instalar o JDK**: Execute o instalador e siga as instruções. Geralmente, ele configura o `PATH` automaticamente.
3.  **Configurar Variáveis de Ambiente (se necessário)**:
    * `JAVA_HOME`: Defina esta variável de ambiente para apontar para o diretório de instalação do JDK (ex: `C:\Program Files\Eclipse Adoptium\jdk-17.0.x.x`).
    * `Path`: Adicione `%JAVA_HOME%\bin` à variável de ambiente `Path` do sistema.
4.  **Verificação**: Abra um novo prompt de comando e digite:
    ```bash
    java -version
    echo %JAVA_HOME%
    ```

**No Linux e Mac:**

1.  **Passos para instalação**:
    * **Linux**: Você pode usar gerenciadores de pacotes como `apt` (Debian/Ubuntu) ou `yum` (Fedora/CentOS). Por exemplo, no Ubuntu:
        ```bash
        sudo apt update
        sudo apt install openjdk-17-jdk # Ou a versão desejada
        ```
    * **Mac**: Você pode baixar um instalador `.dmg` de um provedor OpenJDK ou usar o Homebrew:
        ```bash
        brew install openjdk@17 # Ou a versão desejada
        ```
    * É recomendado consultar a documentação oficial da distribuição OpenJDK escolhida ou guias da comunidade para passos detalhados e configurações específicas.
2.  **Configurar `JAVA_HOME` e `PATH` (se necessário)**: Adicione as seguintes linhas ao seu arquivo de perfil do shell (ex: `~/.bashrc`, `~/.zshrc`):
    ```bash
    export JAVA_HOME=/caminho/para/seu/jdk # Ex: /usr/lib/jvm/java-17-openjdk-amd64
    export PATH=$JAVA_HOME/bin:$PATH
    ```
    Lembre-se de carregar as alterações: `source ~/.bashrc` (ou o arquivo correspondente).
3.  **Verificação**: Abra um novo terminal e digite:
    ```bash
    java -version
    echo $JAVA_HOME
    ```

## Configurando um Ambiente de Desenvolvimento Integrado (IDE)

Uma IDE facilita a escrita, compilação, depuração e execução de código Java.

### Principais IDEs para Java

* **IntelliJ IDEA**: Uma IDE muito popular, conhecida por sua interface inteligente, refatoração poderosa e excelente suporte a frameworks. Possui uma versão Community (gratuita) e uma Ultimate (paga).
* **Visual Studio Code (VS Code)**: Um editor de código leve, mas altamente extensível. Com o "Extension Pack for Java" da Microsoft, ele se torna uma IDE Java completa e eficiente.
* **Eclipse IDE**: Uma IDE tradicional, de código aberto e rica em funcionalidades, com um vasto ecossistema de plugins.
* **Apache NetBeans**: Outra IDE de código aberto de longa data, oferecendo suporte robusto para Java SE, Java EE e outras tecnologias.
* **Spring Tool Suite (STS)**: Uma versão do Eclipse customizada para desenvolvimento com o Spring Framework.
* **Outras**: Existem diversas outras IDEs e editores que também suportam Java.

## Criando seu Primeiro Programa em Java ("Olá Mundo")

Vamos ver os passos gerais para criar um projeto "Olá Mundo" usando VS Code e IntelliJ IDEA.

### 1. Configurando o Workspace/Projeto

* **Conceito de Workspace/Diretório do Projeto**: É a pasta no seu computador onde os arquivos do seu projeto (código fonte, bibliotecas, arquivos de configuração) serão armazenados.

### 2. Criando o Projeto Java

* **Visual Studio Code (com Extension Pack for Java instalado):**
    1.  Abra o VS Code.
    2.  Pressione `Ctrl+Shift+P` (ou `Cmd+Shift+P` no Mac) para abrir a Paleta de Comandos.
    3.  Digite `Java: Create Java Project`.
    4.  Selecione `No build tools` para um projeto simples.
    5.  Escolha uma pasta para o seu projeto e forneça um nome para ele (ex: `MeuPrimeiroApp`).
    6.  O VS Code criará uma estrutura básica de projeto, incluindo uma pasta `src` (para o código fonte) e uma pasta `lib` (para bibliotecas, se necessário).

* **IntelliJ IDEA (Community ou Ultimate):**
    1.  Abra o IntelliJ IDEA.
    2.  Na tela de boas-vindas, clique em `New Project`.
    3.  No painel esquerdo, selecione `Java`.
    4.  Certifique-se de que um `Project SDK` (JDK) está selecionado. Se não, configure-o.
    5.  Opcionalmente, marque `Add sample code` para que o IntelliJ crie uma classe `Main` com um método `main`.
    6.  Clique em `Next` (ou `Create` dependendo da versão).
    7.  Dê um nome ao seu projeto (ex: `MeuPrimeiroApp`) e escolha o local.
    8.  Clique em `Finish` (ou `Create`). O IntelliJ criará a estrutura do projeto, incluindo uma pasta `src`.

### 3. Criando a Classe Principal

A classe principal é onde a execução do seu programa Java começa, através do método `main`.

* **Nome da Classe**: Por convenção, nomes de classes em Java começam com letra maiúscula (PascalCase), por exemplo, `Programa` ou `Main`.
* **Pacote (Package)**: É uma boa prática organizar suas classes em pacotes. Se você não especificar um pacote, a classe será colocada no pacote padrão (geralmente não recomendado para projetos maiores). Por exemplo: `com.meuusuario.meuprimeiroapp`.
    * No VS Code ou IntelliJ, você pode clicar com o botão direito na pasta `src`, selecionar `New Package`, e então criar sua classe dentro desse pacote.

* **Criando a Classe e o Método `main`:**

    * **Visual Studio Code:**
        1.  Na pasta `src` (ou dentro de um pacote que você criou em `src`), clique com o botão direito e selecione `New Java Class`.
        2.  Digite o nome da classe (ex: `Programa`) e pressione Enter.
        3.  Adicione o método `main` dentro da classe:

    * **IntelliJ IDEA:**
        1.  Na pasta `src` (ou dentro de um pacote), clique com o botão direito, selecione `New` -> `Java Class`.
        2.  Digite o nome da classe (ex: `Programa`) e pressione Enter.
        3.  Adicione o método `main`. IntelliJ frequentemente oferece um atalho: digite `psvm` e pressione Tab.

    **Código da Classe `Programa.java`:**
    ```java
    package curso; // Ou o nome do seu pacote, ex: com.meuusuario.meuprimeiroapp

    public class Programa {
        // O método main é o ponto de entrada da aplicação Java
        // public: acessível de qualquer lugar
        // static: pode ser chamado sem criar um objeto da classe
        // void: não retorna nenhum valor
        // main: nome padrão para o método principal
        // String[] args: array de Strings para argumentos de linha de comando
        public static void main(String[] args) {
            System.out.println("Olá Mundo, Java!"); // Imprime a mensagem no console
        }
    }
    ```

### 4. Executando o Programa

* **Visual Studio Code:**
    1.  Abra o arquivo `Programa.java`.
    2.  Você verá um link `Run` acima do método `main`. Clique nele.
    3.  A saída "Olá Mundo, Java!" aparecerá no painel "TERMINAL" ou "DEBUG CONSOLE".

* **IntelliJ IDEA:**
    1.  Abra o arquivo `Programa.java`.
    2.  Clique na seta verde ao lado da declaração da classe ou do método `main`.
    3.  Selecione `Run 'Programa.main()'`.
    4.  A saída aparecerá na janela "Run" na parte inferior da IDE.

### 5. Ajustando o Tamanho da Fonte (Dica Geral de IDEs)

Quase todas as IDEs permitem ajustar o tamanho da fonte para melhor legibilidade:

* Geralmente, `Ctrl +` (Control e sinal de mais) aumenta a fonte.
* E `Ctrl -` (Control e sinal de menos) diminui a fonte.
* No Mac, use `Cmd +` e `Cmd -`.
* Você também pode encontrar configurações detalhadas de fonte nas preferências ou configurações da IDE (ex: `File -> Settings/Preferences -> Editor -> Font`).

Com esses passos, você terá configurado seu ambiente e executado seu primeiro programa Java! A partir daqui, você pode começar a explorar os vastos recursos e bibliotecas que a linguagem Java oferece.


Uma aplicação Java é estruturada em uma hierarquia de componentes que organizam o código de forma lógica e física. A base dessa estrutura são as classes, que são agrupadas em pacotes, os quais por sua vez podem ser agrupados em módulos para formar a aplicação final.

### Níveis da Estrutura de uma Aplicação Java:

  * **Classes**: A aplicação é fundamentalmente composta por classes. Elas são as unidades básicas que contêm os dados e os comportamentos do sistema.

    ```mermaid
    graph TD
        subgraph Aplicação
            A[Class]
            B[Class]
            C[Class]
            D[Class]
            E[Class]
            F[Class]
        end
    ```

  * **Pacotes (Packages)**: Um pacote é um agrupamento lógico de classes que possuem funcionalidades relacionadas. Essa organização ajuda a evitar conflitos de nomes e a estruturar o projeto de forma coesa. Exemplos comuns de pacotes em uma arquitetura de software são `Entities`, `Services` e `Repositories`.

    ```mermaid
    graph TD
        subgraph "Package: Entities"
            direction LR
            ClassE1[Class]
            ClassE2[Class]
            ClassE3[Class]
        end

        subgraph "Package: Services"
            direction LR
            ClassS1[Class]
            ClassS2[Class]
            ClassS3[Class]
        end

        subgraph "Package: Repositories"
            direction LR
            ClassR1[Class]
            ClassR2[Class]
            ClassR3[Class]
        end
    ```

  * **Módulos (Java 9+)**: Um módulo é um agrupamento lógico de pacotes que estão relacionados. O sistema de módulos, introduzido no Java 9, permite um encapsulamento mais forte e uma declaração explícita das dependências, resultando em um agrupamento físico no *runtime*. Por exemplo, um módulo `Financial` pode agrupar os pacotes `Entities`, `Services` e `Repositories`, enquanto um módulo `Graphics` pode conter os pacotes `Graphics2D` e `Graphics3D`.

    ```mermaid
     graph TD
        subgraph "Módulo: Financial"
            direction TB
            P1["Package: Entities"]
            P2["Package: Services"]
            P3["Package: Repositories"]
        end

        subgraph "Módulo: Graphics"
            direction TB
            P4["Package: Graphics2D"]
            P5["Package: Graphics3D"]
        end
    ```

  * **Aplicação**: A aplicação completa é o resultado do agrupamento de módulos relacionados que trabalham juntos para entregar a funcionalidade final do software. Um exemplo é um "Sistema de comércio eletrônico", que seria composto por diversos módulos, cada um responsável por uma parte do sistema.

    ```mermaid
    graph TD
        subgraph "Aplicação: Sistema de Comércio Eletrônico"
            direction LR
            M1[Módulo A]
            M2[Módulo B]
            M3[Módulo C]
            M4[Módulo D]
        end
    ```
    
Em Java, a comunidade de desenvolvimento adota um conjunto de convenções de nomenclatura (*naming conventions*) para tornar o código mais legível, consistente e profissional.

### 🏷️ Padrões de Nomes (Naming Conventions) em Java

* **Classes e Interfaces**
    * **Padrão**: `PascalCase` (também conhecido como *UpperCamelCase*).
    * **Descrição**: Nomes de classes devem ser substantivos e começar com uma letra maiúscula. Se o nome for composto, cada palavra subsequente também começa com uma letra maiúscula.
    * **Exemplos**: `public class Program`, `String`, `Scanner`.

* **Pacotes (Packages)**
    * **Padrão**: `lowercase` (letras minúsculas).
    * **Descrição**: Nomes de pacotes, que são agrupamentos lógicos de classes relacionadas, devem ser escritos inteiramente em letras minúsculas para evitar conflitos em diferentes sistemas de arquivos. O padrão comum é usar o domínio da internet da organização de forma invertida.
    * **Exemplos**: `package course;`, `java.util`, `com.oracle.jdbc`.

* **Variáveis e Métodos**
    * **Padrão**: `camelCase` (também conhecido como *lowerCamelCase*).
    * **Descrição**: A primeira letra do nome é minúscula, e a primeira letra de cada palavra subsequente é maiúscula. Nomes de métodos geralmente são verbos que indicam uma ação.
    * **Exemplos de Variáveis**: `double x, y, average;`, `scanner`, `somaTotal`.
    * **Exemplos de Métodos**: `main(String[] args)`, `nextInt()`, `close()`.

* **Constantes**
    * **Padrão**: `SNAKE_CASE` (também conhecido como *UPPER_CASE*).
    * **Descrição**: Nomes de constantes (variáveis declaradas como `static final`) são escritos inteiramente em letras maiúsculas, com palavras separadas por um subtraço (`_`).
    * **Exemplos**: `Math.PI`, `Integer.MAX_VALUE`.

---
## 📚
Referências
* [Documentação Oficial do Java](https://docs.oracle.com/en/java/)
* [Java Tutorials](https://docs.oracle.com/javase/tutorial/)
* 
---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)

