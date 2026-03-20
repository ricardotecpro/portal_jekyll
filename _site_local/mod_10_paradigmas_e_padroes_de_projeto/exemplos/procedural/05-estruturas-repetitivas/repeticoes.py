# Solicitar o número de repetições
num_repeticoes = int(input("Quantas repetições? "))

# Inicializar variáveis
text = ""  # Inicializa o texto como uma string vazia
i = 0       # Inicializa i com 0

# Loop do-while em Python (usando while True e uma condição de quebra)
while True:
    # Adicionar ao texto
    text += f"The number is {i}\n"  # Adiciona a frase com o número atual
    i += 1
    if i >= num_repeticoes:
        break

# Agora, você pode usar ou imprimir a variável text
print(text)
