from aplicacao.programa import capturar_dados_cilindro


def main():
    print("=== Programa de Cálculo do Volume do Cilindro ===")

    cilindro = capturar_dados_cilindro()
    volume = cilindro.calcular_volume()
    area_superficial = cilindro.calcular_area_superficial()

    print(f"\n🔹 Volume do cilindro = {volume:.2f} cm³")
    print(f"🔹 Área superficial do cilindro = {area_superficial:.2f} cm²")

    print("\n📌 Informações do Cilindro:")
    cilindro.mostrar_dados()


if __name__ == "__main__":
    main()
