<template>
    <div>
        <h1>当前求和为：{{ sum }}</h1>
        <select v-model.number="num">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前为奇数才+</button>
        <button @click="incrementWait">等几秒才+</button>
    </div>
</template>

<script>
    export default {
        name: 'Count',
        data() {
            return {
                sum: 0,
                num: 1,
            }
        },
        methods: {
            increment() {
                this.sum += this.num
            },
            decrement() {
                this.sum -= this.num
            },
            incrementOdd() {
                if (this.sum % 2) {
                    this.sum += this.num
                }
            },
            incrementWait() {
                setTimeout(() => {
                    this.sum += this.num
                }, 500);
            },
        }
    }
</script>

<style scoped>
    button {
        margin-left: 10px;
    }
</style>