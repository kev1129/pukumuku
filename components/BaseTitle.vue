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
  font-size: 3.2rem;
  color: #fff;
  background: #000;
  padding-left: 24px;
}
@media only screen and (max-width: 1264px) {
  .base_title {
    text-align: center;
    padding-left: 0;
    padding-top: 16px;
    padding-bottom: 16px;
  }
}

</style>
