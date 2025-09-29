let respuesta=prompt("Introduce nombre");
respuesta.toLowerCase;
const nombres=["luisa","maria","carlota","ana","martina","claudia"];
let hay=false;

for(const nombre of nombres){
    if(respuesta==nombre){
        hay=true;
    }
}

if(hay){
    alert("Convocada");
}else alert("NO convocada");