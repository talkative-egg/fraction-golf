import { levelSelectImgs, icons } from '../loading/loadImages';
import './styles.css';

import events from '../events'

import { PlayMusic } from '../loading/loadMusic'

import Firebase from '../Firebase';

const LevelSelect = (() => {

    let userData = Firebase.getUserData();

    let levelPassed = (userData)? userData.levelPassed : 0;
    let levelStars = (userData)? userData.levelStars : [0, 0, 0, 0, 0, 0, 0, 0, 0];

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

        const title = document.createElement("h2");
        title.id = "level-select-settings-title";
        title.textContent = "Settings";

        const iconContainer = document.createElement("div");
        iconContainer.id = "level-select-icon-container";

        const githubIcon = document.createElement("img");
        githubIcon.setAttribute("src", icons.github);

        githubIcon.addEventListener("click", function(){
            window.location.href = "https://github.com/talkative-egg/fraction-golf";
        })

        const muteIcon = document.createElement("img");
        muteIcon.setAttribute("src", icons.mute);
        muteIcon.id = "mute-button";

        muteIcon.addEventListener("click", function(e){

            if(muteIcon.getAttribute("src") === icons.mute){
                muteIcon.setAttribute("src", icons.muted);
                PlayMusic.stopBackgroundMusic();
            }else{
                muteIcon.setAttribute("src", icons.mute);
                PlayMusic.playBackgroundMusic();
            }
        })

        const homeIcon = document.createElement("img");
        homeIcon.setAttribute("src", icons.home);

        homeIcon.addEventListener("click", function(){
            events.emit("load", {"page": "titlePage"});
        })

        iconContainer.appendChild(githubIcon);
        iconContainer.appendChild(muteIcon);
        iconContainer.appendChild(homeIcon);

        popupContainer.appendChild(title);
        popupContainer.appendChild(iconContainer);

        container.appendChild(popupContainer);

        setTimeout(function(){
            window.addEventListener("click", removeSettingsPopup);
        }, 20);

    }

    function removeSettingsPopup(e){

        if(e.target.id === "mute-button") return;

        window.removeEventListener("click", removeSettingsPopup);

        const popup = document.querySelector("#level-select-settings-container")

        if(popup == null){
            return
        }

        popup.style.animation = "slideOutToBottom 0.5s ease-in-out forwards";

        popup.addEventListener("animationend", function(){
            popup.remove();
        });

    }

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
            levelPassed++;
        }

        if(star > levelStars[level - 1]){
            levelStars[level - 1] = star;
        }

        Firebase.writeUserData(levelPassed, levelStars);

    }

    function load(){

        Firebase.getUserData().then(function(val){

            levelPassed = val.levelPassed;
            levelStars = val.levelStars;

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

        })

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