console.log("hello");

/* 
Descrizione:
Scrivere un programma che chieda all’utente:

1-chiedere all'utente: numero di chilometri da percorrere
2-chiedere all'utente: età 

Sulla base di queste informazioni dovrà:
1-calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
1a-il prezzo del biglietto = 0.21 € al km
2a-sconto del 20% per i minorenni
3a-sconto del 40% per gli over 65

MILESTONE 1: Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2: Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Nota: Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.
Nota 2:
Le milestone vanno seguite in ordine. Non passate alla richiesta della m2 se non avete prima completato la m1.
*/


//select button
const button = document.querySelector(".confirm")
console.log(button);

button.addEventListener ("click", () => {
    //imput nome e cognome
    const field_name = document.querySelector(".nome_cognome");
    const add_name = field_name.value; 
    console.log(add_name);
    //imput km
    const field_km = document.querySelector(".km_to_do");
    const add_km = field_km.value;
    console.log(add_km);
    //select age
    const field_age = document.querySelector(".age")
    const add_age = field_age.value;
    console.log(add_age);
})
//quanto fatto sopra logga solo in console








/* 

//prima fase: preparazione
let km
let age
let price_ticket_general
let price_ticket_under_18
let price_ticket_over_65
let cost_trip_general
let cost_trip_under_18
let cost_trip_over_65
let discount_20
let discount_40

//seconda fase: raccogliamo i dati 
km=prompt("Ciao, inserisci i km che vuoi percorrere");
console.log(km);

age=prompt("Ciao, inserisci la tua eta")
console.log(age);

price_ticket_general=0.21;

//terza fase: elaboriamo i dati+uotput
if(age<18){
    discount_20=((price_ticket_general*20)/100);
    console.log(discount_20);
    price_ticket_under_18=price_ticket_general-discount_20;
    console.log(price_ticket_under_18);
    cost_trip_under_18=km*price_ticket_under_18;
    console.log(`il prezzo per gli under 18 è ${cost_trip_under_18.toFixed(2)}€`);
} else if(age>65){
    discount_40=((price_ticket_general*40)/100);
    console.log(discount_40);
    price_ticket_over_65=price_ticket_general-discount_40;
    console.log(price_ticket_over_65);
    cost_trip_over_65=km*price_ticket_over_65;
    console.log(`il prezzo per gli over 65 è ${cost_trip_over_65.toFixed(2)}€`);
} else{
    cost_trip_general=km*price_ticket_general;
    console.log(`il prezzo è ${cost_trip_general.toFixed(2)}€`);
}

*/

