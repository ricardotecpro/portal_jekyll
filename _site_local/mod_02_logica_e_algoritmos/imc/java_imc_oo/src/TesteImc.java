import java.util.Scanner;

public class TesteImc {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite o nome: ");
        String nome = scanner.nextLine();

        System.out.print("Digite a idade: ");
        int idade = scanner.nextInt();

        System.out.print("Digite o peso (em kg): ");
        double peso = scanner.nextDouble();

        System.out.print("Digite a altura (em metros): ");
        double altura = scanner.nextDouble();

        PessoaImc pessoa = new PessoaImc(nome, idade, peso, altura);

        System.out.println("IMC: " + pessoa.getImc());
        System.out.println("Classificação: " + pessoa.classificacao());

        scanner.close();
    }
}
