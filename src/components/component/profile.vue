<template>
<div class="row"> 
	

	<div class="row">

		<div class=" col-lg-2">
			
		</div>
		
		<div class=" col-lg-8">
		
			<FreeLancer></FreeLancer>
			
		</div>
		
		<div class=" col-lg-1"></div>
		
	</div>
	
	
</div>
</template>

<script>
import FreeLancer from './FreeLancer.vue'

export default {
  name: 'profile',
  props: { show: true },
  components: { FreeLancer },
  data: function () {
    return {'skills': [1, 2, 3, 45, 6, 8, 9, 90]}
  },
  methods: {
    registerProfile () {
      console.log(this.skills)
    }
  }
}
</script>
<style scoped>

</scope>
