import java.util.Scanner;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm");

        System.out.println("Digite uma hora do dia (formato HH:MM): ");
        String input = scanner.nextLine().trim();

        try {
            LocalTime time = LocalTime.parse(input, formatter);
            int hour = time.getHour();
            int minute = time.getMinute();

            if (hour < 6) {
                System.out.println("Boa madrugada!");
            } else if (hour < 12) {
                System.out.println("Bom dia!");
            } else if (hour < 18) {
                System.out.println("Boa tarde!");
            } else if (hour <= 23) {
                System.out.println("Boa noite!");
            } else {
                System.out.println("Hora inválida!");
            }

            System.out.printf("Você digitou: %02d:%02d%n", hour, minute);
        } catch (DateTimeParseException e) {
            System.out.println("Formato inválido! Por favor, digite no formato HH:MM.");
        }

        scanner.close();
    }
}
