import { levelSelectImgs } from '../loading/loadImages';
import './styles.css';

import events from '../events'

const LevelSelect = (() => {

    function makeButtons(container){

        const outerContainer = document.createElement("div");;
        outerContainer.id = "button-container-outer";

        const buttonContainer = document.createElement("div");
        buttonContainer.id = "button-container";

        for(let i = 1; i <= 9; i++){

            const button = document.createElement("img");
            button.setAttribute("src", levelSelectImgs[`level${i}`]);
            button.classList.add("level-button");

            if(i == 1){
                button.addEventListener("click", function(){
                    events.emit("load", {"page": "level1"});
                });
                
            }else{
                button.addEventListener("click", function(){
                    // events.emit("load", {"page": `level${i}`});
                    events.emit("load", {"page": "demoLevel"});
                });
            }

            

            buttonContainer.appendChild(button);

        }

        outerContainer.appendChild(buttonContainer);

        container.appendChild(outerContainer);

    }

    function makeSettings(container){

        const settings = document.createElement("img");
        settings.setAttribute("src", levelSelectImgs.settings);
        settings.id = "settings-button";

        container.appendChild(settings);

    }

    function makeTitle(container){

        const title = document.createElement("img");
        title.setAttribute("src", levelSelectImgs.title);
        title.id = "level-select-title";

        container.appendChild(title);

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

    return { load };

})();

export default LevelSelect;