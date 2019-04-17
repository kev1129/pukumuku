<template>
  <p class="base-text">{{getting_text}}</p>
</template>
<script>
export default {
  name: 'BaseText',
  props: {
    getting_text: String
  }
}
</script>

<style lang="scss" scoped>
.base-text {
  font-size: 1.6rem;
  letter-spacing: 1px;
}
</style>
