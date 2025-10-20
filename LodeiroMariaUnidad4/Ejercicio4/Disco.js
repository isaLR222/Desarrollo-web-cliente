 class Disco{
    constructor(nombre, autor, año, genero){
        this.nombre=nombre;
        this.autor=autor;
        this.año=año;
        this.genero=genero;
        this.localizacion=0;
        this.prestado=false;
        this.caratula="imagen.png";
    }

    cambiarEst(valor){
        this.localizacion=valor;
    }

    cambiarPrest(valor){
        this.prestado=valor;
    }

    mostrarInf(){
        return this.nombre+" "+this.autor+" "+this.año+" "+this.localizacion+" "+this.prestado+" "+this.caratula;
    }
}

export{
    Disco
}
