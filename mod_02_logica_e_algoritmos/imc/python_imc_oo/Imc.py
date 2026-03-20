from abc import ABC, abstractmethod

class Imc(ABC):
    def __init__(self, peso, altura):
        self.peso = peso
        self.altura = altura

    def getImc(self):
        return self.peso / pow(self.altura, 2)

    @abstractmethod
    def classificacao(self):
        pass
