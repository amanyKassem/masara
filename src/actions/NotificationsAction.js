import axios from "axios";
import CONST from "../consts";


export const getNotifications = (lang ,token) => {
    return (dispatch) => {
        axios({
            url         : CONST.url + 'notifications',
            method      : 'POST',
            data        : {lang},
            headers     : {Authorization: token}
        }).then(response => {
            dispatch({type: 'getNotifications', payload: response.data});
        });
    }
};
