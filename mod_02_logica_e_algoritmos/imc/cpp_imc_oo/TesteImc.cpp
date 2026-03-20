#include <iostream>
#include <string>
#include "PessoaImc.h"

int main() {
    std::string nome;
    int idade;
    double peso, altura;

    std::cout << "Digite o nome: ";
    std::getline(std::cin, nome);

    std::cout << "Digite a idade: ";
    std::cin >> idade;

    std::cout << "Digite o peso (em kg): ";
    std::cin >> peso;

    std::cout << "Digite a altura (em metros): ";
    std::cin >> altura;

    PessoaImc pessoa(nome, idade, peso, altura);

    std::cout << "IMC: " << pessoa.getImc() << std::endl;
    std::cout << "Classificação: " << pessoa.classificacao() << std::endl;

    return 0;
}
