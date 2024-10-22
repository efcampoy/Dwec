/* Define una función máximo que dados 4 valores devuelva el máximo de ellos.
Llámala con un ejemplo pidiendo los 4 valores al usuario. */

function maximo() {

    let valores = []

    for (let i = 0; i < 4; i++) {

        valores.push(parseInt(prompt("Introduzca un valor")));
    }

    let maximo = Math.max(...valores);

    return `El valor máximo es: ${maximo}`;
}


/* Crea una web desde la que se simule el lanzamiento de un dado de 6 caras.Para ello
define una función “lanzamiento” que devuelva un nº aleatorio entre 1 y 6.  */

function lanzamiento() {

    return Math.floor(Math.random() * 6) + 1;
}


/* Para demostrar que todos deben tener similar probabilidad, mejora la web anterior de
modo que se pueda generar una simulación de 6000 tiradas, mostrando al final el nº
de ocurrencias de cada uno de los valores. */

function simulacion(tiradas) {

    let valores = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };

    /* for (let i = 0; i < 6000; i++) {

        let valor = parseInt(lanzamiento());
        valores[valor] = valores[valor] + 1;
    } */

    Array.from({ length: tiradas }).forEach(() => {

        let valor = parseInt(lanzamiento());
        valores[valor] = valores[valor] + 1;
    });

    let ocurrencias = `Ocurrencias: <br> Valor 1: ${valores[1]} veces <br> Valor 2: ${valores[2]} veces
                        <br> Valor 3: ${valores[3]} veces <br> Valor 4: ${valores[4]} veces
                        <br> Valor 5: ${valores[5]} veces <br> Valor 6: ${valores[6]} veces`;

    document.getElementById('simulaciones').innerHTML = ocurrencias;

}

/* Crea una web para calcular el volumen de una esfera. Para ello diseña una función
que dado el radio de ésta devuelva el volumen. */

/* Mejora el ejercicio anterior permitiendo calcular también el área de un circulo. */

function volumenEsfera() {

    let radio = parseFloat(prompt("Introduzca el radio"));

    return `El volumen es: ${((4 / 3) * Math.PI * Math.pow(radio, 3)).toFixed(2)} <br>
            El area es: ${Math.PI * Math.pow(radio, 2).toFixed(2)}`;

}


/* Crea una función para calcular potencias de un modo recursivo */

function potencia(base, exponente) {

    if (exponente === 0) {
        return 1;
    }

    return base * potencia(base, exponente - 1);
}

/* Crea una función que calcule el factorial de un número dado. Para comprobarlo,
diseña una web que muestre en forma de tabla el factorial para los valores de 1 a 10. */

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

function generarTabla() {
    const tabla = document.getElementById('tablaFactoriales');
    for (let i = 1; i <= 10; i++) {
        const fila = document.createElement('tr');
        const celdaNumero = document.createElement('td');
        const celdaFactorial = document.createElement('td');
        celdaNumero.textContent = i;
        celdaFactorial.textContent = factorial(i);
        fila.appendChild(celdaNumero);
        fila.appendChild(celdaFactorial);
        tabla.appendChild(fila);
    }
}

