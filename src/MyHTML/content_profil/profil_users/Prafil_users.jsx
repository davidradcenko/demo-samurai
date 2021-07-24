import FotoUser from '../../../assets/images/FotoUsersNotFuond.jpg';
const Profil_users = (props) => {

    const onMainFotoSelection = (e) => {
        if (e.target.files.length) {
            props.saveFoto(e.target.files[0])
        }
    }
    return (
        <div className="info_user">
            <img src={props.t || FotoUser} alt="foto" />
            <div className="text_info_user">
                <h1 className="title">{props.fullName}</h1>
                <p className="subtitle">О себе:{props.aboutMe}
                    {/* <br />facebook:{props.facebook.facebook}
                    <br />vk:{props.vk.vk}
                    <br />Web Site:{props.website.website} */}
                </p>
                {props.isOwner && <input type={"file"} onChange={onMainFotoSelection} />}

            </div>

        </div >
    );
}
export default Profil_users;