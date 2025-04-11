document.getElementById("boton-miembros").addEventListener("click", obtenerUsuarios);
document.getElementById("boton-contenido").addEventListener("click", obtenerPublicaciones);
const contenedorMiembros = document.getElementById("listaMiembros");
const contenedorContenido = document.getElementById("listaContenido");

function obtenerUsuarios() {
  fetch("http://localhost:3000/users")
    .then((response) => response.json())
    .then((data) => {
      console.log("get response", data)
      mostrarUsuarios(data);
    })
    .catch((error) => console.error("Error:", error));
}

function obtenerPublicaciones() {
  fetch("http://localhost:3000/post")
    .then((response) => response.json())
    .then((data) => {
      console.log("get response", data)
      mostrarPublicaciones(data);
    })
    .catch((error) => console.error("Error:", error));
}

const mostrarUsuarios = (data) => {
  contenedorMiembros.innerHTML = "";

  data.forEach((usuario) => {
      const tarjetaMiembro = document.createElement("div");
      tarjetaMiembro.innerHTML = `
      <div>
      <img src="${usuario.avatar}" alt="${usuario.name}">
      </div>
        <h3>${usuario.user}</h3>
        <p>${usuario.name}</p>
      `;
      contenedorMiembros.appendChild(tarjetaMiembro);
  });
}

const mostrarPublicaciones = (data) => {
  contenedorContenido.innerHTML = "";

  data.forEach((publicacion) => {
      const tarjetaContenido = document.createElement("div");
      tarjetaContenido.innerHTML = `
      <div>
      <img src="${publicacion.url}" alt="${publicacion.title}">
      </div>
        <h3>${publicacion.title}</h3>
        <p>${publicacion.bio}</p>
      `;
      contenedorContenido.appendChild(tarjetaContenido);
  });
}