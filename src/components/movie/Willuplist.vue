<template>
    <div class="willuplist" ref="personWrap">
        <div class="box" v-for="movie in movielist" :key="movie.id">
            <div class="img">
                <img :src="movie.img|imgFilter('128.180')" alt="">
            </div>
            <div class="msg">
                <div class="left">
                    <div class="title">
                        {{movie.nm}}
                        <img :src="movie.version=='v3d imax'?'/img/3D.png':'/img/2D.png'">
                    </div>
                    <div class="evaluate">                        
                        <span>{{movie.wish}}</span>&nbsp;人想看
                    </div>
                    <div class="main-p">
                        主演：
                    {{movie.star}}
                    </div>
                    <div class="count">
                        {{movie.showInfo?movie.showInfo:movie.rt}}
                    </div>
                </div>
                <div class="right">
                    <button :class="movie.showst==4?'pre':''">{{movie.showst==4?'预售':'想看'}}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import BScroll from 'better-scroll'
export default {
    data(){
        return{
            movielist:null
        }
    },
    methods: {
      changeList(data){
          this.movielist=data
      },
      scroll(){
          this.$nextTick(() => {
            if (!this.scroll) {
                this.scroll = new BScroll(this.$refs.personWrap, {
                    startX: 0,
                    click: true,
                    scrollX: false,
                    // 设置竖直方向的滚动
                    scrollY: true,
                    eventPassthrough: "horizontal"
                });
            } else {
                // this.scroll.refresh();
            }
        })
      }   
    },
    async created () {
        let result=await axios({
            url:"ajax/comingList",
            method:"get",
            params:{
                ci: 50,
                token: "",
                limit: 10
            }
        })
        this.changeList(result.data.coming)
        console.log(this.movielist)
        this.$nextTick(()=>{
            this.scroll()
        })
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/_border.styl'
@import '~styles/_base.styl'
@import '~styles/_ellipsis.styl'
    
    .box
        display flex
        padding .12rem .15rem
        padding-bottom none
        .img
            margin-right .12rem
            img 
                width .64rem
                height .9rem
        .msg
            display flex
            padding-bottom .12rem
            border 0 0 1px 0,#ccc
            .left
                font-size .13rem
                line-height .22rem
                color #666
                width 2rem
                ellipsis()
                .title
                    font-size .17rem
                    line-height .28rem
                    font-weight 900
                    color #333333
                    ellipsis()
                    img 
                        width .43rem
                .evaluate
                    ellipsis()
                    span 
                        font-size .15rem
                        font-weight 900
                        color #faaf00
            .right
                display flex
                align-items center
                .pre
                    background #3c9fe6
                    border-color #3c9fe6
                button 
                    width .47rem
                    height .27rem
                    background-color #faaf00
                    border-color #faaf00
                    font-weight 900
                    border-radius .04rem
                    color #fff
</style>


