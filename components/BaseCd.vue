<template>
  <v-card>
    <v-img
      :src="url"
      aspect-ratio="1"
    >
    </v-img>
    <v-card-title>
      <div>
        <h3 class="cd_title">{{ cdTitle }}</h3>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  props: {
    cdTitle: String,
    cdUrl: String
  },
  computed: {
    url: function () {
      return require(cdUrl);
    }
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
