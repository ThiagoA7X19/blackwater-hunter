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
var velocidadePeixe = 5;
var peixey = 100;
var velocidadePeixeY = 3;

var gravidade = 0.5;

function animate() {
   animationId = requestAnimationFrame(animate);
   c.clearRect(0, 0, canvas.width, canvas.height);
   c.fillStyle = 'blue';
   c.fillRect(0, canvas.height - 50, canvas.width, 50);
   c.fillStyle = 'red';
   c.fillRect(peixeX, canvas.height - 55, 30, 30);
   peixeX += velocidadePeixe;
   c.fillStyle = 'green';
   c.fillRect(peixey, canvas.height - 55, 30, 30);
    peixey += velocidadePeixeY;
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
    dy += gravidade;
     x += dx;
    y += dy;

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
 
    
}

animate();
