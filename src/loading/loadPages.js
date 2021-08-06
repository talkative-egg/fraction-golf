import TitlePage from '../titleScreen';
import LevelSelect from '../levelSelect';
import DemoLevel from '../demoLevel';
import Level1 from '../levels/Level1';

import events from '../events';

const LoadPages = (() => {

    let currentPage = "";

    const loadPage = (props) => {

        // if(currentPage == props.page) return;

        if(currentPage == "titlePage"){
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
                currentPage = "levelSelect";
                history.pushState({pageID: 'levelSelect'}, 'levelSelect', '#levelSelect');
                LevelSelect.load();
                break;
            case "demoLevel":
                currentPage = "demoLevel";
                history.pushState({pageID: 'demoLevel'}, 'demoLevel', '#demoLevel');
                DemoLevel.load();
                break;
            case "level1":
                currentPage = "level1";
                history.pushState({pageID: 'level1'}, 'level1', '#level1');
                Level1.load(props.makePopup);
                break
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