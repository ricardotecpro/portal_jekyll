public class PessoaImc extends Imc {
    private String nome;
    private int idade;

    public PessoaImc(String nome, int idade, double peso, double altura) {
        super(peso, altura);
        this.nome = nome;
        this.idade = idade;
    }

    @Override
    public String classificacao() {
        double imc = getImc();
        if (imc < 18.5) {
            return "Abaixo do peso";
        } else if (imc >= 18.5 && imc < 24.9) {
            return "Peso normal";
        } else if (imc >= 25 && imc < 29.9) {
            return "Sobrepeso";
        } else if (imc >= 30 && imc < 34.9) {
            return "Obesidade grau I";
        } else if (imc >= 35 && imc < 39.9) {
            return "Obesidade grau II";
        } else {
            return "Obesidade grau III (obesidade mórbida)";
        }
    }
}
