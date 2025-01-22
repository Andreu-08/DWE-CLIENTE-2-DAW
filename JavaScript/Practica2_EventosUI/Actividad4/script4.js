document.addEventListener("DOMContentLoaded", () => {
    let elementoArrastrado = null;
    let offsetX = 0;
    let offsetY = 0;
  
    // Inicia el arrastre del elemento
    document.addEventListener("mousedown", (event) => {
      if (event.target.classList.contains("draggable")) {
        elementoArrastrado = event.target;
  
        // Calcula la posición inicial del cursor y el elemento
        const rect = elementoArrastrado.getBoundingClientRect();
        offsetX = event.clientX - rect.left;
        offsetY = event.clientY - rect.top;
  
        // Añade eventos para mover y soltar el elemento
        document.addEventListener("mousemove", moverElemento);
        document.addEventListener("mouseup", detenerArrastre);
      }
    });
  
    // Mueve el elemento arrastrado
    function moverElemento(event) {
      if (!elementoArrastrado) return;
  
      // Calcula la nueva posición del elemento
      let x = event.clientX - offsetX;
      let y = event.clientY - offsetY;
  
      // Limita el movimiento dentro de los límites de la ventana
      x = Math.max(0, Math.min(x, window.innerWidth - elementoArrastrado.offsetWidth));
      y = Math.max(0, Math.min(y, window.innerHeight - elementoArrastrado.offsetHeight));
  
      // Actualiza la posición del elemento
      elementoArrastrado.style.left = `${x}px`;
      elementoArrastrado.style.top = `${y}px`;
    }
  
    // Finaliza el arrastre
    function detenerArrastre() {
      // Quita los eventos de movimiento y soltado
      document.removeEventListener("mousemove", moverElemento);
      document.removeEventListener("mouseup", detenerArrastre);
      elementoArrastrado = null;
    }
  });
  