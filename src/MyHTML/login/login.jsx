import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { login } from '../../Redux/authReduser';
import { maxlengthCreator, requiredField } from '../../Redux/utils/valedators/valedators';
import { createField, TextInputComponent } from '../common/FormsControls/FormsControls';
import style from "../common/FormsControls/FormCssControls.module.css"
const maxlenth20 = maxlengthCreator(25);
const LoginForm = ({ handleSubmit, error, capthaUrl }) => {
    debugger;
    return (

        <form onSubmit={handleSubmit}>

            {createField("email", "email", [requiredField, maxlenth20], TextInputComponent)}
            {/* <Field validate={[requiredField, maxlenth15]} placeholder="email" name={"email"} component={TextInputComponent} /> */}
            {createField("Password", "password", [requiredField, maxlenth20], TextInputComponent, { type: "password" })}

            <div>
                remember me!
                <Field validate={[requiredField, maxlenth20]} type={"Checkbox"} name={"rememberMe"} component={TextInputComponent} />
            </div>
            {capthaUrl && <img src={capthaUrl.capthaUurlrl} />}
            {capthaUrl && createField("Symbols from image", "capthaUrl", [requiredField], TextInputComponent, {})}
            {error &&
                <div className={style.formSummaryError}>
                    {error}
                </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    debugger;
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.capthaUrl);
    }
    if (props.isAuth) {
        return <Redirect to="/profil" />
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm capthaUrl={props.capthaUrl} onSubmit={onSubmit} />
    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    capthaUrl: state.auth.capthaUrl
})
export default connect(mapStateToProps, { login })(Login);