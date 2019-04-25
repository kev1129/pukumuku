<template>
  <div class="example">
    <div class="tabs">
      <TabItem
        v-for="item in list"
        v-bind="item" :key="item.id"
        v-model="currentId"/>
    </div>
    <div class="contents">
        <div v-for="(item, index) in current" :key="index">
          {{ item.name }}
          {{ item.price }}
          {{ item.url }}
        </div>
    </div>
  </div>
</template>

<script>
import TabItem from '~/components/TabItem.vue'
export default {
  components: { TabItem },
  data() {
    return {
      currentId: 1,
      list: [
        { id: 1, label: 'そうざいぱん', content: 'コンテンツ1' },
        { id: 2, label: 'かしぱん', content: 'コンテンツ2' },
        { id: 3, label: '食パンなど', content: 'コンテンツ3' },
        // { id: 4, label: 'アレルギー', content: 'コンテンツ3' }
      ]
    }
  },
  computed: {
    current() {
      return this.menu.filter(el => el.genre == this.currentId) || {}
    }
  },
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

<style scoped>
.contents {
  position: relative;
  overflow: hidden;
  width: 280px;
  border: 2px solid #000;
}
.item {
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  transition: all 0.8s ease;
}
/* トランジション用スタイル */
.v-leave-active {
  position: absolute;
}
.v-enter {
  transform: translateX(-100%);
}
.v-leave-to {
  transform: translateX(100%);
}
</style>