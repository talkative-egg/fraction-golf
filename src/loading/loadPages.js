import TitlePage from '../titleScreen';
import DemoLevel from '../demoLevel';

import events from '../events';

const LoadPages = (() => {

    const loadPage = (props) => {

        switch(props.page){

            case "titlePage":
                TitlePage.load();
                break;
            case "demoLevel":
                DemoLevel.load();
            default:
                break;

        }

    }

    events.on("load", loadPage);

})();

export default LoadPages;