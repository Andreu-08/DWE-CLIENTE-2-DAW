const calculator = {
    a: 0,
    b: 0,

    // Método para leer los valores
    read() {
        this.a = parseFloat(prompt("Introduce el valor de a:"));
        this.b = parseFloat(prompt("Introduce el valor de b:"));
    },

    // Método para sumar
    sum() {
        return this.a + this.b;
    },

    // Método para multiplicar
    mul() {
        return this.a * this.b;
    },

    // Método para restar
    rest() {
        return this.a - this.b;
    },

    // Método para dividir
    divi() {
        if (this.b === 0) {
            alert("Error: División por cero no permitida.");
            return undefined;
        }
        return this.a / this.b;
    },

    // Método para calcular el módulo
    modu() {
        if (this.b === 0) {
            alert("Error: División por cero no permitida.");
            return undefined;
        }
        return this.a % this.b;
    },
};

// Ejecutar la calculadora
function ejecutarCalculadora() {
    calculator.read(); // Leer los valores
    const operacion = prompt(
        'Introduce la operación a realizar: "sum", "mul", "rest", "divi", "modu"'
    ).toLowerCase();

    let resultado;
    switch (operacion) {
        case "sum":
            resultado = calculator.sum();
            break;
        case "mul":
            resultado = calculator.mul();
            break;
        case "rest":
            resultado = calculator.rest();
            break;
        case "divi":
            resultado = calculator.divi();
            break;
        case "modu":
            resultado = calculator.modu();
            break;
        default:
            alert("Error: Operación no válida.");
            return;
    }

    if (resultado !== undefined) {
        alert(`El resultado de la operación "${operacion}" es: ${resultado}`);
    }
}

// Ejecutar la función principal
ejecutarCalculadora();
