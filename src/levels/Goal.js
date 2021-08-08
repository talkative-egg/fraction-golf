import events from '../events'

import { PlayMusic } from '../loading/loadMusic';

const Goal = (parent, cx, cy, goalNumber = 0) => {

    let width = 60;
    let height = 60;
    const fromTop = cy - height / 2;
    const fromLeft = cx - width / 2;
    const number = goalNumber;

    let docWidth = document.documentElement.scrollWidth;

    if(docWidth > 1440){
        width = 66;
        height = 66;
    }else if(docWidth > 1920){
        width = 72;
        height = 72;
    }

    const goal = document.createElement("div");

    goal.className = "hole";

    goal.style.width = `${width}px`;
    goal.style.height = `${height}px`;
    goal.style.borderRadius = "50%";
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

            PlayMusic.playBallRolling();

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

    const remove = () => {
        events.off("ballMove", hitGoal);
    }

    parent.appendChild(goal);

    events.on("ballMove", hitGoal);

    return { remove };

}

export default Goal;