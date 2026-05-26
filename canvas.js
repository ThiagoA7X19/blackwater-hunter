var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.backgroundColor = "Black";

var c = canvas.getContext('2d');
var x = 200;
var y = 200;
var dx = 10;
var dy = 10;

var animationId;
var animado = false;

function animate() {
   animationId = requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight );

    c.fillStyle = "#c00d0dbb";
    c.fillRect(x, 100, 100, 100, 100);
    c.fillStyle = "#0d0dc0bb";
    c.fillRect(100, y, 100, 100, 100);

    if ((x + 100) > innerWidth) {
        dx = -dx;
    }
     if ((x) < 0) {
        dx = -dx;
    }
    if ((y + 100) > innerHeight) {
        dy = -dy;
    }
    if ((y) < 0) {
        dy = -dy;
    }
    x += dx;
    y += dy;
}
function comecar() {
    if (!animado) {
        animate();
        animado = true;
    }
}
function parar() {
    cancelAnimationFrame(animationId);
    animado = false;
}
animate();
