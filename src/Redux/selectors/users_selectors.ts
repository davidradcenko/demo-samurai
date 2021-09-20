import { createSelector } from "reselect"
import { AppStateType } from "../Redux-Store";

const getUsers_selector = (state: AppStateType) => {
    return state.usersPage.users
}

export const getUsersSuperSelector = createSelector(getUsers_selector,
    (users) => {
        return users.filter(u => true);
    });


export const getPageSize_selector = (state: AppStateType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount_selector = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage_selector = (state: AppStateType) => {
    return state.usersPage.currentPage
}

export const getIsFetching_selector = (state: AppStateType) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress_selector = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}
