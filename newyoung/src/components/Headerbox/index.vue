<template>
  <div>
  	<div class="Headerbox">
	  	<section class="address">定位中...</section>
	  	<section class="title">新氧美容整形</section>
	  	<section class="btn">
	  		<router-link to="/search"><i class="fa fa-search"></i></router-link>
	  		<i class="fa fa-user-o"  @click="fnUser()"></i>
	  	</section>
	  	<transition 
	  		name="custom-classes-transition"
	 		enter-active-class="animated fadeInDown"
	    	leave-active-class="animated fadeOutUp"
		>
		  	<div v-show="boxshow" :style="{ height : boxHeight+'rem' }" class="user-box">
		  		<router-link to="/down">
			  		<dl>
			  			<dt><i class="fa fa-2x fa-link"></i></dt>
			  			<dd>下载APP</dd>
			  		</dl>
		  		</router-link>
		  		<router-link  to="/login">
			  		<dl>
			  			<dt><i class="fa fa-2x fa-sign-in"></i></dt>
			  			<dd>登陆</dd>
			  		</dl>
		  		</router-link>
		  	</div>
	  	</transition>
  	</div>
  	
  </div>
</template>

<script>
export default {
  name: 'Headerbox',
  methods : {
  	fnUser () {
  		if(this.boxshow){
  			this.boxshow=false;
  			this.boxHeight=0;
  		}else{
  			this.boxshow=true;
  			this.boxHeight=.62
  		}
  	},
  	headkey (ind) {
  		this.$emit('pfhome',ind)
  	}
  },
  data () {
    return {
      msg: 'Headerbox',
      boxshow : false,
      boxHeight :0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.Headerbox{
		display: -webkit-flex;
		display: flex;
		position: relative;
		border-bottom: 1px solid  #ccc;
		.address,.btn,.btn a{
			color: #72dacf;
		}
		section {
			flex: 1
		}
		.address{
			text-indent: .1rem;
			font-weight: 600;
		}
		.title{
			text-align: center;
			font-size: .14rem;
		}
		.btn i{
			font-size: .20rem;
			margin-left: .2rem;
		}
	}
	.user-box{
		position: absolute;
		z-index:100;
		width: 100%;
		display: -webkit-flex;
		display: flex;
		top: .37rem;
		left: 0;
		color: #ccc;
		line-height: 2em;
		overflow: hidden;
		background-color: rgba(255,255,255,0.9);
		transition: height .5s;
		a{
			flex: 1;
			text-align: center;
			i{
				margin-top: .1rem;
			}
		}
	}
	
</style>
