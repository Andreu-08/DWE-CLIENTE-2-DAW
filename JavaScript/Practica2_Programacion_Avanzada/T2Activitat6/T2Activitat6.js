function sumInput() {
    let numeros = [];
    let entrada;

    // Pedir valores al usuario hasta que introduzca un valor no numérico o vacío
    while (true) {
        entrada = prompt("Introduce un número, resultado con un valor no numerico (o deja en blanco/Escape para terminar):");

        // Salir si se presiona "Escape", se deja vacío o no es un número
        if (entrada === null || entrada.trim() === "" || isNaN(entrada)) break;

        // Convertir la entrada a número y agregarla al array
        numeros.push(parseFloat(entrada));
    }

    // Calcular la suma de los números en el array
    const suma = numeros.reduce((acumulado, num) => acumulado + num, 0);

    // Retornar la suma
    return suma;
}

// Ejecutar la función y mostrar el resultado
const resultado = sumInput();
alert(`La suma de los números introducidos es: ${resultado}`);
