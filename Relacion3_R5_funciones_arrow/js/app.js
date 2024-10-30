
/* function sum(num1, num2){ return num1 + num2 } 
sum(40,2) 
sum(42,0)
 */
const sum = (num1,num2) => num1 + num2;

/* *************************************************************************************** */
/* function stringLength(str){ console.log(`the length of "${str}" is:`, str.length) }
let longestCityNameInTheWorld = "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu";
stringLength(longestCityNameInTheWorld) */

const stringLength = str => `the length of "${str}" is:, ${str.length}`;

/* *************************************************************************************** */

/* function stringLength2(str){ 
    let length = str.length; 
    console.log(`the length of "${str}" is:`, length); 
    return str.length 
} 
stringLength2("willynilly"); */


const stringLength2 = str =>`The length of "${str}" is: ${str.length}`;



/* *************************************************************************************** */

/* let alerts = ["Hey, you are awesome", "You are so wonderful", "What a marvel you are", "You're so lovely", "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"];
function showAlert(name){ 
    alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`) 
}


showAlert("you ball of fluff");
showAlert2("you ball of fluff"); */

/* const showAlert = (name) => alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`); */
const alerts = [
    "Hello",
    "Warning",
    "Success",
    "Error",
    "Information"
];

const showAlert = name => { const randomAlert = alerts[Math.floor(Math.random() * alerts.length)];
    alert(`${randomAlert}, ${name}!`);
};



/* *************************************************************************************** */


/* 2.Write an arrow function that returns the string, Hello, I am ${name}, and I am ${age} years old. */


const datos = (name,age) => `Hello, I am ${name}, and I am ${age} years old.`;



/* 3. Write an arrow function that takes an array of integers, 
and returns the sum of the elements in the array. 
Google and use the built-in reduce array method for this. */


const array = [1,3,5]

const builtReduce = (array) => array.reduce((a, b) => a + b, 0);

/* 
4. The syntax of this function is wonky. Can you fix it to use the shortest arrow function possible? 
let eye = "eye"; const fire = ( ) = > { return `bulls-`; };
*/

let eye = "eye"; 
const fire = () =>  `bulls-`;



/* 
9. Refactor the following ES5 function to use an arrow function:

const fibonacci = function(n) { if (n < 3) return 1;
return fibonacci(n - 1) + fibonacci(n - 2); } 

*/

const fibonacci = n => n < 3 ? 1:fibonacci(n-1) + fibonacci(n -2);