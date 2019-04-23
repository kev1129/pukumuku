<template>
  <v-card>
    <v-img
      :src="noticeUrl"
      aspect-ratio="1"
    ></v-img>
  </v-card>
</template>

<script>
export default {
  props: {
    noticeUrl: String
  }
}
</script>