(()=>{var e={822:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,"#level-select{\n    width: 100%;\n    height: 100%;\n    position: absolute;\n}\n\n#level-select-title{\n    display: block;\n    width: 55%;\n    margin: 0 auto 0 auto;\n    padding-top: 20px;\n}\n\n#button-container-outer{\n    width: 55%;\n    min-width: 500px;\n    max-height: 70%;\n    position: absolute;\n    left: 50%;\n    bottom: 5%;\n}\n\n#button-container{\n    width: 100%;\n    max-width: 100%;\n    max-height: 100%;\n    position: relative;\n    left: -50%;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 45px;\n}\n\n@media(max-width: 800px){\n    #button-container{\n        gap: 20px;\n    }\n}\n\n.level-button{\n    width: 17%;\n    max-height: 30%;\n}\n\n.level-button:hover{\n    transform: scale(1.05);\n    cursor: pointer;\n}\n\n#settings-button{\n    position: absolute;\n    top: 20px;\n    right: 20px;\n    width: 5%;\n}\n\n#settings-button:hover{\n    transform: scale(1.05);\n    cursor: pointer;\n}",""]);const i=r},28:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,"*{\n    margin: 0;\n    padding: 0\n}\n\nhtml{\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n}\n\nbody{\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n}\n\nmain{\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n}\n\n#background{\n    width: 100vw;\n    height: 100vh;\n    overflow: hidden;\n}\n\n.background-block{\n    position: relative;\n    width: 150rem;\n    height: 22.5rem;\n    opacity: 0%;\n}\n\n.dark-green{\n    background-color: #014800;\n}\n\n.med-green{\n    background-color: #05833a;\n}\n\n.light-green{\n    background-color: #80db58;\n}\n\n#first-block{\n    transform: rotate(-28deg);\n    margin-top: 500px;\n    margin-left: 800px;\n}\n\n#second-block{\n    transform: rotate(20deg);\n    margin-top: 600px;\n    margin-left: 500px;\n}\n\n#third-block{\n    transform: rotate(-28deg);\n    margin-top: 500px;\n    margin-left: 300px;\n}\n\n#fourth-block{\n    transform: rotate(-50deg);\n}\n\n#fifth-block{\n    transform: rotate(-28deg);\n}\n\n@keyframes blockAnimation{\n\n    from{\n        opacity: 0%;\n    }\n\n    to{\n        margin-top: 0;\n        margin-left: 0;\n        margin-bottom: 0;\n        margin-right: 0;\n        transform: rotate(-28deg) translate(-18.75rem, -37.5rem);\n        opacity: 100%;\n    }\n\n}\n\n#fraction{\n    position: absolute;\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n    top: 8%;\n    text-align: center;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    width: 60%;\n}\n\n#frac{\n    position: absolute;\n    width: 45%;\n    height: 70%;\n    bottom: 40%;\n    left: 0;\n    align-self: start;\n}\n\n#bar{\n    width: 20%;\n    height: 50%;\n    position: relative;\n    left: 40%;\n    top: 15%;\n    align-self: center;\n}\n\n#tion{\n    position: absolute;\n    width: 45%;\n    height: 70%;\n    right: 0;\n    top: 40%;\n}\n\n#frac:hover{\n    animation: frac 0.3s ease-out 1 forwards;\n}\n\n#tion:hover{\n    animation: tion 0.3s ease-out 1 forwards;\n}\n\n@keyframes frac{\n\n    from{\n        opacity: 0%;\n        left: -8%;\n    }\n\n    to{\n        opacity: 100%;\n        left: 0;\n    }\n\n}\n\n@keyframes tion{\n\n    from{\n        opacity: 0%;\n        right: 8%;\n    }\n\n    to{\n        opacity: 100%;\n        right: 0;\n    }\n\n}\n\n#golf{\n    position: absolute;\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 3%;\n    top: 47%;\n    text-align: center;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    width: 37%;\n    height: 27%;\n}\n\n#golf img{\n    width: 25%;\n    height: 100%;\n}\n\n#golf :not(:last-child){\n    margin-right: -2%;\n}\n\n#golf #l{\n    margin-left: -1%;\n}\n\n#golf img:hover{\n    animation: golf 0.4s ease-out 1 forwards;\n}\n\n@keyframes golf{\n\n    0%{\n        margin-top: -10%;\n        opacity: 0%;\n    }\n\n    40%{\n        margin-top: 5%;\n        opacity: 100%;\n    }\n\n    60%{\n        margin-top: -3%;\n    }\n\n    70%{\n        margin-top: 2%;\n    }\n\n    85%{\n        margin-top: -1%;\n    }\n\n    100%{\n        margin-top: 0%;\n        opacity: 100%;\n    }\n\n}\n\n#start{\n    position: absolute;\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 8%;\n    top: 76%;\n    text-align: center;\n    width: 34%;\n    height: 22%;\n}\n\n#start #button{\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n}\n\n@keyframes button{\n    from{\n        top: 15%;\n        opacity: 0%;\n    }\n\n    to{\n        top: 0%;\n        opacity: 100%;\n    }\n}\n\n#start #text{\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n}\n\n#start:hover{\n    cursor: pointer;\n    top: 75%;\n    width: 36%;\n    height: 24%;\n}\n\n.noselect {\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */\n    -khtml-user-select: none; /* Konqueror HTML */\n    -moz-user-select: none; /* Old versions of Firefox */\n    -ms-user-select: none; /* Internet Explorer/Edge */\n    user-select: none; /* Non-prefixed version, currently\n                          supported by Chrome, Edge, Opera and Firefox */\n}\n\nsvg{\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n    min-height: 100%;\n}\n\nline{\n    stroke-width: 5;\n    stroke: black;\n    z-index: 2;\n}\n\n#dashed-line{\n    stroke-dasharray: 4;\n    z-index: 2;\n}",""]);const i=r},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(r[s]=!0)}for(var l=0;l<e.length;l++){var a=[].concat(e[l]);o&&r[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),t.push(a))}},t}},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},s=[],l=0;l<e.length;l++){var a=e[l],c=o.base?a[0]+o.base:a[0],d=i[c]||0,p="".concat(c," ").concat(d);i[c]=d+1;var u=n(p),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(t[u].references++,t[u].updater(f)):t.push({identifier:p,updater:r(f,o),references:1}),s.push(p)}return s}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var l=n(i[s]);t[l].references--}for(var a=o(e,r),c=0;c<i.length;c++){var d=n(i[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=a}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},104:e=>{var t="undefined"!=typeof process&&process.pid?process.pid.toString(36):"";function n(){var e=Date.now(),t=n.last||e;return n.last=e>t?e:t+1}e.exports=e.exports.default=function(e,o){return(e||"")+""+t+n().toString(36)+(o||"")},e.exports.process=function(e,o){return(e||"")+t+n().toString(36)+(o||"")},e.exports.time=function(e,t){return(e||"")+n().toString(36)+(t||"")}},728:(e,t,n)=>{"use strict";e.exports=n.p+"b475fd2b71206aed1c73.png"},772:(e,t,n)=>{"use strict";e.exports=n.p+"2d9a93ecb6a5b79a0623.png"},53:(e,t,n)=>{"use strict";e.exports=n.p+"b4bed0716a57aef6828e.png"},243:(e,t,n)=>{"use strict";e.exports=n.p+"5d092289809d07378a9e.png"},835:(e,t,n)=>{"use strict";e.exports=n.p+"c561a577d9112d3bfd9c.png"},593:(e,t,n)=>{"use strict";e.exports=n.p+"3fb381086db700587b69.png"},418:(e,t,n)=>{"use strict";e.exports=n.p+"64176f7c483d3c53c2b5.png"},827:(e,t,n)=>{"use strict";e.exports=n.p+"7e3d8a3009d59ee2d760.png"},327:(e,t,n)=>{"use strict";e.exports=n.p+"28294481e00e28d9be3d.png"},259:(e,t,n)=>{"use strict";e.exports=n.p+"6bb1f97922a5d4edba43.png"},527:(e,t,n)=>{"use strict";e.exports=n.p+"5845703f03031d4a714d.png"},368:(e,t,n)=>{"use strict";e.exports=n.p+"6b25688b397f715596e8.png"},536:(e,t,n)=>{"use strict";e.exports=n.p+"912143698ae40a398334.png"},7:(e,t,n)=>{"use strict";e.exports=n.p+"bad3fb39ebd32b934cf0.png"},134:(e,t,n)=>{"use strict";e.exports=n.p+"e14d8220ee6a672afd11.png"},424:(e,t,n)=>{"use strict";e.exports=n.p+"5d7a63b18e9985a9fb8e.png"},984:(e,t,n)=>{"use strict";e.exports=n.p+"0f1911dbfa83bf74ab26.png"},145:(e,t,n)=>{"use strict";e.exports=n.p+"387d5b7ac8b85225f293.png"},467:(e,t,n)=>{"use strict";e.exports=n.p+"5f3afd1c7776a3015819.png"},214:(e,t,n)=>{"use strict";e.exports=n.p+"68a16ac485fc96e5e9ef.png"},523:(e,t,n)=>{"use strict";e.exports=n.p+"b3d0a306f257fff2d220.png"},59:(e,t,n)=>{"use strict";e.exports=n.p+"30fbd70f7202273ebe93.png"},241:(e,t,n)=>{"use strict";e.exports=n.p+"ce4f3f0dd42c60ae02b7.png"},778:(e,t,n)=>{"use strict";e.exports=n.p+"2b65b55f15ab50dd84bd.png"},846:(e,t,n)=>{"use strict";e.exports=n.p+"171443f4183ce931421a.png"},648:(e,t,n)=>{"use strict";e.exports=n.p+"b745555c1097c8f116ed.png"},962:(e,t,n)=>{"use strict";e.exports=n.p+"7216ac7714ceaa07f667.png"},393:(e,t,n)=>{"use strict";e.exports=n.p+"891db67bca13bf41c229.png"},445:(e,t,n)=>{"use strict";e.exports=n.p+"746f1740aaebb7ed370b.png"},29:(e,t,n)=>{"use strict";e.exports=n.p+"e1a8bb83e6f202f7882f.png"},581:(e,t,n)=>{"use strict";e.exports=n.p+"89ad9489aac0059deaa3.png"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{"use strict";const e={events:{},on:function(e,t){this.events[e]=this.events[e]||[],this.events[e].push(t)},off:function(e,t){if(this.events[e])for(var n=0;n<this.events[e].length;n++)if(this.events[e][n]===t){this.events[e].splice(n,1);break}},emit:function(e,t){this.events[e]&&this.events[e].forEach((function(e){e(t)}))}};var t=n(728),o=n(772),r=n(53),i=n(243),s=n(835),l=n(593),a=n(418),c=n(827),d=n(327),p=n(368),u=n(259),f=n(581),h=n(134),m=n(984),g=n(424),b=n(7),y=n(29),v=n(527),x=(n(536),n(962)),w=n(145),k=n(467),E=n(214),S=n(523),C=n(59),A=n(241),M=n(778),I=n(846),L=n(648),q=n(393),$=n(445);const T={frac:p,bar:u,tion:f,golf_g:h,golf_o:m,golf_l:g,golf_f:b,start:y,button:v},z={ball1:t,ball2:o,ball3:r,ball4:i,ball5:s,ball6:l,ball7:a,ball8:c,ball9:d},P={background:x,title:q,settings:$,level1:w,level2:k,level3:E,level4:S,level5:C,level6:A,level7:M,level8:I,level9:L},D=(()=>{const t=document.querySelector("body");function n(e,t,n,o,r){setTimeout((function(){e.style.animation=`${o} ${r} ease-out 1 forwards`}),n*t)}function o(t){document.querySelectorAll("#background *").forEach((function(e){e.style.transition="transform 1.5s ease-in-out 0.2s",e.style.transform="translate(0px, -2500px)"})),setTimeout((function(){document.querySelector("#background").remove()}),1200),e.emit("load",{page:"levelSelect"})}function r(e,t){const n=document.createElement("div");return e.forEach((function(e){n.classList.add(e)})),n.id=t,n}function i(e,t){const n=document.createElement("img");return n.id=e,n.setAttribute("src",t),n}return{load:function(){null!=document.querySelector("#background")&&(document.querySelector("#background").remove(),docWidth=document.documentElement.scrollWidth);const e=r([],"background"),s=function(){const e=r([],"blocks"),t=r(["background-block","dark-green"],"first-block"),n=r(["background-block","med-green"],"second-block"),o=r(["background-block","light-green"],"third-block"),i=r(["background-block","dark-green"],"fourth-block"),s=r(["background-block","med-green"],"fifth-block");return e.appendChild(t),e.appendChild(n),e.appendChild(o),e.appendChild(i),e.appendChild(s),e}(),l=s.querySelectorAll(".background-block"),a=function(){const e=r([],"fraction"),t=i("frac",T.frac),n=i("bar",T.bar),o=i("tion",T.tion);return e.appendChild(t),e.appendChild(n),e.appendChild(o),e}(),c=a.querySelector("#frac"),d=a.querySelector("#tion"),p=function(){const e=r([],"golf"),t=i("g",T.golf_g);t.style.opacity="0%";const n=i("o",T.golf_o);n.style.opacity="0%";const o=i("l",T.golf_l);o.style.opacity="0%";const s=i("f",T.golf_f);return s.style.opacity="0%",e.appendChild(t),e.appendChild(n),e.appendChild(o),e.appendChild(s),e}(),u=p.querySelectorAll("#golf > img");e.appendChild(s),e.appendChild(a),e.appendChild(p),t.appendChild(e),l.forEach((function(e,t){n(e,t,200,"blockAnimation","0.3s")})),c.style.animation="frac 0.7s ease-out 1 forwards",d.style.animation="tion 0.7s ease-out 1 forwards",u.forEach((function(e,t){n(e,t,200,"golf","0.3s")})),setTimeout((function(){const t=function(){const e=r([],"start"),t=i("button",T.button),n=i("text",T.start);return e.appendChild(t),e.appendChild(n),e}(),n=t.querySelector("#button"),s=t.querySelector("#text");t.addEventListener("click",o),e.appendChild(t),n.style.animation="button 0.4s ease-out 1 forwards",s.style.animation="button 0.4s ease-out 1 forwards"}),1e3)}}})();var N=n(379),Z=n.n(N),_=n(795),j=n.n(_),H=n(569),O=n.n(H),R=n(565),W=n.n(R),F=n(216),X=n.n(F),Y=n(589),G=n.n(Y),U=n(822),B={};B.styleTagTransform=G(),B.setAttributes=W(),B.insert=O().bind(null,"head"),B.domAPI=j(),B.insertStyleElement=X(),Z()(U.Z,B),U.Z&&U.Z.locals&&U.Z.locals;const J=function(){const t=document.querySelector("body"),n=document.createElement("div");n.id="level-select",n.style.background=`url(${P.background}) no-repeat center center fixed`,n.style.backgroundSize="100% 100%",n.style.zIndex="-1",setTimeout((function(){n.style.zIndex="0"}),1e3),function(e){const t=document.createElement("img");t.setAttribute("src",P.title),t.id="level-select-title",e.appendChild(t)}(n),function(e){const t=document.createElement("img");t.setAttribute("src",P.settings),t.id="settings-button",e.appendChild(t)}(n),function(t){const n=document.createElement("div");n.id="button-container-outer";const o=document.createElement("div");o.id="button-container";for(let t=1;t<=9;t++){const n=document.createElement("img");n.setAttribute("src",P[`level${t}`]),n.classList.add("level-button"),n.addEventListener("click",(function(){e.emit("load",{page:"demoLevel"}),document.querySelector("#level-select").remove()})),o.appendChild(n)}n.appendChild(o),t.appendChild(n)}(n),t.prepend(n)};var K=n(104),Q=n.n(K);const V=(t,n=0,o=!1)=>{const r=50,i=n,s=Q()();let l=document.documentElement.scrollHeight,a=document.documentElement.scrollWidth,c=o?b(0,Math.floor(l/2)-10-r):b(Math.floor(l/2)+10,l-r),d=b(0,120),p=o,u=0,f=0;const h=document.createElement("div"),m=document.querySelector("#line"),g=document.querySelector("#dashed-line");if(h.style.width="50px",h.style.height="50px",h.style.borderRadius="50%",h.style.position="absolute",h.style.left=`${d}px`,h.style.top=`${c}px`,h.style.zIndex="2",h.className="noselect",i>0&&i<=9){const e=z[`ball${i}`];h.style.background=`no-repeat url(${e})`,h.style.backgroundSize="100%"}else h.textContent=i,h.style.textAlign="center",h.style.fontSize="38px",h.style.background="red",h.style.color="white";function b(e,t){return Math.floor(Math.random()*(t-e))+e}const y=e=>Math.abs(e)<.5,v=(e,t,n,o)=>(e=parseInt(e),t=parseInt(t),n=parseInt(n),o=parseInt(o),Math.sqrt(Math.pow(n-e,2)+Math.pow(o-t,2))),x=()=>{h.style.top=`${c}px`,h.style.left=`${d}px`},w=(e,t,n)=>{const o=d+25,r=c+25,i=Math.atan2(o-e,r-t),s=v(e,t,o,r);0==n?(d+=Math.cos(i)*s*.4,c-=Math.sin(i)*s*.4):(d-=Math.cos(i)*s*.4,c+=Math.sin(i)*s*.4),d+=.15*(e-o),c+=.15*(t-r),x()},k=({cx:t,cy:n,r:o,vx:r,vy:i,id:s})=>{l=document.documentElement.scrollHeight,a=document.documentElement.scrollWidth,t+o+r>a?e.emit("collision",{axis:"x",direction:"negative",id:s}):t-o+r<0&&e.emit("collision",{axis:"x",direction:"positive",id:s}),n+o+i>l?e.emit("collision",{axis:"y",direction:"negative",id:s}):n-o+i<0&&e.emit("collision",{axis:"y",direction:"positive",id:s})},E=({axis:e,direction:t,id:n})=>{n===s&&("x"===e&&"negative"===t&&u>=0||"x"===e&&"positive"===t&&u<=0?u*=-1:("y"===e&&"negative"===t&&f>=0||"y"===e&&"positive"===t&&f<=0)&&(f*=-1))},S=({centerX:e,centerY:t,id:n,intervalId:i,correct:a})=>{if(n!==s)return;clearInterval(i),h.removeEventListener("mousedown",A);const p=d+25,m=c+25,g=v(p,m,e,t);let y;y=p>=e&&m<=t?1:p>=e&&m>=t?0:p<e&&m>=t?1:0,d=e-15*(e-p)/g-25,c=t-15*(t-m)/g-25,x(),n=setInterval(w,30,e,t,y),setTimeout((function(){((e,t,n)=>{clearInterval(e),c=n-25,d=t-25,x()})(n,e,t),a||(c=o?b(0,Math.floor(l/2)-10-r):b(Math.floor(l/2)+10,l-r),d=b(0,120),u=0,f=0,h.addEventListener("mousedown",q),x())}),2e3)},C=e=>{const t=e.pageX,n=e.pageY,o=v(t,n,d+25,c+25);let i,s;o>200?(i=d+25-200*(d+25-t)/o,s=c+25-200*(c+25-n)/o):(i=t,s=n),m.setAttribute("x1",`${i}`),m.setAttribute("y1",`${s}`),m.setAttribute("x2",`${d+25}`),m.setAttribute("y2",`${c+25}`),g.setAttribute("x1",`${d+25}`),g.setAttribute("y1",`${c+25}`),g.setAttribute("x2",""+(2*d+50-i)),g.setAttribute("y2",""+(2*c+r-s))},A=e=>{0==u&&0==f&&(window.addEventListener("mousemove",C),window.addEventListener("mouseup",M))},M=t=>{window.removeEventListener("mousemove",C),window.removeEventListener("mouseup",M);const n=parseInt(m.getAttribute("x2"))-parseInt(m.getAttribute("x1")),o=parseInt(m.getAttribute("y2"))-parseInt(m.getAttribute("y1"));m.setAttribute("x1","0"),m.setAttribute("y1","0"),m.setAttribute("x2","0"),m.setAttribute("y2","0"),g.setAttribute("x1","0"),g.setAttribute("y1","0"),g.setAttribute("x2","0"),g.setAttribute("y2","0"),((e=5*Math.random(),t=Math.sqrt(25-xSpeed**2))=>{u=e,f=t})(n/7,o/7);const r=setInterval((function(){(t=>{d+=u,c+=f,e.emit("ballMove",{cx:d+25,cy:c+25,r:25,vx:u,vy:f,id:s,intervalId:t,number:i}),x(),y(u)&&y(f)?(u=0,f=0,clearInterval(t)):(u/=1.016,f/=1.016)})(r)}),10);e.on("ballMove",k),e.on("collision",E),e.on("hitGoal",S),e.emit("ballReleased")},I=e=>{c=e.pageY-25,d=e.pageX-25,d>=150?d=150:d<0&&(d=0),c<0?c=0:c>l-50&&(c=l-50),p&&c>=Math.floor(l/2)-10-r?c=Math.floor(l/2)-10-r:!p&&c<=Math.floor(l/2)+10&&(c=Math.floor(l/2)+10),x()},L=e=>{window.removeEventListener("mousemove",I),window.removeEventListener("mouseup",L),h.addEventListener("mousedown",A)},q=e=>{window.addEventListener("mousemove",I),window.addEventListener("mouseup",L),h.removeEventListener("mousedown",q)};h.addEventListener("mousedown",q),h.addEventListener("mouseenter",(e=>{h.style.cursor="pointer"})),h.addEventListener("mouseleave",(e=>{h.style.cursor="auto"})),t.appendChild(h)},ee=(t,n=300,o=300,r=0)=>{const i=n,s=o,l=r,a=document.createElement("div");a.style.width="60px",a.style.height="60px",a.style.borderRadius="50%",a.style.backgroundColor="green",a.style.position="absolute",a.style.left=`${s}px`,a.style.top=`${i}px`,a.style.zIndex="1";const c=t=>{const n=t.cx,o=t.cy,r=t.r,l=t.id,a=t.intervalId,p=t.number,u=s+30,f=i+30,h=r+30,m=d(p);var g,b,y,v;g=n,b=o,y=u,v=f,Math.sqrt(Math.pow(y-g,2)+Math.pow(v-b,2))<h-10&&(e.emit("hitGoal",{centerX:u,centerY:f,id:l,intervalId:a,correct:m}),m&&e.off("ballMove",c))},d=e=>l===e;t.appendChild(a),e.on("ballMove",c)},te=(t,n,o,r,i,s="black")=>{const l=n,a=o,c=r,d=i,p=document.createElement("div");p.style.position="absolute",p.style.backgroundColor=s,p.style.width=`${c}px`,p.style.height=`${d}px`,p.style.left=`${a}px`,p.style.top=`${l}px`,e.on("ballMove",(({cx:t,cy:n,r:o,vx:r,vy:i,id:s})=>{t-o+r<=a+c&&t+o+r>=a&&(n-o+i<l+d&&n-o>l+d?e.emit("collision",{axis:"y",direction:"positive",id:s}):n+o+i>l&&n+o<l&&e.emit("collision",{axis:"y",direction:"negative",id:s})),n-o+i<=l+d&&n+o+i>=l&&(t-o+r<a+c&&t-o>a+c?e.emit("collision",{axis:"x",direction:"positive",id:s}):t+o+r>a&&t+o<a&&e.emit("collision",{axis:"x",direction:"negative",id:s}))})),t.appendChild(p)},ne=(()=>{let t=0,n=document.documentElement.scrollHeight,o=document.documentElement.scrollWidth;function r(){t+=1,document.querySelector("#score-display").textContent=`Pars: ${t}`}return{load:function(){null!=document.querySelector("#demo-level")&&document.querySelector("#demo-level").remove(),n=document.documentElement.scrollHeight,o=document.documentElement.scrollWidth;const i=document.createElement("div");i.id="demo-level",i.style.position="absolute",i.style.width="100%",i.style.height="100%",i.style.overflow="none",i.style.zIndex="-1",document.querySelector("body").prepend(i),setTimeout((function(){i.style.zIndex="0"}),1e3),function(e){const t=document.querySelector("svg")||document.createElementNS("http://www.w3.org/2000/svg","svg"),n=document.querySelector("#line")||document.createElementNS("http://www.w3.org/2000/svg","line");n.id="line",n.setAttribute("x1","0"),n.setAttribute("y1","0"),n.setAttribute("x2","0"),n.setAttribute("y1","0");const o=document.querySelector("#dashed-line")||document.createElementNS("http://www.w3.org/2000/svg","line");o.id="dashed-line",o.setAttribute("x1","0"),o.setAttribute("y1","0"),o.setAttribute("x2","0"),o.setAttribute("y1","0"),t.appendChild(n),t.appendChild(o),e.appendChild(t)}(i),te(i,Math.floor(n/2)-10,0,o-450,20),te(i,Math.floor(n/2)-10,o-195,130,20,"blue"),function(e){const t=document.createElement("div");t.style.backgroundColor="green",t.style.zIndex="-1",t.style.width="200px",t.style.height=Math.floor(n/2)-10+"px",t.style.position="absolute",t.style.top="0px",t.style.left="0px";const o=document.createElement("div");o.style.backgroundColor="green",o.style.zIndex="-1",o.style.width="200px",o.style.height=Math.ceil(n/2)-10+"px",o.style.position="absolute",o.style.top=`${Math.floor(n/2)+10}px`,o.style.left="0px",e.appendChild(t),e.appendChild(o)}(i),function(e){V(e,5,!0),V(e,3,!0),V(e,2,!0),V(e,1,!1),V(e,6,!1),V(e,7,!1)}(i),ee(i,Math.floor(n/2)-150,o-160,5),ee(i,Math.floor(n/2)+90,o-160,6),function(e){const t=document.createElement("p");t.textContent="10",t.id="top-number",t.style.position="absolute",t.style.fontSize="50px",t.style.top=Math.floor(n/2)-170+"px",t.style.left=o-450+"px",t.style.padding="20px",t.style.border="5px solid black";const r=document.createElement("p");r.textContent="12",r.id="bottom-number",r.style.position="absolute",r.style.fontSize="50px",r.style.top=`${Math.floor(n/2)+70}px`,r.style.left=o-450+"px",r.style.padding="20px",r.style.border="5px solid black";const i=document.createElement("p");i.textContent="=",i.id="equal-sign",i.style.position="absolute",i.style.top=Math.floor(n/2)-65+"px",i.style.left=o-300+"px",i.style.fontSize="100px",e.appendChild(t),e.appendChild(r),e.appendChild(i)}(i),function(e){t=0;const n=document.createElement("p");n.textContent=`Pars: ${t}`,n.id="score-display",n.style.position="absolute",n.style.top="20px",n.style.right="20px",n.style.fontSize="30px",e.appendChild(n)}(i),e.on("ballReleased",r)}}})();(()=>{const t=e=>{switch(e.page){case"titlePage":document.querySelectorAll("body *").forEach((function(e){e.remove()})),history.pushState({pageID:"home"},"home","#home"),D.load();break;case"levelSelect":history.pushState({pageID:"levelSelect"},"levelSelect","#levelSelect"),J();break;case"demoLevel":history.pushState({pageID:"demoLevel"},"demoLevel","#demoLevel"),ne.load()}};window.onpopstate=function(){console.log(history.state),console.log(history.state.pageID),"home"===history.state.pageID?t({page:"titlePage"}):"demoLevel"===history.state.pageID?t({page:"demoLevel"}):"levelSelect"===history.state.pageID&&t({page:"levelSelect"})},window.onload=function(){console.log("Dom has loaded");let e=window.location.hash;console.log(e),"home"===e?t({page:"titlePage"}):"demoLevel"===e?t({page:"demoLevel"}):"levelSelect"===e&&t({page:"levelSelect"})},e.on("load",t)})();var oe=n(28),re={};re.styleTagTransform=G(),re.setAttributes=W(),re.insert=O().bind(null,"head"),re.domAPI=j(),re.insertStyleElement=X(),Z()(oe.Z,re),oe.Z&&oe.Z.locals&&oe.Z.locals,e.emit("load",{page:"titlePage"})})()})();