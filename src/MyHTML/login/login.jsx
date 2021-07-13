import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { login } from '../../Redux/authReduser';
import { maxlengthCreator, requiredField } from '../../Redux/utils/valedators/valedators';
import { createField, TextInputComponent } from '../common/FormsControls/FormsControls';
import style from "../common/FormsControls/FormCssControls.module.css"
const maxlenth15 = maxlengthCreator(50);
const LoginForm = ({ handleSubmit, error }) => {
    return (

        <form onSubmit={handleSubmit}>

            {createField("email", "email", requiredField, maxlenth15, TextInputComponent)}
            {/* <Field validate={[requiredField, maxlenth15]} placeholder="email" name={"email"} component={TextInputComponent} /> */}
            {createField("Password", "password", requiredField, maxlenth15, TextInputComponent, { type: "password" })}

            <div>
                remember me!
                <Field validate={[requiredField, maxlenth15]} type={"Checkbox"} name={"rememberMe"} component={TextInputComponent} />
            </div>
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
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    if (props.isAuth) {
        return <Redirect to="/profil" />
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { login })(Login);