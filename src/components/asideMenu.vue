<template lang="pug">
    .wrapper
        ul.menuList
            li.menuItem(v-for="item in menuList", :key="item.id")
                router-link.menuLink(:to="item.href") {{ item.title }}
                //- a.menuLink(:href="item.href") {{ item.title }}
</template>

<script>
export default {
    data() {
        return {
            menuList: [
                {id: 1, title: "My Page", href: "/my_page"},
                {id: 2, title: "News", href: "/news"},
                {id: 3, title: "Messages", href: "/messages"},
                {id: 4, title: "Friends", href: "/friends"},
                {id: 5, title: "Communities", href: "/communities"},
                {id: 6, title: "Photos", href: "/photos"},
                {id: 7, title: "Videos", href: "/videos"},
                {id: 8, title: "Music", href: "/music"},          
            ]
        }
    },
}
</script>

<style lang="less" scoped>

.menuItem {
    display: flex;
    margin-bottom: 10px;
    align-items: center;
}

// .icon {
//     width: 20px;
//     height: 20px;
//     margin-right: 5px;
//     background-color: pink;
// }

.menuLink {
    text-decoration: none;
    color: #000;
    position: relative;
    padding-left: 30px;
    margin-left: 30px;  
    &::before {
        content: "";
        position: absolute;
        width: 20px;
        // height: 40px;
        left: 0;
        top: 0;
        bottom: 0;
        background-color: pink;
    }
}
</style>