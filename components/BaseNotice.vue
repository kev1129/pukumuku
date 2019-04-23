<template>
  <v-card>
    <v-img
      :src="image"
      aspect-ratio="1"
    ></v-img>
  </v-card>
</template>

<script>
export default {
  props: {
    noticeImage: String
  },
  data () {
    return {
      image: require(this.noticeImage)
    }
  }
}
</script>