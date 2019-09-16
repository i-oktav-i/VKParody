<template lang="pug">
    .myPage
        .leftCol
            .userAvatar
                img(:src='getAllUserInfo.photo_200_orig' alt='Avatar')
        .rightCol
            .shortInfo
                p.fullName {{getAllUserInfo.first_name}} {{getAllUserInfo.last_name}}
                hr
                p.pInfo.bday(v-if="getAllUserInfo.bdate !== undefined") день рождения: {{getAllUserInfo.bdate}}
                p.pInfo.city(v-if="getAllUserInfo.city.title !== undefined") город: {{getAllUserInfo.city.title}}
                p.pInfo.university(v-if="getAllUserInfo.universities[0].name !== undefined") ВУЗ: {{getAllUserInfo.universities[0].name}}
            .carousel
                photoCarousel
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
            'getAllUserInfo',
        ])
    },
    methods: {
    }
}
</script>

<style lang="less" scoped>
.myPage {
    width: 100%;
    display: flex;
}

.rightCol {
    .shortInfo {
        background-color: #fff;
        border-radius: 10px;
        margin-bottom: 15px;
        padding: 15px;
        .fullName {
            font-size: 20px;
            font-weight: bold;
        }
        .pInfo {
            margin-top: 5px;
        }
    }
}

.leftCol {

    margin-right: 15px;

    .userAvatar {
        padding: 15px;
        background-color: #fff;
        border-radius: 10px;
    }
}

.carousel {
    width: 700px;
}
</style>