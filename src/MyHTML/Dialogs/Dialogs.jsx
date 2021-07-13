import React from 'react';

import { Field, reduxForm } from 'redux-form';

import { maxlengthCreator, requiredField } from '../../Redux/utils/valedators/valedators';
import { TextAreaComponent } from '../common/FormsControls/FormsControls';

import CMC from './CMC/CMC';
import './DialogsCSS.css';
import Person from './Dialogs_Persons/Persons';


const Dialogs = (props) => {
    let state = props.state;
    let addNewMessageChange = (Values) => {
        props.ClickButton(Values.newMessageBody);
    }
    let newpostData = state.postData.map(s => <CMC name={s.name} key={s.id} text={s.text} />);
    let newUsersData = state.usersData.map(s => <Person name={s.name} key={s.id} id={s.id} />);

    return (<div className='divDialogs'>
        <p className='NameForm'> Dialogs</p>
        <div className="Dialogs">
            <div className='Persons'>
                <ul>
                    {newUsersData}
                </ul>
            </div>
            <div className='Persons_Dialogs'>
                {newpostData}
                <div className='Message_Dialog'>
                    <AddMessageFormRedux onSubmit={addNewMessageChange} />
                    {/* <textarea onChange={onChangeMessage} value={state.newMessageText} ref={s}></textarea>
                    <button onClick={ClickButton} type='input'>Отправить</button> */}

                </div>
            </div>
        </div>
    </div>
    );
}
const maxlenth15 = maxlengthCreator(100);
const AddMessageForm = (props) => {
    // let s = React.createRef();
    // let ClickButton = () => {
    //     props.ClickButton();
    // }
    // let onChangeMessage = () => {
    //     let text = s.current.value;
    //     props.onChangeMessage(text);
    // }
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name="newMessageBody" component={TextAreaComponent} validate={[requiredField, maxlenth15]} placeholder="Enter your message" />
                </div>
                {/* <textarea onChange={onChangeMessage} value={props.newMessageText} ref={s}></textarea> */}
                <div>
                    <button>Отправить</button>
                </div>
            </form>
        </div>
    )
}

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm);

export default Dialogs;