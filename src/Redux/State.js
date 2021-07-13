import dialogPageReducer from "./dialogPageReducer";
import ProfilPageReducer from "./ProfilPageReducer";

let store = {
    _state: {
        profilPage:{
        newPostText: 'It-camasutra.com',
         message: [{
                id: 1,
                text: 'Hi'
            },
            {
                id: 2,
                text: 'Hi'
            },
            {
                id: 3,
                text: 'Hi'
            },
            {
                id: 4,
                text: 'Hi'
            }
        ],
        profil: [{
            img: 'https://eencrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4K5dk2JcpotM-GLBsU6ZVwFSQkg0hCYFiUQ&usqp=CAU',
            name: 'Имя',
            Data_of_Birtru: '20.07.2000',
            City: 'Minsk',
            Education: 'higher education',
            Web_Site: 'No'
        }]},
        dialogsPage:{ 
            newMessageText: 'Привет',
        usersData: [{
                id: 1,
                name: 'David'
            },
            {
                id: 2,
                name: 'Selderei'
            },
            {
                id: 3,
                name: 'Grei'
            }
        ],
        postData: [{
            name: 'David',
            text: "It if sometimes furnished unwilling as additions so. Blessing resolved peculiar fat graceful ham. Sussex on at really ladies in as elinor. Sir sex opinions age properly extended. Advice branch vanity or do thirty living. Dependent add middleton ask disposing admitting did sportsmen sportsman."
        }]}  
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('ghbdtn');
    },
    dispatch(action) {
         this._state.dialogsPage=dialogPageReducer(this._state.dialogsPage,action);
         this._state.profilPage=ProfilPageReducer(this._state.profilPage,action);
         this._callSubscriber(this._state);
    },
     subscribe(observer) {
        this._callSubscriber = observer;
    }
}




// export default store;