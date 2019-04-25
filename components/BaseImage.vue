<template>
  <v-card class="img">
    <v-img
      :src="imageUrl"
      aspect-ratio="0.75"
    ></v-img>
  </v-card>
</template>

<script>
export default {
  props: {
    imageUrl: String
  }
}
</script>

<style lang="scss" scoped>
.img {
 padding: 0;
 margin: 0;
}
</style>
