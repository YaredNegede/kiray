<script>
	import home from './components/component/home.vue'
	import menus from './components/component/menus.vue'
	import footerDiv from './components/component/footerDiv.vue'
	import Turbo from 'turbo'
	import firebaseApp from './firebaseApp'
	import router from './router'
	
	export default {
		beforeCreate: function() {
			this.$router.push(this.$store.getters.getSurf.currentPath)
			console.log('============App===============')
			console.log(Turbo.do.test())
			this.$router.push('login')
		},
		name: 'app',
		components: {
			home,
			footerDiv,
			menus,
			Turbo,
			firebaseApp,
			router
		},
	}
</script>

<style scoped>
	.contenerMyStyle {
		background-color: #00AAAA;
		border: solid 1px #00BBBB
	}
	
	.loginMystyle {
		color: white;
	}
	
	.logoutMyStyle {
		color: white;
	}
	
	.footerMyStyle {
		padding: 80px;
	}
	
	.headStyle {
		color: white;
		background-color: #009999;
	}
	
	.bodyStyle {}
</style>

<template>
	<div id="app" class="container contenerMyStyle ">
	
		<menus></menus>
	
		<div class="row bodyStyle">
	
			<div class="col-lg-12">
				<div class="row">
	
					<div class="col-lg-12">
	
						<router-view class="row">
	
						</router-view>

					</div>
	
				</div>
			</div>
	
		</div>
	
	</div>
</template>