import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { login } from '../../Redux/authReduser';
import { maxlengthCreator, requiredField } from '../../Redux/utils/valedators/valedators';
import { createField, TextInputComponent } from '../common/FormsControls/FormsControls';
import style from "../common/FormsControls/FormCssControls.module.css"
import { AppStateType } from '../../Redux/Redux-Store';
const maxlenth20 = maxlengthCreator(25);

type LoginFromOwnProps = {
    capthaUrl: any
}
const LoginForm: React.FC<InjectedFormProps<LoginFormValueType, LoginFromOwnProps> & LoginFromOwnProps> = ({ handleSubmit, error, capthaUrl }) => {
    debugger;
    return (

        <form onSubmit={handleSubmit}>
            {createField<LoginFormValueTypeKeys>("email", "email", [requiredField, maxlenth20], TextInputComponent)}
            {createField<LoginFormValueTypeKeys>("Password", "password", [requiredField, maxlenth20], TextInputComponent, { type: "password" })}
            <div>
                remember me!
                <Field validate={[requiredField, maxlenth20]} type={"Checkbox"} name={"rememberMe"} component={TextInputComponent} />
            </div>
            {capthaUrl && <img src={capthaUrl.capthaUurlrl} />}
            {capthaUrl && createField<LoginFormValueTypeKeys>("Symbols from image", "capthaUrl", [requiredField], TextInputComponent, {})}
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
const LoginReduxForm = reduxForm<LoginFormValueType, LoginFromOwnProps>({ form: 'login' })(LoginForm)

type MapStatePropsType = {
    capthaUrl: string | null
    isAuth: boolean
}
type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, capthUrl: any) => void
}


type LoginFormValueType = {
    email: string
    password: string
    rememberMe: boolean
    capthaUrl: string
}

type LoginFormValueTypeKeys = Extract<keyof LoginFormValueType, string>


const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
    const onSubmit = (formData: LoginFormValueType) => {
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
const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    capthaUrl: state.auth.capthaUrl
})
export default connect(mapStateToProps, { login })(Login);