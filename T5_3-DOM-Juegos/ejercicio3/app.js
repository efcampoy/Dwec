const gameBoard = document.querySelector(".game-board");
const movesElement = document.getElementById("moves");
const timerElement = document.getElementById("timer");
const restartButton = document.getElementById("restart");

let cards = [];
let flippedCards = [];
let moves = 0;
let matchedPairs = 0;
let timer;
let time = 0;
let gameStarted = false;

// Generar cartas
const generateCards = () => {
  const numbers = [1, 2, 3, 4, 5];
  cards = [...numbers, ...numbers]
    .sort(() => Math.random() - 0.5)
    .map((number) => createCard(number));
};

// Crear elemento de carta
const createCard = (number) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.number = number;
  card.addEventListener("click", flipCard);
  return card;
};

// Manejar el volteo de cartas
const flipCard = (e) => {
  const card = e.target;
  if (!gameStarted) {
    startTimer();
    gameStarted = true;
  }
  if (
    flippedCards.length < 2 &&
    !card.classList.contains("flipped") &&
    !card.classList.contains("matched")
  ) {
    card.classList.add("flipped");
    card.textContent = card.dataset.number;
    flippedCards.push(card);

    if (flippedCards.length === 2) {
      moves++;
      movesElement.textContent = moves;
      checkForMatch();
    }
  }
};

// Verificar coincidencias
const checkForMatch = () => {
  const [card1, card2] = flippedCards;
  if (card1.dataset.number === card2.dataset.number) {
    card1.classList.add("matched");
    card2.classList.add("matched");
    matchedPairs++;

    if (matchedPairs === cards.length / 2) {
      endGame();
    }
  } else {
    setTimeout(() => {
      card1.classList.remove("flipped");
      card1.textContent = "";
      card2.classList.remove("flipped");
      card2.textContent = "";
    }, 1000);
  }
  flippedCards = [];
};

// Iniciar temporizador
const startTimer = () => {
  timer = setInterval(() => {
    time++;
    const minutes = String(Math.floor(time / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    timerElement.textContent = `${minutes}:${seconds}`;
  }, 1000);
};

// Finalizar el juego
const endGame = () => {
  clearInterval(timer);
  alert(`¡Felicidades! Completaste el juego en ${moves} movimientos y ${timerElement.textContent}.`);
};

// Reiniciar juego
const restartGame = () => {
  clearInterval(timer);
  time = 0;
  moves = 0;
  matchedPairs = 0;
  gameStarted = false;
  movesElement.textContent = moves;
  timerElement.textContent = "00:00";
  flippedCards = [];
  gameBoard.innerHTML = "";
  generateCards();
  cards.forEach((card) => gameBoard.appendChild(card));
};

// Iniciar juego
restartButton.addEventListener("click", restartGame);
restartGame();
