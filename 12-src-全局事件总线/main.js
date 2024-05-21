// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 关闭Vue的生产提示
Vue.config.productionTip = false

// 创建VueComponent
const Demo = Vue.extend({})
// 创建VC的实例对象
const d = new Demo()

Vue.prototype.x = d

new Vue({
    el: '#app',
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this  // 安装全局事件总线
    }
})