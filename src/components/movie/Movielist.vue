<template>
    <div class="movie-item">
        <div class="box" v-for="movie in movies" :key="movie.id">
            <div class="img">
            <!-- <img src="/img/3D.png">
            <img src="@/assets/images/3D.png" alt=""> -->
            <img :src="movie.img|imgFilter('128.180')" alt="">
        </div>
        <div class="msg">
            <div class="left">
                <div class="title">
                    {{movie.nm}}
                    <img :src="movie.version=='v3d imax'?'/img/3D.png':'/img/2D.png'">
                </div>
                <div class="evaluate">
                    观众评
                    <span>{{movie.sc}}</span>
                </div>
                <div class="main-p">
                    主演：
                   {{movie.star}}
                </div>
                <div class="count">
                    {{movie.showInfo}}
                </div>
            </div>
            <div class="right">
                <button :class="movie.showst==4?'pre':''">{{movie.showst==4?'预售':'购票'}}</button>
            </div>
        </div>
        </div>
    </div>
</template>

<script>


export default {
    props:{
        "movielist":Object
    },
    computed:{
        movies(){
            return this.movielist?this.movielist.movieList:[];
            // return this.movielist&&this.movielist.movieList||[];高级
        }
    },
    data(){
        return {
            
        }
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
                    background-color $bg
                    font-weight 900
                    border-color $bg
                    border-radius .04rem
                    color #fff
                    


</style>


