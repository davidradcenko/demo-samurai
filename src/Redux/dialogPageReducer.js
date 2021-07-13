const MESSAGE_ADD_NEWMESSAGE = 'MESSAGE_ADD_NEWMESSAGE';


let f = {
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
        id: 1,
        name: 'David',
        text: "It if sometimes furnished unwilling as additions so. Blessing resolved peculiar fat graceful ham. Sussex on at really ladies in as elinor. Sir sex opinions age properly extended. Advice branch vanity or do thirty living. Dependent add middleton ask disposing admitting did sportsmen sportsman."
    }]
}


const dialogPageReducer = (state = f, active) => {
    switch (active.type) {
        case MESSAGE_ADD_NEWMESSAGE: {
            let body=active.text;
            return {
                ...state,
                
                postData: [...state.postData, { id: 2, name: 'david', text: body }]
            };
        }
      
        default: return state;
    }
}

export const addMessageText = (newMessageBody) => {
    return {
        type: MESSAGE_ADD_NEWMESSAGE,
        text:newMessageBody
    }
};

export default dialogPageReducer;