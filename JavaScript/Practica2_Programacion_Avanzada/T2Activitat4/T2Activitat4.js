function redimensionarPantalla() {
    // Detectar el navegador
    const esChrome = navigator.userAgent.toLowerCase().includes("chrome");

    if (esChrome) {
        // Redimensionar pantalla a 500x500 si es Google Chrome
        window.resizeTo(500, 500);
    } else {
        // Mostrar mensaje si no es Chrome
        alert("Operación no permitida con este navegador.");
    }
}

// Ejecutar la función
redimensionarPantalla();
