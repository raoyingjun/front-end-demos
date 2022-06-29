var WIDTH = 800,
    HEIGHT = 600;
var ball = { x:700, y: 300, r:20, g: 0.5, vy: 5, color: "#005588"};
window.onload = function () {
    var canvas = document.querySelector('#canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    setInterval(() => {
        render(ctx);
        update();
    }, 17)
}

function render (ctx) {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    ctx.fillStyle = ball.color;
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI);
    ctx.closePath()
    ctx.fill()
}
function update () {
    ball.y += ball.vy;
    ball.vy += ball.g;
    if (ball.y  + ball.r >= HEIGHT) {
        ball.y = HEIGHT - ball.r;
        ball.vy = parseInt(ball.vy *-0.6);
    }
}