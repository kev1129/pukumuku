<template>
  <div class="card-set">
    <base-cardbody></base-cardbody>
    <base-cardlabel class="card-label"></base-cardlabel>
  </div>
</template>

<script>
import BaseCardbody from './BaseCardbody.vue'
import BaseCardlabel from './BaseCardlabel.vue'
export default {
  name: 'BaseCardset',
  components: {
      BaseCardbody,
      BaseCardlabel
  }
}
</script>

<style lang="scss" scoped>
.card-set {
  position: relative;
  max-width: 260px;
  margin-top: 30px;

    .card-label {
      position: absolute;
      top: -30px;
      left: 35%;
  }
}
</style>
