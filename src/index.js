import events from './events';
import LoadPages from './loading/loadPages';
import './styles.css';


events.emit("load", {"page": "titlePage"});