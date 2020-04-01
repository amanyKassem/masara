import I18n from 'ex-react-native-i18n';
import { AsyncStorage } from 'react-native';
import ar from './ar';
import en from './en';

I18n.fallbacks = true;

I18n.translations = {
    ar,
    en
};

I18n.locale = 'ar';

// AsyncStorage.getItem('lang').then(lang => {
//     // alert(lang)
//     I18n.locale = lang;
// });

export default I18n;
