<template>
  <v-card
    width=300
    tile
    class="card"
  >
    <v-img
      :src="breadUrl"
      aspect-ratio="1.0"
    ></v-img>
    <v-card-title class="card_text">
      <div>
        <h3 class="title">{{ breadName }}</h3>
        <div class="price">¥{{ breadPrice }}</div>
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
  border-radius: 50px;
  text-align: center;
  .card_text {
    display: block;
    text-align: center;
    // padding: 0;
  .title {
    font-size: 1.6rem;
    font-weight: bold;
    letter-spacing: 0.15rem;
  }
  .price {
    font-size: 1.4rem;
    color: red;
    font-weight: bold;
    padding: 0;
    margin: 0;
  }
  }
}

</style>
