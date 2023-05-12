const body = document.querySelector('body');
const gamebox = document.getElementById('game-box');
const box = document.querySelectorAll('.box')
const restart = document.getElementById('reset');
const result = document.getElementById('result');
const start = document.getElementById('start');
const theGame = document.getElementById('the-game');



start.addEventListener('click', () => {
  start.style.display = 'none'
  theGame.style.display = 'flex'
})
let playerX = true;
console.dir(box);

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
    // console.log(i, "i garet");
    let [a, b, c] = winConditions[i];
    if (boxValues[a] == "X" || boxValues[a] == "O") {
      if (boxValues[a] === boxValues[b] && boxValues[a] === boxValues[c]) {
        // console.log(i, "i shignit");
        // console.log(boxValues);
        // console.log(a, "a")
        // console.log(boxValues[a])
        console.log(`Winner: ${boxValues[a]}`);
        result.textContent = `Winner: ${boxValues[a]}`;
        // check for a winner
        return boxValues[a];
      }

    }
    
  }
  console.log(result, "result1");
  if (boxValues.every((cell) => cell !== "")) {
    // check for a tie
    result.textContent = "Tie"
    console.log("Tie");
    return "tie";
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

  // // Remove winner class from gamebox
  // gamebox.classList.remove('winner');
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
      playerX = false;
      box.style.pointerEvents = "none";
      checkGameState()
      checkGameOver()
    } else {
      box.textContent = 'O'
      playerX = true;
      box.style.pointerEvents = "none";
      checkGameState()
      checkGameOver()
    }
  })
})