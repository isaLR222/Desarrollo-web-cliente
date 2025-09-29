/*Crea un programa que pida al usuario que elija una opción del siguiente menú (usar prompt):
-Potencia.
-Raíz.
-Redondeo.
-Trigonometría.
*/
let respuesta=parseInt(prompt("1-Potencia 2-Raíz 3-Redondeo 4-Trigonometria"));

switch(respuesta){
    case 1: Potencia();
    case 2: Raiz();
    case 3: Redondeo();
    case 4: Trigonometria();
}

function Potencia(){
    let base=parseInt(prompt("Introduce base:"));
    let exp=parseInt(prompt("Introduce exponente:"));
    let res=Math.pow(base,exp);
    alert("El resultado es: "+res);
}

function Raiz(){
    let num=parseInt(prompt("Introduce número: "));
    let res=Math.sqrt(num);
    alert("La raíz es: "+res);
}

function Redondeo(){
    let num=parseFloat(prompt("Introduce número: "));
    let res=Math.round(num);
    alert("Redondeado es: "+res);
}

function Trigonometria(){
    let h=parseFloat(prompt("Introduce hipotenusa: "));
    let cc=parseFloat(prompt("Introduce cateto contiguo: "));
    let co=parseFloat(prompt("Introduce cateto opuesto: "));

    let sen=Math.sin(co,h);
    let cos=Math.cos(cc,h);
    let tan=Math.tan(co,cc);

    alert("Seno: "+sen+"\n"+"Coseno: "+cos+"\n"+"Tangente: "+tan);
}