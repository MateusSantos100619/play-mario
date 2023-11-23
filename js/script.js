const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const pipeTest = document.getElementById('pipe');

const jump = (event) => {
  mario.classList.add('jump'); /*3º passo: A animação vai acontecer*/

  setTimeout(() => {
    mario.classList.remove('jump'); /* e aqui vai remover a classe jump pra sempre quando quiser.*/
}, 500);
}

const loop = setInterval(()=> { /* const é pra ter um intervalo de tempo*/
  const pipePosition = pipe.offsetLeft; /*deslocamento esquerdo da nossa imagem pipe*/

  /* 
   * o replace ele está printando apenas o valor da string do pulo do mario
   */
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');  
  
if (pipePosition  <= 120 && pipePosition > 0 && marioPosition < 80) {
  /* if é a condição de que o jogo acabou*/
  /* Se a posição e a altura do mario é menor que 80, o mario já bateu no tubo*/
  /*pipePosition=nosso deslocamento da esquerda*/
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    /* pra parar o tubo exatamente na posição em que ele encostar*/
    mario.style.animation = 'none';
    mario.style.left = `${marioPosition}px`;
    /* pra parar o mario exatamente na posição em que ele encostar*/

     mario.src = './images/game-over.png';
     mario.style.width= '75px'
     /*tamanho do mario*/
     mario.style.marginLeft = '50px'
  
     clearInterval(loop); /* Quando acaba o jogo, o loop para de rodar */
  }
}, 10);

const reset = () => {
  var pipeTest = document.getElementById('pipe');
  pipeTest.classList.remove('pipe-animation');
  pipeTest.offsetWidth;
  pipeTest.classList.add('pipe-animation');

  mario.src = './images/mario.gif';
  mario.style.width = '150px';
  mario.style.marginLeft = '0px';
}

const pressKeyDownHandler = (event) => {
  console.log(event);
  if ( event.code === 'Backspace' ) {
    reset();
  }
  else if ( event.code === 'Space' ) {
    jump();
  }
}

document.addEventListener('keydown', pressKeyDownHandler); /*1º passo: Iremos pressionar a tecla, quando a tecla abaixar no teclado, o mario irá pular*/