<template>
<div>
  <v-container fluid class="container" id="top">
    <!-- mobile navigation -->
    <div class="nav">
        <v-layout align-end justify-end>
          <v-flex hidden-lg-and-up>
            <mobile-nav></mobile-nav>
          </v-flex>
        </v-layout>
    </div>
    <!-- menu -->
    <div class="section top">
      <base-pagetitle :title="title"></base-pagetitle>
      <v-container fluid grid-list-md>
        <v-layout align-start row wrap>
          <v-flex xs12 sm12 md6 lg6 class="top_head">
              <v-img
                :src="titleImage"
                contain
                class="top__img_title"
              ></v-img>
              <base-subtitle
                :sub-title="storeName"
                class="top__title"
              ></base-subtitle>
              <p class="top__text">中野区南台の胃袋を支えるパン屋『パン工房 プクムク』です。<br>平日は毎日朝の6時半～18時までやってます。パンが無くなり次第終了です。</p>
              <p class="top__text">天然酵母と麹菌を使った「酵母パン」を初めに、「ししゃもぱん」、幻の「納豆サンド」...。日々可能性を探ってます。<br>
                それでも人気No.1は、ぎっしりクリームの詰まった「クリームパン」。</p>
              <span class="top__text">パンへの愛を歌う『プクムクズ』というバンドをやっているので、聴いてみてください。</span>
          </v-flex>
          <v-flex xs12 sm12 md6 lg6>
            <v-img
              :src="storeImage"
              contain
              class="top__img_store"
            ></v-img>
            <p class="top__img_store_text">in お店の写真 (by サトル)</p>
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
      <v-container fluid grid-list-xl>
        <!-- <base-text :text="menuText"></base-text> -->
        <div class="menu__list">
          <v-layout align-start row wrap>
            <v-flex
              v-for="(item, index) in menu"
              :key="index"
              xs6 sm4 md4 lg3
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
          <v-flex xs8 sm6 md6 lg3>
            <base-induce v-bind="menuInduce"></base-induce>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <!-- music -->
    <div class="section music">
      <base-title class="section_title" :title="musicTitle"></base-title>
      <v-container fluid grid-list-xl>
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
          <v-flex xs8 sm6 md6 lg3>
            <base-induce v-bind="musicInduce"></base-induce>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <!-- infomation -->
    <div class="section infomation">
      <base-title class="section_title" :title="infoTitle"></base-title>
      <v-container fluid class="container">
        <div class="section infomation">
          <div class="map">
            <base-subtitle :sub-title="map"></base-subtitle>
            <base-text :text="mapText"></base-text>
            <v-layout v-resize="onResize" align-center justify-center>
              <v-flex xs12 sm12 md12 lg12>
                <base-map :map-width="windowSize.x" :map-height="windowSize.y"></base-map>
              </v-flex>
            </v-layout>
          </div>
          <div class="infomation">
            <v-container grid-list-md>
              <v-layout align-start row wrap>
                <v-flex xs12 sm12 md12 lg7>
                  <base-subtitle :sub-title="store" class="infomation__sub_title"></base-subtitle>
                  <base-info></base-info>
                </v-flex>                
                <!-- <v-flex xs12 sm12 md12 lg5>
                  <base-subtitle :sub-title="instagram" class="infomation__sub_title"></base-subtitle>
                  <base-instagram></base-instagram>
                </v-flex> -->
              </v-layout>
            </v-container>
          </div>
        </div>
      </v-container>
    </div>
    <!-- mobile bottom navigation -->
    <div class="button_nav">
        <v-layout align-center justify-center column>
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
    BaseTotop
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
      storeName: '❞パン工房 プクムク❞',
      storeDescription1: '',
      storeDescription2: '',
      storeDescription3: '',
      isRed: true,
      menuTitle: 'MENU',
      menuText: '',
      menuInduce: {text: 'メニュー&アレルギー', link: 'menu'},
      musicTitle: 'MUSIC',
      musicText: '南台の伝説のバンド「プクムクズ」。バンドメンバーは店主とその友達、お客さんといった愉快なおじさん達。パン祭りに良く出没する。',
      musicInduce: 'プクムクズを聴く',
      musicInduce: {text: 'プクムクズを聴く', link: 'music'},
      cdArtist: '❞プクムクズ❞',
      cdTitle: 'きみとぱん プクムクのテーマ',
      cdUrl: 'img/cd/cd1.jpg',
      infoTitle: 'INFTOMATION',
      map: 'MAP',
      mapText: '最寄り駅は「笹塚駅」「中野富士見町」「中野駅」。中野からバスで「新山小学校前」。笹塚から徒歩で15分程。',
      store: '店舗情報',
      instagram: 'お知らせ',
      infoText: 'メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。',
      // infoInduce: {text: 'お知らせはこちら', link: 'info'},
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
.nav {
  display: block;
}
// top section
.top {
  .top_head {
    margin-bottom: 24px;
    .top__img_title {
      margin-bottom: 24px;
    }
    .top__title {
      margin-bottom: 8px;
    }
    .top__text {
      font-family: 'Sawarabi Gothic';
      font-size: 1.1rem;
      letter-spacing: 0;
      margin-bottom: 8px;
    }
  }
  .top__img_store {
    margin-bottom: 4px;
    .top__img_store_text {
      opacity: .7;
    }
  }
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
    margin-bottom: 80px;
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
