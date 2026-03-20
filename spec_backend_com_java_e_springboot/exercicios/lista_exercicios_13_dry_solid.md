---
layout: default
title: LISTA EXERCICIOS 13 DRY SOLID
---

DRY (Don't Repeat Yourself) é um princípio de programação que visa evitar repetições de código. Para calcular a área de diferentes figuras geométricas em Java seguindo o princípio DRY, podemos usar herança, interfaces ou até mesmo uma abordagem com enum ou polimorfismo.

Aqui vai uma implementação orientada a objetos usando interfaces e polimorfismo, que segue o princípio DRY:

✅ Código Java para cálculo de áreas com DRY
// Interface comum para todas as figuras
interface FiguraGeometrica {
    double calcularArea();
}

// Classe para Círculo
class Circulo implements FiguraGeometrica {
    private double raio;

    public Circulo(double raio) {
        this.raio = raio;
    }

    @Override
    public double calcularArea() {
        return Math.PI * raio * raio;
    }
}

// Classe para Retângulo
class Retangulo implements FiguraGeometrica {
    private double largura;
    private double altura;

    public Retangulo(double largura, double altura) {
        this.largura = largura;
        this.altura = altura;
    }

    @Override
    public double calcularArea() {
        return largura * altura;
    }
}

// Classe para Triângulo
class Triangulo implements FiguraGeometrica {
    private double base;
    private double altura;

    public Triangulo(double base, double altura) {
        this.base = base;
        this.altura = altura;
    }

    @Override
    public double calcularArea() {
        return (base * altura) / 2;
    }
}

// Classe principal
public class CalculadoraDeAreas {

    // Método genérico que aceita qualquer figura
    public static double calcularAreaFigura(FiguraGeometrica figura) {
        return figura.calcularArea();
    }

    public static void main(String[] args) {
        FiguraGeometrica circulo = new Circulo(5);
        FiguraGeometrica retangulo = new Retangulo(4, 6);
        FiguraGeometrica triangulo = new Triangulo(3, 7);

        System.out.println("Área do Círculo: " + calcularAreaFigura(circulo));
        System.out.println("Área do Retângulo: " + calcularAreaFigura(retangulo));
        System.out.println("Área do Triângulo: " + calcularAreaFigura(triangulo));
    }
}
✅ Vantagens dessa abordagem:
Polimorfismo: Evita if-else ou switch-case para cada tipo de figura.

Extensível: Fácil adicionar novas figuras sem modificar código existente.

DRY: O método calcularAreaFigura é genérico e reaproveitado.

Vamos organizar esse projeto Java em arquivos separados, da forma correta, e eu também vou te mostrar como compilar e executar o programa passo a passo no terminal (ou CMD).

📁 Estrutura de Arquivos do Projeto
Organize os arquivos em uma pasta, por exemplo:

CalculadoraDeAreas/
├── FiguraGeometrica.java
├── Circulo.java
├── Retangulo.java
├── Triangulo.java
└── CalculadoraDeAreas.java
Cada classe/interface vai em seu próprio arquivo .java, com nome igual ao da classe pública.

📄 1. FiguraGeometrica.java
public interface FiguraGeometrica {
    double calcularArea();
}
📄 2. Circulo.java
public class Circulo implements FiguraGeometrica {
    private double raio;

    public Circulo(double raio) {
        this.raio = raio;
    }

    @Override
    public double calcularArea() {
        return Math.PI * raio * raio;
    }
}
📄 3. Retangulo.java
public class Retangulo implements FiguraGeometrica {
    private double largura;
    private double altura;

    public Retangulo(double largura, double altura) {
        this.largura = largura;
        this.altura = altura;
    }

    @Override
    public double calcularArea() {
        return largura * altura;
    }
}
📄 4. Triangulo.java
public class Triangulo implements FiguraGeometrica {
    private double base;
    private double altura;

    public Triangulo(double base, double altura) {
        this.base = base;
        this.altura = altura;
    }

    @Override
    public double calcularArea() {
        return (base * altura) / 2;
    }
}
📄 5. CalculadoraDeAreas.java
public class CalculadoraDeAreas {

    public static double calcularAreaFigura(FiguraGeometrica figura) {
        return figura.calcularArea();
    }

    public static void main(String[] args) {
        FiguraGeometrica circulo = new Circulo(5);
        FiguraGeometrica retangulo = new Retangulo(4, 6);
        FiguraGeometrica triangulo = new Triangulo(3, 7);

        System.out.println("Área do Círculo: " + calcularAreaFigura(circulo));
        System.out.println("Área do Retângulo: " + calcularAreaFigura(retangulo));
        System.out.println("Área do Triângulo: " + calcularAreaFigura(triangulo));
    }
}
✅ Como Compilar e Executar
Requisitos:
Ter o Java JDK instalado (javac e java no terminal).

Estar dentro da pasta do projeto (CalculadoraDeAreas/).

🔧 Passos:
Abra o terminal (ou CMD/prompt) e vá até a pasta:

cd caminho/para/CalculadoraDeAreas
Compile todos os arquivos:

javac *.java
Isso irá compilar todos os .java e gerar arquivos .class.

Execute a classe principal:

java CalculadoraDeAreas
🖥️ Saída esperada:
Área do Círculo: 78.53981633974483
Área do Retângulo: 24.0
Área do Triângulo: 10.5
💡 Dicas Extras
Se quiser organizar melhor, pode usar pacotes (package) e um gerenciador como Maven ou Gradle.

Essa abordagem já segue boas práticas de OOP e o princípio DRY.

Você pode adicionar mais figuras no futuro (como trapézio ou losango) apenas criando novas classes que implementam FiguraGeometrica.

📦 Estrutura com Pacotes
Vamos usar um pacote chamado geometria.

Estrutura de pastas:
CalculadoraDeAreas/
└── geometria/
    ├── FiguraGeometrica.java
    ├── Circulo.java
    ├── Retangulo.java
    ├── Triangulo.java
    └── CalculadoraDeAreas.java
Ou seja, todas as classes vão para dentro da pasta geometria/, que representa o pacote.

📄 Código atualizado (com package)
Em todos os arquivos .java, adicione esta linha no topo:

package geometria;
Exemplo: FiguraGeometrica.java
package geometria;

public interface FiguraGeometrica {
    double calcularArea();
}
Exemplo: Circulo.java
package geometria;

public class Circulo implements FiguraGeometrica {
    private double raio;

    public Circulo(double raio) {
        this.raio = raio;
    }

    @Override
    public double calcularArea() {
        return Math.PI * raio * raio;
    }
}
Exemplo: CalculadoraDeAreas.java
package geometria;

public class CalculadoraDeAreas {

    public static double calcularAreaFigura(FiguraGeometrica figura) {
        return figura.calcularArea();
    }

    public static void main(String[] args) {
        FiguraGeometrica circulo = new Circulo(5);
        FiguraGeometrica retangulo = new Retangulo(4, 6);
        FiguraGeometrica triangulo = new Triangulo(3, 7);

        System.out.println("Área do Círculo: " + calcularAreaFigura(circulo));
        System.out.println("Área do Retângulo: " + calcularAreaFigura(retangulo));
        System.out.println("Área do Triângulo: " + calcularAreaFigura(triangulo));
    }
}
✅ Como Compilar e Executar com Pacotes
1. 📂 Vá até a pasta raiz (onde está a pasta geometria):
cd caminho/para/CalculadoraDeAreas
2. 🛠️ Compile todos os arquivos:
javac geometria/*.java
Isso criará os .class dentro da mesma pasta geometria/.

3. ▶️ Execute o programa principal:
java geometria.CalculadoraDeAreas
Nota: Como usamos package geometria;, precisamos incluir o nome do pacote na hora de executar.

✅ Saída esperada:
Área do Círculo: 78.53981633974483
Área do Retângulo: 24.0
Área do Triângulo: 10.5
📌 Dica: Estrutura de pacotes maiores
Se o projeto crescer, você pode criar subpacotes:

geometria/
├── figuras/
│   ├── Circulo.java
│   ├── Retangulo.java
│   └── Triangulo.java
├── interfaces/
│   └── FiguraGeometrica.java
└── CalculadoraDeAreas.java
E então, nos arquivos:

package geometria.figuras;

import geometria.interfaces.FiguraGeometrica;

Adaptar o projeto para que o usuário possa informar os valores pelo terminal, utilizando a classe Scanner do Java.

Manteremos a estrutura com pacotes (package geometria) e faremos as entradas no main da classe CalculadoraDeAreas.

📦 Estrutura do projeto (mantida)
CalculadoraDeAreas/
└── geometria/
    ├── FiguraGeometrica.java
    ├── Circulo.java
    ├── Retangulo.java
    ├── Triangulo.java
    └── CalculadoraDeAreas.java
✅ Atualize apenas o CalculadoraDeAreas.java:
package geometria;

import java.util.Scanner;

public class CalculadoraDeAreas {

    public static double calcularAreaFigura(FiguraGeometrica figura) {
        return figura.calcularArea();
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("=== Calculadora de Áreas ===");
        System.out.println("Escolha a figura geométrica:");
        System.out.println("1 - Círculo");
        System.out.println("2 - Retângulo");
        System.out.println("3 - Triângulo");
        System.out.print("Opção: ");
        int opcao = scanner.nextInt();

        FiguraGeometrica figura = null;

        switch (opcao) {
            case 1:
                System.out.print("Digite o raio do círculo: ");
                double raio = scanner.nextDouble();
                figura = new Circulo(raio);
                break;
            case 2:
                System.out.print("Digite a largura do retângulo: ");
                double largura = scanner.nextDouble();
                System.out.print("Digite a altura do retângulo: ");
                double alturaRetangulo = scanner.nextDouble();
                figura = new Retangulo(largura, alturaRetangulo);
                break;
            case 3:
                System.out.print("Digite a base do triângulo: ");
                double base = scanner.nextDouble();
                System.out.print("Digite a altura do triângulo: ");
                double alturaTriangulo = scanner.nextDouble();
                figura = new Triangulo(base, alturaTriangulo);
                break;
            default:
                System.out.println("Opção inválida.");
                System.exit(0);
        }

        double area = calcularAreaFigura(figura);
        System.out.printf("A área calculada é: %.2f%n", area);

        scanner.close();
    }
}
📥 Entradas do Usuário
O programa pergunta qual figura o usuário deseja calcular.

Depois solicita os dados necessários para cada uma.

Por fim, calcula e exibe a área.

🧪 Exemplo de execução:
=== Calculadora de Áreas ===
Escolha a figura geométrica:
1 - Círculo
2 - Retângulo
3 - Triângulo
Opção: 2
Digite a largura do retângulo: 5
Digite a altura do retângulo: 10
A área calculada é: 50.00
🛠️ Compilar e Executar (passos)
Vá para a pasta raiz do projeto (onde está a pasta geometria):

cd caminho/para/CalculadoraDeAreas
Compile os arquivos:

javac geometria/*.java
Execute o programa principal:

java geometria.CalculadoraDeAreas

Incluir um loop para repetir os cálculos até o usuário sair, ou permitir que ele calcule várias áreas em sequência.

