<template>
  <v-container>
    <!-- menu -->
    <div class="section menu">
      <base-title class="section_title" :title="menuTitle"></base-title>
      <base-text :text="menuText"></base-text>
      <v-container grid-list-xl>
        <v-layout align-start row wrap>
          <v-flex
            v-for="(item, index) in menu"
            :key="index"
            xs6 sm4 md4 lg4
          >
            <base-menu
              :bread-name="item.name"
              :bread-price="item.price"
              :bread-url="item.url"
            ></base-menu>
          </v-flex>
        </v-layout>
      </v-container>
      <base-induce v-bind="menuInduce"></base-induce>
    </div>
    <!-- music -->
    <div class="section music">
      <base-title class="section_title" :title="musicTitle"></base-title>
      <v-container grid-list-xl>
        <v-layout align-start row wrap>
          <v-flex xs10 sm6 md5 lg5>
            <base-cd :cd-url="cdUrl"></base-cd>
          </v-flex>
          <v-flex xs10 sm6 md5 lg5>
            <base-subtitle :sub-title="cdArtist"></base-subtitle>
            <base-subtitle :sub-title="cdTitle" :class="{ font_red: isRed}"></base-subtitle>
            <base-text :text="musicText"></base-text>
          </v-flex>
        </v-layout>
      </v-container>
      <base-induce v-bind="musicInduce"></base-induce>
    </div>
    <!-- infomation -->
    <div class="section infomation">
      <base-title class="section_title" :title="infoTitle"></base-title>
      <v-container grid-list-xl>
        <v-layout align-center justify-center row wrap>
          <v-flex xs12 sm10 md10 lg6>
            <base-instagram></base-instagram>
          </v-flex>
          <v-flex xs12 sm10 md10 lg6>
            <base-info></base-info>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container>
            <v-layout v-resize="onResize" align-center justify-center>
              <v-flex xs12 sm12 md12 lg12>
                <base-map :map-width="windowSize.x" :map-height="windowSize.y"></base-map>
              </v-flex>
            </v-layout>
      </v-container>
      <base-induce v-bind="infoInduce"></base-induce>
    </div>
  </v-container>
</template>

<script>
import BaseTitle from '~/components/BaseTItle.vue'
import BaseSubtitle from '~/components/BaseSubtitle.vue'
import BaseText from '~/components/BaseText.vue'
import BaseMenu from '~/components/BaseMenu.vue'
import BaseCd from '~/components/BaseCd.vue'
import BaseInfo from '~/components/BaseInfo.vue'
import BaseMap from '~/components/BaseMap.vue'
import BaseInstagram from '~/components/BaseInstagram.vue'
import BaseInduce from '~/components/BaseInduce.vue'


export default {

  components: {
    BaseTitle,
    BaseSubtitle,
    BaseText,
    BaseMenu,
    BaseInfo,
    BaseMap,
    BaseCd,
    BaseInstagram,
    BaseInduce
  },
  data () {
    return {
      windowSize: {
        x: 0,
        y: 0,
      },
      isRed: true,
      menuTitle: 'MENU',
      menuText: 'メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。',
      menuInduce: {text: 'メニュー & アレルギー', link: 'menu'},
      musicTitle: 'MUSIC',
      musicText: '南台の伝説のバンド「プクムクズ」。店主とその友達、お客さんがバンドメンバー。パン祭りに良く出没する。',
      musicInduce: 'プクムクズを聴く',
      musicInduce: {text: 'プクムクズを聴く', link: 'music'},
      cdArtist: '❞プクムクズ❞',
      cdTitle: 'きみとぱん プクムクのテーマ',
      cdUrl: 'img/cd/cd1.jpg',
      infoTitle: 'INFTOMATION',
      infoText: 'メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。',
      infoInduce: {text: 'お知らせはこちら', link: 'info'},
    }
  },
  mounted () {
    this.onResize()
  },
  methods: {
    onResize () {
      this.windowSize = { x: window.innerWidth * 0.7, y: window.innerHeight * 0.7}
    }
  },
  asyncData({ env }) {
    return {
      menu: env.menuTop,
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding-top: 0;
}
</style>
