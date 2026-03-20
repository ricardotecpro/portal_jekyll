// script.js

document.addEventListener('DOMContentLoaded', function() {
    const inputTime = document.getElementById('inputTime');
    const submitButton = document.getElementById('submitButton');
    const greetingMessage = document.getElementById('greetingMessage');
    const formattedTime = document.getElementById('formattedTime');

    function submitTime() {
        const timeRegex = /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/;
        const inputValue = inputTime.value.trim();

        if (timeRegex.test(inputValue)) {
            const [hour, minute] = inputValue.split(':').map(Number);

            if (hour < 6) {
                greetingMessage.textContent = "Boa madrugada!";
            } else if (hour < 12) {
                greetingMessage.textContent = "Bom dia!";
            } else if (hour < 18) {
                greetingMessage.textContent = "Boa tarde!";
            } else {
                greetingMessage.textContent = "Boa noite!";
            }

            formattedTime.textContent = `Você digitou: ${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        } else {
            greetingMessage.textContent = "Formato inválido! Por favor, digite no formato HH:MM.";
            formattedTime.textContent = '';
        }
    }

    submitButton.addEventListener('click', submitTime);

    inputTime.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            submitTime();
        }
    });
});
