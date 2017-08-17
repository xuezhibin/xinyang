<template>
  <div class="Midnav">
  	<swiper :options="midOption" ref="mySwiper" >
	    <!-- slides -->
			<swiper-slide v-for="item in data"><span @click="key(item.key)">{{item.content}}</span></swiper-slide>
	    <!-- Optional controls -->
	  </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Midnav',
  props:['data'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
	  midOption: {
		speed:1000,
		slidesPerView : 4.5,
		freeMode : true,
	  }
    }
  },
  methods:{
  	key(id){
  		this.$emit('sendkey',[id])
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
