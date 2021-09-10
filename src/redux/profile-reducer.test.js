import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from "react";

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 20},
    ]
};

it('new post should be added',()=>{
let action=addPostActionCreator("it");

let newState=profileReducer(initialState,action);
expect(newState.posts.length).toBe(3);

});

it('message should be added',()=>{
    let action=addPostActionCreator("it");

    let newState=profileReducer(initialState,action);

    expect(newState.posts[2].message).toBe("it");
});

it('delete post',()=>{
    let action=deletePost(1);

    let newState=profileReducer(initialState,action);

    expect(newState.posts.length).toBe(1);
});









