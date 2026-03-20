import math

class Cilindro:
    def __init__(self, diametro: float, altura: float):
        if diametro <= 0 or altura <= 0:
            raise ValueError("Diâmetro e altura devem ser valores positivos.")
        self.raio = diametro / 2
        self.altura = altura

    def calcular_volume(self) -> float:
        return math.pi * (self.raio ** 2) * self.altura  # Volume em cm³

    def calcular_area_superficial(self) -> float:
        return 2 * math.pi * self.raio * (self.raio + self.altura)

    def mostrar_dados(self):
        print(f"Diâmetro: {self.raio * 2:.2f} cm, Altura: {self.altura:.2f} cm")
