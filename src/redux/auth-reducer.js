import {authAPI} from "../API/api";

const SET_USER_DATA = 'SET-USER-DATA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:

            return {
                ...state,
                ...action.payload
                //isAuth: true
            };

        default:
            return state;
    }
}

    export const setUserData = (userId, email, login,isAuth) => {
        return {type: SET_USER_DATA, payload: {userId, email, login,isAuth}}
    }
export const getAuthUserData=()=>async (dispatch) => {
          let response=await authAPI.me()
                    if (response.data.resultCode===0){
                        let {id, login, email} = response.data.data;
                        dispatch(setUserData(id, email, login,true));
                    }
    }

export const login=(email,password,rememberMe,setStatus)=> async(dispatch) => {
        let response=await authAPI.login(email,password,rememberMe)
                if (response.data.resultCode===0){
                    dispatch(getAuthUserData());
                }else{
                    setStatus(response.data.messages)
                }
    }

export const logout=()=>async(dispatch) => {
       let response= await authAPI.logout()
                if (response.data.resultCode===0){
                   dispatch(setUserData(null, null,null,false));
                }
    }


    export default authReducer;








