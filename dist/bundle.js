(()=>{var t={28:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var o=n(645),r=n.n(o)()((function(t){return t[1]}));r.push([t.id,"*{\n    margin: 0;\n    padding: 0\n}\n\nhtml{\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n}\n\nbody{\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n}\n\nmain{\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n}\n\n#background{\n    width: 100vw;\n    height: 100vh;\n    overflow: hidden;\n}\n\n.background-block{\n    width: 150rem;\n    height: 22.5rem;\n    opacity: 0%;\n}\n\n.dark-green{\n    background-color: #014800;\n}\n\n.med-green{\n    background-color: #05833a;\n}\n\n.light-green{\n    background-color: #80db58;\n}\n\n#first-block{\n    transform: rotate(-28deg);\n    margin-top: 500px;\n    margin-left: 800px;\n}\n\n#second-block{\n    transform: rotate(20deg);\n    margin-top: 600px;\n    margin-left: 500px;\n}\n\n#third-block{\n    transform: rotate(-28deg);\n    margin-top: 500px;\n    margin-left: 300px;\n}\n\n#fourth-block{\n    transform: rotate(-50deg);\n}\n\n#fifth-block{\n    transform: rotate(-28deg);\n}\n\n@keyframes blockAnimation{\n\n    from{\n        opacity: 0%;\n    }\n\n    to{\n        margin-top: 0;\n        margin-left: 0;\n        margin-bottom: 0;\n        margin-right: 0;\n        transform: rotate(-28deg) translate(-18.75rem, -37.5rem);\n        opacity: 100%;\n    }\n\n}\n\n#fraction{\n    position: absolute;\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n    top: 8%;\n    text-align: center;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    width: 60%;\n}\n\n#frac{\n    position: absolute;\n    width: 45%;\n    height: 70%;\n    bottom: 40%;\n    left: 0;\n    align-self: start;\n}\n\n#bar{\n    width: 20%;\n    height: 50%;\n    position: relative;\n    left: 40%;\n    top: 15%;\n    align-self: center;\n}\n\n#tion{\n    position: absolute;\n    width: 45%;\n    height: 70%;\n    right: 0;\n    top: 40%;\n}\n\n#frac:hover{\n    animation: frac 0.3s ease-out 1 forwards;\n}\n\n#tion:hover{\n    animation: tion 0.3s ease-out 1 forwards;\n}\n\n@keyframes frac{\n\n    from{\n        opacity: 0%;\n        left: -8%;\n    }\n\n    to{\n        opacity: 100%;\n        left: 0;\n    }\n\n}\n\n@keyframes tion{\n\n    from{\n        opacity: 0%;\n        right: 8%;\n    }\n\n    to{\n        opacity: 100%;\n        right: 0;\n    }\n\n}\n\n#golf{\n    position: absolute;\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 3%;\n    top: 47%;\n    text-align: center;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    width: 37%;\n    height: 27%;\n}\n\n#golf img{\n    width: 25%;\n    height: 100%;\n}\n\n#golf :not(:last-child){\n    margin-right: -2%;\n}\n\n#golf #l{\n    margin-left: -1%;\n}\n\n#golf img:hover{\n    animation: golf 0.4s ease-out 1 forwards;\n}\n\n@keyframes golf{\n\n    0%{\n        margin-top: -10%;\n        opacity: 0%;\n    }\n\n    40%{\n        margin-top: 5%;\n        opacity: 100%;\n    }\n\n    60%{\n        margin-top: -3%;\n    }\n\n    70%{\n        margin-top: 2%;\n    }\n\n    85%{\n        margin-top: -1%;\n    }\n\n    100%{\n        margin-top: 0%;\n        opacity: 100%;\n    }\n\n}\n\n#start{\n    position: absolute;\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 8%;\n    top: 76%;\n    text-align: center;\n    width: 34%;\n    height: 22%;\n}\n\n#start #button{\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n}\n\n@keyframes button{\n    from{\n        top: 15%;\n        opacity: 0%;\n    }\n\n    to{\n        top: 0%;\n        opacity: 100%;\n    }\n}\n\n#start #text{\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n}\n\n#start:hover{\n    cursor: pointer;\n    top: 75%;\n    width: 36%;\n    height: 24%;\n}\n\n.noselect {\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */\n    -khtml-user-select: none; /* Konqueror HTML */\n    -moz-user-select: none; /* Old versions of Firefox */\n    -ms-user-select: none; /* Internet Explorer/Edge */\n    user-select: none; /* Non-prefixed version, currently\n                          supported by Chrome, Edge, Opera and Firefox */\n}\n\nsvg{\nposition: absolute;\nwidth: 100%;\nheight: 100%;\nz-index: 1;\nmin-height: 100%;\n}\n\nline{\nstroke-width: 5;\nstroke: black;\nz-index: 2;\n}\n\n#dashed-line{\nstroke-dasharray: 4;\nz-index: 2;\n}",""]);const i=r},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,o){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(r[s]=!0)}for(var a=0;a<t.length;a++){var l=[].concat(t[a]);o&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),e.push(l))}},e}},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var i={},s=[],a=0;a<t.length;a++){var l=t[a],c=o.base?l[0]+o.base:l[0],d=i[c]||0,u="".concat(c," ").concat(d);i[c]=d+1;var p=n(u),f={css:l[1],media:l[2],sourceMap:l[3]};-1!==p?(e[p].references++,e[p].updater(f)):e.push({identifier:u,updater:r(f,o),references:1}),s.push(u)}return s}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var i=o(t=t||[],r=r||{});return function(t){t=t||[];for(var s=0;s<i.length;s++){var a=n(i[s]);e[a].references--}for(var l=o(t,r),c=0;c<i.length;c++){var d=n(i[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=l}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o=n.css,r=n.media,i=n.sourceMap;r?t.setAttribute("media",r):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,t)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},104:t=>{var e="undefined"!=typeof process&&process.pid?process.pid.toString(36):"";function n(){var t=Date.now(),e=n.last||t;return n.last=t>e?t:e+1}t.exports=t.exports.default=function(t,o){return(t||"")+""+e+n().toString(36)+(o||"")},t.exports.process=function(t,o){return(t||"")+e+n().toString(36)+(o||"")},t.exports.time=function(t,e){return(t||"")+n().toString(36)+(e||"")}},728:(t,e,n)=>{"use strict";t.exports=n.p+"b475fd2b71206aed1c73.png"},772:(t,e,n)=>{"use strict";t.exports=n.p+"2d9a93ecb6a5b79a0623.png"},53:(t,e,n)=>{"use strict";t.exports=n.p+"b4bed0716a57aef6828e.png"},243:(t,e,n)=>{"use strict";t.exports=n.p+"5d092289809d07378a9e.png"},835:(t,e,n)=>{"use strict";t.exports=n.p+"c561a577d9112d3bfd9c.png"},593:(t,e,n)=>{"use strict";t.exports=n.p+"3fb381086db700587b69.png"},418:(t,e,n)=>{"use strict";t.exports=n.p+"64176f7c483d3c53c2b5.png"},827:(t,e,n)=>{"use strict";t.exports=n.p+"7e3d8a3009d59ee2d760.png"},327:(t,e,n)=>{"use strict";t.exports=n.p+"28294481e00e28d9be3d.png"},259:(t,e,n)=>{"use strict";t.exports=n.p+"6bb1f97922a5d4edba43.png"},527:(t,e,n)=>{"use strict";t.exports=n.p+"5845703f03031d4a714d.png"},368:(t,e,n)=>{"use strict";t.exports=n.p+"6b25688b397f715596e8.png"},536:(t,e,n)=>{"use strict";t.exports=n.p+"912143698ae40a398334.png"},7:(t,e,n)=>{"use strict";t.exports=n.p+"bad3fb39ebd32b934cf0.png"},134:(t,e,n)=>{"use strict";t.exports=n.p+"e14d8220ee6a672afd11.png"},424:(t,e,n)=>{"use strict";t.exports=n.p+"5d7a63b18e9985a9fb8e.png"},984:(t,e,n)=>{"use strict";t.exports=n.p+"0f1911dbfa83bf74ab26.png"},406:(t,e,n)=>{"use strict";t.exports=n.p+"e1a8bb83e6f202f7882f.png"},581:(t,e,n)=>{"use strict";t.exports=n.p+"89ad9489aac0059deaa3.png"}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return t[o](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var o=e.getElementsByTagName("script");o.length&&(t=o[o.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),(()=>{"use strict";const t={events:{},on:function(t,e){this.events[t]=this.events[t]||[],this.events[t].push(e)},off:function(t,e){if(this.events[t])for(var n=0;n<this.events[t].length;n++)if(this.events[t][n]===e){this.events[t].splice(n,1);break}},emit:function(t,e){this.events[t]&&this.events[t].forEach((function(t){t(e)}))}};var e=n(728),o=n(772),r=n(53),i=n(243),s=n(835),a=n(593),l=n(418),c=n(827),d=n(327),u=n(368),p=n(259),f=n(581),h=n(134),g=n(984),m=n(424),b=n(7),y=n(406),v=n(527);n(536);const x={frac:u,bar:p,tion:f,golf_g:h,golf_o:g,golf_l:m,golf_f:b,start:y,button:v},w={ball1:e,ball2:o,ball3:r,ball4:i,ball5:s,ball6:a,ball7:l,ball8:c,ball9:d},k=(()=>{const e=document.querySelector("body");function n(t,e,n,o,r){setTimeout((function(){t.style.animation=`${o} ${r} ease-out 1 forwards`}),n*e)}function o(e){document.querySelectorAll("#background *").forEach((function(t){t.style.transition="transform 1.5s ease-in-out 0.2s",t.style.transform="translate(0px, -2500px)"})),setTimeout((function(){document.querySelector("#background").remove()}),1200),t.emit("load",{page:"demoLevel"}),history.pushState({id:"titleScreen"},"Home | Fraction Golf","http://talkative-egg.github.io/fraction-golf")}function r(t,e){const n=document.createElement("div");return t.forEach((function(t){n.classList.add(t)})),n.id=e,n}function i(t,e){const n=document.createElement("img");return n.id=t,n.setAttribute("src",e),n}return{load:function(){const t=r([],"background"),s=function(){const t=r([],"blocks"),e=r(["background-block","dark-green"],"first-block"),n=r(["background-block","med-green"],"second-block"),o=r(["background-block","light-green"],"third-block"),i=r(["background-block","dark-green"],"fourth-block"),s=r(["background-block","med-green"],"fifth-block");return t.appendChild(e),t.appendChild(n),t.appendChild(o),t.appendChild(i),t.appendChild(s),t}(),a=s.querySelectorAll(".background-block"),l=function(){const t=r([],"fraction"),e=i("frac",x.frac),n=i("bar",x.bar),o=i("tion",x.tion);return t.appendChild(e),t.appendChild(n),t.appendChild(o),t}(),c=l.querySelector("#frac"),d=l.querySelector("#tion"),u=function(){const t=r([],"golf"),e=i("g",x.golf_g);e.style.opacity="0%";const n=i("o",x.golf_o);n.style.opacity="0%";const o=i("l",x.golf_l);o.style.opacity="0%";const s=i("f",x.golf_f);return s.style.opacity="0%",t.appendChild(e),t.appendChild(n),t.appendChild(o),t.appendChild(s),t}(),p=u.querySelectorAll("#golf > img");t.appendChild(s),t.appendChild(l),t.appendChild(u),e.appendChild(t),a.forEach((function(t,e){n(t,e,200,"blockAnimation","0.3s")})),c.style.animation="frac 0.7s ease-out 1 forwards",d.style.animation="tion 0.7s ease-out 1 forwards",p.forEach((function(t,e){n(t,e,200,"golf","0.3s")})),setTimeout((function(){const e=function(){const t=r([],"start"),e=i("button",x.button),n=i("text",x.start);return t.appendChild(e),t.appendChild(n),t}(),n=e.querySelector("#button"),s=e.querySelector("#text");e.addEventListener("click",o),t.appendChild(e),n.style.animation="button 0.4s ease-out 1 forwards",s.style.animation="button 0.4s ease-out 1 forwards"}),1e3)}}})();var E=n(104),A=n.n(E);const M=(e,n=0,o=!1)=>{const r=n,i=A()(),s=document.documentElement.scrollHeight,a=document.documentElement.scrollWidth;let l=o?m(0,Math.floor(s/2)-10-50):m(Math.floor(s/2)+10,s-50),c=m(0,120),d=o,u=0,p=0;const f=document.createElement("div"),h=document.querySelector("#line"),g=document.querySelector("#dashed-line");if(f.style.width="50px",f.style.height="50px",f.style.borderRadius="50%",f.style.position="absolute",f.style.left=`${c}px`,f.style.top=`${l}px`,f.style.zIndex="2",f.className="noselect",r>0&&r<=9){const t=w[`ball${r}`];f.style.background=`no-repeat url(${t})`,f.style.backgroundSize="100%"}else f.textContent=r,f.style.textAlign="center",f.style.fontSize="38px",f.style.background="red",f.style.color="white";function m(t,e){return Math.floor(Math.random()*(e-t))+t}const b=t=>Math.abs(t)<.5,y=(t,e,n,o)=>(t=parseInt(t),e=parseInt(e),n=parseInt(n),o=parseInt(o),Math.sqrt(Math.pow(n-t,2)+Math.pow(o-e,2))),v=()=>{f.style.top=`${l}px`,f.style.left=`${c}px`},x=(t,e,n)=>{const o=c+25,r=l+25,i=Math.atan2(o-t,r-e),s=y(t,e,o,r);0==n?(c+=Math.cos(i)*s*.5,l-=Math.sin(i)*s*.5):(c-=Math.cos(i)*s*.5,l+=Math.sin(i)*s*.5),c+=.25*(t-o),l+=.25*(e-r),v()},k=(t,e,n)=>{clearInterval(t),l=n-25,c=e-25,v()},E=({cx:e,cy:n,r:o,vx:r,vy:i,id:l})=>{e+o+r>a?t.emit("collision",{axis:"x",direction:"negative",id:l}):e-o+r<0&&t.emit("collision",{axis:"x",direction:"positive",id:l}),n+o+i>s?t.emit("collision",{axis:"y",direction:"negative",id:l}):n-o+i<0&&t.emit("collision",{axis:"y",direction:"positive",id:l})},M=({axis:t,direction:e,id:n})=>{n===i&&(console.log(`axis: ${t}, direction: ${e}, id: ${n}`),"x"===t&&"negative"===e&&u>=0||"x"===t&&"positive"===e&&u<=0?u*=-1:("y"===t&&"negative"===e&&p>=0||"y"===t&&"positive"===e&&p<=0)&&(p*=-1))},C=({centerX:t,centerY:e,id:n,intervalId:o})=>{if(n!==i)return;clearInterval(o);const r=c+25,s=l+25,a=y(r,s,t,e);let d;d=r>=t&&s<=e?1:r>=t&&s>=e?0:r<t&&s>=e?1:0,c=t-15*(t-r)/a-25,l=e-15*(e-s)/a-25,v(),n=setInterval(x,40,t,e,d),setTimeout(k,2e3,n,t,e)},S=t=>{const e=t.pageX,n=t.pageY,o=y(e,n,c+25,l+25);let r,i;o>200?(r=c+25-200*(c+25-e)/o,i=l+25-200*(l+25-n)/o):(r=e,i=n),h.setAttribute("x1",`${r}`),h.setAttribute("y1",`${i}`),h.setAttribute("x2",`${c+25}`),h.setAttribute("y2",`${l+25}`),g.setAttribute("x1",`${c+25}`),g.setAttribute("y1",`${l+25}`),g.setAttribute("x2",""+(2*c+50-r)),g.setAttribute("y2",""+(2*l+50-i))},I=t=>{0==u&&0==p&&(window.addEventListener("mousemove",S),window.addEventListener("mouseup",$))},$=e=>{window.removeEventListener("mousemove",S),window.removeEventListener("mouseup",$);const n=parseInt(h.getAttribute("x2"))-parseInt(h.getAttribute("x1")),o=parseInt(h.getAttribute("y2"))-parseInt(h.getAttribute("y1"));h.setAttribute("x1","0"),h.setAttribute("y1","0"),h.setAttribute("x2","0"),h.setAttribute("y2","0"),g.setAttribute("x1","0"),g.setAttribute("y1","0"),g.setAttribute("x2","0"),g.setAttribute("y2","0"),((t=5*Math.random(),e=Math.sqrt(25-xSpeed**2))=>{u=t,p=e})(n/7,o/7);const r=setInterval((function(){(e=>{c+=u,l+=p,t.emit("ballMove",{cx:c+25,cy:l+25,r:25,vx:u,vy:p,id:i,intervalId:e}),v(),b(u)&&b(p)?(u=0,p=0,clearInterval(e)):(u/=1.016,p/=1.016)})(r)}),10);t.on("ballMove",E),t.on("collision",M),t.on("hitGoal",C)},L=t=>{l=t.pageY-25,c=t.pageX-25,c>=150?c=150:c<0&&(c=0),l<0?l=0:l>s-50&&(l=s-50),d&&l>=Math.floor(s/2)-10-50?l=Math.floor(s/2)-10-50:!d&&l<=Math.floor(s/2)+10&&(l=Math.floor(s/2)+10),v()},q=t=>{window.removeEventListener("mousemove",L),window.removeEventListener("mouseup",q),f.addEventListener("mousedown",I)},T=t=>{window.addEventListener("mousemove",L),window.addEventListener("mouseup",q),f.removeEventListener("mousedown",T)};f.addEventListener("mousedown",T),f.addEventListener("mouseenter",(t=>{f.style.cursor="pointer"})),f.addEventListener("mouseleave",(t=>{f.style.cursor="auto"})),e.appendChild(f)},C=(e,n=300,o=300,r=0)=>{const i=n,s=o,a=document.createElement("div");a.style.width="60px",a.style.height="60px",a.style.borderRadius="50%",a.style.backgroundColor="green",a.style.position="absolute",a.style.left=`${s}px`,a.style.top=`${i}px`,a.style.zIndex="1";const l=e=>{const n=e.cx,o=e.cy,r=e.r,a=e.id,c=e.intervalId,d=s+30,u=i+30,p=r+30;var f,h,g,m;f=n,h=o,g=d,m=u,Math.sqrt(Math.pow(g-f,2)+Math.pow(m-h,2))<p-10&&(t.emit("hitGoal",{centerX:d,centerY:u,id:a,intervalId:c}),t.off("ballMove",l))};e.appendChild(a),t.on("ballMove",l)},S=(e,n,o,r,i,s="black")=>{const a=n,l=o,c=r,d=i,u=document.createElement("div");u.style.position="absolute",u.style.backgroundColor=s,u.style.width=`${c}px`,u.style.height=`${d}px`,u.style.left=`${l}px`,u.style.top=`${a}px`,t.on("ballMove",(({cx:e,cy:n,r:o,vx:r,vy:i,id:s})=>{e-o+r<=l+c&&e+o+r>=l&&(n-o+i<a+d&&n-o>a+d?t.emit("collision",{axis:"y",direction:"positive",id:s}):n+o+i>a&&n+o<a&&t.emit("collision",{axis:"y",direction:"negative",id:s})),n-o+i<=a+d&&n+o+i>=a&&(e-o+r<l+c&&e-o>l+c?t.emit("collision",{axis:"x",direction:"positive",id:s}):e+o+r>l&&e+o<l&&t.emit("collision",{axis:"x",direction:"negative",id:s}))})),e.appendChild(u)},I=(()=>{const t=document.createElement("div");t.style.position="absolute",t.style.width="100%",t.style.height="100%",t.style.overflow="none",t.style.zIndex="-1",setTimeout((function(){t.style.zIndex="0"}),1e3);const e=document.documentElement.scrollHeight,n=document.documentElement.scrollWidth;return document.querySelector("body").prepend(t),{load:function(){!function(){const e=document.querySelector("svg")||document.createElementNS("http://www.w3.org/2000/svg","svg"),n=document.querySelector("#line")||document.createElementNS("http://www.w3.org/2000/svg","line");n.id="line",n.setAttribute("x1","0"),n.setAttribute("y1","0"),n.setAttribute("x2","0"),n.setAttribute("y1","0");const o=document.querySelector("#dashed-line")||document.createElementNS("http://www.w3.org/2000/svg","line");o.id="dashed-line",o.setAttribute("x1","0"),o.setAttribute("y1","0"),o.setAttribute("x2","0"),o.setAttribute("y1","0"),e.appendChild(n),e.appendChild(o),t.appendChild(e)}(),S(t,Math.floor(e/2)-10,0,n-400,20),S(t,Math.floor(e/2)-10,n-195,130,20,"blue"),function(){const n=document.createElement("div");n.style.backgroundColor="green",n.style.zIndex="-1",n.style.width="200px",n.style.height=Math.floor(e/2)-10+"px",n.style.position="absolute",n.style.top="0px",n.style.left="0px";const o=document.createElement("div");o.style.backgroundColor="green",o.style.zIndex="-1",o.style.width="200px",o.style.height=Math.ceil(e/2)-10+"px",o.style.position="absolute",o.style.top=`${Math.floor(e/2)+10}px`,o.style.left="0px",t.appendChild(n),t.appendChild(o)}(),M(t,5,!0),M(t,3,!0),M(t,2,!0),M(t,1,!1),M(t,6,!1),M(t,7,!1),C(t,Math.floor(e/2)-150,n-160,5),C(t,Math.floor(e/2)+90,n-160,6)}}})();t.on("load",(t=>{switch(t.page){case"titlePage":k.load();break;case"demoLevel":I.load()}}));var $=n(379),L=n.n($),q=n(795),T=n.n(q),z=n(569),N=n.n(z),_=n(565),O=n.n(_),P=n(216),j=n.n(P),F=n(589),H=n.n(F),Z=n(28),R={};R.styleTagTransform=H(),R.setAttributes=O(),R.insert=N().bind(null,"head"),R.domAPI=T(),R.insertStyleElement=j(),L()(Z.Z,R),Z.Z&&Z.Z.locals&&Z.Z.locals,t.emit("load",{page:"titlePage"})})()})();