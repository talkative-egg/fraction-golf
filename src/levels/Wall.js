import events from '../events'

import { pillarBackground } from '../loading/loadImages';

const Wall = (parent, objTop, objLeft, objWidth, objHeight, centerWall = false, type = [1,1]) => {

    const fromTop = objTop;
    const fromLeft = objLeft;
    const width = objWidth;
    const height = objHeight;

    const wall = document.createElement("div");

    if(centerWall){
        wall.className = "center-wall";
    }else{
        wall.className = "pillar"

        //Max Code

        wall.style.backgroundSize = `${width}px ${height}px`;

        const url = pillarBackground[`${type[0]}-${type[1]}`];
        wall.style.background = `url(${url}) center/150%`;

        wall.style.backgroundSize= `${width}px ${height}px`;



    }
    
    wall.style.position = "absolute";
    wall.style.width = `${width}px`;
    wall.style.height = `${height}px`;
    wall.style.left = `${fromLeft}px`;
    wall.style.top = `${fromTop}px`;

    const checkCollision = ({cx, cy, r, vx, vy, id}) => {

        if(cx - r + vx <= fromLeft + width && cx + r + vx >= fromLeft){

            if(cy - r + vy < fromTop + height && cy - r > fromTop + height){
                events.emit("collision", {axis: "y", direction: "positive", "id": id});
            }else if(cy + r + vy > fromTop && cy + r < fromTop){
                events.emit("collision", {axis: "y", direction: "negative", "id": id});
            }

        }

        if(cy - r + vy <= fromTop + height && cy + r + vy >= fromTop){

            if(cx - r + vx < fromLeft + width && cx - r > fromLeft + width){
                events.emit("collision", {axis: "x", direction: "positive", "id": id});
            }else if(cx + r + vx > fromLeft && cx + r < fromLeft){
                events.emit("collision", {axis: "x", direction: "negative", "id": id});
            }

        }

    }

    const remove = () => {
        events.off("ballMove", checkCollision);
    }

    events.on("ballMove", checkCollision);

    parent.appendChild(wall);

    return { remove };

}

export default Wall;