from entities.cubo import Cubo

def main():
    # Entrada dos lados dos cubos
    lado_x = float(input("Enter the side length of cubo X: "))
    lado_y = float(input("Enter the side length of cubo Y: "))

    # Criação dos objetos cubos
    cubo_x = Cubo(lado_x)
    cubo_y = Cubo(lado_y)

    # Cálculo dos volumes
    volume_x = cubo_x.calcular_volume()
    volume_y = cubo_y.calcular_volume()

    # Exibição dos volumes
    print(f"Volume of Cubo X = {volume_x}")
    print(f"Volume of Cubo Y = {volume_y}")

    # Comparação dos volumes
    if volume_x > volume_y:
        print("Larger volume: Cubo X")
    else:
        print("Larger volume: Cubo Y")

if __name__ == "__main__":
    main()
