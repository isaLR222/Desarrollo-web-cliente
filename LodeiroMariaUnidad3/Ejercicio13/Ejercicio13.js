/*Crea una página web que tenga 3 botones (<button>), crear, parar y borrar. El botón crear mostrar una ventana de 500*200 y que se mueva automáticamente de 10 px hacia la derecha y hacia abajo cada 100 milisegundos, cuando llegue a la esquina inferior derecha deberá rebotar hacia la esquina superior izquierda. El botón parar detendrá la ventana y el cerrar la eliminará.*/
let ventana;
let dx = 10;
let dy = 10;
let timer;

function crear() {
    ventana = window.open("", "MiVentana", "width=500,height=200");
    mover();
}

function mover() {
    if (timer) clearInterval(timer);

    timer = setInterval(() => {
        if (!ventana || ventana.closed) {
            clearInterval(timer);
            return;
        }
        let x = ventana.screenX;
        let y = ventana.screenY;
        ventana.moveBy(dx, dy);
        const maxX = screen.availWidth - ventana.outerWidth;
        const maxY = screen.availHeight - ventana.outerHeight;
        const enBordeX = (x + dx >= maxX) || (x + dx <= 0);
        const enBordeY = (y + dy >= maxY) || (y + dy <= 0);
        if (enBordeX && enBordeY) {
            dx = -dx;
            dy = -dy;
        }
    }, 100);
}

function parar() {
    clearInterval(timer);
}

function borrar() {   
        ventana.close(); 
    clearInterval(timer);
}