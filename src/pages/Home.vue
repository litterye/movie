<template>
    <div class="Home-box">
        <Header></Header>
        <div class="nav">
            <div class="city">
                <router-link tag="span" to="/distpicker" keep-alive>{{city?city:"杭州"}}</router-link>
                <svg t="1550545326185" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3182" xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="12"><path d="M750.331 457.203l-238.576 238.087-238.087-238.576z" p-id="3183"></path></svg>
            </div>
            <div class="nav-content">
                <div class="choose" @click="movieType" :class="[mactive]">
                    正在热映
                </div>
                <div class="choose" @click="willupType" :class="[wactive]">
                    即将上映
                </div>               
            </div>
            <div class="search">
                    <svg t="1550545158342" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2368" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"><path d="M938.64603 886.273219l-173.071777-173.074847c53.665247-63.987337 86.075401-146.400325 86.075401-236.446154 0-203.406666-164.895561-368.298134-368.301204-368.298134-203.409736 0-368.302227 164.892491-368.302227 368.298134 0 203.409736 164.892491 368.302227 368.302227 368.302227 89.246627 0 171.055864-31.767518 234.798631-84.579327l173.148525 173.148525c1.576915 1.576915 8.15575-2.443655 14.6957-8.979512l23.675212-23.675212C936.205445 894.428969 940.222945 887.850134 938.64603 886.273219zM483.347426 778.093381c-166.425404 0-301.338093-134.912689-301.338093-301.338093s134.912689-301.338093 301.338093-301.338093S784.685519 310.329884 784.685519 476.755288 649.773853 778.093381 483.347426 778.093381z" p-id="2369"></path></svg>
            </div>
        </div>
        <div class="show">
            <!-- <Movie></Movie> -->
            <keep-alive>
                <component :is="type"></component>
            </keep-alive>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>

import Movie from 'components/movie/Movie'
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import Willup from 'components/movie/Willup'

export default {
    // name: 'Home',
    components:{
        Header,Footer,Movie,Willup
    },
    data(){
        return{
            type:'Movie',
            mactive:'active',
            wactive:'',
            city:"杭州"
        }
    },
    methods:{
        movieType(){
            this.type='Movie';
            this.wactive='';
            this.mactive='active';
        },
        willupType(){
            this.type='Willup';
            this.wactive='active';
            this.mactive='';
        },
        changeCity(){
            this.city=sessionStorage.getItem("city")
        }
    },
    mounted () {
        this.changeCity()
        console.log(this.city)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '~styles/_base.styl'
@import '~styles/_border.styl'
    .city
        color #222
    .active
        border-bottom 2px solid $bg
        color $bg
    .show
        height 100%
        overflow auto
    // .show::-webkit-scrollbar 
    //     width 0
    // .show::-webkit-scrollbar 
    //     display none
    .nav
        display flex
        height .44rem
        width 100vw
        line-height .44rem
        text-align center
        font-size .15rem
        color #666
        border 0 0 1px 0,#ccc
        position fixed
        left 0
        top .505rem
        background #ffffff
        z-index 99
        .city
            flex 80
            svg 
                fill #999
        .nav-content
            flex 210
            display flex
            font-weight 900
            
            .choose
                flex 1
                margin 0 .12rem
        .search
            flex 85
            display flex
            justify-content flex-end
            align-items center
            svg 
                fill $bg
                margin-right .14rem
</style>
