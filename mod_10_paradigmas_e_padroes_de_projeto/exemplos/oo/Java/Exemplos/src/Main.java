class ContaBancaria {
    private double saldo;  // Atributo privado

    public ContaBancaria(double saldoInicial) {
        saldo = saldoInicial;
    }

    // Método público para depositar
    public void depositar(double valor) {
        if (valor > 0) {
            saldo += valor;
            System.out.println("Depósito de R$" + valor + " realizado com sucesso.");
        } else {
            System.out.println("Valor de depósito inválido.");
        }
    }

    // Método público para sacar
    public void sacar(double valor) {
        if (valor > 0 && valor <= saldo) {
            saldo -= valor;
            System.out.println("Saque de R$" + valor + " realizado com sucesso.");
        } else {
            System.out.println("Saldo insuficiente ou valor inválido.");
        }
    }

    // Método público para mostrar o saldo
    public void mostrarSaldo() {
        System.out.println("Saldo atual: R$" + saldo);
    }
}

public class Main {
    public static void main(String[] args) {
        ContaBancaria minhaConta = new ContaBancaria(1000);
        minhaConta.depositar(500);
        minhaConta.sacar(300);
        minhaConta.mostrarSaldo();
    }
}