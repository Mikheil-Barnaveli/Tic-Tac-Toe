const body = document.querySelector('body');
const gamebox = document.getElementById('game-box');
const box = document.querySelectorAll('.box')

console.dir(box);

function checkGameState() {

  const boxValues = Array.from(box).map((cell) => cell.textContent); // Get an array of the current values in each cell
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


// function to check for game over and remove event listeners
function checkGameOver() {
  // check for game over and determine the winner
  // ...

  // remove event listeners from the box
  box.forEach(box => {
    box.removeEventListener('click', boxClick);
  });
}

// function to handle box clicks
function boxClick(e) {
  // handle box click
  // ...

  // check for game over
  checkGameOver();
}

// add event listeners to the box
box.forEach(box => {
  box.addEventListener('click', boxClick);
});


let playerX = true;
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