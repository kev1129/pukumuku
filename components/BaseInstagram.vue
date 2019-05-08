<template>
  <div class="instagram">
    <v-layout align-center justify-center column>
      <v-flex xs12 sm12 md12 lg12>
        <h3 class="instagram__text">最新情報は<span class="instagram__text_emphasis"><a href="https://www.instagram.com/pankouboupukumuku/">instagram</a></span>をCHECK!</h3>
      </v-flex>
      <v-flex xs12 sm12 md12 lg12>
        <a href="https://www.instagram.com/pankouboupukumuku/">
          <img src="img/instagram.png" class="instagram__img">
        </a>
      </v-flex>
    </v-layout>
  </div>
</template>

<style lang="scss" scoped>
.instagram {
  .instagram__text {
    font-size: 1.4rem;
    .instagram__text_emphasis {
      font-size: 2.2rem;
      a {
        text-decoration: none;
        color: rgba(207,46,146, .8);
      }
      a:hover {
        opacity: .4;
      }
    }
  }
  a:hover {
    opacity: .6;
  }
  .instagram__img {
    max-width: 160px;
  }
}
</style>
