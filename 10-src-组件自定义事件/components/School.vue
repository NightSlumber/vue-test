<template>
  <div class="school">
    <h2>School组件</h2>
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="sendSchoolName">点我把学校名传给App</button>
  </div>
</template>

<script>
    export default {
        name: 'School',
        props: ['getSchoolName'],
        data() {
            return {
                name: '家里蹲',
                address: 'home'
            }
        },
        methods: {
          sendSchoolName() {
            this.getSchoolName(this.name)
          }
        }
    }
</script>

<style scoped>
  .school {
    background-color: skyblue;
    padding: 5px;
  }
</style>