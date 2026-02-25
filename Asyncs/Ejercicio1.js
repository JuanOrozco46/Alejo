function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = true;
      
      if (exito) {
        resolve([
          { id: 1, nombre: "Juan" },
          { id: 2, nombre: "Nasly" },
          { id: 3, nombre: "Leudo" }
        ]);
      } else {
        reject("Error al cargar los usuarios desde el servidor");
      }
    }, 2000);
  });
}

async function loadUsers() {
  try {
    const usuarios = await getUsers();
    console.log("Usuarios cargados exitosamente:", usuarios);
  } catch (error) {
    console.error(error);
  }
}

loadUsers();