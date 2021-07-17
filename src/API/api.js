import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "0d80e3e0-7f08-4f12-bc9d-12cd0ab88669"
    }
})

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(Response => {
            return Response.data;
        })

    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId){
        console.warn('Obsolete method. Please ProfileAPI object');
       return  ProfileAPI.getProfile(userId);
    }
}

export const ProfileAPI={
    getProfile(userId){
       return  instance.get(`profile/`+userId)
    },
    getStatus(userId){
        return instance.get(`profile/status/`+userId)
    },
    updateStatus(status){
        return instance.put(`profile/status/`,{status:status}) ;
    }
}

debugger;
export const authAPI = {
    me(){
       return  instance.get(`auth/me`,{withCredentials:true})
    },
    login(email,password,rememberMe=false){
       
       return  instance.post(`auth/login`,{email,password,rememberMe})
    },
    logout(){ 
       return  instance.delete(`auth/login`);
    }
}