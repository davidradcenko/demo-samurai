

import React from 'react';
import { connect } from 'react-redux';

import  logout  from '../../Redux/authReduser';
import Headerh from './header';


class HeaderConteiner extends React.Component {
    
    render(){
return <Headerh {...this.props}/>
}
}
const mapStateToProps=(state)=>{
    return{
    isAuth:state.auth.isAuth,
    login:state.auth.login
    }
};

export default  connect(mapStateToProps,{logout}) (HeaderConteiner);