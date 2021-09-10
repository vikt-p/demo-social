import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {follow, requestUsers, setCurrentPage, toggleFollowingProgress, unfollow} from "../../redux/users-reducer";
import Preloader from "../Common/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount,
    getUsers
} from "../../redux/users-selector";

class UsersContainer extends React.Component {

    componentDidMount() {

this.props.getUsers(this.props.currentPage,this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {

        this.props.getUsers(pageNumber,this.props.pageSize);
        //this.props.setCurrentPage(pageNumber);

    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users pageSize={this.props.pageSize}
                   totalUserCount={this.props.totalUserCount}
                   onPageChanged={this.onPageChanged}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}

            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUserCount:getTotalUserCount(state) ,
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

/*const mapDispatchToProps = (dispatch) => {
    return {
        follow: (UserId) => {
            dispatch(followAC(UserId));
        },
        unfollow: (UserId) => {
            dispatch(ufollowAC(UserId));
        },
        toggle: (UserId) => {
            dispatch(toggleAC(UserId));
        },

        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        setTotalCount: (totalCount) => {
            dispatch(totalCountPageAC(totalCount));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(togglesIsFetchingAC(isFetching));
        }

    }
}*/

export default compose(

    connect(mapStateToProps, {follow,unfollow,setCurrentPage,
        toggleFollowingProgress,getUsers: requestUsers}),
    //withAuthRedirect
)(UsersContainer)


/*
export default connect(mapStateToProps, {
    follow,
    unfollow,
    toggle,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers
})(UsersContainer);
*/

