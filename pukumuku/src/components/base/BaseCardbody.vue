<template>
<!-- カード本体 -->
  <v-card class="card">
    <v-img
      v-bind:src="image_url"
      aspect-ratio="1"
      class="card__image"
    >
    </v-img>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{ card_title }}</h3>
        <div> {{ card_text }} </div>
      </div>
    </v-card-title>
  </v-card>
</template>
<script>
export default {
  name: 'BaseCard',
  props: {
    card_title: String,
    card_test: String,
    image_url: String
  }
}
</script>

<style lang="scss" scoped>
.card {
  border-radius: 50px;
  transition: all 0.3s;
  max-width: 260px;
}
.card:hover {
  opacity: 0.6;
  transition: all 0.3s;
}
</style>
