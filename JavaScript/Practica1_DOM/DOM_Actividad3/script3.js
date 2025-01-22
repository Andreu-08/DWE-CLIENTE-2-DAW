// Función para cambiar el fondo del div a azul
function cambiarColorAzul() {
    const contenedor = document.getElementById("contenedor");
    contenedor.style.backgroundColor = "blue";
    contenedor.style.color = "white"; // Cambiamos el texto a blanco para contraste
  }
  
  // Función para cambiar el fondo del div a verde
  function cambiarColorVerde() {
    const contenedor = document.getElementById("contenedor");
    contenedor.style.backgroundColor = "green";
    contenedor.style.color = "white"; // Cambiamos el texto a blanco para contraste
  }
  
  // Función para restablecer el fondo del div al color inicial (blanco)
  function restablecerColor() {
    const contenedor = document.getElementById("contenedor");
    contenedor.style.backgroundColor = "white";
    contenedor.style.color = "black"; // Restablecemos el color del texto a negro
  }