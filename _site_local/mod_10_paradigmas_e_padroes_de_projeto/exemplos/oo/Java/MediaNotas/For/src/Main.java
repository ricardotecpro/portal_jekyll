//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        // Definição do array com as 4 notas
        double[] notas = {7.5, 8.0, 6.5, 9.0};

        // Variável para armazenar a soma das notas
        double soma = 0;

        // Loop para percorrer o array e somar as notas
        for (int i = 0; i < notas.length; i++) {
            soma += notas[i]; // Adiciona a nota atual à soma
            double mediaParcial = soma / (i + 1); // Calcula a média parcial
            System.out.println("Iteração " + i + " | Nota atual: " + notas[i] +
                               " | Soma: " + soma + " | Média parcial: " + mediaParcial);
        }

        // Cálculo da média final
        double mediaFinal = soma / notas.length;

        // Exibição do resultado final
        System.out.println("A média final das notas é: " + mediaFinal);
    }
}