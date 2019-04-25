<template>
    <h1 class="string">{{ title }}</h1>
</template>

<script>
export default {
    props: {
        title: String
    }
}
</script>

<style lang="scss" scoped>
.string {
    display: block;
    text-align: center;
    font-size: 3.2rem;
}
</style>
