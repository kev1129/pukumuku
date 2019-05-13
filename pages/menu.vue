<template>
  <v-container fluid class="container">
    <div class="section menu">
      <base-title class="section_title" :title="menuTitle"></base-title>
      <div class="menu__list">
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
      </div>
      <div class="menu__color">
      <base-title class="section_title" :title="colorMenu"></base-title>
        <p class="menu__text">時間や季節によっては、ないメニューもあります。<br>このメニュー表はお店でも配っています。</p>
        <v-layout>
          <v-flex>
            <v-img src="img/menu-color.jpg" cover></v-img>
          </v-flex>
        </v-layout>
      </div>
      <div class="menu__allergy">
      <base-title class="section_title" :title="allergy"></base-title>
        <p class="menu__text">アレルギーに関する情報です。<br>ご不明な店がございましたら、お気軽にお電話下さい。(03-3380-8679)</p>
        <v-layout>
          <v-flex>
            <v-img src="img/menu-color.jpg" cover></v-img>
          </v-flex>
        </v-layout>
      </div>
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
      colorMenu: 'ALL MENU',
      allergy: 'Allergy',
      specialMenu: [
        { name : "酵母パン", price : "360", url: "img/bread/kouzi.jpg", text: '天然酵母で発酵。なんと麹菌も使っている！素朴で濃厚で独特な風味。'},
        { name : "わんちゃんぱん", price : "50", url: "img/bread/inu.jpg", text: '「犬にぱんを食べさせたい」という声から生まれたぱん。無塩です。'}
      ],
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
.menu__list,
.menu__color,
.menu__allergy {
  margin-bottom: 64px;
}
.menu__sub_title {
  margin-bottom: 16px;
}
.menu__text {
  font-family: 'Sawarabi Gothic';
  font-size: 1.1rem;
  letter-spacing: 0;
  margin-bottom: 0px;
}
</style>
