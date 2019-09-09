<template lang="pug">
    .playList
        ul.list
            li.composition(v-for="(item, index) in getPlayList", key="item.src", @click="onCompositionClick(index)")
                .wrap
                    .pic(:class="getClass(index)", ref="sss")
                    //- .pic(:class='')
                    .name
                        p.title {{ item.title }}
                        p.author {{ item.author }}
                    p.time {{ item.time }}
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
    data() {
        return {

        }
    },
    methods: {
        ...mapActions([
            'setCurrentTrack',
            'setIsPlaying',
        ]),
        onCompositionClick(index) {
            if(this.getCurrentTrackId == index)
                this.setIsPlaying(!this.getIsPlaying);
            else
                this.setCurrentTrack(index);
        },
        getClass(index) {
            if(index == this.getCurrentTrackId)
                if(this.getIsPlaying)
                    return "playing";
                else
                    return "stopped";
        }
    },
    computed: {
        ...mapGetters([
            'getPlayList',
            'getCurrentTrackId',
            'getIsPlaying',
        ]),
    },
}
</script>

<style lang="less" scoped>

.playList {
    background-color: #fff;
}

.title {
    color: #000;
}
.author {
    color: #a8a8a8;
}
.composition {
    padding: 10px;
    box-sizing: border-box;
}
.pic {
    width: 50px;
    height: 50px;
    background-color: #f00;
    margin-right: 20px;
    position: relative;
    &::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-size: cover;
        opacity: 0.5;
    }

    &.playing::after {
        background-image: url('../../assets/audioPlayerImages/pauseButton.svg');
    }
    &.stopped::after {
        background-image: url('../../assets/audioPlayerImages/playButton.svg');
    }
}
.wrap {
    display: flex;
    align-items: center;
    width: 500px;
    height: 50px;
    margin-bottom: 5px;
    padding: 10px 5px;
    &:hover {
        background-color: #82d4df;
    }
    cursor: pointer;
}


.time {
    margin-left: auto;
}
.list {
    box-shadow: 0 0px 10px 0px #888;
}
</style>