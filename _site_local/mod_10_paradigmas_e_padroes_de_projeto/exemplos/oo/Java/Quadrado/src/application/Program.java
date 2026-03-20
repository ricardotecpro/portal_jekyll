package application;

import entities.Quadrado;
import java.util.Scanner;

public class Program {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Entrada para o lado dos quadrados
        System.out.println("Enter the side length of square X (in meters): ");
        double ladoX = sc.nextDouble();
        System.out.println("Enter the side length of square Y (in meters): ");
        double ladoY = sc.nextDouble();

        // Criação dos objetos quadrados
        Quadrado quadradoX = new Quadrado(ladoX);
        Quadrado quadradoY = new Quadrado(ladoY);

        // Cálculo da área, perímetro e diagonal
        double areaX = quadradoX.calcularArea();
        double areaY = quadradoY.calcularArea();
        double perimetroX = quadradoX.calcularPerimetro();
        double perimetroY = quadradoY.calcularPerimetro();
        double diagonalX = quadradoX.calcularDiagonal();
        double diagonalY = quadradoY.calcularDiagonal();

        // Exibição dos resultados com 2 casas decimais
        System.out.printf("Area of Square X = %.2f m²\n", areaX);
        System.out.printf("Area of Square Y = %.2f m²\n", areaY);
        System.out.printf("Perimeter of Square X = %.2f m\n", perimetroX);
        System.out.printf("Perimeter of Square Y = %.2f m\n", perimetroY);
        System.out.printf("Diagonal of Square X = %.2f m\n", diagonalX);
        System.out.printf("Diagonal of Square Y = %.2f m\n", diagonalY);

        // Comparação das áreas
        if (areaX > areaY) {
            System.out.println("Larger area: Square X");
        } else if (areaX < areaY) {
            System.out.println("Larger area: Square Y");
        } else {
            System.out.println("Both squares have the same area.");
        }

        sc.close();
    }
}
