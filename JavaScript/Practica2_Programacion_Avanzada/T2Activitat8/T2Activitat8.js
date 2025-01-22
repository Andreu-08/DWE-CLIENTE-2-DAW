// Función para reordenar aleatoriamente un array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Intercambia los elementos
    }
    return array;
}

// Función principal para ejecutar el programa
function ejecutarBarajarArray() {
    let numeros = [];
    let entrada;

    // Solicitar números hasta que el usuario introduzca 0
    while (true) {
        entrada = prompt("Introduce un número (0 para terminar):");

        if (entrada === null || isNaN(entrada) || entrada.trim() === "") {
            alert("Error: Introduce un número válido.");
            continue;
        }

        const numero = parseInt(entrada, 10);
        if (numero === 0) break;

        numeros.push(numero);
    }

    if (numeros.length === 0) {
        alert("No se ingresaron números.");
        return;
    }

    // Mostrar el array original
    alert(`Array original: [${numeros.join(", ")}]`);

    // Barajar el array
    const arrayBarajado = shuffle([...numeros]);

    // Mostrar el array barajado
    alert(`Array barajado: [${arrayBarajado.join(", ")}]`);
}

// Ejecutar la función
ejecutarBarajarArray();
