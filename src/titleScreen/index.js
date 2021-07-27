import { titleImgs } from "../loading/loadImages";
import events from '../events';

const TitlePage = (() => {

    const body = document.querySelector("body");

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

    function load(){

        if(document.querySelector("#background") != null){
            document.querySelector("#background").remove();docWidth = document.documentElement.scrollWidth;
        }

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

            buttonContainer.addEventListener("click", transition);

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

        events.emit("load", {"page": "levelSelect"});

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

    return { load };

})();

export default TitlePage;