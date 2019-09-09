<template lang="pug">
    .menu
        ul
            li(class="menuItem" v-for="(link, i) in links" :key="i")
                router-link(:to="link.src") {{link.name}}
                //- a(:href="link.src") {{link.name}}
</template>

<script>
export default {
    data() {
        return {
            links: [
                {name: "You Profile", src: "/my_page"},
                {name: "Settings", src: "#"},
                {name: "Help", src: "#"},
                {name: "Info", src: "#"},
            ]
        }
    },
}
</script>

<style lang="less" scoped>
a {
    text-decoration: none;
    color: #267ec5;
}
.menu {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 3px;
    // box-shadow: 2px 2px #000;
    &Item {
        margin-bottom: 5px;
        font-family: sans-serif;
        padding-left: 4px;
    }
}
</style>