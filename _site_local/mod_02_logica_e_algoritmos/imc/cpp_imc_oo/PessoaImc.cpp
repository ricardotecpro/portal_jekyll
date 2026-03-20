#include "PessoaImc.h"
#include <cmath>

// Implementação da classe Imc
Imc::Imc(double peso, double altura) : peso(peso), altura(altura) {}

double Imc::getImc() const {
    return peso / std::pow(altura, 2);
}

// Implementação da classe PessoaImc
PessoaImc::PessoaImc(std::string nome, int idade, double peso, double altura)
        : Imc(peso, altura), nome(nome), idade(idade) {}

std::string PessoaImc::classificacao() const {
    double imc = getImc();
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        return "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        return "Sobrepeso";
    } else if (imc >= 30 && imc < 34.9) {
        return "Obesidade grau I";
    } else if (imc >= 35 && imc < 39.9) {
        return "Obesidade grau II";
    } else {
        return "Obesidade grau III (obesidade mórbida)";
    }
}

std::string PessoaImc::toString() const {
    return "Nome: " + nome + "\nIdade: " + std::to_string(idade) +
    "\nPeso: " + std::to_string(peso) + " kg\nAltura: " + std::to_string(altura) +
    " m\nIMC: " + std::to_string(getImc()) + "\nClassificação: " + classificacao();
}
