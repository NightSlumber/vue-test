<template>
  <div class="student">
    <h2>Student组件</h2>
    <h2>当前number:{{ number }}</h2>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ gender }}</h2>
    <button @click="++number">点我number + 1</button>
    <button @click="sendStudentName">点我把学生名传给App</button>
    <button @click="unbind">解绑 event 事件</button>
    <button @click="death">销毁当前Student组件的实例（vc）</button>
  </div>
</template>

<script>
    export default {
        name: 'Student',
        data() {
            return {
                name: '张三',
                gender: '男',
                number: 1
            }
        },
        methods: {
          sendStudentName() {
            this.$emit('event', this.name)
            // this.$emit('demo')
            this.$emit('click')
          },
          unbind() {
            this.$off('event')
            // this.$off(['event', 'demo'])
            // this.$off()
          },
          death() {
            this.$destroy()
          }
        }
    }
</script>

<style scoped>
  .student {
    background-color: pink;
    padding: 5px;
    margin-top: 50px;
  }
</style>