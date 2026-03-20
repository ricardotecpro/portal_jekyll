package aula02;

public class Caneta {

    String modelo;
    String cor;
    float ponta;
    int carga;
    boolean tampada;
    void status(){
        System.out.println("Modelo: " + this.modelo);
        System.out.println("Uma caneta " + this.cor);
        System.out.println(" Uma caneta " + this.ponta);
        System.out.println(" Ponta " + this.carga);
        System.out.println(" Está tamapada? " + this.tampada);
    }

    void rabiscar(){
        if (this.tampada == true) {
            System.out.println("Erro, não posso rabiscar");
        } else {
                System.out.println("Estou rabiscando");
        }


    }

    void tampar(){
        this.tampada = true;
    }

    void destampar(){
        this.tampada = false;
    }

}
