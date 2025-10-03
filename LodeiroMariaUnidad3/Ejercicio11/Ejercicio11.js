/*Obtener la ubicación actual del usuario: Utiliza el método navigator.geolocation() para obtener la ubicación actual del usuario y muestra las coordenadas en la consola.
*/
function Ejecuta(){
    navigator.geolocation.getCurrentPosition(exito);
    
    function exito(posicion){
        var latitud=posicion.coords.latitude;
        var longitud=posicion.coords.longitude;
       document.getElementById("resultado").innerHTML = "Posición: "+posicion.geolocation;
	
    console.log("Latitud: "+latitud+"  Longitud: "+longitud);
}
     }
