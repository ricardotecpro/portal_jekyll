import java.util.Scanner;
import java.util.function.BiFunction;
import java.util.stream.Stream;

public class AreaComparator {

    // Função pura para calcular área
    private static final BiFunction<Double, Double, Double> calcularArea = (a, b) -> a * b;

    // Método funcional para obter entrada do usuário
    private static double[] obterValores(String nome, Scanner scanner) {
        System.out.println("Enter rectangle " + nome + " values: ");
        return new double[] { scanner.nextDouble(), scanner.nextDouble() };
    }

    public static void main(String[] args) {
        try (Scanner scanner = new Scanner(System.in)) {

            double[] x = obterValores("X", scanner);
            double[] y = obterValores("Y", scanner);

            double areaX = calcularArea.apply(x[0], x[1]);
            double areaY = calcularArea.apply(y[0], y[1]);

            System.out.println("Area of X = " + areaX);
            System.out.println("Area of Y = " + areaY);

            // Uso de Stream para determinar a maior área de forma declarativa
            String maior = Stream.of(new Object[][] {
                    { "X", areaX },
                    { "Y", areaY }
            }).max((a, b) -> Double.compare((double) a[1], (double) b[1]))
                    .map(a -> (String) a[0])
                    .orElse("Empate");

            System.out.println("Larger area: " + maior);
        }
    }
}
