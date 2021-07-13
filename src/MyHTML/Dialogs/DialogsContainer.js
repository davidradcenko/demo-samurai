
import { connect } from 'react-redux';
import { compose } from 'redux';

import { addMessageText } from '../../Redux/dialogPageReducer';

import Dialogs from './Dialogs';


// const DialogsContainer = (props) => {


//     return (
//         <StoreContext.Consumer>{store => {
//             let ClickButton = () => {

//                 store.dispatch(addMessageText());
//             }
//             let onChangeMessage = (text) => {
//                 let active = UpdateNewMessageText(text);
//                 store.dispatch(active);
//             }
//             return <Dialogs store={store} ClickButton={ClickButton} onChangeMessage={onChangeMessage} />
//         }}</StoreContext.Consumer>
//     );
// }

let mapStateToProps = (state) => {
    return {
        state: state.dialogsPage
       
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        ClickButton: (newMessageBody) => {
            dispatch(addMessageText(newMessageBody));
        }
    }
}
// let AuthRedirectComponent=WithAuthRedirect(Dialogs);
// const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
// export default SuperDialogsContainer;
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
//   WithAuthRedirect  
)(Dialogs)