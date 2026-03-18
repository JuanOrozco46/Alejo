const usuarios = [
  { id: 1, nombre: "Juan" },
  { id: 2, nombre: "Ana" },
  { id: 3, nombre: "Luis" }
];

// promesa
function buscarUsuario(id){

  return new Promise(function(resolve, reject){

    setTimeout(function(){

      let usuario = usuarios.find(function(u){
        return u.id == id;
      });

      if(usuario){
        resolve(usuario);
      }else{
        reject("Usuario no encontrado");
      }

    }, 2000);

  });

}


// DOM
let btn = document.getElementById("buscarBtn");
let input = document.getElementById("idInput");
let mensaje = document.getElementById("mensaje");

btn.addEventListener("click", function(){

  let id = input.value;

  mensaje.textContent = "Cargando...";

  buscarUsuario(id)

    .then(function(usuario){
      mensaje.textContent = "Usuario: " + usuario.nombre;
    })

    .catch(function(error){
      mensaje.textContent = error;
    })

    .finally(function(){
      console.log("Fin");
    });

});


