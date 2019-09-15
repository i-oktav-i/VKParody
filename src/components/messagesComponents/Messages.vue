<template lang="pug">
    .wpapper
        ul.conversations
            li.conversation(v-for="item in conversations", key="item.id")
                router-link.link(:to="'/messages/' + item.id")
                    .picWrap
                        img.convPic(:src="item.picSrc", alt="alt")
                    .lastMsg
                        p.sender {{item.sender}}
                        p.msg {{item.lastMessage}}
                    .info
                        p.unRead

</template>

<script>
export default {
    data() {
        return {
            conversations: [],
        }
    },


    created() {
        this.conversations = someRequestToServerToGetConversations();
    },
}

function someRequestToServerToGetConversations() {
    return [
        {id: 1, name: "asads", picSrc: "https://sun1-15.userapi.com/c850624/v850624040/60344/yP-pvAYCCB0.jpg?ava=1",  lastMessage: "dcsdcsdc", sender: "sdcsdcd", unRead: "1", conversationSrc: "#"},
        {id: 2, name: "asads", picSrc: "https://sun1-15.userapi.com/c850624/v850624040/60344/yP-pvAYCCB0.jpg?ava=1",  lastMessage: "dcsdcsdc", sender: "sdcsdcd", unRead: "0", conversationSrc: "#"},
        {id: 3, name: "asads", picSrc: "https://sun1-15.userapi.com/c850624/v850624040/60344/yP-pvAYCCB0.jpg?ava=1",  lastMessage: "dcsdcsdc", sender: "sdcsdcd", unRead: "0", conversationSrc: "#"},
        {id: 4, name: "asads", picSrc: "https://sun1-15.userapi.com/c850624/v850624040/60344/yP-pvAYCCB0.jpg?ava=1",  lastMessage: "dcsdcsdc", sender: "sdcsdcd", unRead: "0", conversationSrc: "#"},
        {id: 5, name: "asads", picSrc: "https://sun1-15.userapi.com/c850624/v850624040/60344/yP-pvAYCCB0.jpg?ava=1",  lastMessage: "dcsdcsdc", sender: "sdcsdcd", unRead: "0", conversationSrc: "#"},
    ];
}

</script>

<style lang="less" scoped>

.link {
    display: flex;
    align-items: stretch;
    width: 500px;
    padding: 10px;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #ccc;
    &:hover {
        background-color: #ccc;
    }

}

.picWrap {
    height: 50px;
    width: 100px;
    text-align: center;
}
.convPic {
    border-radius: 100%;
}

.lastMsg {
    width: 100%;
}
</style>