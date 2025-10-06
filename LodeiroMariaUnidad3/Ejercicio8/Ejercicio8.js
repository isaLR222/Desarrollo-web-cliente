/*Haz un programa que pida al usuario cadenas del tipo: 
“nombre:apellidos:teléfono:email:codigopostal” y que te muestre: 
◦ El código postal. 
◦ Los apellidos 
◦ El email. 
◦ Suponiendo un formato de email “direccion@servidor.com” te muestre el servidor asociado (la parte a la derecha del @).
◦ El teléfono.
*/
function ejecuta(){
    let nombre=document.getElementById("nombre");
    let apellidos=document.getElementById("apellidos");
    let telefono=document.getElementById("telefono");
    let email=document.getElementById("email");
    let postal=document.getElementById("postal");
    let ser=email.substr("@");
    document.getElementById("resultado").innerHTML=`Nombre: ${nombre} Apellidos: ${apellidos} Email: ${email} Servidor: ${ser} Telefono: ${telefono} Postal: ${postal} `;
   

}
