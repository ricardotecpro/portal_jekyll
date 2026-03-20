import java.util.Scanner;
import java.util.Locale;

public class MediaNotas {
    public static void main(String[] args) {
        // Definir o Locale para garantir o ponto como separador decimal
        Locale.setDefault(Locale.US);

        // Criação do Scanner para entrada do usuário
        Scanner scanner = new Scanner(System.in);

        // Definição do array de notas com 4 elementos
        double[] notas = new double[4];

        // Solicita ao usuário que digite as 4 notas
        for (int i = 0; i < notas.length; i++) {
            System.out.print("Digite a nota " + (i + 1) + ": ");
            notas[i] = scanner.nextDouble();  // Lê a nota e a armazena no array
        }

        // Exibe o array de notas inseridas
        System.out.print("As notas inseridas foram: ");
        for (int i = 0; i < notas.length; i++) {
            System.out.print(notas[i] + " ");
        }
        System.out.println();  // Para pular a linha

        // Variável para armazenar a soma das notas
        double soma = 0;

        // Loop para percorrer o array e somar as notas
        for (int i = 0; i < notas.length; i++) {
            soma += notas[i];  // Adiciona a nota atual à soma
            double mediaParcial = soma / (i + 1);  // Calcula a média parcial
            System.out.printf("Iteração %d | Nota atual: %.2f | Soma: %.2f | Média parcial: %.2f\n",
                              i, notas[i], soma, mediaParcial);
        }

        // Cálculo da média final
        double mediaFinal = soma / notas.length;

        // Exibição do resultado final
        System.out.printf("A média final das notas é: %.2f\n", mediaFinal);

        // Fecha o scanner
        scanner.close();
    }
}
