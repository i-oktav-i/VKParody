import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import SMPlayer from './modules/audioPlayerModule.js';

let store = new Vuex.Store({
    state: {
        token: '',
        authUrl: 'https://oauth.vk.com/authorize?client_id=7135863&display=page&redirect_uri=http://localhost:8080/getToken&scope=friends,audio,video&response_type=token&v=5.101&state=',
        userId: Number,
    },
    getters: {
        getAuthUrl: state => state.authUrl,
        getToken: state => state.token,
        getUserId: state => state.userId,
        isAuthed: state => state.token !== '',
    },
    mutations: {
        setToken: (state, newToken) => state.token = newToken,
        setUserId: (state, newId) => state.userId = newId,
    },
    actions: {
        setToken: ({commit}, newToken) => commit('setToken', newToken),
        setUserId: ({commit}, newId) => commit('setUserId', newId),
    },
    modules: {
        SMPlayer,
    },
})

// https://oauth.vk.com/token?grant_type=password&client_id=3697615&client_secret=AlVXZFMUqyrnABp8ncuU&username=89185766476&password=1150039ssd&v=5.101&2fa_supported=1

export default store;