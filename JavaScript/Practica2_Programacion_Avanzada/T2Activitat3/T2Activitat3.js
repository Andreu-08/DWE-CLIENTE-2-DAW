function calcularSumatorioYProductorio() {
    const a = parseInt(prompt("Introduce el número a:"));
    const b = parseInt(prompt("Introduce el número b:"));

    if (a > b) {
        alert("Error: a > b");
        return;
    }

    // Calcular el sumatorio
    let sumatorio = 0;
    for (let i = a; i <= b; i++) {
        sumatorio += i;
    }
    alert(`El sumatorio de ${a} a ${b} es: ${sumatorio}`);

    // Calcular el productorio
    let productorio = 1;
    for (let i = a; i <= b; i++) {
        productorio *= i;
        if (productorio > 100) {
            alert(`El productorio parcial (${productorio}) es mayor que 100.`);
            return;
        }
    }

    alert(`El productorio de ${a} a ${b} es: ${productorio}`);
}

// Ejecutar la función
calcularSumatorioYProductorio();
