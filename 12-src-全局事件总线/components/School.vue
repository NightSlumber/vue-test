<template>
  <div class="school">
    <h2>School组件</h2>
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
    export default {
        name: 'School',
        data() {
            return {
                name: '家里蹲',
                address: 'home'
            }
        },
        mounted() {
          // console.log('School', this.x)
          // 在$bus上绑定一个hello事件
          this.$bus.$on('hello', (value) => {
            console.log('我是School组件，我收到了学生名', value)
          })
        },
        beforeDestroy() {
          this.$bus.$off('hello')
        }
    }
</script>

<style scoped>
  .school {
    background-color: skyblue;
    padding: 5px;
  }
</style>