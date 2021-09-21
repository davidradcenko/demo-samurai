import { compose } from 'redux';
import React from 'react';
import { connect } from 'react-redux';


import { follow, unfollow, getUsers } from '../../Redux/UsersPageReducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

import { getPageSize_selector, getTotalUsersCount_selector, getCurrentPage_selector, getIsFetching_selector, getFollowingInProgress_selector, getUsersSuperSelector } from '../../Redux/selectors/users_selectors'
import { userType } from '../../Types/Types';
import { AppStateType } from '../../Redux/Redux-Store';

type MapPropsType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    totalUsersCount: number
    users: Array<userType>
    followingInProgress: Array<number>
}

type MapDispatchPropsType = {
    getUsers: (currentPage: number, pageSize: number) => void
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

type OwnPropsType = {
    pageTitl: string
}



type PropsType = MapPropsType & MapDispatchPropsType & OwnPropsType

class UsersConteiner extends React.Component<PropsType> {

    componentDidMount() {
        const { currentPage, pageSize } = this.props;
        this.props.getUsers(currentPage, pageSize);
    }
    onPageChanged = (pageNamber: number) => {
        const { pageSize } = this.props;
        this.props.getUsers(pageNamber, pageSize);
    }
    render() {
        return <>
            <h2>{this.props.pageTitl}</h2>
            {this.props.isFetching ? <Preloader /> : null}

            < Users totalItemsCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                followingInProgress={this.props.followingInProgress} />
        </>
    }
}
let mapStateToProps = (state: AppStateType): MapPropsType => {
    return {
        users: getUsersSuperSelector(state),
        pageSize: getPageSize_selector(state),
        totalUsersCount: getTotalUsersCount_selector(state),
        currentPage: getCurrentPage_selector(state),
        isFetching: getIsFetching_selector(state),
        followingInProgress: getFollowingInProgress_selector(state)
    }
}


export default compose(
    connect<MapPropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps,
        { follow, unfollow, getUsers })
)(UsersConteiner);

// const SuperUsers_Container = connect(mapStateToProps,
//     {
//         follow, unfollow, setcurrentPage,
//         setFollowProgress,
//         getUsers
//     }
// )(UsersConteiner);
//export default SuperUsers_Container;