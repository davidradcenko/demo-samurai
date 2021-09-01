
import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../API/api";


const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCH_URL='GET_CAPTCH_URL';

 
let f = {
  userId:null,
   email:null,
   login:null,
    isAuth:false,
   isFetching:false,
   capthaUrl:null
  
//     users:[{id:1,userFoto:"https://cdn-1.vedomosti.ru/image/2017/39/12lbki/retina_big-1e0k.jpg",followed:false,fullName:"David",status:"I am a boss",location:{city:"Minsk",country:"Belarus"}}
// ,{id:2,userFoto:"https://cdn-1.vedomosti.ru/image/2017/39/12lbki/retina_big-1e0k.jpg",followed:true,fullName:"David",status:"I am a boss",location:{city:"Minsk",country:"Belarus"}}]
}



const authReduser = (state = f, action) => {


    switch (action.type) {

        case SET_USER_DATA:
       
          return{
            ...state,
            ...action.data
          }
         case GET_CAPTCH_URL:
           return{
            ...state,
            capthaUrl: action.data
           }
        default: 
          return state;
    }
}



export const setuserdata = (userId,email,login,isAuth) => (  {type: SET_USER_DATA,data:{userId,email,login,isAuth}} );
export const setCaptha = (capthaUurlrl) => (  {type: GET_CAPTCH_URL,data:{capthaUurlrl}} );
export const getAuthUserData=()=>async(dispatch)=>{
         let Response= await authAPI.me()            
            if(Response.data.resultCode===0){
                let {id,email,login}=Response.data.data;
                dispatch(setuserdata(id,email,login,true));
            }
        }; 
       


export const login=(email,password,rememberMe,capthUrl)=>async(dispatch)=>{
     debugger;
  let Response=await authAPI.login(email,password,rememberMe,capthUrl)
            if(Response.data.resultCode===0){
              debugger;
               dispatch(getAuthUserData());
            }else{
              if(Response.data.resultCode===10){
                debugger;
                console.log("------------------");
                dispatch(getCapthaURL());
              }
                let message= Response.data.messages.length>0 ? Response.data.messages[0] : "Some error";
                dispatch(stopSubmit("login",{_error:message})); 
            }
}


export const logoutAcchen=()=>async(dispatch)=>{
   
  let Response=await authAPI.logout()
            if(Response.data.resultCode===0){
                dispatch(setuserdata(null,null,null,false));
            }        
}

export const getCapthaURL=()=>async(dispatch)=>{
   debugger;
        const Response = await securityAPI.grtCapchaURL();
        const captchaUrl = Response.data.url; 
         debugger;  
         dispatch(setCaptha(captchaUrl));
             
} 
export default authReduser;
