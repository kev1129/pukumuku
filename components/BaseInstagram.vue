<template>
  <div class="instagram">
    <v-container grid-list-xs>
    <v-layout align-center justify-center column>
      <v-flex xs12 sm12 md12 lg12>
        <a href="https://www.instagram.com/pankouboupukumuku/" target="_blank">
          <img src="img/instagram.png" class="instagram__img">
        </a>
      </v-flex>
        <a href="https://www.instagram.com/pankouboupukumuku/" target="_blank"><i class="fab fa-instagram"></i> Follow instagram</a>
        <span class="instagram__text">南台のアイドル「純」が毎日のお仕事を配信。</span>
      <v-flex xs12 sm12 md12 lg12>
      </v-flex>
    </v-layout>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
a {
  font-size: 1.4rem;
  color: #000;
  // font-weight: bold;
  text-align: center;
  text-decoration: none;
  margin-bottom: 4px;
}
a:hover {
  opacity: .4;
}
.instagram__img {
  max-width: 120px;
}

</style>
