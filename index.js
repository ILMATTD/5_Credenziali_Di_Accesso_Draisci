"use strict"

const prompt=require("prompt-sync")();

const {emailValida, passwordValida}=require("./utils.js");

const utenti=[];
let utente={};

function main()
{
    let email;
    let password;
    let confermaPassword;
    let scelta;
    let giorno,mese,anno;
    
    console.log("\nBenvenuto nel siestema per le credenzili di accesso \n")
    console.log("1)Accedi\n2)Registrati\n3)Recupera password\n4)Esci");

    scelta=Number(prompt("---->"));
    switch(scelta)
    {
        case 1:
            
                email=prompt("inserisci la tua email:");
                password=prompt("inserisci la tua password:");
            //}while(password!=confermaPassword||!emailValida(email)||!passwordValida(password)||utenti.some(utente=>utente.email==email&&utente.password==password));
            if(!emailValida(email)||!passwordValida(password))
            {
                console.log("Email o password non validi!");
            }
            else
            {
                if(utenti.some(utente=>utente.email==email&&utente.password==password))
                {
                    console.log("Accesso effettutato con successo!");
                }
                else
                {
                    console.log("Email o password non validi!");
                }
            }
            
            break;
        case 2:
                email=prompt("inserisci la tua email:");
                password=prompt("inserisci la tua password:");
                confermaPassword=prompt("Conferma la tua password:");
                giorno=Number(prompt("inserisci il giorno di nascita:"));
                mese=Number(prompt("inserisci il mese di nascita:"));
                anno=Number(prompt("inserisci l'anno di nascita:"));
            if(!emailValida(email)||!passwordValida(password))
            {
                console.log("Email o password non validi!");
            }   
            else if(utenti.some(utente=>utente.email==email))
            {
                console.log("Email gia' registrata!");
            }
            else if(password!=confermaPassword)
            {
                console.log("Le password non coincidono!");
            }
            else
            {
                utente.email=email;
                utente.password=password;
                utenti.push(utente);
                console.log("Registrazione avvenuta con successo!");
                
            }
            break;
        case 3:
            email=prompt("inserisci la tua email:");
            if(utenti.some(utente=utente.email==email))
            {
                console.log("Inserisci la differenza in giorni tra la data della nascita e la data corrente:");
                let differenza=Number(prompt("---->"));
                if(differenza==calcoloRecuperoPassword(giorno,mese,anno))
                {
                    console.log("Recupero password avvenuto con successo!");
                    password=differenza.toString(16);
                    console.log("La tua nuova password e': "+password);

                }
                else
                {
                    console.log("Recupero password fallito!");
                }
            }
    }


}
main();