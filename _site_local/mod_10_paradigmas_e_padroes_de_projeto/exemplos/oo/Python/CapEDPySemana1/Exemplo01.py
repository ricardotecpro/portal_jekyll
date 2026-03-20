
if __name__ == "__main__":

    a = [1, 2, 4, 8, 6, 7, 15, 9, 10, 18]
    total = 0
    print("Elementos do vetor")
    saida = ""
    for i in range(len(a)):
        saida += str(a[i]) + " "
        total += a[i]
    print(saida)
    print("Soma dos elementos do vetor:", total)