import Character from '/src/character.js';
import InputHandler from '/src/input.js';

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

let paddle = new Character(canvas.width, canvas.height);
paddle.draw(ctx);

new InputHandler(paddle);
let lastTime = 0;

const gameLoop = (timestamp) => {

    // get time. default value of timestamp is 0
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    // clear the rectangle
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //update position of the paddle
    paddle.update(deltaTime);

    // draw the paddle
    paddle.draw(ctx);

    // request new frame from the browser
    requestAnimationFrame(gameLoop);
}

gameLoop(0);