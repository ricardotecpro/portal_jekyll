import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Criar scanner para ler a entrada do usuário
        Scanner scanner = new Scanner(System.in);

        // Solicitar o número de repetições
        System.out.print("Quantas repetições? ");
        int numRepeticoes = scanner.nextInt();

        // Inicializar variáveis
        String text = "";  // Inicializa o texto como uma string vazia
        int i = 0;         // Inicializa i com 0

        // Loop do-while
        do {
            // Adicionar ao texto
            text += "The number is " + i + "\n";  // Adiciona a frase com o número atual
            i++;
        } while (i < numRepeticoes);

        // Exibir o resultado
        System.out.println(text);

        // Fechar o scanner
        scanner.close();
    }
}
