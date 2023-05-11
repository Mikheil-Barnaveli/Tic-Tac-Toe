const body = document.querySelector('body');
const gameBoard = document.getElementById('game-board');
const box = document.getElementsByClassName('box');
const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');
const box4 = document.getElementById('box4');
const box5 = document.getElementById('box5');
const box6 = document.getElementById('box6');
const box7 = document.getElementById('box7');
const box8 = document.getElementById('box8');
const box9 = document.getElementById('box9');



let gamingBoard = [box1, box2, box3, box4, box5, box6, box7, box8, box9];
let playerX = true;

gamingBoard.forEach(function(box) {
        for( let i = 0; i < gamingBoard.length; i++){
            box.addEventListener('click', ()=>{
            if(playerX == true){
                box.textContent = 'X'
                playerX = false
            }else{
                box.textContent = 'O'
                playerX = true
            }
            })
            // if(gamingBoard[0] = gamingBoard[1] = gamingBoard[2]){
            //     console.log("x wins");
            // }
        }
})
