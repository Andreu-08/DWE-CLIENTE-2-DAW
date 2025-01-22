// Practica Ejercicio 3

// 3. Introducir un mes y decir a que estación pertenece:
    // Ejemplo: Dime un mes: enero
    // Estamos en Invierno
    // (Nota: No hace falta ninguna comprobación. Los meses diciembre, enero, febrero
    // serán invierno, marzo, abril y mayo serán primavera, junio, julio y agosto serán verano
    // y septiembre, octubre y noviembre será otoño).


let mes = prompt('Dime un mes');

//declaramos arrays para los meses que hay en cada estacion
let invierno = ['diciembre', 'enero', 'febrero'];
let primavera =['marzo', 'abril', 'mayo'];
let verano = ['junio', 'julio', 'agosto'];
let otoño = ['septiembre', 'octubre', 'noviembre'];


//comprovamos si el mes es invierno recorriendo ese array
for (let i = 0; i < invierno.length; i++){
    if(invierno[i] ===  mes){
        alert('Estamos en invierno');
    }
}

//comprovamos si el mes es primavera recorriendo ese array
for (let i = 0; i < primavera.length; i++){
    if(primavera[i] ===  mes){
        alert('Estamos en primavera');
    }
}

//comprovamos si el mes es verano recorriendo ese array
for (let i = 0; i < verano.length; i++){
    if(verano[i] ===  mes){
        alert('Estamos en verano');
    }
}


//comprovamos si el mes es otoño recorriendo ese array
for (let i = 0; i < otoño.length; i++){
    if(otoño[i] ===  mes){
        alert('Estamos en primavera');
    }
}

