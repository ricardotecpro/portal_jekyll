package main

import (
	"fmt"
	"log"
	"strings"
	"time"
)

func main() {
	var input string
	fmt.Println("Digite uma hora do dia (formato HH:MM): ")
	fmt.Scanln(&input)
	input = strings.TrimSpace(input)

	// Definindo o formato esperado de hora
	formatter := "15:04"

	// Parsing da entrada para um objeto time.Time
	t, err := time.Parse(formatter, input)
	if err != nil {
		log.Fatalf("Formato inválido! Por favor, digite no formato HH:MM.")
	}

	// Obtendo a hora e o minuto da entrada
	hour := t.Hour()
	minute := t.Minute()

	// Determinando a saudação baseada na hora do dia
	var greeting string
	switch {
	case hour < 6:
		greeting = "Boa madrugada!"
	case hour < 12:
		greeting = "Bom dia!"
	case hour < 18:
		greeting = "Boa tarde!"
	default:
		greeting = "Boa noite!"
	}

	// Exibindo a saudação e a hora digitada
	fmt.Printf("%s\n", greeting)
	fmt.Printf("Você digitou: %02d:%02d\n", hour, minute)
}
