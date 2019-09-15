export default {
    state: {
        messagesList: {}
    },
    mutations: {
        addConvToList(state, convId) {
            state.messagesList[convId] = getConv(convId);
        },
    },
    actions: {
        getConv(state, convId) {
            if(state.messagesList[convId] === undefined)
                state.commit('addConvToList', convId);
            return state.messagesList[convId];
        },
    },
}

function getConv(id) {
    switch(id) {
        default:
            return [
                {sender: "qwe", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", time: "12:40"},
                {sender: "qwe", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", time: "12:40"},
                {sender: "qwe", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", time: "12:40"},
                {sender: "qwe", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", time: "12:40"},
                {sender: "qwe", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", time: "12:40"},
                {sender: "qwe", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", time: "12:40"},
                {sender: "qwe", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", time: "12:40"},
                {sender: "qwe", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", time: "12:40"},
            ];
            break;
    }
    
}