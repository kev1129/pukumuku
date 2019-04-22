<template>
  <v-tabs fixed-tabs>
    <v-tab
      v-for="(item, index) in genres"
      :key="index"
    >
      {{ item }}
    </v-tab>
  </v-tabs>
</template>

<script>
export default {
  data () {
    return {
      genres: ["そうざいぱん", "かしぱん", "ほかのぱん", "アレルギー"]
    }
  }
}
</script>
