<template>
	<div id="app">
		<vk-header></vk-header>
		<p>

		</p>
	</div>
</template>

<script>
	import vkHeader from "./components/headerComonents/Header";
	export default {
		name: "App",
		components: {
			vkHeader,
		},
	};
</script>

<style lang="less">
	@import "./less/smart-grid.less";
	.reset();
</style>

