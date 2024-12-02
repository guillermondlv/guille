// Selección de elementos del DOM
const btnMenuOpen = document.getElementById("btnMenuOpen");
const btnMenuClose = document.getElementById("btnMenuClose");
const menuResponsive = document.getElementById("menuBar");
const enlaces = document.getElementById("enlaces");

// Eventos para abrir y cerrar el menú responsivo
btnMenuOpen.addEventListener("click", () => {
    menuResponsive.classList.add("active");
    btnMenuOpen.style.display = "none"; // Ocultar botón de abrir
    btnMenuClose.style.display = "block"; // Mostrar botón de cerrar
});

btnMenuClose.addEventListener("click", () => {
    menuResponsive.classList.remove("active");
    btnMenuOpen.style.display = "block"; // Mostrar botón de abrir
    btnMenuClose.style.display = "none"; // Ocultar botón de cerrar
});

// Evento para cerrar el menú al hacer clic en un enlace
enlaces.addEventListener("click", () => {
    menuResponsive.style.transition = "transform 0.5s";
    menuResponsive.classList.remove("active");
    btnMenuOpen.style.display = "block"; // Mostrar botón de abrir
    btnMenuClose.style.display = "none"; // Ocultar botón de cerrar
});

// Slider de Productos
const contenedor = document.querySelector('.slider');
const btnIzquierdo = document.getElementById("btn-izquierda");
const btnDerecho = document.getElementById("btn-derecha");

// Evento para el botón derecho
btnDerecho.addEventListener("click", () => {
    contenedor.scrollLeft += contenedor.offsetWidth;
});

// Evento para el botón izquierdo
btnIzquierdo.addEventListener("click", () => {
    contenedor.scrollLeft -= contenedor.offsetWidth;
});

// Validación del Formulario
const formulario = document.getElementById("formulario");

function validar(e) {
    const inputNombre = document.getElementById("nombre");
    const inputEmail = document.getElementById("email");
    const inputComments = document.getElementById("comentarios");

    // Verificar si alguno de los campos está vacío
    if (inputNombre.value.trim() === "" || inputEmail.value.trim() === "" || inputComments.value.trim() === "") {
        e.preventDefault();
        alert("Te falta al menos un campo");
    } else {
        e.preventDefault();
        alert("Datos enviados");

        // Limpiar los campos del formulario
        inputNombre.value = "";
        inputEmail.value = "";
        inputComments.value = "";
    }
}

formulario.addEventListener("submit", validar);