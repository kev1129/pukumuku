<template>
  <v-container class="container">
    <!-- menu -->
    <div class="section main">
      <base-pagetitle :title="title"></base-pagetitle>
      <v-container grid-list-xl>
        <v-layout align-start row wrap>
          <v-flex xs12 sm6 md6 lg7>
            <base-subtitle :sub-title="storeName" :class="{ font_red: isRed}"></base-subtitle>
            <p class="main__text">中野区南台の胃袋を支えるパン屋「パン工房 プクムク」です。<br>平日は毎日朝の6時半～18時までやってます。パンが無くなり次第終了です。<br>パンへの愛を歌っている「プクムクズ」というバンドをやっているので、聴いてみてください。</p>
            <v-img :src="titleImage" contain></v-img>
            <v-img :src="junImage" contain></v-img>
          </v-flex>
          <v-flex xs12 sm6 md6 lg5>
            <v-img :src="storeImage" contain></v-img>
            <base-instagram></base-instagram>
          </v-flex>
          <v-layout>
            <v-flex class="instagram">
            </v-flex>
          </v-layout>
        </v-layout>
      </v-container>
    </div>
    <div class="section menu">
      <base-title class="section_title" :title="menuTitle"></base-title>
      <v-container grid-list-xl>
        <base-text :text="menuText"></base-text>
        <div class="menu__list">
          <v-layout align-start row wrap>
            <v-flex
              v-for="(item, index) in menu"
              :key="index"
              xs6 sm6 md4 lg3
            >
              <base-menu
                :bread-name="item.name"
                :bread-price="item.price"
                :bread-url="item.url"
              ></base-menu>
            </v-flex>
          </v-layout>
        </div>
        <v-layout justify-end>
          <v-flex xs4 sm4 md4 lg4>
            <base-induce v-bind="menuInduce"></base-induce>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <!-- music -->
    <div class="section music">
      <base-title class="section_title" :title="musicTitle"></base-title>
      <v-container grid-list-xl>
        <div class="music__cd">
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
        </div>
        <v-layout justify-end>
          <v-flex xs4 sm4 md4 lg4>
            <base-induce v-bind="musicInduce"></base-induce>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <!-- infomation -->
    <div class="section infomation">
      <base-title class="section_title" :title="infoTitle"></base-title>
      <v-container class="container">
        <div class="section infomation">
          <div class="map">
            <v-layout  v-resize="onResize" align-center justify-center>
              <v-flex xs12 sm12 md12 lg12>
                <base-map :map-width="windowSize.x" :map-height="windowSize.y"></base-map>
              </v-flex>
            </v-layout>
          </div>
          <div class="infomation">
            <v-layout align-start>
              <v-flex xs12 sm12 md12 lg8>
                <base-subtitle :sub-title="store"></base-subtitle>
                <base-info></base-info>
              </v-flex>
            </v-layout>
          </div>
        </div>
      </v-container>
    </div>
    <!-- instagram -->
  </v-container>
</template>

<script>
import BasePagetitle from '~/components/BasePagetitle.vue'
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
    BasePagetitle,
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
      title: 'PANKOUBOU PUKUMUKU',
      storeImage: 'img/store.jpg',
      junImage: 'img/instagram-back.jpg',
      titleImage: 'img/title.jpg',
      storeName: 'パン工房 プクムク',
      storeDescription1: '',
      storeDescription2: '',
      storeDescription3: '',
      isRed: true,
      menuTitle: 'MENU',
      menuText: 'メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。',
      menuInduce: {text: 'メニュー&アレルギー', link: 'menu'},
      musicTitle: 'MUSIC',
      musicText: '南台の伝説のバンド「プクムクズ」。バンドメンバーは店主とその友達、お客さんといった愉快なおじさん達。パン祭りに良く出没する。',
      musicInduce: 'プクムクズを聴く',
      musicInduce: {text: 'プクムクズを聴く', link: 'music'},
      cdArtist: '❞プクムクズ❞',
      cdTitle: 'きみとぱん プクムクのテーマ',
      cdUrl: 'img/cd/cd1.jpg',
      infoTitle: 'INFTOMATION',
      store: '店舗情報',
      infoText: 'メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。',
      infoInduce: {text: 'お知らせはこちら', link: 'info'},
    }
  },
  mounted() {
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
.main__text {
  font-family: 'Sawarabi Gothic';
  font-size: 1.1rem;
  letter-spacing: 0;
}
.menu__list {
  margin-bottom: 40px;
}
.music__cd {
  margin-bottom: 40px;
}
.map {
  margin-bottom: 40px;
}
</style>
