<template>
  <h1 class="base_title">{{ title }}</h1>
</template>

<script>
export default {
  props: {
      title: String
  }
}
</script>

<style lang="scss" scoped>
.base_title {
  font-family: 'Francois One';
  letter-spacing: .3rem;
  font-size: 4.3rem;
  color: #fff;
  background: #000;
  padding-left: 24px;
  padding-top: 36px;
  margin-bottom: 32px;
  padding-bottom: 12px;
}
@media only screen and (max-width: 1264px) {
  .base_title {
    padding-top: 0;
    text-align: center;
    padding-left: 0;
  }
}
</style>
