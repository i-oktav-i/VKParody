<template lang="pug">
    .auth
        .wrap
            p(class='greet') U need to authorize
            a(:href='this.$store.getters.getAuthUrl' class='authUrl') Authorize
</template>

<script>

import axios from 'axios';

export default {
    data() {
        return {
            userName: "",
            pass: "",
        }
    },
    methods: {
        submit() {
            // let url = 'https://oauth.vk.com/token?grant_type=password&client_id=3697615&client_secret=AlVXZFMUqyrnABp8ncuU&username=&password=&v=5.52&2fa_supported=1&format=json';
            let url = "";
            this.$jsonp(url,
            function(data) {
                console.log(data);
            },
            function(url) {
                console.log('error', url);
            });
            
        }
    }
}

</script>

<style lang="less" scoped>

.auth, .wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.auth {
    text-align: center;
    height: initial;
}
.wrap {
    width: 400px;
    height: 200px;
    background-color: #fff;
    border-radius: 50px;
}

.greet {
    font-size: 30px;
    margin-bottom: 10px;
}

.authUrl {
    display: inline-block;
    text-decoration: none;
    font-size: 20px;
    color: #fff;
    padding: 10px 20px;
    box-sizing: border-box;
    background-color: #267ec5;
    &:hover {
        background-color: #1a5c92;
    }
}

</style>