//Principal.cpp
#include <iostream>

using namespace std;

#include "Genero.h"
#include "Filme.h"
#include "Data.h"
#include "Emprestimo.h"

int main() {
    Genero gen1;
    gen1.imprimir();

    Genero gen2(12, "Comedia");
    gen2.imprimir();

//    cout << "desc: " << gen2.descricao << endl;
    cout << "desc: " << gen2.getDescricao() << endl;
    gen1.setId(14);
    gen1.setDescricao("Acao");
    gen1.imprimir();


    Filme filme1;
    filme1.setId(15);
    filme1.setDescricao("Aventura");

    filme1.imprimir();
    filme1.Genero::imprimir();

    Filme filme2(13, "Poeira em alto mar", 14, "Terror");
    filme2.imprimir();

    cout << "ID Genero: " << filme2.Genero::getId() << endl;

    Emprestimo emp1;
    emp1.imprimir();

    Emprestimo emp2(678, Data(20, 4, 2025), Data(15, 5, 2025), "Almir", Filme(15, "Sherek", 56, "Suspense"));
    emp2.imprimir();

    Data emp(15, 4, 2025);
    Data dev(20, 5, 2025);

    Emprestimo emp3(1000, emp, dev, "Diomara", filme2);
    emp3.imprimir();
}
