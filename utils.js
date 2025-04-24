"use strict"

let suffissi=["com","it","org","net","edu","gov"];

function emailValida(email){
    let indiceChiocciola=email.indexOf("@");
    let indicePunto=email.indexOf(".");
    if(indiceChiocciola<1||indicePunto<indiceChiocciola+2||indicePunto==email.length-1)
    {
        return false;
    }

    let dominio=email.substring(indicePunto+1).trim().toLowerCase();
    
    for(let i=0;i<suffissi.length;i++)
    {
        let suffissoPulito=suffissi[i].trim().toLowerCase();
        if(suffissoPulito==dominio)
        {
            return true;
        }
    }
    return false;
}

function passwordValida(password){
    if(password.length<10)
    {
        return false;
    }

    let maiuscola=false;
    let carattereSpeciale=false;
    let caratteriSpeciciali="\",.&!$@"

    for(let i=0;i<password.length;i++)
    {
        let char=password.charAt(i);
        if(char.isUpperCase(c))
        {
            maiuscola=true;
        }
        if(caratteriSpeciciali.indexOf(c)!=-1)
        {
            caratteriSpeciale=true;
        }
        
    }
    return maiuscola && caratteriSpeciale;
}

function calcoloRecuperoPassword(gionro,mese,anno)
{
    let dataAttuale=new Date();
    let dataNascita=new Date(anno,mese-1,giorno);
    let differenza=dataAttuale.getTime()-dataNasctita.getTime();
    let giorniDifferenza=Math.floor(differenza/(1000*60*60*24));
    return giorniDifferenza;
}



module.exports={emailValida,passwordValida};