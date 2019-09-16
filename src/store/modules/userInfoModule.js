import { userInfo } from "os";

export default {
    state: {
        token: '',
        authUrl: 'https://oauth.vk.com/authorize?client_id=7135863&display=page&redirect_uri=http://localhost:8080/getToken&scope=friends,audio,video&response_type=token',
        userInfo: {},
    },
    getters: {
        getAuthUrl: state => state.authUrl,
        getToken: state => state.token,
        getUserId: state => state.userInfo.user_id,
        getUserFirstName: state => state.userInfo.first_name,
        getUserPhotoXs: state => state.userInfo.photo_50,
        isAuthed: state => state.token !== '',
        getAllUserInfo: state => state.userInfo,
    },
    mutations: {
        setToken: (state, newToken) => state.token = newToken,
        setUserInfo: (state, newInfo) => state.userInfo = newInfo,
    },
    actions: {
        setToken: ({commit}, newToken) => commit('setToken', newToken),
        setUserInfo: ({commit}, newInfo) => commit('setUserInfo', newInfo),
    },
}