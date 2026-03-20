import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Entrada de dados para o retângulo X
        System.out.println("Enter rectangle x values: ");
        double xA = sc.nextDouble();
        double xB = sc.nextDouble();
        double areaX = xA * xB;
        System.out.println("Area of X = " + areaX);

        // Entrada de dados para o retângulo Y
        System.out.println("Enter rectangle y values: ");
        double yA = sc.nextDouble();
        double yB = sc.nextDouble();
        double areaY = yA * yB;
        System.out.println("Area of Y = " + areaY);

        // Comparando as áreas
        if (areaX > areaY) {
            System.out.println("Larger area: X");
        } else {
            System.out.println("Larger area: Y");
        }

        sc.close();
    }
}
