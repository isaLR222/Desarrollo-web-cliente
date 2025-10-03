/*Controlar el tiempo de vida de una ventana emergente: Crea una ventana emergente y permite al usuario cerrarla, si el usuario no la cierra se ha de cerrar a los 3 segundos de manera automática.*/
var ventana=window.open("","MiVentana","width=500,height=200");
ventana.document.write("Me voy a cerrar");

let timer=setTimeout(()=>{
            ventana.close();
},3000);
