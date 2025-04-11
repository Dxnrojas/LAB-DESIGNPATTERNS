document.getElementById("botonRegistrar").addEventListener("click", registrarUsuario);
document.getElementById("botonIngresar").addEventListener("click", iniciarSesion);
document.getElementById("botonCrear").addEventListener("click", crearPublicacion);

const entradaUsuario = document.getElementById("entrada-usuario");
const usuarioIngreso = document.getElementById("usuario-ingreso");
const entradaNombre = document.getElementById("entrada-nombre");
const entradaClave = document.getElementById("entrada-clave");
const claveIngreso = document.getElementById("clave-ingreso");
const imagenContenido = document.getElementById("imagen-contenido");
const tituloContenido = document.getElementById("titulo-contenido");
const descripcionContenido = document.getElementById("descripcion-contenido");

// Code for none and block display
const seccionesPantalla = ["paginaInicio", "seccion-registro", "seccion-ingreso", "seccion-crear"];

function mostrarPantalla(idPantalla) {
  seccionesPantalla.forEach((id) => {
    document.getElementById(id).style.display =
      id === idPantalla ? "block" : "none";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  mostrarPantalla("paginaInicio");

  document
    .getElementById("boton-registro")
    .addEventListener("click", () => mostrarPantalla("seccion-registro"));
  document
    .getElementById("boton-ingreso")
    .addEventListener("click", () => mostrarPantalla("seccion-ingreso"));
  document
    .querySelector(".volverInicio1")
    .addEventListener("click", () => mostrarPantalla("paginaInicio"));
  document
    .querySelector(".volverInicio2")
    .addEventListener("click", () => mostrarPantalla("paginaInicio"));
  document
    .querySelector(".volverInicio3")
    .addEventListener("click", () => mostrarPantalla("paginaInicio"));
});

function registrarUsuario() {
  fetch("http://localhost:3000/user-register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      user: entradaUsuario.value,
      name: entradaNombre.value,
      password: entradaClave.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      alert(data.message);
      mostrarPantalla("paginaInicio");
    })
    .catch((error) => console.error("Error:", error));
}

function iniciarSesion() {
  
  fetch("http://localhost:3000/user-login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      user: usuarioIngreso.value,
      password: claveIngreso.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Respuesta del servidor:", data); // Para depuración

      if (data.success) {
        alert(data.message);
        mostrarPantalla("seccion-crear"); // Luego redirige
      } else {
        alert(data.message); // Si falla el login, muestra error
      }
    })
    .catch((error) => console.error("Error:", error));
}

function crearPublicacion() {
  fetch("http://localhost:3000/create-post", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      url: imagenContenido.value,
      title: tituloContenido.value,
      bio: descripcionContenido.value
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Respuesta del servidor:", data); 

      if (data) {
        alert(data.message);
      } else {
        alert(data.message);
      }
    })
    .catch((error) => console.error("Error:", error));
}