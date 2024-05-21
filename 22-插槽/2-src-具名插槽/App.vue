<template>
    <div class="container">
        <Category title="美食">
            <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
            <a slot="footer" href="https://dict.youdao.com/result?word=container&lang=en">更多美食</a>
        </Category>
        
        <Category title="游戏">
            <ul slot="center">
                <li v-for="(game, index) in games" :key="index">{{ game }}</li>
            </ul>

            <div class="foot" slot="footer">
                <a href="https://dict.youdao.com/result?word=container&lang=en">单机游戏</a>
                <a href="https://dict.youdao.com/result?word=container&lang=en">网络游戏</a>
            </div>
        </Category>

        <Category title="电影">
            <video slot="center" controls src="https://prod-streaming-video-msn-com.akamaized.net/a8c412fa-f696-4ff2-9c76-e8ed9cdffe0f/604a87fc-e7bc-463e-8d56-cde7e661d690.mp4"></video>

            <template v-slot:footer>
                <div class="foot">
                    <a href="https://dict.youdao.com/result?word=container&lang=en">经典</a>
                    <a href="https://dict.youdao.com/result?word=container&lang=en">热门</a>
                    <a href="https://dict.youdao.com/result?word=container&lang=en">推荐</a>
                </div>

                <h4>欢迎前来观看</h4>
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