import java.util.Scanner;
public class OlaMundo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Digite seu nome: ");
        String nome = sc.nextLine();
        for (int i = 0; i < 3; i++) {
            System.out.println("Olá, " + nome + "! Bem-vindo(a) ao mundo da programação.");
        }
        sc.close();
    }
}
