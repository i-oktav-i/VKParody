<template lang="pug">
    .photoCarousel
        //- button.refresh(v-if="requestErr" @click.prevent="getPhotos()") refresh
        .photoWrap(ref='phBur')
            ul(ref='ul' class='userPhotosBur')
                li(class="photos" v-for="item in userPhotos.reverse()" :key="item.id")
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
            requestErr: false,
        }
    },
    computed: {
        ...mapGetters([
            'getToken',
        ])
    },
    methods: {
        checkPhotosPos() {
            this.$refs.ul.style.transition =  "left 0.4s";
            if(this.$refs.ul.getBoundingClientRect().left > this.$refs.phBur.getBoundingClientRect().left) {
                this.$refs.ul.style.left = 0;
                this.posPhotos = 0;
            }
            if(this.$refs.ul.getBoundingClientRect().right < this.$refs.phBur.getBoundingClientRect().right) {
                let left = this.$refs.ul.style.left;
                let delta = this.$refs.ul.getBoundingClientRect().right - this.$refs.phBur.getBoundingClientRect().right;
                this.posPhotos = parseInt(left) - delta;
                this.$refs.ul.style.left = this.posPhotos + 'px';
            }
        },
        getPhotos() {
            this.$jsonp(`https://api.vk.com/method/photos.get?access_token=${this.getToken}&album_id=profile&v=5.52`)
            .then(res => {
                this.userPhotos = res.response.items;
                this.requestErr = false;
                return this.$nextTick()
            })
            .then(this.setElem())
            .catch(this.requestErr = true);
        },
        setElem() {       
           /*  console.log(this.$refs.phBur);
            console.log(this.$refs.ul); */
            let mousPos = 0;
            this.$refs.phBur.onmousedown = (e) => {            
                // console.log('down');
                this.$refs.ul.style.transition = '';
                mousPos = e.clientX;
                this.isMouseDown = true;
            };

            this.$refs.phBur.onmousemove = (e) => {
                // console.log('move');
                if(this.isMouseDown) {
                        this.posPhotos += e.clientX - mousPos;
                        this.$refs.ul.style.left = this.posPhotos + 'px';
                        mousPos = e.clientX;
                }
            };
            this.$refs.phBur.onmouseup = this.$refs.phBur.onmouseout = (e) => {
                // console.log('up/out');
                if(this.isMouseDown) {
                    this.isMouseDown = false;
                    this.checkPhotosPos();
                }
            }
        }
    },
    mounted() {
        this.getPhotos();
    }
}
</script>

<style lang="less" scoped>
.photoCarousel {
    padding: 15px;
    background-color: #fff;
    text-align: center;
    // display: flex;
    // justify-content: space-around;
    // align-items: center;
}
.refresh {
    margin: auto;
    width: 300px;
    height: 50px;
}
.photoWrap {
    height: 100px;
    width: 100%;
    position: relative;
    overflow: hidden;
    background-color: #fff;
    position: relative;
    &::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
}

.userPhotosBur {
    position: absolute;
    top: 0px;
    left: 0px;
    white-space: nowrap;
    height: 100px;
}
.photos {
    display: inline-block;
    margin-right: 5px;
    position: relative;
    &::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    img {
        height: 100px;
    }
}
</style>