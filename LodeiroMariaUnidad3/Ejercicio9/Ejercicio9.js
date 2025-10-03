/*Estamos implementando una funcionalidad en nuestra aplicación de creación de NIFs y NIE y necesitamos una calculadora de la letra de control..
– Los NIFs están formados por 8 dígitos y una letra de control.
-Los NIEs están formados por una letra (X, Y o Z), 7 dígitos y una letra de control.
enlace donde se explica cómo calcular ese dígito de control.
https://seresco.es/recursos-humanos-rrhh/calcular-letra-del-nif/
Necesitamos dos campos de texto (<input type=”text”>): en el primero se introducen los dígitos del NIF o NIE y en el segundo debería aparecer la letra correspondiente.
*/
function Ejecuta(){
    let dni=parseInt(document.getElementById("dni").value);
    let letras="TRWAGMYFPDXBNJZSQVHLCKE";
    let cod=dni%23;
    let letra=letras.charAt(cod);
    document.getElementById("resultado").innerHTML=`La letra de tu DNI es: ${letra} <br> Tu DNI es ${dni}${letra}`
}