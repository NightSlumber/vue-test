<template>
    <div class="category">
        <h3>{{ title }}分类</h3>
        <slot name="center">出错了1</slot>
        <slot name="footer">出错了2</slot>
    </div>
</template>

<script>
    export default {
        name: 'Category',
        props: ['title']
    }
</script>

<style scoped>
    .category {
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }

    h3 {
        text-align: center;
        background-color: orange
    }
</style>