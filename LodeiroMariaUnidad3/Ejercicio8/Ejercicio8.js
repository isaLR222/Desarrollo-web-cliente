/*Haz un programa que pida al usuario cadenas del tipo: 
“nombre:apellidos:teléfono:email:codigopostal” y que te muestre: 
◦ El código postal. 
◦ Los apellidos 
◦ El email. 
◦ Suponiendo un formato de email “direccion@servidor.com” te muestre el servidor asociado (la parte a la derecha del @).
◦ El teléfono.
*/
function ejecuta(){
    let respuesta=prompt("Introduce nombre, apellidos,email, tlf,  y codigo postal");
    let sep=respuesta.split(" ");
    document.getElementById("resultado").innerHTML="Nombre: "+sep[0]+"<br>"+"Apellidos: "+sep[1]+"<br>"+"Email: "+sep[2]+"<br>"+"Servidor: "+sep[2].split("@")+"<br>"+"Telefono: "+sep[3]
}
