class Character {

    // constructor takes gameHeight and gameWidth as parameter to allow the object to position
    constructor(gameWidth, gameHeight) {

        this.gameWidth = gameWidth;

        // set size of the character or object in the game
        this.width = 150;
        this.height = 30;

        // set variables to control the speed
        this.maxSpeed = 5;
        this.speed = 0;

        // set position of the character
        this.position = {

            // put character at the middle of the canvas and then move it to the left by half it's width
            x: gameWidth/2 - this.width/2,

            // put character at canvas height and move it up by the height of the character and 10 pixels
            y: gameHeight - this.height - 10
        }
    }

    // draw method takes context as a parameter and draws the object to the canvas
    draw(ctx) {

        // set fillStyle of the object
        ctx.fillStyle = "blue";

        // draw the shape of the character
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    //move left
    moveLeft() {
        this.speed = -this.maxSpeed;
    }

    //move right
    moveRight() {
        this.speed = this.maxSpeed;
    }

    //stop character
    stop() {
        this.speed = 0;
    }

    // update the position with time
    update(deltaTime) {
        if(!deltaTime) return;
        this.position.x += this.speed;

        if(this.position.x < 0)
            this.position.x = 0;

        if(this.position.x + this.width > this.gameWidth)
            this.position.x = this.gameWidth - this.width;
    }
}

export default Character;