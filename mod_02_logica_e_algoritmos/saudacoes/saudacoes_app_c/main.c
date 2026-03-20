#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main() {
    char input[6];
    int hour, minute;

    printf("Digite uma hora do dia (formato HH:MM): ");
    fgets(input, sizeof(input), stdin);

    if (sscanf(input, "%2d:%2d", &hour, &minute) == 2 && hour >= 0 && hour < 24 && minute >= 0 && minute < 60) {
        if (hour < 6) {
            printf("Boa madrugada!\n");
        } else if (hour < 12) {
            printf("Bom dia!\n");
        } else if (hour < 18) {
            printf("Boa tarde!\n");
        } else {
            printf("Boa noite!\n");
        }

        printf("Voce digitou: %02d:%02d\n", hour, minute);
    } else {
        printf("Formato inválido! Por favor, digite no formato HH:MM.\n");
    }

    return 0;
}
