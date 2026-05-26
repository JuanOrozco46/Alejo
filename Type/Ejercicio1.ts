type Tarea = {
    id:number;
    descripcion: string,
    estado:"pendiente" | "en progreso" | "completada"
}
function getEstadoTarea(tareas: Tarea[]){
    return tareas.filter((t)=>{
        t.estado === "pendiente"||"en progreso"
    })
}
