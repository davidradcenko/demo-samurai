import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import Preloader from './MyHTML/common/Preloader/Preloader.js';
import Navigation from './MyHTML/content_navigation/content_navigation.js';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import HeaderConteiner from './MyHTML/header/HeaderContainer.js';
import Login from './MyHTML/login/login.jsx';
import './MyHTML/MainCss.css';
import store from './Redux/Redux-Store';
import SuperUsersContainer from './MyHTML/Users/UsersContainer.js';
import { initializeApp } from './Redux/app-reduser.js';
import { WithSuspens } from './hoc/WithSuspens.js';
//


//import DialogsContainer from './MyHTML/Dialogs/DialogsContainer.js';
const DialogsContainer=React.lazy(()=>import('./MyHTML/Dialogs/DialogsContainer.js'))
//import Content from './MyHTML/content_profil/content_profil_Conteiner.js';
const ProfileContainer=React.lazy(()=>import('./MyHTML/content_profil/content_profil_Conteiner.js'))


class App extends Component {
  cathAllhandelErrors = (PromiseRejectionEvent)=>{
    alert("Some error occured")
    //console.error(PromiseRejectionEvent)
  }
  componentDidMount(){
       this.props.initializeApp();
       window.addEventListener("unhandledrejection",this.cathAllhandelErrors);
    }
  componentWillUnmount(){
    window.removeEventListener("unhandledrejection",this.cathAllhandelErrors);
  }

  render(){
    if(!this.props.initialized) {return <Preloader/>}
  
  
    return (
    
    <div className="App">
       <div className="conteiner">
         <HeaderConteiner/>
         <div className="content">
           <Navigation/>
           <Switch>
            <Route exact path="/"  render={() => <Redirect to={"/Profil"}/>  }/>
            <Route path="/Profil/:userId?"  render={ WithSuspens(ProfileContainer)}/>
            <Route path="/Dialogs" render={ WithSuspens(DialogsContainer)}/>
            <Route path="/Users" render={()=><SuperUsersContainer  />}/>
            <Route path="/login" render={()=><Login  />}/>
            <Route path="*" render={()=><div>404 Not FOUND</div>}/>
          </Switch>
         
         </div>
       </div>
    </div>
    
  );
}}

const mapStateToProps=(state)=>({
initialized: state.app.initialized
})

let AppContainer= compose( 
  withRouter,
  connect(mapStateToProps,{initializeApp}))(App);


  const SamuraiJSPApp=(props)=>{
     return  <BrowserRouter>
      <Provider store={store}>
            <AppContainer />
      </Provider> 
     </BrowserRouter>
   }

   export default SamuraiJSPApp;