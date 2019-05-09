<template>
  <v-container class="container">
    <div class="section menu">
      <base-title class="section_title" :title="menuTitle"></base-title>
      <v-container grid-list-xl>
        <v-layout align-start row wrap>
          <v-flex
            v-for="(item, index) in menu"
            :key="index"
            xs6 sm4 md3 lg3
          >
            <base-menu
              :bread-name="item.name"
              :bread-price="item.price"
              :bread-url="item.url"
            ></base-menu>
          </v-flex>
        </v-layout>
      </v-container>
      <v-img src="img/menu-color.jpg" cover></v-img>
      <!-- <v-container grid-list-xl>
        <v-layout align-start row wrap>
          <v-flex
            v-for="(item, index) in specialMenu"
            :key="index"
            xs6 sm6 md6 lg6
          >
            <v-img :src="item.url" contain></v-img>
            <h2>{{item.name}}</h2>
            <base-text :text="item.text"></base-text>
          </v-flex>
        </v-layout>
      </v-container> -->
    </div>
  </v-container>
</template>

<script>
import BaseTitle from '~/components/BaseTitle.vue'
import BaseSubtitle from '~/components/BaseSubtitle.vue'
import BaseText from '~/components/BaseText.vue'
import BaseMenu from '~/components/BaseMenu.vue'

export default {
  components: {
    BaseTitle,
    BaseSubtitle,
    BaseText,
    BaseMenu
  },
  data () {
    return {
      menuTitle: 'MENU',
      specialMenu: [
        { name : "酵母パン", price : "360", url: "img/bread/koubo.jpg", text: '天然酵母で発酵。なんと麹菌も使っている！素朴で濃厚で独特な香は一度食べないと損！'},
        { name : "クリーム", price : "120", url: "img/bread/koubo.jpg", text: '濃厚なキャラメル風味のクリームがたっぷり詰まったぱん。¥120でこれはお得！'}
      ]
    }
  },
  computed: {
    menu() {
      return this.menuMain
    }
  },
  asyncData({ env }) {
    return {
      menuMain: env.menuMain,
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding-top: 0;
}
</style>
