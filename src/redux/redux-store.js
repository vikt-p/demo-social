import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import appReducer from "./app-reducer";

let Reducers=combineReducers({
    profilePage: profileReducer,
    dialogsPages:dialogReducer,
    sidebar:sidebarReducer,
    userPages:usersReducer,
    authR:authReducer,
    app:appReducer
    })



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Reducers,composeEnhancers(compose(applyMiddleware(thunkMiddleware))));
window._store_=store;
//let store=createStore(Reducers,applyMiddleware(thunkMiddleware));

export default store;