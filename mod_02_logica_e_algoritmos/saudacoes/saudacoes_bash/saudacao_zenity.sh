#!/bin/bash

# Função para obter a saudação baseada na hora
# sudo apt-get install zenity
get_greeting() {
    input=$1

    if ! [[ $input =~ ^([01]?[0-9]|2[0-3]):[0-5][0-9]$ ]]; then
        echo "Formato inválido! Por favor, digite no formato HH:MM."
        return
    fi

    hour=${input:0:2}

    if [ $hour -lt 6 ]; then
        echo "Boa madrugada! Você digitou: $input"
    elif [ $hour -lt 12 ]; then
        echo "Bom dia! Você digitou: $input"
    elif [ $hour -lt 18 ]; then
        echo "Boa tarde! Você digitou: $input"
    else
        echo "Boa noite! Você digitou: $input"
    fi
}

# Captura a hora do usuário usando zenity
time_input=$(zenity --entry --title="Saudação de Hora do Dia" --text="Digite uma hora (HH:MM):")

# Verifica se o usuário clicou em Cancelar ou fechou a janela
if [ $? -ne 0 ]; then
    exit 1
fi

# Obtém a saudação
greeting=$(get_greeting $time_input)

# Exibe a saudação usando zenity
zenity --info --title="Saudação" --text="$greeting"
