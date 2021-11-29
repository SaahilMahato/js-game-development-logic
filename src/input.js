class InputHandler {

    constructor(paddle) {

        // add event listener for key press
        document.addEventListener('keydown', event => {

            // switch key values and call function according to the pressed key
            
            switch(event.keyCode) {
                case 37:
                    paddle.moveLeft();
                    break;
                case 39:
                    paddle.moveRight();
                    break;
            }
        });

        document.addEventListener('keyup', event => {

            // switch key values and call function according to the pressed key
            
            /*
            The if statement is there to stop stuttering.

            If we are pressing both keys and the paddle is traveling in one direction
            the paddle stops for a moment if we release the wrong key too.

            So, to prevent it it checks whether we are traveling left when we release
            the left key and if we are traveling right when we release the right key
            and then stops the paddle
            */

            switch(event.keyCode) {
                case 37:
                    if (paddle.speed < 0)
                        paddle.stop();
                    break;
                case 39:
                    if (paddle.speed > 0)
                        paddle.stop();
                    break;
            }
        });
    }
}

export default InputHandler;