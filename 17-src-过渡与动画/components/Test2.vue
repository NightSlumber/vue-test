<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group name="trans" appear>
        <h2 v-show="isShow" key="1">你好呀~</h2>
        <h2 v-show="!isShow" key="2">不好呀~</h2>
    </transition-group>
  </div>
</template>

<script>
    export default {
        name: 'Test2',
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
        /* transition: 0.5s linear; */
    }

    /* 进入的起点、离开的终点 */
    .trans-enter, .trans-leave-to {
        transform: translateX(-100%);
    }

    /* 进入的终点、离开的起点 */
    .trans-enter-to, .trans-leave {
        transform: translateX(0);
    }

    .trans-enter-active, .trans-leave-active {
        transition: 0.5s linear;
    }
</style>