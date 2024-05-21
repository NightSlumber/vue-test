// 该文件用于创建 Vuex 中的核心：store

import Vue from 'vue'
// 引入 Vuex
import Vuex from 'vuex'
// 使用Vuex插件
Vue.use(Vuex)

// 准备actions，用于响应组件中的动作
const actions = {
    // context 相当于 miniStore
    // plus(context, value) {
    //     // console.log('actions 中的 plus 被调用了', context, value);
    //     context.commit('PLUS', value)
    // },
    // sub(context, value) {
    //     context.commit('SUB', value)
    // },
    plusOdd(context, value) {
        console.log('actions 中的 plusOdd 被调用了')
        if (context.state.sum % 2) {
            context.commit('PLUS', value)
        }
    },
    plusWait(context, value) {
        setTimeout(() => {
            context.commit('PLUS', value)
        }, 500)
    }
}
// 准备mutations，用于操作数据（state）
const mutations = {
    PLUS(state, value) {
        // console.log('mutations 中的 PLUS 被调用了', state, value);
        state.sum += value
    },
    SUB(state, value) {
        state.sum -= value
    }
}
// 准备state，用于存储数据
const state = {
    sum: 0,
    school: '家里蹲',
    subject: '前端Vue'
}
// 准备getters，用于对state中的数据加工
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

// 创建并暴露 Store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})

// // 创建 store，麻烦写法
// const store = new Vuex.Store({
//     actions,
//     mutations,
//     state
// })
// // 暴露 store
// export default store