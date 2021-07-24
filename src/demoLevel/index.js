import Ball from '../components/Ball';
import Goal from '../components/Goal';
import Wall from '../components/Wall';

const DemoLevel = (() => {

    const container = document.createElement("div");
    container.style.position = "absolute";
    container.style.width = "100%";
    container.style.height = "100%";
    container.style.overflow = "none";
    container.style.zIndex = "-1";

    setTimeout(function(){
        container.style.zIndex = "0";
    }, 1000);


    const docHeight = document.documentElement.scrollHeight;
    const docWidth = document.documentElement.scrollWidth;

    function createLines(){

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

    function makeGrabArea(){

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

    function makeBalls(){

        const ball1 = Ball(container, 5, true);
        const ball2 = Ball(container, 3, true);
        const ball3 = Ball(container, 2, true);


        const ball4 = Ball(container, 1, false);
        const ball5 = Ball(container, 6, false);
        const ball6 = Ball(container, 7, false);
        
        return [ball1, ball2, ball3, ball4, ball5, ball6];

    }

    function load(){

        createLines();

        const centerWall = Wall(container, 
                        Math.floor(docHeight / 2)  - 10, 0, docWidth - 400, 20);
        

        const wall1 = Wall(container, Math.floor(docHeight / 2) - 10, docWidth - 195, 130, 20, "blue")

        // const walls = [centerWall, wall1];

        makeGrabArea();

        const balls = makeBalls();

        const goal1 = Goal(container, Math.floor(docHeight / 2) - 150, docWidth - 160, 5);
        const goal2 = Goal(container, Math.floor(docHeight / 2) + 90, docWidth - 160, 6);

        // const goals = [goal1, goal2];

    }

    document.querySelector("body").prepend(container);

    return { load };

})();

export default DemoLevel;