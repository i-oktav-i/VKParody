import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import News from "../components/News.vue";
import Messages from "../components/Messages.vue";
import MyPage from "../components/MyPage.vue";
import Friends from "../components/Friends.vue";
import Photos from "../components/Photos.vue";
import Music from "../components/Music.vue";
import Videos from "../components/Videos.vue";
import Communities from "../components/Communities.vue";

export default new Router({
  routes: [
	{ path: '/', name: 'News', component: News },
	{ path: '/news', name: 'News', component: News },
	{ path: '/messages', name: 'Messages', component: Messages },
	{ path: '/my_page', name: 'MyPage', component: MyPage },
	{ path: '/messages', name: 'Messages', component: Messages },
	{ path: '/friends', name: 'Friends', component: Friends },
	{ path: '/music', name: 'Music', component: Music },
	{ path: '/photos', name: 'Photos', component: Photos},
	{ path: '/videos', name: 'Videos', component: Videos },
	{ path: '/communities', name: 'Communities', component: Communities },
  ]
})
