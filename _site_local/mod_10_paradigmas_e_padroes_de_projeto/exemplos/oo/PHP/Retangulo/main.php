<?php
// main.php
include 'Retangulo.php';

// Função para capturar a entrada do usuário
function capturarEntrada($mensagem) {
    echo $mensagem;
    return readline(); // Usando readline() para entrada interativa
}

// Solicitando as medidas do Retângulo X
$larguraX = capturarEntrada('Digite a largura do Retângulo X em metros: ');
$alturaX = capturarEntrada('Digite a altura do Retângulo X em metros: ');

// Solicitando as medidas do Retângulo Y
$larguraY = capturarEntrada('Digite a largura do Retângulo Y em metros: ');
$alturaY = capturarEntrada('Digite a altura do Retângulo Y em metros: ');

// Criando os objetos Retângulo X e Y
$retanguloX = new Retangulo($larguraX, $alturaX);
$retanguloY = new Retangulo($larguraY, $alturaY);

// Exibindo as informações dos dois retângulos
echo "\nInformações do Retângulo X:\n";
$retanguloX->exibirInformacoes();

echo "\nInformações do Retângulo Y:\n";
$retanguloY->exibirInformacoes();

// Comparando as áreas dos dois retângulos
echo "\nComparando as áreas dos retângulos:\n";
$retanguloX->compararArea($retanguloY);
?>
