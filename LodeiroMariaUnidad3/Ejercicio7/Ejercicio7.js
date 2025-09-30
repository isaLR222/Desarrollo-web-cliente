/*Realizar un programa que, pasados 2 segundos, nos muestre una única vez la fecha actual del sistema. Solucionarlo con los dos métodos mencionados en el encabezado del objeto Window. */
let timer=setTimeout(()=>{
    const fecha=new Date();
    document.getElementById("fecha").innerHTML=fecha;
},2000);
