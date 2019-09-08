import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import SMPlayer from './modules/audioPlayerModule.js';

let store = new Vuex.Store({
    state: {
    },
    getters: {
    },
    mutations: {
        
    },
    modules: {
        SMPlayer,
    },
})

export default store;