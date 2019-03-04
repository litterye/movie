<template>
    <div class="contentbox">
        <div class="showbox">
            <div class="movebox">
                <Movielist :movielist="movielist"></Movielist>
            </div>
        </div>
    </div>
</template>

<script>
import Movielist from 'components/movie/Movielist'

import http from 'utils/http'

import { Indicator } from 'mint-ui';

import BScroll from 'better-scroll'

export default {
    data(){
        return {
            movielist:null,
        }
    },
    components:{
        Movielist
    },
    async created(){
        Indicator.open({
            text: '加载中',
            spinnerType: 'fading-circle'
        });
        this.movielist=await http({
            method:'get',
            url:'/ajax/movieOnInfoList'
        });
        Indicator.close();
    },
    mounted(){
        // let bscroll=new BScroll('.showbox',{
        //     pullUpLoad: {
        //     threshold: 50
        //     },
        //     scrollbar: {
        //     fade: true,
        //     interactive: false // 1.8.0 新增
        //     }
        // })
        // bscroll.on('pullingUp',()=>{
        //     console.log(1);
        //     bScroll.finishPullUp()
        // })
        // console.log(bscroll);
    }
}
</script>

<style lang="stylus" scoped>
    .contentbox
        margin-top .945rem
            
</style>


