<template>
    <div class="register">
        <div class="top">
            <span>&lt;</span>
        </div>
        <p>猫眼电影</p>
        <div class="form">
            <div class="phone">
                <label for="phone">+86</label>
                <input type="text" id="phone" name="phone" placeholder="输入手机号">
            </div>
            <div class="phone">
                <label for="check">验证码</label>
                <input type="text" id="check" name="check" placeholder="输入验证码">
                <span>获取验证码</span>
            </div>
            <div class="btn">
                <button>注册</button>
            </div>
            <div>
                <span>收不到验证码？</span>
            </div>
        </div>
        <div class="bottom">
            注册表示同意<span>用户协议</span>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="stylus" scoped>
@import '~styles/_base.styl'
@import '~styles/_border.styl'
    .register
        .top
            font-size .28rem
            line-height .85rem
            font-weight 900
            color $bg
            padding-left .3rem
        &>p
            text-align center
            color $bg
            font-weight 900
            font-size .7rem
            margin-bottom .9rem
        .form
            padding 0 .6rem
            .phone
                width 100%
                border 0 0 1px 0,#ccc
                margin-bottom .55rem
                height .65rem
                line-height .65rem
                font-size .18rem
                color #14151a
                display flex
                label
                    width 1rem
                    display inline-block
                input{
                    display:inline-block
                    width:2.2rem
                    border:none 
                    border:0 0 0 0,#fff
                    outline:none
                }
                    


</style>

