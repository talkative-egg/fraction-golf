import TitlePage from '../titleScreen';
import LevelSelect from '../levelSelect';
import DemoLevel from '../demoLevel';
import Level1 from '../levels/Level1';
import Level2 from '../levels/Level2';
import Level3 from '../levels/Level3';
import Level4 from '../levels/Level4';
import Level5 from '../levels/Level5';
import Level6 from '../levels/Level6';
import Level7 from '../levels/Level7';
import Level8 from '../levels/Level8';
import Level9 from '../levels/Level9';

import events from '../events';

const LoadPages = (() => {

    let currentPage = "";

    const loadPage = (props) => {

        // if(currentPage == props.page) return;

        switch(currentPage){
            case "level1":
                Level1.deleteAllObjects();
                break;
            case "level2":
                Level2.deleteAllObjects();
                break;
            case "level3":
                Level3.deleteAllObjects();
                break;
            case "level4":
                Level4.deleteAllObjects();
                break;
            case "level5":
                Level5.deleteAllObjects();
                break;
            case "level6":
                Level6.deleteAllObjects();
                break;
            case "level7":
                Level7.deleteAllObjects();
                break;
            case "level8":
                Level8.deleteAllObjects();
                break;
            case "level9":
                Level9.deleteAllObjects();
                break;
            default:
                break;
        }

        if(currentPage === "titlePage"){
            TitlePage.transition();
        }else if(document.querySelectorAll("body *") != null){
            document.querySelectorAll("body *").forEach(function(element){
                element.remove();
            });
        }

        switch(props.page){

            case "titlePage":
                currentPage = "titlePage";
                history.pushState({pageID: 'home'}, 'home', '#home');
                TitlePage.load();
                break;
            case "levelSelect":
                currentPage = props.page;
                history.pushState({pageID: props.page}, props.page, `#${props.page}`);
                LevelSelect.load();
                break;
            case "demoLevel":
                currentPage = props.page;
                history.pushState({pageID: props.page}, props.page, `#${props.page}`);
                DemoLevel.load();
                break;
            case "level1":
                currentPage = props.page;
                history.pushState({pageID: props.page}, props.page, `#${props.page}`);
                Level1.load(props.makePopup);
                break;
            case "level2":
                currentPage = props.page;
                history.pushState({pageID: props.page}, props.page, `#${props.page}`);
                Level2.load(props.makePopup);
                break;
            case "level3":
                currentPage = props.page;
                history.pushState({pageID: props.page}, props.page, `#${props.page}`);
                Level3.load(props.makePopup);
                break;
            case "level4":
                currentPage = props.page;
                history.pushState({pageID: props.page}, props.page, `#${props.page}`);
                Level4.load(props.makePopup);
                break;
            case "level5":
                currentPage = props.page;
                history.pushState({pageID: props.page}, props.page, `#${props.page}`);
                Level5.load(props.makePopup);
                break;
            case "level6":
                currentPage = props.page;
                history.pushState({pageID: props.page}, props.page, `#${props.page}`);
                Level6.load(props.makePopup);
                break;
            case "level7":
                currentPage = props.page;
                history.pushState({pageID: props.page}, props.page, `#${props.page}`);
                Level7.load(props.makePopup);
                break;
            case "level8":
                currentPage = props.page;
                history.pushState({pageID: props.page}, props.page, `#${props.page}`);
                Level8.load(props.makePopup);
                break;
            case "level9":
                currentPage = props.page;
                history.pushState({pageID: props.page}, props.page, `#${props.page}`);
                Level9.load(props.makePopup);
                break;
            default:
                currentPage = "demoLevel";
                history.pushState({pageID: 'demoLevel'}, 'demoLevel', '#demoLevel');
                DemoLevel.load();
                break;

        }

    }

    window.onpopstate = function() {

        if(history.state == null) return;

        if (history.state.pageID === 'home') {
            loadPage({page: "titlePage"});
        }else if(history.state.pageID === "demoLevel"){
            loadPage({page: "demoLevel"});
        }else if(history.state.pageID === "levelSelect"){
            loadPage({page: "levelSelect"});
        }
    };

    events.on("load", loadPage);

})();

export default LoadPages;