// 该文件用于创建 Vuex 中的核心：store

import Vue from 'vue'
// 引入 Vuex
import Vuex from 'vuex'
import sumOptions from './sum'
import personOptions from './person'

// 使用Vuex插件
Vue.use(Vuex)

// 创建并暴露 Store
export default new Vuex.Store({
    modules: {
        sumAbout: sumOptions,
        personAbout: personOptions
    }
})