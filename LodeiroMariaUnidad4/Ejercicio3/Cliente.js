export class Cliente{
    constructor(nombre,localidad,cuota){
        this.nombre=nombre;
        this.localidad=localidad;
        this.cuota=cuota;
    }
    mostrarClientes(){
        return this.nombre+';'+this.localidad+';'+this.cuota+'<br>';
    }

    mostrarPorLocalidad(localidad){
        if(Cliente.localidad==localidad){
            return this.nombre+" "+this.cuota+'<br>';
        }
    }

}
