const INITIAL_STATE = {user: null, loading: false, message: '' , success:false };

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case ('login_user') :
            return ({...state, loading: true});
        case ('login_failed') :
            return ({...state, loading: false, user: action.error , message: action.error.message, success: action.error.success });
        case ('login_success') :
            return ({...state, loading: false, user: action.data , message: action.data.message , success: action.data.success});
        case ('user_logout') :
            return ({...state, user: null});
        case ('register') :{
            console.log('mes____', action.payload.message);
            return ({...state, loading: false, message: action.payload.message});
        }
        case ('temp_auth') :
            return ({...state, user: null});
        default :
            return state;
    }

}
