// Retangulo.kt
class Retangulo(val largura: Double, val altura: Double) {

    // Método para calcular a área do retângulo
    fun calcularArea(): Double {
        return largura * altura
    }

    // Método para exibir as informações do retângulo
    fun exibirInformacoes() {
        println("Largura: $largura metros")
        println("Altura: $altura metros")
        println("Área: ${calcularArea()} metros quadrados")
    }

    // Método para comparar a área com outro retângulo
    fun compararArea(outroRetangulo: Retangulo) {
        val areaAtual = this.calcularArea()
        val areaOutro = outroRetangulo.calcularArea()

        if (areaAtual > areaOutro) {
            println("O Retângulo X (Área: $areaAtual) tem uma área maior que o Retângulo Y (Área: $areaOutro).")
        } else if (areaAtual < areaOutro) {
            println("O Retângulo Y (Área: $areaOutro) tem uma área maior que o Retângulo X (Área: $areaAtual).")
        } else {
            println("O Retângulo X (Área: $areaAtual) e o Retângulo Y (Área: $areaOutro) têm a mesma área.")
        }
    }
}
