/* 1) Write examples with Arrays to solve the next problems using only Array methods (like
    iterators, etc…): */

/* const array = [99,1,5,33,102,66,4,8] */
//console.log(findLargestNumbre(array));

/* • find largest number
 
const findLargestNumbre = array => Math.max(...array); */

function findLargestNumbre(array) {
    let salida = 0;
    for (let i = 0; i < array.length; i++) {

        let number = array[i];

        if (salida < number) {
            salida = number;
        }

    }
    return salida;
}

/* • find longest string
const findLongestString3 = (array=[]) => array.reduce((previus,current) => previus.length > current.length ? previus : current); */
/* const array = ["hola que tal", "siiiiiiiiiiiiiiiiiiii", "vaya"]
console.log(findLongestString(array)); */

function findLongestString(array = []) {
    let cadenaMasLarga = "";

    for (let i = 0; i < array.length; i++) {

        let cadena = array[i];

        if (cadenaMasLarga.length < cadena.length) {
            cadenaMasLarga = cadena;
        }

    }
    return cadenaMasLarga;
}




//• find even numbers
/* const findEven = (array) => array.filter((element) => element % 2 === 0);
const array2 = [99, 1, 5, 33, 102, 66, 4, 8, 2]*/

const findEven = array => {
    const even = [];
    array.forEach((element) => {

        if (element % 2 === 0) {

            even.push(element);
        }
    })
    return even;
}; 




/* • find odd numbers */
function findOdd(array = []) {
    const even = []
    for (let i = 0; i < array.length; i++) {

        if (array[i] % 2 !== 0) {
            even.push(array[i])
        }

    }
    return even
}
/* • find words that contain ‘is’ */
/* const findWordsContainIs2 = array => array.filter(word => word.includes("is")); */

const palabras = ["hola","consiste","siesta","nada","lista"]
function findWordsContainIs(array=[]) {
    const wordIs = [];
    for (let i = 0; i < array.length; i++) {
        let word = array[i];
        
      if(word.includes("is")){
        wordIs.push(array[i])
      }  
    }

    return wordIs;
}



/* • assert all numbers are divisible by three */

function findDivisibleBy3(array = []) {
    const divisibleBy3 = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 3 === 0) {
            divisibleBy3.push(array[i]);
        }
    }
    return divisibleBy3;
}

/* • zip two arrays together */

function zipArrays(arr1 = [], arr2 = []) {
    const length = Math.min(arr1.length, arr2.length);
    const zipped = [];

    for (let i = 0; i < length; i++) {
        zipped.push([arr1[i], arr2[i]]);
    }

    return zipped;
}

/* • sort joined array from smallest to largest */

function sortJoinedArray(array = []) {
    return array.sort((a, b) => a - b);
}
/* • remove the first word in the array */

function removeFirstWord(array = []) {
    return array.slice(1);
}

/* • place a new word at the start of the array */

function addWordAtStart(array, word) {
    array.unshift(word);
    return array;
}


/*
• replace some elements */

function replaceElements(array, word) {
    array = array.map(item => {
        // Convertir a cadena en caso de que item no sea una cadena
        if (typeof item === "string") {
            let words = item.split(" ");
            return words.map(w => (w === "is" ? word : w)).join(" ");
        } else {
            return item; // Si no es una cadena, devolver el elemento tal como está
        }
    });
    return array;
}






/* 2) Over an array with names, find all entries whose firstname starts with ‘J’, create projection
combined of only the initials of the name and then sort alphabetically */

function findAndSortNames(names) {
    const initials = [];

    // Filtrar por nombres que empiecen por J
    for (let i = 0; i < names.length; i++) {
        if (names[i].firstName.startsWith('J')) {
            initials.push(`${names[i].firstName.charAt(0)}.${names[i].lastName.charAt(0)}.`);
        }
    }

    // Ordenar alfabéticamente
    initials.sort();

    return initials;
}

/* let namesArray = [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Jane", lastName: "Smith" },
    { firstName: "Alice", lastName: "Johnson" },
    { firstName: "Jack", lastName: "Brown" },
]; */

/* 4) Develop a function wich be able to create a random treasure hunt like the previous one. As
arguments it will recibe the dimensions of the array (at least 5x5) and must return a valid
treasure hunt array. */
function createTreasureHunt(rows, cols) {
    // Validar que las dimensiones sean al menos 5x5
    if (rows < 5 || cols < 5) {
        throw new Error("Las dimensiones deben ser al menos 5x5.");
    }

    // Crear un array vacío
    const treasureHunt = Array.from({ length: rows }, () => Array(cols).fill('X'));

    // Generar una posición aleatoria para el tesoro
    const treasureRow = Math.floor(Math.random() * rows);
    const treasureCol = Math.floor(Math.random() * cols);
    treasureHunt[treasureRow][treasureCol] = 'T'; // 'T' representa el tesoro

    // Llenar el resto del array con espacios vacíos
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (i !== treasureRow || j !== treasureCol) {
                treasureHunt[i][j] = ' '; // ' ' representa un espacio vacío
            }
        }
    }

    return treasureHunt;
}


/* 6)One classic method for composing secret messages is called a square code. The spaces are
removed from the english text and the characters are written into a square (or rectangle). For
example, the sentence “If man was meant to stay on the ground god would have given us roots”
is 54 characters long, so it is written into a rectangle with 7 rows and 8 columns.
 ifmanwas
 meanttos
 tayonthe
 groundgo
 dwouldha
 vegivenu
 sroots
The coded message is obtained by reading down the columns going left to right. For example,
the message above is coded as:
imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau */



function squareCode(message) {
    // Eliminar espacios y convertir a minúsculas usando split, filter y join
    const cleanedMessage = message  
        .split(' ') // Dividir el mensaje en palabras
        .filter(word => word.length > 0) // Filtrar palabras  vacías
        .join('').toLowerCase(); // Convertir a minúsculas

    const length = cleanedMessage.length;
    const rows = Math.ceil(Math.sqrt(length));
    const cols = Math.ceil(length / rows);

    // Crear una cadena vacía para almacenar el mensaje codificado
    let encodedMessage = '';

    // Leer el mensaje por columnas y agregarlo a la cadena codificada
    for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows; row++) {
            const index = row * cols + col;
            if (index < length) {
                encodedMessage += cleanedMessage[index];
            }
        }
    }

    return encodedMessage;
}



