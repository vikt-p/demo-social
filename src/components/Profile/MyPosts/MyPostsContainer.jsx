import React from 'react';

import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

import {connect} from "react-redux";

const mapStateToProps=(state)=>{
    return{
        posts:state.profilePage.posts,
        newPostText:state.profilePage.newPostText
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        addPost:(message)=>{
            dispatch(addPostActionCreator(message));
        }/*,
        updateNewPostText:(text)=>{
            dispatch(updateNewPostTextActionCreator(text));
        }*/
    }
}

const MyPostsContainer=connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;