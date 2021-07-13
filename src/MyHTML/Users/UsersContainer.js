import React from 'react';
import { connect } from 'react-redux';


import { follow, unfollow,setcurrentPage,setFollowProgress,getUsers } from '../../Redux/UsersPageReducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

import {getPageSize_selector, getTotalUsersCount_selector, getCurrentPage_selector, getIsFetching_selector, getFollowingInProgress_selector, getUsersSuperSelector} from '../../Redux/selectors/users_selectors'




class UsersConteiner extends React.Component {

    componentDidMount() {
        const {currentPage,pageSize}=this.props;
        this.props.getUsers(currentPage,pageSize);
        //  this.props.setFetching(true);
        // userAPI.getUsers(this.props.currentPage,this.props.pageSize).then(data => {
        //     this.props.setFetching(false); 
        //     this.props.setUsers(data.items);
        //     this.props.settotalUsersCount(data.totalCount);
        // });
    }
    onPageChanged = (pageNamber) => {
        const {pageSize}=this.props;
        this.props.getUsers(pageNamber,pageSize);
        // this.props.setFetching(true);
        // this.props.setcurrentPage(pageNamber);
        //  userAPI.getUsers(pageNamber,this.props.pageSize).then(data => {
        // this.props.setFetching(false);     
        // this.props.setUsers(data.items);
        // });
    }
    render() {

        return <>
        {this.props.isFetching ?
         <Preloader/>:null}
         <Users
          
            totalItemsCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}

            unfollow={this.props.unfollow}
            follow={this.props.follow}
            setFollowProgress={this.props.setFollowProgress}
            followingInProgress={this.props.followingInProgress}
        />
        </>
    }
}

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize:state.usersPage.pageSize ,
//         totalUsersCount:state.usersPage.totalUsersCount,
//         currentPage:state.usersPage.currentPage,
//         isFetching:state.usersPage.isFetching,
//         followingInProgress:state.usersPage.followingInProgress
//     }
// }

let mapStateToProps = (state) => {
    return {
        users:   getUsersSuperSelector(state),
        pageSize:getPageSize_selector(state) ,
        totalUsersCount:getTotalUsersCount_selector(state),
        currentPage:getCurrentPage_selector(state),
        isFetching:getIsFetching_selector(state),
        followingInProgress:getFollowingInProgress_selector(state)
    }
}

// let mapDispatchToProps = (dispatch) => {
    
//     return {
//         unfullow: (text) => {
//             dispatch(unfullowAC(text));
//         },
//         fullow: (text) => {
//             dispatch(fullowAC(text));
//         },
//         setUsers: (text) => {
//             dispatch(setUsersAC(text));
//         },
//         setcurrentPage:(pageNumber)=>{
//             dispatch(setCurentpageAC(pageNumber));
//         },
//         settotalUsersCount:(totalCount)=>{
//             dispatch(setUsersTotalCountAC(totalCount));
//         },
//         setFetching:(isFeatching)=>{
//             dispatch(setFetchingAC(isFeatching));
//         }
//     }
// }


const SuperUsers_Container = connect(mapStateToProps, 
    { follow,unfollow,setcurrentPage,
        setFollowProgress,
   getUsers   }
    
    )(UsersConteiner);
export default SuperUsers_Container;