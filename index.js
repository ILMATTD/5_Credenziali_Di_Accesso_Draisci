"use strict"

const prompt=require("prompt-sync")();

const {emailValida}=require("./utils.js");

function main()
{
    let email;
    let password;
    let confermaPassword;
    
    console.log("\nBenvenuto nel siestema per le credenzili di accesso \n")
    console.log("1)Accedi\n2)Registrati\n3)Recupera password\n4)Esci");

    do
    {
        email=prompt("inserisci la tua email:");
        password=prompt("inserisci la tua password:");
        confermaPassword=prompt("conferma la tua password:");
    }while(password!=confermaPassword||!emailValida(email)||email==="esci");
}
main();