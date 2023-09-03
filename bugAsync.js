function obtenerUsuario(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      if (id === 1) resolve({ id: 1, nombre: "John Doe" });
    }, 2000);
  });
}

const usuario = await obtenerUsuario(1);
console.log(usuario);