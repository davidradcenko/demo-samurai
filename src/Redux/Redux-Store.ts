import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import authReduser from "./authReduser";
import dialogPageReducer from "./dialogPageReducer";
import ProfilPageReducer from "./ProfilPageReducer";
import UsersPageReducer from "./UsersPageReducer";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import appReduser from "./app-reduser";




let reducers = combineReducers({
   profilPage: ProfilPageReducer,
   dialogsPage: dialogPageReducer,
   usersPage: UsersPageReducer,
   auth: authReduser,
   form: formReducer,
   app: appReduser
});
type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionType<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesType<T>>


type reducersType = typeof reducers
export type AppStateType = ReturnType<reducersType>
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


export default store;