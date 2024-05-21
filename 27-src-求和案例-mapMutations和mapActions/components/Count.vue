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
        <button @click="PLUS(num)">+</button>
        <button @click="SUB(num)">-</button>
        <button @click="plusOdd(num)">当前为奇数才+</button>
        <button @click="plusWait(num)">等几秒才+</button>
    </div>
</template>

<script>
    import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

    export default {
        name: 'Count',
        data() {
            return {
                num: 1,
            }
        },
        computed: {
            ...mapState(['sum', 'school', 'subject']),
            ...mapGetters(['bigSum'])
        },
        methods: {
            // increment() {
            //     this.$store.commit('PLUS', this.num)
            // },
            // decrement() {
            //     this.$store.commit('SUB', this.num)
            // },

            // ...mapMutations({
            //     increment: 'PLUS',
            //     decrement: 'SUB'
            // }),

            ...mapMutations(['PLUS', 'SUB']),

            // incrementOdd() {
            //     this.$store.dispatch('plusOdd', this.num)
            // },
            // incrementWait() {
            //     this.$store.dispatch('plusWait', this.num)
            // },

            // ...mapActions({
            //     incrementOdd: 'plusOdd',
            //     incrementWait: 'plusWait'
            // })

            ...mapActions(['plusOdd', 'plusWait'])
        },
        mounted() {
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