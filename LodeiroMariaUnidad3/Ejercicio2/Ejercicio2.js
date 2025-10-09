/*EJERCICIO 2 (objeto Date)
Crea un programa que pida el día y el mes de tu cumpleaños y muestre los años en que tu cumpleaños va a caer en domingo desde el año actual hasta el año 2100.*/
function ejecuta(){
    var año=parseInt(document.getElementById("año").value);
    let mes=parseInt(document.getElementById("mes").value);
    let dia=parseInt(document.getElementById("dia").value);
    let resultado="";
    
    for(let a=año ; a<=2100; a++){
        let fecha=new Date(a,mes-1,dia);   
        if(fecha.getDay()===0){
            resultado+=a+"<br>";
        }    
    }
 document.getElementById("resultado").innerHTML=resultado;     
   
}
