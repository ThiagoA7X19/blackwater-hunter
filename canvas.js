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

var gravidade = 0.5;

function animate() {
   animationId = requestAnimationFrame(animate);
   c.clearRect(0, 0, canvas.width, canvas.height);
   c.fillStyle = 'blue';
   c.fillRect(0, canvas.height - 50, canvas.width, 50);
   
   
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
