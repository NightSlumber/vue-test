<template>
    <div class="container">
        <Category title="游戏">
            <template scope="{games}">
                <!-- {{ data.games }} -->
                <ul>
                    <li v-for="(game, index) in games" :key="index">{{ game }}</li>
                </ul>
            </template>
        </Category>
        
        <Category title="游戏">
            <template scope="data">
                <ol>
                    <li style="color: blueviolet" v-for="(game, index) in data.games" :key="index">{{ game }}</li>
                </ol>
                <h4>{{ data.msg }}</h4>
            </template>
        </Category>

        <Category title="游戏">
            <template scope="{games}">
                <h4 v-for="(game, index) in games" :key="index">{{ game }}</h4>
            </template>
        </Category>
    </div>
</template>

<script>
    import Category from './components/Category.vue'

    export default {
        name: 'App',
        components: {
            Category
        },
    }
</script>

<style scoped>
    .container, .foot {
        display: flex;
        justify-content: space-around;
    }

    img {
        width: 100%;
    }

    video {
        width: 100%;
    }

    h4 {
        text-align: center;
    }
</style>