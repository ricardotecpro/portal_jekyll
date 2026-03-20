Algoritmo "Classificacao_IMC"
    // Declarar variáveis
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
    escreva("Seu IMC é: ", imc:4:2)

    // Classificação do IMC
    se imc < 18.5 então
        Escreva("Classificação: Abaixo do peso")
    senão
        se imc >= 18.5 e imc < 24.9 então
            Escreva("Classificação: Peso normal")
        senão
            se imc >= 25.0 e imc < 29.9 então
                Escreva("Classificação: Sobrepeso")
            senão
                se imc >= 30.0 e imc < 34.9 então
                    escreva("Classificação: Obesidade grau 1")
                senão
                    se imc >= 35.0 e imc < 39.9 então
                        escreva("Classificação: Obesidade grau 2")
                    senão
                        escreva("Classificação: Obesidade grau 3 (obesidade mórbida)")
                    fimSe
                fimSe
            fimSe
        fimSe
    fimSe
fimalgoritmo
