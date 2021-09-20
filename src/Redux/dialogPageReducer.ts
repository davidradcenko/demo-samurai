const MESSAGE_ADD_NEWMESSAGE = 'MESSAGE_ADD_NEWMESSAGE';

type usersDataType = {
    id: number
    name: string
}
type postDataType = {
    id: number
    name: string
    text: string
}
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
    ] as Array<usersDataType>,
    postData: [{
        id: 1,
        name: 'David',
        text: "It if sometimes furnished unwilling as additions so. Blessing resolved peculiar fat graceful ham. Sussex on at really ladies in as elinor. Sir sex opinions age properly extended. Advice branch vanity or do thirty living. Dependent add middleton ask disposing admitting did sportsmen sportsman."
    }] as Array<postDataType>
}
export type InitialStateType = typeof f

const dialogPageReducer = (state = f, active: any): InitialStateType => {
    switch (active.type) {
        case MESSAGE_ADD_NEWMESSAGE: {
            let body = active.text;
            return {
                ...state,
                postData: [...state.postData, { id: 2, name: 'david', text: body }]
            };
        }

        default: return state;
    }
}
type addMessageTextType = {
    type: typeof MESSAGE_ADD_NEWMESSAGE
    text: string
}
export const addMessageText = (newMessageBody: string): addMessageTextType => {
    return {
        type: MESSAGE_ADD_NEWMESSAGE,
        text: newMessageBody
    }
};

export default dialogPageReducer;