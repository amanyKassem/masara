const INITIAL_STATE = { lang: null };

export default (state = INITIAL_STATE, action) => {
    console.log('actionLaaaang' , action.lang)
    switch (action.type) {
        case 'chooseLang':
            return { lang: action.payload };
        default:
            return state;
    }
};
