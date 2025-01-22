// Paso 1: Crear el array de objetos que representa los libros
const libros = [
    { title: "El Quijote", year: 1605, isbn: "978-84-376-0494-7", author: "Miguel de Cervantes" },
    { title: "Cien años de soledad", year: 1967, isbn: "978-84-376-0493-0", author: "Gabriel García Márquez" },
    { title: "1984", year: 1949, isbn: "978-84-376-0492-3", author: "George Orwell" },
    { title: "El Hobbit", year: 1937, isbn: "978-84-376-0491-6", author: "J.R.R. Tolkien" }
];

// Paso 2: Función para mostrar el listado de libros con un retraso de 2 segundos
function mostrarLibrosConRetraso() {
    // Creamos una nueva promesa
    return new Promise((resolve) => {
        setTimeout(() => {
            let resultado = "<ul>"; // Iniciamos una lista no ordenada en HTML
            for (let i = 0; i < libros.length; i++) {
                // Agregar cada libro como un elemento de lista
                resultado += `<li>Título: ${libros[i].title}, Año: ${libros[i].year}, ISBN: ${libros[i].isbn}, Autor: ${libros[i].author}</li>`;
            }
            resultado += "</ul>"; // Cerramos la lista no ordenada
            // Resolver la promesa con el resultado
            resolve(resultado);
        }, 2000); // Retraso de 2 segundos
    });
}

// Paso 3: Ejecutar la función y gestionar la promesa para mostrar el resultado en el HTML
mostrarLibrosConRetraso()
    .then((resultado) => {
        // Mostrar el resultado en el elemento con id "resultado"
        document.getElementById("resultado").innerHTML = resultado;
    })
    .catch((error) => {
        // En caso de error, mostrar un mensaje en el HTML
        document.getElementById("resultado").innerHTML = `<p style="color: red;">Error al mostrar los libros: ${error}</p>`;
    });
