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
  font-weight: 1000;
  letter-spacing: 0.15rem;
  font-size: 3rem;
  // text-shadow: 5px 5px 0 #f5f5f5;
  color: #ffff00;
  text-shadow: 5px 5px 0 rgba(0, 0, 0, .4);
  background: #ec1810;
  padding-left: 24px;
  padding-top: 24px;
  // margin-bottom: 32px;
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
