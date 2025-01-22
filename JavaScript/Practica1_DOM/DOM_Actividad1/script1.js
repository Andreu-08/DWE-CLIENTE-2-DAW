// funcion para añadir un parrafo
function anadirParrafo() {
    // Creamos un nuevo elemento de párrafo
    const nuevoParrafo = document.createElement("p");
    // Creamos el texto que va dentro del párrafo
    const texto = document.createTextNode("Párrafo añadido.");
    // Agregamos el texto al párrafo
    nuevoParrafo.appendChild(texto);
    // Añadimos el párrafo al final del div con id "divisor"
    document.getElementById("divisor").appendChild(nuevoParrafo);
  }
  //funcion para insertar un parrafo
  function insertarParrafo() {
    const primerParrafo = document.querySelector("#divisor p");
    const nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = "Párrafo insertado.";
    primerParrafo.insertAdjacentElement("afterend", nuevoParrafo);
  }

  //funcion para remplazar un parrafo
  function reemplazarParrafo() {
    const parrafos = document.querySelectorAll("#divisor p");
    if (parrafos.length > 1) {
      parrafos[1].textContent = "Párrafo reemplazado.";
    }
  }

  //funcion para borrar un parrafo
  function borrarParrafo() {
    const parrafos = document.querySelectorAll("#divisor p");
    if (parrafos.length > 1) {
      parrafos[1].remove();
    }
  }
  
// funcion para colonar un parrafo
function clonarDiv() {
    const divOriginal = document.getElementById("divisor");
    const clon = divOriginal.cloneNode(true);
    document.body.appendChild(clon);
  }