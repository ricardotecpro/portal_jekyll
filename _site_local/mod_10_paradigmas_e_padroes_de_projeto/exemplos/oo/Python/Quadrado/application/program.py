from entities.quadrado import Quadrado

def main():
    lado = float(input('Digite o lado do quadrado: '))
    quadrado = Quadrado(lado)
    print(f'Área do quadrado: {quadrado.area()}')
    print(f'Perímetro do quadrado: {quadrado.perimetro():.2f}')
    print(f'Hipotenusa do quadrado: {quadrado.hipotenusa():.2f}')

