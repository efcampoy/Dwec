/* 1.
Crea las siguientes funciones y llámalas desde una página XHTML para mostrar su funcionamiento:
a)
invierteCadena(cad_arg): devuelve invertida una cadena dada por el usuario
 */

function invierteCadena(cad_arg = "") {
    let invertir = cad_arg;

    let resultado = " ";
    for (let i = invertir.length - 1; i >= 0; i--) {
        resultado += invertir[i];
    }

    return `La cadena ${invertir} invertida es: ${resultado}`;
}


/* b)
inviertePalabras(cad_arg): devuelve invertidas las palabras contenidas en la
cadena. */


function inviertePalabras(cad_arg) {

    const palabra = invierteCadena(cad_arg).split(":");
    let ordenInvertido = "";

    for (let i = palabra.length - 1; i < palabra.length; i++) {

        ordenInvertido += palabra[i];
    }

    return `La frase ${cad_arg} invertida es: ${ordenInvertido}`;

}

/* c)
encuentraPalabraMasLarga(cad_arg): para una cadena de caracteres
 dada devuelve la longitud de la palabra más larga
ç en ella contenida */

function encuentraPalabraMasLarga(cad_arg) {

    const palabra = cad_arg.split(" ");
    let guardarPalabraMasLarga = palabra[0];

    for (let i = 0; i < palabra.length; i++) {

        if (palabra[i].length > guardarPalabraMasLarga.length) {

            guardarPalabraMasLarga = palabraMasLarga[i];

        }

    }

    return `La palabra más larga encontrada es: ${guardarPalabraMasLarga}`;
}

/* d) fltraPalabrasMasLargas(cad_arg, i): para una cadena de caracteres y un
valor numérico (i), devuelva el número de palabras cuya longitud es mayor a i. */


function fltraPalabrasMasLargas(cad_arg, i) {

    const palabra = cad_arg.split(" ");
    let palabraMayores = "";

    for (let j = 0; j < palabra.length; j++) {

        if (palabra[j].length > i) {

            palabraMayores += palabra[j] + " ";

        } else {
            palabraMayores = "No se encontraron palabras mayores a I";
        }

    }

    return `Las palabras cuya longitud son  más largas que i son: ${palabraMayores}`;
}

/* e) cadenaBienFormada(cad_arg): formatea correctamente la cadena pasada,
de tal modo que sólo aparece en mayúscula la primera letra y el resto en minúscula. */

function cadenaBienFormada(cad_arg) {

    let formatoCadena = "";

    for (let i = 0; i < cad_arg.length; i++) {

        if (i === 0) {

            formatoCadena += cad_arg.charAt(i).toUpperCase();
        } else {

            formatoCadena += cad_arg.charAt(i).toLowerCase();
        }

    }

    return `Las cadenas bien formadas son: ${formatoCadena}`;
}

/* 2. Definir una función que muestre información sobre una cadena de texto que se le
pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa
cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de
ambas. */

function informacion(cadena = "") {

    let informacion = "";

    if (cadena === cadena.toUpperCase()) {
        informacion = "La cadena está formada sólo por mayúsculas";
    }
    else if (cadena === cadena.toLowerCase()) {
        informacion = "La cadena está formada sólo por minúsculas";
    } else {
        informacion = "La cadena es una mezcla de ambas";
    }

    return informacion;
}

/* 3. Realizar un función que permita localizar todas las apariciones de una subcadena
dentro de otra. */

function localizarSubcadena() {

    let cadena = "en un lugar en la mancha";
    let subCadena = "en";
    let posicion = 0;
    let contador = 0;

    while (posicion !== -1) {

        posicion = cadena.indexOf(subCadena, posicion);
        if (posicion !== -1) {
            contador++;
            posicion = posicion + subCadena.length;
        }
    }
    return `La subcadena <strong> ${subCadena} </strong> , aparece en la cadena <strong> ${cadena} </strong> : <strong> ${contador} veces </strong>`;
}

/* 4. Crea una función que tomando una cadena de texto como entrada coloque todas sus
consonantes al principio y todas sus vocales al final de la misma, eliminando los blancos. */

function consonantesAlPrincipio(cadena) {

    let consonantes = '';
    let vocales = '';
    let vocalesLista = 'aeiouAEIOU';

    for (let i = 0; i < cadena.length; i++) {
        let char = cadena[i];
        if (char !== ' ') {
            if (vocalesLista.indexOf(char) !== -1) {
                vocales += char;
            } else {
                consonantes += char;
            }
        }
    }

    return consonantes + vocales;
}


/* 5. Desarrolla una función que elimine los caracteres repetidos de una cadena de
texto, incluidos los blancos. */

function eliminarCaracteresRepetidos() {

    let cadenaDeTexto = "eee sss tttt aaaa rrr ee pp ee tii dd oo";
    let nuevaCadena = '';

    for (let i = 0; i < cadenaDeTexto.length; i++) {

        if (!nuevaCadena.includes(cadenaDeTexto[i])) {

            nuevaCadena += cadenaDeTexto[i];
        }

    }

    return `La cadena ${cadenaDeTexto} sin los repetidos es: ${nuevaCadena}`;
}

/* 6. Implementa una función que tomando dos cadenas como entrada nos diga si la
segunda es una subcadena de la primera y cuál es la primera posición a partir de la que
esto ocurre. */

function subcadenaDeLaPrimera(cadena1, cadena2) {

    let resultado = "";
    let primeraAparicion = 0;

    if (cadena1.indexOf(cadena2) !== -1) {
        primeraAparicion = cadena1.indexOf(cadena2, 0);
        resultado = `La cadena: " ${cadena2} " es subcadena de la primera y su primera aparicion 
                     aparece en la posición: ${primeraAparicion}`;
    } else {
        resultado = `La cadena ${cadena2} no es una subcadena de la cadena: ${cadena1}`;
    }

    return `${resultado}`;
}

/* 7. Desarrolla una función que tomando como entrada una cadena de texto nos
devuelva si es o no un palíndromo. */

function palindromo(cadena1) {

    let cadena2 = "";

    for (let i = cadena1.length - 1; i >= 0; i--) {

        cadena2 += "" + cadena1.charAt(i);
    }

    if (cadena1 === cadena2) {
        resultado = `La primera cadena: ${cadena1} SI es un palindromo de: ${cadena2}`;
    } else {
        resultado = `La primera cadena: ${cadena1} NO es un palindromo de: ${cadena2}`;
    }

    return resultado;
}

/* 8. Implementa una función que tomando como entrada una cadena de texto sea capaz
de contabilizar el número de palabras. Ten en cuenta que entre dos palabras puede
haber más de 1 blanco, e incluso pueden aparecer al principio o final de ésta */


function contadorDePalabras(frase) {

    let quitarEspacios = frase.trim();
    let contador = 0;
    let entrar = false;

    for (let i = 0; i < quitarEspacios.length; i++) {

        if (quitarEspacios[i] !== " " && !entrar) {

            contador++;
            entrar = true;
        }
        if (quitarEspacios[i] === " ") {
            entrar = false;
        }
    }

    return `La frase contiene"${contador}"palabras`;
}

/* 9.-Validación de Tarjeta de Crédito
You're starting your own credit card business. You need to come up with a new way to validate
credit cards with a simple function called validateCreditCard that returns true or false.
Here are the rules for a valid number:
• Number must be 16 digits, all of them must be numbers
• You must have at least two different digits represented (all of the digits cannot be the same) /////////
• The final digit must be even
• The sum of all the digits must be greater than 16
The following credit card numbers are valid:
• 9999777788880000
• 6666666666661666
The following credit card numbers are invalid:
• a92332119c011112 invalid characters
• 4444444444444444 only one type of number
• 1111111111111110 sum less than 16
• 6666666666666661 odd final number */

function validateCreditCard() {

    let numeroTarjeta = "4444444444444444";

    let valida = true;
    let contador = 0;
    let digitDifferent = 0;
    let digitNumber = 1;

    if (numeroTarjeta.length === 16) {

        digitDifferent = parseInt(numeroTarjeta[0]);

        for (let i = 0; i < numeroTarjeta.length; i++) {


            //all of them must be numbers
            if (isNaN(parseInt(numeroTarjeta[i]))) {

                return valida = false;
            }


            //The final digit must be even         
            if (parseInt(numeroTarjeta[numeroTarjeta.length - 1]) % 2 !== 0) {

                return valida = false;
            }

            //The sum of all the digits must be greater than 16
            if (!isNaN(parseInt(numeroTarjeta[i]))) {

                contador = contador + parseInt(numeroTarjeta[i]);
            }

            if (digitDifferent !== parseInt(numeroTarjeta[i])) {

                digitNumber++;
            }
        }
    }

    //The sum of all the digits must be greater than 16
    if (contador < 16) {

        valida = false;
    }

    if (digitNumber <= 1) {

        valida = false;
    }

    return valida;
}


/* 10.- Mejora la función anterior creando validateCreditCard2 y añade los siguientes elementos:
A valid credit card number may also contain dashes, to make a card number easier to read. For
example, the following credit card numbers are now also valid:
• 9999-7777-8888-0000
• 6666-6666-6666-1666
Update your program to allow such numbers. (Hint: Remove the dashes from the input string
before checking if the input credit card number is valid.) */

function validateCreditCard2() {

    let leerNumeroTarjeta = "9999-7777-8888-0000";
    // let numeroTarjeta = leerNumeroTarjeta.replaceAll("-","");

    let numeroTarjeta = "";

    for (let i = 0; i < leerNumeroTarjeta.length; i++) {

        if (leerNumeroTarjeta[i] !== "-") {
            numeroTarjeta += leerNumeroTarjeta[i];
        }
    }

    console.log(numeroTarjeta)
    let valida = true;
    let contador = 0;
    let digitDifferent = 0;
    let digitNumber = 1;

    if (numeroTarjeta.length === 16) {

        digitDifferent = parseInt(numeroTarjeta[0]);

        for (let i = 0; i < numeroTarjeta.length; i++) {


            //all of them must be numbers
            if (isNaN(parseInt(numeroTarjeta[i]))) {

                return valida = false;
            }


            //The final digit must be even         
            if (parseInt(numeroTarjeta[numeroTarjeta.length - 1]) % 2 !== 0) {

                return valida = false;
            }

            //The sum of all the digits must be greater than 16
            if (!isNaN(parseInt(numeroTarjeta[i]))) {

                contador = contador + parseInt(numeroTarjeta[i]);
            }

            if (digitDifferent !== parseInt(numeroTarjeta[i])) {

                digitNumber++;
            }
        }
    }

    //The sum of all the digits must be greater than 16
    if (contador < 16) {

        valida = false;
    }

    if (digitNumber <= 1) {

        valida = false;
    }

    return valida;
}