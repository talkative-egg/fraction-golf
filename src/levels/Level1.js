import Ball from './Ball';
import Goal from './Goal';
import Wall from './Wall';

import { icons } from '../loading/loadImages';

import events from '../events'

import './level.css'

const Level1 = (() => {

    let strokes = 0;

    let outerContainer;

    const threeStar = 7;
    const twoStar = 10;
    const oneStar = 13;

    const level = 1;

    let docHeight = document.documentElement.scrollHeight;
    let docWidth = document.documentElement.scrollWidth;

    let topGoalNum = 2;
    let bottomGoalNum = 8;

    let correctCount = 0;

    function createLines(container){

        const svg = document.querySelector("svg") || document.createElementNS('http://www.w3.org/2000/svg', 'svg');

        const line = document.querySelector("#line") || document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.id = "line";
        line.setAttribute("x1", "0");
        line.setAttribute("y1", "0");
        line.setAttribute("x2", "0");
        line.setAttribute("y1", "0");

        const dashedLine = document.querySelector("#dashed-line") || document.createElementNS('http://www.w3.org/2000/svg', 'line');
        dashedLine.id = "dashed-line";
        dashedLine.setAttribute("x1", "0");
        dashedLine.setAttribute("y1", "0");
        dashedLine.setAttribute("x2", "0");
        dashedLine.setAttribute("y1", "0");

        svg.appendChild(line);
        svg.appendChild(dashedLine);
        container.appendChild(svg);

    }

    function makeScore(container){

        strokes = 0;

        const scoreDisplay = document.createElement("p");

        scoreDisplay.textContent = `Strokes: ${strokes}`;
        scoreDisplay.id = "score-display";

        container.appendChild(scoreDisplay);

    }

    function makeSettings(container){

        const settings = document.createElement("img");
        settings.setAttribute("src", icons.settings);
        settings.id = "settings";

        settings.container = container;
        settings.addEventListener("click", makeStartingPopup);

        container.appendChild(settings);

    }

    function makeStars(container){

        const starContainer = document.createElement("div");
        starContainer.id = "star-container";

        const star1 = document.createElement("img");
        star1.setAttribute("src", icons["star-filled"]);
        star1.className = "star";

        const star2 = document.createElement("img");
        star2.setAttribute("src", icons["star-filled"]);
        star2.className = "star";

        const star3 = document.createElement("img");
        star3.setAttribute("src", icons["star-filled"]);
        star3.className = "star";

        starContainer.appendChild(star1);
        starContainer.appendChild(star2);
        starContainer.appendChild(star3);
        container.appendChild(starContainer);

    }

    function makeFraction(container){

        const fractionContainer = document.createElement("div");
        fractionContainer.id = "fraction-container";

        const topNumber = document.createElement("p");
        topNumber.textContent = "1";
        topNumber.id = "top-number";
        
        const fractionBar = document.createElement("hr");
        fractionBar.id = "fraction-bar";

        const bottomNumber = document.createElement("p");
        bottomNumber.textContent = "4";
        bottomNumber.id = "bottom-number";

        fractionContainer.appendChild(topNumber);
        fractionContainer.appendChild(fractionBar);
        fractionContainer.appendChild(bottomNumber);

        const equalSign = document.createElement("equal-sign");
        equalSign.textContent = "=";
        equalSign.id = "equal-sign";

        container.appendChild(equalSign);
        container.appendChild(fractionContainer);

    }

    function incrementStroke(){

        const stars = document.querySelectorAll(".star")

        strokes += 1;
        document.querySelector("#score-display").textContent = `Strokes: ${strokes}`;

        if(strokes > threeStar){
            stars[2].setAttribute("src", icons["star-unfilled"]);
        }
        
        if(strokes > twoStar){
            stars[1].setAttribute("src", icons["star-unfilled"]);
        }
        
        if(strokes > oneStar){
            events.emit("gameOver", {"status": "lost", "star": 0});
        }

    }

    function incrementCorrectCount({ correct }){

        if(correct){
            makeGoalPopup("Nice Shot!");
        }else{
            makeGoalPopup("Not Quite");
            return;
        }

        correctCount += 1;

        if(correctCount >= 2){

            let star = 0;

            if(strokes <= threeStar){
                star = 3
            }else if(strokes <= twoStar){
                star = 2;
            }else{
                star = 1;
            }

            setTimeout(function(){
                events.emit("gameOver", { "status": "win", "star": star });
            }, 2000);
            
        }

    }

    function makeGoalPopup(textContent){

        const popupContainer = document.createElement("div");
        popupContainer.id = "goal-popup";

        const text = document.createElement("p");
        text.id = "goal-popup-text";
        text.textContent = textContent;

        popupContainer.appendChild(text);

        outerContainer.appendChild(popupContainer);

        setTimeout(function(){
            popupContainer.remove();
        }, 2000);

    }

    function makeWinningPopup(star, container){

        document.querySelector("#settings").removeEventListener("click", makeStartingPopup);

        const starImg = document.createElement("img");
        starImg.setAttribute("src", icons["star-filled"]);

        const starUnfilled = document.createElement("img");
        starUnfilled.setAttribute("src", icons["star-unfilled"]);

        const popupContainer = document.createElement("div");
        popupContainer.className = "level-popup game-end-container";

        const levelName = document.createElement("p");
        levelName.className = "game-end-level";
        levelName.textContent = `Level ${level}`;

        const title = document.createElement("h2");
        title.className = "game-end-title";
        title.textContent = "Congratulations!!";

        const starContainer = document.createElement("div");
        starContainer.id = "game-end-star-container";

        for(let i = 0; i < 3; i++){

            if(i < star){
                starContainer.appendChild(starImg.cloneNode(true))
            }else{
                starContainer.appendChild(starUnfilled.cloneNode(true));
            }

        }

        const buttonContainer = document.createElement("button-container");
        buttonContainer.className = "level-button-container";

        const button = document.createElement("button");
        button.textContent = "Next Level!"
        button.className = "level-popup-button";

        button.addEventListener("click", function(e){
            e.preventDefault();
            events.emit("load", { "page": `level${level + 1}` });
        })

        const restart = document.createElement("img");
        restart.setAttribute("src", icons.restart);
        restart.className = "restart-button";

        restart.addEventListener("click", function(){
            events.emit("load", { "page": `level${level}` });
        })

        const home = document.createElement("img");
        home.setAttribute("src", icons.home);
        home.className = "home-button";

        home.addEventListener("click", function(){
            events.emit("load", { "page": "levelSelect" });
        });

        buttonContainer.appendChild(button);
        buttonContainer.appendChild(restart);
        buttonContainer.appendChild(home);

        popupContainer.appendChild(levelName);
        popupContainer.appendChild(title);
        popupContainer.appendChild(starContainer);
        popupContainer.appendChild(buttonContainer);

        container.appendChild(popupContainer);

    }

    function makeLosingPopup(container){

        document.querySelector("#settings").removeEventListener("click", makeStartingPopup);

        const popupContainer = document.createElement("div");
        popupContainer.className = "level-popup game-end-container";

        const levelName = document.createElement("p");
        levelName.className = "game-end-level";
        levelName.textContent = `Level ${level}`;

        const title = document.createElement("h2");
        title.className = "game-end-title";
        title.textContent = "Game Over";

        const consolation = document.createElement("p");
        consolation.id = "game-lose-text";
        consolation.textContent = "Try again?";

        const buttonContainer = document.createElement("button-container");
        buttonContainer.className = "level-button-container";

        const restart = document.createElement("img");
        restart.setAttribute("src", icons.restart);
        restart.className = "restart-button";

        restart.addEventListener("click", function(){
            events.emit("load", { "page": `level${level}` });
        })

        const home = document.createElement("img");
        home.setAttribute("src", icons.home);
        home.className = "home-button";

        home.addEventListener("click", function(){
            events.emit("load", { "page": "levelSelect" });
        });

        buttonContainer.appendChild(restart);
        buttonContainer.appendChild(home);

        popupContainer.appendChild(levelName);
        popupContainer.appendChild(title);
        popupContainer.appendChild(consolation);
        popupContainer.appendChild(buttonContainer);

        container.appendChild(popupContainer);

    }

    function makeStartingPopup(container){

        container = (container instanceof Event)? container.currentTarget.container : container;

        const star = document.createElement("img");
        star.setAttribute("src", icons["star-filled"]);

        const popupContainer = document.createElement("div");
        popupContainer.className = "level-popup";
        popupContainer.id = "start-popup"

        const title = document.createElement("h2");
        title.textContent = `Level ${level}`;
        title.id = "start-popup-title";

        const threeStarOuterContainer = document.createElement("div");
        threeStarOuterContainer.classList.add("star-outer-container");

        const threeStarInnerContainer = document.createElement("div");
        threeStarInnerContainer.classList.add("star-inner-container");

        threeStarInnerContainer.appendChild(star.cloneNode(true));
        threeStarInnerContainer.appendChild(star.cloneNode(true));
        threeStarInnerContainer.appendChild(star.cloneNode(true));

        threeStarOuterContainer.appendChild(threeStarInnerContainer);

        const threeStarText = document.createElement("p");
        threeStarText.textContent = `< ${threeStar} strokes`;
        
        threeStarOuterContainer.appendChild(threeStarText);


        const twoStarOuterContainer = document.createElement("div");
        twoStarOuterContainer.classList.add("star-outer-container");

        const twoStarInnerContainer = document.createElement("div");
        twoStarInnerContainer.classList.add("star-inner-container");

        twoStarInnerContainer.appendChild(star.cloneNode(true));
        twoStarInnerContainer.appendChild(star.cloneNode(true));

        twoStarOuterContainer.appendChild(twoStarInnerContainer);

        const twoStarText = document.createElement("p");
        twoStarText.textContent = `< ${twoStar} strokes`;

        twoStarOuterContainer.appendChild(twoStarText);


        const oneStarOuterContainer = document.createElement("div");
        oneStarOuterContainer.classList.add("star-outer-container");

        const oneStarInnerContainer = document.createElement("div");
        oneStarInnerContainer.classList.add("star-inner-container");

        oneStarInnerContainer.appendChild(star.cloneNode(true));

        oneStarOuterContainer.appendChild(oneStarInnerContainer);

        const oneStarText = document.createElement("p");
        oneStarText.textContent = `< ${oneStar} strokes`;

        oneStarOuterContainer.appendChild(oneStarText);

        const buttonContainer = document.createElement("button-container");
        buttonContainer.className = "level-button-container";

        const button = document.createElement("button");
        button.textContent = "Got it!"
        button.className = "level-popup-button";

        const restart = document.createElement("img");
        restart.setAttribute("src", icons.restart);
        restart.className = "restart-button";

        restart.addEventListener("click", function(){
            events.emit("load", { "page": `level${level}`, "makePopup": false });
        })

        const home = document.createElement("img");
        home.setAttribute("src", icons.home);
        home.className = "home-button";

        home.addEventListener("click", function(){
            events.emit("load", { "page": "levelSelect" });
        });

        buttonContainer.appendChild(button);
        buttonContainer.appendChild(restart);
        buttonContainer.appendChild(home);

        popupContainer.appendChild(title);
        popupContainer.appendChild(threeStarOuterContainer);
        popupContainer.appendChild(twoStarOuterContainer);
        popupContainer.appendChild(oneStarOuterContainer);
        popupContainer.appendChild(buttonContainer);

        container.appendChild(popupContainer);

        setTimeout(function(){
            window.addEventListener("click", removeStartingPopup);
        }, 50);

    }

    function removeStartingPopup(e){

        window.removeEventListener("click", removeStartingPopup);

        const startPopup = document.querySelector("#start-popup");

        startPopup.style.animation = "slideOutToBottom 0.5s ease-in-out forwards";

        startPopup.addEventListener("animationend", function(){
            startPopup.remove();
        });

    }

    function load(makePopup = true){

        window.removeEventListener("click", removeStartingPopup);

        strokes = 0;
        correctCount = 0;
        events.off("ballReleased", incrementStroke);
        events.off("hitGoal", incrementCorrectCount);

        docHeight = document.documentElement.scrollHeight;
        docWidth = document.documentElement.scrollWidth;

        outerContainer = document.createElement("div");
        outerContainer.id = "outer-container";

        setTimeout(function(){
            outerContainer.style.zIndex = "0";
        }, 1000);

        
        makeScore(outerContainer);
        makeSettings(outerContainer);
        makeStars(outerContainer);
        makeFraction(outerContainer);

        document.querySelector("body").appendChild(outerContainer);

        const gameContainer = document.createElement("div");
        gameContainer.id = "game-container";

        createLines(gameContainer);

        outerContainer.appendChild(gameContainer);

        const gameHeight = gameContainer.offsetHeight;
        const gameWidth = gameContainer.offsetWidth;

        //top balls
        Ball(outerContainer, gameContainer, 2, true);
        Ball(outerContainer, gameContainer, 3, true);

        //bottom balls
        Ball(outerContainer, gameContainer, 8, false);
        Ball(outerContainer, gameContainer, 6, false);

        //top goal
        Goal(gameContainer, gameWidth - 50, gameHeight / 2 - 60, topGoalNum);

        //bottom goal
        Goal(gameContainer, gameWidth - 50, gameHeight / 2 + 60, bottomGoalNum);
        
        //central wall
        Wall(gameContainer, gameHeight / 2 - 5, 0, gameWidth, 10);

        //walls on top
        Wall(gameContainer, 0, gameWidth / 3, 50, gameHeight * 3 / 10);
        Wall(gameContainer, gameHeight / 2 - gameHeight / 3, gameWidth * 2 / 3, 50, gameHeight / 3);

        //walls on bottom
        // Wall(gameContainer, top, left, width, height)
        Wall(gameContainer, gameHeight - gameHeight / 4, gameWidth * 2 / 5, 70, gameHeight / 4);
        Wall(gameContainer, gameHeight / 2, gameWidth * 3 / 5, 40, gameHeight / 3);
        
        if(makePopup){
            makeStartingPopup(outerContainer);
        }

        events.on("ballReleased", incrementStroke);

        events.on("gameOver", function({ status, star }){

            if(status === "win"){
                events.emit("levelWin", { "level": level, "star": star });
                makeWinningPopup(star, outerContainer);
            }else{
                makeLosingPopup(outerContainer);
            }

        });

        events.on("hitGoal", incrementCorrectCount);

    }

    return { load };

})();

export default Level1;