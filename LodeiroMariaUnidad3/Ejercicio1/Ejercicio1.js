/*EJERCICIO 1 (objeto Date)
Crea un programa que muestre el número de días que quedan desde hoy hasta el fin de curso (por ejemplo, el 22 de junio).
*/
var hoy=new Date();
//var fecha=new Date("June 22 2026");
var fecha=new Date("2026/06/22");
let dif=fecha-hoy;
let dias = Math.round((dif/(1000*60*60*24)));
document.write("Quedan: "+dias+" dias");
//document.getElementById("dia").innerHTML=`dias: ${dias}`;