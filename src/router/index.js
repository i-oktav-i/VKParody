import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import News from "../components/News.vue";
import Messages from "../components/messagesComponents/Messages.vue";
import Conversation from "../components/messagesComponents/Conversation.vue";
import MyPage from "../components/MyPageComponents/MyPage.vue";
import Friends from "../components/Friends.vue";
import Photos from "../components/Photos.vue";
import Music from "../components/Music.vue";
import Videos from "../components/Videos.vue";
import Communities from "../components/Communities.vue";
import Auth from '../components/auth/Auth.vue';
import getToken from '../components/auth/getToken.vue';

export default new Router({
	mode: 'history',
	routes: [
		{ path: '/', name: 'Auth', component: Auth},
		{ path: '/news', name: 'News', component: News },
		{ path: '/messages', name: 'Messages', component: Messages },
		{ path: '/messages/:convId', name: 'Messages', component: Conversation },
		{ path: '/my_page', name: 'MyPage', component: MyPage },
		{ path: '/friends', name: 'Friends', component: Friends },
		{ path: '/music', name: 'Music', component: Music },
		{ path: '/photos', name: 'Photos', component: Photos},
		{ path: '/videos', name: 'Videos', component: Videos },
		{ path: '/communities', name: 'Communities', component: Communities },
		{ path: '/Auth', name: 'Auth', component: Auth },
		{ path: '/getToken', name: 'getToken', component: getToken },
	],
	// base: '/Auth',
})
