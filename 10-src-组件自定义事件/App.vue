<template>
    <div class="app">
        <h1>App组件</h1>
        <h2>{{ msg }}</h2>
        <h2>学生姓名：{{ studentName }}</h2>
        <School :getSchoolName="getSchoolName"/>

        <!-- <Student @event="getStudentName" @demo="m1"/> -->
        <Student ref="student" @click.native="show"/>
    </div>
</template>

<script>
    import Student from './components/Student'
    import School from './components/School'

    export default {
        name: 'App',
        components: {
            School,
            Student
        },
        data() {
            return {
                msg: '你好呀',
                studentName: ''
            }
        },
        methods: {
            getSchoolName(name) {
                console.log("App收到了School中的学校名", name)
            },
            getStudentName(name) {
                console.log("App收到了Student中的学生名", name)
                this.studentName = name
            },
            m1() {
                console.log("demo事件被触发了")
            },
            show() {
                alert("123s")
            }
        },
        mounted() {
            // 当 event 事件被触发后，执行后面的方法
            // setTimeout(() => {
            //     this.$refs.student.$on('event', this.getStudentName)
            // }, 3000)
            this.$refs.student.$on('event', this.getStudentName)

            // this.$refs.student.$on('event', function(name) {
            //     console.log("App收到了Student中的学生名", name)
            // })
        }
    }
</script>
    
<style>
    .app {
        background-color: grey;
        padding: 10px;
    }
</style>