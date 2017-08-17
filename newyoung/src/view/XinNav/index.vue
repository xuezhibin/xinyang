<template>
  <div class="XinNav">
  	{{msg}}
  	{{$route.query}}
  </div>
</template>
<script>
export default {
  name: 'XinNav',
  data () {
    return {
      msg: 'Welcome to XinNav'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>