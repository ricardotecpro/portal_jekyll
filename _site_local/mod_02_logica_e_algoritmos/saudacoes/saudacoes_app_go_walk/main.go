package main

import (
	"fmt"
	"strings"
	"time"

	"github.com/lxn/walk"
	. "github.com/lxn/walk/declarative"
)

func main() {
	var inTE *walk.LineEdit
	var outTE *walk.TextEdit

	MainWindow{
		Title:   "Saudação de Hora do Dia",
		MinSize: Size{Width: 300, Height: 200},
		Layout:  VBox{},
		Children: []Widget{
			Label{Text: "Digite uma hora (HH:MM):"},
			LineEdit{AssignTo: &inTE},
			PushButton{
				Text: "Verificar",
				OnClicked: func() {
					input := inTE.Text()
					message := getGreeting(input)
					outTE.SetText(message)
				},
			},
			TextEdit{AssignTo: &outTE, ReadOnly: true},
		},
	}.Run()
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
