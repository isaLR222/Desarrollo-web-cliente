import * as exportado from "./Arrays.js";

//Contar elementos
document.getElementById("cant").addEventListener("click",function(){
    alert(exportado.contar())});

//document.getElementById()

//Ordenar elementos
document.getElementById("list").addEventListener("click",function(){
    let respuesta=prompt("1- ordenado, 2- al revés");
    switch(respuesta){
        case "1": alert(exportado.listOrdenada()); break;
        case "2": alert(exportado.listOrdenadaR()); break;
        default: alert("Numero introducido incorrecto"); break;
    }
})

//Añadir elemento
document.getElementById("añadir").addEventListener("click", function(){
    let pais=prompt("Introduce un país a añadir");
    let respuesta=prompt("1- Al final 2- Al principio");
    switch(respuesta){
        case "1": exportado.añadiF(pais); break;
        case "2": exportado.añadiP(pais); break;
        default: alert("Numero introducido incorrecto"); break;
    }
})

//Borrar elemento
document.getElementById("borrar").addEventListener("click", function(){
    let respuesta=prompt("1- eliminar ultimo 2- eliminar primero");
     switch(respuesta){
        case "1": exportado.eliminarF(); break;
        case "2": exportado.eliminarP(); break;
        default: alert("Numero introducido incorrecto"); break;
    }
})

//Consultar
document.getElementById("consulta").addEventListener("click", function(){
    let respuesta=prompt("1- Acceder por posicion 2- Acceder por nombre");
     switch(respuesta){
        case "1": let pos=parseInt(prompt("Posicion")); alert(exportado.consultarPos(pos)); break;
        case "2": let nom=prompt("Nombre"); alert(exportado.consultarNom(nom)) ; break;
        default: alert("Numero introducido incorrecto"); break;
    }

})