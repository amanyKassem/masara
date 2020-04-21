import { combineReducers } from 'redux';
import lang from './LangReducer';
import about from './AboutReducer';
import intro from './IntroReducer';
import categories from './CategoriesReducer';

export default combineReducers({
    lang,
    about,
    intro,
    categories,
});
