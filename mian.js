const body = document.querySelector('body');
const gamebox = document.getElementById('game-box');
const box = document.querySelectorAll('.box')
const restart = document.getElementById('reset');


const result = document.createElement('h1');
body.appendChild(result);
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
    let [a, b, c] = winConditions[i];
    if (boxValues[a] && boxValues[a] === boxValues[b] && boxValues[a] === boxValues[c]) {
      console.log(`Winner: ${boxValues[a]}`);
      result.textContent = `Winner: ${boxValues[a]}`;
      result.style.fontSize = '4rem'
      // check for a winner
      return boxValues[a];
    }
  }
  if (boxValues.every((cell) => cell !== "")) {
    // check for a tie
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

restart.addEventListener('click', ()=>{
  for (let i = 0; i < box.length; i++) {
    result.textContent = '';
    playerX = true;
    restartGame()
  }
})


box.forEach(function(box) {
  
        
    box.addEventListener('click', ()=>{
    if(playerX == true){
        box.textContent = 'X'
        playerX = false;
        box.style.pointerEvents = "none";
        checkGameState()
        checkGameOver()
    }else{
        box.textContent = 'O'
        playerX = true;
        box.style.pointerEvents = "none";
        checkGameState()
        checkGameOver()
    }
})
})