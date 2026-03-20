# Exercício 03 - Resolvido

# Elaborar um programa em Python com dois arrays de Strings contendo as
# seguintes cores:

# cores1 = {"preto", "amarelo", "verde", "azul", "violeta", "prata"}
# cores2 = {"dourado", "branco", "marrom", "azul", "cinza", "prata"}
# Criar duas listas cada uma contendo um dos arrays dados;
# Concatenar as duas listas na primeira;
# Criar o método imprimirLista(List lista1), que deverá mostrar na saída
# padrão todos os elementos de uma lista, e executá-lo;
# Criar o método converterMaiusculas(List lista1), que deverá converter
# todos os elementos de uma lista para maiúsculas, e executá-lo;
# Imprimir novamente todos os itens da lista;
# Ordenar os elementos da lista em ordem alfabética;
# Imprimir novamente todos os itens da lista;
# Excluir os elementos duplicados da lista, criando um método
# excluirItensDuplicados(List lista1), e executando-o;
# Imprimir novamente todos os itens da lista e verificar se os itens
# duplicados foram excluídos;
# Criar o método imprimirListaReversa(List lista1), que deverá mostrar
# na saída padrão todos os elementos de uma lista na ordem inversa
# em que estiverem armazenados, e executá-lo
# Criar o método imprimirLista(List lista1), que deverá mostrar na saída
# padrão todos os elementos de uma lista, e executá-lo;


def imprimirLista(lista):
    print("\nLista:")
    print(lista)


# Criar o método converterMaiusculas(List lista1), que deverá converter
# todos os elementos de uma lista para maiúsculas, e executá-lo;


def converterMaiusculas(lista):
    for i in range(len(lista)):
        lista[i] = lista[i].upper()

    return lista


# Excluir os elementos duplicados da lista, criando um método
# ExcluirItensDuplicados(List lista1), e executando-o;


def excluirItensDuplicados(lista):

    listan = []  # Será usada para armazenar os itens sem duplicatas.

    # Iterar sobre a lista ordenada
    for item in lista:  # percorre cada item na lista recebida
        if not listan or listan[-1] != item:  # verdadeiro somente se for o
                                                # primeiro item ou se for diferente
                                                # do último item adicionado à listan 
            listan.append(item)  # O item é adicionado à listan

    return list(listan)


# Criar o método imprimirListaReversa(List lista1), que deverá mostrar na saída
# padrão todos os elementos de uma lista na ordem inversa em que
# estiverem armazenados


def imprimirListaReversa(lista):
    print("\nLista Reversa:")
    listar = lista.copy()
    listar.reverse()
    print(listar)


if __name__ == "__main__":
    cores1 = ["preto", "amarelo", "verde", "azul", "violeta", "prata"]
    cores2 = ["dourado", "branco", "marrom", "azul", "cinza", "prata"]

    # Criar duas listas cada uma contendo um dos arrays dados;
    lista1 = list(cores1)
    lista2 = list(cores2)

    # Concatenar as duas listas na primeira
    lista1.extend(lista2)

    # Imprimir novamente todos os itens da lista;
    imprimirLista(lista1)

    # Converter itens em maiúsculas usando método
    # converterMaiusculas(List lista1)
    lista1 = converterMaiusculas(lista1)

    # Imprimir novamente todos os itens da lista;
    imprimirLista(lista1)

    # Ordenar os elementos da lista em ordem alfabética;
    lista1.sort()

    # Imprimir novamente todos os itens da lista;
    imprimirLista(lista1)

    # Excluir os elementos duplicados da lista, usando o método
    # ExcluirItensDuplicados(List lista1);
    lista1 = excluirItensDuplicados(lista1)

    # Imprimir novamente todos os itens da lista;
    imprimirLista(lista1)

    # Imprimir a lista reversa usando o método
    # imprimirListaReversa(List lista1)
    imprimirListaReversa(lista1)
    