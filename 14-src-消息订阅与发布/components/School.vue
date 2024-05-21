<template>
  <div class="school">
    <h2>School组件</h2>
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
  import pubsub from 'pubsub-js'

  export default {
      name: 'School',
      data() {
          return {
              name: '家里蹲',
              address: 'home'
          }
      },
      mounted() {
        this.pubId = pubsub.subscribe('hello', (msgName, value) => {
          console.log(this)
          // console.log('有人发布了hello消息，hello的回调函数执行了', msgName, value)
        })
      },
      beforeDestroy() {
        pubsub.unsubscribe(this.pubId)
      }
  }
</script>

<style scoped>
  .school {
    background-color: skyblue;
    padding: 5px;
  }
</style>