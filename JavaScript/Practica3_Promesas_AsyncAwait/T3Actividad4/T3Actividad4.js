// Paso 1: Crear el array de objetos que representa los libros
const libros = [
    { title: "El Quijote", year: 1605, isbn: "978-84-376-0494-7", author: "Miguel de Cervantes" },
    { title: "Cien años de soledad", year: 1967, isbn: "978-84-376-0493-0", author: "Gabriel García Márquez" },
    { title: "1984", year: 1949, isbn: "978-84-376-0492-3", author: "George Orwell" },
    { title: "El Hobbit", year: 1937, isbn: "978-84-376-0491-6", author: "J.R.R. Tolkien" }
];

// Paso 2: Función que simula un retraso con una promesa
function esperar(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

// Paso 3: Función async para mostrar el listado de libros con retraso
async function mostrarLibrosConRetraso() {
    try {
        // Esperar 2 segundos
        await esperar(2000);

        // Construir el resultado en formato HTML
        let resultado = "<ul>";
        for (let i = 0; i < libros.length; i++) {
            resultado += `<li>Título: ${libros[i].title}, Año: ${libros[i].year}, ISBN: ${libros[i].isbn}, Autor: ${libros[i].author}</li>`;
        }
        resultado += "</ul>";

        // Mostrar el resultado en el elemento con id "resultado"
        document.getElementById("resultado").innerHTML = resultado;
    } catch (error) {
        // En caso de error, mostrar un mensaje en el HTML
        document.getElementById("resultado").innerHTML = `<p style="color: red;">Error al mostrar los libros: ${error}</p>`;
    }
}

// Paso 4: Llamar a la función para ejecutar la operación
mostrarLibrosConRetraso();
