import axios from "axios";
import { profilType } from "../Types/Types";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "0d80e3e0-7f08-4f12-bc9d-12cd0ab88669"
    }
})

export enum ResultCodesEnam {
    Success = 0,
    Error = 1,
}
export enum ResultCodesForCapctha {
    CaptchaIsRequired = 10
}

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(Response => {
            return Response.data;
        })

    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: number) {
        console.warn('Obsolete method. Please ProfileAPI object');
        return ProfileAPI.getProfile(userId);
    }
}

export const ProfileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, { status: status });
    },
    saveProfile(profile: profilType) {
        return instance.put(`profile/`, profile);
    },
    saveFoto(file: any) {
        const fotmData = new FormData();
        fotmData.append("image", file)
        return instance.put(`profile/photo`, fotmData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
}

type MeResponseTypes = {
    data: { id: number, email: string, login: string }
    resultCode: ResultCodesEnam
    messages: Array<string>
}
type LoginResponseType = {
    data: { userId: number }
    resultCode: ResultCodesForCapctha | ResultCodesEnam
    messages: Array<string>
}
export const authAPI = {
    me() {
        return instance.get<MeResponseTypes>(`auth/me`, { withCredentials: true }).then(res => res.data)
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: null | string = null) {

        return instance.post<LoginResponseType>(`auth/login`, { email, password, rememberMe, captcha }).then(res => res.data)
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}
export const securityAPI = {
    grtCapchaURL() {
        return instance.get(`security/get-captcha-url`)
    }
}