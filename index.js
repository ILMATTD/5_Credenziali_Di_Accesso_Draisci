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
            //}while(password!=confermaPassword||!emailValida(email)||!passwordValida(password)||email!=esci);
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
                
            }
    }


}
main();