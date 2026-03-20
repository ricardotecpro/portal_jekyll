from entidades.cilindro import Cilindro

def capturar_dados_cilindro():
    while True:
        try:
            diametro = float(input("Digite o diâmetro do cilindro (cm): ").strip())
            altura = float(input("Digite a altura do cilindro (cm): ").strip())

            if diametro <= 0 or altura <= 0:
                raise ValueError

            return Cilindro(diametro, altura)
        except ValueError:
            print("Erro: Por favor, insira valores válidos (números positivos).")
