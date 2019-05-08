<template>
  <v-container>
    <base-title class="section_title" :title="menuTitle"></base-title>
  </v-container>
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
      menuTitle: 'MENU',
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
