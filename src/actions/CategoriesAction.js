import axios from "axios";
import CONST from "../consts";


export const getCategories = (lang , is_all) => {
    return (dispatch) => {
        axios({
            url         : CONST.url + 'categories',
            method      : 'POST',
            data        : { lang, is_all }
        }).then(response => {
            console.log('response.data' , response.data)
            dispatch({type: 'getCategories', payload: response.data});
        });
    }
};
