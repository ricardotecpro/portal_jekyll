class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    getNome() {
        return this.nome;
    }

    setNome(nome) {
        this.nome = nome;
    }

    getIdade() {
        return this.idade;
    }

    setIdade(idade) {
        this.idade = idade;
    }
}

// Testando a classe
const pessoa = new Pessoa("João", 25);
console.log("Nome:", pessoa.getNome());
console.log("Idade:", pessoa.getIdade());

pessoa.setIdade(30);
console.log("Nova idade:", pessoa.getIdade());
