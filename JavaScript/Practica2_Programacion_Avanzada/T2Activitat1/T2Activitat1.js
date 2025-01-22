function calcularPreuTotal() {
    const IVA = 0.21; // Porcentaje de IVA
    let preus = [];
    let entrada;

    // Solicitar al usuario un mínimo de 5 artículos
    do {
        entrada = prompt("Introdueix el preu de l'article (0 o buit per finalitzar):");
        if (entrada !== null && entrada.trim() !== "" && !isNaN(entrada) && parseFloat(entrada) > 0) {
            preus.push(parseFloat(entrada));
        }
    } while ((preus.length < 5 || entrada.trim() !== "0") && entrada !== "");

    // Calcular el preu total
    const suma = preus.reduce((acc, preu) => acc + preu, 0);
    const ivaCalculat = suma * IVA;
    const total = suma + ivaCalculat;

    // Mostrar el resultat
    alert(`Preu sense IVA: ${suma.toFixed(2)}€\nIVA (21%): ${ivaCalculat.toFixed(2)}€\nPreu total: ${total.toFixed(2)}€`);
}

// Executar la funció
calcularPreuTotal();
