<template>
	<swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
		<swiper-slide v-for="item in data">
			<img :src="item" alt="">
		</swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script type="text/javascript">
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
		name:'BannerSwiper',
		components: {
		    swiper,
		    swiperSlide
		},
		props:['data'],
		data(){
			return {
				swiperOption: {
			      notNextTick: true,
			        // swiper configs 所有的配置同swiper官方api配置
			      autoplay: 2000,
			      centeredSlides: true,
			      speed:1000,
			      autoplay: 2000,
			      loop:true,
			      pagination : '.swiper-pagination',
			      initialSlide: 1
					}
			}
		},
		computed: {
	      swiper() {
	        return this.$refs.mySwiper.swiper
	      }
	    }
	}
</script>

<style>
	img{
		width: 100%;
	}
</style>