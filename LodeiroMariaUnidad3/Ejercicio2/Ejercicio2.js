/*EJERCICIO 2 (objeto Date)
Crea un programa que pida el día y el mes de tu cumpleaños y muestre los años en que tu cumpleaños va a caer en domingo desde el año actual hasta el año 2100.*/
function ejecuta(){
    var año=parseInt(document.getElementById("año").value);
    let mes=document.getElementById("mes").value;
    let dia=document.getElementById("dia").value;
    let fech=new Date(dia,mes,año);
    var cont=0;
    for(let a=año ; a<=2100; a++){
        
        if(fech.getDay===0){
            cont++;
            fech.getFullYear()+1;
        }
    }
    //alert(cont);   
    document.getElementById("resultado").innerHTML= cont;
}
