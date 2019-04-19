<template>
  <v-card
    width=300
    tile
    class="card"
  >
    <v-img
      :src="url"
      aspect-ratio="1"
    ></v-img>
    <v-card-title class="card_text">
      <div>
        <h3 class="title">じゃがいも</h3>
        <div class="price">¥400</div>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  props: {
    title: String,
    url: String,
    price: String
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
