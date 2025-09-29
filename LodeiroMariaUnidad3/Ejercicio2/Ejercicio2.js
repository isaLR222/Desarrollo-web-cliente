/*EJERCICIO 2 (objeto Date)
Crea un programa que pida el día y el mes de tu cumpleaños y muestre los años en que tu cumpleaños va a caer en domingo desde el año actual hasta el año 2100.*/
function ejecuta(){
    let año=document.getElementById("año").value;
    let mes=document.getElementById("mes").value;
    let dia=document.getElementById("dia").value;
    const fech=new Date(dia,mes,año);
    let cont;
    for(let a=año ; año<=2100; año++){
        if(fech.getDay=0){
            cont++;
            fech.getFullYear++;
        }
    }
    //alert(cont);   
    document.getElementById("resultado").innerHTML= cont;
}
