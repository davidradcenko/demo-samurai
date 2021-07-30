import React from 'react';
import { reduxForm } from 'redux-form';
import { maxlengthCreator, requiredField } from '../../../Redux/utils/valedators/valedators';
import { createField, TextAreaComponent, TextInputComponent } from '../../common/FormsControls/FormsControls';
import ProfileStatusHook from '../ProfilStatus/ProfileStatusHook';
import style from "../../common/FormsControls/FormCssControls.module.css";
const ProfileDataForm = ({ handleSubmit, props, error }) => {
    return <form onSubmit={handleSubmit}>
        {error && <div className={style.formSummaryError}>{error}</div>}
        <div><button>Save</button></div>
        <div>
            <b>Full name</b>:  {createField("Full name", "fullName", [], TextInputComponent)}
        </div>
        <div>
            <b>Looking for a job</b>:{createField("", "lookingForAJob", [], TextInputComponent, { type: "checkbox" })}
        </div>

        <div>
            <b>My professional skills</b>:{createField("My professional skills", "lookingForAJobDescription", [], TextAreaComponent)}
        </div>

        <div>
            <b>About me</b>:{createField("About me", "aboutMe", [], TextAreaComponent)}
        </div>
        <div>
            <b>Status</b>:<ProfileStatusHook status={props.status} updateStatus={props.updateStatus} />
        </div>
        <div>

            <b>Contacts</b>:{Object.keys(props.vk).map(key => {
                return <div key={key}>
                    <b>{key}: {createField(key, "contacts." + key, [], TextInputComponent)}</b>
                </div>
            })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)
export default ProfileDataFormReduxForm;