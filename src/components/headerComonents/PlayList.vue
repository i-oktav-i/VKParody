<template lang="pug">
    .playList
        ul.list
            li.composition(v-for="(item, index) in getList()", key="item.src", @click="onCompositionClick(index)")
                .wrap
                    .pic
                    .name
                        p.title {{ item.title }}
                        p.author {{ item.author }}
                    p.time {{ item.time }}
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        getList() {
            return this.$store.state.music;
        },
        onCompositionClick(index) {
            this.$store.state.currentAudio = index;
            // console.log(this.$event)
        }
    }
}
</script>

<style lang="less" scoped>

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
}
.wrap {
    display: flex;
    align-items: center;
    width: 500px;
    height: 50px;
    margin-bottom: 5px;
    // border-bottom: 1px solid #888;
    // border-top: 1px solid #888;
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