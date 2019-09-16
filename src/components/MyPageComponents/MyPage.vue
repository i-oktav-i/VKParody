<template lang="pug">
    .myPage
        photoCarousel(class="carousel")
</template>

<script>
import {mapGetters} from 'vuex'
import photoCarousel from './PhotoCarousel.vue'

export default {
    data() {
        return {
        }
    },
    components: {
        photoCarousel,
    },
    computed: {
        ...mapGetters([
            'getToken',
        ])
    },
    methods: {
    }
}
</script>

<style lang="less" scoped>
.myPage {
    width: 100%;
}
</style>