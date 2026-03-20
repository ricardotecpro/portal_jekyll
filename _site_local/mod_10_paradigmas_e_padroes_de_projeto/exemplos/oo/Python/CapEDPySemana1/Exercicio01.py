# Exercício 01 - Resolvido
# Elaborar um programa em Python para calcular a somatória de cada uma das linhas 
# de uma matriz A(7 X 5), gerada randomicamente com números inteiros entre 1 e 100. 
# Mostrar na saída padrão a matriz gerada e a somatória à frente de cada linha.

import random
import numpy as np

if __name__ == "__main__":
    matriz = np.zeros(shape=(7, 5)).astype(int)
    soma = 0

    for i in range(7):
        for c in range(5):
            matriz[i][c] = random.randint(1, 100)

    print("Soma dos elementos das linhas da matriz:\n")

    for x in range(7):
        soma = 0
        for y in range(5):
            print("{:02d}".format(matriz[x][y]), end="  ")
            soma += matriz[x][y]
        print(" = ",soma)
        