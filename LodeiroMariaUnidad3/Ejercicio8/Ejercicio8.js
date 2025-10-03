/*Haz un programa que pida al usuario cadenas del tipo: 
“nombre:apellidos:teléfono:email:codigopostal” y que te muestre: 
◦ El código postal. 
◦ Los apellidos 
◦ El email. 
◦ Suponiendo un formato de email “direccion@servidor.com” te muestre el servidor asociado (la parte a la derecha del @).
◦ El teléfono.
*/
function ejecuta(){
    let nombre=document.getElementById("nombre").value;
    let apellidos=document.getElementById("apellidos").value;
    let telefono=document.getElementById("telefono").value;
    let email=document.getElementById("email").value;
    let postal=document.getElementById("postal").value;
    let ser=email.substr("@").value;
    document.getElementById("resultado").innerHTML=`Nombre: ${nombre} <br> Apellidos: ${apellidos} <br> Email: ${email} <br> Servidor: ${ser} <br> Telefono: ${telefono} <br> Postal: ${postal} `;
}
