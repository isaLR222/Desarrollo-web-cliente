/*Realiza una web en la que el usuario pueda introducir el nombre de un ordenador con el siguiente formato:
DOCXXXT
025PXXXT
XXX sera un numero entre el 000 y el 252
T puede ser A, B  o C
Se le mostrará al usuario la siguiente dirección IP dependiendo de el nombre y de la letra T
T= A  → 10.42.68.XXX
T= B   → 10.42.69.XXX
T= C   → 10.52.178.XXX
*/
function ejecuta(){
let respuesta=document.getElementById("respuesta").value.toLowerCase();
let numeros=parseInt(respuesta.slice(-4,-1));
let letra=respuesta.charAt(respuesta.length-1);
let ip="";
 if(numeros>0&&numeros<=255){
switch(letra){
    case 'a': ip="10.41.68."+numeros; break;
    case 'b': ip="10.42.60."+numeros;; break;
    case 'c': ip="10.52.178."+numeros;; break;
    }
    document.getElementById("resultado").innerHTML="Tu ip es: "+ip;
 } else document.getElementById("resultado").innerHTML="Has introducido mal los digitos";
}