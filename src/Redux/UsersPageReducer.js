/* eslint eqeqeq: 0 */
import { userAPI } from "../API/api";
import { updateObjectInArray } from "./utils/object-helpers";


const FULLOW = 'FULLOW';
const UNFULLOW = 'UNFULLOW';
const SET_USERS_AC = 'SET_USERS_AC';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FRTCHING = 'TOGGLE_IS_FRTCHING';
const TOGGLE_IS_FOLLOW_PROGRESS='TOGGLE_IS_FOLLOW_PROGRESS';
 
let f = {
   users:[],
   pageSize:10,
   totalUsersCount:0,
   currentPage:4,
   isFetching:false,
   followingInProgress: []
//     users:[{id:1,userFoto:"https://cdn-1.vedomosti.ru/image/2017/39/12lbki/retina_big-1e0k.jpg",followed:false,fullName:"David",status:"I am a boss",location:{city:"Minsk",country:"Belarus"}}
// ,{id:2,userFoto:"https://cdn-1.vedomosti.ru/image/2017/39/12lbki/retina_big-1e0k.jpg",followed:true,fullName:"David",status:"I am a boss",location:{city:"Minsk",country:"Belarus"}}]
}



const UsersPageReducer = (state = f, active) => {


    switch (active.type) {

        case FULLOW:
          return{
            ...state,
            users:updateObjectInArray(state.users,active.text,"id",{followed:true})
          }

        case UNFULLOW:
            return{
            ...state,
           users:updateObjectInArray(state.users,active.text,"id",{followed:false})
          }
        
          case SET_USERS_AC:
              return{
                  ...state,users:active.text
              }


            case SET_CURRENT_PAGE:
              return{
                  ...state,currentPage:active.text 
              }

              case SET_TOTAL_USERS_COUNT:
              return{
                  ...state,totalUsersCount:active.text 
              }
              case TOGGLE_IS_FRTCHING:
              return{
                  ...state,isFetching:active.text 
              }
              case TOGGLE_IS_FOLLOW_PROGRESS:
                return{
                  ...state,followingInProgress:active.text
                  ?[...state.followingInProgress, active.userid ]
                  :state.followingInProgress.filter(id=>id !=active.userid )
              }
        default: return state;
    }
}



export const fullowSuccess = (UserID) => {
    return {
        type: FULLOW,
        text:UserID
    }
};
export const unfullowSuccess = (UserID) => {
    return {
        type: UNFULLOW,
        text: UserID
    }
};
export const setUsers = (User) => {
    return {
        type: SET_USERS_AC,
        text: User
    }
};
export const setcurrentPage = (curentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        text: curentPage
    }
};
export const settotalUsersCount = (totalusersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        text: totalusersCount
    }
};
export const setFetching = (FRTCHING) => {
    return {
        type: TOGGLE_IS_FRTCHING,
        text: FRTCHING
    }
};
export const setFollowProgress = (Follow,id) => {
    return {
        type: TOGGLE_IS_FOLLOW_PROGRESS,
        text: Follow,
        userid:id
    }
};


const followUnfollowFlow=async(dispatch,userId,apiMetod,actionCreator)=>{
      dispatch(setFollowProgress(true, userId));
          let Response=await apiMetod(userId)

            if (Response.data.resultCode == 0) {
            dispatch(actionCreator(userId));
            }
        dispatch(setFollowProgress(false, userId));
                                
    }


 export const getUsers=(currentPage,pageSize)=>{
  return async  (dispatch)=>{
           dispatch( setFetching(true));
           dispatch(setcurrentPage(currentPage));
       let data=await userAPI.getUsers(currentPage,pageSize)
           dispatch(setFetching(false)); 
            dispatch(setUsers(data.items));
            dispatch(settotalUsersCount(data.totalCount));
    
    }
}

 export const follow=(userId)=>{
   return async (dispatch)=>{
        followUnfollowFlow(dispatch,userId,userAPI.follow.bind(userAPI),fullowSuccess)                         
    }
}

 export const unfollow=(userId)=>{
   return async (dispatch)=>{
        followUnfollowFlow(dispatch,userId,userAPI.unfollow.bind(userAPI),unfullowSuccess)
    }
}


export default UsersPageReducer;
