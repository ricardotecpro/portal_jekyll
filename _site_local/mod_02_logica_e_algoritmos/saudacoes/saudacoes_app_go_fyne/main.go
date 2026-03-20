package main

import (
	"fmt"
	"fyne.io/fyne/v2"
	"strings"
	"time"

	"fyne.io/fyne/v2/app"
	"fyne.io/fyne/v2/container"
	"fyne.io/fyne/v2/layout"
	"fyne.io/fyne/v2/widget"
)

func main() {
	myApp := app.New()
	win := myApp.NewWindow("Saudação por Hora do Dia")
	win.Resize(fyne.NewSize(400, 200))

	timeEntry := widget.NewEntry()
	timeEntry.SetPlaceHolder("Digite a hora (HH:MM)")

	greetingLabel := widget.NewLabel("")

	submitButton := widget.NewButton("Enviar", func() {
		input := strings.TrimSpace(timeEntry.Text)

		// Definindo o formato esperado de hora
		formatter := "15:04"

		// Parsing da entrada para um objeto time.Time
		t, err := time.Parse(formatter, input)
		if err != nil {
			greetingLabel.SetText("Formato inválido! Por favor, digite no formato HH:MM.")
			return
		}

		// Obtendo a hora e o minuto da entrada
		hour := t.Hour()

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
		greetingLabel.SetText(fmt.Sprintf("%s\nVocê digitou: %02d:%02d", greeting, hour, t.Minute()))
	})

	content := container.NewVBox(
		layout.NewSpacer(),
		timeEntry,
		submitButton,
		layout.NewSpacer(),
		greetingLabel,
		layout.NewSpacer(),
	)

	win.SetContent(content)
	win.ShowAndRun()
}
