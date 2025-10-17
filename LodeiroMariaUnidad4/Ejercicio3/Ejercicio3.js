import {Cliente} from "./Cliente"; 
let a=new Cliente("Laura","Santander",50);
let b=new Cliente("Álvaro","Castro",50);
let c=new Cliente("Igor","Castro",60);
let d=new Cliente("Mónica","Zamora",30);
let e=new Cliente("Javi","Bilbao",30);
let f=new Cliente("David","Bilbao",50);
let clientes=[a,b,c,d,e,f];

document.getElementById("array").addEventListener("click", function(){
clientes.forEach((cliente)=>`<tr><td>${cliente.nombre}</td></tr>`)

})

document.getElementById("localidad").addEventListener("click",function(){


})

document.getElementById("cuota").addEventListener("click",function(){


})