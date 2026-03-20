package aplicacao;

import entidades.Cilindro;
import java.util.Scanner;

public class Programa {

    public static Cilindro capturarDadosCilindro(Scanner sc) {
        while (true) {
            try {
                System.out.print("Digite o diâmetro do cilindro (cm): ");
                double diametro = sc.nextDouble();
                System.out.print("Digite a altura do cilindro (cm): ");
                double altura = sc.nextDouble();

                return new Cilindro(diametro, altura);
            } catch (Exception e) {
                System.out.println("Por favor, insira valores válidos (números positivos).");
                sc.nextLine();
            }
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        Cilindro cilindro = capturarDadosCilindro(sc);
        double volume = cilindro.calcularVolume();
        double areaSuperficial = cilindro.calcularAreaSuperficial();

        System.out.printf("\nVolume do cilindro = %.2f ml%n", volume);
        System.out.printf("Área superficial do cilindro = %.2f cm²%n", areaSuperficial);
        System.out.println("\nInformações do Cilindro:");
        cilindro.mostrarDados();

        sc.close();
    }
}
