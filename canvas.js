var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.backgroundColor = "transparent";

var c = canvas.getContext('2d');
var x = 100;
var y = 200;
var dx = 20;
var dy = -10;
var raio = 10;
var chaoX = 0;
var chaoY = canvas.height - 50;
var chaoLargura = canvas.width;
var chaoAltura = 50;
var peixeX = 100;
var velocidadePeixe = 2;
var peixey = 100;
var velocidadePeixeY = 3;
var gravidade = 0.5;
var colidiu = false;
var pegou = false;
var tempo = 0;
var imgTraira = new Image();
var ganhou = false;

imgTraira.src = "imagens/trairadojogo.png";

function peixe(x, y) {
    c.drawImage(imgTraira, x, y, 800, 500);
}

function perdeu() {
    window.location.href = "gameover.html";
}

function venceu() {
    window.location.href = "venceu.html";
}

function animate() {


   animationId = requestAnimationFrame(animate);
   c.clearRect(0, 0, canvas.width, canvas.height);
   c.fillStyle = 'blue';

   c.fillRect(0, canvas.height - 50, canvas.width, 50);

   c.fillStyle = 'transparent';
   c.fillRect(peixeX, canvas.height - 55, 30, 30);

   c.fillStyle = 'transparent';
   c.fillRect(peixey, canvas.height - 55, 30, 30);
  

    if (peixeX + 30 > canvas.width || peixeX < 0) {
        velocidadePeixe = -velocidadePeixe;
    }

  if (peixey + 30 > canvas.width || peixey < 0) {
        velocidadePeixeY = -velocidadePeixeY;
    }
   
    c.beginPath();

    c.arc(x, y, raio, 0, Math.PI * 2);
    c.fillStyle = 'red';
    c.fill();


    if ((x + raio) > canvas.width || x - raio < 0) {
        dx = -dx;
    }

    if (
        y + raio > chaoY &&
        x + raio > chaoX &&
        x - raio < chaoX + chaoLargura
    ) {

        y = chaoY - raio;

        dy = 0;
        dx = -1;
    }
    if (
    x + raio > peixeX &&
    x - raio < peixeX + 30 &&
    y + raio > canvas.height - 55 &&
    y - raio < canvas.height - 25
) {
    colidiu = true;
} else {
    colidiu = false;
}
if (ganhou && x < 20) {

    c.font = "50px Arial";
    c.fillStyle = "yellow";
   venceu();

} 
if (x < 20 && !ganhou) {
        perdeu();
    }

   if (pegou) {
    c.font = "30px Bangers";
    c.fillStyle = "yellow";
    c.fillText("Você pegou a traíra!", canvas.width / 2 - 150, canvas.height / 2);
peixe(
        canvas.width / 2 - 200,
        canvas.height / 2 - 150
    );

    if (Date.now() - tempo > 1000) {
        pegou = false;
    }
}

if (!pegou) {
     peixeX += velocidadePeixe;
    peixey += velocidadePeixeY;

    dy += gravidade;
    x += dx;
    y += dy;

}

}



animate();
canvas.addEventListener("click", function(event){

    if (colidiu) {
        pegou = true;
        ganhou = true;
        tempo = Date.now();
              
    }

});

