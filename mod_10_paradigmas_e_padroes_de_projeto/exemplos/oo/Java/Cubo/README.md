# Projeto Cubos

Este projeto em Java calcula o volume de dois cubos com base nos lados fornecidos pelo usuário e compara qual cubo tem o maior volume.

## Estrutura do Projeto

```
cubos/

├── application/
│   └── Program.java # Contém a lógica principal do programa
├── entities/
│   └── Cubo.java # Contém a classe Cubo com o atributo e método para calcular o volume
└── Main.java # Classe principal que chama o método main do Program
````

### Descrição das Classes

- **`Cubo.java` (entities/Cubo.java):** 
    - Contém a classe `Cubo` com um atributo `lado` (representando o comprimento de um lado do cubo).
    - A classe também possui o método `calcularVolume()`, que retorna o volume do cubo, calculado como `lado^3`.

- **`Program.java` (application/Program.java):** 
    - Contém a lógica do programa, incluindo o método `main` que solicita os lados de dois cubos ao usuário, calcula seus volumes e compara qual cubo tem o maior volume.

- **`Main.java` (Main.java):**
    - Contém a classe `Main`, que chama o método `main` da classe `Program` para iniciar a execução do programa.

## Como Executar o Projeto

### Pré-requisitos
Certifique-se de que o [Java JDK](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html) esteja instalado em sua máquina.

### Passos

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/projeto-cubos.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd projeto-cubos
    ```

3. Compile os arquivos Java:
    ```bash
    javac entities/Cubo.java application/Program.java Main.java
    ```

4. Execute o programa:
    ```bash
    java Main
    ```

### Exemplo de Execução

```text
Enter the side length of cubo X: 
3.0
Enter the side length of cubo Y: 
4.0
Volume of Cubo X = 27.0
Volume of Cubo Y = 64.0
Larger volume: Cubo Y
