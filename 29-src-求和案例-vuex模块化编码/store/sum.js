// 求和相关的配置
export default {
    namespaced: true,
    actions: {
        plusOdd(context, value) {
            // console.log('actions 中的 plusOdd 被调用了')
            if (context.state.sum % 2) {
                context.commit('PLUS', value)
            }
        },
        plusWait(context, value) {
            setTimeout(() => {
                context.commit('PLUS', value)
            }, 500)
        }
    },
    mutations: {
        PLUS(state, value) {
            state.sum += value
        },
        SUB(state, value) {
            state.sum -= value
        },
    },
    state: {
        sum: 0,
        school: '家里蹲',
        subject: '前端Vue',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}