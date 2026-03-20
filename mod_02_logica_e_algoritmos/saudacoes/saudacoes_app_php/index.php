<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Saudação por Hora do Dia</title>
</head>
<body>
<h2>Digite uma hora do dia (formato HH:MM):</h2>
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
    <input type="text" name="input" required pattern="\d{2}:\d{2}" title="Digite no formato HH:MM">
    <input type="submit" value="Enviar">
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $input = $_POST['input'];

    // Verifica se a entrada corresponde ao formato HH:MM
    if (preg_match('/^([01][0-9]|2[0-3]):([0-5][0-9])$/', $input)) {
        // Parse da entrada para obter hora e minuto
        list($hour, $minute) = explode(':', $input);

        // Determinando a saudação baseada na hora do dia
        if ($hour < 6) {
            $greeting = "Boa madrugada!";
        } elseif ($hour < 12) {
            $greeting = "Bom dia!";
        } elseif ($hour < 18) {
            $greeting = "Boa tarde!";
        } else {
            $greeting = "Boa noite!";
        }

        // Exibindo a saudação e a hora digitada
        echo "<p>$greeting</p>";
        echo "<p>Você digitou: " . sprintf("%02d:%02d", $hour, $minute) . "</p>";
    } else {
        echo "<p>Formato inválido! Por favor, digite no formato HH:MM.</p>";
    }
}
?>
</body>
</html>
