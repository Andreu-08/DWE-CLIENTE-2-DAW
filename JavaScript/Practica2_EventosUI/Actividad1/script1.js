// Función para ocultar el botón "Objeto mágico"
function ocultarBoton() {
    const botonMagico = document.getElementById("botonMagico");
    botonMagico.style.display = "none";
  }
  
  // Función para mostrar un mensaje al hacer clic en el botón "Pulsador"
  function mostrarMensaje() {
    alert("Has pulsado sobre el botón");
  }
  
  // Función para alternar la visibilidad de la lista de películas
  function togglePeliculas() {
    const listaPeliculas = document.getElementById("listaPeliculas");
    listaPeliculas.style.display = (listaPeliculas.style.display === "none") ? "block" : "none";
  }
  
  // Función para alternar la visibilidad de la lista de series
  function toggleSeries() {
    const listaSeries = document.getElementById("listaSeries");
    listaSeries.style.display = (listaSeries.style.display === "none") ? "block" : "none";
  }
  