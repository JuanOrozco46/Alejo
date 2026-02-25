function login(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "usuario@correo.com" && password === "123456") {
        resolve();
      } else {
        reject("Credenciales incorrectas");
      }
    }, 2000);
  });
}

async function startLogin(email, password) {
  try {
    await login(email, password);
    console.log("Login exitoso");
  } catch (error) {
    console.log(error);
  }
}

startLogin("usuario@correo.com", "123456");