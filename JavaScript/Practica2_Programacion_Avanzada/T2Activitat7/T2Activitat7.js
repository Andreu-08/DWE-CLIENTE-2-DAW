function Calculator() {
    this.methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
    };

    // Método para calcular
    this.calculate = function (str) {
        const [num1, operator, num2] = str.split(" ");

        const a = parseFloat(num1);
        const b = parseFloat(num2);

        if (isNaN(a) || isNaN(b)) {
            alert("Error: Los números no son válidos.");
            return;
        }

        const func = this.methods[operator];

        if (!func) {
            alert(`Error: Operador no válido "${operator}".`);
            return;
        }

        return func(a, b);
    };

    // Método para agregar operaciones
    this.addMethod = function (name, func) {
        this.methods[name] = func;
    };
}

// Crear y usar la calculadora
function ejecutarCalculadoraExtensible() {
    const calc = new Calculator();

    // Solicitar operación
    const operacion = prompt(
        'Introduce la operación en formato "NUMERO operador NUMERO" (e.g., "3 + 5"):'
    );
    const resultado = calc.calculate(operacion);

    if (resultado !== undefined) {
        alert(`El resultado de la operación "${operacion}" es: ${resultado}`);
    }

    // Preguntar si desea agregar más operaciones
    const agregar = confirm("¿Quieres agregar una nueva operación a la calculadora?");
    if (agregar) {
        const nuevoOperador = prompt("Introduce el símbolo del nuevo operador (e.g., '*'):");
        const nuevoCodigo = prompt(
            "Introduce el código de la función en formato (a, b) => {...}:\nPor ejemplo: (a, b) => a * b"
        );

        try {
            // Crear y agregar la nueva operación
            const nuevaFuncion = eval(nuevoCodigo);
            calc.addMethod(nuevoOperador, nuevaFuncion);
            alert(`El operador "${nuevoOperador}" se ha agregado correctamente.`);

            // Probar la nueva operación
            const nuevaOperacion = prompt(
                `Introduce una operación usando el nuevo operador "${nuevoOperador}":`
            );
            const nuevoResultado = calc.calculate(nuevaOperacion);

            if (nuevoResultado !== undefined) {
                alert(
                    `El resultado de la operación "${nuevaOperacion}" es: ${nuevoResultado}`
                );
            }
        } catch (error) {
            alert("Error: No se pudo agregar la nueva operación. Verifica el código.");
        }
    }
}

// Ejecutar la calculadora extensible
ejecutarCalculadoraExtensible();
