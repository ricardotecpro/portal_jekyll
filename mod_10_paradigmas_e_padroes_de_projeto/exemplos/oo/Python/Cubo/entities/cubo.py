class Cubo:
    def __init__(self, lado):
        self.lado = lado

    # Método para calcular o volume do cubo
    def calcular_volume(self):
        return self.lado ** 3  # Volume de um cubo = lado^3
