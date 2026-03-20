// "Repeticao"

programa
{

funcao inicio()
{
    // Declarar variáveis
    inteiro i, numRepeticoes
    cadeia text

    // Inicializar variáveis
    text = ""
    

    // Ler o número de repetições
    escreva("Quantas repetições? ")
    leia(numRepeticoes)

    // Repetição com do-while
    para (i = 0; i < numRepeticoes; i++)
		{
        text = text + "The number is " + i + "\n"
		
		

}
    // Exibir o resultado
    escreva(text)


}
}