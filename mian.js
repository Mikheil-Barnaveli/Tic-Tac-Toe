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

            for( let i = 0; i < box.length; i++){

                if (box[0].textContent === box[1].textContent && box[1].textContent === box[2].textContent && box[0].textContent !== " ") {
                console.log("winner");
                return box[0];
                }



            // function checkResult(box) {
            //     // Check rows for a win
            //     for (let row = 0; row < 3; row++) {
            //       if (box[row][0] === box[row][1] && box[row][1] === box[row][2] && box[row][0] !== '') {
            //         console.log("winner");
            //         return box[row][0];
            //       }
            //     }
                
            //     // Check columns for a win
            //     for (let col = 0; col < 3; col++) {
            //       if (box[0][col] === box[1][col] && box[1][col] === box[2][col] && box[0][col] !== '') {
            //         return box[0][col];
            //       }
            //     }
                
            //     // Check diagonals for a win
            //     if (box[0][0] === box[1][1] && box[1][1] === box[2][2] && box[0][0] !== '') {
            //       return box[0][0];
            //     }
            //     if (box[0][2] === box[1][1] && box[1][1] === box[2][0] && box[0][2] !== '') {
            //       return box[0][2];
            //     }
                
            //     // Check for a tie
            //     let isTie = true;
            //     for (let row = 0; row < 3; row++) {
            //       for (let col = 0; col < 3; col++) {
            //         if (box[row][col] === '') {
            //           isTie = false;
            //           break;
            //         }
            //       }
            //       if (!isTie) {
            //         break;
            //       }
            //     }
            //     if (isTie) {
            //       return 'Tie';
            //     }
                
            //     // No winner yet
            //     return null;
            //   }
              
            

            
              
            // if(box[0] = box[1] = box[2]){
            //     console.log("x wins");
            // }
        }
})
})