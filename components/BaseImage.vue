<template>
  <v-card>
    <v-img
      :src="imageUrl"
      aspect-ratio="1"
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