<template>
  <div class="Main-content">
  	{{msg+usekey}}
    <div>
      <slot text="让我们迎接光明的未来">
        默认的
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainContent',
  props:{
  	'usekey':{
  		default : '001'
  	}
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
