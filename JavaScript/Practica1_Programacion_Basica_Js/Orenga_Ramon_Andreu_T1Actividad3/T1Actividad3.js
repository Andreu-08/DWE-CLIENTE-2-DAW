// Array de meses del año

// b) Un archivo “js” que contenga:

// 1. Un array con todos los meses del año en formato alfanumérico.
let meses_año = [
    '01 Enero',
    '02 Febrero',
    '03 Marzo',
    '04 Abril',
    '05 Mayo',
    '06 Junio',
    '07 Julio',
    '08 Agosto',
    '09 Septiembre',
    '10 Octubre',
    '11 Noviembre',
    '12 Diciembre'
]
// 2. Un mensaje de alerta por cada uno de los meses impares del año.

    for(let i = 0; i< meses_año.length; i++){
        
        if (i % 2 === 0){//si el numero de la posicion del array tiene resto 0 quiere decir que es impar 

             alert(meses_año[i])//imprime la posicion del array en esa vuelta del for y que es impar
        }
    }
    

    