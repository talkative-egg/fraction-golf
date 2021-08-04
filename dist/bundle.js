(()=>{var e={822:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var o=n(645),i=n.n(o)()((function(e){return e[1]}));i.push([e.id,"#level-select{\n    width: 100%;\n    height: 100%;\n    position: absolute;\n}\n\n#level-select-title{\n    display: block;\n    width: 55%;\n    margin: 0 auto 0 auto;\n    padding-top: 20px;\n}\n\n#button-container-outer{\n    width: 55%;\n    min-width: 500px;\n    max-height: 70%;\n    position: absolute;\n    left: 50%;\n    bottom: 5%;\n}\n\n#button-container{\n    width: 100%;\n    max-width: 100%;\n    max-height: 100%;\n    position: relative;\n    left: -50%;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 45px;\n}\n\n@media(max-width: 800px){\n    #button-container{\n        gap: 20px;\n    }\n}\n\n.level-button{\n    width: 17%;\n    max-height: 30%;\n}\n\n.level-button:hover{\n    transform: scale(1.05);\n    cursor: pointer;\n}\n\n#settings-button{\n    position: absolute;\n    top: 20px;\n    right: 20px;\n    width: 5%;\n}\n\n#settings-button:hover{\n    transform: scale(1.05);\n    cursor: pointer;\n}",""]);const r=i},261:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var o=n(645),i=n.n(o)()((function(e){return e[1]}));i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500&display=swap);"]),i.push([e.id,"*{\n    font-family: 'Josefin Sans', sans-serif;\n}\n\n#outer-container{\n    width: 100vw;\n    height: 100vh;\n    background-color: #4b8c46;\n    position: absolute;\n    overflow: none;\n    z-index: -1;\n}\n\n#score-display{\n    font-size: 2rem;\n    top: 1.1rem;\n    left: 1.6rem;\n    position: absolute;\n}\n\n#star-container{\n    width: fit-content;\n    display: flex;\n    flex-direction: row;\n    gap: 1rem;\n    margin: 0.3rem auto;\n}\n\n.star{\n    width: 3rem;\n    height: 3rem;\n    max-height: 9vh;\n}\n\n#settings{\n    width: 5rem;\n    height: 5rem;\n    top: 1.1rem;\n    right: 1.6rem;\n    position: absolute;\n    background-color: #4b8c46;\n}\n\n#settings:hover{\n    transform: scale(1.1);\n    cursor: pointer;\n}\n\n#equal-sign{\n    position: absolute;\n    top: 50%;\n    transform: translate(0, -50%);\n    right: 7rem;\n    font-size: 5rem;\n}\n\n#fraction-container{\n    position: absolute;\n    top: 50%;\n    transform: translate(0, -50%);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    right: 2rem;\n}\n\n#fraction-container p{\n    font-size: 6rem;\n}\n\n@media(max-width: 1250px){\n    #fraction-container{\n        right: 0.5rem;\n    }\n\n    #fraction-container p{\n        font-size: 4rem;\n    }\n\n    #equal-sign{\n        right: 5rem;\n        font-size: 3.5rem;\n    }\n}\n\n#fraction-container #fraction-bar{\n    width: 4rem;\n    height: 0.5rem;\n    background-color: black;\n    color: black;\n    border: none;\n}\n\n#game-container{\n    width: 75vw;\n    height: 80vh;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    background-color: #22b14c;\n    border-radius: 20px;\n}\n\n#start-popup{\n    position: absolute;\n    background-color: #f5e2e2de;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    width: 40%;\n    margin: auto;\n    z-index: 2;\n    text-align: center;\n    padding: 1.5rem 4rem;\n    border-radius: 20px;\n    animation: slideInFromTop 0.5s ease-in-out;\n}\n\n#start-popup img{\n    width: 2.7rem;\n    height: 2.7rem;\n}\n\n#start-popup #start-popup-title{\n    font-size: 3rem;\n}\n\n#start-popup .star-outer-container{\n    margin-top: 2rem;\n    display: flex;\n    justify-content: space-between;\n}\n\n#start-popup p{\n    font-size: 2rem;\n}\n\n#start-popup button{\n    margin-top: 1.5rem;\n    float: right;\n    font-size: 1.2rem;\n    padding: 0.7rem 1rem;\n    border: none;\n    border-radius: 15px;\n    background-color: #babad4;\n}\n\n#start-popup button:hover{\n    cursor: pointer;\n    background-color: #9a9acf;\n}\n\n@keyframes slideInFromTop{\n\n    0%{\n        margin-top: -70px;\n        opacity: 0%;\n    }\n\n    100%{\n        margin-top: 0px;\n        opacity: 100%;\n    }\n\n}\n\n@keyframes slideOutToBottom{\n\n    0%{\n        margin-top: 0px;\n        opacity: 100%;\n    }\n\n    100%{\n        margin-top: 70px;\n        opacity: 0%;\n    }\n\n}",""]);const r=i},28:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var o=n(645),i=n.n(o)()((function(e){return e[1]}));i.push([e.id,"*{\n    margin: 0;\n    padding: 0\n}\n\nhtml{\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n}\n\nbody{\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n}\n\nmain{\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n}\n\n#background{\n    width: 100vw;\n    height: 100vh;\n    overflow: hidden;\n}\n\n.background-block{\n    position: relative;\n    width: 150rem;\n    height: 22.5rem;\n    opacity: 0%;\n}\n\n.dark-green{\n    background-color: #014800;\n}\n\n.med-green{\n    background-color: #05833a;\n}\n\n.light-green{\n    background-color: #80db58;\n}\n\n#first-block{\n    transform: rotate(-28deg);\n    margin-top: 500px;\n    margin-left: 800px;\n}\n\n#second-block{\n    transform: rotate(20deg);\n    margin-top: 600px;\n    margin-left: 500px;\n}\n\n#third-block{\n    transform: rotate(-28deg);\n    margin-top: 500px;\n    margin-left: 300px;\n}\n\n#fourth-block{\n    transform: rotate(-50deg);\n}\n\n#fifth-block{\n    transform: rotate(-28deg);\n}\n\n@keyframes blockAnimation{\n\n    from{\n        opacity: 0%;\n    }\n\n    to{\n        margin-top: 0;\n        margin-left: 0;\n        margin-bottom: 0;\n        margin-right: 0;\n        transform: rotate(-28deg) translate(-18.75rem, -37.5rem);\n        opacity: 100%;\n    }\n\n}\n\n#fraction{\n    position: absolute;\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n    top: 8%;\n    text-align: center;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    width: 60%;\n}\n\n#frac{\n    position: absolute;\n    width: 45%;\n    height: 70%;\n    bottom: 40%;\n    left: 0;\n    align-self: start;\n}\n\n#bar{\n    width: 20%;\n    height: 50%;\n    position: relative;\n    left: 40%;\n    top: 15%;\n    align-self: center;\n}\n\n#tion{\n    position: absolute;\n    width: 45%;\n    height: 70%;\n    right: 0;\n    top: 40%;\n}\n\n#frac:hover{\n    animation: frac 0.3s ease-out 1 forwards;\n}\n\n#tion:hover{\n    animation: tion 0.3s ease-out 1 forwards;\n}\n\n@keyframes frac{\n\n    from{\n        opacity: 0%;\n        left: -8%;\n    }\n\n    to{\n        opacity: 100%;\n        left: 0;\n    }\n\n}\n\n@keyframes tion{\n\n    from{\n        opacity: 0%;\n        right: 8%;\n    }\n\n    to{\n        opacity: 100%;\n        right: 0;\n    }\n\n}\n\n#golf{\n    position: absolute;\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 3%;\n    top: 47%;\n    text-align: center;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    width: 37%;\n    height: 27%;\n}\n\n#golf img{\n    width: 25%;\n    height: 100%;\n}\n\n#golf :not(:last-child){\n    margin-right: -2%;\n}\n\n#golf #l{\n    margin-left: -1%;\n}\n\n#golf img:hover{\n    animation: golf 0.4s ease-out 1 forwards;\n}\n\n@keyframes golf{\n\n    0%{\n        margin-top: -10%;\n        opacity: 0%;\n    }\n\n    40%{\n        margin-top: 5%;\n        opacity: 100%;\n    }\n\n    60%{\n        margin-top: -3%;\n    }\n\n    70%{\n        margin-top: 2%;\n    }\n\n    85%{\n        margin-top: -1%;\n    }\n\n    100%{\n        margin-top: 0%;\n        opacity: 100%;\n    }\n\n}\n\n#start{\n    position: absolute;\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 8%;\n    top: 76%;\n    text-align: center;\n    width: 34%;\n    height: 22%;\n}\n\n#start #button{\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n}\n\n@keyframes button{\n    from{\n        top: 15%;\n        opacity: 0%;\n    }\n\n    to{\n        top: 0%;\n        opacity: 100%;\n    }\n}\n\n#start #text{\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n}\n\n#start:hover{\n    cursor: pointer;\n    top: 75%;\n    width: 36%;\n    height: 24%;\n}\n\n.noselect {\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */\n    -khtml-user-select: none; /* Konqueror HTML */\n    -moz-user-select: none; /* Old versions of Firefox */\n    -ms-user-select: none; /* Internet Explorer/Edge */\n    user-select: none; /* Non-prefixed version, currently\n                          supported by Chrome, Edge, Opera and Firefox */\n}\n\nsvg{\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    min-height: 100%;\n}\n\nline{\n    stroke-width: 5;\n    stroke: black;\n    z-index: 2;\n}\n\n#dashed-line{\n    stroke-dasharray: 4;\n    z-index: 2;\n}",""]);const r=i},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(i[s]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);o&&i[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var r={},s=[],a=0;a<e.length;a++){var l=e[a],c=o.base?l[0]+o.base:l[0],d=r[c]||0,p="".concat(c," ").concat(d);r[c]=d+1;var u=n(p),m={css:l[1],media:l[2],sourceMap:l[3]};-1!==u?(t[u].references++,t[u].updater(m)):t.push({identifier:p,updater:i(m,o),references:1}),s.push(p)}return s}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var r=o(e=e||[],i=i||{});return function(e){e=e||[];for(var s=0;s<r.length;s++){var a=n(r[s]);t[a].references--}for(var l=o(e,i),c=0;c<r.length;c++){var d=n(r[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}r=l}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o=n.css,i=n.media,r=n.sourceMap;i?e.setAttribute("media",i):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},104:e=>{var t="undefined"!=typeof process&&process.pid?process.pid.toString(36):"";function n(){var e=Date.now(),t=n.last||e;return n.last=e>t?e:t+1}e.exports=e.exports.default=function(e,o){return(e||"")+""+t+n().toString(36)+(o||"")},e.exports.process=function(e,o){return(e||"")+t+n().toString(36)+(o||"")},e.exports.time=function(e,t){return(e||"")+n().toString(36)+(t||"")}},728:(e,t,n)=>{"use strict";e.exports=n.p+"b475fd2b71206aed1c73.png"},772:(e,t,n)=>{"use strict";e.exports=n.p+"2d9a93ecb6a5b79a0623.png"},53:(e,t,n)=>{"use strict";e.exports=n.p+"b4bed0716a57aef6828e.png"},243:(e,t,n)=>{"use strict";e.exports=n.p+"5d092289809d07378a9e.png"},835:(e,t,n)=>{"use strict";e.exports=n.p+"c561a577d9112d3bfd9c.png"},593:(e,t,n)=>{"use strict";e.exports=n.p+"3fb381086db700587b69.png"},418:(e,t,n)=>{"use strict";e.exports=n.p+"64176f7c483d3c53c2b5.png"},827:(e,t,n)=>{"use strict";e.exports=n.p+"7e3d8a3009d59ee2d760.png"},327:(e,t,n)=>{"use strict";e.exports=n.p+"28294481e00e28d9be3d.png"},259:(e,t,n)=>{"use strict";e.exports=n.p+"6bb1f97922a5d4edba43.png"},527:(e,t,n)=>{"use strict";e.exports=n.p+"5845703f03031d4a714d.png"},368:(e,t,n)=>{"use strict";e.exports=n.p+"6b25688b397f715596e8.png"},536:(e,t,n)=>{"use strict";e.exports=n.p+"912143698ae40a398334.png"},7:(e,t,n)=>{"use strict";e.exports=n.p+"bad3fb39ebd32b934cf0.png"},134:(e,t,n)=>{"use strict";e.exports=n.p+"e14d8220ee6a672afd11.png"},424:(e,t,n)=>{"use strict";e.exports=n.p+"5d7a63b18e9985a9fb8e.png"},984:(e,t,n)=>{"use strict";e.exports=n.p+"0f1911dbfa83bf74ab26.png"},145:(e,t,n)=>{"use strict";e.exports=n.p+"387d5b7ac8b85225f293.png"},467:(e,t,n)=>{"use strict";e.exports=n.p+"5f3afd1c7776a3015819.png"},214:(e,t,n)=>{"use strict";e.exports=n.p+"68a16ac485fc96e5e9ef.png"},523:(e,t,n)=>{"use strict";e.exports=n.p+"b3d0a306f257fff2d220.png"},59:(e,t,n)=>{"use strict";e.exports=n.p+"30fbd70f7202273ebe93.png"},241:(e,t,n)=>{"use strict";e.exports=n.p+"ce4f3f0dd42c60ae02b7.png"},778:(e,t,n)=>{"use strict";e.exports=n.p+"2b65b55f15ab50dd84bd.png"},846:(e,t,n)=>{"use strict";e.exports=n.p+"171443f4183ce931421a.png"},648:(e,t,n)=>{"use strict";e.exports=n.p+"b745555c1097c8f116ed.png"},962:(e,t,n)=>{"use strict";e.exports=n.p+"7216ac7714ceaa07f667.png"},393:(e,t,n)=>{"use strict";e.exports=n.p+"891db67bca13bf41c229.png"},445:(e,t,n)=>{"use strict";e.exports=n.p+"e3ef5542ef739d7e6c2b.png"},933:(e,t,n)=>{"use strict";e.exports=n.p+"21903e963379ff1cd41b.png"},144:(e,t,n)=>{"use strict";e.exports=n.p+"3a12d3deee896d1eee04.png"},406:(e,t,n)=>{"use strict";e.exports=n.p+"e1a8bb83e6f202f7882f.png"},581:(e,t,n)=>{"use strict";e.exports=n.p+"89ad9489aac0059deaa3.png"}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{"use strict";const e={events:{},on:function(e,t){this.events[e]=this.events[e]||[],this.events[e].push(t)},off:function(e,t){if(this.events[e])for(var n=0;n<this.events[e].length;n++)if(this.events[e][n]===t){this.events[e].splice(n,1);break}},emit:function(e,t){this.events[e]&&this.events[e].forEach((function(e){e(t)}))}};var t=n(728),o=n(772),i=n(53),r=n(243),s=n(835),a=n(593),l=n(418),c=n(827),d=n(327),p=n(368),u=n(259),m=n(581),h=n(134),f=n(984),g=n(424),b=n(7),v=n(406),y=n(527),x=(n(536),n(962)),w=n(145),E=n(467),C=n(214),k=n(523),A=n(59),S=n(241),M=n(778),I=n(846),L=n(648),$=n(393),q=n(445),z=n(144),T=n(933);const N={frac:p,bar:u,tion:m,golf_g:h,golf_o:f,golf_l:g,golf_f:b,start:v,button:y},H={ball1:t,ball2:o,ball3:i,ball4:r,ball5:s,ball6:a,ball7:l,ball8:c,ball9:d},Z={background:x,title:$,settings:q,level1:w,level2:E,level3:C,level4:k,level5:A,level6:S,level7:M,level8:I,level9:L},P={settings:q,"star-filled":T,"star-unfilled":z},W=(()=>{const t=document.querySelector("body");function n(e,t,n,o,i){setTimeout((function(){e.style.animation=`${o} ${i} ease-out 1 forwards`}),n*t)}function o(e,t){const n=document.createElement("div");return e.forEach((function(e){n.classList.add(e)})),n.id=t,n}function i(e,t){const n=document.createElement("img");return n.id=e,n.setAttribute("src",t),n}return{load:function(){const r=o([],"background"),s=function(){const e=o([],"blocks"),t=o(["background-block","dark-green"],"first-block"),n=o(["background-block","med-green"],"second-block"),i=o(["background-block","light-green"],"third-block"),r=o(["background-block","dark-green"],"fourth-block"),s=o(["background-block","med-green"],"fifth-block");return e.appendChild(t),e.appendChild(n),e.appendChild(i),e.appendChild(r),e.appendChild(s),e}(),a=s.querySelectorAll(".background-block"),l=function(){const e=o([],"fraction"),t=i("frac",N.frac),n=i("bar",N.bar),r=i("tion",N.tion);return e.appendChild(t),e.appendChild(n),e.appendChild(r),e}(),c=l.querySelector("#frac"),d=l.querySelector("#tion"),p=function(){const e=o([],"golf"),t=i("g",N.golf_g);t.style.opacity="0%";const n=i("o",N.golf_o);n.style.opacity="0%";const r=i("l",N.golf_l);r.style.opacity="0%";const s=i("f",N.golf_f);return s.style.opacity="0%",e.appendChild(t),e.appendChild(n),e.appendChild(r),e.appendChild(s),e}(),u=p.querySelectorAll("#golf > img");r.appendChild(s),r.appendChild(l),r.appendChild(p),t.appendChild(r),a.forEach((function(e,t){n(e,t,200,"blockAnimation","0.3s")})),c.style.animation="frac 0.7s ease-out 1 forwards",d.style.animation="tion 0.7s ease-out 1 forwards",u.forEach((function(e,t){n(e,t,200,"golf","0.3s")})),setTimeout((function(){const t=function(){const e=o([],"start"),t=i("button",N.button),n=i("text",N.start);return e.appendChild(t),e.appendChild(n),e}(),n=t.querySelector("#button"),s=t.querySelector("#text");t.addEventListener("click",(function(){e.emit("load",{page:"levelSelect"})})),r.appendChild(t),n.style.animation="button 0.4s ease-out 1 forwards",s.style.animation="button 0.4s ease-out 1 forwards"}),1e3)},transition:function(e){document.querySelectorAll("#background *").forEach((function(e){e.style.transition="transform 1.5s ease-in-out 0.2s",e.style.transform="translate(0px, -2500px)"})),setTimeout((function(){document.querySelector("#background").remove()}),1200)}}})();var O=n(379),R=n.n(O),_=n(795),D=n.n(_),j=n(569),B=n.n(j),F=n(565),X=n.n(F),Y=n(216),G=n.n(Y),J=n(589),U=n.n(J),K=n(822),Q={};Q.styleTagTransform=U(),Q.setAttributes=X(),Q.insert=B().bind(null,"head"),Q.domAPI=D(),Q.insertStyleElement=G(),R()(K.Z,Q),K.Z&&K.Z.locals&&K.Z.locals;const V=function(){const t=document.querySelector("body"),n=document.createElement("div");n.id="level-select",n.style.background=`url(${Z.background}) no-repeat center center fixed`,n.style.backgroundSize="100% 100%",n.style.zIndex="-1",setTimeout((function(){n.style.zIndex="0"}),1e3),function(e){const t=document.createElement("img");t.setAttribute("src",Z.title),t.id="level-select-title",e.appendChild(t)}(n),function(e){const t=document.createElement("img");t.setAttribute("src",Z.settings),t.id="settings-button",e.appendChild(t)}(n),function(t){const n=document.createElement("div");n.id="button-container-outer";const o=document.createElement("div");o.id="button-container";for(let t=1;t<=9;t++){const n=document.createElement("img");n.setAttribute("src",Z[`level${t}`]),n.classList.add("level-button"),1==t?n.addEventListener("click",(function(){e.emit("load",{page:"level1"})})):n.addEventListener("click",(function(){e.emit("load",{page:"demoLevel"})})),o.appendChild(n)}n.appendChild(o),t.appendChild(n)}(n),t.prepend(n)};var ee=n(104),te=n.n(ee);const ne=(t,n=0,o=!1)=>{const i=50,r=n,s=te()();let a=document.documentElement.scrollHeight,l=document.documentElement.scrollWidth,c=o?b(0,Math.floor(a/2)-10-i):b(Math.floor(a/2)+10,a-i),d=b(0,120),p=o,u=0,m=0;const h=document.createElement("div"),f=document.querySelector("#line"),g=document.querySelector("#dashed-line");if(h.style.width="50px",h.style.height="50px",h.style.borderRadius="50%",h.style.position="absolute",h.style.left=`${d}px`,h.style.top=`${c}px`,h.style.zIndex="2",h.className="noselect",r>0&&r<=9){const e=H[`ball${r}`];h.style.background=`no-repeat url(${e})`,h.style.backgroundSize="100%"}else h.textContent=r,h.style.textAlign="center",h.style.fontSize="38px",h.style.background="red",h.style.color="white";function b(e,t){return Math.floor(Math.random()*(t-e))+e}const v=e=>Math.abs(e)<.5,y=(e,t,n,o)=>(e=parseInt(e),t=parseInt(t),n=parseInt(n),o=parseInt(o),Math.sqrt(Math.pow(n-e,2)+Math.pow(o-t,2))),x=()=>{h.style.top=`${c}px`,h.style.left=`${d}px`},w=(e,t,n)=>{const o=d+25,i=c+25,r=Math.atan2(o-e,i-t),s=y(e,t,o,i);0==n?(d+=Math.cos(r)*s*.4,c-=Math.sin(r)*s*.4):(d-=Math.cos(r)*s*.4,c+=Math.sin(r)*s*.4),d+=.15*(e-o),c+=.15*(t-i),x()},E=({cx:t,cy:n,r:o,vx:i,vy:r,id:s})=>{a=document.documentElement.scrollHeight,l=document.documentElement.scrollWidth,t+o+i>l?e.emit("collision",{axis:"x",direction:"negative",id:s}):t-o+i<0&&e.emit("collision",{axis:"x",direction:"positive",id:s}),n+o+r>a?e.emit("collision",{axis:"y",direction:"negative",id:s}):n-o+r<0&&e.emit("collision",{axis:"y",direction:"positive",id:s})},C=({axis:e,direction:t,id:n})=>{n===s&&("x"===e&&"negative"===t&&u>=0||"x"===e&&"positive"===t&&u<=0?u*=-1:("y"===e&&"negative"===t&&m>=0||"y"===e&&"positive"===t&&m<=0)&&(m*=-1))},k=({centerX:e,centerY:t,id:n,intervalId:r,correct:l})=>{if(n!==s)return;clearInterval(r),h.removeEventListener("mousedown",S);const p=d+25,f=c+25,g=y(p,f,e,t);let v;v=p>=e&&f<=t?1:p>=e&&f>=t?0:p<e&&f>=t?1:0,d=e-15*(e-p)/g-25,c=t-15*(t-f)/g-25,x(),n=setInterval(w,30,e,t,v),setTimeout((function(){((e,t,n)=>{clearInterval(e),c=n-25,d=t-25,x()})(n,e,t),l||(c=o?b(0,Math.floor(a/2)-10-i):b(Math.floor(a/2)+10,a-i),d=b(0,120),u=0,m=0,h.addEventListener("mousedown",$),x())}),2e3)},A=e=>{const t=e.pageX,n=e.pageY,o=y(t,n,d+25,c+25);let r,s;o>200?(r=d+25-200*(d+25-t)/o,s=c+25-200*(c+25-n)/o):(r=t,s=n),f.setAttribute("x1",`${r}`),f.setAttribute("y1",`${s}`),f.setAttribute("x2",`${d+25}`),f.setAttribute("y2",`${c+25}`),g.setAttribute("x1",`${d+25}`),g.setAttribute("y1",`${c+25}`),g.setAttribute("x2",""+(2*d+50-r)),g.setAttribute("y2",""+(2*c+i-s))},S=e=>{0==u&&0==m&&(window.addEventListener("mousemove",A),window.addEventListener("mouseup",M))},M=t=>{window.removeEventListener("mousemove",A),window.removeEventListener("mouseup",M);const n=parseInt(f.getAttribute("x2"))-parseInt(f.getAttribute("x1")),o=parseInt(f.getAttribute("y2"))-parseInt(f.getAttribute("y1"));f.setAttribute("x1","0"),f.setAttribute("y1","0"),f.setAttribute("x2","0"),f.setAttribute("y2","0"),g.setAttribute("x1","0"),g.setAttribute("y1","0"),g.setAttribute("x2","0"),g.setAttribute("y2","0"),((e=5*Math.random(),t=Math.sqrt(25-xSpeed**2))=>{u=e,m=t})(n/7,o/7);const i=setInterval((function(){(t=>{d+=u,c+=m,e.emit("ballMove",{cx:d+25,cy:c+25,r:25,vx:u,vy:m,id:s,intervalId:t,number:r}),x(),v(u)&&v(m)?(u=0,m=0,clearInterval(t)):(u/=1.016,m/=1.016)})(i)}),10);e.on("ballMove",E),e.on("collision",C),e.on("hitGoal",k),e.emit("ballReleased")},I=e=>{c=e.pageY-25,d=e.pageX-25,d>=150?d=150:d<0&&(d=0),c<0?c=0:c>a-50&&(c=a-50),p&&c>=Math.floor(a/2)-10-i?c=Math.floor(a/2)-10-i:!p&&c<=Math.floor(a/2)+10&&(c=Math.floor(a/2)+10),x()},L=e=>{window.removeEventListener("mousemove",I),window.removeEventListener("mouseup",L),h.addEventListener("mousedown",S)},$=e=>{window.addEventListener("mousemove",I),window.addEventListener("mouseup",L),h.removeEventListener("mousedown",$)};h.addEventListener("mousedown",$),h.addEventListener("mouseenter",(e=>{h.style.cursor="pointer"})),h.addEventListener("mouseleave",(e=>{h.style.cursor="auto"})),t.appendChild(h)},oe=(t,n=300,o=300,i=0)=>{const r=n,s=o,a=i,l=document.createElement("div");l.style.width="60px",l.style.height="60px",l.style.borderRadius="50%",l.style.backgroundColor="green",l.style.position="absolute",l.style.left=`${s}px`,l.style.top=`${r}px`,l.style.zIndex="1";const c=t=>{const n=t.cx,o=t.cy,i=t.r,a=t.id,l=t.intervalId,p=t.number,u=s+30,m=r+30,h=i+30,f=d(p);var g,b,v,y;g=n,b=o,v=u,y=m,Math.sqrt(Math.pow(v-g,2)+Math.pow(y-b,2))<h-10&&(e.emit("hitGoal",{centerX:u,centerY:m,id:a,intervalId:l,correct:f}),f&&e.off("ballMove",c))},d=e=>a===e;t.appendChild(l),e.on("ballMove",c)},ie=(t,n,o,i,r,s="black")=>{const a=n,l=o,c=i,d=r,p=document.createElement("div");p.style.position="absolute",p.style.backgroundColor=s,p.style.width=`${c}px`,p.style.height=`${d}px`,p.style.left=`${l}px`,p.style.top=`${a}px`,e.on("ballMove",(({cx:t,cy:n,r:o,vx:i,vy:r,id:s})=>{t-o+i<=l+c&&t+o+i>=l&&(n-o+r<a+d&&n-o>a+d?e.emit("collision",{axis:"y",direction:"positive",id:s}):n+o+r>a&&n+o<a&&e.emit("collision",{axis:"y",direction:"negative",id:s})),n-o+r<=a+d&&n+o+r>=a&&(t-o+i<l+c&&t-o>l+c?e.emit("collision",{axis:"x",direction:"positive",id:s}):t+o+i>l&&t+o<l&&e.emit("collision",{axis:"x",direction:"negative",id:s}))})),t.appendChild(p)},re=(()=>{let t=0,n=document.documentElement.scrollHeight,o=document.documentElement.scrollWidth;function i(){t+=1,document.querySelector("#score-display").textContent=`Strokes: ${t}`}return{load:function(){null!=document.querySelector("#demo-level")&&document.querySelector("#demo-level").remove(),n=document.documentElement.scrollHeight,o=document.documentElement.scrollWidth;const r=document.createElement("div");r.id="demo-level",r.style.position="absolute",r.style.width="100%",r.style.height="100%",r.style.overflow="none",r.style.zIndex="-1",document.querySelector("body").prepend(r),setTimeout((function(){r.style.zIndex="0"}),1e3),function(e){const t=document.querySelector("svg")||document.createElementNS("http://www.w3.org/2000/svg","svg"),n=document.querySelector("#line")||document.createElementNS("http://www.w3.org/2000/svg","line");n.id="line",n.setAttribute("x1","0"),n.setAttribute("y1","0"),n.setAttribute("x2","0"),n.setAttribute("y1","0");const o=document.querySelector("#dashed-line")||document.createElementNS("http://www.w3.org/2000/svg","line");o.id="dashed-line",o.setAttribute("x1","0"),o.setAttribute("y1","0"),o.setAttribute("x2","0"),o.setAttribute("y1","0"),t.appendChild(n),t.appendChild(o),e.appendChild(t)}(r),ie(r,Math.floor(n/2)-10,0,o-450,20),ie(r,Math.floor(n/2)-10,o-195,130,20,"blue"),function(e){const t=document.createElement("div");t.style.backgroundColor="#abd6ab",t.style.zIndex="0",t.style.width="200px",t.style.height=Math.floor(n/2)-10+"px",t.style.position="absolute",t.style.top="0px",t.style.left="0px";const o=document.createElement("div");o.style.backgroundColor="#abd6ab",o.style.zIndex="0",o.style.width="200px",o.style.height=Math.ceil(n/2)-10+"px",o.style.position="absolute",o.style.top=`${Math.floor(n/2)+10}px`,o.style.left="0px",e.appendChild(t),e.appendChild(o)}(r),function(e){ne(e,5,!0),ne(e,3,!0),ne(e,2,!0),ne(e,1,!1),ne(e,6,!1),ne(e,7,!1)}(r),oe(r,Math.floor(n/2)-150,o-160,5),oe(r,Math.floor(n/2)+90,o-160,6),function(e){const t=document.createElement("p");t.textContent="10",t.id="top-number",t.style.position="absolute",t.style.fontSize="50px",t.style.top=Math.floor(n/2)-170+"px",t.style.left=o-450+"px",t.style.padding="20px",t.style.border="5px solid black";const i=document.createElement("p");i.textContent="12",i.id="bottom-number",i.style.position="absolute",i.style.fontSize="50px",i.style.top=`${Math.floor(n/2)+70}px`,i.style.left=o-450+"px",i.style.padding="20px",i.style.border="5px solid black";const r=document.createElement("p");r.textContent="=",r.id="equal-sign",r.style.position="absolute",r.style.top=Math.floor(n/2)-65+"px",r.style.left=o-300+"px",r.style.fontSize="100px",e.appendChild(t),e.appendChild(i),e.appendChild(r)}(r),function(e){t=0;const n=document.createElement("p");n.textContent=`Strokes: ${t}`,n.id="score-display",n.style.position="absolute",n.style.top="20px",n.style.right="20px",n.style.fontSize="30px",e.appendChild(n)}(r),e.on("ballReleased",i)}}})(),se=(t,n,o=0,i=!1)=>{const r=o,s=te()();let a,l,c=document.documentElement.scrollHeight,d=document.documentElement.scrollWidth,p=i,u=0,m=0;const h=document.createElement("div");v();const f=document.querySelector("#line"),g=document.querySelector("#dashed-line");if(h.style.width="40px",h.style.height="40px",h.style.borderRadius="50%",h.style.position="absolute",h.style.zIndex="2",h.className="noselect",r>0&&r<=9){const e=H[`ball${r}`];h.style.background=`no-repeat url(${e})`,h.style.backgroundSize="100%"}else h.textContent=r,h.style.textAlign="center",h.style.fontSize="38px",h.style.background="red",h.style.color="white";function b(e,t){return Math.floor(Math.random()*(t-e))+e}function v(){c=document.documentElement.scrollHeight,d=document.documentElement.scrollWidth;const e=.1*c,t=.8*c,n=.1*d;a=p?b(Math.floor(e),Math.floor(e+t/2)-40-5):b(Math.floor(e+t/2)+5,c-e-40),l=b(0,n-40),u=0,m=0,y()}function y(){h.style.top=`${a}px`,h.style.left=`${l}px`}const x=e=>Math.abs(e)<.5,w=(e,t,n,o)=>(e=parseInt(e),t=parseInt(t),n=parseInt(n),o=parseInt(o),Math.sqrt(Math.pow(n-e,2)+Math.pow(o-t,2))),E=(e,t,n)=>{const o=l+20,i=a+20,r=Math.atan2(o-e,i-t),s=w(e,t,o,i);0==n?(l+=Math.cos(r)*s*.4,a-=Math.sin(r)*s*.4):(l-=Math.cos(r)*s*.4,a+=Math.sin(r)*s*.4),l+=.15*(e-o),a+=.15*(t-i),y()},C=({cx:t,cy:n,r:o,vx:i,vy:r,id:s})=>{const a=document.querySelector("#game-container"),l=a.offsetHeight;t+o+i>a.offsetWidth?e.emit("collision",{axis:"x",direction:"negative",id:s}):t-o+i<0&&e.emit("collision",{axis:"x",direction:"positive",id:s}),n+o+r>l?e.emit("collision",{axis:"y",direction:"negative",id:s}):n-o+r<0&&e.emit("collision",{axis:"y",direction:"positive",id:s})},k=({axis:e,direction:t,id:n})=>{n===s&&("x"===e&&"negative"===t&&u>=0||"x"===e&&"positive"===t&&u<=0?u*=-1:("y"===e&&"negative"===t&&m>=0||"y"===e&&"positive"===t&&m<=0)&&(m*=-1))},A=({centerX:t,centerY:o,id:i,intervalId:r,correct:c})=>{if(i!==s)return;clearInterval(r),h.removeEventListener("mousedown",M);const d=l+20,u=a+20,m=w(d,u,t,o);let f;f=d>=t&&u<=o?1:d>=t&&u>=o?0:d<t&&u>=o?1:0,l=t-15*(t-d)/m-20,a=o-15*(o-u)/m-20,y(),i=setInterval(E,30,t,o,f),setTimeout((function(){if(((e,t,n)=>{clearInterval(e),a=n-20,l=t-20,y()})(i,t,o),c)e.off("resetBall",L);else{const e=n.offsetHeight;a=p?e/4-40+20:3*e/4-20,l=40,y()}}),2e3)},S=e=>{c=document.documentElement.scrollHeight,d=document.documentElement.scrollWidth;const t=e.pageX-.125*d,n=e.pageY-.1*c,o=w(t,n,l+20,a+20);let i,r;o>200?(i=l+20-200*(l+20-t)/o,r=a+20-200*(a+20-n)/o):(i=t,r=n),f.setAttribute("x1",`${i}`),f.setAttribute("y1",`${r}`),f.setAttribute("x2",`${l+20}`),f.setAttribute("y2",`${a+20}`),g.setAttribute("x1",`${l+20}`),g.setAttribute("y1",`${a+20}`),g.setAttribute("x2",""+(2*l+40-i)),g.setAttribute("y2",""+(2*a+40-r))},M=e=>{0==u&&0==m&&(window.addEventListener("mousemove",S),window.addEventListener("mouseup",I))},I=t=>{window.removeEventListener("mousemove",S),window.removeEventListener("mouseup",I);const n=parseInt(f.getAttribute("x2"))-parseInt(f.getAttribute("x1")),o=parseInt(f.getAttribute("y2"))-parseInt(f.getAttribute("y1"));f.setAttribute("x1","0"),f.setAttribute("y1","0"),f.setAttribute("x2","0"),f.setAttribute("y2","0"),g.setAttribute("x1","0"),g.setAttribute("y1","0"),g.setAttribute("x2","0"),g.setAttribute("y2","0"),((e=5*Math.random(),t=Math.sqrt(25-xSpeed**2))=>{u=e,m=t})(n/7,o/7);const i=setInterval((function(){(t=>{l+=u,a+=m,e.emit("ballMove",{cx:l+20,cy:a+20,r:20,vx:u,vy:m,id:s,intervalId:t,number:r}),y(),x(u)&&x(m)?(u=0,m=0,clearInterval(t)):(u/=1.016,m/=1.016)})(i)}),10);e.on("ballMove",C),e.on("collision",k),e.on("hitGoal",A),e.emit("ballReleased")},L=({position:e})=>{h.classList.contains(`${e}-ball`)&&(v(),h.remove(),t.appendChild(h),h.removeEventListener("mousedown",M))};h.addEventListener("click",(t=>{const o=n.offsetHeight;p?(e.emit("resetBall",{position:"top"}),setTimeout((function(){h.classList.add("top-ball")}),10),a=o/4-40+20):(e.emit("resetBall",{position:"bottom"}),setTimeout((function(){h.classList.add("bottom-ball")}),10),a=3*o/4-20),l=40,h.remove(),n.appendChild(h),y(),h.addEventListener("mousedown",M)})),h.addEventListener("mouseenter",(e=>{h.style.cursor="pointer"})),h.addEventListener("mouseleave",(e=>{h.style.cursor="auto"})),t.appendChild(h),e.on("resetBall",L)},ae=(t,n,o,i=0)=>{const r=o-23,s=n-23,a=i,l=document.createElement("div");l.style.width="46px",l.style.height="46px",l.style.borderRadius="50%",l.style.backgroundColor="white",l.style.position="absolute",l.style.left=`${s}px`,l.style.top=`${r}px`,l.style.zIndex="1";const c=t=>{const n=t.cx,o=t.cy,i=t.r,a=t.id,l=t.intervalId,p=t.number,u=s+23,m=r+23,h=i+23,f=d(p);var g,b,v,y;g=n,b=o,v=u,y=m,Math.sqrt(Math.pow(v-g,2)+Math.pow(y-b,2))<h-10&&(e.emit("hitGoal",{centerX:u,centerY:m,id:a,intervalId:l,correct:f}),f&&e.off("ballMove",c))},d=e=>a===e;t.appendChild(l),e.on("ballMove",c)},le=(t,n,o,i,r,s="#4b8c46")=>{const a=n,l=o,c=i,d=r,p=document.createElement("div");p.style.position="absolute",p.style.backgroundColor=s,p.style.width=`${c}px`,p.style.height=`${d}px`,p.style.left=`${l}px`,p.style.top=`${a}px`,e.on("ballMove",(({cx:t,cy:n,r:o,vx:i,vy:r,id:s})=>{t-o+i<=l+c&&t+o+i>=l&&(n-o+r<a+d&&n-o>a+d?e.emit("collision",{axis:"y",direction:"positive",id:s}):n+o+r>a&&n+o<a&&e.emit("collision",{axis:"y",direction:"negative",id:s})),n-o+r<=a+d&&n+o+r>=a&&(t-o+i<l+c&&t-o>l+c?e.emit("collision",{axis:"x",direction:"positive",id:s}):t+o+i>l&&t+o<l&&e.emit("collision",{axis:"x",direction:"negative",id:s}))})),t.appendChild(p)};var ce=n(261),de={};de.styleTagTransform=U(),de.setAttributes=X(),de.insert=B().bind(null,"head"),de.domAPI=D(),de.insertStyleElement=G(),R()(ce.Z,de),ce.Z&&ce.Z.locals&&ce.Z.locals;const pe=(()=>{let t=0,n=document.documentElement.scrollHeight,o=document.documentElement.scrollWidth;function i(){const n=document.querySelectorAll(".star");t+=1,document.querySelector("#score-display").textContent=`Strokes: ${t}`,t>5&&n[2].setAttribute("src",P["star-unfilled"]),t>7&&n[1].setAttribute("src",P["star-unfilled"]),t>9&&e.emit("gameOver",{status:"lost"})}function r(){window.removeEventListener("click",r);const e=document.querySelector("#start-popup");e.style.animation="slideOutToBottom 0.5s ease-in-out forwards",e.addEventListener("animationend",(function(){e.remove()}))}return{load:function(){n=document.documentElement.scrollHeight,o=document.documentElement.scrollWidth;const s=document.createElement("div");s.id="outer-container",setTimeout((function(){s.style.zIndex="0"}),1e3),function(e){t=0;const n=document.createElement("p");n.textContent=`Strokes: ${t}`,n.id="score-display",e.appendChild(n)}(s),function(e){const t=document.createElement("img");t.setAttribute("src",P.settings),t.id="settings",e.appendChild(t)}(s),function(e){const t=document.createElement("div");t.id="star-container";const n=document.createElement("img");n.setAttribute("src",P["star-filled"]),n.className="star";const o=document.createElement("img");o.setAttribute("src",P["star-filled"]),o.className="star";const i=document.createElement("img");i.setAttribute("src",P["star-filled"]),i.className="star",t.appendChild(n),t.appendChild(o),t.appendChild(i),e.appendChild(t)}(s),function(e){const t=document.createElement("div");t.id="fraction-container";const n=document.createElement("p");n.textContent="1",n.id="top-number";const o=document.createElement("hr");o.id="fraction-bar";const i=document.createElement("p");i.textContent="4",i.id="bottom-number",t.appendChild(n),t.appendChild(o),t.appendChild(i);const r=document.createElement("equal-sign");r.textContent="=",r.id="equal-sign",e.appendChild(r),e.appendChild(t)}(s),document.querySelector("body").appendChild(s);const a=document.createElement("div");a.id="game-container",function(e){const t=document.querySelector("svg")||document.createElementNS("http://www.w3.org/2000/svg","svg"),n=document.querySelector("#line")||document.createElementNS("http://www.w3.org/2000/svg","line");n.id="line",n.setAttribute("x1","0"),n.setAttribute("y1","0"),n.setAttribute("x2","0"),n.setAttribute("y1","0");const o=document.querySelector("#dashed-line")||document.createElementNS("http://www.w3.org/2000/svg","line");o.id="dashed-line",o.setAttribute("x1","0"),o.setAttribute("y1","0"),o.setAttribute("x2","0"),o.setAttribute("y1","0"),t.appendChild(n),t.appendChild(o),e.appendChild(t)}(a),s.appendChild(a);const l=a.offsetHeight,c=a.offsetWidth;se(s,a,2,!0),se(s,a,3,!0),se(s,a,8,!1),se(s,a,6,!1),ae(a,c-50,l/2-60,2),ae(a,c-50,l/2+60,8),le(a,l/2-5,0,c,10),le(a,0,c/3,50,3*l/10),le(a,l/2-l/3,2*c/3,50,l/3),le(a,l-l/4,2*c/5,70,l/4),le(a,l/2,3*c/5,40,l/3),function(e){const t=document.createElement("img");t.setAttribute("src",P["star-filled"]);const n=document.createElement("div");n.id="start-popup";const o=document.createElement("p");o.textContent="Level 1",o.id="start-popup-title";const i=document.createElement("div");i.classList.add("star-outer-container");const s=document.createElement("div");s.classList.add("star-inner-container"),s.appendChild(t.cloneNode(!0)),s.appendChild(t.cloneNode(!0)),s.appendChild(t.cloneNode(!0)),i.appendChild(s);const a=document.createElement("p");a.textContent="< 5 strokes",i.appendChild(a);const l=document.createElement("div");l.classList.add("star-outer-container");const c=document.createElement("div");c.classList.add("star-inner-container"),c.appendChild(t.cloneNode(!0)),c.appendChild(t.cloneNode(!0)),l.appendChild(c);const d=document.createElement("p");d.textContent="< 7 strokes",l.appendChild(d);const p=document.createElement("div");p.classList.add("star-outer-container");const u=document.createElement("div");u.classList.add("star-inner-container"),u.appendChild(t.cloneNode(!0)),p.appendChild(u);const m=document.createElement("p");m.textContent="< 9 strokes",p.appendChild(m);const h=document.createElement("button");h.textContent="Got it!",h.id="start-popup-button",n.appendChild(o),n.appendChild(i),n.appendChild(l),n.appendChild(p),n.appendChild(h),e.appendChild(n),setTimeout((function(){window.addEventListener("click",r)}),50)}(s),e.on("ballReleased",i)}}})();(()=>{let t="";const n=e=>{if(t!=e.page)switch("titlePage"==t?W.transition():null!=document.querySelectorAll("body *")&&document.querySelectorAll("body *").forEach((function(e){e.remove()})),e.page){case"titlePage":t="titlePage",history.pushState({pageID:"home"},"home","#home"),W.load();break;case"levelSelect":t="levelSelect",history.pushState({pageID:"levelSelect"},"levelSelect","#levelSelect"),V();break;case"demoLevel":t="demoLevel",history.pushState({pageID:"demoLevel"},"demoLevel","#demoLevel"),re.load();break;case"level1":t="level1",history.pushState({pageID:"level1"},"level1","#level1"),pe.load()}};window.onpopstate=function(){null!=history.state&&("home"===history.state.pageID?n({page:"titlePage"}):"demoLevel"===history.state.pageID?n({page:"demoLevel"}):"levelSelect"===history.state.pageID&&n({page:"levelSelect"}))},e.on("load",n)})();var ue=n(28),me={};me.styleTagTransform=U(),me.setAttributes=X(),me.insert=B().bind(null,"head"),me.domAPI=D(),me.insertStyleElement=G(),R()(ue.Z,me),ue.Z&&ue.Z.locals&&ue.Z.locals,e.emit("load",{page:"titlePage"})})()})();