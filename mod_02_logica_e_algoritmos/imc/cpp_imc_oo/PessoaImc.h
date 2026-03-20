#ifndef PESSOAIMC_H
#define PESSOAIMC_H

#include <string>

class Imc {
protected:
    double peso;
    double altura;

public:
    Imc(double peso, double altura);
    double getImc() const;
    virtual std::string classificacao() const = 0;
};

class PessoaImc : public Imc {
private:
    std::string nome;
    int idade;

public:
    PessoaImc(std::string nome, int idade, double peso, double altura);
    std::string classificacao() const override;
    std::string toString() const;
};

#endif // PESSOAIMC_H
