package main

import (
	"fmt"
	"strings"
	"time"

	"gioui.org/app"
	"gioui.org/font/gofont"
	"gioui.org/io/system"
	"gioui.org/layout"
	"gioui.org/unit"
	"gioui.org/widget"
	"gioui.org/widget/material"
)

func main() {
	go func() {
		// Cria uma nova janela
		w := app.NewWindow(app.Title("Saudação de Hora do Dia"), app.Size(unit.Dp(300), unit.Dp(200)))

		// Cria um editor de texto para entrada do usuário
		var timeInput widget.Editor
		var greetingLabel string
		var submitButton widget.Clickable

		// Inicializa o tema
		th := material.NewTheme(gofont.Collection())

		for e := range w.Events() {
			switch e := e.(type) {
			case system.DestroyEvent:
				return
			case system.FrameEvent:
				gtx := layout.NewContext(&e.Queue, e)

				layout.Flex{
					Axis:    layout.Vertical,
					Spacing: layout.SpaceAround,
				}.Layout(gtx,
					layout.Rigid(material.Label(th, unit.Sp(16), "Digite uma hora (HH:MM):").Layout),
					layout.Rigid(material.Editor(th, &timeInput, "HH:MM").Layout),
					layout.Rigid(func(gtx layout.Context) layout.Dimensions {
						return material.Button(th, &submitButton, "Verificar").Layout(gtx)
					}),
					layout.Rigid(func(gtx layout.Context) layout.Dimensions {
						return material.Label(th, unit.Sp(16), greetingLabel).Layout(gtx)
					}),
				)

				if submitButton.Clicked() {
					input := timeInput.Text()
					greetingLabel = getGreeting(input)
				}

				e.Frame(gtx.Ops)
			}
		}
	}()
	app.Main()
}

func getGreeting(input string) string {
	input = strings.TrimSpace(input)
	if isValidTimeFormat(input) {
		hour, _, _ := parseTime(input)
		var message string
		if hour < 6 {
			message = "Boa madrugada!"
		} else if hour < 12 {
			message = "Bom dia!"
		} else if hour < 18 {
			message = "Boa tarde!"
		} else {
			message = "Boa noite!"
		}
		return fmt.Sprintf("%s Você digitou: %s", message, input)
	} else {
		return "Formato inválido! Por favor, digite no formato HH:MM."
	}
}

func isValidTimeFormat(input string) bool {
	_, err := time.Parse("15:04", input)
	return err == nil
}

func parseTime(input string) (int, int, error) {
	timeValue, err := time.Parse("15:04", input)
	if err != nil {
		return 0, 0, err
	}
	return timeValue.Hour(), timeValue.Minute(), nil
}
