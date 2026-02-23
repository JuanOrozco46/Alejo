// Datos quemados de usuarios
const users = [
    { id: 1, name: "Laura Gómez", email: "laura@email.com", city: "Medellín" },
    { id: 2, name: "Carlos Ruiz", email: "carlos@email.com", city: "Bogotá" },
    { id: 3, name: "Sofía Martínez", email: "sofia@email.com", city: "Cali" },
    { id: 4, name: "Andrés López", email: "andres@email.com", city: "Barranquilla" },
    { id: 5, name: "Valentina Torres", email: "valentina@email.com", city: "Cartagena" }
];

// Datos quemados de productos
const products = [
    { id: 101, userId: 1, name: "Laptop", price: 3500, status: "Enviado" },
    { id: 102, userId: 1, name: "Mouse Gamer", price: 150, status: "Entregado" },
    { id: 103, userId: 2, name: "Teclado Mecánico", price: 280, status: "En proceso" },
    { id: 104, userId: 3, name: "Monitor 24 pulgadas", price: 900, status: "Entregado" },
    { id: 105, userId: 3, name: "Base Refrigerante", price: 120, status: "Enviado" },
    { id: 106, userId: 4, name: "Audífonos Bluetooth", price: 200, status: "Cancelado" }
];
function buscarUsuario (idBuscado){
    return new Promise((resolve,reject)=>{
        const tiempoEspera = Math.floor(Math.random()*1000)+1000;
        setTimeout(()=>{
            const fallaServidor = Math.random() < 0.2;
            if(fallaServidor){
                reject("Error en el servidor: No údo acceder a la base de datos");
                return;
            }
            const usuarioEncontrado = users.find(usuario => usuario.id === idBuscado);
            if(usuarioEncontrado){
                resolve(usuarioEncontrado);
            } else {
                reject( "No se encontró ninún usuario con ese ID");
            }
        }, tiempoEspera)
    })
}

const inputId = document.getElementById('userIdInput');
const btnBuscar = document.getElementById('searchBtn');
const mensajeCarga = document.getElementById('loadingMessage');
const mensajeError = document.getElementById('errorMessage');
const contenedorUsuario = document.getElementById('userDataContainer');
const contenedorProductos = document.getElementById('userProductsContainer');
const contenedorUltimoProducto = document.getElementById('lastProductContainer');
btnBuscar.addEventListener('click', () => {
    
    const idBuscado = parseInt(inputId.value);

    if (isNaN(idBuscado)) {
        mensajeError.textContent = "Por favor, ingresa un número válido.";
        return; 
    }

    // Limpiamos la pantalla
    mensajeError.textContent = "";
    contenedorUsuario.innerHTML = "";
    contenedorProductos.innerHTML = ""; // Limpiamos también el contenedor de productos
    contenedorUltimoProducto.innerHTML = ""; // Y el del último producto
    
    mensajeCarga.style.display = "block";
    btnBuscar.disabled = true;

    // --- AQUÍ EMPIEZA LA CADENA DE PROMESAS ---
    buscarUsuario(idBuscado)
        .then((usuarioEncontrado) => {
            // 1. Mostramos los datos del usuario (Esto ya lo tenías)
            contenedorUsuario.innerHTML = `
                <div style="border: 2px solid #4CAF50; padding: 15px; margin-top: 15px; border-radius: 8px;">
                    <h3 style="margin-top: 0; color: #4CAF50;">✅ Datos del Usuario</h3>
                    <p><strong>Nombre:</strong> ${usuarioEncontrado.name}</p>
                    <p><strong>Email:</strong> ${usuarioEncontrado.email}</p>
                    <p><strong>Ciudad:</strong> ${usuarioEncontrado.city}</p>
                </div>
            `;
            
            // 2. RETORNAMOS LA SEGUNDA PROMESA usando el ID que acabamos de encontrar
            return buscarProductosUsuario(usuarioEncontrado.id);
        })
        .then((productosEncontrados) => {
            // 3. ESTE .then() SE EJECUTA CUANDO LA SEGUNDA PROMESA TERMINA
            
            // Creamos una variable para armar el diseño de los productos
            let diseñoProductos = `
                <div style="border: 2px solid #2196F3; padding: 15px; margin-top: 15px; border-radius: 8px;">
                    <h3 style="margin-top: 0; color: #2196F3;">📦 Productos del Usuario</h3>
            `;

            // Si el usuario no tiene productos
            if (productosEncontrados.length === 0) {
                diseñoProductos += `<p>Este usuario no tiene pedidos registrados.</p>`;
            } else {
                // Si tiene productos, recorremos la lista con un .forEach() para dibujarlos todos
                productosEncontrados.forEach(producto => {
                    diseñoProductos += `
                        <div style="background-color: #e3f2fd; padding: 10px; margin-bottom: 10px; border-radius: 5px;">
                            <p style="margin: 0;"><strong>Nombre:</strong> ${producto.name}</p>
                            <p style="margin: 0;"><strong>Precio:</strong> $${producto.price}</p>
                            <p style="margin: 0;"><strong>Estado:</strong> ${producto.status}</p>
                        </div>
                    `;
                });
            }

            diseñoProductos += `</div>`; // Cerramos el contenedor principal

            // Mostramos todo el diseño en pantalla
            contenedorProductos.innerHTML = diseñoProductos;
        })
        .catch((error) => {
            // ESTE CATCH ATRAPA LOS ERRORES DE CUALQUIERA DE LAS DOS PROMESAS
            mensajeError.textContent = error;
        })
        .finally(() => {
            mensajeCarga.style.display = "none";
            btnBuscar.disabled = false;
        });
});
function buscarProductosUsuario(idUsuario) {
    return new Promise((resolve, reject) => {
        const tiempoEspera = Math.floor(Math.random() * 1000) + 1000;
        
        setTimeout(() => {
            const fallaServidor = Math.random() < 0.2; 
            
            if (fallaServidor) {
                reject("Error del servidor: No se pudieron cargar los pedidos del usuario.");
                return; 
            }
            const productosDelUsuario = products.filter(producto => producto.userId === idUsuario);
            resolve(productosDelUsuario);
            }, tiempoEspera); 
    });
}