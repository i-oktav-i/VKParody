<template lang="pug">
    .myPosts
        ul.postsList
            li.post(v-for="post in posts" :key="post.id")
                .makerInfo
                    img.makerPhoto(:src='post.postMaker.photo_50')
                    p {{post.postMaker.first_name}} {{post.postMaker.last_name}}
                p {{post.text}}
                ul.attachmentPhotosList
                    li.attachmentPhotoItem(v-for="attachment in post.attachments" :key="attachment.photo.id")
                        img.attachmentPhoto(v-if="attachment.type == 'photo'" :src="attachment.photo.photo_604")
</template>

<script>

import {mapGetters} from 'vuex'
import { nextTick, Promise } from 'q';

export default {
    data() {
        return {
            posts: [],
            postsCnt: 0,
            // postMakers: [],
        }
    },
    computed: {
        ...mapGetters([
            'getToken',
        ]),
    },
    methods: {
        getPostsInRange(start, count) {
            let posts = Array;
            this.$jsonp(`https://api.vk.com/method/wall.get?access_token=${this.getToken}&offset=${start}&count=${count}&v=5.52`,
            function(res) {posts = res.response.items;},
            () => posts = 'error');
            return posts;
        },
        getNextPosts() {
            let nextPosts = [];
            this.$jsonp(`https://api.vk.com/method/wall.get?access_token=${this.getToken}&offset=${this.postsCnt}&count=20&v=5.52`)
            .then(posts => {
                nextPosts = posts.response.items;
                this.postsCnt += 20;
                let mkrIds = new Set();
                for(let post of nextPosts) {
                    mkrIds.add(post.from_id);
                }
                return this.$jsonp(this.getPostMakersUrl([...mkrIds]));
            })
            .then(makers => {
                nextPosts.forEach((post) => {
                    post.postMaker = makers.response.find(mkr => mkr.id == post.from_id);
                });
                this.posts.push(...nextPosts);
                console.log(this.posts);
            })
            .catch(err => console.log("EEEERRRR", err)); 
        
        },
        getPostMakersUrl(ids) {
            let url = `https://api.vk.com/method/users.get?access_token=${this.getToken}&fields=photo_50&user_ids=${ids.toString()}&v=5.52`;
            return url;
        }
    },
    mounted() {
        this.getNextPosts();
    },
}

</script>

<style lang="less" scoped>
.post {
    background-color: #fff;
    border-radius: 15px;
    padding: 15px;
    margin: 15px;
}
.attachmentPhotosList {
    display: flex;
    justify-content: center;
    align-items: center;
}
.makerInfo {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    .makerPhoto {
        border-radius: 100%;
        margin-right: 15px;
    }
}
</style>