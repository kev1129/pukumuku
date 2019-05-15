<template>
  <v-card
    class="card"
    flat
  >
    <v-img
      :src="breadUrl"
      aspect-ratio="1.0"
      cover
      class="card_img"
    ></v-img>
    <v-card-title class="card__text">
      <div>
        <h3 class="card__text_title">{{ breadName }}</h3>
        <div class="card__text_price">¥<span class="card__text_price_big">{{ breadPrice }}</span></div>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  props: {
    breadName: String,
    breadUrl: String,
    breadPrice: String
  }
}
</script>

<style lang="scss" scoped>
.card {
  max-width: 240px;
  border-radius: 0;
  text-align: left;
  .card_img {
    margin-bottom: 12px;
  }
  .card__text {
    padding: 0;
    .card__text_title {
      font-size: 1.3rem;
      font-weight: bold;
      letter-spacing: 0;
    }
    .card__text_price {
      font-size: 1.2rem;
      font-weight: bold;
    }
    .card__text_price_big {
      font-size: 1.8rem;
    }
  }
}

</style>
