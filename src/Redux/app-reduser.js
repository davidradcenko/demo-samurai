
import { getAuthUserData } from "./authReduser";


const SET_INITIALIZED = 'SET_INITIALIZED';


 
let f = {
  initialized:false
  }



const appReduser = (state = f, active) => {


    switch (active.type) {

        case SET_INITIALIZED:
          return{
            ...state,
            initialized:true
          }

        default: return state;
    }
}



export const setinitializedSuccess= (userId,email,login,isAuth) => {
    return {
        type: SET_INITIALIZED
        }
};


export const initializeApp=()=>(dispatch)=>{
 
  let promise=dispatch(getAuthUserData());

Promise.all([promise]).then(()=>{
 dispatch(setinitializedSuccess());
})
}

export default appReduser;
