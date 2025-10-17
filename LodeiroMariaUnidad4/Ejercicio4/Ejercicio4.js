import * as exportado from "./Arrays.js";
import { Disco } from "./Disco.js";
let disco1=new Disco("NombreGenerico", "UnaPersona", 2004, "pop");
let disco2=new Disco("ahgi", "Ylenia", 1940, "rock");
let disco3=new Disco("wooo", "Mia Colucci", 2004, "pop");
exportado.discos=[disco1,disco2,disco3];
document.getElementById("cant").addEventListener("click",function(){
    alert(exportado.contar());

})

document.getElementById("info").addEventListener("click",function(){
    let r=prompt("1-Ordenados alfabeticos 2-Ordenados al revés");
    switch(r){
        case "1": document.getElementById("resultado").innerHTML= exportado.listOrdenada();

        case "2": document.getElementById("resultado").innerHTML= exportado.listOrdenadaR();

        default: alert("error");
    }
})

document.getElementById("intervalo").addEventListener("click",function(){
    let p=prompt("Introduce un año");
    let s=prompt("Introduce otro");
    alert(s-p);
})

document.getElementById("añadir").addEventListener("click",function(){
    let nombre=prompt("Introduce nombre del disco");
    
})