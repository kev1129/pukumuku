<template>
    <h1 class="string">{{ subTitle }}</h1>
</template>

<script>
export default {
    props: {
        subTitle: String
    }
}
</script>

<style lang="scss" scoped>
.string {
    font-size: 2.4rem;
}
.font_red {
    color: #ec1810;
}
.font_center {
    text-align: center;
}
</style>
