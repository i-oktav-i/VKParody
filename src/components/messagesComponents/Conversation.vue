<template lang="pug">
    .conv soon
</template>

<script>
import {mapActions} from "vuex";

export default {
    data() {
        return {
            messages: [],
        }
    },
    methods: {
        ...mapActions([
            ''
        ])
    },
    mounted() {
        this.messages = [];
    }
}
</script>

<style lang="less" scoped>

</style>