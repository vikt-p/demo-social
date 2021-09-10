import React from 'react';
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
       if (!userId) {
            userId = this.props.authorizedUserId;
        }
     if (!userId) {
            this.props.history.push("/login")
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {

        return <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                        updateStatus={this.props.updateStatus}/>
    }
}

const mapStateToProps = (state) => ({

        profile: state.profilePage.profile,
        status: state.profilePage.status,
        isAuth:state.authR.isAuth,
        authorizedUserId:state.authR.userId

})
export default compose(

    connect(mapStateToProps, {getUserProfile, getStatus,updateStatus}),
    withRouter
    //withAuthRedirect
)(ProfileContainer)

/*
let withUrlDataContainerComp = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComp);
*/

