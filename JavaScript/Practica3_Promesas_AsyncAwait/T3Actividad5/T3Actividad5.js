function go() {
    // Llamar a la función showCircle con las coordenadas y el radio inicial
    showCircle(150, 150, 100).then(div => {
        div.classList.add('message-ball'); // Añadir la clase para el estilo del mensaje
        div.append("Hola, mundo!"); // Mostrar el mensaje dentro del círculo
    });
}

function showCircle(cx, cy, radius) {
    // Crear un nuevo elemento div para el círculo
    let div = document.createElement('div');
    div.className = 'circle'; // Aplicar la clase 'circle' para el estilo del círculo
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    document.body.append(div);

    // Retornar una promesa para manejar la animación
    return new Promise(resolve => {
        // Hacer que el círculo crezca
        setTimeout(() => {
            div.style.width = radius * 2 + 'px';
            div.style.height = radius * 2 + 'px';

            // Escuchar el evento 'transitionend' para saber cuándo termina la animación
            div.addEventListener('transitionend', function handler() {
                div.removeEventListener('transitionend', handler);
                resolve(div); // Resolver la promesa pasando el div
            });
        }, 0);
    });
}
