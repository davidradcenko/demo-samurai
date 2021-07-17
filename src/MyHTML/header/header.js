
import { NavLink } from 'react-router-dom';
import s from './headerCSS.module.css';

const Headerh=(props)=>{
   debugger;
   const onSubmit = () => {
        props.logoutAcchen();
    }
return (<div>
       <header>
           <div className={s.logo}>
                <img src="https://manager.paczkomaty.pl/assets/images/inpost-logo-white.svg" alt="logo"/>
                <div className={s.logiBloc}>
                    {props.isAuth 
                    ? <div> {props.login}<button onClick={props.logoutAcchen}>Log out</button></div> 
                    : <NavLink to={'/login'}>Login</NavLink>}
                   
                </div>
            </div>
        </header>
       </div>
);
}

export default Headerh;