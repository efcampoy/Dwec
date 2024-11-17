/* 1. Introduce en una página XHML un div que muestre un número que trataremos como
un contador, de tal forma que al pulsar un botón ese contador se incremente en uno
cada vez. */

function IncrementarContador() {

    let recogerNumero = document.getElementsByTagName('div');

    let contador = parseInt(recogerNumero[0].textContent) + 1;
    recogerNumero[0].textContent= contador;
}

/* 2. Diseña una web para jugar al juego del 15 (Puzle). En él se dispone de un tablero de
4x4 para un total de 16 casillas. Una de las casillas esta vacía,  mientras las otras se
ocupan con números del 1 al 15 (colocados aleatoriamente). Cualquier casilla
adyacente al hueco se puede mover (intercambiar con éste) con tan sólo clicar sobre
ella. Tu web debe crear el tablero (desordenado) y haciendo uso sólo del DOM y
eventos debes permitir jugar al usuario., detectando correctamente cuando se halla
resuelto el juego. */

function crearTablero() {
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
    const tablero = [];
    const filas = 4;
    const columnas = 4;

    const contenedor = document.createElement('div');
    contenedor.style.display = "grid";
    contenedor.style.gridTemplateRows = `repeat(${filas}, 100px)`;
    contenedor.style.gridTemplateColumns = `repeat(${columnas}, 100px)`;
    contenedor.style.gap = "2px";

    let casillaBlancaPos;

    // Crear el tablero
    for (let j = 0; j < filas; j++) {
        tablero[j] = [];
        for (let i = 0; i < columnas; i++) {
            const casilla = document.createElement('div');
            casilla.style.border = "2px solid black";
            casilla.style.width = "100px";
            casilla.style.height = "100px";
            casilla.style.display = "flex";
            casilla.style.justifyContent = "center";
            casilla.style.alignItems = "center";
            casilla.style.fontSize = "24px";

            // Obtener un número aleatorio único
            const indiceAleatorio = Math.floor(Math.random() * numeros.length);
            const numero = numeros.splice(indiceAleatorio, 1)[0];
            casilla.textContent = numero === 0 ? "" : numero; // Representar el 0 como vacío
            if (numero === 0) {
                casillaBlancaPos = { fila: j, columna: i }; // Guardar posición inicial de la casilla blanca
            }

            // Añadir evento para mover la casilla
            casilla.addEventListener('click', () => moverCasilla(j, i, casilla));

            tablero[j][i] = casilla;
            contenedor.appendChild(casilla);
        }
    }

    document.body.appendChild(contenedor);

    // Función para mover casillas
    function moverCasilla(fila, columna, casilla) {
        const distanciaFila = Math.abs(fila - casillaBlancaPos.fila);
        const distanciaColumna = Math.abs(columna - casillaBlancaPos.columna);

        // Solo se mueve si está al lado (misma fila o columna y distancia 1)
        if ((distanciaFila === 1 && distanciaColumna === 0) || 
            (distanciaFila === 0 && distanciaColumna === 1)) {
            
            // Intercambiar contenido entre la casilla clicada y la casilla blanca
            tablero[casillaBlancaPos.fila][casillaBlancaPos.columna].textContent = casilla.textContent;
            casilla.textContent = "";

            // Actualizar posición de la casilla blanca
            casillaBlancaPos = { fila, columna };

            // Verificar si el jugador ha ganado
            verificarVictoria();
        }
    }

    // Función para verificar si el jugador ha ganado
    function verificarVictoria() {
        const ordenGanador = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, ""]
        ];

        for (let j = 0; j < filas; j++) {
            for (let i = 0; i < columnas; i++) {
                if (tablero[j][i].textContent != ordenGanador[j][i]) {
                    return; // Si alguna casilla no coincide, no hay victoria
                }
            }
        }

        // Si todas las casillas coinciden, el jugador ha ganado
        tablero.forEach(fila => 
            fila.forEach(casilla => casilla.style.backgroundColor = "green")
        );
        setTimeout(() => {
            if (confirm("¡Has ganado la partida! ¿Quieres jugar de nuevo?")) {
                document.body.innerHTML = ""; // Limpiar el contenido actual
                crearTablero(); // Reiniciar el tablero
            }
        }, 100); // Un pequeño retraso para ver el cambio de color
    }
}


