<template lang="pug">
    .myPage
        .photoWrap(ref='phBur')
            ul(ref='ul' class='userPhotosBur' :style='"left: " + posPhotos + "px" ')
                li(class='photos' v-for="item in userPhotos.reverse()" :key="item.id")
                    img(:src='item.photo_604')
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    data() {
        return {
            userPhotos: [],
            isMouseDown: false,
            posPhotos: 0,
            mousPos: 0,
        }
    },
    computed: {
        ...mapGetters([
            'getToken',
        ])
    },
    mounted() {
        this.$jsonp(`https://api.vk.com/method/photos.get?access_token=${this.getToken}&album_id=profile&v=5.52`, 
        res => {
            this.userPhotos = res.response.items;
            console.log(res);
        },
        function(url) {
            console.log(url);
        });
        this.$refs.phBur.addEventListener('mousedown', (e) => {
            this.mousPos = e.clientX;
            this.isMouseDown = true;
            console.log(this.mousPos)
        })
        this.$refs.phBur.addEventListener('mousemove', (e) => {
            if(this.isMouseDown) {
                this.posPhotos += e.clientX - this.mousPos;
                this.$refs.ul.$el.style.left = this.posPhotos + 'px';
                this.mousPos = e.clientX;
                console.log(this.posPhotos);
                console.log(e.clientX)
            }
        })
        this.$refs.phBur.addEventListener('mouseup', (e) => {
            this.isMouseDown = false;
            console.log(this.isMouseDown);
        })

        
    }
}
</script>

<style lang="less" scoped>
.myPage {
    width: 100%;
}

.photoWrap {
    height: 110px;
    position: relative;
    overflow: hidden;
    background-color: #fff;
}

.userPhotosBur {
    position: absolute;
    top: 5px;
    left: 0px;
    white-space: nowrap;
    height: 100px;
    // padding: 5px;
}
.photos {
    display: inline-block;
    margin-right: 5px;
    img {
    height: 100px;
    }
}
</style>