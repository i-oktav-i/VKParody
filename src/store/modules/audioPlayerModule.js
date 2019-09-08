export default {
    state: {
        playList: [],
        currentTrack: 0,
        isPlaying: false,
    },
    getters: {
        getCurrentTrackId(state) {
            return state.currentTrack;
        },
        getPlayList(state) {
            return state.playList;
        },
        getIsPlaying: (state) => state.isPlaying, 
    },
    mutations: {
        setPlayList(state) {
            state.playList = [
                {title: "1", author: "author1", time: "3:20", src: "https://uzimusic.ru/mp3/2949641/Burak_Yeter_Feat_Danelle_Sandoval_-_Tuesday(uzimusic.ru).mp3"},
                {title: "2", author: "author2", time: "3:20", src: "https://cdn.drivemusic.me/dl/online/2XcYZsfdBTiBGY0mh1P7Hg/1567578757/download_music/2014/01/aaron-smith-dancin-krono-remix.mp3"},
                {title: "3", author: "author3", time: "3:20", src: "#/D:/Web/MyVK/VKParody/src/media/1234.mp3"},
                {title: "4", author: "author4", time: "3:20", src: "../media/MORFMUZIK - OUTSIDERZ - 04 MMP_BAD BOY 2.0.mp3"},
                {title: "5", author: "author5", time: "3:20", src: "https://s98sas.storage.yandex.net/get-mp3/0460b6c1f6bd5834a8a6a2517a023fa4/000591e06f93dbeb/rmusic/U2FsdGVkX1-FPBUDxTEevEx6yeg8CcS7SGWODjxtpZAx0WE_kcAd_5LUnFMjv1RoHmLiI9ZkoLoH0mMq9cPlFuWwbS1IsV_XbTNgQQ4TlHg/97644dd1a28e4904fa2d1e35b945e8742490b0651dd87f139d9a4f729745f78a?track-id=44093133&play=false"},
            ];
        },
        changeCurrentTrack(state, index) {
            state.currentTrack = index;
        },
        setIsPlaying(state, newValue) {
            state.isPlaying = newValue;
        },
    },
    actions: {
        setPlayList({commit}) {
            commit('setPlayList');
        },
        setCurrentTrack({commit}, index) {
            commit('changeCurrentTrack', index);
        },
        setIsPlaying({commit}, newValue) {
            commit('setIsPlaying', newValue);
        },
    },
}