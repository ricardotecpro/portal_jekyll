package entities;

public class Quadrado {
    private double lado;

    // Construtor
    public Quadrado(double lado) {
        this.lado = lado;
    }

    // Método para calcular a área do quadrado
    public double calcularArea() {
        return Math.pow(lado, 2);  // Área de um quadrado = lado^2
    }

    // Método para calcular o perímetro do quadrado
    public double calcularPerimetro() {
        return 4 * lado;  // Perímetro de um quadrado = 4 * lado
    }

    // Método para calcular a diagonal do quadrado usando o Teorema de Pitágoras
    public double calcularDiagonal() {
        return Math.sqrt(2) * lado;  // Diagonal de um quadrado = lado * √2
    }

    // Getters e Setters
    public double getLado() {
        return lado;
    }

    public void setLado(double lado) {
        this.lado = lado;
    }
}
