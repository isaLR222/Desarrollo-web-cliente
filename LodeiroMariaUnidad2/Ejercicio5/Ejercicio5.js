let hora;
let minutosP=true;

for(hora=9; hora<=21; hora++){
    for(let j=0; j<2;j++){
        if(minutosP){document.write(hora+":00"+"<br>");

        }else document.write(hora+":30"+"<br>");     
        minutosP=!minutosP;     
    }
}