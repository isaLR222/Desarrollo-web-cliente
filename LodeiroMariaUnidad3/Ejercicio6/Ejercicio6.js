/*Crea un programa que pida al usuario su nombre y apellidos con sus espacios (solo 1 nombre y dos apellidos) (se pide todo en el mismo prompt o inputBox) y que muestre:
1.El tamaño del nombre más los apellidos (sin contar espacios).

2.La cadena en minúsculas y en mayúsculas.

3.Que divida el nombre y los apellidos y los muestre en 3 líneas, donde ponga 
Nombre: 
Apellido 1: 
Apellido 2:

4.Una propuesta de nombre de usuario, compuesto por la inicial del nombre, el primer apellido completo y la inicial del segundo apellido.  
Ej. Para Marcos Prado Fernández sería mpradof

5.Una propuesta de nombre de usuario compuesto por las tres primeras letras del nombre y de los dos apellidos: ej. MarPraFer
*/
function ejecuta(){
    let nombre=document.getElementById("nombre").value;
    let nombreSinEs=nombre.replace(/\s/g,"");
    document.getElementById("tamaño").innerHTML=`Tamaño del nombre ${nombreSinEs.length}`;
    document.getElementById("mM").innerHTML=`Mayúsculas: ${nombre.toLowerCase()} <br> Minúsculas: ${nombre.toUpperCase()}`;
    


}