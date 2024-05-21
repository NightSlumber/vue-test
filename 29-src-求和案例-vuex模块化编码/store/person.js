import axios from "axios"
import { nanoid } from "nanoid"

// 人员管理相关的配置
export default {
    namespaced: true,
    actions: {
        addPersonWang(context, value) {
            if (value.name.indexOf('王') === 0) {
                context.commit("ADD_PERSONOBJ", value)
            } else {
                alert('添加的人必须姓王！')
            }
        },
        addPersonServer(context) {
            axios.get("https://api.oioweb.cn/api/common/yiyan").then(
                reponse => {
                    context.commit("ADD_PERSONOBJ", {
                        id: nanoid(),
                        name: reponse.data.result.author
                    })
                    // console.log(reponse.data.result.author)
                },
                error => {
                    alert(error.message)
                }
            )
        }
    },
    mutations: {
        ADD_PERSONOBJ(state, personObj) {
            state.personList.unshift(personObj)
        }
    },
    state: {
        personList: [
            {
                id: '001',
                name: '张三'
            }
        ]
    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name
        }
    }
}