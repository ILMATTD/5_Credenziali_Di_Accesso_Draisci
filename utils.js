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

module.exports={emailValida};