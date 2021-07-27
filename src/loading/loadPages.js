import TitlePage from '../titleScreen';
import LevelSelect from '../levelSelect';
import DemoLevel from '../demoLevel';

import events from '../events';

const LoadPages = (() => {

    const loadPage = (props) => {

        switch(props.page){

            case "titlePage":
                document.querySelectorAll("body *").forEach(function(element){
                    element.remove();
                });
                // history.pushState({pageID: 'home'}, 'home', '/home');
                TitlePage.load();
                break;
            case "levelSelect":
                LevelSelect.load();
                break;
            case "demoLevel":
                // history.pushState({pageID: 'demoLevel'}, 'demoLevel', '/demoLevel');
                DemoLevel.load();
                break;
            default:
                break;

        }

    }

    // window.onpopstate = function (event) {
    //     if (history.state && history.state.id === 'home') {
    //         loadPage({page: "titlePage"});
    //     }else if(history.state && history.state.id === "demoLevel"){
    //         loadPage({page: "demoLevel"});
    //     }else{
    //         loadPage({page: "titlePage"});
    //     }
    // };

    events.on("load", loadPage);

})();

export default LoadPages;