<template>
  <v-card>
    <v-img
      :src="cdUrl"
      aspect-ratio="1"
      class="cd"
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
@media only screen and (max-width: 1264px) {
  .cd {
    text-align: center;
    margin: 0 auto;
  }
}

</style>
