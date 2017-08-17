<template>
  <div class="Xinfuli">
  	 <swiper :options="fuliOption" ref="mySwiper"  >
	    <!-- slides -->
			<swiper-slide>
				<a href="javascript:;">不做小可爱，就做真女神</a>
			</swiper-slide>
			<swiper-slide>
				<a href="javascript:;">皮肤逆天生长，还得靠养</a>
			</swiper-slide>
	    <!-- Optional controls -->
	  </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
	  name: 'Xinfuli',
	  data () {
	    return {
	      msg: 'Welcome to Your Vue.js App',
	      fuliOption: {
			autoplay: 2000,
			speed:1000,
			direction : 'vertical',
			loop:true,
		  }
	    }
	  },
	  components:{
	  swiper,
	  swiperSlide
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
