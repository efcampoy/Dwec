/* 1) Puzzle. Se desea implementar una web para la realizaci n de puzzles. Un puzzle no es ó
m s que un tablero cuadrado con un hueco que podemos mover y que permite á
reordenar las piezas. Se pide por tanto la implementaci n de una clase que represente ó
este juego teniendo en cuenta: */

/* 1. La dimensi n puede variar, se escoger en la creaci n. ó á ó
2. El espacio en blanco s lo se mueve arriba, abajo, izquierda, derecha, controlando ó
por supuesto que sea un movimiento v lido. á
3. Debe llevarse un control del tiempo m nimo para resolverlo, as como el n mero de í í ú
movimientos realizados.
4. Los tableros se generar n aleatoriamente. á
5. Implementar s un m todo dibujar() que imprimir en pantalla el tablero para poder á é á
ser probado. */

function Puzzle(filas, columnas) {
    this.tablero = Array.from({ length: filas }, () => Array(columnas).fill(0));
    this.tiempo = 0;
    this.movimientos = 0;
}

Puzzle.prototype.dibujar = function () {
    const container = document.getElementById("puzzle-container");
    container.innerHTML = '';  // Limpia el contenido previo

    for (let i = 0; i < this.tablero.length; i++) {
        let row = document.createElement("div");
        row.classList.add("fila");
        
        for (let j = 0; j < this.tablero[i].length; j++) {
            let cell = document.createElement("span");
            cell.classList.add("celda");
            cell.textContent = this.tablero[i][j];
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

Puzzle.prototype.generar = function () {
    for (let i = 0; i < this.tablero.length; i++) {
        for (let j = 0; j < this.tablero[i].length; j++) {
            this.tablero[i][j] = Math.floor(Math.random() * 10);
        }
    }
}

Puzzle.prototype.mover = function (direccion) {
    this.movimientos++;
    this.tiempo++;
}


/* 2) Tres en Raya. El juego del tres en raya consiste en un tablero de 3x3, en el que
sucesivamente dos jugadores van marcando casillas hasta conseguir tener sus tres
marcas en l nea, pudiendo ser sta horizontal, vertical o en diagonal. Se pide por tanto í é
la implementaci n de ste juego teniendo en cuenta: ó é
1. El juego es pensado para ser usado por dos usuarios.
2. El juego finaliza cuando los dos seleccionan sus 3 marcas, o bien uno consigue
antes las tres en l nea. */

const tablero = Array(3).fill(null).map(() => Array(3).fill(''));
let jugadorActual = 'X';
let movimientos = 0;
const maxMovimientos = 9;

function crearTablero() {
    const contenedor = document.getElementById("tablero");
    contenedor.innerHTML = ''; // Limpia el tablero

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const celda = document.createElement("div");
            celda.classList.add("celda");
            celda.addEventListener("click", () => marcarCasilla(i, j));
            celda.textContent = tablero[i][j];
            contenedor.appendChild(celda);
        }
    }
}

function marcarCasilla(fila, columna) {
    if (tablero[fila][columna] !== '' || verificarGanador()) return;

    tablero[fila][columna] = jugadorActual;
    movimientos++;
    crearTablero(); // Redibuja el tablero con el movimiento

    if (verificarGanador()) {
        alert(`¡Jugador ${jugadorActual} ha ganado!`);
        return;
    }

    if (movimientos === maxMovimientos) {
        alert("¡Es un empate!");
        return;
    }

    // Cambia de turno
    jugadorActual = jugadorActual === 'X' ? 'O' : 'X';
}

function verificarGanador() {
    const lineas = [
        // Filas
        [tablero[0][0], tablero[0][1], tablero[0][2]],
        [tablero[1][0], tablero[1][1], tablero[1][2]],
        [tablero[2][0], tablero[2][1], tablero[2][2]],
        // Columnas
        [tablero[0][0], tablero[1][0], tablero[2][0]],
        [tablero[0][1], tablero[1][1], tablero[2][1]],
        [tablero[0][2], tablero[1][2], tablero[2][2]],
        // Diagonales
        [tablero[0][0], tablero[1][1], tablero[2][2]],
        [tablero[0][2], tablero[1][1], tablero[2][0]]
    ];

    return lineas.some(linea => linea.every(celda => celda === jugadorActual));
}

function reiniciarJuego() {
    tablero.forEach(fila => fila.fill(''));
    jugadorActual = 'X';
    movimientos = 0;
    crearTablero();
}

