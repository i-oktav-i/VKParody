<template>
	<div id="app">
		<vk-header></vk-header>
		<div class="content">
			<aside-menu id="menu"></aside-menu>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import vkHeader from "./components/headerComonents/Header";
	import asideMenu from "./components/asideMenu.vue";
	export default {
		name: "App",
		components: {
			vkHeader,
			asideMenu,
		},
	};
</script>

<style lang="less">
	@import "./less/smart-grid.less";
	.reset();

	#app {
		background-color: #daf0f8;
	}
	#menu {
		margin-right: 20px;
	}
	.content {
		display: flex;
		width: 1170px;
		margin-left: auto;
		margin-right: auto;
		margin-top: 10px;
		// justify-content: space-between;
	}
</style>

