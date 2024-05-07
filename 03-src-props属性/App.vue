<template>
    <div>
        <Student name="李四" gender="女" :age="18"/>
    </div>
</template>

<script>
    import Student from './components/Student'
    export default {
        name: 'App',
        components: {
            Student
        }
    }
</script>