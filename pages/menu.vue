<template>
  <v-app>
    <tool-bar></tool-bar>
    <v-content>
      <v-container>
        <base-selectmenu></base-selectmenu>
        <v-layout align-center justify-center row>
          <v-flex
            v-for="(item, index) in menu"
            :key="index"
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
import BaseSelectmenu from '~/components/BaseSelectmenu.vue'
import BaseBread from '~/components/BaseBread.vue'
export default {
  components: {
    ToolBar,
    BaseBread,
    BaseSelectmenu
  },
  asyncData({ env }) {
    return { menu: env.menu }
  },

}
</script>
