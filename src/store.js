import Vue from 'vue'
import Vuex from 'vuex'

//vuex模块引入
import WillupModule from './store/Willup/index'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        WillupModule
    },
})