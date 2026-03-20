
if __name__ == "__main__":

    v = []

    for i in range(10):
        v.append(input("Digite o valor do "+str(i + 1)+"o. elemento (posição "+str(i)+"): "))

    print("\nPosição\tValor")

    for i in range(len(v)):
        print("v[", i, "]\t", v[i])
