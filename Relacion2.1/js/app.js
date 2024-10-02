/* Nombre del archivo: T3_ej1.html
Crea un programa que muestre el número de días que quedan desde hoy
 hasta las vacaciones de Navidad (19 de diciembre). */

function vacacionesNavidad() {

    let fechaActual = new Date();
    let fechaFinal = new Date(2024, 11, 19);
    let diferenciaDias = fechaFinal - fechaActual;
    let resultado = Math.ceil(diferenciaDias / (1000 * 60 * 60 * 24));
    return `Quedan ${resultado} para las vacaciones de navidad`;
}

/* Nombre del archivo: T3_ej2.html
Crea un programa que pida por parámetro tu cumpleaños en este formato YYYY-MM-DD,
y muestre usando la consola de depuración del navegador todos los años en los que
tu cumpleaños cae en domingo, hasta el año 2100. */

function cumpleDomingo(fecha) {

    let cumple = new Date(fecha);
    let year = cumple.getFullYear();
    let contador = 0;
    let fechaFinal = new Date('2100-12-31');

    while (cumple <= fechaFinal) {

        if (cumple.getDay() === 0) { 
            // todos los años en los que tu cumpleaños cae en domingo
            console.log(year); 
            contador += 1;
        }
        // Avanzo un año mas
        year++;
        cumple.setFullYear(year); 
    }

    return contador;
}

/* Nombre del archivo: T3_ej3.html
Crea un programa que muestre la hora actual en los formatos siguientes:
1. 14:35:07 (hora detallada con minutos y segundos)
2. Son las 14h y 35m */

function horaActual() {
    let hora = new Date();
    let primerFormato = "1. " + hora.getHours() + ":" + hora.getMinutes() + ":" + hora.getSeconds() + "</br> 2. " +
        hora.getHours() + "h y " + hora.getMinutes() + "m";


    return primerFormato;
}

/* Realiza un script que pida un nombre y dos apellidos e indique 
el tiempo que se tardó en introducir los datos. 
La salida sería algo así como: En introducir Juan Torres Lago has tardado 25 segundos. */

function tiempo() {

    let horaActual = new Date().getSeconds();

    let nombre = prompt("Introduzca su nombre:");
    let apellido1 = prompt("Introduzca su primer apellido:");
    let apellido2 = prompt("Introduzca su segundo apellido:");

    let horaDespues = new Date().getSeconds();
    console.log(horaDespues)

    return `En introducir ${nombre + " " + apellido1 + " " + apellido2} has tardado ${horaDespues - horaActual} segundos`;

}


/* Nombre del archivo: T3_ej5.html
Crea un programa que pida al usuario que elija una de las siguientes opciones (del 1 al 4)
Si el usuario introduce 1, se le deberá pedir una base y un exponente y se deberá utilizar el método
correspondiente para mostrar el resultado en pantalla en el formato:
La potencia de X elevado a Y es: ___
 Si el usuario introduce 2, se le pedirá un número (no negativo) y se mostrará el resultado en
pantalla: La raíz de X es: ___ */


function menu() {

    while (true) {

        let opcion = parseInt(prompt("Introduce una opcion:\n 1. Potencia\n 2. Raiz\n 3. Redondeo\n 4. Trigonometria\n 5. Salir "));
        let resultado = 0;

        if (opcion === 1) {
            let base = parseInt(prompt("Introduzca la base:"));
            let exponente = parseInt(prompt("Introduzca el exponente:"));

            //La potencia de X elevado a Y es:
            alert(`La potencia de ${base} elevado a ${exponente} es: ${resultado = Math.pow(base, exponente)}`);

        }

        if (opcion === 2) {

            let numero = parseInt(prompt("Introduzca un número positivo:"));
            resultado = Math.sqrt(numero);
            //La raíz de X es:
            alert(`La raiz de ${numero} es: ${resultado.toFixed(2)}`);
        }

        if (opcion === 3) {
            let numero = parseFloat(prompt("Introduzca un número decimal:"));
            //al alza y a la baja
            let alza = Math.ceil(numero);
            let baja = Math.floor(numero);

            alert(`El resultado a la alza es: ${alza}\nEl resultado a la baja es: ${baja}`);
        }

        if (opcion === 4) {

            let angulo = parseInt(prompt("introduzca un ángulo (entre 0º y 360º):"));

            let seno = Math.sin(angulo);
            let coseno = Math.cos(angulo);
            let tangente = Math.tanh(angulo);

            //valores trigonométricos del seno, coseno y la tangente.
            alert(`seno: ${seno} \ncoseno: ${coseno} \ntangente: ${tangente}`);
        }

        if (opcion < 0 || opcion > 6) {
            alert("opción no válida");
        }

        if (opcion === 5) {

            return "Gracias por su visita";
        }
    }
}

/* Nombre del archivo: T3_ej6.html
Crea un programa que pida al usuario su nombre y apellidos y muestre, a través de la consola de
depuración del navegador, la siguiente información:
1. El tamaño del nombre más los apellidos
2. La cadena en minúsculas y en mayúsculas.
3. Que divida el nombre y los apellidos y los muestre en 3 líneas, de la siguiente manera:
Nombre: xxxxxx
Apellido 1: xxxxxx
Apellido 2: xxxxxx */

function nombreApellidos() {

    let nombreCompleto = prompt("Introduzca el nombre y los apellidos");
    let quitarEspacios = nombreCompleto.trim();
    console.log("1. El tamaño del nombre más los apellidos: " + quitarEspacios.length);
    console.log("2. La cadena en minúsculas y en mayúsculas:\n" + nombreCompleto.toLowerCase() + "\n" + nombreCompleto.toUpperCase());
    let separador = nombreCompleto.split(" ");

    console.log("Nombre: " + separador[0] + "\nApellido 1: " + separador[1] + "\nApellido 2: " + separador[2]);

    return "Gracias por utilizar este programa"
}


/* Nombre del archivo: T3_ej7.html
Escribe un programa que pida tres números y escriba en la pantalla cuál es el mayor. */

function numeroMayor() {

    let numero1 = parseInt(prompt("Introduzca primer número:"));
    let numero2 = parseInt(prompt("Introduzca segundo número:"));
    let numero3 = parseInt(prompt("Introduzca tercer número:"));

    let resultado = 0;

    if (numero1 > numero2) {
        resultado = numero1;
    } else {
        resultado = numero2;
    }

    if (resultado < numero3) {
        resultado = numero3;
    }

    return `El número mayor es ${resultado}`;
}

/* Nombre del archivo: T3_ej8.html
Escribe un programa que pida introducir una frase y escriba cuantas veces aparece la letra a */

function vocalRepetida() {

    let frase = prompt("Introduzca una frase:");
    let vocal = "a";
    let contador = 0;

    for (let i = 0; i < frase.length; i++) {

        if (frase[i] === vocal || frase[i] === vocal.toUpperCase()) {
            contador++;
        }
    }

    return `La letra a aparece ${contador} veces`;
}

/* Nombre del archivo: T3_ej9.html
Escribe un programa que pida una frase y escriba cuántas de las letras que tiene son vocales. */

function contadorVocales() {
    let frase = prompt("introduzca una frase:").toLocaleLowerCase();
    let vocales = "aeiou";
    let contador = 0;
    let letras = "";

    for (let i = 0; i < frase.length; i++) {

        for (let j = 0; j < vocales.length; j++) {

            if (frase[i] === vocales[j]) {
                contador++;
                letras += frase[i] + " ";
            }
        }

    }

    return `La frase tiene ${contador} letras que tiene son vocales y la vocales son: ${letras} `;

}

/* Nombre del archivo: T3_ej10.html
Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales. */

function vocalesRepetidas() {

    // llamo al metodo del ejercicio 9
    let frase = prompt("introduzca una frase:").toLocaleLowerCase();

    let contadorA= 0;
    let contadorE= 0;
    let contadorI= 0;
    let contadorO= 0;
    let contadorU= 0;

    let resultado = "";

    for (let i = 0; i < frase.length; i++) {

        if(frase[i]==="a"){
            contadorA++;
        }
        if(frase[i]==="e"){
            contadorE++;
        }
        if(frase[i]==="i"){
            contadorI++;
        }
        if(frase[i]==="o"){
            contadorO++;
        }
        if(frase[i]==="u"){
            contadorU++;
        }

    }
          
    return `a = ${contadorA} </br>  e = ${contadorE} </br> i = ${contadorI} </br> o = ${contadorO} </br> u = ${contadorU}`
}

/* Nombre del archivo: T3_ej11.html
Realiza un programa que pida una cadena de texto y la devuelva al revés. Es decir, si la frase es “hola que
tal” deberá mostrar “lat euq aloh”. */

function nombreDelReves() {

    let cadena = prompt("Introduzca una cadena de texto:");
    let resultado = " ";
    for (let i = cadena.length - 1; i >= 0; i--) {

        resultado += cadena[i];

    }

    return `La cadena del revés es: ${resultado}`;
}
