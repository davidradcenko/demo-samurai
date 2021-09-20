import { ResultCodesForCapctha } from './../API/api';
import { stopSubmit } from "redux-form";

import { authAPI, ResultCodesEnam, securityAPI } from "../API/api";


const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCH_URL = 'GET_CAPTCH_URL';

type InitialStateType2 = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean
  isFetching: boolean
  capthaUrl: string | null
}

let f = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  isFetching: false,
  capthaUrl: null as string | null

  //     users:[{id:1,userFoto:"https://cdn-1.vedomosti.ru/image/2017/39/12lbki/retina_big-1e0k.jpg",followed:false,fullName:"David",status:"I am a boss",location:{city:"Minsk",country:"Belarus"}}
  // ,{id:2,userFoto:"https://cdn-1.vedomosti.ru/image/2017/39/12lbki/retina_big-1e0k.jpg",followed:true,fullName:"David",status:"I am a boss",location:{city:"Minsk",country:"Belarus"}}]
}

//export type InitialStateType = typeof f


const authReduser = (state = f, action: any): InitialStateType2 => {


  switch (action.type) {

    case SET_USER_DATA:

      return {
        usewegwgwhrrid: '11111',
        ...state,
        ...action.data
      }
    case GET_CAPTCH_URL:
      return {
        ...state,
        capthaUrl: action.data
      }
    default:
      return state;
  }
}
type setuserdataActionDataType = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean
}
type setuserdataActionType = {
  type: typeof SET_USER_DATA
  data: setuserdataActionDataType
}

export const setuserdata = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): setuserdataActionType => ({ type: SET_USER_DATA, data: { userId, email, login, isAuth } });


type setCapthaActionType = {
  type: typeof GET_CAPTCH_URL
  data: { capthaUurlrl: string }
}
export const setCaptha = (capthaUurlrl: string): setCapthaActionType => ({ type: GET_CAPTCH_URL, data: { capthaUurlrl } });

export const getAuthUserData = () => async (dispatch: any) => {
  let meData = await authAPI.me()
  if (meData.resultCode === ResultCodesEnam.Success) {
    let { id, email, login } = meData.data;
    dispatch(setuserdata(id, email, login, true));
  }
};

export const login = (email: string, password: string, rememberMe: boolean, capthUrl: any) => async (dispatch: any) => {

  let Data = await authAPI.login(email, password, rememberMe, capthUrl)
  debugger;
  if (Data.resultCode === ResultCodesEnam.Success) {
    dispatch(getAuthUserData());
  } else {
    if (Data.resultCode === ResultCodesForCapctha.CaptchaIsRequired) {
      debugger;
      console.log("------------------");
      dispatch(getCapthaURL());
    }
    let message = Data.messages.length > 0 ? Data.messages[0] : "Some error1";
    dispatch(stopSubmit("login", { _error: message }));
  }
}


export const logoutAcchen = () => async (dispatch: any) => {

  let Response = await authAPI.logout()
  if (Response.data.resultCode === 0) {
    dispatch(setuserdata(null, null, null, false));
  }
}

export const getCapthaURL = () => async (dispatch: any) => {
  debugger;
  const Response = await securityAPI.grtCapchaURL();
  const captchaUrl = Response.data.url;
  debugger;
  dispatch(setCaptha(captchaUrl));

}
export default authReduser;
