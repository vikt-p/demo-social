/*const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY ';*/
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
       /* case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
*/
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
               // newMessageBody: '',
                messages: [...state.messages, ({id: 7, message: body})]

            };
        default:
            return state;


    }
}

export const sendMessageCreator = (newMessageBody) => {
    return {
        type: SEND_MESSAGE,newMessageBody:newMessageBody
    }
}
/*export const updateNewMessageCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, body: body
    }
}*/


export default dialogReducer;
