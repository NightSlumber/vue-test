<template>
    <div class="app">
        <h1>App组件</h1>
        <h2>{{ msg }}</h2>
        <School/>
        <Student/>
    </div>
</template>

<script>
    import School from './components/School'
    import Student from './components/Student'

    export default {
        name: 'App',
        components: {
            School,
            Student
        },
        data() {
            return {
                msg: '你好呀',
            }
        }
    }
</script>
    
<style>
    .app {
        background-color: grey;
        padding: 10px;
    }
</style>