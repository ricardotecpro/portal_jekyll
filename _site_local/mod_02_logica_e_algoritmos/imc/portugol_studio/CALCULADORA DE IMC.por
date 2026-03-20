programa
{
    funcao inicio()
    {
        // Declaração de variáveis
        cadeia nome
        real peso
        inteiro idade
        real altura
        real imc
        cadeia classificacao

        // Solicita e armazena os dados do usuário
        escreva("Digite o nome: ")
        leia(nome)

        escreva("Digite a idade: ")
        leia(idade)

        escreva("Digite o peso (em kg): ")
        leia(peso)

        escreva("Digite a altura (em metros): ")
        leia(altura)

        // Calcula o IMC e obtém a classificação
        imc = calcularIMC(peso, altura)
        classificacao = obterClassificacao(imc)

        // Exibe as informações da pessoa e o resultado do IMC
        escreva("\nNome: ", nome, "\n")
        escreva("Idade: ", idade, " anos\n")
        escreva("Peso: ", peso, " kg\n")
        escreva("Altura: ", altura, " m\n")
        escreva("IMC: ", imc, 2, "\n")
        escreva("Classificação: ", classificacao, "\n")
    }

    funcao real calcularIMC(real peso, real altura)
    {
        // Calcula o IMC usando a fórmula
        retorne peso / (altura * altura)
    }

    funcao cadeia obterClassificacao(real imc)
    {
        // Classifica o IMC de acordo com os critérios
        se (imc < 18.5)
        {
            retorne "Abaixo do peso"
        }
        senao se (imc <= 24.9)
        {
            retorne "Peso normal"
        }
        senao se (imc <= 29.9)
        {
            retorne "Sobrepeso"
        }
        senao se (imc <= 34.9)
        {
            retorne "Obesidade grau I"
        }
        senao se (imc <= 39.9)
        {
            retorne "Obesidade grau II"
        }
        senao
        {
            retorne "Obesidade grau III (obesidade mórbida)"
        }
    }
}
