def calcular_area(lado1: float, lado2: float) -> float:
    """Calcula a área de um retângulo."""
    return lado1 * lado2

def obter_valores(nome: str) -> tuple:
    """Obtém os valores do usuário para um retângulo."""
    print(f"Enter rectangle {nome} values: ")
    return float(input()), float(input())

def maior_area():
    """Calcula e exibe o retângulo com maior área."""
    xA, xB = obter_valores("X")
    yA, yB = obter_valores("Y")

    area_x = calcular_area(xA, xB)
    area_y = calcular_area(yA, yB)

    print(f"Area of X = {area_x}")
    print(f"Area of Y = {area_y}")
    
    maior = max(("X", area_x), ("Y", area_y), key=lambda t: t[1])
    print(f"Larger area: {maior[0]}")

if __name__ == "__main__":
    maior_area()
