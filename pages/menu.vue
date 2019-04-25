<template>
  <v-app>
    <tool-bar></tool-bar>
    <base-title :title="title"></base-title>
    <base-tab
      v-for="item in tabs"
      :key="item.id"
      v-bind="item"
      v-model="currentId"
    ></base-tab>
    <v-content>
      <v-container>
        <v-layout align-center justify-center row wrap>
          <v-flex
            v-for="(item, index) in current"
            :key="index"
            xs4
          >
            <base-bread
              :bread-name="item.name"
              :bread-price="item.price"
              :bread-url="item.url"
            ></base-bread>
          </v-flex>
        </v-layout>
        <!-- allergy -->
        <v-layout v-if="currentId === 4" align-center justify-center row wrap>
        <h2>卵・牛乳不使用</h2>
          <v-flex
            v-for="(item, index) in nothing"
            :key="index"
            xs4
          >
            <base-bread
              :bread-name="item.name"
              :bread-price="item.price"
              :bread-url="item.url"
            ></base-bread>
          </v-flex>
          <h2>牛乳使用</h2>
          <v-flex
            v-for="(item, index) in milk"
            :key="index"
            xs4
          >
            <base-bread
              :bread-name="item.name"
              :bread-price="item.price"
              :bread-url="item.url"
            ></base-bread>
          </v-flex>
          <h2>卵使用</h2>
          <v-flex
            v-for="(item, index) in egg"
            :key="index"
            xs4
          >
            <base-bread
              :bread-name="item.name"
              :bread-price="item.price"
              :bread-url="item.url"
            ></base-bread>
          </v-flex>
          <h2></h2>
          <v-flex
            v-for="(item, index) in nothing"
            :key="index"
            xs4
          >
            <base-bread
              :bread-name="item.name"
              :bread-price="item.price"
              :bread-url="item.url"
            ></base-bread>
          </v-flex>
          <h2>ピーナッツ使用</h2>
          <v-flex
            v-for="(item, index) in peanuts"
            :key="index"
            xs4
          >
            <base-bread
              :bread-name="item.name"
              :bread-price="item.price"
              :bread-url="item.url"
            ></base-bread>
          </v-flex>
          <h2>バナナ使用</h2>
          <v-flex
            v-for="(item, index) in banana"
            :key="index"
            xs4
          >
            <base-bread
              :bread-name="item.name"
              :bread-price="item.price"
              :bread-url="item.url"
            ></base-bread>
          </v-flex>
          <h2>クルミ使用</h2>
          <v-flex
            v-for="(item, index) in walnat"
            :key="index"
            xs4
          >
            <base-bread
              :bread-name="item.name"
              :bread-price="item.price"
              :bread-url="item.url"
            ></base-bread>
          </v-flex>
        </v-layout>
        <v-layout v-if="currentId === 5" align-center justify-center row wrap>
        <h2>チラシ</h2>
          <v-flex
            v-for="(item, index) in flyer"
            :key="index"
            xs4
          >
            <base-image :image-url="item.url"></base-image>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import ToolBar from '~/components/ToolBar.vue'
import BaseTab from '~/components/BaseTab.vue'
import BaseBread from '~/components/BaseBread.vue'
import BaseImage from '~/components/BaseImage.vue'
import BaseTitle from '~/components/BaseTitle.vue'
import BaseSubtitle from '~/components/BaseSubtitle.vue'
export default {
  components: {
    ToolBar,
    BaseBread,
    BaseTab,
    BaseImage,
    BaseTitle,
    BaseSubtitle
  },
  data () {
    return {
      currentId: 1,
      title: 'メニュー',
      tabs: [
        {id: 1, label: 'そうざいぱん'},
        {id: 2, label: 'かしぱん'},
        {id: 3, label: 'しょくじぱん'},
        {id: 4, label: 'アレルギー'},
        {id: 5, label: 'チラシ'}
      ]
    }
  },
  computed: {
    current() {
      return this.menu.filter(el => el.genre == this.currentId)
    },
    nothing() {
      return this.menuNothing
    },
    egg() {
      return this.menuEgg
    },
    milk() {
      return this.menuMilk
    },
    peanuts() {
      return this.menuPeanuts
    },
    walnat() {
      return this.menuWalnat
    },
    banana() {
      return this.menuBanana
    },
    flyer() {
      return this.flyer
    }
  },
  asyncData({ env }) {
    return {
      // menuRanking: env.menuRanking,
      menu: env.menu,
      menuNothing: env.menuNothing,
      menuEgg: env.menuEgg,
      menuMilk: env.menuMilk,
      menuPeanuts: env.menuPeanuts,
      menuWalnat: env.menuWalnat,
      menuBanana: env.menuBanana,
      flyer: env.flyer
    }
  }
}
</script>
