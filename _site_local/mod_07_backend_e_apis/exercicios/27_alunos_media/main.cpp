#include <iostream>
#include <string>

using namespace std;

class Aluno {
private:
    string nome;
    int idade;
    int matricula;
    float mediaNotas;

public:
    // Construtor padrão
    Aluno() {
        nome = "";
        idade = 0;
        matricula = 0;
        mediaNotas = 0.0;
    }

    // Método para cadastrar os dados do aluno
    void cadastrarDados() {
        cout << "Digite o nome do aluno: ";
        getline(cin, nome);
        cout << "Digite a idade do aluno: ";
        cin >> idade;
        cout << "Digite o número de matrícula do aluno: ";
        cin >> matricula;
        cin.ignore(); // limpar o buffer após cin
    }

    // Método para cadastrar a média de notas
    void cadastrarMediaNotas() {
        cout << "Digite a média de notas do aluno: ";
        cin >> mediaNotas;
        cin.ignore();
    }

    // Método para exibir as informações do aluno
    void exibirInformacoes() {
        cout << "\n--- Informações do Aluno ---\n";
        cout << "Nome: " << nome << endl;
        cout << "Idade: " << idade << endl;
        cout << "Matrícula: " << matricula << endl;
        cout << "Média de Notas: " << mediaNotas << endl;
    }
};

// Função principal
int main() {
    Aluno aluno1;

    aluno1.cadastrarDados();
    aluno1.cadastrarMediaNotas();
    aluno1.exibirInformacoes();

    return 0;
}
