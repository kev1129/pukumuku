<template>
  <v-card>
    <v-img
      :src="cdUrl"
      aspect-ratio="1"
    >
    </v-img>
  </v-card>
</template>

<script>
export default {
  props: {
    cdUrl: String
  }
}
</script>

<style lang="scss" scoped>
.cd_title {
  font-size: 1.8rem;
  margin: auto;
  text-align: center;
}
</style>
