<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="trans" appear>
        <h2 v-show="isShow">你好呀~</h2>
    </transition>
  </div>
</template>

<script>
    export default {
        name: 'Test',
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

    .trans-enter-active {
        animation: anim 0.5s linear;
    }

    .trans-leave-active {
        animation: anim 0.5s linear reverse;
    }

    /* @keyframes 是定义一个关键帧，后面是动画的名字 */
    @keyframes anim {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(0px);
        }
    }
</style>