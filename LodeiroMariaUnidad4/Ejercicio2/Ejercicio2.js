/*Haz un programa que pregunte una letra de la A a la Z. Tras ello te dirá cuantos DNIs de 3 cifras (del 001 al 999) tienen esa letra y los meterá en un array, tras ello te mostrará el listado de todos los DNIs que tienen esa letra.*/
import * as exportado from "./LetraDni.js";
document.getElementById("ej").addEventListener("click", function () {
    var dni = [];
    let letra = document.getElementById("letra").value;
    let l = exportado.pos(letra);
    for (let i = 1; i <= 999; i++) {
        if (i % 23 == l) {
            dni.push(i);
        }
    }
   dni.forEach(function(numero){
    alert(numero);
   })
})
