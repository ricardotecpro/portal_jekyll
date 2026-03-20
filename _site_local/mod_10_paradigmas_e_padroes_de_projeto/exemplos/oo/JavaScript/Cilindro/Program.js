// Requer a classe Cilindro
const Cilindro = require('./Cilindro');

// Função para capturar a entrada do usuário
const readline = require('readline');

// Configura o readline para ler dados no terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função principal para executar o programa
function main() {
    rl.question('Digite o diâmetro do cilindro em cm: ', (diametro) => {
        rl.question('Digite a altura do cilindro em cm: ', (altura) => {
            // Converte as entradas para número
            diametro = parseFloat(diametro);
            altura = parseFloat(altura);

            // Cria o objeto Cilindro
            const cilindro = new Cilindro(diametro, altura);

            // Exibe as informações do cilindro
            cilindro.exibirInformacoes();

            // Fecha a interface readline
            rl.close();
        });
    });
}

// Chama a função principal
main();
