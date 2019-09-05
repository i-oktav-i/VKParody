import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        music: [
            {title: "1", author: "author1", time: "3:20", src: "https://uzimusic.ru/mp3/2949641/Burak_Yeter_Feat_Danelle_Sandoval_-_Tuesday(uzimusic.ru).mp3"},
            {title: "2", author: "author2", time: "3:20", src: "https://cdn.drivemusic.me/dl/online/2XcYZsfdBTiBGY0mh1P7Hg/1567578757/download_music/2014/01/aaron-smith-dancin-krono-remix.mp3"},
            {title: "3", author: "author3", time: "3:20", src: "#/D:/Web/MyVK/VKParody/src/media/1234.mp3"},
            {title: "4", author: "author4", time: "3:20", src: "../media/MORFMUZIK - OUTSIDERZ - 04 MMP_BAD BOY 2.0.mp3"},
            {title: "5", author: "author5", time: "3:20", src: "https://uzimusic.ru/mp3/2949641/Burak_Yeter_Feat_Danelle_Sandoval_-_Tuesday(uzimusic.ru).mp3"},
        ],
        currentAudio: 0,
    },
    getters: {

    },
    mutations: {
        
    },
    
})