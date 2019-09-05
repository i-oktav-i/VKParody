<template lang="pug">
    .profil
        p.userName {{ name }}
        .userPhoto
            img(:src="userPhoto", alt="That's U" class="icon")
        .toggleMenuButton.close(ref="showBtn")
        header-menu(class="menu" v-show="showMenu")
</template>

<script>

import headerMenu from './vkHeaderMenu.vue';

export default {
    data() {
        return {
            name: "Андрей",
            userPhoto: "https://sun1-15.userapi.com/c850624/v850624040/60344/yP-pvAYCCB0.jpg?ava=1",
            showMenu: false,
        }
    },
    methods: {
        onClickAway() {
            if(this.showMenu)
                this.showMenu = false;
        }
    },
    components: {
        headerMenu,
    },
    created() {
        document.addEventListener('click', (e) => {
            if(e.target == this.$refs.showBtn) {
                this.showMenu = !this.showMenu;
                this.$refs.showBtn.classList.toggle("open");
            }
            else {
                this.showMenu = false;
                this.$refs.showBtn.classList.remove("open");
            }
        });
    }
}
</script>

<style lang="less" scoped>
.profil {
    display: flex;
    align-items: center;
    position: relative;
}
.userName {
    margin-right: 10px;
    color: #fff;
}
.icon {
    width: 30px;
    height: 30px;
    background-color: #fff;
    border-radius: 15px;
    margin-right: 5px;
}
.toggleMenuButton {
    background-size: cover;
    width: 30px;
    height: 30px;
    cursor: pointer;
    background-image: url("../../assets/UserMenu/menuButtonOpen.svg");
    &.open {
        background-image: url("../../assets/UserMenu/menuButtonClose.svg");   
        // background-color: #ff0000;
    }
}
.menu {
    position: absolute;
    width: 100px;
    top: 40px;
    left: 60px;
    // background: #ccc;
}

</style>