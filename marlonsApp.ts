import Prompt from "prompt-sync"
import { Greet } from "./greeting"

const prompt = Prompt({});

Greet()

var zaehler = 5

var add = function () {
    zaehler = zaehler + 1
    return zaehler
}

var minus = function () {
    zaehler = zaehler - 1
    return zaehler;
}

// Start des Hauptprogramms
let eingabe = "";
while (eingabe !== "q") {
    console.log(`Der aktuelle Wert des Zählers ist: ${zaehler}`);
    eingabe = prompt("Willst Du die Zahl erhöhen oder erniedrigen (+, -)?")
    if (eingabe == "+") {
        add();
    }
    if (eingabe == "-" && zaehler > 0) {
        minus()
    }
}


