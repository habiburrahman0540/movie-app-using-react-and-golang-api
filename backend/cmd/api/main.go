package main

import (
	"fmt"
	"log"
	"net/http"
)

const port int = 8080

type application struct {
	Domain string
}

func main() {
	// Set Application config
	var app application
	// Read from command line

	//connect to the database
	app.Domain = "example.com"
	log.Println("Starting server at port ", port)

	// Start a web server
	err := http.ListenAndServe(fmt.Sprintf(":%d", port), app.routes())
	if err != nil {
		log.Fatal(err)
	}
}
