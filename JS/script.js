// Descrizione:
// Scrivere un programma che chieda all’utente:
// Il numero di chilometri da percorrere
// Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del
// biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.2762 € al km)
// va applicato uno sconto del 17.5% per i minorenni
// va applicato uno sconto del 33.3% per gli over 65.
// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica:
// usando esclusivamente due input e un bottone (non stilizzati),
// realizziamo le specifiche scritte sopra.
// La risposta finale (o output) sarà anch’essa da scrivere in console.
// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante
// allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati
// e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale,
// andranno quindi stampati in pagina, sempre rispettando le due cifre decimali.

let kilometers = (document.getElementById("kilometers"));
let age = (document.getElementById("age"));


const button = document.querySelector("a.btn");
button.addEventListener("click", function () {



let ticketPrice = (kilometers.value * .2762);
let over65Disc = (ticketPrice * .333);
let under18Disc = (ticketPrice * .175);


if (age.value >= 65){
    ticketPrice -= over65Disc;
}   else if (age.value < 18) {
    ticketPrice -= under18Disc; 
}

document.querySelector("p").innerHTML= (`\u20ac ${ticketPrice.toFixed(2)}`);

});