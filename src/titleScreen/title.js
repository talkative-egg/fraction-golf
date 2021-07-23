export const titlePage = (() => {

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

        const firstImage = makeImg("frac", "../src/images/frac.png");
        const secondImage = makeImg("bar", "../src/images/bar.png");
        const thirdImage = makeImg("tion", "../src/images/tion.png");

        container.appendChild(firstImage);
        container.appendChild(secondImage);
        container.appendChild(thirdImage);

        return container

    }

    function makeGolf(){

        const container = makeDiv([], "golf");

        const g = makeImg("g", "../src/images/golf_g.png");
        g.style.opacity = "0%";
        const o = makeImg("o", "../src/images/golf_o.png");
        o.style.opacity = "0%";
        const l = makeImg("l", "../src/images/golf_l.png");
        l.style.opacity = "0%";
        const f = makeImg("f", "../src/images/golf_f.png");
        f.style.opacity = "0%";

        container.appendChild(g);
        container.appendChild(o);
        container.appendChild(l);
        container.appendChild(f);

        return container;

    }

    function makeStartButton(){

        const container = makeDiv([], "start");

        const button = makeImg("button", "../src/images/button.png");
        const text = makeImg("text", "../src/images/start.png");

        container.appendChild(button);
        container.appendChild(text);

        return container;

    }

    function animate(e, i, k, animation, time){

        setTimeout(function(){
            e.style.animation = `${animation} ${time} ease-out 1 forwards`
        }, k * i);
        
    }

    function start(){

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

        }, 1000)
        

    }

    function transition(e){

        const allElements = document.querySelectorAll("#background *");

        allElements.forEach(function(div){

            div.style.transition = "transform 1.5s ease-in-out 0.2s";
            div.style.transform = "translate(0px, -2500px)"; 
            
            setTimeout(function(){
                div.remove();
            }, 1200);

        });

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

    return { start }

})();