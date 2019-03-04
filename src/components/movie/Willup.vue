<template>
    <div class="willup-box">
        <div class="top">
            <p class="title">近期最受期待</p>
            <div class="person-wrap" ref="personWrap">
                <div class="swiper-box person-list" ref="personTab">
                    <div class="swiper-content" v-for="comingData in comingDatas" :key="comingData.id">
                        <div class="imgbox">
                            <img :src="comingData.img|imgFilter('170.230')" alt="">
                            <div class="heart">
                                <i class="icon"></i>
                            </div>
                            <div class="wantseen">
                                <span>{{comingData.wish}}</span>人想看
                            </div>
                        </div>
                        <h5>{{comingData.nm}}</h5>
                        <p>{{comingData.comingTitle}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg"></div>
        <Willuplist></Willuplist>
    </div>
</template>

<script>
import {mapActions,mapMutations,mapGetters} from 'vuex'
import BScroll from 'better-scroll'
import Willuplist from './Willuplist'
export default {
    // https://p0.meituan.net/170.230/movie/034069fc367db8a7d9644717b416cc2c332883.jpg
    // "http://p0.meituan.net/w.h/movie/9ef02a501fee7f62d49d2096b52175d32155331.jpg"
    data(){
        return{
            comingDatas:null
        }
    },
    components: {
        Willuplist
    },
    methods:{
        ...mapActions(['willupget']),
        personScroll() {
      // 默认有10个子元素，每个子元素的宽度为85px
        let width = 10 * .85;
        this.$refs.personTab.style.width = width + "rem";
        // this.$nextTick 是一个异步函数，为了确保 DOM 已经渲染
        this.$nextTick(() => {
            if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.personWrap, {
                startX: 0,
                click: true,
                scrollX: true,
                // 忽略竖直方向的滚动
                scrollY: false,
                eventPassthrough: "vertical"
            });
            } else {
            this.scroll.refresh();
            }
        });
        }
    },
    computed:{
       
    },
    created(){     
       
         this.willupget()
        // this.$store.dispatch('willupget','123') //在actions.js中参数加了负载payload，dispatch中的第二个参数就是payload      
        console.log(this.$store.getters.willup.coming)
        this.comingDatas=this.$store.getters.willup.coming
       
        this.$nextTick(()=>{
            this.personScroll()
        })
    }
}
</script>

<style lang="stylus" scoped>
    .willup-box
        margin-top .945rem
        .bg
            height .1rem
            width 100vw
            background #ddd
        .top
            padding .12rem .15rem
            overflow hidden
            .title
                font-size .14rem
                margin-bottom .12rem
                color #333333
                font-weight 900
            .swiper-box
                display flex
                overflow hidden
                .swiper-content
                    // width .85rem
                    margin-right .1rem
                    .imgbox
                        width .85rem
                        height 1.15rem
                        position relative
                        img 
                            width .85rem
                            height 1.15rem
                        .wantseen
                            position absolute
                            left 0
                            bottom 0
                            width 100%
                            height .2rem
                            line-height .2rem
                            color #faaf00
                            font-weight 900
                            font-size .12rem
                            background-color rgba(0,0,0,.5)
                    h5
                        height .17rem
                        line-height .17rem
                        font-size .13rem
                        color #222222
                        margin .05rem 0
                    p
                        font-size .12rem
                        color #999999
                        margin-bottom .1rem  
                        text-overflow hidden 

</style>


