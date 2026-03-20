// Classe Retangulo
class Retangulo {
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }

    // Método para calcular a área do retângulo
    calcularArea() {
        return this.largura * this.altura;
    }

    // Método para exibir as informações do retângulo
    exibirInformacoes() {
        console.log(`Largura: ${this.largura} m`);
        console.log(`Altura: ${this.altura} m`);
        console.log(`Área: ${this.calcularArea()} m²`);
    }

    // Método para comparar a área com outro retângulo
    compararArea(outroRetangulo) {
        const areaAtual = this.calcularArea();
        const areaOutro = outroRetangulo.calcularArea();

        if (areaAtual > areaOutro) {
            console.log(`O Retângulo X (Área: ${areaAtual} m²) tem uma área maior que o Retângulo Y (Área: ${areaOutro} m²).`);
        } else if (areaAtual < areaOutro) {
            console.log(`O Retângulo Y (Área: ${areaOutro} m²) tem uma área maior que o Retângulo X (Área: ${areaAtual} m²).`);
        } else {
            console.log(`O Retângulo X (Área: ${areaAtual} m²) e o Retângulo Y (Área: ${areaOutro} m²) têm a mesma área.`);
        }
    }
}

// Exporta a classe para ser usada em outro arquivo
module.exports = Retangulo;
