Add-Type -AssemblyName PresentationFramework

# Função para obter a saudação baseada na hora
function Get-Greeting {
    param (
        [string]$input
    )

    # Verifica se o input está no formato correto
    if ($input -match "^([01]?[0-9]|2[0-3]):([0-5]?[0-9])$") {
        try {
            $time = [datetime]::ParseExact($input, "HH:mm", $null)
            $hour = $time.Hour

            if ($hour -lt 6) {
                return "Boa madrugada! Você digitou: $input"
            } elseif ($hour -lt 12) {
                return "Bom dia! Você digitou: $input"
            } elseif ($hour -lt 18) {
                return "Boa tarde! Você digitou: $input"
            } else {
                return "Boa noite! Você digitou: $input"
            }
        } catch {
            return "Ocorreu um erro ao processar a hora inserida."
        }
    } else {
        return "Formato inválido! Por favor, digite no formato HH:MM."
    }
}

# Cria a janela principal
$xaml = @"
<Window xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        Title="Saudação de Hora do Dia" Height="200" Width="300">
    <Grid>
        <Grid.RowDefinitions>
            <RowDefinition Height="Auto"/>
            <RowDefinition Height="Auto"/>
            <RowDefinition Height="Auto"/>
            <RowDefinition Height="*"/>
        </Grid.RowDefinitions>
        <TextBlock Grid.Row="0" Margin="10" Text="Digite uma hora (HH:MM):" />
        <TextBox x:Name="TimeInput" Grid.Row="1" Margin="10" />
        <Button x:Name="CheckButton" Grid.Row="2" Margin="10" Content="Verificar" />
        <TextBlock x:Name="GreetingLabel" Grid.Row="3" Margin="10" TextWrapping="Wrap" />
    </Grid>
</Window>
"@

# Carrega o XAML
$reader = (New-Object System.Xml.XmlNodeReader ([xml]$xaml))
$Window = [Windows.Markup.XamlReader]::Load($reader)

# Atribui os elementos da interface às variáveis
$TimeInput = $Window.FindName("TimeInput")
$CheckButton = $Window.FindName("CheckButton")
$GreetingLabel = $Window.FindName("GreetingLabel")

# Adiciona o evento de clique no botão
$CheckButton.Add_Click({
    $input = $TimeInput.Text
    $greeting = Get-Greeting -input $input
    $GreetingLabel.Text = $greeting
})

# Adiciona o evento para capturar a tecla Enter no campo de entrada
$TimeInput.Add_KeyDown({
    param($sender, $e)
    if ($e.Key -eq 'Enter') {
        $input = $TimeInput.Text
        $greeting = Get-Greeting -input $input
        $GreetingLabel.Text = $greeting
    }
})

# Exibe a janela
$Window.ShowDialog() | Out-Null
