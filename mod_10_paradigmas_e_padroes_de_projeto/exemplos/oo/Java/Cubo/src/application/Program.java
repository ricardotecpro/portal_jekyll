package application;

import entities.Cubo;
import java.util.Locale;
import java.util.Scanner;

public class Program {

    public static void main(String[] args) {

        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        Cubo cuboX = new Cubo();
        Cubo cuboY = new Cubo();

        System.out.println("Enter the side length of cubo X: ");
        cuboX.lado = sc.nextDouble();

        System.out.println("Enter the side length of cubo Y: ");
        cuboY.lado = sc.nextDouble();

        double volumeX = cuboX.calcularVolume();
        System.out.println("Volume of Cubo X = " + volumeX);

        double volumeY = cuboY.calcularVolume();
        System.out.println("Volume of Cubo Y = " + volumeY);

        if (volumeX > volumeY) {
            System.out.println("Larger volume: Cubo X");
        } else {
            System.out.println("Larger volume: Cubo Y");
        }

        sc.close();
    }
}
