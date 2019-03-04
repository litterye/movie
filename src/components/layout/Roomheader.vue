<template>
    <div class="roomheader-box">
        <router-link to="/home"> &lt; </router-link>
        猫眼电影
    </div>
</template>

<script>
export default {
  name: 'Roomheader',
  props: {
    msg: String
  },
  components:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '~styles/_base.styl'

.roomheader-box
    width 100%
    height .505rem
    line-height .505rem
    background $bg
    text-align center
    font-size .18rem
    color #fff
    position fixed
    left 0
    top 0
    z-index 99
    a
        position fixed
        left 0
        top 0
        display inline-block
        height 100%
        width .25rem
        padding 0 .15rem
        font-size .4rem
        color #fff
</style>