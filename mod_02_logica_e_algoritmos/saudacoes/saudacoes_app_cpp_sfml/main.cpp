#include <SFML/Graphics.hpp>
#include <iostream>
#include <ctime>
#include <iomanip>

class GreetingApp {
public:
    GreetingApp() : window(sf::VideoMode(400, 200), "Saudação de Hora do Dia") {
        setupUI();
    }

    void run() {
        while (window.isOpen()) {
            sf::Event event;
            while (window.pollEvent(event)) {
                if (event.type == sf::Event::Closed)
                    window.close();
                else if (event.type == sf::Event::TextEntered) {
                    handleTextInput(event.text.unicode);
                }
            }

            window.clear(sf::Color::White);
            window.draw(inputText);
            window.draw(resultText);
            window.display();
        }
    }

private:
    sf::RenderWindow window;
    sf::Font font;
    sf::Text inputText;
    sf::Text resultText;
    std::string inputString;

    void setupUI() {
        if (!font.loadFromFile("arial.ttf")) {
            std::cerr << "Failed to load font!" << std::endl;
            return;
        }

        inputText.setFont(font);
        inputText.setCharacterSize(24);
        inputText.setFillColor(sf::Color::Black);
        inputText.setPosition(20, 20);
        inputText.setString("Digite uma hora (HH:MM):");

        resultText.setFont(font);
        resultText.setCharacterSize(24);
        resultText.setFillColor(sf::Color::Black);
        resultText.setPosition(20, 80);
    }

    void handleTextInput(sf::Uint32 unicode) {
        if (unicode == '\b') { // Handle backspace
            if (!inputString.empty()) {
                inputString.pop_back();
            }
        } else if (unicode < 128 && std::isdigit(static_cast<char>(unicode))) {
            inputString += static_cast<char>(unicode);
        }

        if (inputString.size() == 5 && inputString[2] == ':') {
            try {
                int hour = std::stoi(inputString.substr(0, 2));
                int minute = std::stoi(inputString.substr(3, 2));

                std::string message;
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

                resultText.setString(message + "\nVocê digitou: " + inputString);
            } catch (const std::invalid_argument &ex) {
                resultText.setString("Formato inválido! Por favor, digite no formato HH:MM.");
            }
        } else {
            resultText.setString("");
        }
    }
};

int main() {
    GreetingApp app;
    app.run();

    return 0;
}
