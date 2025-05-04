/**
 * @author: Matteo Draisci
 */

"use strict"
/**
 * @type {Array<string>}
 * @description Lista dei suffissi validi per indirizzi email.
 */
let suffissi=["com","it","org","net","edu","gov"];


/**
 * @function emailValida
 * @description Controlla se un'email è valida in base struttura e dominio.
 * @param {string} email -L'indirizzo email da verificare.
 * @return {boolean} -Restituisce true se l'email è valisa, false se non lo è.
 */

function emailValida(email) 
{
    let indiceChiocciola=email.indexOf("@");
    let indicePunto=email.lastIndexOf(".");

    if (indiceChiocciola<1||indicePunto<indiceChiocciola+2||indicePunto===email.length-1) 
    {
        return false;
    }

    let dominio=email.substring(indicePunto+1).trim().toLowerCase();
    return suffissi.includes(dominio);
}

/**
 * @function passwordValida
 * @description Verifica se una password soddisfa i criteri di sicurezza minimi:lunghezza minima di 10 caratteri, almeno una lettera maiuscola e almeno un carattere speciale.
 * @param {string} password -La password da verificare.
 * @returns {boolean} -Restituisce true se la password è valida, false se non lo è.
 */

function passwordValida(password) 
{
    if(password.length<10) return false;

    let maiuscola=false;
    let carattereSpeciale=false;
    let caratteriSpeciali="\",.&!$@";

    for (let i=0;i<password.length;i++) {
        let char=password.charAt(i);
        if (char===char.toUpperCase()&&char!==char.toLowerCase()) 
        {
            maiuscola = true;
        }
        if (caratteriSpeciali.includes(char)) 
            {
            carattereSpeciale=true;
        }
    }

    return maiuscola&&carattereSpeciale;
}

/**
 * @function calcoloRecuperoPassword
 * @description Calcola il numero di giorni trascorsi dalla data di nascita alla data attuale.
 * @param {number} giorno -Giorno di nascita dell'utente. 
 * @param {number} mese -Mese di nascita dell'utente.
 * @param {number} anno -anno di nascita dell'utente.
 * @returns {number} -Differenza in giorni tra la data fornita a quella attuale.
 */

function calcoloRecuperoPassword(giorno,mese,anno) 
{
    let dataAttuale=new Date();
    let dataNascita=new Date(anno, mese - 1, giorno);
    let differenza=dataAttuale.getTime() - dataNascita.getTime();
    return Math.floor(differenza/(1000*60*60*24));
}

/**
 * Cancella un utente dal sistema.
 * 
 * L'utente deve inserire la propria email e confermare la password per autorizzare la cancellazione.
 * Se email e password corrispondono a un utente registrato, l'utente verrà rimosso dall'elenco.
 * 
 * @function cancellaCredenziale
 * 
 */
function cancellaCredenziale() {
    let emailDaCancellare = prompt("Inserisci l'email dell'utente da cancellare: ");
    let passwordConferma = prompt("Conferma la password per sicurezza: ");

    const indiceUtente = utenti.findIndex(u => u.email === emailDaCancellare && u.password === passwordConferma);

    if (indiceUtente !== -1) {
        utenti.splice(indiceUtente, 1);
        console.log("Utente cancellato con successo.");
    } else {
        console.log("Utente non trovato o credenziali errate.");
    }
}




module.exports={emailValida,passwordValida,calcoloRecuperoPassword,cancellaCredenziale};