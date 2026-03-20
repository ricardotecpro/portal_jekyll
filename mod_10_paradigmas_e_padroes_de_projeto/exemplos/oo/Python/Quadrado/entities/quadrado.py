class Quadrado:
    def __init__(self, lado):
        self.lado = lado

    def area(self):
        return self.lado ** 2
    def perimetro(self):
        return 4 * self.lado
    def hipotenusa(self):
        return self.lado * 2 ** 0.5

