<template>
  <v-app>
    <tool-bar></tool-bar>
    <v-content>
      <base-tab
        v-for="(item, index) in tabs"
        :key="index"
        :tab-title="item.title"
        :tab-id="item.id"
      ></base-tab>
      <v-container>
        <!-- genre 1 -->
        <v-layout v-if="currentId == '1'" align-center justify-center row wrap>
          <v-flex
            v-for="(item, index) in menuRanking"
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
        <!-- genre 2 -->
        <v-layout v-if="currentId == '3'" align-center justify-center row wrap>
          <v-flex
            v-for="(item, index) in menuRanking"
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
        <!-- genre 3 -->
        <v-layout v-if="currentId == '2'" align-center justify-center row wrap>
          <v-flex
            v-for="(item, index) in menuRanking"
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
        <!-- genre 4 -->
        <v-layout v-if="currentId == '4'" align-center justify-center row wrap>
          <v-flex
            v-for="(item, index) in menuRanking"
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
        <!-- genre 5 -->
        <v-layout v-if="currentId == '5'" align-center justify-center row wrap>
          <v-flex
            v-for="(item, index) in menuRanking"
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
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import ToolBar from '~/components/ToolBar.vue'
import BaseTab from '~/components/BaseTab.vue'
import BaseBread from '~/components/BaseBread.vue'
export default {
  components: {
    ToolBar,
    BaseBread,
    BaseTab
  },
  data () {
    return {
      currentId: 1,
      tabs: [
        {id: 1, title: 'ランキング'},
        {id: 2, title: 'そうざいぱん'},
        {id: 3, title: 'かしぱん'},
        {id: 4, title: '他のぱん'},
        {id: 5, title: 'アレルギー'}
      ]
    }
  },
  // computed: {
  //   current() {
  //     return this.tabs.find(el => el.id === this.currentId) || {}
  //   }
  // },
  asyncData({ env }) {
    return {
      menuRanking: env.menuRanking,
      menu: env.menu,
      menuNothing: env.menuNothing,
      menuEgg: env.menuEgg,
      menuMilk: env.menuMilk,
      menuPeanuts: env.menuPeanuts,
      menuWalnat: env.menuWalnat
    }
  }
}
</script>
