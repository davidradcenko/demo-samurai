
const Profil_users = (props) => {
    return (
        <div className="info_user">
            <img src={props.t} alt="foto" />
            <div className="text_info_user">
                <h1 className="title">{props.fullName}</h1>
                <p className="subtitle">О себе:{props.aboutMe}
                    {/* <br />facebook:{props.facebook.facebook}
                    <br />vk:{props.vk.vk}
                    <br />Web Site:{props.website.website} */}
                </p>
            </div>
        </div >
    );
}
export default Profil_users;