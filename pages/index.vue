<template>
<div>
  <v-container fluid class="container" id="top">
    <!-- mobile navigation -->
    <mobile-tool></mobile-tool>
    <!-- top -->
    <div class="section top">
      <base-pagetitle :title="title"></base-pagetitle>
      <base-head></base-head>
    </div>
    <!-- menu -->
    <div class="section menu">
      <base-title class="section_title" :title="menuTitle"></base-title>
      <v-container fluid grid-list-xl>
        <div class="menu__list">
          <v-layout align-center justify-center row wrap>
            <v-flex
              v-for="(item, index) in menu"
              :key="index"
              xs6 sm4 md3 lg2
            >
              <base-menu
                :bread-name="item.name"
                :bread-price="item.price"
                :bread-url="item.url"
              ></base-menu>
            </v-flex>
          </v-layout>
        </div>
        <v-container fluid>
          <v-layout align-center justify-center column wrap>
            <v-flex>
              <base-induce v-bind="menuInduce"></base-induce>
            </v-flex>
          </v-layout>
        </v-container>
      </v-container>
    </div>
    <!-- music -->
    <div class="section music">
      <base-title class="section_title" :title="musicTitle"></base-title>
      <v-container fluid grid-list-xl>
        <div class="music__cd">
          <v-layout align-start justify-center row wrap>
            <v-flex xs10 sm6 md6 lg6>
              <base-cd :cd-url="cdUrl"></base-cd>
            </v-flex>
            <v-flex xs10 sm6 md5 lg5>
              <base-subtitleleft :sub-title="cdArtist"></base-subtitleleft>
              <base-subtitleleft :sub-title="cdTitle" :class="{ font_red: isRed}"></base-subtitleleft>
              <base-text :text="musicText"></base-text>
              <base-text :text="musicText2"></base-text>
            </v-flex>
          </v-layout>
        </div>
        <v-container fluid>
          <v-layout align-center justify-center column wrap>
            <v-flex>
              <base-induce v-bind="musicInduce"></base-induce>
            </v-flex>
          </v-layout>
        </v-container>
      </v-container>
    </div>
    <!-- infomation -->
    <div class="section infomation">
      <base-title class="section_title" :title="map"></base-title>
      <v-container fluid class="container">
        <div class="section infomation">
          <div class="map">
            <v-layout align-center justify-center >
              <v-flex sm9 md12>
              </v-flex>       
            </v-layout>      
            <v-layout v-resize="onResize" align-center justify-center>
              <v-flex xs12 sm12 md12 lg12>
                <base-map :map-width="windowSize.x" :map-height="windowSize.y"></base-map>
              </v-flex>
            </v-layout>
          </div>
          <div class="infomation">
            <base-title class="section_title" :title="store"></base-title>
            <v-container grid-list-md>
              <v-layout align-start justify-start row wrap>
                <v-flex xs12 sm12 md12 lg7>
                  <base-info></base-info>
                </v-flex>                
              </v-layout>
            </v-container>
          </div>
        </div>
      </v-container>
    </div>
    <!-- mobile bottom navigation -->
    <div class="button_nav">
        <v-layout align-center justify-start column>
          <v-flex hidden-lg-and-up>
            <mobile-menu></mobile-menu>
          </v-flex>
          <v-flex>
            <v-layout align-center justify-center column>
              <v-flex>
                <base-totop class="to_top"></base-totop>
              </v-flex>
              <v-flex>
                <span class="copy">© パン工房 プクムク</span>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
    </div>
  </v-container>
</div>
</template>

<script>
import BasePagetitle from '~/components/BasePagetitle.vue'
import BaseTitle from '~/components/BaseTitle.vue'
import BaseSubtitle from '~/components/BaseSubtitle.vue'
import BaseSubtitleleft from '~/components/BaseSubtitleleft.vue'
import BaseText from '~/components/BaseText.vue'
import BaseMenu from '~/components/BaseMenu.vue'
import BaseCd from '~/components/BaseCd.vue'
import BaseInfo from '~/components/BaseInfo.vue'
import BaseMap from '~/components/BaseMap.vue'
import BaseInstagram from '~/components/BaseInstagram.vue'
import BaseInduce from '~/components/BaseInduce.vue'
import MobileNav from '~/components/MobileNav.vue'
import MobileMenu from '~/components/MobileMenu.vue'
import BaseTotop from '~/components/BaseTotop.vue'
import MobileTool from '~/components/MobileTool.vue'
import BaseHead from '~/components/BaseHead.vue'

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
    BaseInduce,
    MobileNav,
    MobileMenu,
    BaseTotop,
    MobileTool,
    BaseSubtitleleft,
    BaseHead
  },
  data () {
    return {
      windowSize: {
        x: 0,
        y: 0,
      },
      title: 'PANKOUBOU PUKUMUKU',
      storeImage: 'img/footer.jpg',
      junImage: 'img/instagram-back.jpg',
      titleImage: 'img/title.jpg',
      storeName: 'パン工房 プクムク',
      storeDescription1: '',
      storeDescription2: '',
      storeDescription3: '',
      isRed: true,
      menuTitle: 'MENU',
      menuText: '',
      menuInduce: {text: 'メニュー&アレルギー', link: 'menu'},
      musicTitle: 'MUSIC',
      musicText: '南台の伝説のバンド「プクムクズ」。ボーカルは店主サトル。バンドメンバーはサトルの友達と、お客さんまで。パン祭りに良く出没します。基本的に、パンの歌しか歌えません。',
      musicText2: 'お店でCD一枚¥500にて販売しております。「プクムクズを聴く」より視聴することが出来ます。',
      musicInduce: 'プクムクズを聴く',
      musicInduce: {text: 'プクムクズを聴く', link: 'music'},
      cdArtist: '❞プクムクズ❞',
      cdTitle: 'きみとぱん プクムクのテーマ',
      cdUrl: 'img/cd/cd1.jpg',
      infoTitle: 'INFTOMATION',
      map: 'MAP',
      mapText: '最寄り駅は「笹塚駅」「中野富士見町」「中野駅」。中野からバスで「新山小学校前」。笹塚から徒歩で15分程。',
      store: 'STORE',
      instagram: 'お知らせ',
    }
  },
  mounted() {
    this.onResize()
  },
  methods: {
    onResize () {
      this.windowSize = { x: window.innerWidth * 0.73, y: window.innerHeight * 0.73}
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
  .section {
    margin-bottom: 72px;
  }
}
// top section
.top {
  margin-bottom: 0;
}
.menu__list {
  margin-bottom: 40px;
}
.music__cd {
  margin-bottom: 40px;
}
.infomation {
  margin-bottom: 0;
  .map {
    margin-bottom: 48px;
  }
}
.copy {
  text-align: center;
}
.to_top {
  margin-bottom: 32px;
}
.infomation__sub_title {
  margin-bottom: 12px;
  // text-align: center;
}
</style>
