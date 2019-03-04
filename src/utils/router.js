import Vue from 'vue'
import VueRouter from 'vue-router'

//引入组件
import Home from 'pages/Home.vue'
import Mine from 'pages/Mine.vue'
import Room from 'pages/Room.vue'
import Err from 'pages/Err.vue'
import Distpicker from 'components/layout/Distpicker'


Vue.use(VueRouter)
    //创建路由表
let routes = [{
        path: '/',
        redirect: '/home' //重定向
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/mine',
        component: Mine
    },
    {
        path: '/room',
        component: Room
    },
    {
        path:'/distpicker',
        component:Distpicker
    },
    {
        path: '/err',
        component: Err
    },
    {
        path: '*',
        redirect: '/err' //所有未知页面错误匹配 写在路由表最下方
    },
]

const router = new VueRouter({
    routes,
    mode: 'history' //除去hash#，用了一定要和后端配合
})

export default router