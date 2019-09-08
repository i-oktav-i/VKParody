<template lang="pug">
    .audioPlayer
        .audioPlayer__wrapper
            .audioPlayer__content
                .audioPlayer__prevButton(@click="prevAudio()")
                .audioPlayer__playButton(:class="{play : getIsPlaying}" @click="togglePlayAudio()")
                .audioPlayer__nextButton(@click="nextAudio()")
                p.audioPlayer__currentAudio(ref="curAud") {{ getPlayList[getCurrentTrackId].author + " - " + getPlayList[getCurrentTrackId].title }}
                audio(ref="player", :src="getPlayList[getCurrentTrackId].src")
            play-list.playList(v-show="false || showPlayList", ref="playList")
</template>

<script>

import {mapActions, mapGetters} from 'vuex';

import playList from "./PlayList.vue";

export default {
    data() {
        return {
            showPlayList: false,
            test: this.$store.state.currentAudio,
        }
    },
    components: {
        playList,
    },
    methods: {
        ...mapActions([
            'setCurrentTrack',
            'setPlayList',
            'setIsPlaying',
        ]),
        startPlay() {
            this.$refs.player.play().then(
                    res => {
                        this.setIsPlaying(true);
                    },
                    err => {
                        this.nextAudio();
                    }
                );
        },
        stopPlay() {
            this.$refs.player.pause();
            this.setIsPlaying(false);
        },
        nextAudio() {
            if(this.getPlayList.length !== 0) {
                console.log(this.getCurrentTrackId);
                this.setCurrentTrack((this.getCurrentTrackId + 1) % this.getPlayList.length);
            }
        },
        prevAudio() {
            if(this.getPlayList.length !== 0) {
                this.setCurrentTrack((this.getCurrentTrackId - 1 + this.getPlayList.length) % this.getPlayList.length);
            }
        },
        togglePlayAudio() {
            if(this.getIsPlaying)
                this.stopPlay();
            else
                this.startPlay();
        },
    },
    computed: {
        ...mapGetters([
            'getCurrentTrackId',
            'getPlayList',
            'getIsPlaying',
        ])
    },
    created() {
        document.addEventListener("click", (e) => {
            if(e.target == this.$refs.playList || this.$refs.playList.$el.contains(e.target))
                return;
            if(e.target == this.$refs.curAud)
                this.showPlayList = !this.showPlayList;
            else
                this.showPlayList = false;
        });
        this.setPlayList();
    },
    watch: {
        getCurrentTrackId: function() {
            let oldId = this.getCurrentTrackId; 
            setTimeout(() => {
                if(oldId == this.getCurrentTrackId)
                    this.$nextTick(function() {
                        this.startPlay();
                    });
            }, 450);
        },
        getIsPlaying: function() {
            if(this.getIsPlaying)
                this.startPlay();
            else
                this.stopPlay();
        },
    }
}
</script>

<style lang="less" scoped>

@import url("../../less/smart-grid.less");

.audioPlayer {
    &__content {
        display: flex;
        align-items: center;
        position: relative;
        cursor: pointer;
    }

    &__prevButton,
    &__playButton,
    &__nextButton {
        width: 40px;
        height: 40px;
        background-color: #fff;
        background-size: cover;
        opacity: 0.5;
        &:hover {
            opacity: 1;
        }
    }

    &__prevButton {
        background-image: url("../../assets/audioPlayerImages/prevButton.svg");
    }
    &__nextButton {
        background-image: url("../../assets/audioPlayerImages/nextButton.svg");      
        margin-right: 10px;
    }
    &__playButton {
        background-image: url("../../assets/audioPlayerImages/playButton.svg");
        &.play {
            background-image: url("../../assets/audioPlayerImages/pauseButton.svg");
        }
    }
    p {
        color: #fff;
        opacity: 0.5;
        width: 300px;
        overflow: hidden;
    }
}

.playList {
    position: absolute;
}
</style>