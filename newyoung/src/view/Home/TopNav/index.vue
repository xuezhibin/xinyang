<template>
  <div class="TopNav">
  	 <div class="xin-nav">
		  	<router-link to="/xinnav?id=1&data=1">
			  	<dl class="xin-list">
			  		<dt><img src="http://img2.soyoung.com/upload/20170320/9/20170320100036961.jpg" alt=""></dt>
			  		<dd> 美丽日记 </dd>
			  	</dl>
		  	</router-link>
		  	<router-link to="/xinnav?id=1&data=2">
			  	<dl class="xin-list">
			  		<dt><img src="http://img2.soyoung.com/upload/20170320/1/20170320100046594.jpg" alt=""></dt>
			  		<dd> 项目宝典 </dd>
			  	</dl>
		  	</router-link>
		  	<router-link to="/xinnav?id=2&data=3">
			  	<dl class="xin-list">
			  		<dt><img src="http://img2.soyoung.com/upload/20170320/9/20170320100055946.jpg" alt=""></dt>
			  		<dd> 医生排行 </dd>
			  	</dl>
		  	</router-link>
		  	<router-link to="/xinnav?id=3&data=4">
			  	<dl class="xin-list">
			  		<dt><img src="http://img2.soyoung.com/upload/20170320/0/20170320100104446.jpg" alt=""></dt>
			  		<dd> 医院排行 </dd>
			  	</dl>
		  	</router-link>
		</div>
		<div class="yzs-box">
		  	<img src="//mstatic.soyoung.com/m/static/img/site/index_yzs.png" alt="">
		</div>
		<nav class="topic-nav">
		 	<a href="javascript:;" class="topic-list">
		 		<img src="http://img2.soyoung.com/upload/20170809/8/20170809134955424.jpg" alt="">
		 	</a>
		 	<div class="topic-list">
		 		<a href="javascript:;"  >
		 			<img src="http://img2.soyoung.com/upload/20170808/7/20170808104605328.jpg" alt="">
		  	</a>
		  	<a href="javascript:;">
		  		<img src="http://img2.soyoung.com/upload/20170809/3/20170809172039723.jpg" alt="">
		  	</a>
		 	</div>
	  </nav>
  </div>
</template>
<script>
export default {
  name: 'TopNav',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.xin-nav{
		display: -webkit-flex;
		margin-top: .1rem;
	}
	.xin-list{
		flex: 1;
		text-align: center;
		line-height: 2em;
		dt{
			img{
				width: 60%;
			}
		}
	}
	.yzs-box{
		border-top: .1rem solid #ccc;
	}
	.topic-nav{
		display: -webkit-flex;
		flex-wrap: wrap;
	}
	.topic-list{
		width: 60%;
		height: 50%;
	}
	.topic-list:first-child{
		width: 40%;
		height: 100%;
	}

</style>
