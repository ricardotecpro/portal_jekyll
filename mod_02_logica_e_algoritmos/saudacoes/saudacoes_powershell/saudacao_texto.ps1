# Solicita ao usuário que digite uma hora no formato HH:MM
Write-Host "Digite uma hora do dia (formato HH:MM): "
$input = Read-Host

# Expressão regular para verificar o formato HH:MM
if ($input -notmatch '^([01][0-9]|2[0-3]):([0-5][0-9])$') {
    Write-Host "Formato inválido! Por favor, digite no formato HH:MM."
    exit 1
}

# Extrai a hora e os minutos do input
$hour = [int]($input -split ":")[0]
$minute = [int]($input -split ":")[1]

# Determina a saudação com base na hora
if ($hour -lt 6) {
    Write-Host "Boa madrugada!"
} elseif ($hour -lt 12) {
    Write-Host "Bom dia!"
} elseif ($hour -lt 18) {
    Write-Host "Boa tarde!"
} elseif ($hour -le 23) {
    Write-Host "Boa noite!"
} else {
    Write-Host "Hora inválida!"
    exit 1
}

# Exibe a hora digitada
Write-Host ("Você digitou: {0:D2}:{1:D2}" -f $hour, $minute)
