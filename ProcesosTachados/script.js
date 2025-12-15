function crearTarea(){
    let input = document.getElementById("inputTarea");
    let valor = input.value;
    if (valor === ""){
        alert("Escriba una tarea");
        return;
    }
    let nuevatarjeta = document.createElement("div");
    nuevatarjeta.textContent = valor;
    nuevatarjeta.classList.add("tarea-card");
    nuevatarjeta.addEventListener("click",function(){
        nuevatarjeta-this.classList.toggle("tachado");
    })
    let contenedor =document.getElementById("contenedor-tarjetas");
    contenedor.appendChild(nuevatarjeta);
    input.value = "";
}