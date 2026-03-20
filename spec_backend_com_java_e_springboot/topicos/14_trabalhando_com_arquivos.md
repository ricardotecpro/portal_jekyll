---
layout: default
title: ☕️ Java: Trabalhando com Arquivos 📁
---

# ☕️ Java: Trabalhando com Arquivos 📁

Este capítulo aborda como manipular arquivos em Java, cobrindo leitura, escrita e manipulação de diretórios, utilizando as classes principais do pacote `java.io`.

## 📄➡️💻 Lendo Arquivos de Texto com `File` e `Scanner`

Uma forma comum de ler dados de arquivos de texto é utilizando a classe `File` para representar o arquivo e a classe `Scanner` para realizar a leitura e parsing do conteúdo.

### 🧱 Classes Essenciais

* **`File`**: Representa de forma abstrata um arquivo ou diretório no sistema de arquivos. Permite verificar a existência, obter informações como caminho, nome, etc.
    * Documentação: `https://docs.oracle.com/javase/10/docs/api/java/io/File.html`
* **`Scanner`**: Um leitor de texto que pode analisar tipos primitivos e strings usando expressões regulares. É muito útil para ler entradas de diversas fontes, incluindo arquivos.
    * Documentação: `https://docs.oracle.com/javase/10/docs/api/java/util/Scanner.html`
* **`IOException`**: Uma exceção que é lançada quando ocorre um erro de E/S (Entrada/Saída). É uma *checked exception*, o que significa que o programador deve explicitamente tratá-la (com `try-catch`) ou declarar que o método pode lançá-la (com `throws`).
    * Documentação: `https://docs.oracle.com/javase/10/docs/api/java/io/IOException.html`

### Exemplo Prático: Lendo Linhas de um Arquivo

O código a seguir demonstra como ler todas as linhas de um arquivo de texto chamado `in.txt` localizado em `C:\temp\`.

```java
package aplicacao;

import java.io.File;
import java.io.IOException;
import java.util.Scanner;

public class Programa {

    public static void main(String[] args) {
        File arquivo = new File("C:\\temp\\in.txt"); // Cria um objeto File representando o arquivo
        Scanner sc = null; // Declara o Scanner fora do try para que seja acessível no finally

        try {
            sc = new Scanner(arquivo); // Inicializa o Scanner com o arquivo
            System.out.println("Conteúdo do arquivo:");
            while (sc.hasNextLine()) { // Verifica se há uma próxima linha no arquivo
                System.out.println(sc.nextLine()); // Lê e imprime a próxima linha
            }
        } catch (IOException e) {
            // Trata possíveis erros de E/S, como arquivo não encontrado
            System.out.println("Erro ao ler o arquivo: " + e.getMessage());
        } finally {
            // Bloco finally é sempre executado, ideal para fechar recursos
            if (sc != null) {
                sc.close(); // Fecha o Scanner para liberar recursos do sistema
            }
        }
    }
}
```

**Conceitos Complementares:**
* **Caminhos de Arquivo**: No Windows, os caminhos usam `\` como separador. Em Java, `\` é um caractere de escape, então você precisa usar `\\` em literais String (ex: `"C:\\temp\\in.txt"`) ou `/` que funciona na maioria dos sistemas (`"C:/temp/in.txt"`).
* **Tratamento de Exceções**: O bloco `try-catch` é fundamental para lidar com `IOException` que pode ocorrer se o arquivo não existir, se não houver permissão de leitura, etc.
* **Fechamento de Recursos**: É crucial fechar `Scanner` (e outros streams) no bloco `finally` para evitar vazamento de recursos, garantindo que o arquivo seja liberado pelo sistema operacional.

## 📖💨 `FileReader` e `BufferedReader`

Para leitura de arquivos de texto baseada em caracteres, especialmente arquivos maiores, `FileReader` em conjunto com `BufferedReader` oferece uma alternativa eficiente.

### 🧱 Classes Essenciais

* **`FileReader`**: É uma *stream* (fluxo) de conveniência para ler arquivos de caracteres. Ele lê o arquivo caractere por caractere.
    * Documentação: `https://docs.oracle.com/javase/10/docs/api/java/io/FileReader.html`
* **`BufferedReader`**: Envolve um `Reader` (como `FileReader`) e adiciona um buffer interno. Isso torna a leitura de caracteres, arrays e linhas mais eficiente, pois reduz o número de acessos diretos ao disco. Possui o método `readLine()` que é muito útil.
    * Documentação: `https://docs.oracle.com/javase/10/docs/api/java/io/BufferedReader.html`
    * Diferença entre `BufferedReader` e `FileReader`: `https://stackoverflow.com/questions/9648811/specific-difference-between-bufferedreader-and-filereader`

### Exemplo Prático: Leitura Eficiente com Buffer

```java
package aplicacao;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class Programa {

    public static void main(String[] args) {
        String caminho = "C:\\temp\\in.txt"; // Caminho do arquivo a ser lido
        FileReader fr = null;
        BufferedReader br = null;

        try {
            fr = new FileReader(caminho); // Cria um leitor de arquivo
            br = new BufferedReader(fr); // Adiciona buffer para leitura eficiente

            System.out.println("Conteúdo do arquivo (com BufferedReader):");
            String linha = br.readLine(); // Lê a primeira linha

            while (linha != null) { // Continua enquanto houver linhas no arquivo
                System.out.println(linha); // Imprime a linha atual
                linha = br.readLine(); // Lê a próxima linha
            }
        } catch (IOException e) {
            System.out.println("Erro ao ler o arquivo: " + e.getMessage());
        } finally {
            try {
                if (br != null) {
                    br.close(); // Fecha o BufferedReader (que também fecha o FileReader aninhado)
                }
                if (fr != null && br == null) { // Caso o BufferedReader não tenha sido inicializado
                    fr.close();
                }
            } catch (IOException e) {
                // Trata erro ao tentar fechar os leitores
                System.out.println("Erro ao fechar o leitor: " + e.getMessage());
                e.printStackTrace();
            }
        }
    }
}
```

**Conceitos Complementares:**
* **Streams de Caracteres**: `FileReader` e `BufferedReader` são parte da hierarquia de `Reader`, que são streams orientados a caracteres, ideais para manipular texto.
* **Buffering**: `BufferedReader` melhora significativamente o desempenho ao ler dados em blocos maiores da fonte subjacente (disco, rede) para um buffer na memória, e então entregando os dados do buffer conforme solicitado. Isso minimiza o número de operações de E/S físicas.

## 🛠️🔒 Bloco `try-with-resources`

Introduzido no Java 7, o bloco `try-with-resources` simplifica o gerenciamento de recursos que precisam ser fechados (como streams de arquivos), garantindo que sejam fechados automaticamente ao final do bloco, mesmo que ocorram exceções.

* **Vantagens**: Código mais limpo, menos verboso e menor risco de vazamento de recursos, pois o fechamento é automático.
* Recursos declarados no `try(...)` devem implementar a interface `AutoCloseable` ou `Closeable`.
* Documentação: `https://docs.oracle.com/javase/tutorial/essential/exceptions/tryResourceClose.html`

### Exemplo Prático: `try-with-resources` para Leitura

```java
package aplicacao;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class Programa {

    public static void main(String[] args) {
        String caminho = "C:\\temp\\in.txt";

        // Recursos (br) são declarados dentro dos parênteses do try
        try (BufferedReader br = new BufferedReader(new FileReader(caminho))) {
            System.out.println("Conteúdo do arquivo (com try-with-resources):");
            String linha = br.readLine(); // Lê a primeira linha

            while (linha != null) {
                System.out.println(linha);
                linha = br.readLine(); // Lê a próxima linha
            }
        } catch (IOException e) {
            // Trata erros de E/S
            System.out.println("Erro ao ler o arquivo: " + e.getMessage());
        }
        // Não é necessário o bloco finally para fechar 'br', pois ele será fechado automaticamente.
    }
}
```

**Por que usar `try-with-resources`?**
Ele torna o código mais seguro e legível. O compilador Java gera automaticamente o código `finally` necessário para fechar os recursos.

## 💻➡️📄 `FileWriter` e `BufferedWriter`

Para escrever dados em arquivos de texto, as classes `FileWriter` e `BufferedWriter` são comumente utilizadas, oferecendo funcionalidades análogas às suas contrapartes de leitura.

### 🧱 Classes Essenciais

* **`FileWriter`**: Uma *stream* de conveniência para escrever arquivos de caracteres.
    * Documentação: `https://docs.oracle.com/javase/10/docs/api/java/io/FileWriter.html`
    * Construtores importantes:
        * `new FileWriter(path)`: Cria um novo arquivo para escrita. Se o arquivo já existir, ele será sobrescrito.
        * `new FileWriter(path, true)`: Se o arquivo existir, os novos dados serão acrescentados ao final do arquivo (modo *append*). Se não existir, um novo arquivo será criado.
* **`BufferedWriter`**: Envolve um `Writer` (como `FileWriter`) e adiciona um buffer interno para tornar a escrita de caracteres, arrays e strings mais eficiente. Frequentemente usado com `newLine()` para adicionar quebras de linha de forma portável.
    * Documentação: `https://docs.oracle.com/javase/10/docs/api/java/io/BufferedWriter.html`

### Exemplo Prático: Escrevendo Linhas em um Arquivo

O código a seguir cria (ou sobrescreve) um arquivo `out.txt` e escreve algumas linhas nele.

```java
package aplicacao;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class Programa {

    public static void main(String[] args) {
        String[] linhas = new String[] { "Bom dia", "Boa tarde", "Boa noite" };
        String caminho = "C:\\temp\\out.txt"; // Caminho do arquivo de saída

        // Usando try-with-resources para garantir que BufferedWriter e FileWriter sejam fechados
        // O segundo argumento 'true' em FileWriter habilita o modo append: new FileWriter(caminho, true)
        try (BufferedWriter bw = new BufferedWriter(new FileWriter(caminho))) {
            System.out.println("Escrevendo no arquivo: " + caminho);
            for (String linha : linhas) {
                bw.write(linha); // Escreve a string da linha
                bw.newLine();    // Adiciona uma nova linha (quebra de linha específica do sistema)
            }
            System.out.println("Arquivo escrito com sucesso!");
        } catch (IOException e) {
            System.out.println("Erro ao escrever no arquivo: " + e.getMessage());
            e.printStackTrace();
        }
    }
}
```
**Conceitos Complementares:**
* **Streams de Escrita**: `FileWriter` e `BufferedWriter` são parte da hierarquia `Writer`, streams orientados a caracteres para saída.
* **Flush vs. Close**: `BufferedWriter` armazena dados em um buffer. A escrita no disco pode não ocorrer imediatamente. Chamar `bw.flush()` força a escrita dos dados do buffer para o arquivo. Chamar `bw.close()` também faz o `flush()` antes de fechar o stream. Com `try-with-resources`, `close()` é chamado automaticamente.

## 🗂️ Manipulando Pastas (Diretórios) com `File`

A classe `File` não serve apenas para arquivos, mas também para manipular diretórios (pastas).

### Exemplo Prático: Listando Pastas e Arquivos, Criando Subdiretório

```java
package aplicacao;

import java.io.File;
import java.util.Scanner;

public class Programa {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Digite o caminho de uma pasta: ");
        String caminhoStr = sc.nextLine(); // Ex: C:\Users\SeuUsuario\Documentos

        File objetoCaminho = new File(caminhoStr); // Cria um objeto File para o caminho fornecido

        // Listar todas as subpastas (diretórios)
        File[] pastas = objetoCaminho.listFiles(File::isDirectory);
        System.out.println("PASTAS ENCONTRADAS:");
        if (pastas != null) {
            for (File pasta : pastas) {
                System.out.println(pasta.getName()); // Imprime o nome da pasta
            }
        }

        // Listar todos os arquivos dentro da pasta
        File[] arquivos = objetoCaminho.listFiles(File::isFile);
        System.out.println("
ARQUIVOS ENCONTRADOS:");
        if (arquivos != null) {
            for (File arquivo : arquivos) {
                System.out.println(arquivo.getName()); // Imprime o nome do arquivo
            }
        }

        // Criar um subdiretório chamado "subdir" dentro da pasta informada
        // File.separator é usado para portabilidade de sistema operacional ('\' no Windows, '/' no Linux/Mac)
        boolean sucesso = new File(caminhoStr + File.separator + "nova_subpasta").mkdir();
        if (sucesso) {
            System.out.println("
Diretório 'nova_subpasta' criado com sucesso!");
        } else {
            System.out.println("
Falha ao criar o diretório 'nova_subpasta' (pode já existir ou faltar permissão).");
        }

        sc.close();
    }
}
```

**Métodos Úteis da Classe `File` para Diretórios:**
* `isDirectory()`: Retorna `true` se o `File` representa um diretório.
* `isFile()`: Retorna `true` se o `File` representa um arquivo normal.
* `listFiles()`: Retorna um array de `File` com os arquivos e diretórios contidos no diretório representado por este `File`. Pode ser filtrado usando `FileFilter` ou referências de método (como `File::isDirectory`).
* `mkdir()`: Tenta criar o diretório nomeado por este `File`. Retorna `true` se bem-sucedido.
* `mkdirs()`: Cria o diretório nomeado por este `File`, incluindo quaisquer diretórios pai necessários que não existam.

## 🗺️ Informações do Caminho do Arquivo

A classe `File` também permite obter diversas informações sobre o caminho de um arquivo ou diretório.

### Exemplo Prático: Obtendo Detalhes do Caminho

```java
package aplicacao;

import java.io.File;
import java.util.Scanner;

public class Programa {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Digite o caminho de um arquivo ou pasta: ");
        String caminhoStr = sc.nextLine(); // Ex: C:\temp\in.txt ou C:\temp

        File objetoCaminho = new File(caminhoStr);

        System.out.println("--- Informações do Caminho ---");
        // getPath(): Retorna o caminho completo como string.
        System.out.println("Caminho completo (getPath): " + objetoCaminho.getPath());

        // getParent(): Retorna o caminho do diretório pai como string, ou null se não houver pai.
        System.out.println("Diretório pai (getParent): " + objetoCaminho.getParent());

        // getName(): Retorna o nome do arquivo ou diretório (a última parte do caminho).
        System.out.println("Nome do arquivo/pasta (getName): " + objetoCaminho.getName());

        // exists(): Verifica se o arquivo ou diretório existe.
        System.out.println("Existe? (exists): " + objetoCaminho.exists());

        if (objetoCaminho.exists()) {
            // length(): Retorna o tamanho do arquivo em bytes (0 para diretórios, geralmente).
            System.out.println("Tamanho (length): " + objetoCaminho.length() + " bytes");
            // lastModified(): Retorna a data da última modificação em milissegundos desde a época.
            System.out.println("Última modificação (lastModified): " + new java.util.Date(objetoCaminho.lastModified()));
        }

        sc.close();
    }
}
```

---

## ⚙️ Configurando o Ambiente e Executando os Exemplos

Os exemplos de código Java fornecidos podem ser compilados e executados em qualquer ambiente de desenvolvimento Java padrão. Aqui estão algumas dicas para **VS Code** e **IntelliJ IDEA**:

### Para VS Code:
1.  **Instalação**: Certifique-se de ter o JDK (Java Development Kit) instalado. Instale o "Extension Pack for Java" da Microsoft no VS Code.
2.  **Estrutura do Projeto**: Você pode simplesmente criar uma pasta para seu projeto.
3.  **Criando Arquivos**: Crie arquivos `.java` (por exemplo, `Programa.java`) dentro da pasta do projeto. Se estiver usando pacotes (ex: `package aplicacao;`), crie a estrutura de pastas correspondente (ex: `pasta_do_projeto/aplicacao/Programa.java`).
4.  **Execução**: Abra o arquivo `.java` que contém o método `main`. Clique com o botão direito no editor e selecione "Run Java" ou use o botão "Run" que aparece acima do método `main`.
5.  **Entrada de Dados (Scanner)**: A entrada de dados via `Scanner(System.in)` ocorrerá no terminal integrado do VS Code.
6.  **Arquivos de Exemplo**: Crie os arquivos `in.txt` ou `out.txt` na pasta `C:\temp\` ou ajuste os caminhos no código para um local de sua preferência (por exemplo, dentro da pasta do projeto).

### Para IntelliJ IDEA:
1.  **Instalação**: Certifique-se de ter o JDK instalado.
2.  **Novo Projeto**:
    * Abra o IntelliJ IDEA e clique em "New Project".
    * Selecione "Java" na lista à esquerda. Escolha o seu JDK. Clique em "Next".
    * Você pode optar por criar um projeto a partir de um template (Command Line App) ou um projeto vazio. Dê um nome ao projeto e defina sua localização.
3.  **Estrutura do Projeto**: Por padrão, os arquivos fonte (`.java`) devem ser colocados na pasta `src`.
4.  **Criando Arquivos**: Clique com o botão direito na pasta `src` (ou em um subpacote dentro de `src`) e selecione "New" -> "Java Class". Dê o nome à classe (ex: `Programa`).
5.  **Pacotes**: Se o código usa `package aplicacao;`, crie um pacote chamado `aplicacao` dentro de `src` (clique direito em `src` -> New -> Package).
6.  **Execução**: Abra o arquivo `.java` com o método `main`. Clique na seta verde ao lado da declaração do método `main` ou da classe e selecione "Run 'Programa.main()'".
7.  **Entrada de Dados (Scanner)**: A entrada de dados será feita no painel "Run" na parte inferior da IDE.
8.  **Arquivos de Exemplo**: Assim como no VS Code, crie os arquivos de texto no local esperado (`C:\temp\`) ou modifique os caminhos no código.

Lembre-se de que para os exemplos que manipulam arquivos em um caminho específico como `"C:\\temp\\in.txt"`, você precisará criar essa pasta e arquivo manualmente antes de executar o código que tenta lê-lo.

---

## 🎯 Exercício Proposto

**Objetivo:** Fazer um programa para ler o caminho de um arquivo `.csv` contendo os dados de itens vendidos.

**Detalhes:**
1.  Cada item no arquivo de origem possui um nome, preço unitário e quantidade, separados por vírgula.
2.  Você deve gerar um novo arquivo chamado `"summary.csv"`.
3.  Este novo arquivo deve ser localizado em uma subpasta chamada `"out"` a partir da pasta original do arquivo de origem.
4.  O arquivo `"summary.csv"` deve conter apenas o nome e o valor total para aquele item (preço unitário multiplicado pela quantidade), conforme exemplo.

**Exemplo:**

**Arquivo de Origem (`source.csv`):**
```csv
TV LED,1290.99,1
Video Game Chair,350.50,3
Iphone X,900.00,2
Samsung Galaxy 9,850.00,2
```

**Arquivo de Saída (`out/summary.csv`):**
```csv
TV LED,1290.99
Video Game Chair,1051.50
Iphone X,1800.00
Samsung Galaxy 9,1700.00
```

**Dicas para o Exercício:**
* Use `Scanner` ou `BufferedReader` para ler o arquivo de origem linha por linha.
* Para cada linha, use o método `split(",")` da classe `String` para separar os campos.
* Converta preço e quantidade para tipos numéricos (`Double.parseDouble()`, `Integer.parseInt()`).
* Crie o diretório "out" usando `File.mkdir()` se ele não existir.
* Use `BufferedWriter` e `FileWriter` para escrever no arquivo `summary.csv`.
* Lembre-se de formatar o valor total para duas casas decimais, se necessário. Pode usar `String.format("%.2f", valor)` ou `DecimalFormat`.

Este exercício combina várias das técnicas apresentadas, como leitura de arquivos, manipulação de strings, criação de diretórios e escrita de arquivos.
---
## 📚

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)

