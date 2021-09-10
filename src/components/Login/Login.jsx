import React from "react";
import {Formik} from "formik";
import LoginFormSchema from "../../utils/validators/LoginFormSchema";
import FormControls from "../Common/FormControls/FormControls";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import * as formik from "formik";
import {Redirect} from "react-router-dom";



const Login = (props) => {
    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }
    return (
    <div>
        <h1>Login</h1>
        <Formik
            initialValues={{ email:'', password:'',rememberMe:false }}
            onSubmit={(values,{setStatus}) => {
                props.login(values.email, values.password, values.rememberMe,setStatus);
            }}
            validationSchema={LoginFormSchema}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                isValid,
                dirty,
                status
                  /* and other goodies */
              }) => (

                <form onSubmit={handleSubmit}>
                    <div>
                        {status}
                        <FormControls as="input" type="email" name="email"  label="Login"/>

                    </div>
                    <div>
                        {status}
                        <FormControls as="input" type="password" name="password"  label="Password"/>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            name="rememberMe"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />Remember me
                    </div>
                    <div>
                        <button type="submit" disabled={!isValid && !dirty}>
                            Login
                        </button>
                    </div>
                </form>
            )}
        </Formik>

    </div>
    )
}

const mapStateToProps=(state)=>({
    isAuth:state.authR.isAuth
})
const LoginContainer =connect(mapStateToProps,{login})(Login);
export default LoginContainer;
//export default Login;