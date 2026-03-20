from PessoaImc import PessoaImc

# if __name__ == "__main__":
#     pessoa = PessoaImc("Fulano", 18, 70, 1.72)
#     print("IMC: ", pessoa.getImc())
#     print("Classificação: ", pessoa.classificacao())


from PessoaImc import PessoaImc

if __name__ == "__main__":
    nome = input("Digite o nome: ")
    idade = int(input("Digite a idade: "))
    peso = float(input("Digite o peso (em kg): "))
    altura = float(input("Digite a altura (em metros): "))

    pessoa = PessoaImc(nome, idade, peso, altura)

    print("IMC: ", pessoa.getImc())
    print("Classificação: ", pessoa.classificacao())
