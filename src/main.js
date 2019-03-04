import './utils/rem';

import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import store from './store'
// import './registerServiceWorker'
//引入全局过滤器
import 'utils/fiters'
//引入路由组件
import router from 'utils/router.js'
import 'swiper'

Vue.config.productionTip = false

var vm = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
