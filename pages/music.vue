<template>
  <v-container class="container">
    <div class="section artist">
      <base-title class="section_title" :title="articsTitle"></base-title>
      <v-container grid-list-xl>
        <v-layout align-start justify-end reverse row wrap>
          <v-flex xs12 sm12 md6 lg6>
            <base-subtitle :sub-title="artist"></base-subtitle>
            <p class="music__text">南台の伝説のバンド「<span class="font_red">プクムクズ</span>」(Pukumuku's)。<br>ボーカルは店主サトル。バンドメンバーにはサトルの友達と、お客さんを巻き込んでいる。パン祭りに良く出没する。<br>パンと愛の歌しか歌わない。</p>
          </v-flex>
          <v-flex xs12 sm12 md6 lg6>
            <v-img src="img/band.jpg" aspect-ratio="1.5"></v-img>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <div class="section cd">
      <base-title class="section_title" :title="cdTitle"></base-title>
      <p class="music__text">お店でCDを販売しています。一枚¥500です。</p>
      <p class="music__text">※音量に注意してご視聴ください。</p>
      <v-container grid-list-xl>
        <v-layout align-start row wrap>
          <v-flex
            v-for="(item, index) in cd"
            :key="index"
            xs12 sm6 md5 lg5
          >
            <base-subtitle :sub-title="item.title" :class="{ font_center: true }"></base-subtitle>
            <base-cd 
              :cd-url="item.url"
            ></base-cd>
            <base-music
              :file="item.music"
            ></base-music>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </v-container>
</template>

<script>
import BaseTitle from '~/components/BaseTitle.vue'
import BaseText from '~/components/BaseText.vue'
import BaseSubtitle from '~/components/BaseSubtitle.vue'
import BaseCd from '~/components/BaseCd.vue'
import BaseMusic from '~/components/BaseMusic.vue'

export default {
  components: {
    BaseTitle,
    BaseText,
    BaseSubtitle,
    BaseCd,
    BaseMusic
  },
  data () {
    return {
      articsTitle: 'PUKUMUKU’s',
      cdTitle: 'CD',
      artist: '❞プクムクズ❞'
    }
  },
  computed: {
    cd() {
      return this.cds;
    }
  },
  asyncData({ env }) {
    return { cds: env.cds }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding-top: 0;
}
.section {
  margin-bottom: 32px;
}
.artist {
  .music__text {
    font-family: 'Sawarabi Gothic';
    font-size: 1.1rem;
    letter-spacing: 0;
    .font_red {
      color: rgba(255, 69, 0, 1);
      font-weight: bold;
      font-size: 1.3rem;
    }
  }
}
</style>
