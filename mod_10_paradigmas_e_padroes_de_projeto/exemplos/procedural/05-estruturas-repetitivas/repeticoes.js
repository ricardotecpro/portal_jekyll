const readline = require('readline');

// Criar interface de leitura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicitar o número de repetições
rl.question('Quantas repetições? ', (numRepeticoes) => {
  let text = ""; // Inicializa o texto como uma string vazia
  let i = 0;     // Inicializa i com 0

  // Loop do-while
  do {
    text += "The number is " + i + "\n";  // Adiciona a frase com o número atual
    i++;
  } while (i < numRepeticoes);

  // Exibe o resultado
  console.log(text);

  // Fecha a interface de leitura
  rl.close();
});
