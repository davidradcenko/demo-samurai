import style from './style.module.css';
import FotoUser from '../../assets/images/FotoUsersNotFuond.jpg';
import React from 'react';
import { NavLink } from 'react-router-dom';



let User = ({ user, followingInProgress, follow, unfollow }) => {
    let u = user;
    return (
        <div >
            <span>
                <div>
                    <NavLink to={'/Profil/' + u.id}>
                        <img alt={"IMG"} src={u.photos.small != null ? u.photos.small : FotoUser} className={style.userPhoto} />
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                            unfollow(u.id);

                        }}>Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                            follow(u.id);

                        }}>Follow</button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    {/* <div>{u.location.country}</div>
                    <div>{u.location.city}</div> */}
                </span>
            </span>



        </div >)
}

export default User;