import { NavLink } from 'react-router-dom';
import './content_navigation.css';
const Navigation=()=>{
    return(
        <div className="content_navigation">
            <nav className="navigation_nav">
                <NavLink to="/Profil">Profil</NavLink>
                <NavLink to="/Dialogs">Dialogs</NavLink>
                <NavLink to="/Users">Users</NavLink>
                {/* <a >News</a>
                <a >Music</a>
                <a  >Settings</a> */}
            </nav>
        </div>

    );
}
export default Navigation;