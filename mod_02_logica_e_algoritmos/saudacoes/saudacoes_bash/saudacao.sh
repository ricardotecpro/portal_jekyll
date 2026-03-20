#!/bin/bash

echo "Digite uma hora do dia (formato HH:MM): "
read input

# Verifica se o input está no formato HH:MM utilizando expressão regular
if [[ ! $input =~ ^([01][0-9]|2[0-3]):([0-5][0-9])$ ]]; then
    echo "Formato inválido! Por favor, digite no formato HH:MM."
    exit 1
fi

# Extrai a hora e os minutos do input
hour=$(echo $input | cut -d ":" -f 1)
minute=$(echo $input | cut -d ":" -f 2)

# Determina a saudação com base na hora
if (( hour < 6 )); then
    echo "Boa madrugada!"
elif (( hour < 12 )); then
    echo "Bom dia!"
elif (( hour < 18 )); then
    echo "Boa tarde!"
elif (( hour <= 23 )); then
    echo "Boa noite!"
else
    echo "Hora inválida!"
    exit 1
fi

# Exibe a hora digitada
printf "Você digitou: %02d:%02d\n" $hour $minute
