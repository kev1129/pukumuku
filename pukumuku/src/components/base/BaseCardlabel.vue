<template>
  <div class="label">
    <span class="label-number">
      <!-- {{ label_number }} -->
      No.1
    </span>
  </div>
</template>
<script>
export default {
  name: 'BaseText',
  props: {
    label_number: String
  }
}
</script>

<style lang="scss" scoped>
.label {
    background-color: #000;
    border-radius: 50px;
    padding: 12px;

    .label-number {
      color: #fff;
      font-weight: bold;
      // font-sezeを”2”以上にするとキレイな丸にならなくなる
      font-size: 2rem;
    }
}
</style>
