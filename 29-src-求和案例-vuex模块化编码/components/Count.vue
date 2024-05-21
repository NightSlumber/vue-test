<template>
    <div>
        <h1>当前求和为：{{ sum }}</h1>
        <h3>当前求和放大10倍为：{{ bigSum }}</h3>
        <h3>我在{{ school }}，学习{{ subject }}</h3>
        <h3 style="color: blueviolet">Person组件的总人数是：{{ personList.length }}</h3>
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
            ...mapState('sumAbout', ['sum', 'school', 'subject']),
            ...mapState('personAbout', ['personList']),

            ...mapGetters('sumAbout', ['bigSum'])
        },
        methods: {
            ...mapMutations('sumAbout', ['PLUS', 'SUB']),
            ...mapActions('sumAbout', ['plusOdd', 'plusWait'])
        },
        mounted() {
            
        }
    }
</script>

<style scoped>
    button {
        margin-left: 10px;
    }
</style>