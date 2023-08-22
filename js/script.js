
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const score = document.querySelector('.score');
const scoreSpeed = document.querySelector('scoreSpeed');
let count = 0;
/*let countSpd = 0;
let velocidade = 1.5;


function canoSpeed() {
  var cssVelocidade = document.querySelector('.pipe');
  cssVelocidade.style.animationDuration = velocidade + 's' ;
  
 
}*/



const jump = () => {
   mario.classList.add('jump');

   setTimeout(() => {

     mario.classList.remove('jump');

   }, 500);
}



const loop = setInterval(() => {

   const pipePosition = pipe.offsetLeft;
   const marioPositon = +window.getComputedStyle(mario).bottom.replace('px', '');
   
   if (pipePosition  <= 120 && pipePosition > 0 && marioPositon < 105) {
    
    

    

     pipe.style.animation = 'none';
     pipe.style.left = `${pipePosition}px`;

     mario.style.animation = 'none';
     mario.style.bottom = `${marioPositon}px`;

     mario.src = './images/game-over.png';
     mario.style.width = '78px'
     mario.style.marginLeft = '60px'

     clearInterval(loop);

   }

    count++;
    score.innerHTML = `SCORE: ${count}`;
    /*countSpd++;
    if (countSpd >= 100 ) {
    
      canoSpeed();
      velocidade = velocidade - 0.01
      countSpd = 0

    }*/

   }, 10);

   

document.addEventListener('keydown', jump);