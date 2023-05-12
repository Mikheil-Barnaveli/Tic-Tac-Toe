const body = document.querySelector('body');
const gamebox = document.getElementById('game-box');
const box = document.querySelectorAll('.box')

console.dir(box);

let playerX = true;
box.forEach(function(box) {
        
    box.addEventListener('click', ()=>{
    if(playerX == true){
        box.textContent = 'X'
        playerX = false;
        box.style.pointerEvents = "none";
    }else{
        box.textContent = 'O'
        playerX = true;
        box.style.pointerEvents = "none";
    }
    function checkGameState() {

        box.addEventListener('click', ()=>{
            if(playerX == true){
                box.textContent = 'X'
                playerX = false;
                box.style.pointerEvents = "none";
            }else{
                box.textContent = 'O'
                playerX = true;
                box.style.pointerEvents = "none";
            }
        })

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
        ]; // All possible winning combinations
      
        for (let i = 0; i < winConditions.length; i++) {
          let [a, b, c] = winConditions[i];
          if (boxValues[a] && boxValues[a] === boxValues[b] && boxValues[a] === boxValues[c]) {
            console.log("winner");
            // Check if there is a winner
            return boxValues[a];
          }
        }
      
        if (boxValues.every((cell) => cell !== "")) {
          // Check if the game is a tie
          return "tie";
        }
      
        return null; // Game is not finished yet
      }
      

})
})