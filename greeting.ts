import Prompt from "prompt-sync"

export const Greet = function () {
    // Initialisierung und Begrüßung
    const prompt = Prompt({});
    const name = prompt("Wie ist Dein Name?")
    const istFranzose = true;
    const gruss_de = "Hallo";
    const gruss_fr = "Bonjour";
    const gruss = istFranzose ? gruss_fr : gruss_de;
    console.log(`${gruss} ${name}!`);
};