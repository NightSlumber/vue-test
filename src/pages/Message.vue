<template>
    <div>
        <ul>
            <li v-for="m in messageList" :key="m.id">
                <!-- 1. 跳转路由 并 携带params参数，to的字符串写法 -->
                <!-- <router-link :to="`/home/message/detail/${ m.id }/${ m.title }`">{{ m.title }}</router-link>&nbsp;&nbsp; -->

                <!-- 2. 跳转路由 并 携带query参数，to的对象写法 -->
                <!-- <router-link :to="{
                    name: '_detail',
                    query: {
                        id: m.id,
                        title: m.title
                    }
                }">
                    {{ m.title }}
                </router-link> -->

                <!-- 3. 跳转路由 并 携带params参数，to的对象写法 -->
                <router-link :to="{
                    name: '_detail',
                    params: {
                        id: m.id,
                        title: m.title
                    }
                }">
                    {{ m.title }}
                </router-link>
            </li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'Message',
        data() {
            return {
                messageList: [
                    {
                        id: '001',
                        title: '消息001'
                    },
                    {
                        id: '002',
                        title: '消息002'
                    },
                    {
                        id: '003',
                        title: '消息003'
                    }
                ]
            }
        }
    }
</script>