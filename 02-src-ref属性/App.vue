<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <button @click="showDOM" ref="btn">点我输出上方的DOM元素</button>
        <School ref="sch"/>
    </div>
</template>

<script>
    import School from './components/School'
    export default {
        name: 'App',
        components: {
            School
        },
        data() {
            return {
                msg: '欢迎学习Vue!'
            }
        },
        methods: {
            showDOM() {
                console.log(this.$refs.sch)
            }
        }
        
    }
</script>