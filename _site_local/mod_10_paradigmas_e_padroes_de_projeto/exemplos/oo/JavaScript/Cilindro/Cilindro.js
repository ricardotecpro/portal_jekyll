// Classe Cilindro
class Cilindro {
    constructor(diametro, altura) {
        this.raio = diametro / 2; // O raio é metade do diâmetro
        this.altura = altura;
    }

    // Método para calcular o volume do cilindro
    calcularVolume() {
        return Math.PI * Math.pow(this.raio, 2) * this.altura;
    }

    // Método para calcular a área superficial do cilindro
    calcularAreaSuperficial() {
        return 2 * Math.PI * this.raio * (this.raio + this.altura);
    }

    // Método para exibir as informações
    exibirInformacoes() {
        console.log(`Raio: ${this.raio} cm`);
        console.log(`Altura: ${this.altura} cm`);
        console.log(`Volume: ${this.calcularVolume().toFixed(2)} cm³`);
        console.log(`Área Superficial: ${this.calcularAreaSuperficial().toFixed(2)} cm²`);
    }
}

// Exporta a classe para ser usada em outro arquivo
module.exports = Cilindro;
