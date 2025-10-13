export var paises=["Albania","España","Sri Lanka"];
//Contar
export function contar(){
    let cont=0;
    for(var i=0; i<paises.length;i++){
        cont++;
    }
    return cont;
}
//Ordenar
export function listOrdenada(){
    return paises.sort();
}

export function listOrdenadaR(){
    return paises.reverse();
}
//Añadir
export function añadiF(pais){
    paises.push(pais);
}
export function añadiP(pais){
    paises.unshift(pais);
}

//Borrar
export function eliminarP(){
    paises.shift();
}

export function eliminarF(){
    paises.pop();
}

//Consultar
export function consultarPos(numero){
    return paises[numero-1]
}

export function consultarNom(nombre){
    return paises.indexOf(nombre)+1;
}