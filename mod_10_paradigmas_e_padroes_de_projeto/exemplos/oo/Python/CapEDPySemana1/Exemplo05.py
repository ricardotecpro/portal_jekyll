
# Dada uma matriz quadrada de ordem M com inteiros aleatórios,
# separar os elementos da diagonal principal em um vetor.

import random

import numpy as np

if __name__ == "__main__":

    lin = int(input("Quantas linhas/colunas a matriz terá?: "))

    col = lin

    diag = np.zeros(lin).astype(int)

    mat = np.zeros(shape=(lin, col)).astype(int)

    for i in range(lin):
        for c in range(col):
            mat[i][c] = int(random.randint(1, 10))

    print(mat)

    print("\nDiagonal Principal = ")

    col = 0

    for m in mat:
        print(m[col], end=" ")
        col += 1
