import { levelSelectImgs, icons } from '../loading/loadImages';
import './styles.css';

import events from '../events'

import { PlayMusic } from '../loading/loadMusic'

const LevelSelect = (() => {

    let levelPassed = 0;
    let levelStars = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    function makeButtons(container){

        const outerContainer = document.createElement("div");;
        outerContainer.id = "button-container-outer";

        const buttonContainer = document.createElement("div");
        buttonContainer.id = "button-container";

        for(let i = 1; i <= 9; i++){

            const singleButtonContainer = document.createElement("div");
            singleButtonContainer.classList.add("level-select-button-outer");

            const button = document.createElement("img");
            button.classList.add("level-button");

            if(i - 1 <= levelPassed){

                singleButtonContainer.classList.add("unlocked-level-outer");

                singleButtonContainer.addEventListener("click", function(){
                    events.emit("load", {"page": `level${i}`});
                });

                button.setAttribute("src", levelSelectImgs[`level${i}`]);

            }else{

                button.setAttribute("src", levelSelectImgs.locked);

            }

            singleButtonContainer.appendChild(button);

            if(levelStars[i - 1] > 0){

                const starContainer = document.createElement("div");
                starContainer.className = "level-select-star-container";

                const thisStars = levelStars[i - 1]

                const starImg = document.createElement("img");
                starImg.setAttribute("src", icons["star-filled"]);
                starImg.className = "level-select-star"

                const starUnfilled = document.createElement("img");
                starUnfilled.setAttribute("src", icons["star-unfilled"]);
                starUnfilled.className = "level-select-star";

                for(let j = 0; j < 3; j++){
                    
                    if(j < thisStars){
                        starContainer.appendChild(starImg.cloneNode(true))
                    }else{
                        starContainer.appendChild(starUnfilled.cloneNode(true));
                    }

                }

                singleButtonContainer.appendChild(starContainer);
                

            }

            buttonContainer.appendChild(singleButtonContainer);

        }

        outerContainer.appendChild(buttonContainer);

        container.appendChild(outerContainer);

    }

    function makeSettingsPopup(e){

        const container = e.target.container;

        const popupContainer = document.createElement("div");
        popupContainer.id = "level-select-settings-container";



    }

    // function mutePage() {
    //     document.querySelectorAll("video, audio").forEach( elem => muteMe(elem) );
    // }

    function makeSettings(container){

        const settings = document.createElement("img");
        settings.setAttribute("src", levelSelectImgs.settings);
        settings.id = "settings-button";
        
        settings.container = container;
        settings.addEventListener("click", makeSettingsPopup);

        container.appendChild(settings);

    }

    function makeTitle(container){

        const title = document.createElement("img");
        title.setAttribute("src", levelSelectImgs.title);
        title.id = "level-select-title";

        container.appendChild(title);

    }

    function updateLevels({ level, star }){

        if(levelStars[level - 1] === 0){
            levelPassed++
        }

        if(star > levelStars[level - 1]){
            levelStars[level - 1] = star;
        }

    }

    function load(){

        const body = document.querySelector("body");

        const container = document.createElement("div");
        container.id = "level-select"
        container.style.background = `url(${levelSelectImgs.background}) no-repeat center center fixed`;
        container.style.backgroundSize = "100% 100%";

        container.style.zIndex = "-1";

        setTimeout(function(){
            container.style.zIndex = "0";
        }, 1000);

        makeTitle(container);
        makeSettings(container);
        makeButtons(container);

        body.prepend(container);
        
    }

    events.on("levelWin", updateLevels);

    let controlPressed = false;

    document.addEventListener("keydown", function(event) {
        if(event.key === "Control"){
            controlPressed = true;
        }

        if(controlPressed && event.key === "i"){
            levelPassed = 9;
            events.emit("load", {"page": "levelSelect"});
        }
    });

    document.addEventListener("keyup", function(event) {
        controlPressed = false;
    });

    return { load };

})();

export default LevelSelect;