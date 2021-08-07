import backgroundMusic from "../sounds/notesFinal.mp3";

export const PlayMusic = (() => {

    const background = new Audio(backgroundMusic); 

    playBackgroundMusic();

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

    return { stopBackgroundMusic, playBackgroundMusic, musicPlaying };

})();