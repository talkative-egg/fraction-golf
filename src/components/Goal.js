import events from '../events'

import { goals } from '../loading/loadImages'

const Goal = (parent, objTop = 300, objLeft = 300, goalNumber = 0) => {

    const fromTop = objTop;
    const fromLeft = objLeft;
    const width = 60;
    const height = 60;
    const number = goalNumber;

    const goal = document.createElement("div");

    goal.style.width = `${width}px`;
    goal.style.height = `${height}px`;
    goal.style.borderRadius = "50%";
    goal.style.backgroundColor = "green";
    // goal.style.background = `no-repeat url(${goals.goal})`;
    // goal.style.backgroundSize = "100%";
    goal.style.position = "absolute";
    goal.style.left = `${fromLeft}px`;
    goal.style.top = `${fromTop}px`;
    goal.style.zIndex = "1";

    const distance = (x1, y1, x2, y2) => {

        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    }

    const hitGoal = (props) => {

        const cx = props.cx;
        const cy = props.cy;
        const r = props.r;
        const id = props.id;
        const intervalId = props.intervalId
        const ballNumber = props.number;

        const thisRadius = width / 2;
        const thisCenterX = fromLeft + (width) / 2;
        const thisCenterY = fromTop + (height) / 2;

        const radiusDistance = r + thisRadius

        const correct = checkNumber(ballNumber);

        if(distance(cx, cy, thisCenterX, thisCenterY) < radiusDistance - 10){
            events.emit("hitGoal", {"centerX": thisCenterX, "centerY": thisCenterY, 
                                    id, intervalId, correct});
            if(correct){
                events.off("ballMove", hitGoal);
            }
            
        }

    }

    const checkNumber = (ballNumber) => {

        return number === ballNumber

    }

    parent.appendChild(goal);

    events.on("ballMove", hitGoal);

}

export default Goal;