document.addEventListener("DOMContentLoaded", () => {
    // Crear el elemento de tooltip en el DOM
    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    document.body.appendChild(tooltip);
  
    // Función para mostrar el tooltip
    function showTooltip(event) {
      const target = event.target;
      const tooltipText = target.getAttribute("data-tooltip");
      if (!tooltipText) return;
  
      // Establecer el texto y mostrar el tooltip
      tooltip.textContent = tooltipText;
      tooltip.style.display = "block";
  
      // Posicionar el tooltip cerca del cursor
      const x = event.pageX + 10;
      const y = event.pageY + 10;
      tooltip.style.left = `${x}px`;
      tooltip.style.top = `${y}px`;
    }
  
    // Función para mover el tooltip mientras el cursor se desplaza
    function moveTooltip(event) {
      tooltip.style.left = `${event.pageX + 10}px`;
      tooltip.style.top = `${event.pageY + 10}px`;
    }
  
    // Función para ocultar el tooltip
    function hideTooltip() {
      tooltip.style.display = "none";
    }
  
    // Eventos para mostrar, mover y ocultar el tooltip
    document.addEventListener("mouseover", (event) => {
      if (event.target.hasAttribute("data-tooltip")) {
        showTooltip(event);
        document.addEventListener("mousemove", moveTooltip);
      }
    });
  
    document.addEventListener("mouseout", (event) => {
      if (event.target.hasAttribute("data-tooltip")) {
        hideTooltip();
        document.removeEventListener("mousemove", moveTooltip);
      }
    });
  });