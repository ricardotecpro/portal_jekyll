abstract class Imc {
    protected double peso;
    protected double altura;

    public Imc(double peso, double altura) {
        this.peso = peso;
        this.altura = altura;
    }

    public double getImc() {
        return this.peso / Math.pow(this.altura, 2);
    }

    public abstract String classificacao();
}
