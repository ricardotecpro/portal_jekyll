const readline = require("readline");
const Aluno = require("./src/aluno");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const aluno = new Aluno();

rl.question("Digite o nome do aluno: ", (nome) => {
    rl.question("Digite a idade do aluno: ", (idade) => {
        rl.question("Digite a matrícula do aluno: ", (matricula) => {
            aluno.cadastrarDados(nome, parseInt(idade), parseInt(matricula));

            rl.question("Digite a média de notas: ", (media) => {
                aluno.cadastrarMediaNotas(parseFloat(media));
                aluno.exibirInformacoes();

                rl.close();
            });
        });
    });
});