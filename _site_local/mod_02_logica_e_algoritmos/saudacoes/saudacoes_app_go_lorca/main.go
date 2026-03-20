package main

import (
	"github.com/zserge/lorca"
	"log"
)

func main() {
	ui, err := lorca.New("", "", 480, 320)
	if err != nil {
		log.Fatalf("Failed to create Lorca UI: %v", err)
	}
	defer ui.Close()

	ui.Load("data:text/html,<html><body><h1>Hello, World!</h1></body></html>")
	<-ui.Done()
}
