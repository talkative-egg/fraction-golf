import Ball from './Ball';
import Goal from './Goal';
import Wall from './Wall';

import { icons } from '../loading/loadImages';

import events from '../events'

import './level.css'

const Level1 = (() => {

    let strokes = 0;

    const threeStar = 5;
    const twoStar = 7;
    const oneStar = 9;

    let docHeight = document.documentElement.scrollHeight;
    let docWidth = document.documentElement.scrollWidth;

    let topGoalNum = 2;
    let bottomGoalNum = 8;

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
            events.emit("gameOver", {"status": "lost"});
        }

    }

    function load(){

        docHeight = document.documentElement.scrollHeight;
        docWidth = document.documentElement.scrollWidth;

        const container = document.createElement("div");
        container.id = "outer-container";

        setTimeout(function(){
            container.style.zIndex = "0";
        }, 1000);

        
        makeScore(container);
        makeSettings(container);
        makeStars(container);
        makeFraction(container);

        document.querySelector("body").appendChild(container);

        const gameContainer = document.createElement("div");
        gameContainer.id = "game-container";

        createLines(gameContainer);

        container.appendChild(gameContainer);

        const gameHeight = gameContainer.offsetHeight;
        const gameWidth = gameContainer.offsetWidth;

        //top balls
        Ball(container, gameContainer, 2, true);
        Ball(container, gameContainer, 3, true);

        //bottom balls
        Ball(container, gameContainer, 8, false);
        Ball(container, gameContainer, 6, false);

        //top goal
        Goal(gameContainer, gameWidth - 50, gameHeight / 2 - 60, 2);

        //bottom goal
        Goal(gameContainer, gameWidth - 50, gameHeight / 2 + 60, 8);
        
        //central wall
        Wall(gameContainer, gameHeight / 2 - 5, 0, gameWidth, 10);

        //walls on top
        Wall(gameContainer, 0, gameWidth / 3, 50, gameHeight * 3 / 10);
        Wall(gameContainer, gameHeight / 2 - gameHeight / 3, gameWidth * 2 / 3, 50, gameHeight / 3);

        //walls on bottom
        // Wall(gameContainer, top, left, width, height)
        Wall(gameContainer, gameHeight - gameHeight / 4, gameWidth * 2 / 5, 70, gameHeight / 4);
        Wall(gameContainer, gameHeight / 2, gameWidth * 3 / 5, 40, gameHeight / 3);
        

        events.on("ballReleased", incrementStroke);

    }

    return { load };

})();

export default Level1;