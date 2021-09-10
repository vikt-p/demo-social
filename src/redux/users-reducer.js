import {userAPI} from "../API/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'setUsers';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOTAL_COUNT_PAGE = 'TOTAL_COUNT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []

};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.UserId) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.UserId) {
                        return {...u, followed: false};
                    }
                    return u;
                })
            };
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFollowFetching
                    ? [...state.followingInProgress, action.UserId] :
                    [...state.followingInProgress.filter(UserId => UserId = !action.UserId)]
            }
        }
        case TOTAL_COUNT_PAGE: {
            return {
                ...state,
                totalUserCount: action.totalUserCount
            }
        }
        default:
            return state;
    }
}

export const followSuccess = (UserId) => {
    return {type: FOLLOW, UserId}
}
export const unfollowSuccess = (UserId) => {
    return {type: UNFOLLOW, UserId}
}
export const setUsers = (users) => {
    return {type: SET_USERS, users}
}
export const setCurrentPage = (currentPage) => {
    return {type: SET_CURRENT_PAGE, currentPage}
}
export const setTotalCount = (totalUserCount) => {
    return {type: TOTAL_COUNT_PAGE, totalUserCount}
}
export const toggleIsFetching = (isFetching) => {
    return {type: TOGGLE_IS_FETCHING, isFetching}
}
export const toggleFollowingProgress = (isFollowFetching, UserId) => {
    return {type: TOGGLE_IS_FOLLOWING_PROGRESS, isFollowFetching, UserId}
}
export const requestUsers = (page, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));
        userAPI.getUsers(page, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalCount(data.totalCount));
        });
    }
}

let followUnfollowFlow=async (dispatch,actionCreator,apiMethod,UserId)=>{
    dispatch(toggleFollowingProgress(true, UserId));
    let response= await  apiMethod(UserId)
    if (response.data.resultCode == 0) {
        dispatch(actionCreator(UserId));
    }
    dispatch(toggleFollowingProgress(false, UserId));
}

export const follow = (UserId) => (dispatch) => {
          followUnfollowFlow(dispatch,followSuccess,userAPI.follow.bind(userAPI),UserId);
                /*if (response.data.resultCode == 0) {
                    dispatch(followSuccess(UserId));
                }
                dispatch(toggleFollowingProgress(false, UserId));
                */
    }


    export const unfollow = (UserId) => (dispatch) => {
                followUnfollowFlow(dispatch, unfollowSuccess, userAPI.unfollow.bind(userAPI), UserId);
    }

export default usersReducer;








