<template>
  <div class="Content">
  <TopNav></TopNav>
  <nav class="xin-fuli clear-both">
	 <Xinfuli class="float-right mr20 xin-fulibox"></Xinfuli>
  </nav>
  <nav class="mid-nav">
  	 <Midnav :data="MidNav" class="mid-navbox text-center" @sendkey="sendkey"></Midnav>
	 <div class="mid-all">全部</div>
  </nav>
  <MainContent :usekey="keys">
    <template scope="props">
      <span>打破这沉寂的世界</span>
      <span>{{ props.text }}</span>
    </template>
  </MainContent>
  </div>
</template>
<script>

import Midnav from '../Home/Midnav'
import Xinfuli from '../Home/Xinfuli'
import TopNav from '../Home/TopNav'
import MainContent from '../Home/MainContent'
export default {
  name: 'Content',
  data () {
    return {
      msg: 'Content',
      keys:'001',
      MidNav:[
     	{
      		content:'推荐',
      		key:'001'
      	},
  		{
      		content:'视频',
      		key:'002'
      	},    	
    	{
      		content:'眼部',
      		key:'003'
      	},
     	{
      		content:'自体脂肪',
      		key:'004'
      	},
    	{
      		content:'面部抗衰',
      		key:'005'
      	},
      	{
      		content:'下巴',
      		key:'006'
      	},
    	{
      		content:'牙齿',
      		key:'007'
      	},
      	{
      		content:'身材',
      		key:'008'
      	},
    	{
      		content:'微整',
      		key:'009'
      	},
    	{
      		content:'韩国',
      		key:'010'
      	}
      ]
    }
  },
  components : {
  	Midnav,
  	Xinfuli,
  	TopNav,
  	MainContent
  },
  methods:{
  	sendkey(data){
  		this.keys=data[0]
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

	.xin-fuli{
		height: .3rem;
		line-height: .3rem;
		overflow: hidden;
		background-image: url(http://img2.soyoung.com/qcwz/20160801/8/20160801133221973.jpg);
		background-repeat: no-repeat;
		background-size: auto 100%;
	}
	.xin-fulibox{
		height: 200%;
		a{
			display: block;
			height: 100%;
		}
	}
	.mid-nav{
		display: -webkit-flex;
		height:.28rem;
		line-height: .28rem;
	}
	.mid-navbox{
		width: 90%;
	}
	.mid-all{
		width: 10%;
	}
</style>
