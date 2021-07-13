import { createSelector } from "reselect"

 const getUsers_selector=(state)=>{
    return  state.usersPage.users
}

export const getUsersSuperSelector=createSelector(getUsers_selector,
    (users)=>{
        return users.filter(u=>true);
    });


export const getPageSize_selector=(state)=>{
    return state.usersPage.pageSize
}

export const getTotalUsersCount_selector=(state)=>{
    return state.usersPage.totalUsersCount
}

export const getCurrentPage_selector=(state)=>{
    return state.usersPage.currentPage 
}

export const getIsFetching_selector=(state)=>{
    return state.usersPage.isFetching
}

export const getFollowingInProgress_selector=(state)=>{
    return state.usersPage.followingInProgress
}
