<template>
  <div class="Home">
  	<Headerbox class="header"></Headerbox>
    <div class="content">
       <div>
        <nav class="tap-nav">
            <span class="tap-list text-right" @click="headkey(0)">
              <router-link active-class="tap-checked" to="/home/content" >首页</router-link>
            </span>|
            <span class="tap-list " @click="headkey(1)">
              <router-link active-class="tap-checked" to="/home/shui" >直播</router-link>
            </span>
        </nav>
      </div>
      <BannerSwiper class="banner" :data="bannerData[useind]"></BannerSwiper>
  	 <router-view></router-view>
  	</div>
  </div>
</template>

<script>
import Headerbox from '@/components/Headerbox'
import BannerSwiper from '@/components/Banner'
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Home',
      useind:0,
      bannerData:[
        [
        'http://img2.soyoung.com/post/20170808/3/20170808200714848.png',
        'http://img2.soyoung.com/upload/20170807/0/20170807193816374.jpg',
        'http://img2.soyoung.com/upload/20170807/0/20170807193814392.jpg',
        'http://img2.soyoung.com/upload/20170809/7/20170809135725140.jpg',
        'http://img2.soyoung.com/upload/20170808/4/20170808171007801.jpg',
        'http://img2.soyoung.com/upload/20170809/1/20170809141521343.jpg',
        'http://img2.soyoung.com/upload/20170809/5/20170809073637759.jpg'
        ],
        [
        'http://img2.soyoung.com/post/20170807/0/20170807174440457.jpg',
        'http://img2.soyoung.com/post/20170808/5/20170808112432702.jpg',
        'http://img2.soyoung.com/post/20170808/8/20170808112432806.jpg',
        'http://img2.soyoung.com/post/20170804/2/20170804150530816.jpg'
        ] 
      ]
    }
  },
  methods:{
    headkey (ind) {
      this.useind=ind
    }
  },
  components : {
    Headerbox,
    BannerSwiper
  	
  }
}
</script>
	
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.Home{
		width: 100%;
		height: 100%;
		display: -webkit-flex;
		flex-direction: column;
   
	}
	.header{
		height: .37rem;
		line-height: .36rem;
	}
  .banner{
    width: 100%;
    img{
      width: 100%;
    }
  }
	.content{
		flex: 1;
    overflow-x: hidden;
    overflow-y: scroll;
    &::-webkit-scrollbar{
        display:none;
    }
	}
  .tap-nav{
      display: -webkit-flex;
      height: .32rem;
      line-height: .3rem;
  }
  .tap-list{
      flex: 1;
      padding-left: .15rem;
      padding-right: .15rem;
      a{
        display: inline-block;
      }
  .tap-checked{
      color: #72dacf;
      border-bottom: .02rem solid #72dacf
      }
  }
  
</style>
