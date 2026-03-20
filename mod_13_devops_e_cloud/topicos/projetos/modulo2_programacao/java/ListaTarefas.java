import java.util.ArrayList;
import java.util.Scanner;

public class ListaTarefas {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        ArrayList<String> tarefas = new ArrayList<>();

        while (true) {
            System.out.print("Digite uma tarefa (ou 'sair' para encerrar): ");
            String tarefa = sc.nextLine();
            if (tarefa.equalsIgnoreCase("sair")) break;
            tarefas.add(tarefa);
        }

        System.out.println("\nSuas tarefas:");
        for (int i = 0; i < tarefas.size(); i++) {
            System.out.println((i+1) + ". " + tarefas.get(i));
        }
        sc.close();
    }
}
