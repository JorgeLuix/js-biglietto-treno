/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. :grande_sorriso:

*/

/*VARIABILI*/

/*COSTANTI*/

const KmTravelled = parseInt(prompt('km percorsi'));
const AgeUtente = parseInt(prompt('Età utente'));

let KmPrice = 0.21;
let TotalTicketPrice = (KmTravelled * KmPrice);

/*VARIABILI SCONTI */
let AdultDiscount = 0.40;
let MinorDiscount = 0.20;

/*MESSAGGIO*/
let message = 'Prezzo del biglietto è: ';

/*CONDIZIONALI*/
if(AgeUtente < 18) {
    message += (TotalTicketPrice * MinorDiscount).toFixed(2) +' &euro;';
}
if(AgeUtente > 65) {
    message+= (TotalTicketPrice * AdultDiscount).toFixed(2) +' &euro;';
}
else if ((AgeUtente >18) && (AgeUtente < 65)) {
    message += (TotalTicketPrice).toFixed(2) +' &euro;';
}
document.getElementById('title').innerHTML =

 `<h1>${message}</h1>`;

    