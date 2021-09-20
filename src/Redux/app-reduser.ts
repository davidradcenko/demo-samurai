
import { getAuthUserData } from "./authReduser";


const SET_INITIALIZED = 'SET_INITIALIZED';



type InitializeStateType = {
  initialized: boolean
}

let f: InitializeStateType = {
  initialized: false
}



const appReduser = (state = f, active: any): InitializeStateType => {


  switch (active.type) {

    case SET_INITIALIZED:
      return {
        ...state,
        initialized: true
      }

    default: return state;
  }
}

type InitialazinSuccessActiveType = {
  type: typeof SET_INITIALIZED
}

export const setinitializedSuccess = (): InitialazinSuccessActiveType => ({ type: SET_INITIALIZED });


export const initializeApp = () => (dispatch: any) => {

  let promise = dispatch(getAuthUserData());

  Promise.all([promise]).then(() => {
    dispatch(setinitializedSuccess());
  })
}

export default appReduser;
