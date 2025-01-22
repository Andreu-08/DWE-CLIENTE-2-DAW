// Función para mostrar el número total de enlaces en el documento
function mostrarNumeroEnlaces() {
    const enlaces = document.getElementsByTagName("a");
    const numeroEnlaces = enlaces.length;
    document.getElementById("resultado").innerHTML = `Número total de enlaces: ${numeroEnlaces}`;
  }
  
  // Función para mostrar la referencia (href) de cada enlace en el documento
  function mostrarReferenciasEnlaces() {
    const enlaces = document.getElementsByTagName("a");
    let referencias = "Referencias de todos los enlaces:<br>";
  
    for (let enlace of enlaces) {
      referencias += `${enlace.href}<br>`;
    }
  
    document.getElementById("resultado").innerHTML = referencias;
  }
  
  // Función para mostrar las referencias de los enlaces por cada párrafo
  function mostrarReferenciasPorParrafo() {
    let resultadoHTML = "";
  
    // Obtenemos cada párrafo por su id y sus enlaces
    for (let i = 1; i <= 3; i++) {
      const parrafo = document.getElementById(`parrafo${i}`);
      const enlaces = parrafo.getElementsByTagName("a");
  
      resultadoHTML += `Párrafo ${i} - Enlaces:<br>`;
      for (let enlace of enlaces) {
        resultadoHTML += `${enlace.href}<br>`;
      }
      resultadoHTML += "<br>"; // Espacio entre párrafos
    }
  
    document.getElementById("resultado").innerHTML = resultadoHTML;
  }
  