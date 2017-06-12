<template> 
<div class="frameStyle">
	<div class="container">		 
	
	<div class="row">
		<div class=" col-lg-6">
			<label>First Name</label>
	    </div> 
		<div class=" col-lg-6">
			<select class="form-control">
				<option>Programmer</option>
				<option>Graphics Designer</option>
				<option>Architect</option>
			</select>
	    </div> 
	</div>
	<div class="row">
		<div class=" col-lg-6">
			<label>Middle Name</label>
	    </div> 
		<div class=" col-lg-6">
			<input type="text"  class="form-control"/>
	    </div> 
	</div>
	<div class="row">
		<div class=" col-lg-6">
			<label>Sur Name</label>
	    </div> 
		<div class=" col-lg-6">
			<input type="text"  class="form-control"/>
	    </div> 
	</div>
	
 </div>
</div>
</template>

<script>

export default {
  name: 'BrowseFreelancer',
  methods: {}
}
</script>
<style scoped>
	frameStyle{
		width: 300px
	}
	
  h4{
    background-color:#c1c1c1;
    color:white;
    padding:5px;
  }
</scope>
