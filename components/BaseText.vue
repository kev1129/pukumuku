<template>
    <p class="text">{{ text }}</p>
</template>

<script>
export default {
    props: {
        text: String
    }
}
</script>

<style lang="scss" scoped>
.text {
    font-family: 'Sawarabi Gothic';
    font-size: 1.1rem;
    letter-spacing: 0;
}
</style>
