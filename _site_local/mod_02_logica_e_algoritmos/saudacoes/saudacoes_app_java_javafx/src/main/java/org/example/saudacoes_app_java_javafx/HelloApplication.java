package org.example.saudacoes_app_java_javafx;

import javafx.application.Application;
import javafx.geometry.Insets;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.scene.input.KeyCode;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;

import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;

public class HelloApplication extends Application {

    @Override
    public void start(Stage primaryStage) {
        primaryStage.setTitle("Saudação de acordo com a hora do dia");

        Label instructionLabel = new Label("Digite uma hora do dia (formato HH:MM): ");
        TextField timeInput = new TextField();
        Button submitButton = new Button("Enviar");
        Label outputLabel = new Label();

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm");

        // Função para processar a entrada e atualizar a saída
        Runnable processInput = () -> {
            String input = timeInput.getText().trim();
            try {
                LocalTime time = LocalTime.parse(input, formatter);
                int hour = time.getHour();
                int minute = time.getMinute();

                if (hour < 6) {
                    outputLabel.setText("Boa madrugada!");
                } else if (hour < 12) {
                    outputLabel.setText("Bom dia!");
                } else if (hour < 18) {
                    outputLabel.setText("Boa tarde!");
                } else if (hour <= 23) {
                    outputLabel.setText("Boa noite!");
                } else {
                    outputLabel.setText("Hora inválida!");
                }

                outputLabel.setText(outputLabel.getText() + String.format(" Você digitou: %02d:%02d", hour, minute));
            } catch (DateTimeParseException e) {
                outputLabel.setText("Formato inválido! Por favor, digite no formato HH:MM.");
            }
        };

        // Adicionar evento ao botão de submissão
        submitButton.setOnAction(event -> processInput.run());

        // Adicionar evento de tecla ao campo de texto
        timeInput.setOnKeyPressed(event -> {
            if (event.getCode() == KeyCode.ENTER) {
                processInput.run();
            }
        });

        VBox vbox = new VBox(10, instructionLabel, timeInput, submitButton, outputLabel);
        vbox.setPadding(new Insets(20));

        Scene scene = new Scene(vbox, 300, 200);
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}
