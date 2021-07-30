import { stopSubmit } from "redux-form";
import { ProfileAPI, userAPI } from "../API/api";


const PROFIL_ADD_NEWPOST = 'PROFIL_ADD_NEWPOST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_FOTO='SAVE_FOTO';



let f = {
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
    profil: null,
    status:""
}



const ProfilPageReducer = (state = f, active) => {


    switch (active.type) {

        case PROFIL_ADD_NEWPOST:
           
            let textbody = active.text;
            return {
                ...state,
               
                message: [...state.message, { id: 5, text: textbody }]
            };;
        case SET_USER_PROFILE:
            return {
                ...state,
                profil: active.test
            };
        case SET_STATUS:
            return {
                ...state,
                status: active.test
            };
        case SAVE_FOTO:
            return{
                ...state,
                profil:{...state.profil,photos: active.foto}
            }
        default: return state;
    }
}

export const setStatus = (active) => {
    return {
        type: SET_STATUS,
        test: active
    }
};
export const setUserProfile = (active) => {
    return {
        type: SET_USER_PROFILE,
        test: active
    }
};

export const newPost = (newMessage) => {
    return {
        type: PROFIL_ADD_NEWPOST,
        text:newMessage
    }
};
export const saveFotoSuccess=(foto)=>({type:SAVE_FOTO,foto})
export const getUserProfile=(userId)=>async(dispatch)=>{
     
   let Response=await userAPI.getProfile(userId)
           dispatch(setUserProfile(Response.data));
        
}
export const getStatus=(userId)=>async(dispatch)=>{
     
    let Response=await ProfileAPI.getStatus(userId)
           dispatch(setStatus(Response.data));
}

export const updateStatus=(status)=>async(dispatch)=>{
     
   let Response=await ProfileAPI.updateStatus(status)
    
           if(Response.data.resultCode===0){
           dispatch(setStatus(status));
    }
}


export const saveFoto =(file)=>async (dispatch)=>{
    let Response=await ProfileAPI.saveFoto(file)
           if(Response.data.resultCode===0){
           dispatch(saveFotoSuccess(Response.data.data.photos));
    }
}
export const saveProfile =(profile)=>async (dispatch, getState)=>{
    const userrId=getState().auth.userId;
    const Response=await ProfileAPI.saveProfile(profile)
    debugger;
           if(Response.data.resultCode===0){
           dispatch(getUserProfile(userrId));
    }else{
        dispatch(stopSubmit("edit-profile",{_error: Response.data.messages[0]}))
        return Promise.reject(Response.data.messages[0]);
       // способ отображения ошибки в input
       // dispatch(stopSubmit("edit-profile",{"contacts": { "facebook": Response.data.messages[0]}}))
    }
}

export default ProfilPageReducer;