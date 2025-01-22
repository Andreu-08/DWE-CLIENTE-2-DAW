// Practica Ejercicio 1

// 1. Introducir 5 números. Calcular la suma de todos ellos. Decir cuántos de ellos son mayores
// de 100.

//declaramos las variables para los numero que introducira el usuario en el prompt
let num1 = prompt('Introduce el primero numero');
let num2 = prompt('Introduce el segundo numero');
let num3 = prompt('Introduce el tercer numero');
let num4 = prompt('Introduce el cuarto numero');
let num5 = prompt('Introduce el quinto numero');

//sumamos todos los numeros utilizando parseInt ya que en el prompt se almacenan como string
let suma = parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4) + parseInt(num5);

//mostramos la cantidad sumada en un alert
alert('La suma de todos los numeros es: ' + suma);

//agregamos los numero en un array para luego ver si alguno es mayor que 100
let numeros = [num1, num2, num3, num4, num5];

let contador = 0; //contador para ir sumando los numeros que son mayores que 100

for (let i = 0; i < numeros.length; i++){

    if(numeros[i] > 100){
        contador++; //sumamos 1 al contador cuando es mayor que 100
    }
}

//si hay numero mayores que 100 almacenados en el contador se mostrara el mensaje con la cantidad
if(contador > 0){
    alert('Hay ' + contador + ' mayores que 100');
}else{
    alert('No hay ningún numero mayor que 100')//mensaje si no hay ningún numero mayor que 100
}
