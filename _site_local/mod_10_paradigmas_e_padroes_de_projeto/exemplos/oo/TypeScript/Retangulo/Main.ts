// Main.ts
import * as readlineSync from 'readline-sync';

function main() {
    // Solicitando as medidas do Retângulo X
    const larguraX = parseFloat(readlineSync.question('Digite a largura do Retângulo X em metros: '));
    const alturaX = parseFloat(readlineSync.question('Digite a altura do Retângulo X em metros: '));

    // Solicitando as medidas do Retângulo Y
    const larguraY = parseFloat(readlineSync.question('Digite a largura do Retângulo Y em metros: '));
    const alturaY = parseFloat(readlineSync.question('Digite a altura do Retângulo Y em metros: '));

    // Criando os objetos Retângulo X e Y
    const retanguloX = new Retangulo(larguraX, alturaX);
    const retanguloY = new Retangulo(larguraY, alturaY);

    // Exibindo as informações dos dois retângulos
    console.log('\nInformações do Retângulo X:');
    retanguloX.exibirInformacoes();

    console.log('\nInformações do Retângulo Y:');
    retanguloY.exibirInformacoes();

    // Comparando as áreas dos dois retângulos
    console.log('\nComparando as áreas dos retângulos:');
    retanguloX.compararArea(retanguloY);
}

// Rodar a função principal
main();
