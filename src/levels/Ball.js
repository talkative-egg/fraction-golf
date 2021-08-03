import { balls } from '../loading/loadImages';
import uniqid from 'uniqid';
import events from '../events';

const Ball = (initialParent, parent, ballNumber = 0, top = false) => {

    const width = 40;
    const height = 40;
    const number = ballNumber;

    const ballId = uniqid();

    let docHeight = document.documentElement.scrollHeight;
    let docWidth = document.documentElement.scrollWidth;

    let fromTop;
    let fromLeft;

    let topBall = top;

    let vx = 0;
    let vy = 0;

    const ball = document.createElement("div");

    resetBall();

    const line = document.querySelector("#line");
    const dashedLine = document.querySelector("#dashed-line");

    ball.style.width = `${width}px`;
    ball.style.height = `${height}px`;
    ball.style.borderRadius = "50%";
    ball.style.position = "absolute";
    ball.style.zIndex = "2";
    ball.className = "noselect";

    if(number > 0 && number <= 9){
        const url = balls[`ball${number}`]
        ball.style.background = `no-repeat url(${url})`;
        ball.style.backgroundSize = "100%";
    }else{
        ball.textContent = number;
        ball.style.textAlign = "center";
        ball.style.fontSize = "38px";
        ball.style.background = "red";
        ball.style.color = "white";
    }
    


    function getRandomInt(min, max) {

        return Math.floor(Math.random() * (max - min)) + min;

    }

    function resetBall() {

        docHeight = document.documentElement.scrollHeight;
        docWidth = document.documentElement.scrollWidth;

        const areaTop = docHeight * 0.1;

        const areaHeight = docHeight * 0.8;
        const areaWidth = docWidth * 0.1;

        fromTop = ((topBall)? getRandomInt(Math.floor(areaTop), Math.floor(areaTop + areaHeight / 2) - height - 5)
                        : getRandomInt(Math.floor(areaTop + areaHeight / 2) + 5, docHeight - areaTop - height));
        fromLeft = getRandomInt(0, areaWidth - width);

        vx = 0;
        vy = 0;

        update();

    }

    function update() {

        ball.style.top = `${fromTop}px`;
        ball.style.left = `${fromLeft}px`;
    
    };

    const nearZero = (num) => {

        return Math.abs(num) < 0.5;

    }

    const distance = (x1, y1, x2, y2) => {

        x1 = parseInt(x1);
        y1 = parseInt(y1);
        x2 = parseInt(x2);
        y2 = parseInt(y2);

        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    }

    const resetVelocity = (x = Math.random() * 5, y = Math.sqrt(25 - xSpeed ** 2)) => {

        vx = x;
        vy = y;
        
    }
    
    const spiral = (centerX, centerY, direction) => {

        const thisCenterX = fromLeft + width / 2;
        const thisCenterY = fromTop + height / 2;

        const angle = Math.atan2(thisCenterX - centerX, thisCenterY - centerY);

        const radius = distance(centerX, centerY, thisCenterX, thisCenterY);

        if(direction == 0){ //counterclockwise
            fromLeft += Math.cos(angle) * radius * 0.4;
            fromTop -= Math.sin(angle) * radius * 0.4;
        }else{ //clockwise
            fromLeft -= Math.cos(angle) * radius * 0.4;
            fromTop += Math.sin(angle) * radius * 0.4;
        }
        
        fromLeft += (centerX - thisCenterX) * 0.15;
        fromTop += (centerY - thisCenterY) * 0.15;

        update();

    }

    const clearSpiral = (intervalId, centerX, centerY) => {

        clearInterval(intervalId);

        fromTop = centerY - (height / 2);
        fromLeft = centerX - (width / 2);

        update();

    }

    const move = (intervalId) => {

        fromLeft += vx;
        fromTop += vy;

        events.emit("ballMove", {"cx": fromLeft + width / 2,
                                 "cy": fromTop + height / 2,
                                 "r": width / 2,
                                 "vx": vx,
                                 "vy": vy,
                                 "id": ballId,
                                 "intervalId": intervalId,
                                 "number": number});
        update();

        if(nearZero(vx) && nearZero(vy)){
            vx = 0;
            vy = 0;
            clearInterval(intervalId);
        }else{
            vx /= 1.016;
            vy /= 1.016;
        }

    }

    const checkScreenCollision = ({cx, cy, r, vx, vy, id}) => {

        const gameContainer = document.querySelector("#game-container")

        const gameHeight = gameContainer.offsetHeight;
        const gameWidth = gameContainer.offsetWidth;

        if(cx + r + vx > gameWidth){
            events.emit("collision", {axis: "x", direction: "negative", "id": id});
        }else if(cx - r + vx < 0){
            events.emit("collision", {axis: "x", direction: "positive", "id": id});
        }

        if(cy + r + vy > gameHeight){
            events.emit("collision", {axis: "y", direction: "negative", "id": id});
        }else if(cy - r + vy < 0){
            events.emit("collision", {axis: "y", direction: "positive", "id": id});
        }

    }

    const reverseDirection = ({axis, direction, id}) => {

        if(id !== ballId) return;

        if(axis === "x" && direction === "negative" && vx >= 0){
            vx *= -1
        }else if (axis === "x" && direction === "positive" && vx <= 0){
            vx *= -1;
        }else if(axis === "y" && direction === "negative" && vy >= 0){
            vy *= -1
        }else if(axis === "y" && direction === "positive" && vy <= 0){
            vy *= -1
        }

    }

    const moveToGoal = ({centerX, centerY, id, intervalId, correct}) => {

        if(id !== ballId) return;

        clearInterval(intervalId);
        ball.removeEventListener("mousedown", drawLine);

        const cx = fromLeft + width / 2;
        const cy = fromTop + height / 2;

        const currentDistance = distance(cx, cy, centerX, centerY);

        let direction;

        // 1 denotes clockwise, 0 denotes counterclockwise
        if(cx >= centerX && cy <= centerY){ //first quadrant
            direction = 1;
        }else if(cx >= centerX && cy >= centerY){ //fourth quadrant
            direction = 0;
        }else if(cx < centerX && cy >= centerY){ //third quadrant
            direction = 1;
        }else{
            direction = 0;
        }

        fromLeft = centerX - (centerX - cx) * 15 / currentDistance - width / 2;
        fromTop = centerY - (centerY - cy) * 15 / currentDistance - height / 2;

        update();

        id = setInterval(spiral, 30, centerX, centerY, direction);

        setTimeout(function(){
            clearSpiral(id, centerX, centerY);
            if(!correct){
                resetBall();
                update();
            }
        }, 2000);

    }

    const setLine = (e) => {

        docHeight = document.documentElement.scrollHeight;
        docWidth = document.documentElement.scrollWidth;

        const mouseLeft = e.pageX - docWidth * 0.125;
        const mouseTop = e.pageY - docHeight * 0.1;

        const LINE_MAX = 200;
        const lineLength = distance(mouseLeft, mouseTop, fromLeft + width / 2, fromTop + height / 2);
        let lineX1;
        let lineY1;
        if(lineLength > LINE_MAX){
            lineX1 = fromLeft + width / 2 - (fromLeft + width / 2 - mouseLeft) * LINE_MAX / lineLength
            lineY1 = fromTop + height / 2 - (fromTop + height / 2 - mouseTop) * LINE_MAX / lineLength
        }else{
            lineX1 = mouseLeft;
            lineY1 = mouseTop;
        }

        line.setAttribute("x1", `${lineX1}`);
        line.setAttribute("y1", `${lineY1}`);
        line.setAttribute("x2", `${fromLeft + width / 2}`);
        line.setAttribute("y2", `${fromTop + height / 2}`);

        dashedLine.setAttribute("x1", `${fromLeft + width / 2}`);
        dashedLine.setAttribute("y1", `${fromTop + height / 2}`);
        dashedLine.setAttribute("x2", `${2 * fromLeft + width - lineX1}`);
        dashedLine.setAttribute("y2", `${2 * fromTop + height - lineY1}`);

    }

    const drawLine = (e) => {

        if(vx == 0 && vy == 0){
            window.addEventListener("mousemove", setLine);
            window.addEventListener("mouseup", resetLine);
        }

    }

    const resetLine = (e) => {

        window.removeEventListener("mousemove", setLine);
        window.removeEventListener("mouseup", resetLine);

        const xVelocity = parseInt(line.getAttribute("x2")) - parseInt(line.getAttribute("x1"));
        const yVelocity = parseInt(line.getAttribute("y2")) - parseInt(line.getAttribute("y1"));

        line.setAttribute("x1", `${0}`);
        line.setAttribute("y1", `${0}`);
        line.setAttribute("x2", `${0}`);
        line.setAttribute("y2", `${0}`);

        dashedLine.setAttribute("x1", `${0}`);
        dashedLine.setAttribute("y1", `${0}`);
        dashedLine.setAttribute("x2", `${0}`);
        dashedLine.setAttribute("y2", `${0}`);

        resetVelocity(xVelocity / 7, yVelocity / 7);

        const intervalId = setInterval(function(){
            move(intervalId);
        }, 10);

        events.on("ballMove", checkScreenCollision);
        events.on("collision", reverseDirection);
        events.on("hitGoal", moveToGoal);

        events.emit("ballReleased");

    }

    const hover = (e) => {

        ball.style.cursor = "pointer";
        
    }

    const unhover = (e) => {

        ball.style.cursor = "auto";

    }

    const moveToArea = (e) => {

        const gameHeight = parent.offsetHeight;

        if(topBall){

            events.emit("resetBall", { "position": "top" });

            setTimeout(function(){
                ball.classList.add("top-ball");
            }, 10);
            
            fromTop = gameHeight / 4 - height + height / 2;

        }else{

            events.emit("resetBall", { "position": "bottom" });

            setTimeout(function(){
                ball.classList.add("bottom-ball");
            }, 10);

            fromTop = gameHeight * 3 / 4 - height / 2;

        }

        fromLeft = 40;

        ball.remove();

        parent.appendChild(ball);

        update();

        ball.addEventListener("mousedown", drawLine);

    }

    const moveBack = ({position}) => {

        if(ball.classList.contains(`${position}-ball`)){

            resetBall();

            ball.remove();

            initialParent.appendChild(ball);

            ball.removeEventListener("mousedown", drawLine);

        }

    }

    ball.addEventListener("click", moveToArea);

    ball.addEventListener("mouseenter", hover);
    ball.addEventListener("mouseleave", unhover);

    initialParent.appendChild(ball);

    events.on("resetBall", moveBack);

}

export default Ball;