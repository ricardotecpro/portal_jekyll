<?php
// Retangulo.php
class Retangulo {
    private $largura;
    private $altura;

    // Construtor da classe
    public function __construct($largura, $altura) {
        $this->largura = $largura;
        $this->altura = $altura;
    }

    // Método para calcular a área do retângulo
    public function calcularArea() {
        return $this->largura * $this->altura;
    }

    // Método para exibir as informações do retângulo
    public function exibirInformacoes() {
        echo "Largura: {$this->largura} metros\n";
        echo "Altura: {$this->altura} metros\n";
        echo "Área: " . $this->calcularArea() . " metros quadrados\n";
    }

    // Método para comparar a área com outro retângulo
    public function compararArea(Retangulo $outroRetangulo) {
        $areaAtual = $this->calcularArea();
        $areaOutro = $outroRetangulo->calcularArea();

        if ($areaAtual > $areaOutro) {
            echo "O Retângulo X (Área: $areaAtual) tem uma área maior que o Retângulo Y (Área: $areaOutro).\n";
        } else if ($areaAtual < $areaOutro) {
            echo "O Retângulo Y (Área: $areaOutro) tem uma área maior que o Retângulo X (Área: $areaAtual).\n";
        } else {
            echo "O Retângulo X (Área: $areaAtual) e o Retângulo Y (Área: $areaOutro) têm a mesma área.\n";
        }
    }
}
?>
