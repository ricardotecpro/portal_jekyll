from entities.retangulo import Retangulo

class Program:
    def run(self):
        # Entrada de dados para o retângulo X
        print("Enter rectangle x values: ")
        x_altura = float(input("Enter height for X: "))
        x_largura = float(input("Enter width for X: "))
        retangulo_x = Retangulo(x_largura, x_altura)

        # Entrada de dados para o retângulo Y
        print("Enter rectangle y values: ")
        y_altura = float(input("Enter height for Y: "))
        y_largura = float(input("Enter width for Y: "))
        retangulo_y = Retangulo(y_largura, y_altura)

        # Cálculo das áreas
        area_x = retangulo_x.calcular_area()
        area_y = retangulo_y.calcular_area()

        # Exibição das áreas
        print(f"Area of X = {area_x}")
        print(f"Area of Y = {area_y}")

        # Comparando as áreas
        if area_x > area_y:
            print("Larger area: X")
        else:
            print("Larger area: Y")
