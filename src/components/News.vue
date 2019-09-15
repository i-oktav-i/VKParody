<template lang="pug">
    .news news
        ul.posts
            li.post(v-for="item in memes", key="item.id")
                p.author {{item.author}}
                p.text {{item.text}}
                img.meme(:src="item.imgLink", alt="alt")
</template>


<script>


export default {
    data() {
        return {
            memes: [
                {id: "1", author: "Lorem Ipsum Dolor", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", imgLink: "https://sun1-28.userapi.com/c858324/v858324831/658e8/doNzLQ1aq9s.jpg"},
                {id: "2", author: "Lorem Ipsum Dolor", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", imgLink: "https://sun1-28.userapi.com/c858324/v858324831/658e8/doNzLQ1aq9s.jpg"},
                {id: "3", author: "Lorem Ipsum Dolor", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", imgLink: "https://sun1-28.userapi.com/c858324/v858324831/658e8/doNzLQ1aq9s.jpg"},
                {id: "4", author: "Lorem Ipsum Dolor", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", imgLink: "https://sun1-28.userapi.com/c858324/v858324831/658e8/doNzLQ1aq9s.jpg"},
                {id: "5", author: "Lorem Ipsum Dolor", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", imgLink: "https://sun1-28.userapi.com/c858324/v858324831/658e8/doNzLQ1aq9s.jpg"},
                {id: "6", author: "Lorem Ipsum Dolor", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", imgLink: "https://sun1-28.userapi.com/c858324/v858324831/658e8/doNzLQ1aq9s.jpg"},
                {id: "7", author: "Lorem Ipsum Dolor", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", imgLink: "https://sun1-28.userapi.com/c858324/v858324831/658e8/doNzLQ1aq9s.jpg"},
                {id: "8", author: "Lorem Ipsum Dolor", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", imgLink: "https://sun1-28.userapi.com/c858324/v858324831/658e8/doNzLQ1aq9s.jpg"},
            ],
        }
    },
}
</script>

<style lang="less" scoped>



.post {
    background-color: #fff;
    margin-bottom: 20px;
    padding: 10px;
    width: 500px;
    border-radius: 10px;
}

.author {
    font-weight: bold;

}

.meme {
    width: 500px;
}
</style>