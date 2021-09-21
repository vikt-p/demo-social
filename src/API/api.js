import * as axios from "axios";


const instance=axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0',
    headers:{
        "API-KEY": "04f314d1-e1c2-405c-90c5-59a7352bc31c"
    }
})

export const userAPI= {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    follow(UserId){
        return instance.post (`follow/${UserId}`)
    },
    unfollow(UserId){
        return instance.delete (`follow/${UserId}`)
    },
    getProfile(UserId){
        console.warn('Obsolete method.Please, use profileAPI object')
        return profileAPI.getProfile(UserId);
    }
    }

export const authAPI= {
    me() {
        return instance.get(`auth/me`);
    },
    login(email,password,rememberMe=false) {
        return instance.post(`auth/login`,{email,password,rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}

    export const profileAPI= {
        getProfile(UserId){
            return instance.get(`profile/` + UserId)
        },
        getStatus(UserId) {
            return instance.get(`profile/status/` + UserId)
        },
        updateStatus(status) {
            return instance.put(`profile/status/`,{status:status})
        },
        savePhoto(photoFile){
            let  formData = new FormData();
            formData.append("image", photoFile);
            return instance.post(`profile/photo`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        }

    }
