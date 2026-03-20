def main():
    # Entrada de dados para o retângulo X
    print("Enter rectangle x values: ")
    xA = float(input())
    xB = float(input())
    area_x = xA * xB
    print(f"Area of X = {area_x}")

    # Entrada de dados para o retângulo Y
    print("Enter rectangle y values: ")
    yA = float(input())
    yB = float(input())
    area_y = yA * yB
    print(f"Area of Y = {area_y}")

    # Comparando as áreas
    if area_x > area_y:
        print("Larger area: X")
    else:
        print("Larger area: Y")

# Executando o programa
if __name__ == "__main__":
    main()
