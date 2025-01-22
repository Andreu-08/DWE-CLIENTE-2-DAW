// Practica Ejercicio 2

// 2. Almacena en un array los números 6,8,3,12,18. Calcular la suma de los números mayores
// de 8.

//declaramos el array con los numeros
let numeros = [6, 8, 3, 12 , 18];

//recorremos el array con un for para calcular la suma 
let suma = 0;//se almacenara la suma en el for
for(let i = 0; i < numeros.length; i++){
    if (numeros[i] > 8){

        suma += numeros[i];//se acumula la suma si el numero es mayor que 8
    }
}

alert('La suma de los numero mayores que 8 es: ' + suma);


