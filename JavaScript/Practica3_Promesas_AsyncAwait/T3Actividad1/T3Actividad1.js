/* 1. Es te que crear un calculador de DNI (per calcular la lletra del DNI), la funcionalitat consisteix
 en: Introduir la part numèrica del DNI per a obtindré la lletra corresponen a eixe DNI.
 PD: Haureu d'utilitzar la gestió d’errors (try/catch) per poder gestionar errors dins del codic,
 podeu consultar el PDF del aules associat a “Errores Halding”. Per exemple, en cas que en
 l’entrada sols es puguen valors numèrics i s’introdueix una cadena amb lletres, es deu
 gestionar el error en eixida.*/

 // Función para calcular la letra del DNI
function calcularLetraDNI() {
    // Obtener el valor del input del usuario
    let dniNumber = prompt("Introduce la parte numérica de tu DNI:");

    try {
        // Validar que la entrada sea un número y tenga exactamente 8 dígitos
        if (isNaN(dniNumber) || dniNumber.trim() === "") {
            throw new Error("Debe introducir un número válido.");
        }
        if (dniNumber.length !== 8) {
            throw new Error("El número del DNI debe tener exactamente 8 dígitos.");
        }

        // Convertir a número para el cálculo
        dniNumber = parseInt(dniNumber, 10);

        // Array con las letras del DNI
        const letrasDNI = "TRWAGMYFPDXBNJZSQVHLCKE";

        // Calcular el índice para obtener la letra correspondiente
        const letra = letrasDNI[dniNumber % 23];

        // Mostrar el resultado al usuario con un alert
        alert(`El DNI completo es: ${dniNumber}${letra}`);
    } catch (error) {
        // Capturar y mostrar el error en un alert
        alert("Error: " + error.message);
    }
}

// Llamar a la función para que el usuario introduzca el DNI
calcularLetraDNI();
