package application;

import entities.Retangulo;
import java.util.Locale;
import java.util.Scanner;

public class Program {

    public static void main(String[] args) {

        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        Retangulo x = new Retangulo();
        Retangulo y = new Retangulo();

        System.out.println("Enter rectangle x values: ");
        x.comprimento = sc.nextDouble();
        x.largura = sc.nextDouble();

        System.out.println("Enter rectangle y values: ");
        y.comprimento = sc.nextDouble();
        y.largura = sc.nextDouble();

        double areaX = x.calcularArea();
        System.out.println("Area of X = " + areaX);

        double areaY = y.calcularArea();
        System.out.println("Area of Y = " + areaY);

        if (areaX > areaY) {
            System.out.println("Larger area: X");
        } else {
            System.out.println("Larger area: Y");
        }

        sc.close();
    }
}
