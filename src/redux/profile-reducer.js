import {profileAPI, userAPI} from "../API/api";

const ADD_POST = 'ADD-POST';
/*const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';*/
const SET_USER_PROFILE='SET-USER-PROFILE';
const SET_STATUS='SET-STATUS';
const DELETE_POST='DELETE_POST';


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 20},
    ],

    profile:null,
    status:""
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.message,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            }

        case DELETE_POST:

            return {
                ...state,
                posts: state.posts.filter(p=>p.id!=action.id)
            }

        /*case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };*/
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
            case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        default:return state;
    }
}

export const addPostActionCreator = (message) => {
    return {type: ADD_POST,message:message}
}
export const deletePost = (id) => {
    return {type: DELETE_POST,id:id}
}

/*export const updateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}*/
export const setUserProfile=(profile)=>{
    return{type:SET_USER_PROFILE,profile}
}
export const setStatus=(status)=>{
    return{type:SET_STATUS,status}
}

export const getUserProfile=(userId)=>async(dispatch)=>{
let response=await userAPI.getProfile(userId)
            dispatch(setUserProfile(response.data))
    }


export const getStatus=(UserId)=>async(dispatch)=>{
       let response= await profileAPI.getStatus(UserId)
                dispatch(setStatus(response.data))

    }


export const updateStatus=(status)=>(dispatch)=>{
        profileAPI.updateStatus(status)
            .then(response => {
                if(response.data.resultCode===0) {
                    dispatch(setStatus(status))
                }
            });
    }


export default profileReducer;








