algoritmo "Classificacao_IMC"
// Função: Calcula e classifica o IMC de uma pessoa
// Autor: RLP
// Data: 05/11/2024
// Seção de Declarações

var
    peso, altura, imc: real

inicio
    // Entrada de dados
    escreva("Digite o seu peso (kg): ")
    leia(peso)
    escreva("Digite a sua altura (m): ")
    leia(altura)

    // Calcular o IMC
    imc <- peso / (altura * altura)

    // Exibir o IMC
    escreval("Seu IMC é: ", imc:4:2)

    // Classificação do IMC usando operadores lógicos

    se (imc < 18.5) então
        escreval("Classificação: Abaixo do peso")
    senao
        se (imc >= 18.5) e (imc < 24.9) então
            escreval("Classificação: Peso normal")
        senao
            se (imc >= 25.0) e (imc < 29.9) então
                escreval("Classificação: Sobrepeso")
            senao
                se (imc >= 30.0) e (imc < 34.9) então
                    escreval("Classificação: Obesidade grau 1")
                senao
                    se (imc >= 35.0) e (imc < 39.9) então
                        escreval("Classificação: Obesidade grau 2")
                    senao
                        escreval("Classificação: Obesidade grau 3 (obesidade mórbida)")
                    fimse
                fimse
            fimse
        fimse
    fimse
fimalgoritmo
