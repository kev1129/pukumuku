<template>
  <v-card>
    <v-img
      :src="image"
      aspect-ratio="0.6"
    ></v-img>
  </v-card>
</template>

<script>
export default {
  props: {
    noticeImage: String
  },
  computed: {
    image: function () {
      return require(noticeImage)
    }
  }
}
</script>