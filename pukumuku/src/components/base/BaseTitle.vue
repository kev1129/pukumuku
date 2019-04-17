<template>
  <h1 class="base-title">{{getting_title}}</h1>
</template>
<script>
export default {
  name: 'BaseTitle',
  props: {
    getting_title: String
  }
}
</script>

<style lang="scss" scoped>
.base-title {
  color: #000;
  font-size: 3.2rem;
  font-weight: bold;
  letter-spacing: 1px;
}
</style>
