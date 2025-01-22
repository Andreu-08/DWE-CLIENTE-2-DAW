// Función para simular una operación asíncrona con promesas
function obtenerPrecioSeleccionado(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const opciones = document.getElementsByName(name);
            let precioTotal = 0;
            for (let i = 0; i < opciones.length; i++) {
                if (opciones[i].checked) {
                    precioTotal += parseInt(opciones[i].value, 10);
                }
            }
            resolve(precioTotal);
        }, 100); // Simulamos un retardo de 100ms
    });
}

// Función para calcular el presupuesto total
async function calcularPresupuesto() {
    try {
        // Obtener los precios de cada categoría
        const procesador = await obtenerPrecioSeleccionado("procesador");
        const caja = await obtenerPrecioSeleccionado("caja");
        const refrigeracion = await obtenerPrecioSeleccionado("refrigeracion");
        const monitor = await obtenerPrecioSeleccionado("monitor");
        const grafica = await obtenerPrecioSeleccionado("grafica");

        // Calcular el total sumando todas las categorías
        const total = procesador + caja + refrigeracion + monitor + grafica;

        // Actualizar la tabla con los resultados
        actualizarTabla(procesador, caja, refrigeracion, monitor, grafica, total);
    } catch (error) {
        console.error("Error al calcular el presupuesto:", error);
    }
}

// Función para actualizar la tabla con los resultados
function actualizarTabla(procesador, caja, refrigeracion, monitor, grafica, total) {
    const tablaHTML = `
        <table style="border: 1px solid black; border-collapse: collapse;">
            <tr>
                <th style="border: 1px solid black; padding: 5px;">Procesador</th>
                <th style="border: 1px solid black; padding: 5px;">Caja</th>
                <th style="border: 1px solid black; padding: 5px;">Refrigeración</th>
                <th style="border: 1px solid black; padding: 5px;">Monitor</th>
                <th style="border: 1px solid black; padding: 5px;">Gráfica</th>
            </tr>
            <tr>
                <td style="border: 1px solid black; padding: 5px; text-align: center;">${procesador}€</td>
                <td style="border: 1px solid black; padding: 5px; text-align: center;">${caja}€</td>
                <td style="border: 1px solid black; padding: 5px; text-align: center;">${refrigeracion}€</td>
                <td style="border: 1px solid black; padding: 5px; text-align: center;">${monitor}€</td>
                <td style="border: 1px solid black; padding: 5px; text-align: center;">${grafica}€</td>
            </tr>
            <tr>
                <td colspan="4" style="border: 1px solid black; padding: 5px; text-align: left;"><strong>Total</strong></td>
                <td style="border: 1px solid black; padding: 5px; text-align: center;">${total}€</td>
            </tr>
        </table>
    `;
    document.getElementById("resultado").innerHTML = tablaHTML;
}

