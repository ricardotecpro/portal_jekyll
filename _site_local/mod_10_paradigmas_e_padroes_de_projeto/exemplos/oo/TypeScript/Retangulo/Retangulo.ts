// Retangulo.ts
class Retangulo {
    largura: number;
    altura: number;

    constructor(largura: number, altura: number) {
        this.largura = largura;
        this.altura = altura;
    }

    // Método para calcular a área do retângulo
    calcularArea(): number {
        return this.largura * this.altura;
    }

    // Método para exibir as informações do retângulo
    exibirInformacoes(): void {
        console.log(`Largura: ${this.largura} metros`);
        console.log(`Altura: ${this.altura} metros`);
        console.log(`Área: ${this.calcularArea()} metros quadrados`);
    }

    // Método para comparar a área com outro retângulo
    compararArea(outroRetangulo: Retangulo): void {
        const areaAtual = this.calcularArea();
        const areaOutro = outroRetangulo.calcularArea();

        if (areaAtual > areaOutro) {
            console.log(`O Retângulo X (Área: ${areaAtual}) tem uma área maior que o Retângulo Y (Área: ${areaOutro}).`);
        } else if (areaAtual < areaOutro) {
            console.log(`O Retângulo Y (Área: ${areaOutro}) tem uma área maior que o Retângulo X (Área: ${areaAtual}).`);
        } else {
            console.log(`O Retângulo X (Área: ${areaAtual}) e o Retângulo Y (Área: ${areaOutro}) têm a mesma área.`);
        }
    }
}
