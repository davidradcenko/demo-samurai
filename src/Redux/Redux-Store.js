import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import authReduser from "./authReduser";
import dialogPageReducer from "./dialogPageReducer";
import ProfilPageReducer from "./ProfilPageReducer";
import UsersPageReducer from "./UsersPageReducer";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import appReduser from "./app-reduser";




let reducers=combineReducers({
   profilPage:ProfilPageReducer,
   dialogsPage:dialogPageReducer,
   usersPage:UsersPageReducer,
   auth:authReduser,
   form:formReducer,
   app:appReduser
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducers,  composeEnhancers(
    applyMiddleware(thunkMiddleware)));

 //let store=createStore(reducers,applyMiddleware(thunkMiddleware));
 export default store;