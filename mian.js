const body = document.querySelector('body');
const gameBoard = document.getElementById('game-board');
const boxes = document.querySelectorAll('.box');
// const box1 = document.getElementById('box1');
// const box2 = document.getElementById('box2');
// const box3 = document.getElementById('box3');
// const box4 = document.getElementById('box4');
// const box5 = document.getElementById('box5');
// const box6 = document.getElementById('box6');
// const box7 = document.getElementById('box7');
// const box8 = document.getElementById('box8');
// const box9 = document.getElementById('box9');


let counter = 0;
let gamingBoard = [boxes, boxes, boxes, boxes, boxes, boxes, boxes, boxes, boxes];

gamingBoard.forEach(function(boxes) {
    boxes.addeventListener('click', ()=>{
        boxes.textcontent = 'X'
    })
})







// box1.addEventListener('click', ()=>{
//     if(counter == 0){
//         box1.textContent = 'X'
//         counter++;
//     }
//     if(counter == 1){
//         box1.textContent = 'O'
//         counter--;
//     }
// })
// box2.addEventListener('click', ()=>{
//     if(counter == 0){
//         box2.textContent = 'X'
//         counter++;
//     }
//     if(counter == 1){
//         box2.textContent = 'O'
//         counter--;
//     }
// })
// box3.addEventListener('click', ()=>{
//     if(counter == 0){
//         box3.textContent = 'X'
//         counter++;
//     }
//     if(counter == 1){
//         box3.textContent = 'O'
//         counter--;
//     }
// })
// box4.addEventListener('click', ()=>{
//     if(counter == 0){
//         box4.textContent = 'X'
//         counter++;
//     }
//     if(counter == 1){
//         box4.textContent = 'O'
//         counter--;
//     }
// })
// box5.addEventListener('click', ()=>{
//     if(counter == 0){
//         box5.textContent = 'X'
//         counter++;
//     }
//     if(counter == 1){
//         box5.textContent = 'O'
//         counter--;
//     }
// })
// box6.addEventListener('click', ()=>{
//     if(counter == 0){
//         box6.textContent = 'X'
//         counter++;
//     }
//     if(counter == 1){
//         box6.textContent = 'O'
//         counter--;
//     }
// })
// box7.addEventListener('click', ()=>{
//     if(counter == 0){
//         box7.textContent = 'X'
//         counter++;
//     }
//     if(counter == 1){
//         box7.textContent = 'O'
//         counter--;
//     }
// })
// box8.addEventListener('click', ()=>{
//     if(counter == 0){
//         box8.textContent = 'X'
//         counter++;
//     }
//     if(counter == 1){
//         box8.textContent = 'O'
//         counter--;
//     }
// })
// box9.addEventListener('click', ()=>{
//     if(counter == 0){
//         box9.textContent = 'X'
//         counter++;
//     }
//     if(counter == 1){
//         box9.textContent = 'O'
//         counter--;
//     }
// })
