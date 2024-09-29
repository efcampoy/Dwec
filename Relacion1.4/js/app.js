/*
EJERCICIO 1
Write a function called sum that can take in any number of arguments,
 and returns the sum of all of the arguments.*/

function sum(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}

/*
EJERCICIO 2
Write a function called addOnlyNums that can take in any number of arguments
(including numbers or strings), and returns the sum of only the numbers

*/ 

function addOnlyNums(...args){

    return args.reduce((acc,curr) => {

        if(typeof acc === 'number' && typeof curr === 'number'){
            
            return  acc + curr;
        }else{
            return acc;
        }

    },0);
}

/* 
EJERCICIO 3
Write a function called countTheArgs that can take any number of arguments,
and returns the number of arguments that are passed in.

*/

function countTheArgs(...args) {
    return args.length;
}


/*
 EJERCICIO 4
 Write a function called combineTwoArrays that takes in two arrays as arguments,
 and returns a single array that combines both (using the spread operator).
 */

function combineTwoArrays(array1, array2){
    let combines= [];
    return combines = [...array1,...array2];
}

/* 
EJERCICIO 5
Write a function called sumEveryOther that takes in any amount of arguments,
and returns the sum of every other argument. 
*/

 function sumEveryOther(...args){
    let resultado =0;

    for(let i=0;i<args.length;i+=2){
        resultado += args[i];
        console.log(resultado);
    }
    return resultado;
 }

/* 
EJERCICIO 6
Escribe la función divisible que devuelva si un número es divisible por 3. 
*/

function divisible(number){

    return number % 3 === 0;
}

/* 
EJERCICIO 7
Escribe la función divisibleEntre que devuelva si un número es divisible por otro número,
recibirá dos argumentos. */

 function divisibleEntre (number1,number2){

    let resultado = number1 % number2 === 0;
    return resultado ? "es divisible por":"No es divisible por"
 }

 /* 
 EJERCICIO 8
 Escribe una función rango(valor, rangoInf, rangoSup) 
 que compruebe si dos números dados están entre un rango determinado. */

 function rango(valor,rangoInf,rangoSup){

    let resultado = valor >= rangoInf && valor <=rangoSup;
    return resultado ? "El valor esta entre el rango" : "El valor no esta entre el rango"
 }

/*  
EJERCICIO 9
Escribe una función tieneTresDigitos
que compruebe si un número dado tiene 3 dígitos y devuelva si o no. */

function tieneTresDigitos(number){

    let convertir = number+"";
    return convertir.length === 3 ? "si":"no"
}

/* 
EJERCICIO 10
Escribe una función areaRectangulo
que calcule el área de un rectángulo a partir de sus dos lados. */

 function areaRectangulo(lado1, lado2){

    return  lado1 * lado2;
 }

/*  
EJERCICIO 11
Función imc que devuelva el IMC (índice de masa corporal)
dividiendo el peso de una persona en kilogramos entre la altura en metros al cuadrado */

function imc() {
    
    let  peso = 70;
    let altura = 1.75;
    let resultado = peso / (altura * altura);
    
    return resultado.toFixed(2);
}

/* 
EJERCICIO 12
Function precioFinal que calcule el precio final de un producto después de aplicarle un descuento,
recibirá el precio original y el descuento */


 function precioFinal(preciOriginal,descuento){

    return preciOriginal - (preciOriginal / 100) * descuento;
 }

/*  
EJERCICIO 13
Función factorial que calcule el factorial de un número */

function factorial(facto){

    for(let i=facto-1; i > 1; i--){

        facto *= i;
    }

    return facto;
}

/* 
EJERCICIO 14
Function divisible que recibe dos valores el dividendo */

function divisible(dividendo,divisor){

    if(divisor===0) return "No se puede dividir por 0";
    let resultado = dividendo % divisor === 0;

    return resultado ? "Es divisible por":"No es divisible por";
}