const body = document.querySelector('body');
const gamebox = document.getElementById('game-box');
const box = document.querySelectorAll('.box')
const restart = document.getElementById('reset');
const result = document.getElementById('result');
const start = document.getElementById('start-PVP');
const startCpu = document.getElementById('start-CPU')
const theGame = document.getElementById('the-game');
const scoreX =document.getElementById('x-score');
const scoreTie =document.getElementById('tie-score');
const scoreO =document.getElementById('o-score');


let counterX = 0;
let counterTie = 0;
let counterO = 0;

// scoreX.textContent = counterX;
// scoreTie.textContent = counterTie;
// scoreO.textContent = counterO;

start.addEventListener('click', () => {
  start.style.display = 'none'
  startCpu.style.display = 'none'
  theGame.style.display = 'flex'
  playerVsPlayer()
})

startCpu.addEventListener('click', () => {
  startCpu.style.display = 'none'
  start.style.display = 'none'
  theGame.style.display = 'flex'
})

console.dir(box);


function playerVsPlayer(){
let playerX = true;

//CHECK WINNER
function checkGameState() {
  const boxValues = Array.from(box).map((cell) => cell.textContent);
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]; // all winning combinations

  for (let i = 0; i < winConditions.length; i++) {
    let [a, b, c] = winConditions[i];

    if (boxValues[a] == "X" || boxValues[a] == "O") {
      if (boxValues[a] === boxValues[b] && boxValues[a] === boxValues[c]) {
        result.textContent = `Winner: ${boxValues[a]}`;
        if(boxValues[a] == "X"){
          counterX += 1
        }
        if(boxValues[a] == "O"){
          counterO += 1
        }
        
        console.log(counterX, "X WIN");
        console.log(counterO, "O WIN");
        
        // check for a winner
        return boxValues[a];
      }

    }
    if (boxValues[a] == "X" || boxValues[a] == "O") {
    if (boxValues.every((cell) => cell !== "")) {
      // check for a tie
      result.textContent = "Tie"
      counterTie += 1
      console.log(counterTie, "TIE GAME");
      return "tie";
    }
    }
    }
    
  
  return null; // Game is not finished yet
}


// CHECK FOR GAME OVER
function checkGameOver() {
  box.forEach(box => {
    box.removeEventListener('click', boxClick);
  });
}

function boxClick(e) {
  checkGameOver();
}

//RESTART FUNCTION
function restartGame() {
  box.forEach((box) => {
    box.textContent = '';
  });

  currentPlayer = 'X';

  box.forEach((box) => {
    box.style.pointerEvents = 'auto';
  });

}

// add event listeners to the box
box.forEach(box => {
  box.addEventListener('click', boxClick);
});

restart.addEventListener('click', () => {
  for (let i = 0; i < box.length; i++) {
    result.textContent = '';
    playerX = true;
    restartGame()
  }
})


box.forEach(function (box) {


  box.addEventListener('click', () => {
    if (playerX == true) {
      box.textContent = 'X'
      box.style.color = '#31C3BD'

      playerX = false;
      box.style.pointerEvents = "none";
      checkGameState()
      checkGameOver()
      
      scoreX.textContent = counterX;
      scoreTie.textContent = counterTie;
      scoreO.textContent = counterO;

    } else {
      box.textContent = 'O'
      playerX = true;
      box.style.color = '#F2B137'
      box.style.pointerEvents = "none";
      checkGameState()
      checkGameOver()

      scoreX.textContent = counterX;
      scoreTie.textContent = counterTie;
      scoreO.textContent = counterO;
    }
  })
})
}