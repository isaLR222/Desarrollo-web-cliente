let edad=prompt("Introduce edad");
let respuesta
switch(true){
case(edad>0 && edad<12): respuesta="niño"; break;
    case(edad>13 && edad<26): respuesta="Joven"; break;
    case(edad>27 && edad<60): respuesta="Adulto"; break;
    case(edad>61): respuesta="Jubilado"; break;
    default: respuesta="Valores introducidos incorrectos";}

alert(respuesta);