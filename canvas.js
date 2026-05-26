var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.backgroundColor = "transparent";

var c = canvas.getContext('2d');
var x = 200;
var y = 200;
var dx = 10;
var dy = 10;
var raio = 10;

var gravidade = 0.5;

function animate() {
   animationId = requestAnimationFrame(animate);
   c.clearRect(0, 0, canvas.width, canvas.height);
   c.fillStyle = 'blue';
   c.fillRect(400, canvas.height - 50, 300, 50);
   
   
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

    if ((y + raio) > canvas.height) {
        y = canvas.height - raio;
        dy = -dy * 0.8; // Simula a perda de energia na colisão
    }

    
    
}

animate();
