import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import SMPlayer from './modules/audioPlayerModule.js';
import userInfoM from './modules/userInfoModule.js';

let store = new Vuex.Store({
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        SMPlayer,
        userInfoM,
    },
})

export default store;