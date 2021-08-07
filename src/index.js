import events from './events';
import LoadPages from './loading/loadPages';
import { PlayMusic } from './loading/loadMusic';
import Firebase from './Firebase';
import './styles.css';

events.emit("load", {"page": "titlePage"});