function determinarEstacion() {
    const mes = prompt("Dime un mes:").toLowerCase();

    let estacion;

    switch (mes) {
        case "diciembre":
        case "enero":
        case "febrero":
            estacion = "Invierno";
            break;
        case "marzo":
        case "abril":
        case "mayo":
            estacion = "Primavera";
            break;
        case "junio":
        case "julio":
        case "agosto":
            estacion = "Verano";
            break;
        case "septiembre":
        case "octubre":
        case "noviembre":
            estacion = "Otoño";
            break;
        default:
            estacion = "Mes no válido";
            break;
    }

    alert(`Estamos en ${estacion}`);
}

// Ejecutar la función
determinarEstacion();
