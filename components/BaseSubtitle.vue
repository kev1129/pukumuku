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
    display: block;
    text-align: center;
    font-size: 2.4rem;
    margin-bottom: 32px;
}
</style>
