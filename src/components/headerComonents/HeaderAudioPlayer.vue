<template lang="pug">
    .audioPlayer
        .audioPlayer__wrapper
            .audioPlayer__content
                .audioPlayer__prevButton(@click="prevAudio()")
                .audioPlayer__playButton(@click="togglePlayAudio()")
                .audioPlayer__nextButton(@click="nextAudio()")
                p.audioPlayer__currentAudio(ref="curAud") {{ getCurentAudioAuthor + " - " + getCurentAudioTitle }}
                audio(ref="player", :src="getCurentAudioSrc")
            play-list.playList(v-show="false || showPlayList", ref="playList")
</template>

<script>

import playList from "./PlayList.vue";

export default {
    data() {
        return {
            isPlay: false,
            showPlayList: false,
            test: this.$store.state.currentAudio,
        }
    },
    watch: {
        test: () => console.log(44),
    },
    components: {
        playList,
    },
    methods: {
        getCurentAudio() {
            return this.$store.state.music[this.$store.state.currentAudio];
        },
        startPlay() {
            this.$refs.player.play().then(
                    res => {
                        console.log(res);
                        this.isPlay = true;
                    },
                    err => {
                        console.log(err);
                        this.nextAudio();
                    }
                );
        },
        stopPlay() {
            this.$refs.player.pause();
            this.isPlay = false;
        },
        nextAudio() {
            if(this.$store.state.currentAudio < this.$store.state.music.length - 1) {
                ++this.$store.state.currentAudio;
                this.$nextTick(() => this.startPlay());
            }
        },
        prevAudio() {
            if(this.$store.state.currentAudio > 0) {
                --this.$store.state.currentAudio;
                this.$nextTick(() => this.startPlay());
            }
        },
        togglePlayAudio() {
            if(this.isPlay)
                this.stopPlay();
            else
                this.startPlay();
        },
    },
    computed: {
        getCurentAudioSrc() {
            return this.getCurentAudio().src;
        },
        getCurentAudioTitle() {
            return this.getCurentAudio().title;
        },
        getCurentAudioAuthor() {
            return this.getCurentAudio().author;
        },
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
        this.player = new Audio("https://uzimusic.ru/mp3/2949641/Burak_Yeter_Feat_Danelle_Sandoval_-_Tuesday(uzimusic.ru).mp3");//(this.getCurentAudio().src);
    },
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