<template>
    <div>
        <h1>当前求和为：{{ sum }}</h1>
        <h3>当前求和放大10倍为：{{ bigSum }}</h3>
        <h3>我在{{ school }}，学习{{ subject }}</h3>
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
    import { mapState, mapGetters } from 'vuex';

    export default {
        name: 'Count',
        data() {
            return {
                num: 1,
            }
        },
        computed: {
            // sum() {
            //     return this.$store.state.sum
            // },
            // school() {
            //     return this.$store.state.school
            // },
            // subject() {
            //     return this.$store.state.subject
            // },

            // 借助 mapState 快速生成计算属性，读取state中的数据，对象写法
            // ...mapState({
            //     sum: 'sum',
            //     school: 'school',
            //     subject: 'subject'
            // }),

            ...mapState(['sum', 'school', 'subject']),

            // bigSum() {
            //     return this.$store.getters.bigSum
            // },

            ...mapGetters(['bigSum'])
        },
        methods: {
            increment() {
                this.$store.commit('PLUS', this.num)
            },
            decrement() {
                this.$store.commit('SUB', this.num)
            },
            incrementOdd() {
                this.$store.dispatch('plusOdd', this.num)
            },
            incrementWait() {
                this.$store.dispatch('plusWait', this.num)
            },
        },
        mounted() {
            // console.log('Count', this)
            const x = mapState({
                sum: 'sum',
                school: 'school',
                subject: 'subject'
            })
            console.log(x);
        }
    }
</script>

<style scoped>
    button {
        margin-left: 10px;
    }
</style>