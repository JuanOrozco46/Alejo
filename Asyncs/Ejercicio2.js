function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, nombre: "Juan" });
    }, 1500);
  });
}

function getTasksByUser(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Estudiar Java", "Practicar promesas", "Hacer ejercicio"]);
    }, 1000);
  });
}

async function loadUserTasks() {
  const user = await getUser();
  const tasks = await getTasksByUser(user.id);
  console.log(`Usuario: ${user.nombre}`);
  console.log("Tareas:", tasks);
}

loadUserTasks();