import { titleImgs } from "../loading/loadImages";
import events from '../events';

import Firebase from '../Firebase';

import { PlayMusic } from '../loading/loadMusic';

const TitlePage = (() => {

    const body = document.querySelector("body");
    // PlayMusic.playBackgroundMusic();

    function makeBackgroundBlocks(){

        const container = makeDiv([], "blocks");

        const firstBlock = makeDiv(["background-block", "dark-green"], "first-block");
        const secondBlock = makeDiv(["background-block", "med-green"], "second-block");
        const thirdBlock = makeDiv(["background-block", "light-green"], "third-block");
        const fourthBlock = makeDiv(["background-block", "dark-green"], "fourth-block");
        const fifthBlock = makeDiv(["background-block", "med-green"], "fifth-block");

        container.appendChild(firstBlock);
        container.appendChild(secondBlock);
        container.appendChild(thirdBlock);
        container.appendChild(fourthBlock);
        container.appendChild(fifthBlock);

        return container;

    }

    function makeFraction(){

        const container = makeDiv([], "fraction");

        const firstImage = makeImg("frac", titleImgs.frac);
        const secondImage = makeImg("bar", titleImgs.bar);
        const thirdImage = makeImg("tion", titleImgs.tion);

        container.appendChild(firstImage);
        container.appendChild(secondImage);
        container.appendChild(thirdImage);

        return container

    }

    function makeGolf(){

        const container = makeDiv([], "golf");

        const g = makeImg("g", titleImgs.golf_g);
        g.style.opacity = "0%";
        const o = makeImg("o", titleImgs.golf_o);
        o.style.opacity = "0%";
        const l = makeImg("l", titleImgs.golf_l);
        l.style.opacity = "0%";
        const f = makeImg("f", titleImgs.golf_f);
        f.style.opacity = "0%";

        container.appendChild(g);
        container.appendChild(o);
        container.appendChild(l);
        container.appendChild(f);

        return container;

    }

    function makeStartButton(){

        const container = makeDiv([], "start");

        const button = makeImg("button", titleImgs.button);
        const text = makeImg("text", titleImgs.start);

        container.appendChild(button);
        container.appendChild(text);

        return container;

    }

    function animate(e, i, k, animation, time){

        setTimeout(function(){
            e.style.animation = `${animation} ${time} ease-out 1 forwards`
        }, k * i);
        
    }

    function newGame(e){

        const container = e.target.container;

        container.querySelectorAll("*").forEach(function(element){
            element.remove();
        })

        const text = document.createElement("label");
        text.className = "sign-in-user-label";
        text.id = "new-game-text";
        text.textContent = "User Name: ";

        const input = document.createElement("input");
        input.className = "sign-in-user-name";
        input.id = "new-game-input";
        input.type = "text"
        input.placeholder = "User Name";

        const helpText = document.createElement("p");
        helpText.className = "sign-in-help-text";
        helpText.textContent = "";

        const button = document.createElement("p");
        button.className = "enter-game-button";
        button.id = "new-game-button";
        button.textContent = "Start Game!";

        button.addEventListener("click", function(){

            const value = input.value;

            if(value === ""){
                helpText.textContent = "Field cannot be empty";
                return;
            }else{
                Firebase.checkIfUserExists(value).then(function(val){

                    if(val){
                        helpText.textContent = "Name already exists. Please select a new name.";
                        return;
                    }else{
                        Firebase.setUserId(value);
                        Firebase.writeUserData(0, [0, 0, 0, 0, 0, 0, 0, 0, 0]);

                        container.remove();

                        events.emit("load", { "page": "levelSelect" });
                    }
                })
                
            }

        });

        container.appendChild(text);
        container.appendChild(input);
        container.appendChild(helpText);
        container.appendChild(button);

    }

    function resumeGame(e){

        const container = e.target.container;

        container.querySelectorAll("*").forEach(function(element){
            element.remove();
        })

        const text = document.createElement("label");
        text.className = "sign-in-user-label";
        text.textContent = "User Name: ";

        const input = document.createElement("input");
        input.className = "sign-in-user-name";
        input.type = "text"
        input.placeholder = "User Name";

        const helpText = document.createElement("p");
        helpText.className = "sign-in-help-text";
        helpText.textContent = "";

        const button = document.createElement("p");
        button.className = "enter-game-button";
        button.textContent = "Resume Game!";

        button.addEventListener("click", function(){

            const value = input.value;

            if(value === ""){
                helpText.textContent = "Field cannot be empty";
                return;
            }else{
                Firebase.checkIfUserExists(value).then(function(val){

                    if(val){

                        Firebase.setUserId(value);

                        container.remove();

                        events.emit("load", { "page": "levelSelect" });

                    }else{
                        
                        helpText.textContent = "User doesn't exist";
                        return;

                    }
                })
                
            }

        });

        container.appendChild(text);
        container.appendChild(input);
        container.appendChild(helpText);
        container.appendChild(button);

    }

    function makeSigninPopup(container){

        const popupContainer = document.createElement("div");
        popupContainer.id = "sign-in-container";

        const newGameButton = document.createElement("p");
        newGameButton.textContent = "New Game";
        newGameButton.className = "sign-in-button";
        newGameButton.container = popupContainer;

        newGameButton.addEventListener("click", newGame)

        const resumeGameButton = document.createElement("p");
        resumeGameButton.textContent = "Resume Game";
        resumeGameButton.className = "sign-in-button";
        resumeGameButton.container = popupContainer;

        resumeGameButton.addEventListener("click", resumeGame);

        popupContainer.appendChild(newGameButton);
        popupContainer.appendChild(resumeGameButton);

        container.appendChild(popupContainer);

        setTimeout(function(){
            window.addEventListener("click", closeSigninPopup);
        }, 20);
        
    }

    function closeSigninPopup(e){

        if(e.target.parentElement.id === "sign-in-container" || e.target.id === "sign-in-container") return;

        window.removeEventListener("click", closeSigninPopup);

        const popup = document.querySelector("#sign-in-container");

        if(popup !== null){
            popup.style.animation = "slideOutToBottom 0.5s ease-in-out forwards";

            popup.addEventListener("animationend", function(){
                popup.remove();
            });
        }

    }

    function load(){

        const backgroundContainer = makeDiv([], "background");

        const blockContainer = makeBackgroundBlocks();
        const blocks = blockContainer.querySelectorAll(".background-block");

        const fraction = makeFraction();
        const frac = fraction.querySelector("#frac");
        const tion = fraction.querySelector("#tion");

        const golfContainer = makeGolf();
        const golf = golfContainer.querySelectorAll("#golf > img");

        backgroundContainer.appendChild(blockContainer);
        backgroundContainer.appendChild(fraction);
        backgroundContainer.appendChild(golfContainer);

        body.appendChild(backgroundContainer);

        blocks.forEach(function(e, index){
            animate(e, index, 200, "blockAnimation", "0.3s");
        });

        frac.style.animation = "frac 0.7s ease-out 1 forwards";
        tion.style.animation = "tion 0.7s ease-out 1 forwards";

        golf.forEach(function(e, index){
            animate(e, index, 200, "golf", "0.3s");
        });

        setTimeout(function(){

            const buttonContainer = makeStartButton();
            const buttonBackground = buttonContainer.querySelector("#button");
            const buttonText = buttonContainer.querySelector("#text");

            buttonContainer.addEventListener("click", function(){
                if(!PlayMusic.musicPlaying()){
                    PlayMusic.playBackgroundMusic();
                }
                makeSigninPopup(backgroundContainer);
            });

            backgroundContainer.appendChild(buttonContainer);

            buttonBackground.style.animation = "button 0.4s ease-out 1 forwards";
            buttonText.style.animation = "button 0.4s ease-out 1 forwards";

        }, 1000);

    }

    function transition(e){

        const allElements = document.querySelectorAll("#background *");

        allElements.forEach(function(div){

            div.style.transition = "transform 1.5s ease-in-out 0.2s";
            div.style.transform = "translate(0px, -2500px)"; 

        });
        
        setTimeout(function(){
            document.querySelector("#background").remove();
        }, 1200);

    }

    function makeDiv(classList, id){

        const block = document.createElement("div");

        classList.forEach(function(e){
            block.classList.add(e)
        });

        block.id = id;

        return block;

    }

    function makeImg(id, src){

        const img = document.createElement("img");

        img.id = id;

        img.setAttribute("src", src);

        return img;

    }

    return { load, transition };

})();

export default TitlePage;