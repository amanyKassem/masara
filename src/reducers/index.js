import { combineReducers } from 'redux';
import lang from './LangReducer';
import about from './AboutReducer';
import intro from './IntroReducer';
import categories from './CategoriesReducer';
import offers from './OffersReducer';
import contactUs from './ContactUsReducer';
import auth from './AuthReducer';
import profile from './ProfileReducer';
import topRate from './TopRateReducer';
import fav from './FavReducer';

export default combineReducers({
    lang,
    about,
    intro,
    categories,
    offers,
    contactUs,
    auth,
    profile,
    topRate,
    fav,
});
