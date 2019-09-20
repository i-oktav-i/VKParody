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
            photoCarousel.carousel
            posts.wallPosts
</template>

<script>
import {mapGetters} from 'vuex'
import photoCarousel from './PhotoCarousel.vue'
import posts from './MyPosts.vue'

export default {
    data() {
        return {
        }
    },
    components: {
        photoCarousel,
        posts,
    },
    computed: {
        ...mapGetters([
            'getToken',
            'getAllUserInfo',
        ])
    },
    methods: {
    },
    mounted() {
        if(this.getToken === '')
            this.$router.push('/Auth');
    },
}
</script>

<style lang="less" scoped>
.myPage {
    // width: 100%;
    display: flex;
}

.rightCol {
    width: 600px;
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
    .carousel {
        // width: 700px;
        border-radius: 15px;
    }
    // .wallPosts {

    // }
}

.leftCol {

    margin-right: 15px;
    // width: 400px;

    .userAvatar {
        box-sizing: border-box;
        padding: 15px;
        background-color: #fff;
        border-radius: 10px;
    }
}

.test {
    word-wrap: break-word;
}
</style>