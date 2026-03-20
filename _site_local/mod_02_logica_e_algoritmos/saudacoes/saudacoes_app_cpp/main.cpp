#include <iostream>
#include <iomanip>
#include <sstream>
#include <string>

int main() {
    std::string input;
    std::cout << "Digite uma hora do dia (formato HH:MM): ";
    std::getline(std::cin, input);

    std::istringstream ss(input);
    int hour, minute;
    char colon;

    if (ss >> std::setw(2) >> hour >> colon >> std::setw(2) >> minute && colon == ':' && hour >= 0 && hour < 24 && minute >= 0 && minute < 60) {
        if (hour < 6) {
            std::cout << "Boa madrugada!" << std::endl;
        } else if (hour < 12) {
            std::cout << "Bom dia!" << std::endl;
        } else if (hour < 18) {
            std::cout << "Boa tarde!" << std::endl;
        } else {
            std::cout << "Boa noite!" << std::endl;
        }

        std::cout << "Voce digitou: " << std::setfill('0') << std::setw(2) << hour << ":" << std::setfill('0') << std::setw(2) << minute << std::endl;
    } else {
        std::cout << "Formato inválido! Por favor, digite no formato HH:MM." << std::endl;
    }

    return 0;
}
