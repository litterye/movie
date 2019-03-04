<template>
  <div id="app">
    
    <div class="main">
      <!-- <Home></Home> -->
      <router-view></router-view>
    </div>
    
  </div>
</template>
<script>

import Home from './pages/Home';


export default {
  components:{
    Home
  }
}
</script>

<style lang="stylus">
@import '~styles/_reset.styl'
#app 
  display flex
  height 100%
  flex-direction column
  .main
    flex 1
    height 100%
    

</style>
