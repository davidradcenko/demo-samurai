import React from 'react';

import { Field, reduxForm } from 'redux-form';

import { maxlengthCreator, requiredField } from '../../Redux/utils/valedators/valedators.ts';
import { TextAreaComponent } from '../common/FormsControls/FormsControls.tsx';
import Preloader from '../common/Preloader/Preloader.js';


import './content_profil.css'
import Message from './message/message'
import ProfileStatusHook from './ProfilStatus/ProfileStatusHook.js';

import ProfileUsers from './profil_users/Prafil_users'



const Profil = React.memo(props => {
    let state = props.state;

    if (!props.profil) {
        <Preloader />
    } else {
        var oldMass = state.message.map(mess => <Message key={mess.id} text={mess.text} />);
        var newmass = <ProfileUsers
            lookingForAJob={state.profil.lookingForAJob}
            lookingForAJobDescription={state.profil.lookingForAJobDescription}
            status={props.status}
            saveProfile={props.saveProfile}
            updateStatus={props.updateStatus}
            isOwner={props.isOwner}
            saveFoto={props.saveFoto}
            fullName={state.profil.fullName}
            t={state.profil.photos.small}
            aboutMe={state.profil.aboutMe}
            facebook={state.profil.contacts}
            vk={state.profil.contacts} website={state.profil.contacts}

        />
    }
    let addNewMessPostsProfile = (values) => {

        props.newPost(values.ProfileTextarea);
    }

    return (
        <div className="content_profil">

            {/* <div className="profil_img"></div> */}
            {newmass}
            <div className="posts">
                <h1>My posts</h1>

            </div>
            <div className="message">
                <MyPostsProfileFormRedux onSubmit={addNewMessPostsProfile} />
                {oldMass}
            </div>
        </div>
    );

})
const maxlenth15 = maxlengthCreator(15);
const AddMessageProfilePost = (props) => {


    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field name="ProfileTextarea" component={TextAreaComponent} placeholder="Enter your post" validate={[requiredField, maxlenth15]} />
                {/* <textarea onChange={OnChengeFun} value={state.newPostText} ref={s}></textarea> */}
                <button>Send</button>
            </form>
        </div>
    )
}
const MyPostsProfileFormRedux = reduxForm({ form: "MypostsProfile" })(AddMessageProfilePost);
export default Profil;