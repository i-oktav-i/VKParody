<template lang="pug">
    
</template>
<script>

import {mapGetters, mapActions} from 'vuex'
import ax from 'axios'


export default {
    computed: {
        ...mapGetters([
            'getToken',
        ])
    },
    methods: {
        ...mapActions([
            'setToken',
            'setUserInfo',
            // 'setUserPhotoXs'
        ]),
        getUserInfo() {
            let url = `https://api.vk.com/method/users.get?access_token=${this.getToken}&fields=photo_id,verified,sex,bdate,city,country,home_town,has_photo,photo_50,photo_100,photo_200_orig,photo_200,photo_400_orig,photo_max,photo_max_orig,online,domain,has_mobile,contacts,site,education,universities,schools,status,last_seen,followers_count,common_count,occupation,nickname,relatives,relation,personal,connections,exports,activities,interests,music,movies,tv,books,games,about,quotes,can_post,can_see_all_posts,can_see_audio,can_write_private_message,can_send_friend_request,is_favorite,is_hidden_from_feed,timezone,screen_name,maiden_name,crop_photo,is_friend,friend_status,career,military,blacklisted,blacklisted_by_me,can_be_invited_group&v=5.52`;
            // let url = `https://api.vk.com/method/users.get?access_token=${this.getToken}&fields=&v=5.52`;
            // console.log('tk gt');
            this.$jsonp(url)
            .then(res => {
                this.setUserInfo(res.response[0]);
                console.log(res);
                this.$router.push('/news');
            })
            .catch(err => {
                console.log('err');
                this.getUserInfo();
            });
        }
    },
    mounted() {
        let params = this.$route.hash.split('&').map(currentValue => currentValue.split('='));
        this.setToken(params[0][1]);
        this.getUserInfo();
    }
}
</script>