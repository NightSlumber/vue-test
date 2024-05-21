<template>
    <div class="container">
        <Category title="美食">
            <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
        </Category>
        
        <Category title="游戏">
            <ul>
                <li v-for="(game, index) in games" :key="index">{{ game }}</li>
            </ul>
        </Category>

        <Category title="电影">
            <video controls src="https://prod-streaming-video-msn-com.akamaized.net/a8c412fa-f696-4ff2-9c76-e8ed9cdffe0f/604a87fc-e7bc-463e-8d56-cde7e661d690.mp4"></video>
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
        data() {
            return {
                foods: ['火锅', '烧烤', '小龙虾'],
                games: ['红色警戒', '穿越火线', '劲舞团'],
                films: ['《教父》', '《拆弹专家》', '《你好，李焕英》']
            }
        }
    }
</script>

<style>
    .container {
        display: flex;
        justify-content: space-around;
    }

    img {
        width: 100%;
    }

    video {
        width: 100%;
    }
</style>