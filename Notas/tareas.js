document.getElementById('btn-agregar').onclick = function() {
    var titulo = document.getElementById('titulo-nota').value;
    var texto = document.getElementById('texto-nota').value;
    if (titulo == "" && texto == "") {
        return;
    }
    var nuevaNota = document.createElement('div');
    nuevaNota.className = 'tarjeta-nota';
    nuevaNota.innerHTML = `
        <div class="titulo-nota">${titulo}</div>
        <div class="cuerpo-nota">${texto}</div>
        <div class="acciones-nota">
            <button class="btn-accion btn-estrella"><i class="far fa-star"></i></button>
            <button class="btn-accion btn-eliminar"><i class="fas fa-trash-alt"></i></button>
        </div>
    `;
    nuevaNota.querySelector('.btn-eliminar').onclick = function() {
        nuevaNota.remove();
    }
    nuevaNota.querySelector('.btn-estrella').onclick = function() {
        nuevaNota.classList.toggle('importante');
        var icono = this.querySelector('i');
        if (nuevaNota.classList.contains('importante')) {
            icono.className = 'fas fa-star';
        } else {
            icono.className = 'far fa-star';
        }
    }
    document.getElementById('contenedor-notas').appendChild(nuevaNota);
    document.getElementById('titulo-nota').value = "";
    document.getElementById('texto-nota').value = "";
}