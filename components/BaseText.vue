<template>
    <h1 class="string">{{ text }}</h1>
</template>

<script>
export default {
    props: {
        text: String
    }
}
</script>

<style lang="scss" scoped>
.string {
    display: inline-block;
    text-align: center;
    font-size: 1.6rem;
}
</style>
