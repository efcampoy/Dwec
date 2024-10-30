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

