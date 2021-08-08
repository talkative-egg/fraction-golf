import backgroundMusic from "../sounds/background-music.mp3";
import ballRollingInHole from "../sounds/ball-rolling-in-hole.mp3";
import ballBounce from "../sounds/ball-bounce.mp3";

export const PlayMusic = (() => {

    const background = new Audio(backgroundMusic); 
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

    function dimBackgroundMusic(){
        background.volume = 0.2;
    }

    function resolveBackgroundMusic(){
        background.volume = 1.0;
    }

    function playBallRolling(){

        dimBackgroundMusic();

        ballRolling.currentTime = 0;
        ballRolling.play();

        ballRolling.addEventListener('ended', function() {
            resolveBackgroundMusic();
        }, false);

    }

    function playBallBounce(){

        dimBackgroundMusic();

        ballBounceOffWall.currentTime = 0;
        ballBounceOffWall.play();

        ballBounceOffWall.addEventListener('ended', function() {
            resolveBackgroundMusic();
        }, false);
    }

    return { stopBackgroundMusic, playBackgroundMusic, musicPlaying, playBallRolling, playBallBounce };

})();