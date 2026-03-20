// Main.kt
fun main() {
    // Solicitando as medidas do Retângulo X
    println("Digite a largura do Retângulo X em metros:")
    val larguraX = readLine()!!.toDouble()
    println("Digite a altura do Retângulo X em metros:")
    val alturaX = readLine()!!.toDouble()

    // Solicitando as medidas do Retângulo Y
    println("Digite a largura do Retângulo Y em metros:")
    val larguraY = readLine()!!.toDouble()
    println("Digite a altura do Retângulo Y em metros:")
    val alturaY = readLine()!!.toDouble()

    // Criando os objetos Retângulo X e Y
    val retanguloX = Retangulo(larguraX, alturaX)
    val retanguloY = Retangulo(larguraY, alturaY)

    // Exibindo as informações dos dois retângulos
    println("\nInformações do Retângulo X:")
    retanguloX.exibirInformacoes()

    println("\nInformações do Retângulo Y:")
    retanguloY.exibirInformacoes()

    // Comparando as áreas dos dois retângulos
    println("\nComparando as áreas dos retângulos:")
    retanguloX.compararArea(retanguloY)
}
