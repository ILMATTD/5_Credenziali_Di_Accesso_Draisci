"use strict"

let suffissi=["com","it","org","net","edu","gov"];

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

function calcoloRecuperoPassword(giorno,mese,anno) 
{
    let dataAttuale=new Date();
    let dataNascita=new Date(anno, mese - 1, giorno);
    let differenza=dataAttuale.getTime() - dataNascita.getTime();
    return Math.floor(differenza/(1000*60*60*24));
}



module.exports={emailValida,passwordValida,calcoloRecuperoPassword};