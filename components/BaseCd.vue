<template>
  <v-card>
    <v-img
      :src="url"
      aspect-ratio="1"
    >
    </v-img>
    <v-card-title>
      <div>
        <h3 class="cd_title">{{ title }}</h3>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  // props: {
  //   title: String,
  //   url: String
  // },
  data () {
    return {
      url: require('../assets/img/cd/cd.jpg'),
      title: 'PUKUMUKUs'
    }
  }
  // asyncData({ env }) {
  //   return { cds: env.cds }
  // }
}
</script>

<style lang="scss" scoped>
// .cd_title {
//   font-size: 1.8rem;
//   margin: auto;
//   text-align: center;
// }
</style>
