import { AppStateType, InferActionType } from './Redux-Store';
import { userType } from './../Types/Types';
/* eslint eqeqeq: 0 */
import { userAPI } from "../API/api";

import { updateObjectInArray } from "./utils/object-helpers";
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';


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

        case 'FULLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, active.text, "id", { followed: true })
            }

        case 'UNFULLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, active.text, "id", { followed: false })
            }

        case 'SET_USERS_AC':
            return {
                ...state, users: active.text
            }


        case 'SET_CURRENT_PAGE':
            return {
                ...state, currentPage: active.text
            }

        case 'SET_TOTAL_USERS_COUNT':
            return {
                ...state, totalUsersCount: active.text
            }
        case 'TOGGLE_IS_FRTCHING':
            return {
                ...state, isFetching: active.text
            }
        case 'TOGGLE_IS_FOLLOW_PROGRESS':
            return {
                ...state, followingInProgress: active.text
                    ? [...state.followingInProgress, active.userid]
                    : state.followingInProgress.filter(id => id != active.userid)
            }
        default: return state;
    }
}


type ActionTypes = InferActionType<typeof actions>;

export const actions = {
    fullowSuccess: (UserID: number) => ({ type: 'FULLOW', text: UserID } as const),
    unfullowSuccess: (UserID: number) => ({ type: 'UNFULLOW', text: UserID } as const),
    setUsers: (User: Array<userType>) => ({ type: 'SET_USERS_AC', text: User } as const),
    setcurrentPage: (curentPage: number) => ({ type: 'SET_CURRENT_PAGE', text: curentPage } as const),
    settotalUsersCount: (totalusersCount: number) => ({ type: 'SET_TOTAL_USERS_COUNT', text: totalusersCount } as const),
    setFetching: (FRTCHING: boolean) => ({ type: 'TOGGLE_IS_FRTCHING', text: FRTCHING } as const),
    setFollowProgress: (Follow: boolean, id: number) => ({ type: 'TOGGLE_IS_FOLLOW_PROGRESS', text: Follow, userid: id } as const)
}






type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionTypes>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;

const followUnfollowFlow = async (dispatch: DispatchType, userId: number, apiMetod: any, actionCreator: (userId: number) => ActionTypes) => {
    dispatch(actions.setFollowProgress(true, userId));
    let Response = await apiMetod(userId)

    if (Response.data.resultCode == 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(actions.setFollowProgress(false, userId));

}


export const getUsers = (currentPage: number, pageSize: number) => {
    return async (dispatch: DispatchType, getState: GetStateType) => {
        dispatch(actions.setFetching(true));
        dispatch(actions.setcurrentPage(currentPage));
        let data = await userAPI.getUsers(currentPage, pageSize)
        dispatch(actions.setFetching(false));
        dispatch(actions.setUsers(data.items));
        dispatch(actions.settotalUsersCount(data.totalCount));

    }
}

export const follow = (userId: number): ThunkType => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, userAPI.follow.bind(userAPI), actions.fullowSuccess)
    }
}

export const unfollow = (userId: number): ThunkType => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, userAPI.unfollow.bind(userAPI), actions.unfullowSuccess)
    }
}


export default UsersPageReducer;
