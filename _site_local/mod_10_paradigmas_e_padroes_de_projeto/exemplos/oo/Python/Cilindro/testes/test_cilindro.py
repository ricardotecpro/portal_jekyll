import unittest
from entidades.cilindro import Cilindro


class TestCilindro(unittest.TestCase):
    def test_calculo_volume(self):
        cilindro = Cilindro(diametro=10, altura=20)
        volume_esperado = 3.141592653589793 * (5 ** 2) * 20  # π * r² * h
        self.assertAlmostEqual(cilindro.calcular_volume(), volume_esperado, places=2)

    def test_calculo_area_superficial(self):
        cilindro = Cilindro(diametro=10, altura=20)
        area_esperada = 2 * 3.141592653589793 * 5 * (5 + 20)  # 2πr(r + h)
        self.assertAlmostEqual(cilindro.calcular_area_superficial(), area_esperada, places=2)

    def test_valores_invalidos(self):
        with self.assertRaises(ValueError):
            Cilindro(diametro=-10, altura=20)
        with self.assertRaises(ValueError):
            Cilindro(diametro=10, altura=-20)
        with self.assertRaises(ValueError):
            Cilindro(diametro=0, altura=20)
        with self.assertRaises(ValueError):
            Cilindro(diametro=10, altura=0)


if __name__ == "__main__":
    unittest.main()
