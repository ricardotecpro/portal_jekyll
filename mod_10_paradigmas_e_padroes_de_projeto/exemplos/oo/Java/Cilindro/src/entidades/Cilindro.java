package entidades;

public class Cilindro {
    private double raio;
    private double altura;

    public Cilindro(double diametro, double altura) {
        if (diametro <= 0 || altura <= 0) {
            throw new IllegalArgumentException("Diâmetro e altura devem ser valores positivos.");
        }
        this.raio = diametro / 2;
        this.altura = altura;
    }

    public double calcularVolume() {
        return Math.PI * Math.pow(raio, 2) * altura;
    }

    public double calcularAreaSuperficial() {
        return 2 * Math.PI * raio * (raio + altura);
    }

    public void mostrarDados() {
        System.out.printf("Diâmetro: %.2f cm, Altura: %.2f cm%n", raio * 2, altura);
    }
}
