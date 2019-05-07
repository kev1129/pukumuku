<template>
  <v-tabs fixed-tabs>
    <v-tab
      @click="$emit('input', id)"
      class="btn"
    >
      {{ label }}
    </v-tab>
  </v-tabs>
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