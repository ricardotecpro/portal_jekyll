// main.go
package main

import (
	"Retangulo/retangulo" // Alterado para o caminho correto do pacote
	"fmt"
)

func main() {
	var larguraX, alturaX, larguraY, alturaY float64

	fmt.Print("Digite a largura do Retângulo X em metros: ")
	fmt.Scanln(&larguraX)
	fmt.Print("Digite a altura do Retângulo X em metros: ")
	fmt.Scanln(&alturaX)

	fmt.Print("Digite a largura do Retângulo Y em metros: ")
	fmt.Scanln(&larguraY)
	fmt.Print("Digite a altura do Retângulo Y em metros: ")
	fmt.Scanln(&alturaY)

	retanguloX := retangulo.Retangulo{Largura: larguraX, Altura: alturaX}
	retanguloY := retangulo.Retangulo{Largura: larguraY, Altura: alturaY}

	fmt.Println("\nInformações do Retângulo X:")
	retanguloX.ExibirInformacoes()

	fmt.Println("\nInformações do Retângulo Y:")
	retanguloY.ExibirInformacoes()

	fmt.Println("\nComparando as áreas dos retângulos:")
	retanguloX.CompararArea(retanguloY)
}
