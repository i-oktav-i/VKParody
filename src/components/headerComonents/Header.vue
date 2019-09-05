<template>
	<div class="vkHeader">
		<div class="vkHeader__wrapper">
			<div class="vkHeader__content">
				<div class="vkHeader__logo">
				</div>
				<div class="vkHeader__serch">
					<input type="text" class="vkHeader__serchInput" placeholder="поиск">
				</div>
				<div class="vkHeader__notification">
				</div>
				<audio-player class="audioPlayer"></audio-player>
				<userInfo></userInfo>
			</div>
		</div>
	</div>
</template>

<script>

import audioPlayer from "./HeaderAudioPlayer.vue"
import userInfo from "./headerUserInfo"

export default {
	components: {
		audioPlayer,
		userInfo,
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
		.wrapper();
	}

	&__content {
		display: flex;
		// justify-content: space-between;
		align-items: center;
		height: 40px;
		justify-content: space-between;
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
		&:focus {
			background-color: #fff;
		}
	}

	&__logo, &__notification {
		width: 40px;
		height: 40px;
		background-size: cover;
		background-repeat: no-repeat;
	}

	&__logo {
		background-image: url("../../assets/vkHeaderImages/vkLogo.svg");
		margin-right: 50px;
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