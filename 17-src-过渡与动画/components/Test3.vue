<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group
        appear
        name="animate__animated animate__bounce"
        enter-active-class="animate__rubberBand"
        leave-active-class="animate__bounceOutDown"
    >
        <h2 v-show="isShow" key="1">你好呀~</h2>
        <h2 v-show="!isShow" key="2">不好呀~</h2>
    </transition-group>
  </div>
</template>

<script>
    import 'animate.css'

    export default {
        name: 'Test3',
        data() {
            return {
                isShow: true
            }
        }
    }
</script>

<style scoped>
    h2 {
        background-color: orange;
    }
</style>