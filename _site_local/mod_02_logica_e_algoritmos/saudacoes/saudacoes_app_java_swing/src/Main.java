import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;

public class Main {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Saudação de Hora do Dia");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(300, 200);

        JPanel panel = new JPanel();
        frame.add(panel);
        placeComponents(panel);

        frame.setVisible(true);
    }

    private static void placeComponents(JPanel panel) {
        panel.setLayout(null);

        JLabel userLabel = new JLabel("Hora (HH:MM):");
        userLabel.setBounds(10, 20, 80, 25);
        panel.add(userLabel);

        JTextField timeText = new JTextField(20);
        timeText.setBounds(100, 20, 165, 25);
        panel.add(timeText);

        JButton loginButton = new JButton("Verificar");
        loginButton.setBounds(10, 80, 150, 25);
        panel.add(loginButton);

        JLabel resultLabel = new JLabel("");
        resultLabel.setBounds(10, 110, 250, 25);
        panel.add(resultLabel);

        // ActionListener para o botão
        loginButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                verificarHora(timeText, resultLabel);
            }
        });

        // KeyListener para capturar a tecla "Enter" no campo de texto
        timeText.addKeyListener(new KeyListener() {
            @Override
            public void keyTyped(KeyEvent e) {}

            @Override
            public void keyPressed(KeyEvent e) {}

            @Override
            public void keyReleased(KeyEvent e) {
                if (e.getKeyCode() == KeyEvent.VK_ENTER) {
                    verificarHora(timeText, resultLabel);
                }
            }
        });
    }

    private static void verificarHora(JTextField timeText, JLabel resultLabel) {
        String input = timeText.getText().trim();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm");

        try {
            LocalTime time = LocalTime.parse(input, formatter);
            int hour = time.getHour();
            int minute = time.getMinute();
            String message;

            if (hour < 6) {
                message = "Boa madrugada!";
            } else if (hour < 12) {
                message = "Bom dia!";
            } else if (hour < 18) {
                message = "Boa tarde!";
            } else if (hour <= 23) {
                message = "Boa noite!";
            } else {
                message = "Hora inválida!";
            }

            resultLabel.setText(message + String.format(" Você digitou: %02d:%02d", hour, minute));
        } catch (DateTimeParseException ex) {
            resultLabel.setText("Formato inválido! Por favor, digite no formato HH:MM.");
        }
    }
}
