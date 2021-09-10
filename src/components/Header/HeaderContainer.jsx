import React from 'react';
import * as axios from "axios";
import Header from "./Header";
import {getAuthUserData, logout, setUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {authAPI} from "../../API/api";

class HeaderContainer extends React.Component {

    /*componentDidMount() {

            this.props.getAuthUserData();
    }*/
    render() {

        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.authR.isAuth,
        login: state.authR.login
    }
}





export default connect(mapStateToProps,{logout})(HeaderContainer);

