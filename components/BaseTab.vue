<template>
<div>
    <v-btn
      @click="$emit('input', id)"
      class="btn"
    >
      {{ label }}
    </v-btn>
</div>
</template>

<script>
export default {
  props: {
    label: String,
    id: Number
  }
}
</script>

<style lang="scss" scoped>
.btn {
  display: inline-block;
}
</style>