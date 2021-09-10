import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";

let store = {
    _state: {
        profilePages: {
            posts: [
                {id: 1, message: 'Hi, how are you', likesCount: 12},
                {id: 2, message: "It's my first post", likesCount: 20},
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPages: {
            dialogs: [
                {id: 1, name: "Dmitriy"},
                {id: 2, name: "Andrey"},
                {id: 3, name: "Sveta"},
                {id: 4, name: "Sasha"},
                {id: 5, name: "Viktor"},
                {id: 6, name: "Valera"}
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How are you"},
                {id: 3, message: "Yo"},
                {id: 4, message: "Yo"},
                {id: 5, message: "Yo"}
            ],
            newMessageBody: 'it-kamasutra.com'
        },
        sidebar:{}
    },

    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed');
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.dialogsPages = dialogReducer(this._state.dialogsPages, action)
        this._state.profilePages = profileReducer(this._state.profilePages, action)
        this._callSubscriber(this._state);
    }
}


export default store;
window.store = store;
