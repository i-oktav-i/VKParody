<template>
	<div id="app">
		<vk-header id="header"></vk-header>
		<div id="content">
			<aside-menu id="menu" v-if='isAuthed'></aside-menu>
			<router-view id="currentPage"></router-view>
		</div>
	</div>
</template>

<script>
import vkHeader from "./components/headerComonents/Header";
import asideMenu from "./components/asideMenu.vue";
import auth from "./components/auth/Auth.vue";

import {mapGetters} from 'vuex';

export default {
	name: "App",
	computed: {
		...mapGetters([
			'isAuthed',
		]),
	},
	components: {
		vkHeader,
		asideMenu,
		auth,
	},
};
</script>

<style lang="less">
	@import "./less/smart-grid.less";
	.reset();

	#app {
		background-color: #daf0f8;
	}
	#header {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 2;
	}
	#content {
		box-sizing: border-box;
		display: flex;
		width: 1170px;
		margin-left: auto;
		margin-right: auto;
		padding-top: 50px;
		min-height: 100vh;
		// justify-content: space-evenly;
	}
	#menu {
		margin-right: 20px;
	}
	#currentPage {
		// min-height: 100vh;
		width: 100%;
		margin-left: auto;
		margin-right: auto;
	}
</style>

