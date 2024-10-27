/* Diseña una web que cree un Array llamado clase que contenga información de una clase.
Cada elemento del array debe ser una tupla de 4 campos: nombre, edad, nota primer
trimestre, nota segundo trimestre y nota tercer trimestre (todos separados por comas). Por
ejemplo: clase[0] = “Angel Garcia, 20, 6, 7, 10” */


function ejercicio1() {
    var clase = [
        "Angel Garcia, 20, 6, 7, 10", "Ana Garcia, 27, 7, 8, 9",
        "Pedro Garcia, 18, 8, 9, 10", "Maria Garcia, 25, 9, 10, 10"
    ];

    return clase[0] + "<br>" + clase[1] + "<br>" + clase[2] + "<br>" + clase[3];
}

/* Escribe una función que dado un número de estudiante y un trimestre, devuelva su nota.
Sobreescribe esa función de tal modo que si no se indica el trimestre se devuelva la nota
media de los exámenes. */

function ejercicio2() {

    let numeroEstudiante = parseInt(prompt("Introduce el número de estudiante del 0 al 3: "));
    let trimestre = parseInt(prompt("Introduce el trimestre: "));

    /* let numeroEstudiante = 0;
    let trimestre = 2; */
    console.log("que devuelve " + trimestre)
    const clase = ejercicio1();
    let extraerNota = "";

    if (isNaN(trimestre)) {
        console.log("estouy")
        let notaMedia = 0;
        for (let i = 2; i < 5; i++) {

            notaMedia += parseFloat(extraerNota = clase.split("<br>")[numeroEstudiante].split(",")[i]);
        }

        return ` La nota media es: ${notaMedia / 3}`;
    }

    extraerNota = clase.split("<br>")[numeroEstudiante].split(",")[trimestre + 1];

    return `La nota del trimestre es de : ${extraerNota}`
}

/* Escribe una función que devuelva la edad media de los alumnos de la clase. */

function ejercicio3() {

    const clase = ejercicio1();
    let edadMedia = 0;
    for (let i = 0; i < 4; i++) {
        edadMedia += parseFloat(clase.split("<br>")[i].split(",")[1]);
    }
    return `La edad media de la clase es: ${edadMedia / 4}`;
}

/* A veces para elegir un estudiante al que preguntar en clase necesitamos hacerlo al azar.
Escribe una función que aleatoriamente vaya devolviendo el nombre de un estudiante cada
vez. */

function ejercicio4() {
    const clase = ejercicio1();

    let random = Math.floor(Math.random() * 4);
    let nombreEstudiante = clase.split("<br>")[random].split(",")[0];

    return `El estudiante elegido es: ${nombreEstudiante}`;
}

/* Crear una función llamado paresImpares que cree un array de 100 números aleatorios del 1
al 1000. Una vez creado, mostrar el contenido y después organizarlo de forma que estén
juntos los elementos pares y los impares. Después, volver a mostrar el array */

function paresImpares () {

    const arrayNumeros = [];
    let numeroAleatorio = 0;

    for (let i = 0; i < 100; i++) {
       
        arrayNumeros.push( Math.floor(Math.random() * 1000) +1);  
    }

    const juntarParesImprares = [];

    for (let i = 0; i < arrayNumeros.length; i++) {
        
       if(arrayNumeros[i] % 2 === 0) {
        juntarParesImprares.unshift(arrayNumeros[i]);
       }else{
        juntarParesImprares.push(arrayNumeros[i]);
       } 
    }


    return `Array original: <br> ${arrayNumeros.join(", ")} <br><br> Array pares juntos y impares juntos: ${juntarParesImprares.join(", ")}`;
}


/* Utiliza Arrays para resolver el siguiente problema: Una empresa paga a sus vendedores en
base a comisiones. Los vendedores reciben $ 200 por semana, más el 9% de sus ventas
brutas de esa semana. Por ejemplo, un vendedor que gana en total $ 5000 en ventas en una
semana recibe $ 200 más el 9 por ciento de $ 5000, o sea un total de $ 650.
Diseña una web que permita dar de alta a vendedores, introducir sus ventas e indique cual
sería su sueldo final */

function ejercicio6() {
    //TODO

}

/* Escribe las funciones para llevar a cabo las siguientes operaciones para un array de una
dimensión:
a) Establecer los 10 elementos del array a cero.
b) Añadir 1 a cada uno de los elementos del array.
c) Muestra los valores del array separados por espacios */

function ejercicio7() {

    const arrayNumeros = [];
    for (let i = 0; i < 10; i++) {
        arrayNumeros.push(0);
    }

    for (let i = 0; i < arrayNumeros.length; i++) {
        arrayNumeros[i]++;
    }

    return `Los valores del array son: ${arrayNumeros.join(" ")} `

}

/* Haciendo uso de un array unidimensional, escribir un script para simular el lanzamiento de
dos dados. El script debe simular el lanzamiento (aleatorio) de ambos dados. La suma de los
dos valores debe calcularse a continuación (la suma variará pues de 2 a 12, siendo éstos los
valores menos frecuentes así como 7 el más frecuente). Haz una simulación con 36.000
lanzamientos y muestra el número de veces que aparece cada una de las combinaciones. */

function ejercicio8() {
    arrayNumeros = [];

    for (let i = 0; i < 36_000; i++) {
        arrayNumeros.push((Math.floor(Math.random() * 6) + 1) + Math.floor(Math.random() * 6) + 1);
    }

    const frecuencias = {};
    for (let i = 0; i < arrayNumeros.length; i++) {
        if (frecuencias[arrayNumeros[i]]) {
            frecuencias[arrayNumeros[i]]++;
        } else {
            frecuencias[arrayNumeros[i]] = 1;
        }
    }

    return `Las frecuencias son: ${JSON.stringify(frecuencias)}`
}


/* Mejora el ejercicio anterior para además mostrar una tabla bidimensional que muestre las
combinaciones (no sólo la suma) que se han ido dando (ahora sí podemos usar arrays
bidimensionales). */

function ejercicio9() {    
    //TODO
}

/* Una pequeña aerolínea acaba de comprar un programa para su nuevo sistema de reservas.
Diseña la web encargada de asignar asientos en cada vuelo de avión de la aerolínea
(capacidad: 10 plazas). Se debe pedir en primer lugar el tipo de asiento: "First” (asientos 1 al
5) oy "Turista" (resto). Una vez escogido un asiento libre, se debe poder imprimir una
tarjeta de embarque que indique la persona, el número de asiento y clase de éste (en una
nueva ventana). Deben utilizarse arrays para solucionar el problema. */

function ejercicio10() {
    //TODO
}

/* Utiliza una matriz de dos dimensiones para resolver el siguiente problema: Una empresa
tiene cuatro vendedores (1 a 4) que venden cinco productos diferentes (1 a 5). Una vez al
día, cada vendedor pasa en un estadillo con las ventas realizadas por producto. Cada hoja
contiene
a) el número de vendedor,
b) el número de producto, y
c) el valor total de los productos vendidos ese día.
Así, cada vendedor pasa entre cero y cinco hojas de ventas por día. Supón que disponemos
dee la información de todos los estadillos del último mes. Escribir un script que lee toda esta
información de las ventas del mes pasado y resumir el total de ventas por vendedor por
producto. Todos los totales deben estar almacenan en las ventas de matriz de dos
dimensiones. Después de procesar toda la información para el mes pasado, mostrar los
resultados en un formato de tabla XHTML, con cada una de las columnas que representan
un vendedor y cada una de las filas que representan un producto diferente. Además se
mostrará una última fila con las ventas acumuladas por vendedor, y una última columna con
las ventas acumuladas por producto. */

function ejercicio11() {

    // TODO
}