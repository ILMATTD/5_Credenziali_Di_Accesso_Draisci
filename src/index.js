/**
 * @author: Matteo Draisci
 */

"use strict";

const prompt = require("prompt-sync")();
const { emailValida, passwordValida, calcoloRecuperoPassword } = require("./utils.js");
/**
 * @typedef {Object} Utente
 * @property {string} email -L'indirizzo mail dell'utente.
 * @property {string} password -La password dell'utente.
 * @property {number} giorno -Il giorno di nascita.
 * @property {number} mese -Il mese di nascita.
 * @property {number} anno -L'anno di nascita.
 */
const utenti = [];

/**
 * @function main -FUNZIONE PRINCIPALE DEL PROGRAMMA.
 * @description Avvia il programma e gestisce il menu interattivo per accesso, registrazione e recupero password.
 */

function main() 
{
    let scelta;
    console.log("\nBenvenuto nel sistema per le credenziali di accesso\n");
    do{
    console.log("1) Accedi\n2) Registrati\n3) Recupera password\n4) Esci");

    scelta = Number(prompt("----> "));
    

    
    switch (scelta) {
        case 1:
            let email=prompt("Inserisci la tua email: ");
            let password=prompt("Inserisci la tua password: ");

            if (!emailValida(email) || !passwordValida(password)) {
                console.log("Email o password non validi!");
            } else {
                const utenteTrovato = utenti.find(u => u.email === email && u.password === password);
                if (utenteTrovato) {
                    console.log("Accesso effettuato con successo!");
                } else {
                    console.log("Email o password errati!");
                }
            }
            break;

        case 2:
            let nuovaEmail = prompt("Inserisci la tua email: ");
            let nuovaPassword = prompt("Inserisci la tua password: ");
            let confermaPassword = prompt("Conferma la tua password: ");
            let giorno = Number(prompt("Inserisci il giorno di nascita: "));
            let mese = Number(prompt("Inserisci il mese di nascita: "));
            let anno = Number(prompt("Inserisci l'anno di nascita: "));

            if (!emailValida(nuovaEmail)||!passwordValida(nuovaPassword)) {
                console.log("Email o password non validi!");
            } else if (utenti.some(u=>u.email===nuovaEmail)) {
                console.log("Email già registrata!");
            } else if (nuovaPassword!== confermaPassword) {
                console.log("Le password non coincidono!");
            } else {
                utenti.push({
                    email: nuovaEmail,
                    password: nuovaPassword,
                    giorno,
                    mese,
                    anno
                });
                console.log("Registrazione avvenuta con successo!");
            }
            break;

        case 3:
            let emailRecupero=prompt("Inserisci la tua email: ");
            let utenteRecupero=utenti.find(u=>u.email===emailRecupero);

            if (utenteRecupero) {
                console.log("Inserisci la differenza in giorni tra la data della nascita e la data corrente:");
                let differenzaInserita=Number(prompt("----> "));
                let differenzaCorretta=calcoloRecuperoPassword(utenteRecupero.giorno, utenteRecupero.mese, utenteRecupero.anno);

                if (differenzaInserita===differenzaCorretta) {
                    let nuovaPassword=differenzaInserita.toString(16);
                    utenteRecupero.password=nuovaPassword;
                    console.log("Recupero password avvenuto con successo!");
                    console.log("La tua nuova password è: "+nuovaPassword);
                } else {
                    console.log("Recupero password fallito!");
                }
            } else {
                console.log("Email non trovata!");
            }
            break;

        case 4:
            console.log("Uscita dal programma.");
            break;

        default:
            console.log("Scelta non valida!");
    }}while (scelta!=4);
    console.log("Arrivederci!");
}

main();