---
layout: default
title: Capítulo: Instalação das Ferramentas de Linguagens 🛠️
---

## Capítulo: Instalação das Ferramentas de Linguagens 🛠️

### Compilador GCC (MinGW para Windows) ⚙️
Para programar em C e C++, é comum utilizarmos o compilador GCC. No Windows, uma opção popular é o MinGW (Minimalist GNU for Windows), que oferece um conjunto de ferramentas de compilação GNU, incluindo o GCC.

**Instalação:**
1.  Acesse o site oficial do MinGW para baixar o instalador.
2.  Durante a instalação, certifique-se de selecionar os compiladores C e C++.
3.  Após a instalação, é crucial adicionar o diretório `bin` do MinGW (geralmente `C:\MinGW\bin`) à variável de ambiente `Path` do sistema. Isso permite que o compilador seja acessado de qualquer local no terminal.

**Variável de ambiente Path:**
Adicionar `C:\MinGW\bin` ao Path do sistema permite que você execute comandos GCC (como `gcc` ou `g++`) diretamente do prompt de comando ou terminal.

**Conceito Complementar: Compilador**
Um compilador é um programa de computador que traduz o código-fonte escrito em uma linguagem de programação de alto nível (como C, C++, Java) em uma linguagem de máquina ou em um código intermediário que pode ser executado pelo processador. O GCC (GNU Compiler Collection) é um sistema de compiladores que suporta várias linguagens de programação.

### IDE: Code::Blocks 🧱
Code::Blocks é um Ambiente de Desenvolvimento Integrado (IDE) gratuito, de código aberto e multiplataforma que suporta múltiplos compiladores, incluindo o GCC.

**Download e Instalação:**
1.  Acesse a seção de downloads do site oficial do Code::Blocks.
2.  Recomenda-se baixar a versão que inclui o MinGW (por exemplo, `codeblocks-xx.xxmingw-setup.exe`), especialmente se você ainda não configurou um compilador. Caso contrário, a versão `codeblocks-xx.xx-setup.exe` é suficiente se o GCC/MinGW já estiver instalado e configurado no `Path`.

### Primeiro Programa em C
O primeiro programa em C é tradicionalmente um "Olá, mundo!", que demonstra a estrutura básica de um programa C e como exibir texto no console.

**Estrutura do Código:**
O código VisualG correspondente seria:
```visualg
Algoritmo "primeiro"
Var
Inicio
  escreval("Ola mundo!")
Fimalgoritmo
```

**Código em C:**
```c
#include <stdio.h> // Biblioteca padrão de entrada/saída

int main() { // Função principal onde a execução do programa começa
  printf("Ola mundo!
"); // Função para imprimir texto no console. 
 é um caractere de nova linha.
  return 0; // Indica que o programa terminou com sucesso
}
```
**Explicação:**
* `#include <stdio.h>`: Inclui a biblioteca padrão de entrada e saída, que contém funções como `printf`.
* `int main()`: É a função principal onde a execução do programa começa. Todo programa C deve ter uma função `main`.
* `printf("Ola mundo!
");`: Chama a função `printf` para exibir a string "Ola mundo!" seguida por uma nova linha (`
`) no console.
* `return 0;`: Indica ao sistema operacional que o programa foi concluído com sucesso.

### Primeiro Programa em C++
Similar ao C, o primeiro programa em C++ também costuma ser um "Olá, mundo!". A sintaxe é um pouco diferente, utilizando a biblioteca `iostream`.

**Estrutura do Código:**
O código VisualG correspondente seria:
```visualg
Algoritmo "primeiro"
Var
Inicio
  escreval("Ola mundo!")
Fimalgoritmo
```

**Código em C++:**
```cpp
#include <iostream> // Biblioteca de entrada/saída para C++

int main() { // Função principal
  std::cout << "Ola mundo!" << std::endl; // Objeto para saída padrão (console). std::endl insere uma nova linha e descarrega o buffer.
  return 0; // Indica que o programa terminou com sucesso
}
```
**Explicação:**
* `#include <iostream>`: Inclui a biblioteca iostream, que permite operações de entrada e saída em C++, como a escrita no console usando `std::cout`.
* `int main()`: A função principal.
* `std::cout << "Ola mundo!" << std::endl;`: Utiliza `std::cout` para enviar a string "Ola mundo!" para a saída padrão (geralmente o console). `std::endl` insere uma nova linha e força a descarga do buffer de saída.
* `return 0;`: Sinaliza a terminação bem-sucedida do programa.

**Conceito Complementar: IDE (Ambiente de Desenvolvimento Integrado)**
Uma IDE é um aplicativo de software que fornece facilidades abrangentes para programadores de computador para o desenvolvimento de software. Uma IDE normalmente consiste em pelo menos um editor de código-fonte, ferramentas de automação de compilação e um depurador. O Code::Blocks é um exemplo, assim como o Visual Studio, Eclipse, IntelliJ IDEA e PyCharm.

---

## Instalação do Python e PyCharm Community 🐍

### Python
Python é uma linguagem de programação de alto nível, interpretada, interativa e orientada a objetos. É conhecida por sua sintaxe clara e legibilidade.

**Download e Instalação:**
1.  Acesse a seção de downloads do site oficial do Python.
2.  Baixe o instalador para o seu sistema operacional.
3.  Durante a instalação no Windows, é **altamente recomendável** marcar a opção "Add Python to PATH" para facilitar a execução de scripts Python pelo terminal.

**Teste no Terminal:**
Após a instalação, abra o terminal (prompt de comando no Windows, terminal no Linux/macOS) e digite:
```bash
python --version
```
Ou para iniciar o interpretador interativo:
```bash
python
```
Para sair do interpretador interativo, digite:
```python
exit()
```

### IDE: PyCharm Community
PyCharm é uma IDE popular para desenvolvimento em Python, desenvolvida pela JetBrains. A edição Community é gratuita e de código aberto.

**Download e Instalação:**
1.  Acesse a página de download do PyCharm no site da JetBrains.
2.  Baixe o instalador da edição Community.
3.  Siga as instruções de instalação.

**Dicas do PyCharm:**
* **Alterar Fonte do Editor:** `File` -> `Settings` -> `Editor` -> `Font`.
* **Verificação Ortográfica:** `File` -> `Settings` -> `Editor` -> `Inspections` -> `Spelling` -> `Typo` (para desabilitar ou configurar).
* **Tamanho da Tabulação e Indentação:** `File` -> `Settings` -> `Editor` -> `Code Style` -> `Python` -> `Tab size` e `Indent`.
* **Indentação Automática (Reformatar Código):** `Ctrl + Alt + L` (Windows/Linux) ou `Cmd + Option + L` (macOS).

### Primeiro Programa em Python
Python é conhecido por sua simplicidade, e o "Olá, mundo!" é um ótimo exemplo disso.

**Estrutura do Código:**
O código VisualG correspondente seria:
```visualg
Algoritmo "primeiro"
Var
Inicio
  escreval("Ola mundo!")
Fimalgoritmo
```

**Código em Python:**
```python
print("Ola mundo!") # Função para imprimir texto no console
```
**Explicação:**
* `print("Ola mundo!")`: A função `print()` é usada para exibir a string "Ola mundo!" no console. Em Python 3, `print` é uma função e requer parênteses.

**Exemplo Prático: Soma de dois números em Python**
```python
# Solicita ao usuário para inserir dois números
numero1 = float(input("Digite o primeiro número: "))
numero2 = float(input("Digite o segundo número: "))

# Calcula a soma
soma = numero1 + numero2

# Exibe o resultado
print(f"A soma de {numero1} e {numero2} é: {soma}")
```
Este exemplo demonstra a entrada de dados com `input()`, conversão para `float` para permitir números decimais, e a formatação de strings (f-strings) para exibir a saída.

---

## Instalação do Java JDK e IDEs (VS Code, IntelliJ IDEA) ☕

### Java JDK (Java Development Kit)
O JDK é um ambiente de desenvolvimento de software usado para desenvolver aplicações e applets Java. Ele inclui o JRE (Java Runtime Environment), um interpretador/loader (java), um compilador (javac), um arquivador (jar), um gerador de documentação (javadoc) e outras ferramentas necessárias no desenvolvimento Java.

**Download e Instalação:**
1.  A Oracle agora requer login para baixar versões mais antigas do JDK. Uma alternativa é utilizar JDKs de outros provedores como AdoptOpenJDK (agora Eclipse Temurin), Amazon Corretto, ou Azul Zulu. Para este exemplo, usaremos a referência ao JDK 11 da Oracle.
2.  Baixe o Java JDK apropriado para o seu sistema operacional (por exemplo, JDK 11 ou uma versão LTS mais recente).
3.  Siga as instruções de instalação.

**Configurar Variáveis de Ambiente do Sistema:**
É essencial configurar as variáveis de ambiente para que o sistema operacional possa localizar as ferramentas do JDK.

1.  **`JAVA_HOME`**:
    * Crie uma nova variável de sistema chamada `JAVA_HOME`.
    * O valor deve ser o caminho para o diretório de instalação do JDK (ex: `C:\Program Files\Java\jdk-11.0.4` ou o caminho correspondente da sua instalação).
2.  **`Path`**:
    * Edite a variável de sistema `Path`.
    * Adicione uma nova entrada: `%JAVA_HOME%\bin` (ou o caminho direto `C:\Program Files\Java\jdk-11.0.4\bin`). Isso permite executar comandos Java como `java` e `javac` de qualquer diretório no terminal.

**Testar no Terminal de Comando:**
Abra um novo terminal e digite:
```bash
java -version
javac -version
```
Se as variáveis estiverem configuradas corretamente, esses comandos exibirão as versões instaladas do Java Runtime e do Java Compiler.

### IDEs para Java: VS Code e IntelliJ IDEA

#### IntelliJ IDEA
IntelliJ IDEA é uma IDE robusta para Java, desenvolvida pela JetBrains. A edição Community é gratuita.

**Download e Instalação:**
1.  Acesse o site da JetBrains e baixe o IntelliJ IDEA Community Edition.
2.  Siga as instruções de instalação.
3.  Ao iniciar, você pode ser solicitado a escolher um "workspace" ou diretório onde seus projetos serão salvos.

#### Visual Studio Code (VS Code) com Extensões Java
VS Code é um editor de código leve, mas poderoso, que pode ser estendido para suportar o desenvolvimento Java através de extensões.

**Configuração para Java no VS Code:**
1.  **Instale o VS Code:** Baixe do site oficial.
2.  **Instale o "Extension Pack for Java" da Microsoft:** Abra o VS Code, vá para a aba de Extensões (Ctrl+Shift+X) e procure por "Extension Pack for Java". Este pacote inclui extensões essenciais como:
    * Language Support for Java™ by Red Hat
    * Debugger for Java
    * Java Test Runner
    * Maven for Java
    * Project Manager for Java
3.  **Configure o JDK:** A extensão geralmente detecta automaticamente o JDK instalado se `JAVA_HOME` estiver configurado. Caso contrário, você pode configurar manualmente o caminho do JDK nas configurações do VS Code (`File` -> `Preferences` -> `Settings`, procure por `java.home`).

### Primeiro Programa em Java
O "Olá, mundo!" em Java introduz conceitos como classes e o método `main`.

**Estrutura do Código:**
O código VisualG correspondente seria:
```visualg
Algoritmo "primeiro"
Var
Inicio
  escreval("Ola mundo!")
Fimalgoritmo
```

**Código em Java:**
```java
// Define o pacote (opcional para arquivos simples, mas boa prática para projetos)
// package curso; // Exemplo de nome de pacote traduzido

// Nome da classe traduzido de "Main" para "ProgramaPrincipal"
public class ProgramaPrincipal {

  // Método principal - ponto de entrada da aplicação Java
  public static void main(String[] args) {
    // Imprime a mensagem no console
    // String literal traduzida
    System.out.println("Olá mundo!");
  }

}
```
**Explicação:**
* `public class ProgramaPrincipal`: Declara uma classe pública chamada `ProgramaPrincipal`. Em Java, todo código reside dentro de classes. O nome do arquivo Java deve ser o mesmo que o nome da classe pública (neste caso, `ProgramaPrincipal.java`).
* `public static void main(String[] args)`: Este é o método principal. A JVM (Java Virtual Machine) inicia a execução de um programa Java chamando este método.
    * `public`: Modificador de acesso que significa que o método é visível de qualquer classe.
    * `static`: Significa que o método pertence à classe `ProgramaPrincipal` e não a uma instância específica da classe. Pode ser chamado sem criar um objeto da classe.
    * `void`: Indica que o método não retorna nenhum valor.
    * `main`: É o nome padrão para o ponto de entrada de uma aplicação Java.
    * `String[] args`: É um array de strings que pode ser usado para passar argumentos de linha de comando para o programa.
* `System.out.println("Olá mundo!");`: Imprime a string "Olá mundo!" no console.
    * `System`: É uma classe final no pacote `java.lang`.
    * `out`: É um membro estático da classe `System` e é uma instância da classe `PrintStream`.
    * `println()`: É um método da classe `PrintStream` que imprime o argumento passado para ele seguido por uma nova linha.

### Utilização Básica de IDEs para Java

#### IntelliJ IDEA:
1.  **Workspace/Projetos:** O IntelliJ organiza o código em projetos. Ao criar um novo projeto (`File` -> `New` -> `Project...`), você especificará o nome do projeto, o local e o SDK Java a ser usado.
2.  **Criar Classe:**
    * No painel "Project", clique com o botão direito na pasta `src` (source).
    * Selecione `New` -> `Java Class`.
    * Digite o nome da classe (ex: `ProgramaPrincipal`).
    * O IntelliJ pode gerar automaticamente o método `main` se você digitar `psvm` e pressionar Tab dentro da classe.
3.  **Executar Programa:**
    * Clique com o botão direito no arquivo com o método `main` ou na própria classe no editor.
    * Selecione `Run 'NomeDaClasse.main()'`.
    * A saída aparecerá na janela "Run" ou "Console".
4.  **Mudar Tamanho da Fonte:**
    * Editor: `File` -> `Settings` -> `Editor` -> `Font`.
    * Interface Geral: `File` -> `Settings` -> `Appearance & Behavior` -> `Appearance` -> `Use custom font`.
    * Zoom com scroll do mouse: `File` -> `Settings` -> `Editor` -> `General` -> marque "Change font size with Ctrl+Mouse Wheel".

#### VS Code com Extensões Java:
1.  **Criar Projeto Java:**
    * Abra a paleta de comandos (`Ctrl+Shift+P` ou `Cmd+Shift+P`).
    * Digite `Java: Create Java Project`.
    * Selecione "No build tools".
    * Escolha um local para o projeto e forneça um nome.
2.  **Criar Classe:**
    * No Explorer do VS Code (`Ctrl+Shift+E`), clique com o botão direito na pasta `src`.
    * Selecione `New Java Class`.
    * Digite o nome da classe (ex: `ProgramaPrincipal`).
    * O VS Code pode oferecer snippets para criar o método `main` (digite `main` e selecione a sugestão).
3.  **Executar Programa:**
    * Abra o arquivo Java que contém o método `main`.
    * Você verá links `Run` e `Debug` acima do método `main`. Clique em `Run`.
    * Alternativamente, clique com o botão direito no editor e selecione `Run Java`.
    * A saída aparecerá no painel "TERMINAL" ou "DEBUG CONSOLE".
4.  **Mudar Tamanho da Fonte:**
    * Editor: `File` -> `Preferences` -> `Settings` (ou `Ctrl+,`). Procure por `Editor: Font Size`.
    * Zoom com scroll do mouse: Procure por `Mouse Wheel Zoom` e marque a opção.

**Exemplo Prático: Classe `Pessoa` em Java**
```java
// package com.exemplo; // Exemplo de nome de pacote

public class Pessoa {
    // Atributos
    private String nome;
    private int idade;

    // Construtor
    public Pessoa(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }

    // Método para obter o nome
    public String getNome() {
        return nome;
    }

    // Método para definir o nome
    public void setNome(String nome) {
        this.nome = nome;
    }

    // Método para obter a idade
    public int getIdade() {
        return idade;
    }

    // Método para definir a idade
    public void setIdade(int idade) {
        if (idade > 0) { // Pequena validação
            this.idade = idade;
        } else {
            System.out.println("Idade deve ser positiva.");
        }
    }

    // Método para exibir informações da pessoa
    public void exibirInformacoes() {
        System.out.println("Nome: " + nome + ", Idade: " + idade);
    }

    // Método main para testar a classe Pessoa
    public static void main(String[] args) {
        // Criando um objeto (instância) da classe Pessoa
        Pessoa pessoa1 = new Pessoa("Maria Silva", 30);
        Pessoa pessoa2 = new Pessoa("João Santos", 25);

        // Usando os métodos do objeto
        pessoa1.exibirInformacoes(); // Saída: Nome: Maria Silva, Idade: 30
        pessoa2.exibirInformacoes(); // Saída: Nome: João Santos, Idade: 25

        pessoa1.setIdade(31);
        System.out.println("Nova idade de " + pessoa1.getNome() + ": " + pessoa1.getIdade());
        // Saída: Nova idade de Maria Silva: 31
    }
}
```
Este exemplo demonstra uma classe `Pessoa` com atributos (nome, idade), construtor, métodos getters/setters e um método para exibir informações. O método `main` dentro da classe `Pessoa` é usado aqui para testar a funcionalidade da classe. Em aplicações maiores, a classe com o método `main` (ponto de entrada da aplicação) é frequentemente separada das classes de modelo (como `Pessoa`).

---

## Instalação do Visual Studio Community 2019 (e versões mais recentes) 💻

Visual Studio é uma IDE da Microsoft usada para desenvolver programas de computador, sites, aplicativos web, serviços web e aplicativos móveis. O Visual Studio Community é uma edição gratuita e completa para desenvolvedores individuais, projetos de código aberto, pesquisa acadêmica, educação e pequenas equipes profissionais.

**Documentação e Download:**
1.  A documentação oficial da Microsoft fornece guias detalhados para instalação.
2.  Para baixar, acesse a página de downloads do Visual Studio no site da Microsoft. Você encontrará o "bootstrapper" do Visual Studio Installer.
3.  Ao executar o Visual Studio Installer, você poderá escolher as "cargas de trabalho" (workloads) que deseja instalar. Para desenvolvimento C#, a carga de trabalho ".NET desktop development" ou "ASP.NET and web development" são comuns.

### Primeiro Programa em C#
C# (pronuncia-se "C Sharp") é uma linguagem de programação moderna, orientada a objetos e desenvolvida pela Microsoft como parte de sua iniciativa .NET.

**Estrutura do Código:**
O código VisualG correspondente seria:
```visualg
Algoritmo "primeiro"
Var
Inicio
  escreval("Ola mundo!")
Fimalgoritmo
```

**Código em C#:**
```csharp
using System; // Importa o namespace System, que contém classes fundamentais e tipos base.

// Define um namespace para organizar o código
namespace PrimeiroPrograma // Namespace traduzido de "Primeiro"
{
    // Define a classe principal do programa
    class Programa // Classe traduzida de "Program"
    {
        // Método Main: ponto de entrada da aplicação C#
        static void Main(string[] args)
        {
            // Escreve "Olá mundo!" no console
            // String literal traduzida
            Console.WriteLine("Olá mundo!");
        }
    }
}
```
**Explicação:**
* `using System;`: Permite o uso de classes do namespace `System` sem precisar prefixá-las com `System.`. A classe `Console` está neste namespace.
* `namespace PrimeiroPrograma`: Namespaces são usados para organizar o código e evitar conflitos de nomes.
* `class Programa`: Declara uma classe chamada `Programa`. Em C#, assim como em Java, todo código executável reside dentro de uma classe.
* `static void Main(string[] args)`: Este é o método principal, o ponto de entrada para qualquer aplicação C#.
    * `static`: O método `Main` deve ser estático para que possa ser chamado sem criar uma instância da classe.
    * `void`: Indica que o método `Main` não retorna um valor.
    * `string[] args`: Permite que o programa receba argumentos de linha de comando.
* `Console.WriteLine("Olá mundo!");`: Usa o método `WriteLine` da classe `Console` para exibir a string "Olá mundo!" no console, seguida por uma nova linha.

**Dicas do Visual Studio:**
* **Indentação Automática:** `CTRL + K, CTRL + D` (pressione Ctrl+K, solte e depois pressione Ctrl+D).
* **Rodar o Projeto (sem depuração):** `CTRL + F5`. (Para rodar com depuração, use `F5`).
* **Alterar Fonte (Zoom):** Mantenha `CTRL` pressionado e use o *scroll* do mouse para aumentar ou diminuir o tamanho da fonte no editor.

**Exemplo Prático: Calculadora Simples em C#**
```csharp
using System;

namespace CalculadoraApp
{
    class Calculadora
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Calculadora Simples em C#");
            Console.WriteLine("-------------------------");

            Console.Write("Digite o primeiro número: ");
            // TryParse é mais seguro que Parse direto, pois não lança exceção se a conversão falhar
            if (!double.TryParse(Console.ReadLine(), out double numero1))
            {
                Console.WriteLine("Entrada inválida para o primeiro número.");
                return; // Encerra o programa se a entrada for inválida
            }

            Console.Write("Digite o segundo número: ");
            if (!double.TryParse(Console.ReadLine(), out double numero2))
            {
                Console.WriteLine("Entrada inválida para o segundo número.");
                return;
            }

            Console.Write("Escolha a operação (+, -, *, /): ");
            string operacao = Console.ReadLine();

            double resultado = 0;
            bool operacaoValida = true;

            switch (operacao)
            {
                case "+":
                    resultado = numero1 + numero2;
                    break;
                case "-":
                    resultado = numero1 - numero2;
                    break;
                case "*":
                    resultado = numero1 * numero2;
                    break;
                case "/":
                    if (numero2 != 0)
                    {
                        resultado = numero1 / numero2;
                    }
                    else
                    {
                        Console.WriteLine("Erro: Divisão por zero não é permitida.");
                        operacaoValida = false;
                    }
                    break;
                default:
                    Console.WriteLine("Operação inválida.");
                    operacaoValida = false;
                    break;
            }

            if (operacaoValida)
            {
                // Usando string interpolada para formatar a saída
                Console.WriteLine($"O resultado de {numero1} {operacao} {numero2} é: {resultado}");
            }
        }
    }
}
```
Este exemplo demonstra:
* Leitura de entrada do usuário com `Console.ReadLine()`.
* Conversão segura de string para `double` usando `double.TryParse()`.
* Uso da estrutura `switch` para lidar com diferentes operações.
* Tratamento de erro para divisão por zero.
* Uso de strings interpoladas (`$"{variavel}"`) para uma formatação de saída mais limpa.

### Conclusão
A instalação e configuração das ferramentas de desenvolvimento são passos fundamentais para iniciar a programação em diferentes linguagens. Cada linguagem tem suas particularidades, mas o processo de instalação do compilador, IDE e criação do primeiro programa é semelhante. Com as ferramentas instaladas, você estará pronto para explorar mais profundamente cada linguagem e desenvolver projetos interessantes. Boa codificação! 🚀
## Referências
- [Documentação do MinGW](http://www.mingw.org/)
- [Documentação do GCC](https://gcc.gnu.org/)
- [Documentação do Code::Blocks](http://www.codeblocks.org/)
- [Documentação do Python](https://docs.python.org/3/)
- [Documentação do PyCharm](https://www.jetbrains.com/pycharm/documentation/)
- [Documentação do Java](https://docs.oracle.com/en/java/)
- [Documentação do IntelliJ IDEA](https://www.jetbrains.com/idea/documentation/)
- [Documentação do Visual Studio](https://docs.microsoft.com/en-us/visualstudio/)
- [Documentação do C#](https://docs.microsoft.com/en-us/dotnet/csharp/)
- [Documentação do Visual Studio Code](https://code.visualstudio.com/docs)
- [Documentação do Visual Studio Community](https://docs.microsoft.com/en-us/visualstudio/get-started/)
- [Documentação do JDK](https://docs.oracle.com/en/java/javase/11/)
- [Documentação do .NET](https://docs.microsoft.com/en-us/dotnet/)
- [Documentação do C++](https://en.cppreference.com/w/)
- [Documentação do C](https://en.cppreference.com/w/c)
- [Documentação do Markdown](https://www.markdownguide.org/)
- [Documentação do VisualG](https://visualg3.com.br/)
- [Documentação do Visual Studio Installer](https://docs.microsoft.com/en-us/visualstudio/install/advanced-build-tools-container?view=vs-2019)
- [Documentação do Visual Studio Code Java](https://code.visualstudio.com/docs/java/java-tutorial)
- [Documentação do PyCharm Community Edition](https://www.jetbrains.com/pycharm/documentation/)
- [Documentação do IntelliJ IDEA Community Edition](https://www.jetbrains.com/idea/documentation/)
- [Documentação do Code::Blocks](http://www.codeblocks.org/documentation)


---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)

