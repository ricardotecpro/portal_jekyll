package entities;

public class Cubo {

    public double lado;

    // Método para calcular o volume do cubo
    public double calcularVolume() {
        return Math.pow(lado, 3); // Volume de um cubo = lado^3
    }
}
