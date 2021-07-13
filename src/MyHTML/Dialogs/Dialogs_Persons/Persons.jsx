import { BrowserRouter, NavLink } from 'react-router-dom';
import './Persons.css';

const Person = (props) => {
    let Stringid = "/Dialogs/" + props.id;
    return (
        <BrowserRouter>
            <div>
                <li><NavLink to={Stringid}>{props.name}</NavLink> </li>
            </div>
        </BrowserRouter >);
}
export default Person;