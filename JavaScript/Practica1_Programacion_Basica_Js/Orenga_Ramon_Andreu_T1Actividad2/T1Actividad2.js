// Operadores básicos

// b) Un archivo “js” que genere 3 mensajes de alerta (se usará la función “alert”) para
// mostrar los siguientes mensajes:

// 1. El primer mensaje debe mostrar la suma de 2 variables numéricas (creadas
// previamente dentro del propio archivo) cuyo valor sea 15 y 26
// respectivamente.

let num1 = 15;
let num2 = 26;
alert(num1 + num2);

// 2. El segundo mensaje debe mostrar la suma de 2 variables una en formato
// cadena y la otra en formato numérico (se reutilizará del punto anterior). El valor
// de ambas variables debe ser el mismo que el del punto anterior.

num1 = "15";//pasamos esta variable a cadena de texto  

alert('Suma de un string y un number: ' + (parseInt(num1) + num2))

// 3. El tercer mensaje debe mostrar el tipo de formato la variable string creada
// previamente.

alert('Los tipos de datos de cada variable son ' + num1 + ': '+ typeof(num1) + ' '
                                                 + num2 + ': '+ typeof(num2) + ' ' 
                                                 + 'y el String y el number concatenados:' +  num1 + num2);
