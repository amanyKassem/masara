import axios from "axios";
import CONST from "../consts";


export const getOffers = (lang,is_all) => {
    return (dispatch) => {
        axios({
            url         : CONST.url + 'offers',
            method      : 'POST',
            data        : {lang,is_all}
        }).then(response => {
            dispatch({type: 'getOffers', payload: response.data});
        });
    }
};
