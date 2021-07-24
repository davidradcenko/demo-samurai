
import React from 'react';
import { connect } from 'react-redux';
import {  withRouter } from 'react-router';
import { compose } from 'redux';


import { newPost,getUserProfile,getStatus,updateStatus, saveFoto } from '../../Redux/ProfilPageReducer.js';
import {  setFetching } from '../../Redux/UsersPageReducer';
import Preloader from '../common/Preloader/Preloader.js';
import Profil from './content_profil.jsx';


class ProfileContainer extends React.Component{
  refrechProfile(){
let userId=this.props.match.params.userId;
        if(!userId){
         userId=this.props.userId ;
         if(!userId){
             this.props.history.push("/login");
         }
        } 
         this.props.setFetching(true);
        this.props.getUserProfile(userId);
         this.props.setFetching(false);

 this.props.getStatus(userId);
  }

    componentDidMount() {
        this.refrechProfile();
    }


componentDidUpdate(prevProps,prevState,snapshot){
    if(this.props.match.params.userId != prevProps.match.params.userId){
    this.refrechProfile();
}
}

render(){
    
    return  <> {this.props.isFetching ?<Preloader/>:null}
        <Profil saveFoto={this.props.saveFoto}  state={this.props.state} isOwner={!this.props.match.params.userId}
        newPost={this.props.newPost} profil={this.props.profil} status={this.props.status} updateStatus={this.props.updateStatus}/>
    )
    </>
}
}


let mapStateToProps=(state)=>{
    return{
        state:state.profilPage,
        profil:state.profilPage.profil,
        isFetching:state.usersPage.isFetching,
        status:state.profilPage.status,
        userId:state.auth.userId,
       isAuth:state.auth.isAuth
    }
}


// let AuthRedirectComponent=WithAuthRedirect(ProfileContainer);
// let WithUrlDataConteinerComponent=withRouter(AuthRedirectComponent);
// const SuperContent_profil_Conteiner= connect(mapStateToProps,{setFetching,getUserProfile,updateNewPostText,newPost})(WithUrlDataConteinerComponent);

export default compose(
    connect(mapStateToProps,{saveFoto,setFetching,getUserProfile,newPost,getStatus,updateStatus}),
    withRouter,
    // WithAuthRedirect
)(ProfileContainer);