type CategoriaModificacion = "nombre" | "correo" | "contraseña";
type RegistroModificacion ={
    categoria: CategoriaModificacion;
}
function generarReporteModificaciones(historial: RegistroModificacion[]){
    const contador ={
        nombre: 0,
        correo: 0,
        contraseña: 0
    };
    for(const registro of historial){
        contador[registro.categoria]++;
    }
    return contador;
}
