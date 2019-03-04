<template>
    <div class="header-box">
        猫眼电影
    </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '~styles/_base.styl'

.header-box
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
</style>
