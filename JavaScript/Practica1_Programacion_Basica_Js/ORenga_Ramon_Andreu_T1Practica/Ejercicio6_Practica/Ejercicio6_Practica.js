// Practica Ejercicio 6

// 6. Introducir una cadena. Decir la longitud de la cadena (ver Anexo apartado “Largo del string”).
// Pasarla a mayúsculas y a minúsculas.
// Mostrar cada palabra de la cadena por separado primero normal y después al revés).

//Promp para que el usuario introduzca la cadena 
let cadenaTexto = prompt('Introduce una cadena de texto');
document.write('La cadena de texto es: ' + cadenaTexto + '.<br>');

//almacenamos la longitud de la cadena en una variable 
let longitudCadena = cadenaTexto.length;
document.write('<br>La longitud de la cadena de texto es de ' + longitudCadena + ' caracteres.<br>');

//almacenamos la cadena de texto en mayúsculas y la mostramos 
let cadenaUp = cadenaTexto.toUpperCase();
document.write('<br>La cadena de texto en mayúsculas es: '+ cadenaUp +'.<br>');

//almacenamos la cadena de texto en mayúsculas y la mostramos 
let cadenaLow = cadenaTexto.toLowerCase();
document.write('<br>La cadena de texto en minusculas es: '+ cadenaLow +'.<br>');

//creamos la funcion para darle la vuelta a la cadena de texto 
function reverseString(str){
    let arrStr = str.split(" ");//indicamos con espacio que se separe por cada palabra de la cadena 
    return arrStr.reverse().join(" ");
}

//creamos un array de la cadena con split para mostrarla en orden
palabrasCadena = cadenaTexto.split(" ");

document.write('<br>CADENA NORMAL<br>');
//recorremos el array creado con las palabras de la cadena para imprimirlos en diferentes lineas
for(i=0; i<palabrasCadena.length; i++){
    document.write(palabrasCadena[i] + '<br>')
}

//damos la vuelta a la cadena con la funcion reverseString que hemos creado 
let cadenaInvertida = reverseString(cadenaTexto);//devuelve la cadena ordenada al reves

//creamos un array con la cadena invertida para mostrarlas en diferentes lineas
palabrasInvertidas = cadenaInvertida.split(" ");

document.write('<br>CADENA INVERTIDA <br>');
//recorremos el array con la cadena invertida y lo mostramos en diferentes lineas
for(i=0; i < palabrasInvertidas.length; i++){
    document.write(palabrasInvertidas[i] + '<br>')
}


