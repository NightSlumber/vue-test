<template>
  <div>
    <img src="./assets/logo.png" alt="logo">
    <School/>
    <Student/>
  </div>
</template>

<script>
    // 导入组件
    import School from './components/School'
    import Student from './components/Student'

    export default {
        name: 'App',
        components: {
            School,
            Student
        }
    }
</script>