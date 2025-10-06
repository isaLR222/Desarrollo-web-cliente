/*Crea una página web que tenga 3 botones (<button>), crear, parar y borrar. El botón crear mostrar una ventana de 500*200 y que se mueva automáticamente de 10 px hacia la derecha y hacia abajo cada 100 milisegundos, cuando llegue a la esquina inferior derecha deberá rebotar hacia la esquina superior izquierda. El botón parar detendrá la ventana y el cerrar la eliminará.*/
var ventana;
var timer=setInterval(()=>{
    ventana.moveBy(10,10);
},100);

function Crear(){
     ventana=window.open("","MiVentana","width=500,height=200");
ventana.document.write("Yupiiiiii");

}

function Parar(){
    clearInterval(timer);
}



function Borrar(){
    ventana.close();
}