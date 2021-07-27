import Ball from '../components/Ball';
import Goal from '../components/Goal';
import Wall from '../components/Wall';

import events from '../events'

const DemoLevel = (() => {

    let pars = 0;

    let docHeight = document.documentElement.scrollHeight;
    let docWidth = document.documentElement.scrollWidth;

    let topGoalNum = 5;
    let bottomGoalNum = 6;

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

    function makeGrabArea(container){

        const top = document.createElement("div");
        top.style.backgroundColor = "green";
        top.style.zIndex = "-1";
        top.style.width = "200px";
        top.style.height = `${Math.floor(docHeight / 2) - 10}px`;
        top.style.position = "absolute";
        top.style.top = "0px";
        top.style.left = "0px";

        const bottom = document.createElement("div");
        bottom.style.backgroundColor = "green";
        bottom.style.zIndex = "-1";
        bottom.style.width = "200px";
        bottom.style.height = `${Math.ceil(docHeight / 2) - 10}px`;
        bottom.style.position = "absolute";
        bottom.style.top = `${Math.floor(docHeight / 2) + 10}px`;
        bottom.style.left = "0px";

        container.appendChild(top);
        container.appendChild(bottom);

    }

    function makeBalls(container){

        const ball1 = Ball(container, 5, true);
        const ball2 = Ball(container, 3, true);
        const ball3 = Ball(container, 2, true);


        const ball4 = Ball(container, 1, false);
        const ball5 = Ball(container, 6, false);
        const ball6 = Ball(container, 7, false);
        
        return [ball1, ball2, ball3, ball4, ball5, ball6];

    }

    function makeScore(container){

        pars = 0;

        const scoreDisplay = document.createElement("p");

        scoreDisplay.textContent = `Pars: ${pars}`;
        scoreDisplay.id = "score-display";
        scoreDisplay.style.position = "absolute";
        scoreDisplay.style.top = "20px";
        scoreDisplay.style.right = "20px";
        scoreDisplay.style.fontSize = "30px";

        container.appendChild(scoreDisplay);

    }

    function incrementScore(){

        pars += 1;
        document.querySelector("#score-display").textContent = `Pars: ${pars}`;

    }

    function makeNumbers(container){

        const topNumber = document.createElement("p");
        topNumber.textContent = "10";
        topNumber.id = "top-number";
        topNumber.style.position = "absolute";
        topNumber.style.fontSize = "50px";
        topNumber.style.top = `${Math.floor(docHeight / 2) - 170}px`;
        topNumber.style.left = `${docWidth - 450}px`;
        topNumber.style.padding = "20px";
        topNumber.style.border = "5px solid black";

        const bottomNumber = document.createElement("p");
        bottomNumber.textContent = "12";
        bottomNumber.id = "bottom-number";
        bottomNumber.style.position = "absolute";
        bottomNumber.style.fontSize = "50px";
        bottomNumber.style.top = `${Math.floor(docHeight / 2) + 70}px`;
        bottomNumber.style.left = `${docWidth - 450}px`;
        bottomNumber.style.padding = "20px";
        bottomNumber.style.border = "5px solid black";

        const equalSign = document.createElement("p");
        equalSign.textContent = "=";
        equalSign.id = "equal-sign";
        equalSign.style.position = "absolute";
        equalSign.style.top = `${Math.floor(docHeight / 2) - 65}px`;
        equalSign.style.left = `${docWidth - 300}px`;
        equalSign.style.fontSize = "100px";

        container.appendChild(topNumber);
        container.appendChild(bottomNumber);
        container.appendChild(equalSign);

    }

    function load(){

        if(document.querySelector("#demo-level") != null){
            document.querySelector("#demo-level").remove();
        }

        docHeight = document.documentElement.scrollHeight;
        docWidth = document.documentElement.scrollWidth;

        const container = document.createElement("div");
        container.id = "demo-level"
        container.style.position = "absolute";
        container.style.width = "100%";
        container.style.height = "100%";
        container.style.overflow = "none";
        container.style.zIndex = "-1";

        document.querySelector("body").prepend(container);

        setTimeout(function(){
            container.style.zIndex = "0";
        }, 1000);

        createLines(container);

        const centerWall = Wall(container, 
                        Math.floor(docHeight / 2)  - 10, 0, docWidth - 450, 20);
        

        const wall1 = Wall(container, Math.floor(docHeight / 2) - 10, docWidth - 195, 130, 20, "blue")

        // const walls = [centerWall, wall1];

        makeGrabArea(container);

        const balls = makeBalls(container);

        const goal1 = Goal(container, Math.floor(docHeight / 2) - 150, docWidth - 160, topGoalNum);
        const goal2 = Goal(container, Math.floor(docHeight / 2) + 90, docWidth - 160, bottomGoalNum);

        // const goals = [goal1, goal2];

        makeNumbers(container);
        makeScore(container);

        events.on("ballReleased", incrementScore);

    }

    return { load };

})();

export default DemoLevel;