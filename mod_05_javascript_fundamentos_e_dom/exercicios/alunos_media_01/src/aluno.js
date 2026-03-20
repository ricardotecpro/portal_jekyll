class Aluno {
    constructor() {
        this.nome = "";
        this.idade = 0;
        this.matricula = 0;
        this.media = 0.0;
    }

    cadastrarDados(nome, idade, matricula) {
        this.nome = nome;
        this.idade = idade;
        this.matricula = matricula;
    }

    cadastrarMediaNotas(media) {
        this.media = media;
    }

    exibirInformacoes() {
        console.log("\n=== DADOS DO ALUNO ===");
        console.log("Nome:", this.nome);
        console.log("Idade:", this.idade);
        console.log("Matrícula:", this.matricula);
        console.log("Média de notas:", this.media);
    }
}

module.exports = Aluno;