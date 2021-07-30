import { useState } from 'react';
import FotoUser from '../../../assets/images/FotoUsersNotFuond.jpg';
import ProfileStatusHook from '../ProfilStatus/ProfileStatusHook';
import ProfileDataFormReduxForm from './ProfileDataForm';
import ProfileDataForm from './ProfileDataForm';
const Profil_users = (props) => {
    debugger;
    let [editMode, setEditMode] = useState(false);
    const onMainFotoSelection = (e) => {
        if (e.target.files.length) {
            props.saveFoto(e.target.files[0])
        }
    }
    const onSubmit = (formData) => {
        props.saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );


    }
    return (
        <div className="info_user">
            <img src={props.t || FotoUser} alt="foto" />
            <div className="text_info_user">
                <h1 className="title">{props.fullName}</h1>
                <p className="subtitle"> О себе:{props.aboutMe}</p>
                {editMode
                    ? <ProfileDataFormReduxForm initialValues={props} props={props} onSubmit={onSubmit} />
                    : <ProfileData props={props} isOwner={props.isOwner} gotoEditMode={() => { setEditMode(true) }} />}


                {props.isOwner && <input type={"file"} onChange={onMainFotoSelection} />}

            </div>

        </div >
    );
}




const ProfileData = ({ props, isOwner, gotoEditMode }) => {
    debugger;
    return <div>
        {isOwner && <div><button onClick={gotoEditMode}>edit</button></div>}
        <div>
            <b>Full name</b>:{props.fullName}
        </div>
        <div>
            <b>Looking for a job</b>:{props.lookingForAJob ? "yes" : "no"}
        </div>
        {props.lookingForAJob &&
            <div> <b>My professional skills</b>:{props.lookingForAJobDescription}</div>
        }
        <div>
            <b>About me</b>:{props.aboutMe}
        </div>
        <div>
            <b>Status</b>:<ProfileStatusHook status={props.status} updateStatus={props.updateStatus} />
        </div>
        <div>

            <b>Contacts</b>:{Object.keys(props.vk).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={props.vk[key]} />
            })}
        </div>
    </div>
}

const Contact = ({ contactTitle, contactValue }) => {
    return <div className="contact"><b>{contactTitle}</b>:{contactValue}</div>
}
export default Profil_users;