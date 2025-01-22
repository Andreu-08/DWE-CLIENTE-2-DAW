document.addEventListener("DOMContentLoaded", () => {
    const thumb = document.querySelector(".thumb");
    const slider = document.getElementById("slider");
  
    // Variables para controlar el estado de arrastre
    let isDragging = false;
  
    // Inicia el arrastre del pasador
    thumb.addEventListener("mousedown", (event) => {
      isDragging = true;
      document.addEventListener("mousemove", moverPasador);
      document.addEventListener("mouseup", detenerArrastre);
    });
  
    // Mueve el pasador dentro de los límites del slider
    function moverPasador(event) {
      if (!isDragging) return;
  
      // Obtiene la posición del ratón respecto al slider
      const sliderRect = slider.getBoundingClientRect();
      let nuevaPosicion = event.clientX - sliderRect.left;
  
      // Limita el pasador a los bordes del slider
      nuevaPosicion = Math.max(0, Math.min(nuevaPosicion, sliderRect.width - thumb.offsetWidth));
  
      // Actualiza la posición del pasador
      thumb.style.left = `${nuevaPosicion}px`;
    }
  
    // Finaliza el arrastre del pasador
    function detenerArrastre() {
      isDragging = false;
      document.removeEventListener("mousemove", moverPasador);
      document.removeEventListener("mouseup", detenerArrastre);
    }
  });
  