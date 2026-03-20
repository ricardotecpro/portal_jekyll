# Exercício 02 - Resolvido
# Elaborar um programa em Python para encontrar o maior elemento
# e sua respectiva posição em uma matriz B de dimensão 4x3, gerada
# randomicamente com números inteiros entre 1 e 100.
# Mostrar na saída padrão a matriz gerada, bem como a informação solicitada.

import random

import numpy as np

if __name__ == "__main__":

    matriz = np.zeros(shape=(4, 3)).astype(int)

    elemento = 0
    linha = 0
    coluna = 0
    x = 0
    
    for m in matriz:
        for i in range(len(m)):
            m[i] = random.randint(1, 100)

    print("Matriz:\n")

    for m in matriz:
        for y in range(len(m)):
            print("{:02d}".format(m[y]), end="  ")
            if m[y] > elemento:
                elemento = m[y]
                linha = x
                coluna = y
        print()
        x += 1

    print("\nO Maior elemento é: ",elemento,"\nNa linha: ",linha+1,"\nNa coluna: ",coluna+1)

