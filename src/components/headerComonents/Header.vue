<template>
	<div class="vkHeader">
		<div class="vkHeader__wrapper">
			<div class="vkHeader__content">
				<div class="vkHeader__logo">
				</div>
				<div class="vkHeader__serch">
					<input type="text" class="vkHeader__serchInput" placeholder="поиск">
				</div>
				<div class="vkHeader__notification" v-if="isAuthed">
				</div>
				<audio-player class="audioPlayer" v-if="isAuthed"></audio-player>
				<userInfo v-if="isAuthed"></userInfo>
			</div>
		</div>
	</div>
</template>

<script>

import audioPlayer from "./HeaderAudioPlayer.vue"
import userInfo from "./headerUserInfo"
import {mapGetters} from 'vuex'


export default {
	components: {
		audioPlayer,
		userInfo,
	},
	computed: {
		...mapGetters([
			'isAuthed',
		]),
	}
}
</script>

<style lang="less" scoped>
@import "../../less/smart-grid.less";
.vkHeader {
	width: 100%;
	height: 40px;
	background-color: #267ec5;
	&__wrapper {
		max-width: 1170px;
		min-width: 1170px;
		margin-left: auto;
		margin-right: auto;
	}

	&__content {
		display: flex;
		// justify-content: space-between;
		align-items: center;
		height: 40px;
		// justify-content: space-between;
		background-color: #267ec5;
	}

	&__serchInput {
		box-sizing: border-box;
		background-color: #11518d;
		border-radius: 20px;
		color: #000000;
		border-color: #ffffff;
		outline: none;
		height: 26px;
		width: 250px;
		box-shadow: none;
		padding-left: 10px;
		margin-right: 50px;
		margin-left: auto;
		&:focus {
			background-color: #fff;
		}
	}

	&__logo, &__notification {
		width: 40px;
		height: 40px;
		background-size: cover;
		background-repeat: no-repeat;
		// margin-right: auto;
	}

	&__logo {
		background-image: url("../../assets/vkHeaderImages/vkLogo.svg");
		margin-right: 50px;
		margin-left: 30px;
	}

	&__notification {
		background-image: url("../../assets/vkHeaderImages/notify.svg");
		margin-right: 50px;
		opacity: 0.5;
		&:hover {
			opacity: 1;
		}
	}
}
.audioPlayer {
	margin-right: 50px;
}
</style>