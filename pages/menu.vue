<template>
  <v-app>
    <tool-bar></tool-bar>
    <v-content>
      <v-container>
        <v-layout>
          <v-flex>
            <base-tab
              v-for="item in tabs"
              :key="item.id"
              :tab-title="item.title"
              :tab-id="item.id"
              v-model="currentId"
              class="tabs"
            ></base-tab>
          </v-flex>
        </v-layout>
        <div class="content">
          <v-layout align-center justify-center row>
            <v-flex
              v-for="(item, index) in menuRanking"
              :key="index"
            >
              <base-bread
                :bread-name="item.name"
                :bread-price="item.price"
                :bread-url="item.url"
              ></base-bread>
            </v-flex>
          </v-layout>
        </div>
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
  computed: {
    current() {
      return this.tabs.find(el => el.id === this.currentId) || {}
    }
  },
  asyncData({ env }) {
    return { menuRanking: env.menuRanking }
  },

}
</script>
