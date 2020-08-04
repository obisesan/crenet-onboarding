<template>
  <div>
   <Hero/>
	 <About/>
	 <News/>
	 <featuredVideos/>
	 <latest-videos/>
	 <comics-section title="RECENT COMICS" :comics="comics">
		 	<n-link to="/comics" class="cta-btn cta-btn--solid cta-btn--red "><div class="innerFill "><span>View All</span></div></n-link>
	 </comics-section>
  </div>
</template>

<script>
export default {
	data(){
		return{
			comics:[]
		}
	},
	methods:{
	async getCharacter(){
		let {data} = await this.$axios.$get('v1/public/comics')
		this.comics = data.results.splice(0,6);
	}
},
mounted(){
	console.log('here')
	this.getCharacter()
},
}
</script>

<style>
</style>
