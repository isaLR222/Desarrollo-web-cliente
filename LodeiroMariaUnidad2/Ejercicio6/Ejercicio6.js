let hora;
let minutos;

for(hora=9; hora<21; hora++){
    for(minutos=0; minutos<60; minutos+=5){
        if(hora<10){document.write("0"+hora+":"+minutos+"<br>");}
        else if(minutos<10)document.write(hora+":"+"0"+minutos+"<br>");
        else document.write(hora+":"+minutos+"<br>");
    }
       
    }
document.write("21:00");