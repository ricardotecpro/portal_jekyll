# 🛠️ Capítulo: Instalação de Ferramentas de Desenvolvimento

Este guia apresenta o passo a passo para configurar o ambiente de desenvolvimento para as linguagens C, C++, Python, Java e C\#, com recomendações atualizadas para um fluxo de trabalho moderno e eficiente.

## ⚙️ Ambiente para C e C++

Para programar em C e C++, você precisa de um compilador e uma IDE (Ambiente de Desenvolvimento Integrado).

### 1\. Compilador (MinGW-w64)

O GCC é o compilador padrão para C/C++ no mundo open-source. No Windows, a forma mais fácil de instalá-lo é através do projeto **MinGW-w64**.

**Recomendação Moderna:**
A maneira mais simples é instalar o MinGW através do instalador de um IDE como o Code::Blocks ou configurar o VS Code para gerenciá-lo. Para uma instalação manual:

1.  Acesse o site oficial do MinGW-w64 e baixe o instalador.
2.  Durante a instalação, anote o diretório onde os arquivos foram instalados (ex: `C:\MinGW\bin`).
3.  **Adicione o compilador ao Path do Windows:** Isso permite que você execute o compilador de qualquer terminal.
      * Pesquise por "Editar as variáveis de ambiente do sistema".
      * Clique em "Variáveis de Ambiente...".
      * Na seção "Variáveis do sistema", selecione `Path` e clique em "Editar".
      * Clique em "Novo" e adicione o caminho para a pasta `bin` do MinGW (ex: `C:\MinGW\bin`).

### 2\. IDE

  * **Opção Moderna (Recomendado): Visual Studio Code**

      * Um editor leve e poderoso. Instale a extensão **"C/C++ Extension Pack"** da Microsoft para obter IntelliSense, depuração e compilação.

  * **Opção do Curso Original: Code::Blocks**

      * Uma IDE tradicional e simples. Ao baixar, escolha a versão que já inclui o compilador MinGW (ex: `codeblocks-xx.xxmingw-setup.exe`) para uma instalação mais fácil.

### ✅ Primeiro Programa em C e C++

**C - "Olá, Mundo\!"**

```c
#include <stdio.h>

int main() {
   printf("Ola mundo!\n");
   return 0;
}
```

**C++ - "Olá, Mundo\!"**

```cpp
#include <iostream>

int main() {
   std::cout << "Ola mundo!" << std::endl;
   return 0;
}
```

## 🐍 Ambiente para Python

### 1\. Interpretador Python

1.  Baixe a versão mais recente do Python diretamente do site oficial: `python.org`.
2.  **Importante:** Na primeira tela da instalação, marque a opção **"Add Python to PATH"**. Isso simplifica a execução de scripts pelo terminal.

### 2\. IDE

  * **Opção 1 (Recomendado): Visual Studio Code**

      * Extremamente popular para Python. Instale a extensão **"Python"** da Microsoft para obter uma experiência completa.

  * **Opção 2: PyCharm Community Edition**

      * Uma IDE poderosa e dedicada ao desenvolvimento Python, da JetBrains.

### ✅ Primeiro Programa em Python

```python
print("Ola mundo!")
```

## ☕ Ambiente para Java (Foco em VS Code e IntelliJ)

A configuração do ambiente Java envolve o JDK (Kit de Desenvolvimento Java) e uma IDE.

### 1\. JDK (Java Development Kit)

O JDK é essencial para compilar e executar código Java.

**Recomendação Moderna:**
As IDEs mais modernas, como IntelliJ IDEA e VS Code, podem baixar e gerenciar o JDK para você. Caso queira fazer a instalação manual:

1.  Baixe uma versão LTS (Long-Term Support) do JDK, como o **OpenJDK 17 ou 21**.
2.  Após a instalação, configure as variáveis de ambiente `JAVA_HOME` e `Path` para apontar para a instalação do JDK.
      * `JAVA_HOME`: `C:\Program Files\Java\jdk-17.0.x`
      * `Path`: Adicionar `%JAVA_HOME%\bin`
3.  Teste a instalação no terminal com o comando: `java -version`.

### 2\. IDE (Adaptado do Eclipse)

  * **Opção 1: Visual Studio Code**

      * **Configuração**: Instale a extensão **"Extension Pack for Java"** da Microsoft. Ela inclui tudo o que é necessário para desenvolver, depurar e testar aplicações Java.
      * **Criação de Projeto**: Use a paleta de comandos (`Ctrl+Shift+P`) e digite `"Java: Create Java Project"` para iniciar um novo projeto com a estrutura de pastas correta.

  * **Opção 2: IntelliJ IDEA Community**

      * Uma das IDEs mais poderosas e inteligentes para Java. A versão Community é gratuita.
      * **Configuração**: Ao criar um novo projeto, o IntelliJ detecta os JDKs instalados ou oferece a opção de baixar um novo automaticamente.

### ✅ Primeiro Programa em Java

Este código pode ser executado em qualquer uma das IDEs mencionadas.

```java
// Classe renomeada para seguir boas práticas em português
public class Programa {
    // O método main é o ponto de entrada da aplicação
    public static void main(String[] args) {
        System.out.println("Ola mundo, com Java moderno!");
    }
}
```

## 💻 Ambiente para C\#

### 1\. SDK e IDE (Visual Studio)

Para desenvolvimento C\# no Windows, a forma mais integrada é usar o **Visual Studio**.

1.  Baixe o **Visual Studio Community** (versão gratuita) do site da Microsoft.
2.  Durante a instalação, selecione a carga de trabalho (*workload*) **"Desenvolvimento para desktop com .NET"**. Isso instalará o SDK do .NET e todos os componentes necessários para criar aplicações C\#.

**Alternativa Multiplataforma**: Para Linux, macOS ou para quem prefere um editor mais leve, o **VS Code** com a extensão **"C\# Dev Kit"** é uma excelente opção.

### Dicas para Visual Studio

  * **Indentar código**: `Ctrl + K, Ctrl + D`
  * **Rodar sem depuração**: `Ctrl + F5`
  * **Ajustar fonte**: Segure `Ctrl` e use o *scroll* do mouse.

### ✅ Primeiro Programa em C\#

```csharp
using System;

// Namespace atualizado para um nome genérico
namespace ExemploModerno
{
    class Programa
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Olá, Mundo com C#!");
        }
    }
}
```

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)
