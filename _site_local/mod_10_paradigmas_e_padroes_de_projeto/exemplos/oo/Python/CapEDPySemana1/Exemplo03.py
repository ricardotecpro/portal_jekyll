
if __name__ == "__main__":

    v = []

    for i in range(10):
        v.append(input("Digite o valor do "+ str(i + 1)+ "o. elemento (posição "+ str(i)+ "): "))

    print("\nPosição\tValor")

    for i in range(len(v)):
        print("v[", i, "]\t", v[i])

    consulta = 0

    while True:
        consulta = int(
            input("Digite uma posição válida para consulta (0-9)\nQualquer outra para parar: "))
        if consulta >= 0 and consulta <= 9:
            print("Posição: ", consulta, " ---> Valor: ", v[consulta])
        else:
            break
