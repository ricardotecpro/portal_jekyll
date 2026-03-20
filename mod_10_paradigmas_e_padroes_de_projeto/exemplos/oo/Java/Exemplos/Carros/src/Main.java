class Carro {
    String modelo; // Atributo
    String cor; // Atributo
    int ano; // Atributo

    // Método (Comportamento)
    void ligar() {
        System.out.println("O carro " + modelo + " está ligado.");
    }

    void desligar() {
        System.out.println("O carro " + modelo + " está desligado.");
    }
}

public class Main {
    public static void main(String[] args) {
        // Criando um objeto da classe Carro
        Carro meuCarro = new Carro();
        meuCarro.modelo = "Fusca";
        meuCarro.cor = "azul";
        meuCarro.ano = 1975;

        // Chamando métodos do objeto
        meuCarro.ligar();
        meuCarro.desligar();
    }
}