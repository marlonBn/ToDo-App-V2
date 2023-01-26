// Hole mir alle Elemente die ich später brauche
let aktuellerWert: number = 22;


const aktWertElement = document.getElementById("aktWert") as HTMLElement
aktWertElement.innerHTML = aktuellerWert.toString()
const btnAdd = document.getElementById("btnAdd") as HTMLElement
const btnLess = document.getElementById("btnLess") as HTMLElement
const inputInitialWert= document.getElementById("inputInitalWert") as HTMLInputElement
const buttonChangeInitialWert= document.getElementById("buttonChangeInitialWert")as HTMLButtonElement

// Funktion die die Zahl erhöht
const addAndWrite = function (): void {
    // 1. Erhöhe die Zahl
    aktuellerWert = aktuellerWert + 1
    console.log(aktuellerWert)

    // 2. Schreibe die Zahl ins html
    aktWertElement.innerHTML = aktuellerWert.toString()
}

// Funktion die die Zahl verringert
const substractAndWrite = function (): void {
    // 1. verringere die Zahl
    if (aktuellerWert == 0) {
        return
    }
    aktuellerWert = aktuellerWert - 1
    
    // 2. Schreibe die Zahl ins html
    aktWertElement.innerHTML = aktuellerWert.toString()
}
    

// Event Listener hinzufügen
btnAdd.addEventListener("click", addAndWrite);
btnLess.addEventListener("click", substractAndWrite);

const initialise = function (): void{
    const Wert = inputInitialWert.value
    aktWertElement.innerHTML = Wert.toString()
    aktuellerWert= parseInt(Wert)
}
buttonChangeInitialWert.addEventListener("click", initialise)