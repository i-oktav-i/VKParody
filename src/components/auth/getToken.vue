<template lang="pug">
    
</template>
<script>

import {mapActions} from 'vuex'

export default {
    methods: {
        ...mapActions([
            'setToken',
            'setUserId',
        ])
    },
    mounted() {
        let params = this.$route.hash.split('&').map(currentValue => currentValue.split('='));
        this.setToken(params[0][1]);
        this.setUserId(params[2][1]);
        this.$router.push('/news');
    }
}
</script>