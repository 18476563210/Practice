<template>
	<div>
		<myHead></myHead>
		<carousal></carousal>
		<foot></foot>
	</div>
	
</template>

<script>
	import myHead from './v-head.vue'
	import carousal from './main-carousel.vue'
	import foot from './v-foot.vue'
	export default {
	  name: 'v-main',
	  components: {
	    myHead,
		carousal,
		foot
	  }
	}
</script>

<style>
</style>
