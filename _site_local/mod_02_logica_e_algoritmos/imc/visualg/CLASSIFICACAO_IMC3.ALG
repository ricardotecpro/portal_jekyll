algoritmo "Classificacao_IMC"
// Função: Calcula e classifica o IMC de uma pessoa
// Autor:
// Data: 05/11/2024
// Seção de Declarações

var
    nome: caractere
    peso, altura, imc: real

inicio
    // Solicita o nome da pessoa
    escreva("Digite o seu nome: ")
    leia(nome)

    // Entrada de dados
    escreva("Digite o seu peso (kg): ")
    leia(peso)
    escreva("Digite a sua altura (m): ")
    leia(altura)

    // Calcular o IMC
    imc <- peso / (altura * altura)

    // Exibir o IMC
    escreval("Olá ", nome, ", seu IMC é: ", imc:4:2)

    // Classificação do IMC e resposta personalizada
    se (imc < 18.5) então
        escreval("Classificação: Abaixo do peso")
        escreval("Recomendação: Tente aumentar sua ingestão alimentar para alcançar um peso saudável.")
    senao
        se (imc >= 18.5) e (imc < 24.9) então
            escreval("Classificação: Peso normal")
            escreval("Recomendação: Continue mantendo um estilo de vida saudável com alimentação balanceada e exercícios.")
        senao
            se (imc >= 25.0) e (imc < 29.9) então
                escreval("Classificação: Sobrepeso")
                escreval("Recomendação: Considere adotar hábitos saudáveis para evitar o aumento de peso, como exercícios regulares e alimentação equilibrada.")
            senao
                se (imc >= 30.0) e (imc < 34.9) então
                    escreval("Classificação: Obesidade grau 1")
                    escreval("Recomendação: É importante buscar orientação médica para adotar um plano de emagrecimento saudável.")
                senao
                    se (imc >= 35.0) e (imc < 39.9) então
                        escreval("Classificação: Obesidade grau 2")
                        escreval("Recomendação: Procure um profissional da saúde para orientações sobre perda de peso e cuidados médicos.")
                    senao
                        escreval("Classificação: Obesidade grau 3 (obesidade mórbida)")
                        escreval("Recomendação: É essencial buscar orientação médica imediatamente para tratamento e acompanhamento.")
                    fimse
                fimse
            fimse
        fimse
    fimse
fimalgoritmo
