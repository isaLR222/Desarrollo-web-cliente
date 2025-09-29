function ejecuta(){
let edad=parseInt(document.getElementById("edad").value);
let respuesta;

if(edad>=0 && edad<=12){respuesta="Niño";

}else if(edad>=13 && edad<=26){respuesta="Joven";

}else if(edad>=27 && edad<=60){respuesta="Adulto";

}else if(edad>=61){respuesta="Jubilado";

}else respuesta="Valor incorrecto";
 document.getElementById("resultado").innerHTML = respuesta;
}



/*switch(edad){
    case(edad>0 && edad<12): respuesta=prompt("niño");
    case(edad>13 && edad<26): respuesta="Joven";
    case(edad>27 && edad<60): respuesta="Adulto";
    case(edad>61): respuesta="Jubilado"
    default: respuesta="Valores introducidos incorrectos";
}*/

//Otra version:

let respuesta2=prompt("Introduce edad");

if(edad>=0 && edad<=12){respuesta2="Niño";

}else if(edad>=13 && edad<=26){respuesta2="Joven";

}else if(edad>=27 && edad<=60){respuesta2="Adulto";

}else if(edad>=61){respuesta2="Jubilado";

}else respuesta2="Valor incorrecto";
 //document.getElementById("resultado").innerHTML = respuesta; 
 alert(respuesta2);