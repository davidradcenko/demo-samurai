

import React from 'react';
import { connect } from 'react-redux';

import   { logoutAcchen }  from '../../Redux/authReduser';
import Headerh from './header';


class HeaderConteiner extends React.Component {
    debugger;
    render(){
return <Headerh 
isAuth={this.props.isAuth}
login={this.props.login}
logoutAcchen={this.props.logoutAcchen}
/>
}
}

const mapStateToProps=(state)=>{
    return{
    isAuth:state.auth.isAuth,
    login:state.auth.login
    }
};
export default  connect(mapStateToProps,{logoutAcchen}) (HeaderConteiner);