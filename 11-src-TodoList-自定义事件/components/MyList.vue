<template>
    <ul class="todo-main">
        <!--
            这边使用了 MyItem 这个组件，MyItem 中 data 配置项中的数据是写死的，而在使用这个组件上自己写属性，配置项写props，那么就可以把动态的数据传过去了。
        -->
        <MyItem
            v-for="todoObj in todos"
            :key="todoObj.id"
            :todo="todoObj"
            :checkTodo="checkTodo"
            :deleteTodo="deleteTodo"
        />
    </ul>
</template>

<script>
    import MyItem from './MyItem.vue'

    export default {
        name: 'MyList',
        components: {
            MyItem
        },
        props: ['todos', 'checkTodo', 'deleteTodo']
    }
</script>

<style scoped>
    /*main*/
    .todo-main {
        margin-left: 0px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding: 0px;
    }

    .todo-empty {
        height: 40px;
        line-height: 40px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding-left: 5px;
        margin-top: 10px;
    }
</style>