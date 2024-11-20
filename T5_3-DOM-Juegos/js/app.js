/* Coding a JavaScript stopwatch is an easy little project you can build in one day even as a beginner. 
Your stopwatch needs three buttons for user interaction:
Start Stop Reset */

function stopwatch() {

    const reloj = document.createElement('div');
    const contador = document.createElement('p');

    const start = document.createElement('button')
    const stop = document.createElement('button')
    const reset = document.createElement('button')

    reloj.style.width = "800px";
    reloj.style.height = "500px";
    reloj.style.background = "orange"
    reloj.style.color = "white"
    reloj.style.fontSize = "4rem"

    reloj.innerHTML = "stopwatch <br>vanilla javascript stopwatch";
    reloj.style.textAlign = "center";

    contador.classList.add('contador');
    contador.textContent = "00:00";

    start.textContent = "start";
    start.style.background = "orange";
    start.style.color = "white";
    start.style.border = "1px solid white";
    start.style.padding = "20px";
    start.setAttribute("onclick", "empezar()")

    stop.textContent = "stop";
    stop.style.background = "orange";
    stop.style.color = "white";
    stop.style.border = "1px solid white";
    stop.style.padding = "20px";
    stop.style.marginLeft = "25px";
    stop.setAttribute("onclick", "parar()")

    reset.textContent = "reset";
    reset.style.background = "orange";
    reset.style.color = "white";
    reset.style.border = "1px solid white";
    reset.style.padding = "20px";
    reset.style.marginLeft = "25px";
    reset.setAttribute("onclick", "resetear()")


    document.body.appendChild(reloj).appendChild(contador)
    document.body.appendChild(reloj).appendChild(start)
    document.body.appendChild(reloj).appendChild(stop)
    document.body.appendChild(reloj).appendChild(reset)
}

let intervalo;
let segundos;
let minutos;
function empezar() {
    segundos = 0;
    minutos = 0;
    intervalo = setInterval(() => {
        let contador = document.querySelector('.contador');
        segundos++;
        contador.textContent = contador.textContent = String(minutos).padStart(2, '0') + ":" + String(segundos).padStart(2, '0');
        if (segundos >= 60) {
            segundos = 0;
            minutos++;
        }
    }, 1000);
}

function parar() {
    clearInterval(intervalo);
}

function resetear() {

    let contador = document.querySelector('.contador');
    contador.textContent = "00:00"
    segundos = 0;
    minutos = 0;
}

/* Building a Hangman game is one of the best JavaScript project ideas for beginners who
want a bit of a challenge.
If you’re not familiar, the hangman game is about guessing a random word by
guessing letters one by one. If the player runs out of guesses, the game is over. */

let busquedaDePalabra;
let intentos = 3;

function hangman() {

    const ciudades = ["madrid", "paris", "londres", "Roma", "sevilla", "estambul", "pekin"];

    const abecedario = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
        "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ];

    let vista = document.createElement('div');
    vista.style.backgroundColor = "greenyellow";
    vista.style.width = "800px";
    vista.style.height = "400px";
    vista.style.color = "white";
    vista.style.fontSize = "2rem";
    vista.innerHTML = "HAGMAN <br>vanilla javascript HAGMAN GAME <br>";
    vista.style.textAlign = "center";

    for (let i = 0; i < abecedario.length; i++) {

        let boton = document.createElement('button');
        boton.textContent = abecedario[i];
        boton.addEventListener('click', () => buscarLetras(abecedario[i]));
        document.body.appendChild(vista).appendChild(boton);
    }

    let random = Math.floor(Math.random() * ciudades.length);
    busquedaDePalabra = ciudades[random];
    let palabra = document.createElement('div');

    for (let i = 0; i < busquedaDePalabra.length; i++) {

        palabra.style.textAlign = "center";
        palabra.style.marginTop = "40px";
        palabra.style.fontSize = "2rem";
        palabra.classList.add('buscarletras');
        palabra.textContent += "_ ";

        document.body.appendChild(vista).appendChild(palabra);
    }

}

function buscarLetras(letra) {

    let completar = document.querySelector('.buscarletras');
    let contenidoActual = completar.textContent.split(" ");
    let nuevaPalabra = "";

    let entrar = true;

    for (let i = 0; i < busquedaDePalabra.length; i++) {
        if (busquedaDePalabra[i] === letra) {
            contenidoActual[i] = letra;
            entrar = false
        }


        nuevaPalabra += contenidoActual[i] + " ";
    }

    if (entrar) {
        intentos--;
        console.log("estos son los intentos " + intentos);
        alert("La letra "+ letra +" no se encuentra!\n Te quedan "+intentos+" intentos");
        if (intentos === 0) {
            console.log("estos son los intentos " + intentos);
            alert("Perdiste");
        }
    }
    completar.textContent = nuevaPalabra.trim();
}