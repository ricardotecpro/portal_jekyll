// Requer a classe Retangulo
const Retangulo = require('./Retangulo');

// Função para capturar a entrada do usuário
const readline = require('readline');

// Configura o readline para ler dados no terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função principal para executar o programa
function main() {
    // Pedindo as medidas do Retângulo X
    rl.question('Digite a largura do Retângulo X em metros: ', (larguraX) => {
        rl.question('Digite a altura do Retângulo X em metros: ', (alturaX) => {
            // Pedindo as medidas do Retângulo Y
            rl.question('Digite a largura do Retângulo Y em metros: ', (larguraY) => {
                rl.question('Digite a altura do Retângulo Y em metros: ', (alturaY) => {
                    // Converte as entradas para número
                    larguraX = parseFloat(larguraX);
                    alturaX = parseFloat(alturaX);
                    larguraY = parseFloat(larguraY);
                    alturaY = parseFloat(alturaY);

                    // Cria os objetos Retângulo
                    const retanguloX = new Retangulo(larguraX, alturaX);
                    const retanguloY = new Retangulo(larguraY, alturaY);

                    // Exibe as informações de ambos os retângulos
                    console.log("\nInformações do Retângulo X:");
                    retanguloX.exibirInformacoes();

                    console.log("\nInformações do Retângulo Y:");
                    retanguloY.exibirInformacoes();

                    // Compara as áreas dos dois retângulos
                    console.log("\nComparando as áreas dos retângulos:");
                    retanguloX.compararArea(retanguloY);

                    // Fecha a interface readline
                    rl.close();
                });
            });
        });
    });
}

// Chama a função principal
main();
