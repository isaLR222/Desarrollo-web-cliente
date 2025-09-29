/*Crea un programa que pida al usuario un número entero por pantalla y muestre:
Su valor exponencial.
El número con 4 decimales.
El número en binario.
El número en octal.
El número en hexadecimal.
Utiliza para ello los métodos del objeto Number.
Por ejemplo si metes 50, deberías obtener: 5e+1 / 50.0000 / 110010 / 62 / 32
*/
function ejecuta(){
let numero=parseInt(document.getElementById("numero").value);
//let exponente=parseInt(document.getElementById("exponente").value);

document.getElementById("valorExp").innerHTML=`Valor exponencial: ${Math.exp(numero)}`;

document.getElementById("dec").innerHTML=`Valor decimal: ${numero.toFixed(4)}`;

document.getElementById("bi").innerHTML=`Binario: ${numero.toString(2)}`

document.getElementById("octal").innerHTML=`Octal: ${numero.toString(8)}`

document.getElementById("hex").innerHTML=`Hexadecimal: ${numero.toString(16)}`
}