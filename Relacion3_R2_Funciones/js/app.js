/* 1.
Nombre del archivo: T4_EJ1.html
Realiza un script que solicite 5 números al usuario, 
almacenaremos estos números en un array y posteriormente ofreceremos la siguiente información:
Valor mínimo
Valor máximo
Valor medio. */


function main() {

    const number = [];

    for (let i = 0; i < 5; i++) {

        let numero = prompt(`Introduzca un número:`);
        number.push(parseInt(numero));
    }

    const maximo = number.reduce((mayor, menor) => mayor <= menor ? mayor = menor : menor = mayor);
    const minimo = number.reduce((mayor, menor) => mayor <= menor ? menor = mayor : mayor = menor);
    const medio = number.reduce((total, numero) => total += numero) / number.length;

    return `El valor mínimo es: ${minimo} <br> El valor máximo es: ${maximo} <br> El valor medio es: ${medio}`;
}

/* 2.
Nombre del archivo: T4_EJ2.html
Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] 
determinar si un color introducido por el usuario a través de un prompt se encuentra 
dentro del array o no */

function valorEncontrado() {

    const colores = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];
    let color = prompt("Introduzca un color");

    return `El color introducido ${color} : ${colores.includes(color) ? "Si se encuentra en el array" : "No se encuentra en el array"}`
}

/* 3.
Nombre del archivo: T4_EJ3.html
Crear un array vacío, luego generar 20 números al azar (utiliza random del objeto Math )
 y guardarlos en un array, N es introducido por el usuario. */


function generarNumeros() {

    let numerosAleatorios = [];
    const N = parseInt(prompt("Introduzca la cantidad de números"));

    numerosAleatorios = Array.from({ length: N }, () => Math.floor(Math.random() * 100));

    console.log(numerosAleatorios);

    return `Numeros aleatorios generados: ${numerosAleatorios.join(", ")}`;

}

/* 4.
Nombre del archivo: T4_EJ4.html
Existen dos arrays, cada uno con 5 palabras, generar los siguientes array:
Intersección
Unión
Diferencia */

function generarArrays() {

    const array1 = ["azul", "amarillo", "rojo", "verde", "café"];
    const array2 = ["azul", "negro", "rojo", "verde", "Blanco"];

    // union : unir los arrays y eliminar los elementos repetidos
    const array3 = [...array1, ...array2];
    const union = new Set(array3);
    console.log(union);

    // diferencia: guardar los elmentos que están en el array1 que no estan en el array2
    const diferencia = array1.filter(elemento => !array2.includes(elemento));
    console.log(diferencia);

    // interseccion: guardar los elementos del arra1 que estan en el array2
    const interseccion = array1.filter(elemento => array2.includes(elemento));
    console.log(interseccion);

    return `Intersección: ${interseccion} <br> Diferencia: ${diferencia} <br> Unión: ${Array.from(union)} <br>`;
}

/* 5.
Nombre del archivo: T4_EJ5.html
Utilizando el método random del objeto Math
carga con valores aleatorios un array de 20 elementos 
con valores enteros entre el 0 y el 100. 
Ten en cuenta que random devuelve un número flotante entre 0 y 1. 
Una vez cargado muestra los datos del array por pantalla.
Tras ello muestra la información del ejercicio anterior sobre los valores de dicho array, 
es decir:
Valor mínimo
Valor máximo
Valor medio. */

function ejercicio5() {

    const numerosAleatorios = Array.from({ length: 20 }, () => Math.floor(Math.random() * 101));

    const maximo = numerosAleatorios.reduce((mayor, menor) => mayor <= menor ? mayor = menor : menor = mayor);
    const minimo = numerosAleatorios.reduce((mayor, menor) => mayor <= menor ? menor = mayor : mayor = menor);
    const medio = numerosAleatorios.reduce((total, numero) => total += numero) / numerosAleatorios.length;

    return `Array: [ ${numerosAleatorios.join(", ")} ] <br><br> El valor mínimo es: ${minimo} <br> El valor máximo es: ${maximo} <br> El valor medio es: ${medio}`;
}

/* 6.
Nombre del archivo: T4_EJ6.html
Crea una página web que contenga varios párrafos con texto de ejemplo. 
La página contendrá un botón que al pulsarlo solicitará al usuario una palabra 
o cadena de texto e indicará si existe o no dicha palabra dentro del document */

function encontrarPalabra(){

    let palabra = prompt("Introduzca la palabra a buscar en el texto");

    const texto = document.getElementsByTagName('p');
    const arrayParrafos = Array.from(texto);
    const existe = arrayParrafos.some(parrafo => parrafo.textContent.includes(palabra));

    document.getElementById("parrafo").innerText = existe  ? "La palabra existe en el texto":"La palabra no existe en el texto";

}

/* 7.
Nombre del archivo: T4_EJ7.html
Utilizando el método random del objeto Math carga con valores aleatorios un array de 20 elementos
con valores enteros entre el 0 y el 100.
Muestra los valores sin ordenar y ordenados (eliminando duplicados), 
para ello deberás implementar alguno de los algoritmos de ordenación, 
se recomienda el burbuja por su fácil implementación. */

function ejercicio7() {

    const N = 20; 
    // creo un array con 20 numeros aleatorios
    const valoresAleatorios = Array.from({length:N},() => Math.round(Math.random() * 101));  
    // elimino los elementos repetidos
    const eliminarRepetidos= [...new Set(valoresAleatorios)];

    console.log(valoresAleatorios)
    // ordeno el array
    // forma facil
   // const ordenado = eliminarRepetidos.sort((a , b) =>  a - b);
   // burbuja
   for (let i = 0; i < eliminarRepetidos.length - 1; i++) {

        for (let j = 0; j < eliminarRepetidos.length - 1 - i; j++) {

            // compruebo si el valor actual es mayor que el siguiente
            if (eliminarRepetidos[j] > eliminarRepetidos[j + 1]) {
    
                let temp = eliminarRepetidos[j];
                eliminarRepetidos[j] = eliminarRepetidos[j + 1];
                eliminarRepetidos[j + 1] = temp;
            }
        }
    }

    return `Array sin ordenar: ${valoresAleatorios} <br> Array ordenado :  ${eliminarRepetidos}`;
}

/* 8.
Nombre del archivo: T4_EJ8.html
Solicita al usuario el nombre de varias personas y luego muestra los nombres ordenados. 
Los nombres serán introducidos en una sola cadena separado cada nombre por coma. 
Utiliza el método split */

function ejercicio8() {

    let nombres = prompt("Introduzca el nombre de varias personas separados por una coma");

    // separo los nombres de la coma
    let nombresSeparados = nombres.split(",").map(nombre => nombre.trim());

    // ordeno los nombres
    let nombresOrdenados = nombresSeparados.sort();

    return `Los nombres ordenados son: <strong> ${nombresOrdenados.join(", ")} </strong>`;
}


/* Nombre del archivo: T4_EJ9.html
Leer una cadena de texto introducida por el usuario y posteriormente, 
mostrar la siguiente información en una nueva ventana:
•
Número de palabras.
•
Primera palabra.
•
Última palabra.
•
Las palabras colocadas en orden inverso.
•
las palabras ordenadas de la a la z y las palabras ordenadas de la z a la a.
Nota: Se regenerar un array con la función split() */

function ejercicio9(){

    let cadenaDeTexto = prompt("Introduzca una cadena de texto");

    let nuevaVentana = window.open("","Nueva ventana","width=300px,height=300px");

    // numero de palabras
    let numeroDePalabras = cadenaDeTexto.split(" ").length;

    // primera palabra
    let primeraPalbra = cadenaDeTexto.split(" ")[0];
    
    // ultima palabra
    let ultimaPalabra = cadenaDeTexto.split(" ")[cadenaDeTexto.split(" ").length - 1];

    // palabras colocadas en orden inverso
    const palabrasInverso = cadenaDeTexto.split(" ").reverse();

    // palabra ordenadas desde la a la z
    const ordenAhastaZ = cadenaDeTexto.split(" ").sort();
    const ordenZhastaA = cadenaDeTexto.split(" ").sort().reverse();


    nuevaVentana.document.write(
                                `Número de palabras introducidas: ${numeroDePalabras} <br>
                                 Primera palabra introducida: ${primeraPalbra} <br>
                                 Última palabra introducida: ${ultimaPalabra} <br>
                                 Palabras colocadas en orden inverso: ${palabrasInverso} <br>
                                 Palabras ordenadas desde la A a la Z: ${ordenAhastaZ} <br>
                                 Palabras ordenadas desde la Z a la A: ${ordenZhastaA} <br>
    `);
    
}
