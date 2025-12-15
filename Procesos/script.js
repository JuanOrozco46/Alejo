function crearTarea() {
    let texto = document.getElementById("inputTarea").value;
    let color = document.getElementById("inputColor").value;
    let contenedor = document.getElementById("contenedor-tarjetas");

    if (texto === "") {
        alert("¡Escribe una tarea primero!");
        return; 
    }
    let tarjetaHTML = `
        <div class="tarjeta ${color}">
            ${texto}
        </div>
    `;
    contenedor.innerHTML += tarjetaHTML;
    document.getElementById("inputTarea").value = "";
}