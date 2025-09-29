//Apartado 1
document.writeln("Tabla del 7 <br>");

for(let a=1;a<=10;a++){
    document.writeln("7 x "+a+" = "+(a*7)+ "<br>");
}

document.writeln("<br> Tabla de sumar del 8 <br>");
let b=1;
while(b<=10){
    document.writeln("8 + "+b+" = "+(b+8)+ "<br>");
    b++;
}

document.writeln("<br> Tabla de dividir del 9 <br>");
let c=1;
do{
 
 document.writeln("9 / "+c+" = "+(9/c)+ "<br>");
    c++;


}while(c<=10);


//Apartado 2
let x = 125 >> 3; //tres por que 8 es 2 tres veces y asi con el resto
let y = 40 << 2;
let z = 25 >> 1;
let w = 10 << 4;

console.log("125 / 8 = " + x);
console.log("40 x 4 = " + y);
console.log("25 / 2 = " + z);
console.log("10 x 16 = " + w);

//Para multiplicar se pone el <<
//Para dividir el >>