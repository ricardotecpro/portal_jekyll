from Imc import Imc

class PessoaImc(Imc):
    def __init__(self, nome, idade, peso, altura):
        super().__init__(peso, altura)
        self.nome = nome
        self.idade = idade

    def classificacao(self):
        imc = self.getImc()
        if imc < 18.5:
            return "Abaixo do peso"
        elif 18.5 <= imc < 24.9:
            return "Peso normal"
        elif 25 <= imc < 29.9:
            return "Sobrepeso"
        elif 30 <= imc < 34.9:
            return "Obesidade grau I"
        elif 35 <= imc < 39.9:
            return "Obesidade grau II"
        else:
            return "Obesidade grau III (obesidade mórbida)"
