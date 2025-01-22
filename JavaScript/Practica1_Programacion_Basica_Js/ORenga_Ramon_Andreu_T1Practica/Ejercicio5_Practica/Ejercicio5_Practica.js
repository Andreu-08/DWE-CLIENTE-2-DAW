// Practica Ejercicio 5

// 5. Introducir el precio de un artículo. 
// Calcular el IVA y el PRECIO TOTAL (con el iva incluido)
// que debe salir redondeado a dos decimales 

//prompt para introducir el precio del articulo 

let precio = parseFloat(prompt('Indica el precio del articulo para calcular el IVA'));

//calculamos el iva de ese precio (21%)
let iva = precio * 0.21 

//sumamos el iva al precio inicial para calcular el total
let precioTotal = precio + iva;


//mostramos que cantidad de iva se aplicara con dos decimales(toFixed)
alert('El IVA que se aplica a ese precio es de: ' + iva.toFixed(2) + '€');
//mostratmos el precio total como un float con dos decimales 
alert('El precio total aplicando el IVA es de: ' + precioTotal.toFixed(2) + '€');