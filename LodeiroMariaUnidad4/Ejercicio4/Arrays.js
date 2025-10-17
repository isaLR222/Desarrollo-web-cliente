/*import  {Disco} from "./Disco";
let disco1=new Disco("NombreGenerico", "UnaPersona", 2004, "pop");
let disco2=new Disco("ahgi", "Ylenia", 1940, "rock");
let disco3=new Disco("wooo", "Mia Colucci", 2004, "pop");*/
export var discos=[];

export function contar(){
    let cont=0;
    for(var i=0; i<discos.length;i++){
        cont++;
    }
    return cont;
}
//Ordenar
export function listOrdenada(){
    return discos.sort();
}

export function listOrdenadaR(){
    return discos.reverse();
}
//Añadir
export function añadiF(pais){
 discos.push(pais);
}
export function añadiP(pais){
 discos.unshift(pais);
}

//Borrar
export function eliminarP(){
 discos.shift();
}

export function eliminarF(){
 discos.pop();
}

//Consultar
export function consultarPos(numero){
    return discos[numero-1]
}

export function consultarNom(nombre){
    return discos.indexOf(nombre)+1;
}