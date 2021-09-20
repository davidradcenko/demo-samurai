import { AppStateType } from './Redux-Store';
import { userType } from './../Types/Types';
/* eslint eqeqeq: 0 */
import { userAPI } from "../API/api";

import { updateObjectInArray } from "./utils/object-helpers";
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';


const FULLOW = 'FULLOW';
const UNFULLOW = 'UNFULLOW';
const SET_USERS_AC = 'SET_USERS_AC';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FRTCHING = 'TOGGLE_IS_FRTCHING';
const TOGGLE_IS_FOLLOW_PROGRESS = 'TOGGLE_IS_FOLLOW_PROGRESS';



let f = {
    users: [] as Array<userType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 4,
    isFetching: false,
    followingInProgress: [] as Array<number> //arrey of users ids
}

type InitialState = typeof f


const UsersPageReducer = (state = f, active: ActionTypes): InitialState => {


    switch (active.type) {

        case FULLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, active.text, "id", { followed: true })
            }

        case UNFULLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, active.text, "id", { followed: false })
            }

        case SET_USERS_AC:
            return {
                ...state, users: active.text
            }


        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: active.text
            }

        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: active.text
            }
        case TOGGLE_IS_FRTCHING:
            return {
                ...state, isFetching: active.text
            }
        case TOGGLE_IS_FOLLOW_PROGRESS:
            return {
                ...state, followingInProgress: active.text
                    ? [...state.followingInProgress, active.userid]
                    : state.followingInProgress.filter(id => id != active.userid)
            }
        default: return state;
    }
}


type ActionTypes = fullowSuccessType | unfullowSuccessType | setUsersType
    | setcurrentPageType | settotalUsersCountType | setFetchingType | setFollowProgressType;

type fullowSuccessType = {
    type: typeof FULLOW
    text: number
}
export const fullowSuccess = (UserID: number): fullowSuccessType => {
    return {
        type: FULLOW,
        text: UserID
    }
};
type unfullowSuccessType = {
    type: typeof UNFULLOW
    text: number
}
export const unfullowSuccess = (UserID: number): unfullowSuccessType => {
    return {
        type: UNFULLOW,
        text: UserID
    }
};
type setUsersType = {
    type: typeof SET_USERS_AC
    text: Array<userType>
}
export const setUsers = (User: Array<userType>): setUsersType => {
    return {
        type: SET_USERS_AC,
        text: User
    }
};
type setcurrentPageType = {
    type: typeof SET_CURRENT_PAGE
    text: number
}
export const setcurrentPage = (curentPage: number): setcurrentPageType => {
    return {
        type: SET_CURRENT_PAGE,
        text: curentPage
    }
};
type settotalUsersCountType = {
    type: typeof SET_TOTAL_USERS_COUNT
    text: number
}
export const settotalUsersCount = (totalusersCount: number): settotalUsersCountType => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        text: totalusersCount
    }
};
type setFetchingType = {
    type: typeof TOGGLE_IS_FRTCHING
    text: boolean
}
export const setFetching = (FRTCHING: boolean): setFetchingType => {
    return {
        type: TOGGLE_IS_FRTCHING,
        text: FRTCHING
    }
};
type setFollowProgressType = {
    type: typeof TOGGLE_IS_FOLLOW_PROGRESS
    text: boolean
    userid: number
}
export const setFollowProgress = (Follow: boolean, id: number): setFollowProgressType => {
    return {
        type: TOGGLE_IS_FOLLOW_PROGRESS,
        text: Follow,
        userid: id
    }
};




type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionTypes>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;

const followUnfollowFlow = async (dispatch: DispatchType, userId: number, apiMetod: any, actionCreator: (userId: number) => unfullowSuccessType | fullowSuccessType) => {
    dispatch(setFollowProgress(true, userId));
    let Response = await apiMetod(userId)

    if (Response.data.resultCode == 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(setFollowProgress(false, userId));

}


export const getUsers = (currentPage: number, pageSize: number) => {
    return async (dispatch: DispatchType, getState: GetStateType) => {
        dispatch(setFetching(true));
        dispatch(setcurrentPage(currentPage));
        let data = await userAPI.getUsers(currentPage, pageSize)
        dispatch(setFetching(false));
        dispatch(setUsers(data.items));
        dispatch(settotalUsersCount(data.totalCount));

    }
}

export const follow = (userId: number): ThunkType => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, userAPI.follow.bind(userAPI), fullowSuccess)
    }
}

export const unfollow = (userId: number): ThunkType => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, userAPI.unfollow.bind(userAPI), unfullowSuccess)
    }
}


export default UsersPageReducer;
