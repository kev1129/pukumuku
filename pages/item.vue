<template>
  <v-app>
    <tool-bar></tool-bar>
    <v-content>
      <v-container>
        <v-layout align-center justify-center row>
          <v-flex
            v-for="(item, index) in cds"
            :key="index"
          >
            <base-cd 
              :cd-url="item.url"
              :cd-title="item.title"
            ></base-cd>
            <base-music></base-music>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import ToolBar from '~/components/ToolBar.vue'
import BaseCd from '~/components/BaseCd.vue'
import BaseMusic from '~/components/BaseMusic.vue'
export default {
  components: {
    ToolBar,
    BaseCd,
    BaseMusic
  },
  asyncData({ env }) {
    return { cds: env.cds }
  },
}
</script>
