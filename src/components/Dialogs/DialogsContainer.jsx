import React from 'react';

import {sendMessageCreator} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps=(state)=>{
    return{
        newMessageBody:state.dialogsPages.newMessageBody,
        dialogsPages:state.dialogsPages,


    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
       /* updateMessage:(body)=>{
            dispatch(updateNewMessageCreator(body));
        },*/
        sendMessage:(message)=>{
            dispatch(sendMessageCreator(message));
        }
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

/*
let authRedirectComponent=withAuthRedirect(Dialogs);

const DialogsContainer =connect(mapStateToProps,mapDispatchToProps)(Dialogs);
*/

//export default DialogsContainer;
