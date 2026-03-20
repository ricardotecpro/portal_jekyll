// retangulo.go
package retangulo

import "fmt"

type Retangulo struct {
	Largura float64
	Altura  float64
}

func (r Retangulo) CalcularArea() float64 {
	return r.Largura * r.Altura
}

func (r Retangulo) ExibirInformacoes() {
	fmt.Printf("Largura: %.2f m\n", r.Largura)
	fmt.Printf("Altura: %.2f m\n", r.Altura)
	fmt.Printf("Área: %.2f m²\n", r.CalcularArea())
}

func (r Retangulo) CompararArea(outroRetangulo Retangulo) {
	areaAtual := r.CalcularArea()
	areaOutro := outroRetangulo.CalcularArea()

	if areaAtual > areaOutro {
		fmt.Printf("O Retângulo X (Área: %.2f m²) tem uma área maior que o Retângulo Y (Área: %.2f m²).\n", areaAtual, areaOutro)
	} else if areaAtual < areaOutro {
		fmt.Printf("O Retângulo Y (Área: %.2f m²) tem uma área maior que o Retângulo X (Área: %.2f m²).\n", areaOutro, areaAtual)
	} else {
		fmt.Printf("O Retângulo X (Área: %.2f m²) e o Retângulo Y (Área: %.2f m²) têm a mesma área.\n", areaAtual, areaOutro)
	}
}
