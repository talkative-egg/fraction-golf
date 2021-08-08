import backgroundMusic from "../sounds/background-music.mp3";
import ballRollingInHole from "../sounds/ball-rolling-in-hole.mp3";
import ballBounce from "../sounds/ball-bounce.mp3";

export const PlayMusic = (() => {

    const background = new Audio(backgroundMusic); 
    background.volume = 0.5;
    const ballRolling = new Audio(ballRollingInHole);
    const ballBounceOffWall = new Audio(ballBounce);

    function stopBackgroundMusic(){
        background.pause();
        background.currentTime = 0;
    }

    function playBackgroundMusic(){
        
        if (typeof background.loop == 'boolean'){
            background.loop = true;
        }else{
            background.addEventListener('ended', function() {
                this.currentTime = 0;
                this.play();
            }, false);
        }
    
        background.play();

    }

    function musicPlaying(){

        return background.loop;

    }

    function playBallRolling(){

        ballRolling.currentTime = 0;
        ballRolling.play();

    }

    function playBallBounce(){

        ballBounceOffWall.currentTime = 0;
        ballBounceOffWall.play();
        
    }

    return { stopBackgroundMusic, playBackgroundMusic, musicPlaying, playBallRolling, playBallBounce };

})();