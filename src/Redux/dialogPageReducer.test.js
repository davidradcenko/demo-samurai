import dialogPageReducer, { addMessageText } from "./dialogPageReducer";

it('',()=>{
    let active= addMessageText("it-kamasutra");
    let state = {
    postData: [{
        id: 1,
        name: 'David',
        text: "It if sometimes furnished unwilling as additions so. Blessing resolved peculiar fat graceful ham. Sussex on at really ladies in as elinor. Sir sex opinions age properly extended. Advice branch vanity or do thirty living. Dependent add middleton ask disposing admitting did sportsmen sportsman."
    }]
}
let newState=dialogPageReducer(state,active);
expect(newState.postData.length).toBe(2);

})