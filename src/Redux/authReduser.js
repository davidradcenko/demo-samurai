
import { stopSubmit } from "redux-form";
import { authAPI } from "../API/api";


const SET_USER_DATA = 'SET_USER_DATA';


 
let f = {
  userId:null,
   email:null,
   login:null,
   isFetching:false,
   isAuth:false
//     users:[{id:1,userFoto:"https://cdn-1.vedomosti.ru/image/2017/39/12lbki/retina_big-1e0k.jpg",followed:false,fullName:"David",status:"I am a boss",location:{city:"Minsk",country:"Belarus"}}
// ,{id:2,userFoto:"https://cdn-1.vedomosti.ru/image/2017/39/12lbki/retina_big-1e0k.jpg",followed:true,fullName:"David",status:"I am a boss",location:{city:"Minsk",country:"Belarus"}}]
}



const authReduser = (state = f, active) => {


    switch (active.type) {

        case SET_USER_DATA:
          return{
            ...state,
            ...active.data
          }

        default: return state;
    }
}



export const setuserdata = (userId,email,login,isAuth) => {
   
    return {
        type: SET_USER_DATA,
        data:{
            userId,email,login,isAuth
        }
    }
};

export const getAuthUserData=()=>async(dispatch)=>{
         let Response= await authAPI.me()            
            if(Response.data.resultCode===0){
                let {id,email,login}=Response.data.data;
                dispatch(setuserdata(id,email,login,true));
            }
        }; 
       


export const login=(email,password,rememberMe)=>async(dispatch)=>{
  let Response=await authAPI.login(email,password,rememberMe)
            if(Response.data.resultCode===0){
               dispatch(getAuthUserData());
            }else{
                let message= Response.data.messages.length>0 ? Response.data.messages[0] : "Some error";
                dispatch(stopSubmit("login",{_error:message})); 
            }
}


export const logout=()=>(dispatch)=>{

  return  authAPI.logout().then(Response=>{
          
            if(Response.data.resultCode===0){
             
                dispatch(setuserdata(null,null,null,false));
            }  
            })      
}

export default authReduser;
