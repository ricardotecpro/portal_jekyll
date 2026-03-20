# Projeto Triângulo

Este projeto em Java calcula e compara a área de dois triângulos com base nas medidas informadas pelo usuário.

## Estrutura do Projeto
```
Triangulo/
│-- application/
│   │-- Program.java
│-- entities/
│   │-- Triangle.java
│-- Main.java
```

- `entities/Triangle.java`: Define a classe `Triangle` com um método para calcular a área.
- `application/Program.java`: Contém a classe `Program`, que executa a lógica principal do programa.
- `Main.java`: Ponto de entrada do programa.

## Como Executar
1. Certifique-se de estar no diretório raiz do projeto.
2. Compile os arquivos Java:
   ```sh
   javac entities/Triangle.java application/Program.java Main.java
   ```
3. Execute o programa:
   ```sh
   java Main
   ```
4. Insira os valores dos lados dos triângulos quando solicitado.

## Exemplo de Uso
```
Enter the measures of triangle X:
3.0
4.0
5.0
Enter the measures of triangle Y:
6.0
8.0
10.0
Triangle X area: 6.0000
Triangle Y area: 24.0000
Larger area: Y
```

## Requisitos
- Java JDK 8 ou superior instalado.

## Autor
Projeto em Java para cálculo de área de triângulos, com base na fórmula de Heron.

