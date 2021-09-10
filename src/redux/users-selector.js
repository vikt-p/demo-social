import {createSelector} from "reselect";

const getUsersSelector=(state)=>{
    return state.userPages.users
}
 export const getUsers=createSelector(getUsersSelector,(users)=> {
     return users.filter(u => true)
 })

 export const getPageSize=(state)=>{
     return state.userPages.pageSize
 }
 export const getTotalUserCount=(state)=>{
     return state.userPages.totalUserCount
 }
 export const getCurrentPage=(state)=>{
     return state.userPages.currentPage
 }
 export const getIsFetching=(state)=>{
     return state.userPages.isFetching
 }
 export const getFollowingInProgress=(state)=>{
     return state.userPages.followingInProgress
 }
