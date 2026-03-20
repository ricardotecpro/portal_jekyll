#import array

if __name__ == "__main__":

#    tecladoNum = []

#    for i in range(10):
#        tecladoNum.append(i)

#    print(tecladoNum)

#    estados = []
#    estados.append("Pará")
#    estados.append("Amazonas")
#    estados.append("Amapá")

#    try:
#        print(estados[3])  # Erro: array fora dos limites
#    except IndexError as error:
#        print(
#            "Esse é o erro: ", error
#        )  # Esse é o erro:  list index out of range

#    alfabeto = ["a", "b", "c", "d"]
#    tamAlfabeto = len(alfabeto)  # tamAlfabeto = 4
    
#    print(tamAlfabeto)

#    mosqueteiros = ["ioumle", "iodoisle", "iotrêsle"]
#    num = len(mosqueteiros)  # num = 3
    
#    print(num)
#    print(mosqueteiros[2])

#    meu_array = array.array("i", [1, 2, 3])
#    print(meu_array[2])
#    print(meu_array)

    frase = "exemplo"
    lista = list(frase)
    print(lista)

    tupla = (1, 2, 3, 4, 5)
    lista = list(tupla)
    print(lista)

    frase = "Python é uma linguagem de programação."
    palavras = list(frase.split())
    print(palavras)  #

    pares = list(range(2, 10, 2))
    print(pares)

    lista = list()
    lista.append(1)
    lista.append(2)
    lista.append(3)
    print(lista)

    lista.remove(1)
    print(lista)

    lista.pop(0)
    print(lista)
    
    lista.clear()
    print(len(lista))

    lista = list(["João", "Ana", "Marcos", "Antônio", "Maria"])
    lista.sort()
    print(lista)
    lista.sort(reverse=True)
    print(lista)
    
    for e in lista:
        print(e)
    
    for i in range(len(lista)):
        print(lista[i])
        