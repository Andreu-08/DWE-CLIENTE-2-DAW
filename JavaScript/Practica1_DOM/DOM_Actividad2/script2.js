// Función para añadir un nuevo elemento al final de la lista
function anadirElemento() {
    const lista = document.getElementById("listaVideojuegos");
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = "Nuevo juego";
    lista.appendChild(nuevoElemento);
  }
  
  // Función para insertar un nuevo elemento al inicio de la lista
  function insertarElemento() {
    const lista = document.getElementById("listaVideojuegos");
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = "Juego insertado";
    lista.insertBefore(nuevoElemento, lista.firstElementChild);
  }
  
  // Función para reemplazar el segundo elemento de la lista
  function reemplazarElemento() {
    const lista = document.getElementById("listaVideojuegos");
    const elementos = lista.getElementsByTagName("li");
    if (elementos.length > 1) {
      elementos[1].textContent = "Juego reemplazado";
    }
  }
  
  // Función para borrar el último elemento de la lista
  function borrarElemento() {
    const lista = document.getElementById("listaVideojuegos");
    if (lista.lastElementChild) {
      lista.removeChild(lista.lastElementChild);
    }
  }
  
  // Función para clonar la lista completa
  function clonarLista() {
    const lista = document.getElementById("listaVideojuegos");
    const clon = lista.cloneNode(true);
    document.body.appendChild(clon);
  }
  
  // Función para crear una sublista dentro de "Sandbox" usando el DOM
  function crearSublistaConDOM() {
    const lista = document.getElementById("listaVideojuegos");
    const primerElemento = lista.firstElementChild;
  
    // Verificamos si ya existe una sublista para evitar duplicados
    if (!primerElemento.querySelector("ul")) {
      const sublista = document.createElement("ul");
      const subElemento = document.createElement("li");
      subElemento.textContent = "Estilo Libre";
      sublista.appendChild(subElemento);
      primerElemento.appendChild(sublista);
    }
  }
  
  // Función para crear una sublista dentro de "Sandbox" usando innerHTML
  function crearSublistaConInnerHTML() {
    const lista = document.getElementById("listaVideojuegos");
    const primerElemento = lista.firstElementChild;
  
    // Verificamos si ya existe una sublista para evitar duplicados
    if (!primerElemento.querySelector("ul")) {
      primerElemento.innerHTML += `
        <ul>
          <li>Estilo Libre</li>
        </ul>
      `;
    }
  }
  