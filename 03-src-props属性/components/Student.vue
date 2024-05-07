<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ gender }}</h2>
    <h2>学生年龄：{{ myAge }}</h2>
    <button @click="updataAge">年龄加1岁</button>
  </div>
</template>

<script>
    export default {
        name: 'Student',
        data() {
            return {
                msg: '我是一个正在学习Vue的学生',
                myAge: this.age
            }
        },
        methods: {
            updataAge() {
                ++this.myAge
            }
        },
        // props: ['name', 'gender', 'age']

        // props: {
        //     name: String,
        //     gender: String,
        //     age: Number
        // }

        props: {
            name: {
                type: String,
                required: true
            },
            gender: {
                type: String,
                required: true
            },
            age: {
                type: Number,
                default: 99
            }
        }
    }
</script>