/** 
 * * @name filterNumbersGreaterThan 
 * * @description Filtra los números de un array que sean mayor a cierto número x dejando solo los que sean menores a este * 
 * * @param {number[]} numbers - Array de números a filtrar * @param {number} filter - Número a partir del cuál filtrar los demás números 
 * * @returns {Number[]} - Array de números filtrados menores a {filter} * 
 * * @example * filterNumbersGreaterThan([3, 8, 12, 1, 7, 4], 7) // returns [3, 1, 4] 
 * */

const filterNumbersGreaterThan = (numbers=[],number) => {

    const salida = [];
    numbers.forEach(element => element < number ? salida.push(element):'');
    return salida;
}

/** 
 * @name toHackerSpeak 
 * @description Convierte un string a "Hacker Speak". Para hacerlo, tiene que transformar las "a" en 4, las "e" en 3, las "i" * en 1, las "o" en 0 y las "s" en 5 
 * @param {string} text 
 * @returns {String} - El texto convertido a "Hacker Speak" 
 *  
 * @example 
 * toHackerSpeak("I'm a hacker now") // returns "1'm 4 h4ack3r n0w" 
 * */


const toHackerSpeak = (text) => {
    let hackerText = ''; 

    // Reemplazos
    const replacements = { a: '4', e: '3', i: '1', o: '0', s: '5' }; 

    // Reemplazar o agregar carácter
    text.split('').forEach((char) => {
        hackerText += replacements[char] || char; 
    })

    return hackerText; 
}

/**
* @name getFileExtension
* @description Obtiene la extensión de un archivo
*
* @param {string} file - El nombre del archivo a obtener la extensión
* @returns {String} - La extensión del archivo
*
* @example
* getFileExtension("imagen.jpg") // returns "jpg"
*/


const getFileExtension = file => file.split(".")[1];


/**
* @name flatArray
* @description Dado un array 2D, devuelve un array 1D que contiene todos los
ítems
*
* @param {[][]} arr - Array 2D a "aplanar"
* @returns {[]} - El array "aplanado"
*
* @example
* flatArray([[1, 5, 4], [3, 10], [2, 5]]) // returns [1, 5, 4, 3, 10, 2, 5]
*/

const flatArray = array => {
    const salida = [];

    array.forEach((subArray) => subArray.forEach((element) => salida.push(element)))
    return JSON.stringify(salida);

}

/**
* @name removeDuplicates
* @description Remueve duplicados de un array
*
* @param {[]} arr - Array con duplicados a remover
* @returns {[]} - El array resultante sin duplicados
*
* @example
* removeDuplicates([4, 5, 10, 4, 10, 2]) // returns [4, 5, 10, 2]
*/

const removeDuplicates = (array=[]) => {
    const salida = [];
    array.forEach((element) => {

        if(!salida.includes(element)){
            salida.push(element);
        }
    })
    return salida;
}

/**
* @name countLetter
* @description Devuelve la cantidad de veces que una letra aparece en un str
ing
*
* @param {string} letter - Letra a contar
* @param {string} text - Texto sobre el que realizar la cuenta de {letter}
* @returns {Number} - Número de veces que aparece {letter} en {text}
*
* @example
* countLetter("a", "javascript") // returns 2
*/

const countLetter = (letter,text) => {
    const separador = text.split('');
    let countLetter = 0;
    separador.forEach((element) => letter === element ? countLetter++:'');
    return countLetter;
}

/**
* @name removeWords
* @description Dado un string y un array de palabras a remover, devuelve el
string sin las palabras removidas
*
* @param {string} str - Texto a recortar
* @param {string[]} words - Palabras a remover
* @returns {string} - Texto resultante con las palabras removidas
*
* @example
* removeWords("This is a really bad test", ["really", "bad"]) // returns "This is a test"
*/

const removeWords = (str, words = []) => {

    const salida = str.split(' '); 

    words.forEach(element => {
        salida.forEach((word, index) => {
            if (word === element) {
                salida.splice(index, 1);
            }
        });
    });

    return salida.join(' ');
};
